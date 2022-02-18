export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    //Метод открытия попапа
    open() { 
        this._popupSelector.classList.add("popup_active");
        document.addEventListener("keyup",this._handleEscClose);
        //this._form.reset();
    }

    //Метод закрытия попапа
    close() {
        this._popupSelector.closest(".popup").classList.remove("popup_active");
        document.removeEventListener("keyup",this._handleEscClose);
        this._form.reset();
    }

    //Метод навешивания слушателей
    setEventListeners() {
        this._popupSelector.addEventListener("mousedown", (e) => {
            if (e.target.classList.contains("popup__overlay") || e.target.classList.contains("popup__close-btn")) {
                this.close()
            }
        });
        
    }
    //Метод логики закрытия попапа клавишей "ESC" 
    _handleEscClose = (e) => {
        if (e.code === 'Escape'){
            this.close();
        }
    }
}

// Создайте класс Popup

// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:

// Принимает в конструктор единственный параметр — селектор попапа.

// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.

// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.

// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
// Модальное окно также закрывается при клике на затемнённую область вокруг формы.