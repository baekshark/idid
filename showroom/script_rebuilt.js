const STATES = {
  closed: 1,
  half: 0.5,
  open: 0.06,
};

const PRODUCT_OPTIONS = [
  { key: "roller", label: "Roll", type: "blind" },
  { key: "zebra", label: "Zebra", type: "blind" },
  { key: "honeycomb", label: "Honeycomb", type: "blind" },
  { key: "wood", label: "Wood", type: "blind" },
  { key: "aluminum", label: "Aluminum", type: "blind" },
  { key: "roman", label: "Roman", type: "blind" },
  { key: "curtain", label: "Curtain", type: "curtain" },
];

const CURTAIN_SUBTYPES = [
  { key: "blackout", label: "Blackout" },
  { key: "sheer", label: "Sheer" },
];

const COLOR_OPTIONS = [
  { key: "white", label: "White", value: "#f5f2ea" },
  { key: "beige", label: "Beige", value: "#d8ccb7" },
  { key: "gray", label: "Gray", value: "#b8bcc2" },
  { key: "charcoal", label: "Charcoal", value: "#70747c" },
  { key: "black", label: "Black", value: "#303236" },
  { key: "woodLight", label: "Wood Light", value: "#c49b6b" },
  { key: "woodDark", label: "Wood Dark", value: "#7a5a3c" },
];


