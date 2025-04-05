
export const handleEscKeyUp = (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened"); // находим открытый попап
    closeModal(popup);
  }
};

export const openModal = (modal) => {
  // добавить класс открытия попапа
  modal.classList.add("popup_is-opened");

  // добавить слушатель на кнопку Escape
  document.addEventListener("keydown", handleEscKeyUp);
};

export const closeModal = (modal) => {
  // удалить класс открытия попапа
  modal.classList.remove("popup_is-opened");

  // удалить слушатель на кнопку Escape
  document.removeEventListener("keydown", handleEscKeyUp);
};

export const addEventListenerFunction = (popupElement) => {
  // ищем кнопку крестик в попапе
  const popupClose = popupElement.querySelector(".popup__close");
  popupClose.addEventListener("click", () => {
    closeModal(popupElement);
  });

  popupElement.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("popup")) {
      closeModal(popupElement);
    }
  });
};
