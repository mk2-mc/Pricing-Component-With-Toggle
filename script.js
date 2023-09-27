const button = document.querySelector(".toggle-button");
const price = document.querySelectorAll(".card-price");

button.addEventListener("click", () => {
  const state = button.getAttribute("aria-pressed");
  button.setAttribute("aria-pressed", state === "false");
  
  for (let i = 0; i < price.length; i++) {
    price[i].classList.toggle("hidden");
  }
});