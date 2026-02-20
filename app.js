// --------------------
// 4-digit PIN Lock
// --------------------
const PIN = {
  hashKey: "idid.pin.hash",
  unlockedKey: "idid.pin.unlocked"
};

async function sha256(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2,"0")).join("");
}

function pinIsLocked(){
  const hasHash = !!localStorage.getItem(PIN.hashKey);
  const unlocked = sessionStorage.getItem(PIN.unlockedKey) === "1";
  return hasHash && !unlocked;
}
function pinSetUnlocked(v){
  if(v) sessionStorage.setItem(PIN.unlockedKey, "1");
  else sessionStorage.removeItem(PIN.unlockedKey);
}
function pinLockUI(show){
  const el = document.getElementById("lockScreen");
  if(!el) return;
  el.classList.toggle("hidden", !show);
}
function pinMsg(text){
  const el = document.getElementById("lockMsg");
  if(el) el.textContent = text || "";
}
function setLockSub(text){
  const el = document.getElementById("lockSub");
  if(el) el.textContent = text || "";
}

// --------------------
// Utils
// --------------------
const pad2 = (n) => String(n).padStart(2, "0");
const todayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
};
const nowTime = () => {
  const d = new Date();
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
};
const load = (k, fallback) => {
  try { return JSON.parse(localStorage.getItem(k)) ?? fallback; }
  catch { return fallback; }
};
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

const STORAGE = {
  logs: (date) => `idid.logs.${date}`,
  decisions: `idid.decisions`,
  summary: (date) => `idid.summary.${date}`,
};

const STOPWORDS = new Set([
  "그리고","그래서","그냥","오늘","지금","내가","나는","너무","조금","정말",
  "같아","같은","있어","없어","했다","했어","합니다","되다","된다","하는",
  "을","를","은","는","이","가","에","에서","으로","로","과","와","도","만",
  "하다","한","또","좀","더","덜","왜","어떻게","무슨"
]);

function tokenizeKoreanLike(text){
  return text
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .map(t => t.trim())
    .filter(t => t.length >= 2 && !STOPWORDS.has(t));
}

function topKeywords(logs, n=3){
  const freq = new Map();
  for(const l of logs){
    for(const tok of tokenizeKoreanLike(l.text)){
      freq.set(tok, (freq.get(tok) ?? 0) + 1);
    }
  }
  return [...freq.entries()]
    .sort((a,b)=>b[1]-a[1])
    .slice(0,n)
    .map(([w])=>w);
}

function moodFromText(allText){
  const t = allText.toLowerCase();
  const sad = ["짜증","피곤","우울","불안","걱정","아프","힘들","스트레스","화"];
  const good = ["좋","행복","감사","만족","즐겁","신기","기쁘","편안","성공"];
  let score = 0;
  for(const w of good) if(t.includes(w)) score += 1;
  for(const w of sad)  if(t.includes(w)) score -= 1;
  if(score >= 1) return "🙂";
  if(score <= -1) return "😞";
  return "😐";
}

function oneLineSummary(logs){
  if(!logs.length) return "오늘은 기록이 없습니다.";
  // 마지막 2~3개의 기록을 중심으로 한 줄 만들기
  const last = logs.slice(-3).map(l=>l.text.trim()).filter(Boolean);
  const joined = last.join(" / ");
  if(joined.length <= 60) return joined;
  return joined.slice(0, 58) + "…";
}

// --------------------
// View routing
// --------------------
const views = ["home","log","summary","decide"];
function show(view){
  for(const v of views){
    document.getElementById(`view-${v}`).classList.toggle("hidden", v !== view);
    document.querySelector(`.tab[data-view="${v}"]`).classList.toggle("active", v === view);
  }
}

// --------------------
// LOGS
// --------------------
function getTodayLogs(){
  const date = todayKey();
  return load(STORAGE.logs(date), []);
}
function setTodayLogs(logs){
  const date = todayKey();
  save(STORAGE.logs(date), logs);
}

function renderLogs(){
  const logs = getTodayLogs();
  document.getElementById("logCount").textContent = `오늘 기록: ${logs.length}개`;
  const ul = document.getElementById("logList");
  ul.innerHTML = "";
  logs.slice().reverse().forEach((l) => {
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML = `
      <div>
        <div class="time">${l.time}</div>
        <div class="text">${escapeHtml(l.text)}</div>
      </div>
      <button class="x" title="삭제">삭제</button>
    `;
    li.querySelector(".x").addEventListener("click", () => {
      const next = logs.filter(x => x.id !== l.id);
      setTodayLogs(next);
      renderLogs();
    });
    ul.appendChild(li);
  });
}

