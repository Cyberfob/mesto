export default class Card {
    constructor(selector, cardItem, popup, {handleCardClick, hendlDeleteCard, hendlSwitchLike}) {
        this._selector = selector;
        this._name = cardItem.name;
        this._link = cardItem.link;
        this._cardId = cardItem.cardId
        this._userId = cardItem.userId
        this._ownerId = cardItem.ownerId
        this._likeCounter = cardItem.likesCount;
        this.likeStatus = cardItem.likeStatus;
        this._popup = document.querySelector(popup);
        this._handleCardClick = handleCardClick;
        this._popupDeleteCard = document.querySelector(".popup_type_confirmation")
        this._hendlCardDelete = hendlDeleteCard;
        this._hendlSwitchLike = hendlSwitchLike;
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
        this._hendlSwitchLike()
        this._likeButton.classList.toggle("card__like_active");
        this.likeStatus = !this.likeStatus;
    }

//Метод удаления карточек
    deleteCard = () => {
        this._trashcanButton.removeEventListener("click", () => {this._hendlCardDelete(this)});
        this._element.closest(".card").remove();
    }

//Метод установки слушателей
    _setEventListeners () {
        this._likeButton.addEventListener("click", this._likeSwitch);
        this._elementImg.addEventListener("click", this._handleCardClick);
        this._trashcanButton.addEventListener("click", () => {this._hendlCardDelete(this)});

    }

    likeRender = (count) => {
        this._likes.textContent = count.length;
    }
    
//Метод создания, заполнения и возврата карточки
    getView() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector(".card__like");
        this._trashcanButton = this._element.querySelector(".card__trashcan-btn");
        this._likes = this._element.querySelector(".card__like-counter");
        this._frameImg = this._popup.querySelector(".frame__img");
        this._frameTitle = this._popup.querySelector(".frame__title");
        //Заполнение карточки
        this._element.querySelector(".card__title").textContent = this._name;
        this._elementImg = this._element.querySelector(".card__img");
        this._elementImg.alt = this._name;
        this._elementImg.src = this._link;
        this._likes.textContent = this._likeCounter;
        
        if (this.likeStatus) {
            this._likeButton.classList.add("card__like_active");
        }

        if (this._userId !== this._ownerId) {
            this._element.removeChild(this._trashcanButton)
        }
        
        this._setEventListeners();
        
        return this._element;
    }
}


// Преобразуйте класс Card
// Свяжите класс Card c попапом. Сделайте так, чтобы Card 
// принимал в конструктор функцию 
// handleCardClick. Эта функция должна открывать попап с 
// картинкой при клике на карточку.