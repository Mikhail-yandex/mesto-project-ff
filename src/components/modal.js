// показать попап

function showPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", quitOnEsc);
  popup.addEventListener("click", quitOnOverlayClick);
}

// скрыть попап

function closePopup() {
  const popup = document.querySelector(".popup_is-opened");
  popup.classList.remove("popup_is-opened");
  popup.removeEventListener("click", quitOnOverlayClick);
  document.removeEventListener("keydown", quitOnEsc);
}

// Скрыть попап по нажатию клавишу Esc

function quitOnEsc(e) {
  if (e.key == "Escape") {
    closePopup();
  }
}

// скрыть попап по нажатию на оверлей

function quitOnOverlayClick(e) {
  if (e.target.classList.contains("popup")) {
    closePopup();
  }
}

export { showPopup, closePopup };



