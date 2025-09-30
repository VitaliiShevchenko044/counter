const INCREMENT_BUTTON = document.querySelector(".increment");
const DECREMENT_BUTTON = document.querySelector(".decrement");
const NUMBER = document.querySelector(".number");

let number = 0;

INCREMENT_BUTTON.addEventListener("click", () => {
  NUMBER.innerHTML = ++number;
});

DECREMENT_BUTTON.addEventListener("click", () => {
  NUMBER.innerHTML = --number;
});
