//Инициализация массива с карточками
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

//Инициализация переменных
const popup = document.querySelector(".popup");

const inputName = document.querySelector(".modal__input_type_name");
const inputAbout = document.querySelector(".modal__input_type_about");
const inputTitle = document.querySelector(".modal__input_type_title");
const inputLink = document.querySelector(".modal__input_type_link");

const removeBtn = document.querySelector(".card__trashcan-btn");
const saveBtn = document.querySelector(".modal__submit");
const closeBtn = document.querySelector(".popup__close-btn");
const closeAddBtn = document.querySelector(".popup-add__close-btn");
const profileBtn = document.querySelector(".profile__btn");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const addBtn = document.querySelector(".profile__add-btn");
const popupAdd = document.querySelector(".popup-add");

const cardTmp = document.querySelector(".card__template");
const cards = document.querySelector(".cards");
const cardLike = document.querySelectorAll(".card__like");

//Инициализация карточек при старте из массива
initialCards.forEach(element => {
    const newItem = cardTmp.content.cloneNode(true);
    newItem.querySelector(".card__title").textContent = element.name;
    newItem.querySelector(".card__img").src = element.link;
    cards.prepend(newItem);
});

//Функция удаления карточек
function addCard (e) {
    if (e.target.classList.contains("card__trashcan-btn")){
        console.log(e.target.parentNode);
        e.target.parentNode.remove();
    }
}

//Функция открытия модального окна profile
function openPopupProfile () {
    popup.classList.add("popup_active");
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

//Функция открытия модального окна Add
function openPopupAdd () {
    popupAdd.classList.add("popup_active");
}

//Функция закрытия модального окна БЕЗ сохнанения данных
function closePopup (e) {
    e.target.parentNode.classList.remove("popup_active");
    console.log(e.target.parentNode.classList);
}

//Функция СОХРАНЕНИЯ данных и закрытия модального окна
function savePopupData () {
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popup.classList.remove("popup_active");
}

//Функция лайкнуть фото
function likeSwitch (e) {
    if (e.target.classList.contains("card__like")) {
        e.target.classList.toggle("card__like_active");
    }
}

//Вызов эвентов
document.addEventListener("click",likeSwitch);
document.addEventListener("click",addCard);
profileBtn.addEventListener("click", openPopupProfile);
saveBtn.addEventListener("click", savePopupData);
closeBtn.addEventListener("click", closePopup );
closeAddBtn.addEventListener("click", closePopup);
addBtn.addEventListener("click", openPopupAdd);



let formElement = document.querySelector(".modal__form");
let formElementAdd = document.querySelector(".modal__form-add"); // Воспользуйтесь методом querySelector()

function formSubmitHandler (e) {
    e.preventDefault(); 
    if (e.target.classList.contains("modal__form")) {
        inputName.value = profileName.textContent;
        inputAbout.value = profileAbout.textContent;
    
        let nameInput = document.querySelector(".profile__name");
        let jobInput = document.querySelector(".profile__about");

        nameInput.textContent = inputName.value;
        jobInput.textContent = inputAbout.value;
        popup.classList.remove("popup_active");
        console.log("form")
    }  
    else if (e.target.classList.contains("modal__form-add")) {
        const newItem = cardTmp.content.cloneNode(true);
        newItem.querySelector(".card__title").textContent = inputTitle.value;
        newItem.querySelector(".card__img").src = inputLink.value;
        inputTitle.value = "";
        inputLink.value = "";
        cards.prepend(newItem);
        popupAdd.classList.remove("popup_active");
        console.log("addform")
    }
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formSubmitHandler);

