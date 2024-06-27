"use script";
// Inputs
const cardNameInput = document.querySelector(".holder__name");
const cardNumberInput = document.querySelector(".card__number");
const cardMonthInput = document.querySelector(".card__month");
const cardYearInput = document.querySelector(".card__year");
const cvcInput = document.querySelector(".cvc");

// Displays
const cvcDisplay = document.querySelector(".cvc__no");
const cardNoDisplay = document.querySelector(".card__no");
const cardNameDisplay = document.querySelector(".card__name");
const expMonthDisplay = document.querySelector(".exp__month");
const expYearDisplay = document.querySelector(".exp__year");
const errorMsg = document.querySelectorAll(".error__msg");
const cardHolderNameErr = document.querySelector(".cardholdername__err");
const cardHolderNumberErr = document.querySelector(".cardholdernumber__err");
const cardMonthErr = document.querySelector(".cardmonth__err");
const cardYearErr = document.querySelector(".cardyear__err");
const cvcErr = document.querySelector(".cvc__err");

// Buttons
const submitBtn = document.querySelector(".submit__btn");
const proceedBtn = document.querySelector(".proceed__btn");

const emptyFields = function (inputEl, errorEl, errorMsg = "") {
  if (inputEl.value.trim().length === 0) {
    errorEl.style.display = "block";
    errorEl.style.color = "red";
    inputEl.style.border = "1px solid red";
  } else {
    errorEl.style.display = "none";
    inputEl.style.border = "1px solid #dfdee0";
  }

  if (errorMsg) {
    errorEl.textContent = errorMsg;
  }
};

const validateFields = function () {
  emptyFields(cardNameInput, cardHolderNameErr, "Cannot be blank");
  emptyFields(cardNumberInput, cardHolderNumberErr, "Cannot be blank");
  emptyFields(cardMonthInput, cardMonthErr, "Cannot be blank");
  emptyFields(cardYearInput, cardYearErr, "Cannot be blank");
  emptyFields(cvcInput, cvcErr, "Cannot be blank");
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateFields();
});
