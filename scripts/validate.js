//Обьявление конфига для валидации
const validationConfig = {
    formSelector: '.modal__form',
    inputSelector: '.modal__input',
    submitButtonSelector: '.modal__submit',
    inactiveButtonClass: 'modal__submit_disabled',
    inputErrorClass: 'modal__input_type_error',
    errorClass: 'modal__input_error_visible'
}

//Функции--------------------------------------------------------------------

//Функция показа сообщения об ошибке при валидации формы
const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
}

//Функция скрития ошибки когда форма валидна
const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(validationConfig.errorClass);
}

//Функция проверки формы на валидность
const isValid = (formElement, inputElement, validationConfig) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    }
    else {
        hideInputError(formElement, inputElement, validationConfig);
    }
};

//Функция проверки всех полей формы для функции управления активности кнопки submit
const hasInvalidInput = (inputsList) => {
    return inputsList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

//Функция отключения кнопки submit
const disablingButton = (buttonElement, validationConfig) => {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
};

//Функция включения кнопки submit
const enablingButton = (buttonElement, validationConfig) => {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true);
}

//Функция изменения активности кнопки submit
const toggleButtonState = (inputsList, buttonElement, validationConfig) => {
    if (hasInvalidInput(inputsList)) {
        disablingButton(buttonElement, validationConfig);
    }
    else {
        enablingButton(buttonElement, validationConfig);
    }
};

//Функция назначения слушателей для полей ввода (Inputs) и деактивация кнопки submit при первом открытии форм
const setEventListeners = (formElement, validationConfig) => {
    const inputsList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputsList, buttonElement, validationConfig);
    inputsList.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            isValid(formElement, inputElement, validationConfig);
            toggleButtonState(inputsList, buttonElement, validationConfig);
        });
    });
};

//Функция инициирования валидации форм
const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach(formElement => {
        formElement.addEventListener("submit", e => {
            e.preventDefault();
        });
        setEventListeners(formElement, validationConfig);
    });
};
enableValidation(validationConfig);