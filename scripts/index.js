// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const cardsContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(cardData, removeCard) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardDeleteButton.addEventListener("click", removeCard);
  
  return cardElement;
}

// @todo: Функция удаления карточки

function removeCard(e) {
  const cardElement = e.target.closest(".card");
  cardElement.remove();
}

// @todo: Вывести карточки на страницу

function addCards(initialCards) {
  initialCards.forEach((cards) => {
    const cardElement = createCard(cards);
    cardsContainer.append(cardElement);
  });
}

addCards(initialCards);
