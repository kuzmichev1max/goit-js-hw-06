const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterValueEl = document.querySelector("#value");
 
let counterValue = Number(counterValueEl.textContent);

counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};


console.log(counterValueEl.textContent);

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
