import Card from "./Card.js"
import FormValidator from "./FormValidator.js"
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";

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

//Конфиг
const validationConfig = {
    formSelector: '.modal__form',
    inputSelector: '.modal__input',
    submitButtonSelector: '.modal__submit',
    inactiveButtonClass: 'modal__submit_disabled',
    inputErrorClass: 'modal__input_type_error',
    errorClass: 'modal__input_error_visible'
}

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
    //Open Popup
const buttonOpenPopupAddCard = document.querySelector(".profile__add-btn");
const buttonOpenPopupProfile = document.querySelector(".profile__btn");
    //Add Submit

// Forms
const formPopupProfile = document.querySelector(".modal__form_type_profile");
const formPopupAddCard = document.querySelector(".modal__form_type_add-card");
//Cards
const cards = document.querySelector(".cards");

//Переменные хранения пользовательской информации
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

//Массив для хранения экземпляров класса FormValidator с индексами по аттрибуту "name" у форм
const formValidationList = {};

//Функции--------------------------------------------------------------------

// //Функция добавления карточек
function createCard (cardData) {
    const cardItem = new Card(".card__template",cardData, popupCardShow, { handleCardClick : () => {
        const popupImage = new PopupWithImage (cardData, popupCardShow);
        popupImage.open();
    }
    })
    return cardItem.getView();
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
};

//Функция закрытия Popup
function closePopup (popup) {
    popup.closest(".popup").classList.remove("popup_active");
    document.removeEventListener("keyup",closedEscBtn);
};

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
    const cardData = [];
    cardData.name = inputTitle.value;
    cardData.link = inputLink.value;
    const cardItem = new Card (".card__template",cardData, popupCardShow, { handleCardClick : () => {
        const popupImage = new PopupWithImage (cardData, popupCardShow);
        popupImage.open();
        console.log("tut")
    }
    });
    const cardElement = cardItem.getView();
    const section = new Section ({items: cardElement, renderer: ()=>{}},cards)
    section.addItem(cardElement);
    closePopup(popupCardAdd);
    formPopupAddCard.reset();
}



//Функция закрытия открытого popup по кнопке "Esc"
function closedEscBtn(e) {
    if (e.code === 'Escape') {
        const popup = document.querySelector('.popup_active');
        closePopup(popup);
    }
}

//Функция создания экземпляров класса FormValidator, инициализация валидации и 
//добавление объекта в массив  formValidationList
function enableValidation (config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach(formItem => {
        const validationForm = new FormValidator (validationConfig,formItem)
        const formName = formItem.getAttribute("name");

        formValidationList[formName] = validationForm;
        validationForm.enableValidation();
    });
}

//Инициализация карточек при старте из массива-----------------------------------------
//initialCards.forEach(cardData => {

    const initialSection = new Section ({items : initialCards, renderer:()=>{
        initialCards.forEach(item => {
        const cardData = [];
        cardData.name = item.name;
        cardData.link = item.link;
        const cardItem = new Card(".card__template",cardData, popupCardShow, { handleCardClick : () => {
            const popupImage = new PopupWithImage (cardData, popupCardShow);
            popupImage.open();
            }
        })
        const cardElement = cardItem.getView();
        initialSection.addItem(cardElement)
    })
}},cards);
initialSection.renderer();
  //  cards.prepend(createCard(cardData));
//});

//Обработчики событий------------------------------------------------------------------

    //Open Popup
buttonOpenPopupAddCard.addEventListener("click", () => {
    openPopup(popupCardAdd);
    formValidationList['add'].resetButton();
});
buttonOpenPopupProfile.addEventListener("click", () => {
    openPopupProfile(popupProfile);
    formValidationList['profile'].resetValidation();
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

    //Вызов функций
enableValidation(validationConfig)