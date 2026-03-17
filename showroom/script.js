const showroomData = {
  residential: [
    { key: "living-room", name: "Living Room", file: "images/living-room.jpg" },
    { key: "kitchen", name: "Kitchen", file: "images/kitchen.jpg" },
    { key: "master-bedroom", name: "Master Bedroom", file: "images/master-bedroom.jpg" },
    { key: "bedroom", name: "Bedroom", file: "images/bedroom.jpg" }
  ],
  office: [
    { key: "ceo-room", name: "CEO Room", file: "images/ceo-room.jpg" },
    { key: "meeting-room", name: "Meeting Room", file: "images/meeting-room.jpg" },
    { key: "lounge", name: "Lounge", file: "images/lounge.jpg" },
    { key: "workplace", name: "Workplace", file: "images/workplace.jpg" }
  ]
};

const roomAreas = {
  "living-room": {
    walls: [
      {
        id: "living-main-wall",
        label: "Living Room Window Wall",

        // 선택 영역: 실제 검은 창 프레임 안쪽 기준
        click: { left: "14.5%", top: "18.5%", width: "72.0%", height: "47.5%" },

        // 블라인드: 좌우 작은 창 + 가운데 큰 창
        blindZones: [
          { left: "14.5%", top: "21.8%", width: "14.5%", height: "42.5%" }, // left
          { left: "29%", top: "21.8%", width: "50%", height: "42.5%" }, // center
          { left: "73%", top: "21.8%", width: "14.5%", height: "42.5%" }  // right
        ],

        // 커튼: 거실 창 전체 1세트
        curtain: { left: "14.5%", top: "18.0%", width: "72.0%", height: "49.5%" }
      }
    ]
  },

  "kitchen": {
    walls: [
      {
        id: "kitchen-main-wall",
        label: "Kitchen Window Wall",

        // 선택 영역: 기존 전체 범위 유지
        click: { left: "29%", top: "20%", width: "42%", height: "23%" },

        // 블라인드: 창 2개로 분할
        blindZones: [
          { left: "28%", top: "21%", width: "24%", height: "23%" }, // left
          { left: "50%", top: "21%", width: "24%", height: "23%" }  // right
        ],

        // 커튼: 기존 전체 범위 유지
        curtain: { left: "29%", top: "22%", width: "42%", height: "23%" }
      }
    ]
  },

  "master-bedroom": {
    walls: [
      {
        id: "master-bedroom-wall",
        label: "Master Bedroom Window Wall",

        // 선택 영역: 기존 전체 범위 유지
        click: { left: "20%", top: "20%", width: "40%", height: "52%" },

        // 블라인드: 창 2개로 분할
        blindZones: [
          { left: "20%", top: "21%", width: "23%", height: "52%" }, // left
          { left: "40%", top: "21%", width: "23%", height: "52%" }  // right
        ],

        // 커튼: 기존 전체 범위 유지
        curtain: { left: "20%", top: "20%", width: "40%", height: "52%" }
      }
    ]
  },

  "bedroom": {
    walls: [
      {
        id: "bedroom-wall",
        label: "Bedroom Window Wall",

        // 선택 영역: 기존 전체 범위 유지
        click: { left: "31%", top: "18%", width: "32%", height: "31%" },

        // 블라인드: 창 2개로 분할
        blindZones: [
          { left: "30%", top: "19%", width: "19%", height: "31%" }, // left
          { left: "47%", top: "19%", width: "19%", height: "31%" }  // right
        ],

        // 커튼: 기존 전체 범위 유지
        curtain: { left: "31%", top: "18%", width: "32%", height: "31%" }
      }
    ]
  },

  "ceo-room": {
    walls: [
      {
        id: "ceo-main-wall",
        label: "CEO Room Window Wall",

        // 선택 영역 유지
        click: { left: "18%", top: "20%", width: "63%", height: "50%" },

        // 블라인드: 창 5개 분할
        blindZones: [
          { left: "18%", top: "20%", width: "13.5%", height: "50%" },  // 1
          { left: "31%", top: "20%", width: "13.5%", height: "50%" },  // 2
          { left: "44%", top: "20%", width: "13.5%", height: "50%" },  // 3
          { left: "56.7%", top: "20%", width: "13.5%", height: "50%" },  // 4
          { left: "69%", top: "20%", width: "13.5%", height: "50%" }   // 5
        ],

        // 커튼 유지
        curtain: { left: "18%", top: "20%", width: "63%", height: "50%" }
      }
    ]
  },

  "meeting-room": {
    walls: [
      {
        id: "meeting-main-wall",
        label: "Meeting Room Window Wall",

        // 선택 영역 유지
        click: { left: "20%", top: "20%", width: "48%", height: "47%" },

        // 블라인드: 창 4개 분할
        blindZones: [
          { left: "20%", top: "20%", width: "13%", height: "47%" }, // 1
          { left: "32.5%", top: "20%", width: "13%", height: "47%" }, // 2
          { left: "44.4%", top: "20%", width: "13%", height: "47%" }, // 3
          { left: "56%", top: "20%", width: "13%", height: "47%" }  // 4
        ],

        // 커튼 영역 유지
        curtain: { left: "20%", top: "20%", width: "48%", height: "47%" }
      }
    ]
  },

  "lounge": {
    walls: [
      {
        id: "lounge-main-wall",
        label: "Lounge Window Wall",

        // 선택 영역 유지
        click: { left: "17.5%", top: "19%", width: "65%", height: "50%" },

        // 블라인드: 창 6개 분할
        blindZones: [
          { left: "19%", top: "19%", width: "11.3%", height: "50%" }, // 1
          { left: "29.8%", top: "19%", width: "11%", height: "50%" }, // 2
          { left: "40%", top: "19%", width: "11%", height: "50%" }, // 3
          { left: "50.4%", top: "19%", width: "11%", height: "50%" }, // 4
          { left: "60.8%", top: "19%", width: "11%", height: "50%" }, // 5
          { left: "71%", top: "19%", width: "12%", height: "50%" }  // 6
        ],

        // 커튼 유지
        curtain: { left: "17.5%", top: "19%", width: "65%", height: "50%" }
      }
    ]
  },

  "workplace": {
    walls: [
      {
        id: "workplace-main-wall",
        label: "Workplace Window Wall",

        // 선택 영역 유지
        click: { left: "20.8%", top: "24%", width: "57.7%", height: "34%" },

        // 블라인드: 창 7개 분할
        blindZones: [
          { left: "21.5%", top: "24%", width: "8.8%", height: "34%" },  // 1
          { left: "29.8%", top: "24%", width: "8.8%", height: "34%" }, // 2
          { left: "37.9%", top: "24%", width: "8.8%", height: "34%" },   // 3
          { left: "46%", top: "24%", width: "8.8%", height: "34%" }, // 4
          { left: "54.3%", top: "24%", width: "8.8%", height: "34%" },   // 5
          { left: "62.3%", top: "24%", width: "8.8%", height: "34%" }, // 6
          { left: "70.4%", top: "24%", width: "8.8%", height: "34%" }    // 7
        ],

        // 커튼 유지
        curtain: { left: "20.8%", top: "24%", width: "57.7%", height: "34%" }
      }
    ]
  },
}
const productData = {
  products: [
    "Wooden Blinds",
    "Aluminum Blinds",
    "Roller Blinds",
    "Combi Blinds",
    "Honeycomb Blinds",
    "Roman Blinds",
    "Curtain"
  ],
  curtainTypes: ["Sheer", "Drapery"],
  colors: ["White", "Gray", "Black", "Beige", "Sky Blue"]
};

