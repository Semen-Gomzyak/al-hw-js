import '../css/common.css'
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix';


const inputEl = document.querySelector("#datetime-picker");
const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let timerId = null;
let dateSelectedByUser = 0;

startBtnEl.disabled = true;
startBtnEl.classList.toggle('button-disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      clearTime()
    console.log(selectedDates[0]);
    dateSelectedByUser = selectedDates[0].getTime();
      
      if (options.defaultDate > selectedDates[0]) {
          
          Notify.failure('Please choose a date in the future');
          return;
    }
    
    Notify.info('Please press the Start button to start the countdown timer');    
  },
  }

const fp = flatpickr(inputEl, options);




startBtnEl.addEventListener('click', startTimer);

function startTimer() {
    
    //  dateSelectedByUser = Date.parse(`${inputEl.value}`);
    let decrementTime = dateSelectedByUser - options.defaultDate;

    timerId = setInterval(() => {
  decrementTime = decrementTime - 1000;
  convertMs(decrementTime);
}, 1000);
   
    startBtnEl.disabled = true;
    startBtnEl.classList.toggle('button-disabled');
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    textTimer(days, hours, minutes, seconds)
  return { days, hours, minutes, seconds };
}

function textTimer(days, hours, minutes, seconds) {
    daysEl.textContent = addLeadingZero(days);
     hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
     secondsEl .textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function clearTime() {
    daysEl.textContent = '00';
    hoursEl.textContent ='00';
    minutesEl.textContent = '00';
    secondsEl.textContent ='00'; 
    clearInterval(timerId);

    startBtnEl.disabled = false;
    startBtnEl.classList.toggle('button-disabled');
}







