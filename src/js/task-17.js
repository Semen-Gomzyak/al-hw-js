const formEl = document.querySelector('.form');
import { Notify } from 'notiflix';

console.log(formEl)


formEl.addEventListener('submit', submitForm);

function submitForm(evt) {
  evt.preventDefault()
  
  const userSelectedDelay = Number(formEl.delay.value);
  const userSelectedStep = Number(formEl.step.value);
  const userSelectedAmount = Number(formEl.amount.value);
  
  optionsPromise(userSelectedDelay, userSelectedStep, userSelectedAmount)
  formEl.reset()
}


function optionsPromise(delay, step, amount) {
  for (i = 1; i <= amount; i += 1 ){
    createPromise(i, delay).then((i, delay) => {
      Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
    })
    .catch((i, delay) => {
      Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
    })

    delay += step;
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
   setTimeout(() => {
  if (shouldResolve) {
    resolve(position, delay );
  } else {
    reject(position, delay);
  }
   }, delay);
    });
}


