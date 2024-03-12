const inputName = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (inputName.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
});
