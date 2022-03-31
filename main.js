(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i){var a=this,u=i.handleCardClick,c=i.hendlDeleteCard,s=i.hendlSwitchLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_likeSwitch",(function(){a._hendlSwitchLike(),a._likeButton.classList.toggle("card__like_active"),a.likeStatus=!a.likeStatus})),t(this,"deleteCard",(function(){a._trashcanButton.removeEventListener("click",(function(){a._hendlCardDelete(a)})),a._element.closest(".card").remove()})),t(this,"likeRender",(function(e){a._likes.textContent=e.length})),this._selector=e,this._name=r.name,this._link=r.link,this._cardId=r.cardId,this._userId=r.userId,this._ownerId=r.ownerId,this._likeCounter=r.likesCount,this.likeStatus=r.likeStatus,this._popup=document.querySelector(o),this._handleCardClick=u,this._popupDeleteCard=document.querySelector(".popup_type_confirmation"),this._hendlCardDelete=c,this._hendlSwitchLike=s}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",this._likeSwitch),this._elementImg.addEventListener("click",this._handleCardClick),this._trashcanButton.addEventListener("click",(function(){e._hendlCardDelete(e)}))}},{key:"getView",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".card__like"),this._trashcanButton=this._element.querySelector(".card__trashcan-btn"),this._likes=this._element.querySelector(".card__like-counter"),this._frameImg=this._popup.querySelector(".frame__img"),this._frameTitle=this._popup.querySelector(".frame__title"),this._element.querySelector(".card__title").textContent=this._name,this._elementImg=this._element.querySelector(".card__img"),this._elementImg.alt=this._name,this._elementImg.src=this._link,this._likes.textContent=this._likeCounter,this.likeStatus&&this._likeButton.classList.add("card__like_active"),this._userId!==this._ownerId&&this._element.removeChild(this._trashcanButton),this._setEventListeners(),this._element}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_showInputError",(function(e){r._errorElement=r._formElement.querySelector("#".concat(e.id,"Error")),e.classList.add(r._inputErrorClass),r._errorElement.textContent=e.validationMessage,r._errorElement.classList.add(r._errorClass)})),o(this,"_hideInputError",(function(e){r._errorElement=r._formElement.querySelector("#".concat(e.id,"Error")),e.classList.remove(r._inputErrorClass),r._errorElement.textContent=e.validationMessage,r._errorElement.classList.remove(r._errorClass)})),o(this,"_hasInvalidInput",(function(){return r._inpitsList.some((function(e){return!e.validity.valid}))})),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_disablingButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"_enablingButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled",!0)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disablingButton():this._enablingButton()}},{key:"resetButton",value:function(){this._toggleButtonState()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inpitsList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._inpitsList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inpitsList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.code&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_active"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.closest(".popup").classList.remove("popup_active"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup__overlay")||t.target.classList.contains("popup__close-btn"))&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e,t){var n,r,o,u,c=t.Submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(){return n._inputs.forEach((function(e){var t=e.getAttribute("name");n._inputValue[t]=e.value})),n._inputValue},(o="getInputValues")in(r=_(n=i.call(this,e)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._submit=c,n._inputs=Array.from(n._popupSelector.querySelectorAll(".modal__input")),n._form=n._popupSelector.querySelector(".modal__form"),n._inputValue={},n.saveBtn=n._popupSelector.querySelector(".modal__submit"),n}return t=a,(n=[{key:"close",value:function(){l(d(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){l(d(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submit)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupFrameImage=t._popupSelector.querySelector(".frame__img"),t._popupFrameTitle=t._popupSelector.querySelector(".frame__title"),t}return t=a,(n=[{key:"open",value:function(e){this._popupFrameImage.src=e.link,this._popupFrameImage.alt=e.name,this._popupFrameTitle.textContent=e.name,b(w(a.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=j((function e(t,n){var r=this,o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"renderItems",(function(){r._items.forEach((function(e){var t=r._renderer(e);r.addItem(t)}))})),C(this,"renderItem",(function(){var e=r._renderer(r._items);r.addItem(e)})),C(this,"addItem",(function(e){r._conteinerSelector.prepend(e)})),this._items=o,this._renderer=i,this._conteinerSelector=document.querySelector(n)}));function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(){function e(t){var n=this,r=t.name,o=t.about,i=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),I(this,"getUserInfo",(function(){return{name:n._name.textContent,about:n._about.textContent}})),I(this,"setUserInfo",(function(e){n._name.textContent=e.name,n._about.textContent=e.about})),this._name=document.querySelector(r),this._about=document.querySelector(o),this._avatar=document.querySelector(i)}var t,n;return t=e,(n=[{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),q={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit",inactiveButtonClass:"modal__submit_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__input_error_visible"};function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={method:"GET",headers:this._headers};return fetch("".concat(this._url,"/users/me"),e).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r={method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})};return fetch("".concat(this._url,"/users/me"),r).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getInitCards",value:function(){var e={method:"GET",headers:this._headers};return fetch("".concat(this._url,"/cards"),e).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e){var t=e.name,n=e.link,r={method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})};return fetch("".concat(this._url,"/cards"),r).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setLike",value:function(e){var t={method:"PUT",headers:this._headers};return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),t).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){var t={method:"DELETE",headers:this._headers};return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),t).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"removeCard",value:function(e){var t={method:"DELETE",headers:this._headers};return fetch("".concat(this._url,"/cards/").concat(e),t).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setProfileAvatar",value:function(e){var t={method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})};return fetch("".concat(this._url,"/users/me/avatar"),t).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){alert("".concat(e,"\nОшибка обновления аватара \n  Ссылка должна содержать ссылку на изображение"))}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function D(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=H(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),J(U(n=i.call(this,e)),"setSubmitAction",(function(e){n._submitHandler=e,n._form.addEventListener("submit",n._submitHandler)})),J(U(n),"setEventListeners",(function(){F((t=U(n),N(a.prototype)),"setEventListeners",t).call(t)})),n._btnYes=n._popupSelector.querySelector(".modal__submit_confirmation"),n._form=n._popupSelector.querySelector(".modal__form"),n}return t=a,(n=[{key:"delevent",value:function(){this._form.removeEventListener("submit",this._submitHandler)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),M=new T({url:"https://mesto.nomoreparties.co/v1/cohort36",headers:{authorization:"308eaaab-711e-417d-8eb0-09fd4aa24c68","Content-Type":"application/json"}}),z=document.querySelector(".popup_type_profile"),Y=z.querySelector(".modal__input_type_name"),K=z.querySelector(".modal__input_type_about"),Q=document.querySelector(".profile__add-btn"),W=document.querySelector(".profile__btn"),X={},Z=new B({name:".profile__name",about:".profile__about",avatar:".profile__foto"}),$=new y(".popup_type_profile",{Submit:function(){var e;e=$.getInputValues(),M.setUserInfo(e).then((function(e){Z.setUserInfo({name:e.name,about:e.about})})).finally((function(){$.close(),ae(!1,$.saveBtn)})),ae(!0,$.saveBtn)}});$.setEventListeners();var ee=new y(".popup_type_add",{Submit:function(){var e;e=ee.getInputValues(),M.addCard(e).then((function(e){new P({items:e,renderer:function(e){return ie(e)}},".cards").renderItem()})).finally((function(){ee.close(),ae(!1,ee.saveBtn)})),ae(!0,ee.saveBtn)}});ee.setEventListeners();var te=new y(".popup_type_avatar",{Submit:function(){var e;e=te.getInputValues(),M.setProfileAvatar(e.link).then((function(e){Z.setUserAvatar(e.avatar)})).finally((function(){te.close(),ae(!1,te.saveBtn)})).catch((function(){alert("Ошибка обновления аватара \n  Ссылка должна содержать ссылку на изображение")})),ae(!0,te.saveBtn)}});te.setEventListeners();var ne=new E(".popup_type_pictures");ne.setEventListeners();var re,oe=new G(".popup_type_confirmation");function ie(e){var t={};t.name=e.name,t.link=e.link,t.likesCount=e.likes.length,t.cardId=e._id,t.ownerId=e.owner._id,t.userId="eed7b31a2644013072f6aaa4",t.likeStatus=e.likes.some((function(e){return e.name==Z.getUserInfo().name}));var r=new n(".card__template",t,".popup_type_pictures",{handleCardClick:function(){ne.open(t)},hendlDeleteCard:function(){oe.open(),oe.setSubmitAction((function(){M.removeCard(e._id).then(r.deleteCard()).then(oe.delevent()).then(oe.close())}))},hendlSwitchLike:function(){r.likeStatus?M.deleteLike(e._id).then((function(e){r.likeRender(e.likes)})):M.setLike(e._id).then((function(e){r.likeRender(e.likes)}))}});return r.getView()}function ae(e,t){t.textContent=e?t.value+"...":t.value}oe.setEventListeners(),M.getInitCards().then((function(e){new P({items:e,renderer:function(e){return ie(e)}},".cards").renderItems()})),Q.addEventListener("click",(function(){ee.open(),X.add.resetValidation()})),W.addEventListener("click",(function(){$.open();var e=Z.getUserInfo();Y.value=e.name,K.value=e.about,X.profile.resetValidation()})),document.querySelector(".profile__foto-overlay").addEventListener("click",(function(){te.open(),X.avatar.resetValidation()})),re=q,Array.from(document.querySelectorAll(re.formSelector)).forEach((function(e){var t=new i(q,e),n=e.getAttribute("name");X[n]=t,t.enableValidation()})),M.getUserInfo().then((function(e){Z.setUserInfo({name:e.name,about:e.about}),Z.setUserAvatar(e.avatar)}))})();