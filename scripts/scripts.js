//Инициализация переменных
const popup = document.querySelector(".popup");
const inputName = document.querySelector(".modal__input_name");
const inputAbout = document.querySelector(".modal__input_about");
const saveBtn = document.querySelector(".modal__submit");
const closeBtn = document.querySelector(".popup__close-btn");
const profileBtn = document.querySelector(".profile__btn");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const cardLike = document.querySelectorAll(".card__like");

//Функция открытия модального окна
function openPopup () {
    popup.classList.add("popup_active");
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

//Функция закрытия модального окна БЕЗ сохнанения данных
function closePopup () {
    popup.classList.remove("popup_active");
}

//Функция СОХРАНЕНИЯ данных и закрытия модального окна
function savePopupData () {
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popup.classList.remove("popup_active");
}

//Функция лайкнуть фото. Получаем событие (e) на вход, методом target,
//получаем элемент который вызвал событие. присваиваем его в переменную.
//Делаем проверку, что элемент имеет класс "card__like". Далее условие при котором мы свитчим 
//наличие "card__like_active".
function likeSwitch (e) {
    let like = e.target;  
    if (like.classList.contains("card__like") === true && like.classList.contains("card__like_active" ) !== true) {
        like.classList.add("card__like_active");
    }
    else  {
        like.classList.remove("card__like_active");
    }
}

document.addEventListener("click",likeSwitch);
profileBtn.addEventListener("click", openPopup);
saveBtn.addEventListener("click", savePopupData);
closeBtn.addEventListener("click", closePopup );

//********************* Функция из описания спринта.*******************************
// Находим форму в DOM
let formElement = document.querySelector(".form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
 // Воспользуйтесь инструментом .querySelector() inputName.value
 // Воспользуйтесь инструментом .querySelector() inputAbout.value
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
// Так мы можем определить свою логику отправки.
// О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    // Выберите элементы, куда должны быть вставлены значения полей
    let nameInput = document.querySelector(".profile__name");
    let jobInput = document.querySelector(".profile__about");
    // Вставьте новые значения с помощью textContent
    nameInput.textContent = inputName.value;
    jobInput.textContent = inputAbout.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);