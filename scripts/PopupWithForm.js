import Popup from "./Popup.js"
export default class PopupWithForm extends Popup {
    constructor (popupSelector, {Submit}) {
        super(popupSelector)
        this._submit = Submit;
        this._inputs = Array.from(this._popupSelector.querySelectorAll('.modal__input'));
        this._form = popupSelector.querySelector(".modal__form")
        this._inputValue = {};
    }

    close() { //Закрываем форму и сбрасываем
        this._popupSelector.closest(".popup").classList.remove("popup_active");
        document.removeEventListener("keyup",this._handleEscClose);
        this._form.reset();
    }

    _getInputValues = () => { //Собираем поля всех инпутов формы
        this._inputs.forEach(inputElement => {
            const elementName = inputElement.getAttribute("name");
            this._inputValue[elementName] = inputElement.value;
        })
    }

    setEventListeners () { //Добавляем обработчики клика по крестику и сабмита формы
        this._form.addEventListener("submit", this._submit);
        this._popupSelector.addEventListener("click", (e) => {
            if (e.target.classList.contains("popup__overlay") || e.target.classList.contains("popup__close-btn")) {
                this.close()
            }
        });
    }
}


// Создайте класс PopupWithForm

// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:

// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.

// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.

// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm 
// должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.

// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.