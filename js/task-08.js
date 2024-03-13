const submitBtn = document.querySelector('button[type="submit"]');
const emailField = document.querySelector('input[type="email"]');
const passwordField = document.querySelector('input[type="password"]');
const registerForm = document.querySelector(".login-form");

const submit = (event) => {
  event.preventDefault();

  if (emailField.value === "" || passwordField.value === "") {
    alert("Please, fill email and password");
  } else {
    const userData = {
      email: emailField.value,
      password: passwordField.value,
    };
    console.log(userData);
    registerForm.reset();
  }
};

registerForm.addEventListener("submit", submit);
