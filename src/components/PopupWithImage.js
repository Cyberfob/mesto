import Popup from "./Popup.js"
export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._popupFrameImage = this._popup.querySelector(".frame__img");
        this._popupFrameTitle = this._popup.querySelector(".frame__title");
        
    }

    //Метод открытия попапа
    open(cardData) { //Вставить картинку и подпись, открыть попап
        this._popupFrameImage.src = cardData.link;
        this._popupFrameImage.alt = cardData.name;
        this._popupFrameTitle.textContent = cardData.name
        super.open();
    }
}

// Создайте класс PopupWithImage

// Создайте класс PopupWithImage, который наследует от Popup.

// Этот класс должен перезаписывать родительский метод open.

// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения 
// и подписью к картинке.