const SHOWROOM_DATA = {
  residential: [
    {
      id: "living-room",
      name: "Living Room",
      image: "images/living-room.jpg",
      curtainArea: {
        id: "living-curtain",
        label: "Living Curtain",
        left: 13.7,
        top: 21.0,
        width: 72.4,
        height: 45.6,
        panes: 1
      },
      areas: [
        { id: "living-1", label: "Living Window 1", left: 14.4, top: 21.0, width: 12.6, height: 44.0, panes: 1 },
        { id: "living-2", label: "Living Window 2", left: 27.6, top: 21.0, width: 44.8, height: 44.0, panes: 1 },
        { id: "living-3", label: "Living Window 3", left: 72.9, top: 21.0, width: 12.6, height: 44.0, panes: 1 },
      ],
    },
    {
      id: "kitchen",
      name: "Kitchen",
      image: "images/kitchen.jpg",
      curtainArea: {
        id: "kitchen-curtain",
        label: "Kitchen Curtain",
        left: 28.9,
        top: 22.7,
        width: 41,
        height: 22.1,
        panes: 1
      },
      areas: [
        { id: "kitchen-1", label: "Kitchen Window 1", left: 29.3, top: 22.7, width: 19.8, height: 22.1, panes: 1 },
        { id: "kitchen-2", label: "Kitchen Window 2", left: 49.7, top: 22.7, width: 19.9, height: 22.1, panes: 1 },
      ],
    },
    {
      id: "master-bedroom",
      name: "Master Bedroom",
      image: "images/master-bedroom.jpg",
      curtainArea: {
        id: "master-curtain",
        label: "Master Curtain",
        left: 20,
        top: 22,
        width: 40.6,
        height: 49,
        panes: 1
      },
      areas: [
        { id: "master-1", label: "Master Window 1", left: 20.9, top: 22, width: 19.3, height: 49, panes: 1 },
        { id: "master-2", label: "Master Window 2", left: 40.6, top: 22, width: 19.3, height: 49, panes: 1 },
      ],
    },
    {
      id: "bedroom",
      name: "Bedroom",
      image: "images/bedroom.jpg",
      curtainArea: {
        id: "bedroom-curtain",
        label: "Bedroom Curtain",
        left: 30.0,
        top: 19,
        width: 34,
        height: 31.2,
        panes: 1
      },
      areas: [
        { id: "bedroom-1", label: "Bedroom Window 1", left: 30.6, top: 19, width: 16.2, height: 31.2, panes: 1 },
        { id: "bedroom-2", label: "Bedroom Window 2", left: 47.3, top: 19, width: 16.2, height: 31.2, panes: 1 },
      ],
    },
  ],

  office: [
    {
      id: "ceo-room",
      name: "CEO Room",
      image: "images/ceo-room.jpg",
      curtainArea: {
        id: "ceo-curtain",
        label: "CEO Curtain",
        left: 18.6,
        top: 22.6,
        width: 62.5,
        height: 46.9,
        panes: 1
      },
      areas: [
        { id: "ceo-1", label: "CEO Window 1", left: 18.9, top: 22.6, width: 11.8, height: 46.8, panes: 1 },
        { id: "ceo-2", label: "CEO Window 2", left: 31, top: 22.6, width: 12.2, height: 46.8, panes: 1 },
        { id: "ceo-3", label: "CEO Window 3", left: 43.6, top: 22.6, width: 12.2, height: 46.8, panes: 1 },
        { id: "ceo-4", label: "CEO Window 4", left: 56.1, top: 22.6, width: 12.2, height: 46.8, panes: 1 },
        { id: "ceo-5", label: "CEO Window 5", left: 68.65, top: 22.6, width: 11.8, height: 46.8, panes: 1 },
      ],
    },
    {
      id: "meeting-room",
      name: "Meeting Room",
      image: "images/meeting-room.jpg",
      curtainArea: {
        id: "meeting-curtain",
        label: "Meeting Curtain",
        left: 20.4,
        top: 22.6,
        width: 46.7,
        height: 42.2,
        panes: 1
      },
      areas: [
        { id: "meeting-1", label: "Meeting Window 1", left: 20.8, top: 22.6, width: 11.1, height: 42, panes: 1 },
        { id: "meeting-2", label: "Meeting Window 2", left: 32.2, top: 22.6, width: 11.45, height: 42, panes: 1 },
        { id: "meeting-3", label: "Meeting Window 3", left: 43.9, top: 22.6, width: 11.44, height: 42, panes: 1 },
        { id: "meeting-4", label: "Meeting Window 4", left: 55.6, top: 22.6, width: 11.2, height: 42, panes: 1 },
      ],
    },
    {
      id: "lounge",
      name: "Lounge",
      image: "images/lounge.jpg",
      curtainArea: {
        id: "lounge-curtain",
        label: "Lounge Curtain",
        left: 18.1,
        top: 21.5,
        width: 64,
        height: 46.8,
        panes: 1
      },
      areas: [
        { id: "lounge-1", label: "Lounge Window 1", left: 18.5, top: 21.7, width: 10.5, height: 46.4, panes: 1 },
        { id: "lounge-2", label: "Lounge Window 2", left: 29.3, top: 21.7, width: 10.1, height: 46.4, panes: 1 },
        { id: "lounge-3", label: "Lounge Window 3", left: 39.7, top: 21.7, width: 10.0, height: 46.4, panes: 1 },
        { id: "lounge-4", label: "Lounge Window 4", left: 50, top: 21.7, width: 10.03, height: 46.4, panes: 1 },
        { id: "lounge-5", label: "Lounge Window 5", left: 60.4, top: 21.7, width: 10.09, height: 46.4, panes: 1 },
        { id: "lounge-6", label: "Lounge Window 6", left: 70.81, top: 21.7, width: 10.92, height: 46.4, panes: 1 },
      ],
    },
    {
      id: "workplace",
      name: "Workplace",
      image: "images/workplace.jpg",
      curtainArea: {
        id: "work-curtain",
        label: "Workplace Curtain",
        left: 21,
        top: 26.3,
        width: 57.5,
        height: 31.5,
        panes: 1
      },
      areas: [
        { id: "work-1", label: "Workplace Window 1", left: 21.8, top: 26.3, width: 7.4, height: 31.2, panes: 1 },
        { id: "work-2", label: "Workplace Window 2", left: 29.5, top: 26.3, width: 7.8, height: 31.2, panes: 1 },
        { id: "work-3", label: "Workplace Window 3", left: 37.6, top: 26.3, width: 7.9, height: 31.2, panes: 1 },
        { id: "work-4", label: "Workplace Window 4", left: 45.8, top: 26.3, width: 8.1, height: 31.2, panes: 1 },
        { id: "work-5", label: "Workplace Window 5", left: 54.15, top: 26.3, width: 7.9, height: 31.2, panes: 1 },
        { id: "work-6", label: "Workplace Window 6", left: 62.37, top: 26.3, width: 7.75, height: 31.2, panes: 1 },
        { id: "work-7", label: "Workplace Window 7", left: 70.40, top: 26.3, width: 7.4, height: 31.2, panes: 1 },
      ],
    },
  ],
};



