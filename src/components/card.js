import {cardTemplate} from "../index";

export function createCard(cardData, removeCard, cardLikeToggle, handleImageClick) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardDeleteButton.addEventListener("click", removeCard);

  cardLikeButton.addEventListener("click", () => {
    cardLikeToggle(cardLikeButton);
  });

  cardImage.addEventListener("click", () => {
    handleImageClick(cardData);
  });

  return cardElement;
}

export function removeCard(e) {
  const cardElement = e.target.closest(".card");
  cardElement.remove();
}

export function cardLikeToggle(cardLikeButton) {
  cardLikeButton.classList.toggle("card__like-button_is-active");
}
