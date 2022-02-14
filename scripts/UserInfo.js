export default class UserInfo {
    constructor({name,about}) {
        this._name = name
        this._about = about
    }

    getUserInfo = () => {
        return {name: this._name, about :this._about};
    }

    setUserInfo = (userData) => {
        console.log("userData",userData)
        this._name = userData.name;
        this._about = userData.about;
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