const state = {
  category: "residential",
  roomId: SHOWROOM_DATA.residential[0].id,
  selectedAreaId: null,
  product: "roller",
  curtainType: "blackout",
  colorKey: "beige",
  stateKey: "closed",
  applied: {},
};

const els = {};
const MOTION_MS = 420;

function tone(hex, amount = 0) {
  if (!hex || !hex.startsWith("#")) return hex;
  let col = hex.slice(1);
  if (col.length === 3) col = col.split("").map((c) => c + c).join("");
  const n = parseInt(col, 16);
  let r = (n >> 16) + amount;
  let g = ((n >> 8) & 255) + amount;
  let b = (n & 255) + amount;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  bindEvents();
  renderAll();
});

function bindElements() {
  els.categoryButtons = document.getElementById("categoryButtons");
  els.roomTabs = document.getElementById("roomTabs");
  els.productButtons = document.getElementById("productButtons");
  els.curtainTypePanel = document.getElementById("curtainTypePanel");
  els.subTypeButtons = document.getElementById("subTypeButtons");
  els.colorButtons = document.getElementById("colorButtons");
  els.stateButtons = document.getElementById("stateButtons");
  els.applyBtn = document.getElementById("applyBtn");
  els.clearSelectedBtn = document.getElementById("clearSelectedBtn");
  els.clearRoomBtn = document.getElementById("clearRoomBtn");
  els.statusBox = document.getElementById("statusBox");
  els.selectionTitle = document.getElementById("selectionTitle");
  els.viewerRoomName = document.getElementById("viewerRoomName");
  els.roomImage = document.getElementById("roomImage");
  els.areaLayer = document.getElementById("areaLayer");
  els.productLayer = document.getElementById("productLayer");
}

function bindEvents() {
  els.categoryButtons?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-category]");
    if (!btn) return;
    changeCategory(btn.dataset.category);
  });

  els.stateButtons?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-state]");
    if (!btn) return;
    state.stateKey = btn.dataset.state;
    renderStateButtons();
    renderStatus();
    autoApplyIfPossible();
  });

  els.applyBtn?.addEventListener("click", applySelection);
  els.clearSelectedBtn?.addEventListener("click", clearSelectedArea);
  els.clearRoomBtn?.addEventListener("click", clearRoom);
}

function changeCategory(category) {
  state.category = category;
  state.roomId = getRooms()[0].id;
  state.selectedAreaId = null;
  renderAll();
}

function getRooms() {
  return SHOWROOM_DATA[state.category] || [];
}

function getCurrentRoom() {
  return getRooms().find((room) => room.id === state.roomId) || getRooms()[0];
}

function getCurrentColor() {
  return COLOR_OPTIONS.find((c) => c.key === state.colorKey) || COLOR_OPTIONS[0];
}

function getRoomAppliedMap(roomId) {
  if (!state.applied[roomId]) state.applied[roomId] = {};
  return state.applied[roomId];
}

function renderAll() {
  renderCategoryButtons();
  renderRoomTabs();
  renderProductButtons();
  renderCurtainTypeButtons();
  renderColorButtons();
  renderStateButtons();
  renderScene();
  renderStatus();
  updateApplyButton();
}

function renderCategoryButtons() {
  els.categoryButtons?.querySelectorAll("[data-category]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === state.category);
  });
}

function renderRoomTabs() {
  if (!els.roomTabs) return;
  els.roomTabs.innerHTML = "";

  getRooms().forEach((room) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "room-tab" + (room.id === state.roomId ? " active" : "");
    btn.textContent = room.name;
    btn.addEventListener("click", () => {
      state.roomId = room.id;
      state.selectedAreaId = null;
      renderRoomTabs();
      renderScene();
      renderStatus();
      updateApplyButton();
    });
    els.roomTabs.appendChild(btn);
  });
}

function renderProductButtons() {
  if (!els.productButtons) return;
  els.productButtons.innerHTML = "";

  PRODUCT_OPTIONS.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (item.key === state.product ? " active" : "");
    btn.textContent = item.label;
    btn.addEventListener("click", () => {
      state.product = item.key;
      renderProductButtons();
      renderCurtainTypeButtons();
      renderStatus();
      autoApplyIfPossible();
    });
    els.productButtons.appendChild(btn);
  });
}

