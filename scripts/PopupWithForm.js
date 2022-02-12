export default class PopupWithForm extends Popup {
    constructor (popupSelector, SubmitEvt) {
        this._popupSelector = popupSelector;
        this._SubmitEvt = SubmitEvt;
    }

    close() { //Закрываем форму и сбрасываем

    }

    _getInputValues() { //Собираем поля всех инпутов формы

    }

    setEventListeners() { //Добавляем обработчики клика по крестику и сабмита формы

    }
}

// Создайте класс PopupWithForm

// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:

// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.

// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.

// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm 
// должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.

// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.