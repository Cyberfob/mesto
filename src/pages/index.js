import '../pages/index.css';
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {validationConfig,initialCards} from "../untils/constant.js";

//Инициализация массива с карточками-------------------------------------------------------


//Инициализация переменных-----------------------------------------------------------------

//Popups
const popupProfile = document.querySelector(".popup_type_profile");

// Inputs
const inputName = popupProfile.querySelector(".modal__input_type_name");
const inputAbout = popupProfile.querySelector(".modal__input_type_about");

//Buttons
    //Open Popup
const buttonOpenPopupAddCard = document.querySelector(".profile__add-btn");
const buttonOpenPopupProfile = document.querySelector(".profile__btn");
    //Add Submit

//Массив для хранения экземпляров класса FormValidator с индексами по аттрибуту "name" у форм
const formValidationList = {};

//Экземпляр класса хранения данных пользователя
const userInfo = new UserInfo ({name:".profile__name", about: ".profile__about"})

//Обьявление экземпляров класса попапов и навешивание слушателей
const popupWithFormProfile = new PopupWithForm (".popup_type_profile", {Submit:() =>{
    handlProfileSubmit(popupWithFormProfile.getInputValues());
}});
popupWithFormProfile.setEventListeners();
//---------//
const popupWithFormAdd = new PopupWithForm (".popup_type_add", {Submit:() =>{
    handlCardSubmit(popupWithFormAdd.getInputValues());
}});
popupWithFormAdd.setEventListeners();
//---------//
const popupImage = new PopupWithImage (".popup_type_pictures");
popupImage.setEventListeners();

//Обьявления экземпляра класса Section и отрисовка начального массива
const section = new Section ({items: initialCards, renderer: (data)=>{
    return createCard(data);
    }},".cards")
    section.renderItems();

//Универсальная функция создания карточек
function createCard(data) {
    const cardData = {};
    cardData.name = data.name;
    cardData.link = data.link;
    const cardItem = new Card(".card__template",cardData, ".popup_type_pictures", { handleCardClick : () => {
        popupImage.open(cardData);
        }
    })
    return cardItem.getView();
}

//Функция отправки формы Profile
function handlProfileSubmit (inputs) {
    const userData = inputs; 
    userInfo.setUserInfo(userData);
    popupWithFormProfile.close();
}

//Функция отправки формы CardAdd
function handlCardSubmit (inputs) {
    const cardElement = createCard(inputs);
    section.addItem(cardElement);
    popupWithFormAdd.close();
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

//Обработчики событий------------------------------------------------------------------

    //Open Popup
buttonOpenPopupAddCard.addEventListener("click", () => {
    popupWithFormAdd.open();
    formValidationList['add'].resetValidation();
});
buttonOpenPopupProfile.addEventListener("click", () => {
    popupWithFormProfile.open();
    const getUserInfo = userInfo.getUserInfo();
    inputName.value = getUserInfo.name;
    inputAbout.value = getUserInfo.about;
    formValidationList['profile'].resetValidation();
});

    //Вызов функции валидации
enableValidation(validationConfig)

