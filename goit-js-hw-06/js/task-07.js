const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(text.style.fontSize);

const changeSize = () => {
    text.style.fontSize = `${sizeControl.value}px`;
}

sizeControl.addEventListener('input', changeSize)
