const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsEl = document.querySelector('#ingredients')
let contain = ingredients.map((el) => {
  let createEl = document.createElement('li');
createEl.textContent = el;
  createEl.classList.add('item');
  console.log(el)
  return createEl;
})


ingredientsEl.append(...contain);
