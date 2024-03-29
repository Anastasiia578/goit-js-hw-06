const body = document.querySelector("body");
const button = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
