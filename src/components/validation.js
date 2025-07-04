function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inputErrorClass,
  inactiveButtonClass,
}) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setValidationHandlers(formElement);
  });

  function setValidationHandlers(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    setButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        setButtonState(inputList, buttonElement, inactiveButtonClass);
        checkInputValidity(formElement, inputElement);
      });
    });

    function checkInputValidity(formElement, inputElement) {
      if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
      } else inputElement.setCustomValidity("");

      if (!inputElement.validity.valid)
        showInputError(
          formElement,
          inputElement,
          inputElement.validationMessage
        );
      else hideInputError(formElement, inputElement);

      function showInputError(formElement, inputElement, validationMessage) {
        const errorElement = formElement.querySelector(
          `.${inputElement.id}-error`
        );
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = validationMessage;
      }

      function hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(
          `.${inputElement.id}-error`
        );
        inputElement.classList.remove(inputErrorClass);
        errorElement.textContent = "";
      }
    }
  }
}

function setButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}

function clearValidation(
  popup,
  {
    formSelector,
    inputSelector,
    submitButtonSelector,
    inputErrorClass,
    inactiveButtonClass,
  }
) {
  const formElement = popup.querySelector(formSelector);
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  setButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    if (inputElement.classList.contains(inputErrorClass)) {
      hideInputError(inputErrorClass);
    }
  });
}

export { enableValidation, clearValidation };