function escapeHtml(s){
  return s
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

// --------------------
// SUMMARY
// --------------------
function buildSummary(){
  const date = todayKey();
  const logs = getTodayLogs();
  const allText = logs.map(l=>l.text).join(" ");
  const summary = {
    date,
    oneLine: oneLineSummary(logs),
    keywords: topKeywords(logs, 3),
    mood: moodFromText(allText),
    count: logs.length
  };
  save(STORAGE.summary(date), summary);
  return summary;
}

function loadSummary(){
  const date = todayKey();
  return load(STORAGE.summary(date), null);
}

function renderSummary(){
  let s = loadSummary();
  if(!s) s = buildSummary();

  document.getElementById("sumOneLine").textContent = s.oneLine;
  document.getElementById("sumKeywords").textContent = s.keywords.length ? s.keywords.join(", ") : "-";
  document.getElementById("sumMood").textContent = s.count ? s.mood : "-";
  document.getElementById("sumCount").textContent = String(s.count);
}

// --------------------
// DECIDE (simple heuristic)
// --------------------
function decide(question){
  const q = question.trim();
  // 아주 단순한 규칙: 피로/시간/돈 단어 있으면 "쉬기/보류" 쪽, 목표/운동/마감이면 "하기" 쪽
  const low = q.toLowerCase();
  const restSignals = ["피곤","졸","아프","컨디션","시간없","늦","무리","스트레스","힘들","돈","비용"];
  const goSignals   = ["운동","헬스","마감","약속","목표","정리","시작","습관","중요","필요"];
  let score = 0;
  for(const w of goSignals) if(low.includes(w)) score += 1;
  for(const w of restSignals) if(low.includes(w)) score -= 1;

  let suggestion = "지금은 ‘가볍게 진행’이 좋겠습니다.";
  if(score >= 1) suggestion = "지금은 ‘진행하는 쪽’이 더 낫겠습니다.";
  if(score <= -1) suggestion = "지금은 ‘쉬거나 보류하는 쪽’이 더 낫겠습니다.";

  const pros = [];
  const cons = [];

  if(score >= 1){
    pros.push("미루면 남는 찜찜함을 줄일 수 있습니다.");
    pros.push("오늘의 흐름을 타기 좋습니다.");
    cons.push("에너지가 부족하면 지속이 어렵습니다.");
    cons.push("완벽하게 하려다 부담이 생길 수 있습니다.");
  } else if(score <= -1){
    pros.push("컨디션 회복이 우선입니다.");
    pros.push("무리로 인한 역효과를 줄입니다.");
    cons.push("미루면 내일로 부담이 넘어갈 수 있습니다.");
    cons.push("죄책감이 생길 수 있습니다(불필요하지만).");
  } else {
    pros.push("작게 시작하면 심리적 부담이 적습니다.");
    pros.push("상황을 보며 조절할 수 있습니다.");
    cons.push("결론이 애매하게 느껴질 수 있습니다.");
    cons.push("한 번 더 정리가 필요할 수 있습니다.");
  }

  return { suggestion, pros, cons };
}

// --------------------
// PWA install + SW
// --------------------
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById("installBtn").hidden = false;
});

document.getElementById("installBtn").addEventListener("click", async () => {
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById("installBtn").hidden = true;
});