const productImageMap = {
  "Wooden Blinds": {
    closed: "images/wooden-closed.png",
    half: "images/wooden-half.png"
  },
  "Aluminum Blinds": {
    closed: "images/venetian-closed.png",
    half: "images/venetian-half.png"
  },
  "Roller Blinds": {
    closed: "images/roller-closed.png",
    half: "images/roller-half.png"
  },
  "Combi Blinds": {
    closed: "images/zebra-closed.png",
    half: "images/zebra-half.png"
  },
  "Honeycomb Blinds": {
    closed: "images/honeycomb-closed.png",
    half: "images/honeycomb-half.png"
  },
  "Roman Blinds": {
    closed: "images/roman-closed.png",
    half: "images/roman-half.png"
  },
  "Curtain": {
    "Sheer": {
      closed: "images/curtain-sheer-closed.png",
      half: "images/curtain-sheer-half.png"
    },
    "Drapery": {
      closed: "images/curtain-blackout-closed.png",
      half: "images/curtain-blackout-half.png"
    }
  }
};

const productColorMap = {
  "White": null,
  "Gray": "#8f96a3",
  "Black": "#222222",
  "Beige": "#ceb799",
  "Sky Blue": "#d9eef7"
};

const colorThemes = {
  "White": {
    fill: "rgba(255,255,255,0.45)",
    border: "rgba(255,255,255,0.95)"
  },
  "Beige": {
    fill: "rgba(214,196,166,0.38)",
    border: "rgba(190,167,132,0.95)"
  },
  "Light Gray": {
    fill: "rgba(194,199,207,0.34)",
    border: "rgba(145,152,164,0.95)"
  },
  "Dark Gray": {
    fill: "rgba(98,104,117,0.30)",
    border: "rgba(72,79,90,0.95)"
  },
  "Black": {
    fill: "rgba(24,24,28,0.25)",
    border: "rgba(20,20,20,0.95)"
  }
};

