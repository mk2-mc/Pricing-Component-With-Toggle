const button = document.querySelector(".toggle-button");
const toggle = document.querySelector(".toggle-switch");
const label = document.querySelector(".toggle-label");
const price = document.querySelectorAll(".card-price");
let annual = false;

button.addEventListener("click", () => {
  if (!annual) {
    label.innerHTML = "Annual pricing enabled";
  } else {
    label.innerHTML = "Monthly pricing enabled";
  }
  
  annual = !annual;
  toggle.classList.toggle("toggle-left");
  price.forEach(e => e.classList.toggle("hidden"));
});