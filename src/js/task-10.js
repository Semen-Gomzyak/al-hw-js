import { Notify } from 'notiflix';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

inputEl.addEventListener('input', getAmount);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

destroyBtn.disabled = true;
destroyBtn.classList.toggle('button-disabled');

function getAmount() {
   return Number(inputEl.value)
}

function createBoxes(amount) {
  amount = getAmount();
 

  
  if (inputEl.value < 1 || inputEl.value > 100) {
    return Notify.failure('Please enter a number from 1 to 100');
  }
  
  for (let i = 1; i <= inputEl.value; i += 1){
    
    const sizeBox = 30 + i *10;
    const renderBox = boxesEl.insertAdjacentHTML
      ("beforeend", `<div style = "background-color: ${getRandomHexColor()}; width: ${sizeBox}px; height: ${sizeBox}px; ">`);
  }

  inputEl.value = "";
  disabledCreateButton()
  }

function destroyBoxes() {
  boxesEl.innerHTML = "";
  disabledDestroyButton() 
}

function disabledDestroyButton() {
    destroyBtn.disabled = true;
    createBtn.disabled = false;
    changeOpacityButton()
}

function disabledCreateButton() {
    destroyBtn.disabled = false;
    createBtn.disabled = true;
    changeOpacityButton()
}

function changeOpacityButton() {
    destroyBtn.classList.toggle('button-disabled');
    createBtn.classList.toggle('button-disabled');
}



