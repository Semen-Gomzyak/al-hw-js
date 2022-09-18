import throttle from "lodash.throttle";
import {Notify} from "notiflix";
import '../css/03-feedback.css';
import '../css/common.css';

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

formEl.addEventListener('submit', formSubmit);
formEl.addEventListener('input', throttle(sendPost, 500));
let userPost = {};


function sendPost(evt) {
  evt.preventDefault()
  
   userPost = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userPost));
}

function refreshSait() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const sevedUserPost = localStorage.getItem(LOCALSTORAGE_KEY);
    
    emailEl.value = JSON.parse(sevedUserPost).email;
    messageEl.value = JSON.parse(sevedUserPost).message;
  }
}

function formSubmit(evt) {
  evt.preventDefault()

  if (formEl.elements.email.value.trim() === "" ||
    formEl.elements.message.value.trim() === '') {
    Notify.failure('Please fill in all fields');
    }
  
 
  console.log(userPost)
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formEl.reset();
}

refreshSait()