let currentCategory = "residential";
let currentRoomKey = "living-room";
let currentSelectedWallId = null;
let currentSelectedWallLabel = null;
let currentSelectedProduct = null;
let currentSelectedSubType = null;
let currentSelectedColor = null;

const sceneSelections = {};

const btnResidential = document.getElementById("btnResidential");
const btnOffice = document.getElementById("btnOffice");
const roomTabs = document.getElementById("roomTabs");
const roomImage = document.getElementById("roomImage");
const viewerRoomName = document.getElementById("viewerRoomName");
const areaLayer = document.getElementById("areaLayer");
const productLayer = document.getElementById("productLayer");
const stateControlBar = document.getElementById("stateControlBar");
const toggleStateBtn = document.getElementById("toggleStateBtn");
const productButtons = document.getElementById("productButtons");
const subTypeButtons = document.getElementById("subTypeButtons");
const colorButtons = document.getElementById("colorButtons");
const curtainTypePanel = document.getElementById("curtainTypePanel");
const applyBtn = document.getElementById("applyBtn");
const clearSelectedBtn = document.getElementById("clearSelectedBtn");
const clearRoomBtn = document.getElementById("clearRoomBtn");
const statusBox = document.getElementById("statusBox");
const appliedList = document.getElementById("appliedList");

btnResidential.addEventListener("click", () => switchCategory("residential"));
btnOffice.addEventListener("click", () => switchCategory("office"));
applyBtn.addEventListener("click", applySelection);
clearSelectedBtn.addEventListener("click", clearSelectedWall);
clearRoomBtn.addEventListener("click", clearRoomSelections);

toggleStateBtn.addEventListener("click", () => {
  if (!currentSelectedWallId) return;
  toggleAppliedState(currentSelectedWallId);
});

function ensureRoomState(roomKey) {
  if (!sceneSelections[roomKey]) {
    sceneSelections[roomKey] = {
      walls: {}
    };
  }
  return sceneSelections[roomKey];
}

function switchCategory(category) {
  currentCategory = category;

  btnResidential.classList.toggle("active", category === "residential");
  btnOffice.classList.toggle("active", category === "office");

  const firstRoom = showroomData[category][0];
  currentRoomKey = firstRoom.key;

  resetSelection();
  renderRoomTabs();
  loadCurrentRoom();
}

function renderRoomTabs() {
  roomTabs.innerHTML = "";

  showroomData[currentCategory].forEach((room) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "room-tab";
    btn.textContent = room.name;
    btn.classList.toggle("active", room.key === currentRoomKey);

    btn.addEventListener("click", () => {
      currentRoomKey = room.key;
      resetSelection();
      renderRoomTabs();
      loadCurrentRoom();
    });

    roomTabs.appendChild(btn);
  });
}

function loadCurrentRoom() {
  const room = showroomData[currentCategory].find(r => r.key === currentRoomKey);
  if (!room) return;

  roomImage.src = room.file;
  viewerRoomName.textContent = room.name;

  roomImage.onload = () => {
    renderWallHitboxes();
    renderAppliedProducts();
    renderAppliedList();
  };

  if (roomImage.complete) {
    renderWallHitboxes();
    renderAppliedProducts();
    renderAppliedList();
  }

  renderProductButtons();
  renderCurtainTypeButtons();
  renderColorButtons();
  updateStatusBox();
  updateApplyButton();
}