function renderCurtainTypeButtons() {
  if (!els.curtainTypePanel || !els.subTypeButtons) return;
  const show = state.product === "curtain";
  els.curtainTypePanel.hidden = !show;
  els.curtainTypePanel.style.display = show ? "" : "none";
  els.subTypeButtons.innerHTML = "";
  if (!show) return;

  CURTAIN_SUBTYPES.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (item.key === state.curtainType ? " active" : "");
    btn.textContent = item.label;
    btn.addEventListener("click", () => {
      state.curtainType = item.key;
      renderCurtainTypeButtons();
      renderStatus();
      autoApplyIfPossible();
    });
    els.subTypeButtons.appendChild(btn);
  });
}

function renderColorButtons() {
  if (!els.colorButtons) return;
  els.colorButtons.innerHTML = "";

  COLOR_OPTIONS.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (item.key === state.colorKey ? " active" : "");
    btn.innerHTML = `<span class="color-dot" style="background:${item.value}"></span>${item.label}`;
    btn.addEventListener("click", () => {
      state.colorKey = item.key;
      renderColorButtons();
      renderStatus();
      autoApplyIfPossible();
    });
    els.colorButtons.appendChild(btn);
  });
}

function renderStateButtons() {
  if (!els.stateButtons) return;
  els.stateButtons.querySelectorAll("[data-state]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.state === state.stateKey);
  });
}

function renderScene() {
  const room = getCurrentRoom();
  if (!room) return;

  if (els.viewerRoomName) els.viewerRoomName.textContent = room.name;
  if (els.roomImage) {
    els.roomImage.src = room.image;
    els.roomImage.alt = room.name;
  }

  renderAreaLayer(room);
  renderProductLayer(room);
}

function renderAreaLayer(room) {
  if (!els.areaLayer) return;
  els.areaLayer.innerHTML = "";

  room.areas.forEach((area) => {
    const hitbox = document.createElement("button");
    hitbox.type = "button";
    hitbox.className = "window-hitbox" + (state.selectedAreaId === area.id ? " selected" : "");
    hitbox.dataset.label = `${area.label} (${area.panes} panes)`;
    setBoxStyles(hitbox, area);
    hitbox.addEventListener("click", () => {
      state.selectedAreaId = area.id;
      renderAreaLayer(room);
      renderProductLayer(room);
      renderStatus();
      updateApplyButton();
    });
    els.areaLayer.appendChild(hitbox);
  });
}

function renderProductLayer(room) {
  if (!els.productLayer) return;
  els.productLayer.innerHTML = "";

  const appliedMap = getRoomAppliedMap(room.id);
  const entries = Object.entries(appliedMap);

  entries.forEach(([areaId, item]) => {
    let targetArea = null;

    if (item.product === "curtain" && room.curtainArea && areaId === room.curtainArea.id) {
      targetArea = room.curtainArea;
    } else {
      targetArea = room.areas.find((area) => area.id === areaId);
    }

    if (!targetArea) return;

    const instance = document.createElement("div");
    instance.className = "product-instance";

    setBoxStyles(instance, targetArea);

    const product = buildProduct(item, targetArea);
    instance.appendChild(product);
    els.productLayer.appendChild(instance);
  });
}

function setBoxStyles(el, area) {
  el.style.left = `${area.left}%`;
  el.style.top = `${area.top}%`;
  el.style.width = `${area.width}%`;
  el.style.height = `${area.height}%`;
}

function applySelection() {
  const room = getCurrentRoom();
  if (!room) return;

  const appliedMap = getRoomAppliedMap(room.id);
  const payload = {
    product: state.product,
    curtainType: state.curtainType,
    colorKey: state.colorKey,
    color: getCurrentColor().value,
    stateKey: state.stateKey,
  };

  Object.keys(appliedMap).forEach((key) => delete appliedMap[key]);

  if (state.product === "curtain" && room.curtainArea) {
    appliedMap[room.curtainArea.id] = { ...payload };
  } else {
    room.areas.forEach((area) => {
      appliedMap[area.id] = { ...payload };
    });
  }

  renderAreaLayer(room);
  renderProductLayer(room);
  renderStatus();
  updateApplyButton();
}

function autoApplyIfPossible() {
  applySelection();
}

function clearSelectedArea() {
  const room = getCurrentRoom();
  if (!room || !state.selectedAreaId) return;
  delete getRoomAppliedMap(room.id)[state.selectedAreaId];
  renderProductLayer(room);
  renderStatus();
}

