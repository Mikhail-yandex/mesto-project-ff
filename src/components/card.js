export function removeCard(e) {
  const cardElement = e.target.closest(".card");
  cardElement.remove();
}

export function cardLikeToggle(cardLikeButton) {
  cardLikeButton.classList.toggle("card__like-button_is-active");
}

export function handleImageClick (cardData) {
    imageInPopup.src = cardData.link;
    imageInPopup.alt = cardData.name;
    captionInPopup.textContent = cardData.name;
    openModal(popupImage);
  };
