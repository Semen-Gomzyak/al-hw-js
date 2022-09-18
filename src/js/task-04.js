const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');


incrementBtn.addEventListener("click", incrementValue);
decrementBtn.addEventListener("click", decrementValue);
let counterValue  = 0;

function incrementValue() {
    counterValue  += 1;

 return   valueEl.textContent = counterValue ;
}

function decrementValue() {
    counterValue  -= 1;

 return   valueEl.textContent = counterValue ;
}