function clearRoom() {
  const room = getCurrentRoom();
  if (!room) return;
  state.applied[room.id] = {};
  renderProductLayer(room);
  renderStatus();
}

function updateApplyButton() {
  if (!els.applyBtn) return;
  const room = getCurrentRoom();
  els.applyBtn.disabled = !room || !room.areas || !room.areas.length;
}

function renderStatus() {
  if (!els.statusBox) return;

  const room = getCurrentRoom();
  const color = getCurrentColor();

  if (els.selectionTitle) {
    els.selectionTitle.textContent = room ? `${room.name} Window` : "Window";
  }

  const productLabel = PRODUCT_OPTIONS.find((p) => p.key === state.product)?.label || state.product;
  const stateLabel = state.stateKey;
  const curtainText = state.product === "curtain" ? ` / ${state.curtainType}` : "";

  els.statusBox.innerHTML = `
    Product: ${productLabel}${curtainText}<br>
    Color: ${color.label}<br>
    State: ${stateLabel}
  `;
}



function buildProduct(item, area) {
  return item.product === "curtain"
    ? buildCurtainProduct(item, area)
    : buildBlindProduct(item, area);
}

function buildBlindProduct(item, area) {
  const wrap = document.createElement("div");
  wrap.className = "window-product blind";
  wrap.style.setProperty("--fabric-color", item.color);
  wrap.style.position = "absolute";
  wrap.style.inset = "0";
  wrap.style.overflow = "hidden";

  const openness = STATES[item.stateKey];

  if (item.product === "wood" || item.product === "aluminum") {
    wrap.appendChild(createHeadrail());

    const stack = document.createElement("div");
    stack.className = "slat-stack";
    stack.style.height = `calc((100% - 18px) * ${Math.max(openness, 0)})`;
    stack.style.transition = `height ${MOTION_MS}ms ease-in-out`;

    const fill = document.createElement("div");
    fill.className = `slat-fill ${item.product}`;
    fill.style.setProperty("--fabric-color", item.color);
    stack.appendChild(fill);

    if (item.product === "wood") {
      const leftLadder = document.createElement("div");
      leftLadder.className = "slat-ladder";
      leftLadder.style.left = "28%";
      const rightLadder = document.createElement("div");
      rightLadder.className = "slat-ladder";
      rightLadder.style.right = "28%";
      stack.append(leftLadder, rightLadder);
    }

    wrap.appendChild(stack);
    stack.appendChild(createBottomrailInside());
    wrap.appendChild(createPaneGuides(area.panes));
    return wrap;
  }

  if (item.product === "roman") {
    return buildRomanShade(item, area);
  }

  wrap.appendChild(createHeadrail());

  const surface = document.createElement("div");
  surface.className = "fabric-surface";
  surface.style.height = `calc((100% - 18px) * ${Math.max(openness, 0)})`;
  surface.style.transition = `height ${MOTION_MS}ms ease-in-out`;

  const cssProductName = item.product === "roller" ? "roll" : item.product;
  const sheet = document.createElement("div");
  sheet.className = `fabric-sheet ${cssProductName}`;

  surface.appendChild(sheet);
  surface.appendChild(createBottomrailInside());
  wrap.appendChild(surface);
  wrap.appendChild(createPaneGuides(area.panes));

  return wrap;
}

