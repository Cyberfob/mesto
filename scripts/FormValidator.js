export default class FormValidator {
    constructor(validationConfig, formElement) {
        this._formElement = formElement;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = formElement.querySelector(validationConfig.submitButtonSelector);
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
    }

//Методы--------------------------------------------------------------------

//Функция показа сообщения об ошибке при валидации формы
    _showInputError = (inputElement) => {
        this._errorElement = this._formElement.querySelector(`#${inputElement.id}Error`);
        inputElement.classList.add(this._inputErrorClass);
        this._errorElement.textContent = inputElement.validationMessage;
        this._errorElement.classList.add(this._errorClass);
    }

//Функция скрития ошибки когда форма валидна
    _hideInputError = (inputElement) => {
        this._errorElement = this._formElement.querySelector(`#${inputElement.id}Error`);
        inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.textContent = inputElement.validationMessage;
        this._errorElement.classList.remove(this._errorClass);
    }

//Функция проверки формы на валидность
    _isValid  (inputElement)  {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        }
        else {
            this._hideInputError(inputElement);
        }
    }

//Функция проверки всех полей формы для функции управления активности кнопки submit
    _hasInvalidInput = () => {
        return this._inpitsList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

//Функция отключения кнопки submit
    _disablingButton () {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
        this._submitButtonSelector.setAttribute("disabled", true);
    }

//Функция включения кнопки submit
    _enablingButton() {
        this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
        this._submitButtonSelector.removeAttribute("disabled", true);
    }

//Функция изменения активности кнопки submit
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disablingButton();
        }
        else {
            this._enablingButton();
        }
    }

//Функция назначения слушателей для полей ввода (Inputs) и деактивация кнопки submit при первом открытии форм
    _setEventListeners () {
        this._inpitsList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
        this._inpitsList.forEach(InputElement => {
            InputElement.addEventListener("input", () => {
                
                this._isValid(InputElement);
                this._toggleButtonState();
                
            })
        })
    }

//Функция инициирования валидации форм
    enableValidation() {
        this._formElement.addEventListener("submit", e => {e.preventDefault()});
        this._setEventListeners();
        this._disablingButton ();
    }

}