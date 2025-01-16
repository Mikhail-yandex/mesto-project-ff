// @todo: Темплейт карточки

const cardsTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(cardData) {
  const cardElement = cardsTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardDeleteButton.addEventListener("click", function () {
    const cards = document.querySelector(".card");
    cards.remove();
  });

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
    cardList.append(cardElement);
  });
}

addCards(initialCards);
