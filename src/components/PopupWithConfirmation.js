import Popup from "./Popup.js"
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._btnYes = this._popupSelector.querySelector(".modal__submit_confirmation")
        this._form = this._popupSelector.querySelector(".modal__form")
        //this._yesBtn = popupSelector.querySelector(".modal__submit_confirmation")
    }

    setSubmitAction = (handler) => {
        this._submitHandler = handler
        this._form.addEventListener("submit", this._submitHandler);
        //console.log(this._popupSelector)
    }

    setEventListeners = () => {
        super.setEventListeners();
        
        //console.log("1")

    }

    delevent() {
        this._form.removeEventListener("submit", this._submitHandler);
    }
    
}