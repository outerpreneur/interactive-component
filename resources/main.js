const mainContainer = document.querySelector(".container-box");
const thanksContainer = document.querySelector(".thank-you");

const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
// get the numbered buttons
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  // when click remove class hidden
  thanksContainer.classList.remove("hidden");
  // when click remove container box
  mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  // when click add class hidden
  thanksContainer.classList.add("hidden");
  // when click show container box
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  // when clicking rating button
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
