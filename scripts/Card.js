const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 
class Card {
    constructor(selector, cardItem) {
        this._selector = selector;
        this._cardData = cardItem; ///????
        this._name = cardItem.name;
        this._link = cardItem.link;
        //console.log(this._cardData);
    }

    _getTemplate() {
        //console.log(this._selector);
        return document.querySelector(this._selector)
        .content
        .querySelector(".card")
        .cloneNode(true);
        
    }

    getView() {
        this._element = this._getTemplate();
        //Заполнение карточки
        this._element.querySelector(".card__title").textContent = this._name;
        this._elementImg = this._element.querySelector(".card__img");
        this._elementImg.alt = this._name;
        this._elementImg.src = this._link;
       // this._element
        console.log(this._element);
        return this._element;
    }
}
const asd = document.querySelector(".cards");
const proba = new Card(".card__template",initialCards[0])
console.log(Card);
asd.prepend(proba.getView());
proba.getView();
export default Card;