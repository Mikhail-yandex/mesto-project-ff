import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { cardTemplate, createCard, removeCard, cardLikeToggle } from "./components/card.js";
import { handleEscKeyUp, openModal, closeModal, addEventListenerFunction } from "./components/modal.js";

const cardsContainer = document.querySelector(".places__list");
const name = document.querySelector(".profile__title");
const description = document.querySelector(".profile__description");

// @todo: Вывести карточки на страницу

function addCards(initialCards) {
  initialCards.forEach((cards) => {
    const cardElement = createCard(
      cards,
      removeCard,
      cardLikeToggle,
      handleImageClick
    );
    cardsContainer.append(cardElement);
  });
}

addCards(initialCards);

// Открытие и закрытие модального окна

const popupProfileEdit = document.querySelector(".popup_type_edit");
const popupAddCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("click", () => {
  openModal(popupProfileEdit);
});

const cardAddButton = document.querySelector(".profile__add-button");
cardAddButton.addEventListener("click", () => {
  openModal(popupAddCard);
});

// addEventListenerFunction(popupProfileEdit);
// addEventListenerFunction(popupAddCard);
// addEventListenerFunction(popupImage);

[popupProfileEdit, popupAddCard, popupImage].forEach(addEventListenerFunction);

// 4. Редактирование имени и информации о себе

// Находим форму в DOM

const formElementProfile = document.querySelector(".popup__form_edit_profile");

// Находим поля формы в DOM

const nameInput = formElementProfile.querySelector(".popup__input_type_name");
const jobInput = formElementProfile.querySelector(
  ".popup__input_type_description"
);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Получите значение полей jobInput и nameInput из свойства value

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  // Вставьте новые значения с помощью textContent

  name.textContent = nameValue;
  description.textContent = jobValue;

  closeModal(popupProfileEdit);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementProfile.addEventListener("submit", handleProfileFormSubmit);

// 6. Добавление карточки

const formElementNewCard = document.querySelector(".popup__form_new_place");
const newPlaceName = formElementNewCard.querySelector(
  ".popup__input_type_card-name"
);
const newPlaceUrl = formElementNewCard.querySelector(".popup__input_type_url");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const cardData = {
    name: newPlaceName.value,
    link: newPlaceUrl.value,
  };

  const newCard = createCard(
    cardData,
    removeCard,
    cardLikeToggle,
    handleImageClick
  );
  cardsContainer.prepend(newCard);

  closeModal(popupAddCard);

  formElementNewCard.reset();
}

formElementNewCard.addEventListener("submit", handleAddCardSubmit);

// 8. Открытие попапа с картинкой

// картинка в попапе
const imageInPopup = popupImage.querySelector(".popup__image");

// описание для картинки в попапе
const captionInPopup = popupImage.querySelector(".popup__caption");

function handleImageClick(cardData) {
  imageInPopup.src = cardData.link;
  imageInPopup.alt = cardData.name;
  captionInPopup.textContent = cardData.name;
  openModal(popupImage);
}
