export default class Card {
    constructor(selector, cardItem, popup, popupOpen) {
        this._selector = selector;
        this._name = cardItem.name;
        this._link = cardItem.link;
        this._popup = popup;
        this._popupOpen = popupOpen;
    }
// Метод клонирования разметки из шаблона
    _getTemplate() {
        return document.querySelector(this._selector)
        .content
        .querySelector(".card")
        .cloneNode(true);
        
    }
//Метод лайкнуть фото
    _likeSwitch = () => {
        this._likeButton.classList.toggle("card__like_active")
    }
//Метод удаления карточек
    _deleteCard = () => {
        this._element.closest(".card").remove();
    }
//Метод для  демонстрации фото
    _showCard = () => {
        this._frameImg.alt = this._name;
        this._frameTitle.textContent = this._name;
        this._frameImg.src = this._link;
        this._popupOpen(this._popup);
    }
//Метод установки слушателей
    _setEventListeners () {
        this._likeButton.addEventListener("click", this._likeSwitch);
        this._trashcanButton.addEventListener("click", this._deleteCard);
        this._elementImg.addEventListener("click", this._showCard);
    }
//Метод создания, заполнения и возврата карточки
    getView() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector(".card__like");
        this._trashcanButton = this._element.querySelector(".card__trashcan-btn");
        this._frameImg = this._popup.querySelector(".frame__img");
        this._frameTitle = this._popup.querySelector(".frame__title");
        //Заполнение карточки
        this._element.querySelector(".card__title").textContent = this._name;
        this._elementImg = this._element.querySelector(".card__img");
        this._elementImg.alt = this._name;
        this._elementImg.src = this._link;
        this._setEventListeners();
        return this._element;
    }
}
