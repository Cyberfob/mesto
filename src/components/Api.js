export default class Api {
    constructor (options) {
        this._url = options.url
        this._headers = options.headers
    }

    getUserInfo() {
        const request = {
            method: "GET",
            headers: this._headers,
        } 
        return fetch(`${this._url}/users/me`,request)
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    })
    .catch((err) => {console.log(err)})
    }

    setUserInfo({name,about}) {
        const request = {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({name,about})
        }
        return fetch(`${this._url}/users/me`,request)
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    })
    .catch((err) => {console.log(err)})
    }
    

    getInitCards() {
        const request = {
            method: "GET",
            headers: this._headers,
        } 
        return fetch(`${this._url}/cards`,request)
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    })
    .catch((err) => {console.log(err)})
    }


    addCard() {

    }

    getCardLikeCount() {

    }

    removeCard() {

    }

    test() {
        console.log(this.url)
    }
}