function renderWallHitboxes() {
  areaLayer.innerHTML = "";
  const room = roomAreas[currentRoomKey];
  if (!room || !room.walls) return;

  const roomState = ensureRoomState(currentRoomKey);

  room.walls.forEach((wall) => {
    const alreadyApplied = !!roomState.walls[wall.id];

    // 이미 제품이 적용된 창은 선택 영역을 표시하지 않음
    if (alreadyApplied) return;

    const hitbox = document.createElement("button");
    hitbox.type = "button";
    hitbox.className = "wall-hitbox";
    hitbox.dataset.wallId = wall.id;
    hitbox.dataset.wallLabel = wall.label;

    hitbox.style.left = wall.click.left;
    hitbox.style.top = wall.click.top;
    hitbox.style.width = wall.click.width;
    hitbox.style.height = wall.click.height;

    hitbox.addEventListener("click", () => {
      currentSelectedWallId = wall.id;
      currentSelectedWallLabel = wall.label;
      updateHitboxSelection();
      updateStatusBox();
      updateApplyButton();
    });

    areaLayer.appendChild(hitbox);
  });

  updateHitboxSelection();
}

function updateHitboxSelection() {
  document.querySelectorAll(".wall-hitbox").forEach((box) => {
    box.classList.toggle("selected", box.dataset.wallId === currentSelectedWallId);
  });
}

function renderProductButtons() {
  productButtons.innerHTML = "";

  productData.products.forEach((product) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.textContent = product;
    btn.classList.toggle("active", currentSelectedProduct === product);

    btn.addEventListener("click", () => {
      currentSelectedProduct = product;
      currentSelectedSubType = null;
      renderProductButtons();
      renderCurtainTypeButtons();
      updateStatusBox();
      updateApplyButton();
    });

    productButtons.appendChild(btn);
  });
}

function renderCurtainTypeButtons() {
  subTypeButtons.innerHTML = "";

  const show = currentSelectedProduct === "Curtain";
  curtainTypePanel.style.display = show ? "block" : "none";

  if (!show) return;

  productData.curtainTypes.forEach((type) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.textContent = type;
    btn.classList.toggle("active", currentSelectedSubType === type);

    btn.addEventListener("click", () => {
      currentSelectedSubType = type;
      renderCurtainTypeButtons();
      updateStatusBox();
      updateApplyButton();
    });

    subTypeButtons.appendChild(btn);
  });
}

function renderColorButtons() {
  colorButtons.innerHTML = "";

  productData.colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.textContent = color;
    btn.classList.toggle("active", currentSelectedColor === color);

    btn.addEventListener("click", () => {
      currentSelectedColor = color;
      renderColorButtons();
      updateStatusBox();
      updateApplyButton();
    });

    colorButtons.appendChild(btn);
  });
}

function updateStatusBox() {
  if (!currentSelectedWallLabel) {
    statusBox.textContent = "벽을 먼저 선택해 주세요.";
  } else {
    let text = `선택된 벽: ${currentSelectedWallLabel}`;

    if (currentSelectedProduct) {
      text += ` / 제품: ${currentSelectedProduct}`;
    }

    if (currentSelectedSubType) {
      text += ` / 타입: ${currentSelectedSubType}`;
    }

    if (currentSelectedColor) {
      text += ` / 색상: ${currentSelectedColor}`;
    }

    statusBox.textContent = text;
  }

  if (currentSelectedWallId) {
    const roomState = ensureRoomState(currentRoomKey);
    const item = roomState.walls[currentSelectedWallId];

    if (item) {
      stateControlBar.style.display = "block";
      toggleStateBtn.textContent = item.state === "half" ? "Closed" : "Half";
    } else {
      stateControlBar.style.display = "none";
    }
  } else {
    stateControlBar.style.display = "none";
  }
}

function updateApplyButton() {
  let ok = !!(currentSelectedWallId && currentSelectedProduct && currentSelectedColor);

  if (currentSelectedProduct === "Curtain") {
    ok = ok && !!currentSelectedSubType;
  }

  applyBtn.disabled = !ok;
}

function applySelection() {
  if (!currentSelectedWallId || !currentSelectedProduct || !currentSelectedColor) return;
  if (currentSelectedProduct === "Curtain" && !currentSelectedSubType) return;

  const roomState = ensureRoomState(currentRoomKey);

  roomState.walls[currentSelectedWallId] = {
    wallId: currentSelectedWallId,
    wallLabel: currentSelectedWallLabel,
    product: currentSelectedProduct,
    color: currentSelectedColor,
    subType: currentSelectedProduct === "Curtain" ? currentSelectedSubType : null,
    areaType: currentSelectedProduct === "Curtain" ? "curtain" : "blind",
    state: "closed"
  };

  currentSelectedWallId = null;
  currentSelectedWallLabel = null;

  renderWallHitboxes();
  renderAppliedProducts();
  renderAppliedList();
  updateStatusBox();
  updateApplyButton();
}

