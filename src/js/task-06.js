const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkValidation);

function checkValidation(evt) {
    if (evt.currentTarget.value.trim().length === Number(inputEl.getAttribute("data-length"))) {
        inputEl.classList.remove('invalid');
   return     inputEl.classList.add('valid');
    }

    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid')
}