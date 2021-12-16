//Инициализация массива с карточками-------------------------------------------------------
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

//Инициализация переменных-----------------------------------------------------------------

//Popups
const popupProfile = document.querySelector(".popup_type_profile");
const popupCardAdd = document.querySelector(".popup_type_add");
const popupCardShow = document.querySelector(".popup_type_pictures");

// Inputs
const inputName = popupProfile.querySelector(".modal__input_type_name");
const inputAbout = popupProfile.querySelector(".modal__input_type_about");
const inputTitle = popupCardAdd.querySelector(".modal__input_type_title");
const inputLink = popupCardAdd.querySelector(".modal__input_type_link");

//Buttons
    //Close Popup
const buttonClosePopupImg = popupCardShow.querySelector(".popup__close-btn_type_pictures");
const buttonClosePopupProfile = popupProfile.querySelector(".popup__close-btn_type_profile");
const buttonClosePopupAddCard = popupCardAdd.querySelector(".popup__close-btn_type_add-card");
    //Remove Card
const buttonRemoveCard = document.querySelector(".card__trashcan-btn");
    //Open Popup
const buttonOpenPopupAddCard = document.querySelector(".profile__add-btn");
const buttonOpenPopupProfile = document.querySelector(".profile__btn");

// Forms
const formPopupProfile = document.querySelector(".modal__form_type_profile");
const formPopupAddCard = document.querySelector(".modal__form_type_add-card");

//Cards
const cardTemplate = document.querySelector(".card__template");
const cards = document.querySelector(".cards");
const cardLike = cards.querySelectorAll(".card__like");

//Переменные хранения пользовательской информации
const cardImg = popupCardShow.querySelector(".frame__img");
const cardTitle = popupCardShow.querySelector(".frame__title");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

//Функции--------------------------------------------------------------------

//Функция добавления карточек
function createCard (cardData) {
    const card = cardTemplate.content.querySelector(".card").cloneNode(true);
    card.querySelector(".card__title").textContent = cardData.name;
    const newCardImg = card.querySelector(".card__img");
    newCardImg.alt = cardData.name;
    newCardImg.src = cardData.link;
    // console.log(element);
    card.querySelector(".card__img").addEventListener("click", (card) => {
        openPopupCardShow(card);
    });
    card.querySelector(".card__like").addEventListener("click", likeSwitch);
    card.querySelector(".card__trashcan-btn").addEventListener("click", deleteCard);
    return card;
}

//Функции открытия Popup

    //Функция открытия Popup
function openPopup (popup) {
    popup.classList.add("popup_active");
    //console.log("element");
};

    //Функция открытия popupProfile
function openPopupProfile (popup) {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    openPopup(popup);
};

    //Функция открытия popupCardShow
function openPopupCardShow (card) {
    const cardData = card.target.closest(".card");
    cardImg.src = cardData.querySelector(".card__img").src;
    cardImg.alt = cardData.querySelector(".card__title").textContent;
    cardTitle.textContent = cardData.querySelector(".card__title").textContent;
    openPopup(popupCardShow);
};

//Функция закрытия Popup
function closePopup (popup) {
    popup.classList.remove("popup_active");
};

//Функция удаления карточек
function deleteCard (e) {
    e.target.closest(".card").remove();
}

// Функция лайкнуть фото
function likeSwitch (e) {
    e.target.classList.toggle("card__like_active");
}

//Функция отправки формы Profile
function handlerProfileSubmit (e) {
    e.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfile);
}

//Функция отправки формы CardAdd
function handlerCardSubmit (e) {
    e.preventDefault();
    const cardData = [{name: '',link: ''}];
    cardData.name = inputTitle.value;
    cardData.link = inputLink.value;
    console.log(cardData.link);
    cards.prepend(createCard(cardData));
    closePopup(popupCardAdd);
    formPopupAddCard.reset();
}

//Инициализация карточек при старте из массива-----------------------------------------
initialCards.forEach(cardData => {
    cards.prepend(createCard(cardData));
});

//Обработчики событий------------------------------------------------------------------

    //Open Popup
buttonOpenPopupAddCard.addEventListener("click", () => {
    openPopup(popupCardAdd);
});
buttonOpenPopupProfile.addEventListener("click", () => {
    openPopupProfile(popupProfile);
});

    //Close Popup
buttonClosePopupProfile.addEventListener("click", () => {
    closePopup(popupProfile);
});

buttonClosePopupAddCard.addEventListener("click", () => {
    closePopup(popupCardAdd);
});

buttonClosePopupImg.addEventListener("click", () => {
    closePopup(popupCardShow);
});

    //Обработчики Form
formPopupProfile.addEventListener('submit', handlerProfileSubmit);
formPopupAddCard.addEventListener('submit', handlerCardSubmit);