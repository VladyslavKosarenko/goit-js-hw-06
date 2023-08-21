function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector('.change-color')
const spanColorValue = document.querySelector('.color')
btnChangeColor.addEventListener('click', onClick);
function onClick() {
  const randomColor = getRandomHexColor();
  spanColorValue.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
  console.log(randomColor);
}