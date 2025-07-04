// показать попап

function showPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", quitOnEsc);
  document.addEventListener("click", quitOnOverlayClick);
}

// скрыть попап

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("click", quitOnOverlayClick);
  document.removeEventListener("keydown", quitOnEsc);
}

// Скрыть попап по нажатию клавишу Esc

function quitOnEsc(e) {
  if (e.key == "Escape") {
    const popupOpen = document.querySelector(".popup_is-opened");
    closePopup(popupOpen);
  }
}

// скрыть попап по нажатию на оверлей

function quitOnOverlayClick(evt) {
  if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup")) {
    const popupOpen = document.querySelector(".popup_is-opened");
    closePopup(popupOpen);
  }
}

export { showPopup, closePopup };



