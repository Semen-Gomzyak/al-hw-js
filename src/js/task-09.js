function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const textColor = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', startChangeBodyColor);

function startChangeBodyColor() {
  const bodyColor = getRandomHexColor();
  
  bodyEl.style.background = `${bodyColor}`;
  textColor.textContent = `${bodyColor}`;
}