function clearSelectedWall() {
  if (!currentSelectedWallId) return;

  const roomState = ensureRoomState(currentRoomKey);
  delete roomState.walls[currentSelectedWallId];

  renderWallHitboxes();
  renderAppliedProducts();
  renderAppliedList();
  updateStatusBox();
  updateApplyButton();
}

function clearRoomSelections() {
  sceneSelections[currentRoomKey] = { walls: {} };
  currentSelectedWallId = null;
  currentSelectedWallLabel = null;

  renderWallHitboxes();
  renderAppliedProducts();
  renderAppliedList();
  updateStatusBox();
  updateApplyButton();
}

function renderAppliedProducts() {
  productLayer.innerHTML = "";

  const room = roomAreas[currentRoomKey];
  const roomState = ensureRoomState(currentRoomKey);

  if (!room || !room.walls) return;

  room.walls.forEach((wall) => {
    const item = roomState.walls[wall.id];
    if (!item) return;

    // Curtain = one full set
    if (item.areaType === "curtain") {
      const overlay = createOverlay(item, wall.label);
      overlay.style.left = wall.curtain.left;
      overlay.style.top = wall.curtain.top;
      overlay.style.width = wall.curtain.width;
      overlay.style.height = wall.curtain.height;
      productLayer.appendChild(overlay);
      return;
    }

    // Blinds = split for any room that has blindZones
    if (wall.blindZones && wall.blindZones.length) {
      wall.blindZones.forEach((zone, index) => {
        const overlay = createOverlay(item, `${wall.label} ${index + 1}`);
        overlay.style.left = zone.left;
        overlay.style.top = zone.top;
        overlay.style.width = zone.width;
        overlay.style.height = zone.height;
        productLayer.appendChild(overlay);
      });
      return;
    }

    // Other rooms = original single blind area
    if (wall.blind) {
      const overlay = createOverlay(item, wall.label);
      overlay.style.left = wall.blind.left;
      overlay.style.top = wall.blind.top;
      overlay.style.width = wall.blind.width;
      overlay.style.height = wall.blind.height;
      productLayer.appendChild(overlay);
    }
  });
}

const processedImageCache = {};

function removeWhiteBgAndCrop(src) {
  if (processedImageCache[src]) {
    return Promise.resolve(processedImageCache[src]);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      let top = canvas.height;
      let left = canvas.width;
      let right = 0;
      let bottom = 0;
      let found = false;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const i = (y * canvas.width + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // 거의 흰색이면 배경으로 판단
          const isWhiteBg = r > 240 && g > 240 && b > 240;

          if (isWhiteBg) {
            data[i + 3] = 0; // 투명 처리
          } else {
            found = true;
            if (x < left) left = x;
            if (x > right) right = x;
            if (y < top) top = y;
            if (y > bottom) bottom = y;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      if (!found) {
        processedImageCache[src] = src;
        resolve(src);
        return;
      }

      const cropWidth = right - left + 1;
      const cropHeight = bottom - top + 1;

      const croppedCanvas = document.createElement("canvas");
      const croppedCtx = croppedCanvas.getContext("2d");
      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;

      croppedCtx.drawImage(
        canvas,
        left, top, cropWidth, cropHeight,
        0, 0, cropWidth, cropHeight
      );

      const finalSrc = croppedCanvas.toDataURL("image/png");
      processedImageCache[src] = finalSrc;
      resolve(finalSrc);
    };

    img.onerror = () => resolve(src);
    img.src = src;
  });
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const full = value.length === 3
    ? value.split("").map((c) => c + c).join("")
    : value;

  const num = parseInt(full, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

const tintedImageCache = {};

function getProductFilter(colorName) {
  switch (colorName) {
    case "White":
      return "none";
    case "Gray":
      return "grayscale(1) brightness(0.78) contrast(1.05)";
    case "Black":
      return "grayscale(1) brightness(0.28) contrast(1.15)";
    case "Beige":
      return "sepia(0.55) saturate(0.75) hue-rotate(-8deg) brightness(1.02)";
    case "Sky Blue":
      return "sepia(0.25) saturate(1.6) hue-rotate(165deg) brightness(0.95)";
    default:
      return "none";
  }
}

function makeTintedProductImage(src, colorName) {
  const cacheKey = `${src}__${colorName}`;
  if (tintedImageCache[cacheKey]) {
    return Promise.resolve(tintedImageCache[cacheKey]);
  }

  // White는 원본 그대로 사용
  if (colorName === "White") {
    tintedImageCache[cacheKey] = src;
    return Promise.resolve(src);
  }

  const hexColor = productColorMap[colorName] || "#8f96a3";

  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      // 원본 이미지 그리기
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      // 제품 모양(알파)만 남기고 선택 색으로 채우기
      ctx.globalCompositeOperation = "source-in";
      ctx.fillStyle = hexColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 기본 모드 복귀
      ctx.globalCompositeOperation = "source-over";

      const result = canvas.toDataURL("image/png");
      tintedImageCache[cacheKey] = result;
      resolve(result);
    };

    img.onerror = () => resolve(src);
    img.src = src;
  });
}

