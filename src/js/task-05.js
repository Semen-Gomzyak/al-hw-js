const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

inputEl.addEventListener("input", changeName);

function changeName(evt) {

    if (evt.currentTarget.value.trim() === "") {
      return  spanEl.textContent = "Anonymous";
    }

  return  spanEl.textContent = evt.currentTarget.value;
}