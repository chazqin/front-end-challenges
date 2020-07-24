const confirm = document.querySelector(".signup-message--confirm");
const error = document.querySelector(".signup-message--error");

const signupBody = document.querySelector(".signup-body");
const input = document.querySelector(".signup-body-inputControl-field");
const button = document.querySelector(".signup-body-inputControl-button");

button.addEventListener("click", function(e) {
  e.preventDefault();
  if (input.validity.typeMismatch) {
    error.classList.remove("u-disappear");
  } else {
    signupBody.classList.add("u-disappear");
    error.classList.add("u-disappear");
    confirm.classList.remove("u-disappear");
  }
});