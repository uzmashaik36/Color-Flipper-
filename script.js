const flipBtn = document.querySelector(".flip-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const modeText = document.querySelector(".mode");
const codeText = document.querySelector(".code");
const container = document.querySelector(".container");
let isHexMode = true;
let currentColor = "#ffffff";

// Helper: Convert RGB to HEX
function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// Helper: Convert HEX to RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

// Generate random HEX color
function getRandomHex() {
  const r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return rgbToHex(r, g, b);
}

// Update the page with current color and mode
function updateDisplay() {
  document.body.style.backgroundColor = currentColor;
  container.style.backgroundColor = currentColor + "20"; // subtle transparency
  modeText.textContent = `Current Mode: ${isHexMode ? "HEX" : "RGB"}`;
  codeText.textContent = `Current Code: ${
    isHexMode ? currentColor : hexToRgb(currentColor)
  }`;
}

// Flip color
flipBtn.addEventListener("click", () => {
  currentColor = getRandomHex();
  updateDisplay();
});

// Toggle HEX ↔ RGB
toggleBtn.addEventListener("click", () => {
  isHexMode = !isHexMode;
  updateDisplay();
});

// Initial Display
updateDisplay();
