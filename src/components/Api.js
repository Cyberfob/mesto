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
            .catch((err) => {console.log(err)
            })
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


    addCard({name,link}) {
        const request = {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({name,link})
        } 
        return fetch(`${this._url}/cards`,request)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }       
                return Promise.reject(`Ошибка: ${res.status}`)
            })
            .catch((err) => {console.log(err)
            })
    }


    setLike(_id) {
        const request = {
            method: "PUT",
            headers: this._headers,
        } 
        return fetch(`${this._url}/cards/${_id}/likes`,request)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }       
                return Promise.reject(`Ошибка: ${res.status}`)
            })
            .catch((err) => {console.log(err)
            })
    }

    deleteLike(_id) {
        const request = {
            method: "DELETE",
            headers: this._headers,
        } 
        return fetch(`${this._url}/cards/${_id}/likes`,request)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }       
                return Promise.reject(`Ошибка: ${res.status}`)
            })
            .catch((err) => {console.log(err)
            })
    }

    removeCard(_id) {
        {
            const request = {
                method: "DELETE",
                headers: this._headers,
            } 
            return fetch(`${this._url}/cards/${_id}`,request)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }       
                    return Promise.reject(`Ошибка: ${res.status}`)
                })
                .catch((err) => {console.log(err)
                })
        }
    }

    setProfileAvatar(link) {
        {
            const request = {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar: link
                })
            } 
            return fetch(`${this._url}/users/me/avatar`,request)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }       
                    return Promise.reject(`Ошибка: ${res.status}`)
                })
                .catch((err) => {alert(`${err}\nОшибка обновления аватара \n  Ссылка должна содержать ссылку на изображение`)
            })
            }
    }
}