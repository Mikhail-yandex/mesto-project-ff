// Объект конфигурации API

const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-41",
  headers: {
    authorization: "4ba5451e-63c2-47c4-b757-9cf6a1ade3a1",
    "Content-Type": "application/json",
  },
};

// Получить последние 30 карточек с сервера

function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

// Получить объект данных пользователя

function getProfileData() {
 return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

// Добавить новую карточку на сервер

function addNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    body: JSON.stringify({
      name,
      link,
    }),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
   
}

// Обновить данные профиля

function updateProfileData(name, about) {
    return fetch(`${config.baseUrl}/cards`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name,
      about,
    }),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

// Удалить карточку из пула

function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "DELETE",
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

// Добавить лайк карточке

function addLike(cardId) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "PUT",
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

// Убрать лайк с карточки

function removeLike(cardId) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "DELETE",
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

// Редактировать аватар профиля

function updateAvatar(url) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: url,
      }),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export {
  getInitialCards,
  getProfileData,
  addNewCard,
  updateProfileData,
  deleteCard,
  addLike,
  removeLike,
  updateAvatar,
};