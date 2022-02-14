import '../pages/index.css';
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

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

//Cards
const cards = document.querySelector(".cards");

//Переменные хранения пользовательской информации
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

//Массив для хранения экземпляров класса FormValidator с индексами по аттрибуту "name" у форм
const formValidationList = {};
//Экземпляр класса хранения данных пользователя
const userInfo = new UserInfo ({name:profileName.textContent, about: profileAbout.textContent})

//Функция отправки формы Profile
function handlProfileSubmit (e) {
    e.preventDefault();
    const userData = {name:inputName.value,about:inputAbout.value};
    userInfo.setUserInfo(userData);
    profileName.textContent = userData.name
    profileAbout.textContent = userData.about
    PopupWithFormProfile.close();
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
    }
    });
    const cardElement = cardItem.getView();
    const section = new Section ({items: cardElement, renderer: ()=>{}},cards)
    section.addItem(cardElement);
    PopupWithFormAdd.close();
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
    const initialSection = new Section ({items : initialCards, renderer:()=>{
        initialCards.forEach(item => {
        const cardData = [];
        cardData.name = item.name;
        cardData.link = item.link;
        const cardItem = new Card(".card__template",cardData, popupCardShow, { handleCardClick : () => {
            const popupImage = new PopupWithImage (cardData, popupCardShow);
            popupImage.open();
            popupImage.setEventListeners();
            }
        })
        const cardElement = cardItem.getView();
        initialSection.addItem(cardElement)
    })
}},cards);
//Вызов функции рендерер для отрисовки стартовых карточек
initialSection.renderer();

//Обработчики событий------------------------------------------------------------------

    //Open Popup
buttonOpenPopupAddCard.addEventListener("click", () => {
    PopupWithFormAdd.open();
    
    //openPopup(popupCardAdd);
    formValidationList['add'].resetButton();
});
buttonOpenPopupProfile.addEventListener("click", () => {
    PopupWithFormProfile.open();
    inputName.value = userInfo.getUserInfo().name;
    inputAbout.value = userInfo.getUserInfo().about;
    formValidationList['profile'].resetValidation();
});

    //Вызов функции валидации
enableValidation(validationConfig)

//Обьявление экземпляров каллса попапов
const PopupWithFormProfile = new PopupWithForm (popupProfile, {Submit:() =>{
    popupProfile.addEventListener('submit', handlProfileSubmit);
}});
PopupWithFormProfile.setEventListeners();

const PopupWithFormAdd = new PopupWithForm (popupCardAdd, {Submit:() =>{
    popupCardAdd.addEventListener('submit', handlCardSubmit);
}});
PopupWithFormAdd.setEventListeners();