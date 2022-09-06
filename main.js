const mainContainer = document.querySelector(".container");
const thankYouContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector(".btn-submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".button")

submitButton.addEventListener("click", function () {
	thankYouContainer.classList.remove("hidden")
	mainContainer.classList.add("hidden")
});

rates.forEach((rate) => {
	rate.addEventListener("click", () => {
		rating.innerHTML = rate.innerHTML
	})
});