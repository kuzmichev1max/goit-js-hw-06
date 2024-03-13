const colorText = document.querySelector('.color');
const button = document.querySelector('.change-color');
const body = document.querySelector('body');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => {
  const randomColor = getRandomHexColor();
  colorText.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

button.addEventListener('click', changeColor)