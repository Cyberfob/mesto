import Popup from "./Popup.js"
export default class PopupWithForm extends Popup {
    constructor (popupSelector, {Submit}) {
        super(popupSelector)
        this._submit = Submit;
        this._inputs = Array.from(this._popupSelector.querySelectorAll('.modal__input'));
        this._form = this._popupSelector.querySelector(".modal__form")
        this._inputValue = {};
        this.saveBtn = this._popupSelector.querySelector(".modal__submit")
    }

    //Метод закрытия попапа
    close() { //Закрываем форму и сбрасываем
        super.close();
        this._form.reset();
    }

    //Метод сбора информации с инпутов формы
    getInputValues = () => { //Собираем поля всех инпутов формы)
        this._inputs.forEach(inputElement => {
            const elementName = inputElement.getAttribute("name");
            this._inputValue[elementName] = inputElement.value;
        })
        return this._inputValue;
    }

    //Метод добавления обработчиков клика по крестику и сабмита формы
    setEventListeners () { 
        super.setEventListeners();
        this._form.addEventListener("submit", this._submit);
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