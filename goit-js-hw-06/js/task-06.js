const input = document.querySelector("#validation-input");
const requiredLength = Number(input.dataset.length);

const checkLength = () => {
  if (input.value.length !== requiredLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
};

input.addEventListener("blur", checkLength);
