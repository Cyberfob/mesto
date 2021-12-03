//Инициализация переменных
const popup = document.querySelector(".popup");
const inputName = document.querySelector(".modal__input_type_name");
const inputAbout = document.querySelector(".modal__input_type_about");
const closeBtn = document.querySelector(".popup__close-btn");
const profileBtn = document.querySelector(".profile__btn");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

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

profileBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup );

//********************* Функция из описания спринта.*******************************

let formElement = document.querySelector(".form"); // Воспользуйтесь методом querySelector()

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup ();
    // console.log("Улетела в закат");
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);