const validationConfig = {
    formSelector: '.modal__form',
    inputSelector: '.modal__input',
    submitButtonSelector: '.modal__submit',
    inactiveButtonClass: 'modal__submit_disabled',
    inputErrorClass: 'modal__input_type_error',
    errorClass: 'modal__input_error_visible'
}
//Inputs (масив всех инпутов страницы)

const inputs = document.querySelectorAll(".modal__input");

//Функции
    //Функция ..... Сделать коменты везде
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
}

const hideInputError = (formElement, inputElement,) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(validationConfig.errorClass);
}



// console.log(formList);
// console.log(formList2);


const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
        hideInputError(formElement, inputElement);
    }
};



const hasInvalidInput = (inputsList) => {
    return inputsList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputsList, buttonElement) => {
    if (hasInvalidInput(inputsList)) {
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    }
    else {
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
        buttonElement.removeAttribute('disabled', true);
    }
};

const setEventListeners = (formElement) => {
    const inputsList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    inputsList.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            isValid(formElement, inputElement);
            toggleButtonState(inputsList, buttonElement);
        });
    });
};

const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach(formElement => {
        formElement.addEventListener("submit", e => {
            e.preventDefault();
        });
        setEventListeners(formElement);
    });
};
enableValidation(validationConfig);