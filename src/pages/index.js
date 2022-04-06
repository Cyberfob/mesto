import '../pages/index.css';
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {validationConfig} from "../untils/constant.js";
import Api from '../components/Api';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
//Инициализация массива с карточками-------------------------------------------------------

const api = new Api ({
    url: 'https://mesto.nomoreparties.co/v1/cohort36',
        headers: {
            authorization: '308eaaab-711e-417d-8eb0-09fd4aa24c68',
            'Content-Type': 'application/json'
        }
    }
);

//Инициализация переменных-----------------------------------------------------------------

// userId
let userId = "";

//Popups
const popupProfile = document.querySelector(".popup_type_profile");

// Inputs
const inputName = popupProfile.querySelector(".modal__input_type_name");
const inputAbout = popupProfile.querySelector(".modal__input_type_about");

//Buttons
    //Open Popup
const buttonOpenPopupAddCard = document.querySelector(".profile__add-btn");
const buttonOpenPopupProfile = document.querySelector(".profile__btn");

//Массив для хранения экземпляров класса FormValidator с индексами по аттрибуту "name" у форм
const formValidationList = {};

//Экземпляр класса хранения данных пользователя
const userInfo = new UserInfo ({name:".profile__name", about: ".profile__about", avatar: ".profile__foto"})

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
const popupWithFormAvatar = new PopupWithForm (".popup_type_avatar", {Submit:() =>{
    handlAvatarSubmit(popupWithFormAvatar.getInputValues());
}});
popupWithFormAvatar.setEventListeners();
//---------//
const popupImage = new PopupWithImage (".popup_type_pictures");
popupImage.setEventListeners();
//---------//
const popupConfirmation = new PopupWithConfirmation (".popup_type_confirmation")
popupConfirmation.setEventListeners();
//---------//
const section = new Section ({renderer: (data)=>{
    return createCard(data);
    }},".cards")

// api.getInitCards().then(cardData => {
//         section.renderItems(cardData);
// })

Promise.all([api.getInitCards(), api.getUserInfo()])
    .then(([cards, data]) => {
        userInfo.setUserInfo({name: data.name, about: data.about});
        userInfo.setUserAvatar(data.avatar);
        userId = data._id;
        section.renderItems(cards);
    })
    .catch(() => {alert(`Ошибка загрузки \n  Обновите пожалуйста страницу, для этого нажмите "F5"`)
    })

//Обьявления экземпляра класса Section и отрисовка начального массива
// api.getInitCards().then(cardData => {
//     const section = new Section ({items: cardData, renderer: (data)=>{
//         return createCard(data);
//         }},".cards")
//         section.renderItems();
// })

//Универсальная функция создания карточек
function createCard(data) {
    const cardData = {};
    cardData.name = data.name;
    cardData.link = data.link;
    cardData.likesCount = data.likes.length;
    cardData.cardId = data._id;
    cardData.ownerId = data.owner._id;
    cardData.userId = userId
    cardData.likeStatus = data.likes.some((element) => {return element._id == userId})
    //Создание экземпляра класса Card
    const cardItem = new Card(".card__template",cardData, ".popup_type_pictures", { handleCardClick : () => {
        popupImage.open(cardData);
        },
        hendlDeleteCard: () => {
            popupConfirmation.open();
            popupConfirmation.setSubmitAction(() => {api.removeCard(data._id)
            .then(cardItem.deleteCard())
            .then(popupConfirmation.delevent())
            .then(popupConfirmation.close())
            .catch(() => {alert(`Ошибка удаления карточки \n  попробуйте еще раз`)
            })
        })
            
        },
        hendlSwitchLike: () => {
            if (!cardItem.likeStatus) {
                api.setLike(data._id)
                .then(res => {
                    cardItem.likeRender(res.likes);
                })
                .catch(() => {alert(`Ошибка установки лайка \n  попробуйте еще раз`)
                })
            }
            else {
                api.deleteLike(data._id)
                .then(res => {
                    cardItem.likeRender(res.likes);
                })
                .catch(() => {alert(`Ошибка удаления лайка \n  попробуйте еще раз`)
                })
            }
        }
    })
    return cardItem.getView();
}

//Функция отправки формы Profile
function handlProfileSubmit (inputs) {
    const userData = inputs;
    api.setUserInfo(userData)
    .then(data => {
        userInfo.setUserInfo({name: data.name, about: data.about});
    })
    .then(() => {popupWithFormAdd.close();
    })
    .finally(() => {
        switchButtonState(false,popupWithFormProfile.saveBtn)
    })
    .catch(() => {alert(`Ошибка отправки данных \n  попробуйте еще раз`)
    })
    switchButtonState(true,popupWithFormProfile.saveBtn)
}

//Функция отправки формы CardAdd
function handlCardSubmit (inputs) {
    api.addCard(inputs)
    .then(card => {
        section.renderItem(card);
        // const element = createCard(card)
        // console.log(element)
        // section.addItem(element);
        // const section = new Section ({items: card, renderer: (data)=>{
        //     return createCard(data);
        //     }},".cards")
            //section.renderItem();
    })
    .then(() => {popupWithFormAdd.close();})
    .finally(() => {
        switchButtonState(false,popupWithFormAdd.saveBtn)
    })
    .catch(() => {alert(`Ошибка добавления карточки \n  попробуйте еще раз`)
    })
    switchButtonState(true,popupWithFormAdd.saveBtn)
}

//Функция отправки формы avatar
function handlAvatarSubmit(inputs) {
    api.setProfileAvatar(inputs.link)
    .then(data => {
        userInfo.setUserAvatar(data.avatar)
    })
    .then(() => {popupWithFormAvatar.close();
    })
    .finally(() => {
        switchButtonState(false,popupWithFormAvatar.saveBtn)
    })
    .catch(() => {alert(`Ошибка обновления аватара \n  Ссылка должна содержать ссылку на изображение`)
    })
    switchButtonState(true,popupWithFormAvatar.saveBtn)
}

//Функция смены состояния кнопки
function switchButtonState (bool,btn) {
    if (bool) {
        btn.textContent = btn.value + "...";
    }
    else {
        btn.textContent = btn.value;
    }
}
// картинка для тестов https://www.1zoom.ru/big2/484/247680-svetik.jpg

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

document.querySelector(".profile__foto-overlay").addEventListener("click", () => {
    popupWithFormAvatar.open();
    formValidationList['avatar'].resetValidation();
})

    //Вызов функции валидации
enableValidation(validationConfig)

///Инициализация данных пользователя с сервера 
// api.getUserInfo()
//     .then(data => {
//         userInfo.setUserInfo({name: data.name, about: data.about});
//         userInfo.setUserAvatar(data.avatar);
// })

