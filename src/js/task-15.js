import '../css/common.css'
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

startBtn.addEventListener('click', startChangeBodyColor);
stopBtn.addEventListener('click', stopChangeBodyColor);

let timerId = null;
stopBtn.disabled = true;
stopBtn.classList.toggle('button-disabled');


function startChangeBodyColor() {
    disabledStartButton()

    const randomColor = getRandomHexColor();

    timerId = setInterval(() => {
    bodyEl.style.background =  `${getRandomHexColor()}`;
  }, 1000);

}


function stopChangeBodyColor() {
    disabledStopButton() 
    clearInterval(timerId)
}


function disabledStopButton() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    changeOpacityButton()
}

function disabledStartButton() {
    stopBtn.disabled = false;
    startBtn.disabled = true;
    changeOpacityButton()
}

function changeOpacityButton() {
    stopBtn.classList.toggle('button-disabled');
    startBtn.classList.toggle('button-disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}












