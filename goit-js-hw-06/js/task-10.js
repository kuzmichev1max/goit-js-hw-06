function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

const createBoxes = amount => {
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.margin = "5px";
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.appendChild(box);
  }
  
};

const createAmount = () => {
  const amount = input.value;
  createBoxes(amount);
}

const destroy = () => {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', createAmount)
destroyBtn.addEventListener('click', destroy)