if("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}

// --------------------
// Events
// --------------------
document.getElementById("todayText").textContent = `${todayKey()} (오늘)`;

document.querySelectorAll(".tab").forEach(btn=>{
  btn.addEventListener("click", ()=>show(btn.dataset.view));
});

document.getElementById("goLog").addEventListener("click", ()=>{ show("log"); renderLogs(); });
document.getElementById("goDecide").addEventListener("click", ()=>show("decide"));

document.getElementById("addLog").addEventListener("click", ()=>{
  const ta = document.getElementById("logInput");
  const text = ta.value.trim();
  if(!text) return;

  const logs = getTodayLogs();
  logs.push({ id: crypto.randomUUID(), time: nowTime(), text });
  setTodayLogs(logs);

  // 요약 캐시 갱신(다음에 summary 가면 최신 반영되게)
  localStorage.removeItem(STORAGE.summary(todayKey()));

  ta.value = "";
  renderLogs();
});

document.getElementById("clearToday").addEventListener("click", ()=>{
  setTodayLogs([]);
  localStorage.removeItem(STORAGE.summary(todayKey()));
  renderLogs();
});

document.getElementById("rebuildSummary").addEventListener("click", ()=>{
  buildSummary();
  renderSummary();
});

document.getElementById("makeDecision").addEventListener("click", ()=>{
  const q = document.getElementById("qInput").value.trim();
  if(!q) return;

  const d = decide(q);

  document.getElementById("dSuggestion").textContent = d.suggestion;

  const pros = document.getElementById("dPros");
  const cons = document.getElementById("dCons");
  pros.innerHTML = ""; cons.innerHTML = "";
  d.pros.forEach(x=>{
    const li = document.createElement("li"); li.textContent = x; pros.appendChild(li);
  });
  d.cons.forEach(x=>{
    const li = document.createElement("li"); li.textContent = x; cons.appendChild(li);
  });

  document.getElementById("decisionBox").classList.remove("hidden");

  // 결정 기록 저장(선택)
  const arr = load(STORAGE.decisions, []);
  arr.push({ id: crypto.randomUUID(), createdAt: new Date().toISOString(), question: q, ...d });
  save(STORAGE.decisions, arr);
});

// first render
show("home");
pinSetUnlocked(false);
ensurePinState();

// --------------------
// PIN UI logic
// --------------------
let pinBuffer = ""; // 사용자가 누른 숫자 0~4자리

function renderDots(){
  document.querySelectorAll(".dot").forEach((d, i)=>{
    d.classList.toggle("filled", i < pinBuffer.length);
  });
}

function resetPin(){
  pinBuffer = "";
  renderDots();
}

async function tryUnlockWithPin(){
  const saved = localStorage.getItem(PIN.hashKey);
  if(!saved){
    pinMsg("PIN이 아직 설정되지 않았습니다. ‘PIN 설정/변경’에서 설정해 주세요.");
    resetPin();
    return;
  }
  if(pinBuffer.length !== 4) return;

  const h = await sha256(pinBuffer);
  if(h === saved){
    pinSetUnlocked(true);
    pinLockUI(false);
    pinMsg("");
    setLockSub("PIN을 입력하세요");
    resetPin();
  }else{
    pinMsg("PIN이 올바르지 않습니다.");
    // 살짝 흔들리는 느낌 대신 간단히 리셋
    resetPin();
  }
}

async function ensurePinState(){
  const hasHash = !!localStorage.getItem(PIN.hashKey);

  // PIN이 아직 없으면(처음)에도 잠금화면을 띄워서 "PIN 설정/변경"을 누르게 함
  if(!hasHash){
    pinLockUI(true);
    pinMsg("PIN이 아직 설정되지 않았습니다. ‘PIN 설정/변경’으로 먼저 설정하세요.");
    setLockSub("PIN을 설정하세요");
    resetPin();
    return;
  }

  // PIN이 설정된 이후에는 잠금 조건대로
  if(pinIsLocked()){
    pinLockUI(true);
    pinMsg("");
    setLockSub("PIN을 입력하세요");
    resetPin();
  }else{
    pinLockUI(false);
  }
}

// 키패드 숫자 누르기
document.querySelectorAll(".key[data-key]")?.forEach(btn=>{
  btn.addEventListener("click", async ()=>{
    if(pinBuffer.length >= 4) return;
    pinBuffer += btn.dataset.key;
    renderDots();
    if(pinBuffer.length === 4){
      await tryUnlockWithPin();
    }
  });
});

// 지움(전체 삭제)
document.getElementById("pinClear")?.addEventListener("click", ()=>{
  pinMsg("");
  resetPin();
});

// 백스페이스(한 칸 삭제)
document.getElementById("pinBack")?.addEventListener("click", ()=>{
  pinMsg("");
  pinBuffer = pinBuffer.slice(0, -1);
  renderDots();
});

// PIN 설정/변경
document.getElementById("pinSetBtn")?.addEventListener("click", async ()=>{
  const currentHash = localStorage.getItem(PIN.hashKey);

  // 기존 PIN이 있으면 현재 PIN 확인
  if(currentHash){
    const cur = prompt("현재 PIN 4자리를 입력하세요");
    if(cur === null) return;
    if(!/^\d{4}$/.test(cur.trim())){
      pinMsg("현재 PIN은 4자리 숫자여야 합니다.");
      return;
    }
    const h = await sha256(cur.trim());
    if(h !== currentHash){
      pinMsg("현재 PIN이 올바르지 않습니다.");
      return;
    }
  }

  const p1 = prompt("새 PIN 4자리를 입력하세요");
  if(p1 === null) return;
  const p2 = prompt("한 번 더 입력하세요");
  if(p2 === null) return;

  if(!/^\d{4}$/.test(p1.trim()) || !/^\d{4}$/.test(p2.trim())){
    pinMsg("PIN은 4자리 숫자여야 합니다.");
    return;
  }
  if(p1 !== p2){
    pinMsg("두 PIN이 일치하지 않습니다.");
    return;
  }

  const newHash = await sha256(p1.trim());
  localStorage.setItem(PIN.hashKey, newHash);
  pinSetUnlocked(true);
  pinMsg("PIN이 설정/변경되었습니다.");
  pinLockUI(false);
  resetPin();
});

// 다시 잠그기
document.getElementById("pinLockBtn")?.addEventListener("click", ()=>{
  pinSetUnlocked(false);
  pinLockUI(true);
  pinMsg("잠금 상태입니다.");
  setLockSub("PIN을 입력하세요");
  resetPin();
});

// 앱 복귀 시 잠금 상태 재확인
document.addEventListener("visibilitychange", ()=>{
  if(document.visibilityState === "visible"){
    ensurePinState();
  }
});