function selectAppliedWall(wallId, wallLabel) {
  const roomState = ensureRoomState(currentRoomKey);
  const item = roomState.walls[wallId];
  if (!item) return;

  currentSelectedWallId = wallId;
  currentSelectedWallLabel = wallLabel;
  currentSelectedProduct = item.product;
  currentSelectedSubType = item.subType || null;
  currentSelectedColor = item.color;

  renderProductButtons();
  renderCurtainTypeButtons();
  renderColorButtons();
  updateStatusBox();
  updateApplyButton();
}

function toggleAppliedState(wallId) {
  const roomState = ensureRoomState(currentRoomKey);
  const item = roomState.walls[wallId];
  if (!item) return;

  item.state = item.state === "closed" ? "half" : "closed";

  renderAppliedProducts();
  renderAppliedList();
  updateStatusBox();
}

function createOverlay(item, label) {
  const overlay = document.createElement("button");
  overlay.type = "button";
  overlay.className = "product-image-box";
  overlay.title = `${label} 적용 제품`;

  overlay.addEventListener("click", () => {
    selectAppliedWall(item.wallId, label);
  });

  const img = document.createElement("img");
  img.className = "product-image";
  if (item.areaType === "curtain") {
    img.classList.add("curtain-image");

    if (item.subType === "Sheer") {
      img.classList.add("sheer-image");
    }
  }

  const stateKey = item.state === "open"
    ? "open"
    : item.state === "half"
      ? "half"
      : "closed";

  let src = "";

  if (item.areaType === "curtain") {
    const curtainType = item.subType || "Sheer";
    src = productImageMap["Curtain"]?.[curtainType]?.[stateKey] || "";
  } else {
    src = productImageMap[item.product]?.[stateKey] || "";
  }

  img.src = src;
  img.alt = `${label} ${item.product}`;
  img.style.filter = getProductFilter(item.color);

  const badge = document.createElement("div");
  badge.className = "overlay-badge";

  const title = item.areaType === "curtain"
    ? `${item.product} / ${item.subType} / ${item.color} / ${stateKey}`
    : `${item.product} / ${item.color} / ${stateKey}`;

  badge.textContent = `${label} · ${title}`;

  overlay.appendChild(img);
  overlay.appendChild(badge);

  return overlay;
}

function renderAppliedList() {
  const room = roomAreas[currentRoomKey];
  const roomState = ensureRoomState(currentRoomKey);

  if (!room || !room.walls) {
    appliedList.textContent = "아직 적용된 항목이 없습니다.";
    return;
  }

  const items = [];

  room.walls.forEach((wall) => {
    const item = roomState.walls[wall.id];
    if (!item) return;

    items.push(`
      <div class="applied-item">
        <div class="applied-item-title">${escapeHtml(wall.label)}</div>
        <div class="applied-item-desc">
          ${escapeHtml(item.product)}
          ${item.subType ? ` / ${escapeHtml(item.subType)}` : ""}
          / ${escapeHtml(item.color)}
          / ${escapeHtml(item.state || "closed")}
        </div>
        <button class="toggle-state-btn" data-wall-id="${escapeHtml(wall.id)}">
          상태 변경
        </button>
      </div>
    `);
  });

  appliedList.innerHTML = items.length
    ? items.join("")
    : "아직 적용된 항목이 없습니다.";

  document.querySelectorAll(".toggle-state-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wallId = btn.dataset.wallId;
      toggleAppliedState(wallId);
    });
  });
}

function resetSelection() {
  currentSelectedWallId = null;
  currentSelectedWallLabel = null;
  currentSelectedProduct = null;
  currentSelectedSubType = null;
  currentSelectedColor = null;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

switchCategory("residential");