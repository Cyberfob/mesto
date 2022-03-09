export default class Api {
    constructor (options) {
        this.options = options;
    }

    getUserInfo() {

    }

    getInitCards() {
        fetch('https://mesto.nomoreparties.co/v1/cohort36/cards', {
            headers: {
                authorization: '308eaaab-711e-417d-8eb0-09fd4aa24c68'
            }
        }
    )
    .then(res => res.json())
    .then((result) => {
    console.log(result);
        }); 
    }

    setUserInfo() {

    }

    addCard() {

    }

    getCardLikeCount() {

    }

    removeCard() {

    }
}