import Popup from "./Popup.js"
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._btnYes = this._popup.querySelector(".modal__submit_confirmation")
        this._form = this._popup.querySelector(".modal__form")
    }

    close() { //Закрываем форму и сбрасываем
        super.close();
        this._form.removeEventListener("submit", this._submitHandler);
    }
    
    setSubmitAction = (handler) => {
        this._submitHandler = handler
        this._form.addEventListener("submit", this._submitHandler);
    }

    setEventListeners = () => {
        super.setEventListeners();
    }

    delevent() {
        this._form.removeEventListener("submit", this._submitHandler);
    }
    
}