function buildRomanShade(item, area) {
  const wrap = document.createElement("div");
  wrap.className = "window-product blind";
  wrap.style.setProperty("--fabric-color", item.color);

  const openness = STATES[item.stateKey];
  const totalHeightPx = Math.max(area.height * 8, 180);
  const baseGap = Math.max(totalHeightPx * 0.13, 42);
  const thinGap = Math.max(totalHeightPx * 0.018, 6);
  const stackLayers = Math.max(0, Math.round((1 - openness) * 6));

  let stackHeight = 0;
  if (stackLayers > 0) stackHeight = baseGap + (stackLayers - 1) * thinGap;

  wrap.appendChild(createHeadrail());

  if (stackLayers > 0) {
    const stack = document.createElement("div");
    stack.className = "roman-stack";
    stack.style.height = `${stackHeight}px`;
    stack.style.transition = `height ${MOTION_MS}ms ease-in-out`;

    for (let i = 0; i < stackLayers; i++) {
      const isTop = i === 0;
      const fold = document.createElement("div");
      fold.className = `roman-fold ${isTop ? "top" : "slim"}`;
      fold.style.top = isTop ? "0px" : `${baseGap + (i - 1) * thinGap}px`;
      fold.style.height = `${isTop ? baseGap : thinGap}px`;
      stack.appendChild(fold);
    }

    wrap.appendChild(stack);
  }

  const drop = document.createElement("div");
  drop.className = "roman-drop fabric-sheet roman";
  drop.style.top = `${18 + stackHeight}px`;
  drop.style.height = `calc((100% - ${18 + stackHeight}px) * ${Math.max(openness, 0.05)})`;
  drop.style.transition = `top ${MOTION_MS}ms ease-in-out, height ${MOTION_MS}ms ease-in-out`;

  const maxRods = 12;
  for (let i = 0; i < maxRods; i++) {
    const y = i * baseGap;
    const visibleHeight = totalHeightPx * openness;
    if (y > visibleHeight - 10) break;
    const rod = document.createElement("div");
    rod.className = "roman-rod";
    rod.style.top = `${y}px`;
    drop.appendChild(rod);
  }

  drop.appendChild(createBottomrailInside());
  wrap.appendChild(drop);
  wrap.appendChild(createPaneGuides(area.panes));
  return wrap;
}

function buildCurtainProduct(item, area) {
  const wrap = document.createElement("div");
  wrap.className = "curtain-product";

  const openness = STATES[item.stateKey];
  const side = Math.max(6, openness * 55);
  const overlap = Math.max(6, openness * 12);
  const fill = item.curtainType === "sheer"
    ? `linear-gradient(90deg, rgba(255,255,255,.65), rgba(255,255,255,.26) 18%, rgba(255,255,255,.40) 60%, rgba(255,255,255,.18)), linear-gradient(180deg, rgba(255,255,255,.08), rgba(0,0,0,.02)), ${item.color}`
    : `linear-gradient(90deg, rgba(255,255,255,.28), rgba(0,0,0,.06) 22%, rgba(255,255,255,.14) 58%, rgba(0,0,0,.10)), linear-gradient(180deg, rgba(255,255,255,.06), rgba(0,0,0,.03)), ${item.color}`;

  wrap.style.setProperty("--curtain-fill", fill);
  wrap.appendChild(createCurtainRail());

  const left = document.createElement("div");
  left.className = "curtain-panel left";
  left.style.width = `${side}%`;
  left.style.opacity = item.curtainType === "sheer" ? "0.65" : "1";
  left.style.transition = `width ${MOTION_MS}ms ease-in-out, opacity ${MOTION_MS}ms ease-in-out`;
  left.style.background = `repeating-linear-gradient(90deg, transparent 0 12px, rgba(0,0,0,.10) 12px 13px), ${fill}`;

  const right = document.createElement("div");
  right.className = "curtain-panel right";
  right.style.width = `${side}%`;
  right.style.opacity = item.curtainType === "sheer" ? "0.65" : "1";
  right.style.transition = `width ${MOTION_MS}ms ease-in-out, opacity ${MOTION_MS}ms ease-in-out`;
  right.style.background = `repeating-linear-gradient(90deg, transparent 0 12px, rgba(0,0,0,.10) 12px 13px), ${fill}`;

  const center = document.createElement("div");
  center.className = "curtain-center-overlap";
  center.style.left = `calc(50% - ${overlap / 2}px)`;
  center.style.width = `${overlap}px`;
  center.style.opacity = openness > 0.7 ? "0.65" : "0.22";
  center.style.transition = `left ${MOTION_MS}ms ease-in-out, width ${MOTION_MS}ms ease-in-out, opacity ${MOTION_MS}ms ease-in-out`;

  wrap.append(left, right, center);
  wrap.appendChild(createPaneGuides(area.panes));
  return wrap;
}

function createHeadrail() {
  const el = document.createElement("div");
  el.className = "headrail";
  return el;
}

function createCurtainRail() {
  const el = document.createElement("div");
  el.className = "curtain-rail";
  return el;
}

function createBottomrailInside() {
  const el = document.createElement("div");
  el.className = "bottomrail";
  el.style.position = "absolute";
  el.style.left = "0";
  el.style.right = "0";
  el.style.bottom = "0";
  return el;
}

function createPaneGuides(panes = 1) {
  const guides = document.createElement("div");
  guides.style.display = "none";
  return guides;
}