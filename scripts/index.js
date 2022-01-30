import Card from "./FormValidator.js"
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
const popupsList = document.querySelectorAll(".popup");

// Inputs
const inputName = popupProfile.querySelector(".modal__input_type_name");
const inputAbout = popupProfile.querySelector(".modal__input_type_about");
const inputTitle = popupCardAdd.querySelector(".modal__input_type_title");
const inputLink = popupCardAdd.querySelector(".modal__input_type_link");

//Buttons
    //Remove Card
const buttonRemoveCard = document.querySelector(".card__trashcan-btn");
    //Open Popup
const buttonOpenPopupAddCard = document.querySelector(".profile__add-btn");
const buttonOpenPopupProfile = document.querySelector(".profile__btn");
    //Add Submit
const buttonAddSubmit = document.querySelector("#addButton");
    //Profile Submit
const buttonProfileSubmit = document.querySelector("#profileSubmitBtn");

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
    document.addEventListener("keyup",closedEscBtn);
};

    //Функция открытия popupProfile
function openPopupProfile (popup) {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    openPopup(popup);
    enablingButton(buttonProfileSubmit, validationConfig);
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
    popup.closest(".popup").classList.remove("popup_active");
    document.removeEventListener("keyup",closedEscBtn);
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
function handlProfileSubmit (e) {
    e.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfile);
}

//Функция отправки формы CardAdd
function handlCardSubmit (e) {
    e.preventDefault();
    const cardData = [{name: '',link: ''}];
    cardData.name = inputTitle.value;
    cardData.link = inputLink.value;
    cards.prepend(createCard(cardData));
    closePopup(popupCardAdd);
    formPopupAddCard.reset();
    disablingButton(buttonAddSubmit, validationConfig);
}

//Функция закрытия открытого popup по кнопке "Esc"
function closedEscBtn(e) {
    if (e.code === 'Escape') {
        const popup = document.querySelector('.popup_active');
        closePopup(popup);
    }
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
popupsList.forEach(popupsElement => {
    popupsElement.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup__overlay") || e.target.classList.contains("popup__close-btn")) {
            closePopup(popupsElement);
        }
    });
});

    //Обработчики Form
formPopupProfile.addEventListener('submit', handlProfileSubmit);
formPopupAddCard.addEventListener('submit', handlCardSubmit);