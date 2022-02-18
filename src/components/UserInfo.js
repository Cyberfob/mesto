export default class UserInfo {
    constructor({name,about}) {
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
    }

    //Метод возврата значений полей для формы "Профайл"
    getUserInfo = () => {
        return {name: this._name.textContent, about :this._about.textContent};
    }

    //Метод записи новых данных из формы "Профайл"
    setUserInfo = (userData) => {
        this._name.textContent = userData.name;
        this._about.textContent = userData.about;
    }
}

// Создайте класс UserInfo

// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:

// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и 
//элемента информации о себе.

// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. 

//Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.

// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и 
//добавляет их на страницу.