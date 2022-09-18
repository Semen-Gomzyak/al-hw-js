import { Notify } from 'notiflix';
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', checkUser);

function checkUser(evt) {
    evt.preventDefault();

 const  {
    elements: { email, password }
 } = evt.currentTarget;
    
    const user = {
    Email: email.value,
    Password: password.value
  }

    if (email.value.trim() === "" || password.value.trim() === "") {
         Notify.failure('All fields must be filled');
    }

    console.log(user);
    evt.currentTarget.reset();
}