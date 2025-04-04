import {handleEscKeyUp} from '../index'

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
