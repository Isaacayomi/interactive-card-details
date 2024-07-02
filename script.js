"use script";
// Inputs
const cardNameInput = document.querySelector(".holder__name");
const cardNumberInput = document.querySelector(".card__number");
const cardMonthInput = document.querySelector(".card__month");
const cardYearInput = document.querySelector(".card__year");
const cvcInput = document.querySelector(".cvc");
const inputs = document.querySelectorAll("input");

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

// Main & Success Page
const form = document.querySelector(".form__section");
const successPage = document.querySelector(".success__page");

// Check Empty Fields
const emptyFields = (displayEl, inputEl, errorEl, errorMsg = "") => {
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

const emptyInputFields = () => {
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

const incompleteDigits = function (inputEl, errorEl) {
  if (inputEl.value.trim().length < 16) {
    errorEl.style.display = "block";
    errorEl.style.color = "red";
    inputEl.style.border = "1px solid red";
    errorEl.textContent = "Cannot be less than 16 digits";
  }
};

// Checks incorrect card details
const incorrectCardDetails = (displayEl, inputEl, errorEl, errorMsg = " ") => {
  if (inputEl.value.trim().length === 0) {
    // Empty field
    errorEl.style.display = "block";
    errorEl.style.color = "red";
    inputEl.style.border = "1px solid red";
    errorEl.textContent = "Cannot be blank";
  } else if (/^\d+$/.test(inputEl.value)) {
    // Valid format (only numbers)
    errorEl.style.display = "none";
    inputEl.style.border = "1px solid gray";
    displayEl.textContent = inputEl.value;
  } else {
    // Wrong format (not only numbers)
    errorEl.style.display = "block";
    errorEl.style.color = "red";
    inputEl.style.border = "1px solid red";
    errorEl.textContent = "Numbers only";
  }
};

// Submit Details
const submitDetails = () => {
  emptyInputFields();
  incorrectCardDetails(cardNoDisplay, cardNumberInput, cardHolderNumberErr);
  incompleteDigits(cardNumberInput, cardHolderNumberErr);
  incorrectCardDetails(cvcDisplay, cvcInput, cvcErr);
  incorrectCardDetails(expMonthDisplay, cardMonthInput, cardMonthErr);
  incorrectCardDetails(expYearDisplay, cardYearInput, cardYearErr);
};

// Display Success Page
const showSuccess = () => {
  if (
    cardHolderNameErr.style.display === "none" &&
    cardHolderNumberErr.style.display === "none" &&
    cardMonthErr.style.display === "none" &&
    cardYearErr.style.display === "none" &&
    cvcErr.style.display === "none"
  ) {
    if (!form.classList.contains("form__display")) {
      form.classList.add("form__display");
      successPage.classList.remove("success__page__display");
    }
  }
};

// Back to form section
const backToForm = () => {
  if (form.classList.contains("form__display")) {
    form.classList.remove("form__display");
    successPage.classList.add("success__page__display");
  }
  for (let i = 0; i < inputs.length; i++) {
    // Clear input fields
    inputs[i].value = " ";
    inputs[i].placeholder = inputs[i].getAttribute("placeholder");
  }
};

// Submit form
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  submitDetails();
  showSuccess();
});

proceedBtn.addEventListener("click", function (e) {
  e.preventDefault();
  backToForm();
});
