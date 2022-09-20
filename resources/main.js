// DECLARATIONS

// declaring variables by targeting class
const mainContainer = document.querySelector(".container-box");
const thanksContainer = document.querySelector(".thank-you");

// declaring variables by targeting id
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");

// get ALL the numbered buttons
const rates = document.querySelectorAll(".btn");



// MAIN BUTTON CLICK EVENTS

// action when submitting the main button
submitButton.addEventListener("click", () => {
  // when click remove class hidden
  thanksContainer.classList.remove("hidden");
  // when click remove container box
  mainContainer.style.display = "none";
});



// RATE AGAIN BUTTON CLICK EVENTS

// action when submitting the rate again button
rateAgain.addEventListener("click", () => {
  // when clicking rate again button == disable submit button
  submitButton.disabled = true;
  // when click add class hidden
  thanksContainer.classList.add("hidden");
  // when click show container box
  mainContainer.style.display = "block";
});



// RATINGS BUTTONS CLICK EVENTS

// action when choosing the numbered button
rates.forEach((rate) => {
  // when clicking rating button
  rate.addEventListener("click", () => {
    // button disabled == false
    submitButton.disabled = false;
    rating.innerHTML = rate.innerHTML;
  });
});
