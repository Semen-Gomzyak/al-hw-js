const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

function renderList(elements) {
  for (const element of elements) {
    const itemEL = document.createElement("li");
    itemEL.textContent = element;
    itemEL.classList.add("item");
    listEl.append(itemEL);
  }
}

renderList(ingredients)