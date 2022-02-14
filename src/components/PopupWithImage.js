import Popup from "./Popup.js"
export default class PopupWithImage extends Popup {
    constructor (cardData,popupSelector) {
        super(popupSelector);
        //this._popupSelector = document.querySelector(popupSelector);
        this._cardData = cardData;
        this._popupFrameImage = this._popupSelector.querySelector(".frame__img");
        this._popupFrameTitle = this._popupSelector.querySelector(".frame__title");
        
    }

    //Метод открытия попапа
    open() { //Вставить картинку и подпись, открыть попап
        this._popupFrameImage.src = this._cardData.link;
        this._popupFrameImage.alt = this._cardData.name;
        this._popupFrameTitle.textContent = this._cardData.name
        this._popupSelector.classList.add("popup_active");
        this._popupSelector.classList.add("popup_active");
        document.addEventListener("keyup",this._handleEscClose);
    }
}

// Создайте класс PopupWithImage

// Создайте класс PopupWithImage, который наследует от Popup.

// Этот класс должен перезаписывать родительский метод open.

// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения 
// и подписью к картинке.