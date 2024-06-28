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

const emptyFields = function (displayEl, inputEl, errorEl, errorMsg = "") {
  if (inputEl.value.trim().length === 0) {
    errorEl.style.display = "block";
    errorEl.style.color = "red";
    inputEl.style.border = "1px solid red";
  } else {
    errorEl.style.display = "none";
    inputEl.style.border = "1px solid #dfdee0";
    displayEl.textContent = inputEl.value;
  }

  if (errorMsg) {
    errorEl.textContent = errorMsg;
  }
};

const checkEmptyFields = function () {
  emptyFields(
    cardNameDisplay,
    cardNameInput,
    cardHolderNameErr,
    "Cannot be blank"
  );

  emptyFields(expMonthDisplay, cardMonthInput, cardMonthErr, "Cannot be blank");
  emptyFields(expYearDisplay, cardYearInput, cardYearErr, "Cannot be blank");
  emptyFields(cvcDisplay, cvcInput, cvcErr, "Cannot be blank");

  return;
};

const incompleteCardNo = function (displayEl, inputEl, errorEl) {
  if (inputEl.value.trim().length < 15 || inputEl.value.trim().length > 16) {
    errorEl.style.display = "block";
    errorEl.style.color = "red";
    inputEl.style.border = "1px solid red";
  } else {
    errorEl.style.display = "none";
    inputEl.style.border = "1px solid gray";
    displayEl.textContent = inputEl.value;
  }
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  checkEmptyFields();
  incompleteCardNo(cardNoDisplay, cardNumberInput, cardHolderNumberErr);
});
