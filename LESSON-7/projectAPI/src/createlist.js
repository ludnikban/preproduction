export let createListFilms = film => {
  const list = document.getElementById('films');

  const col = document.createElement('div');
  col.setAttribute('class', 'col mb-4');

  const card = document.createElement('div');
  card.setAttribute('class', 'card h-100');

  const img = document.createElement('img');
  if (film.show.image !== null) {
    img.setAttribute('src', `${film.show.image.medium}`);
  } else {
    img.setAttribute('src', '');
  }
  img.setAttribute('alt', `${film.show.name}`);
  img.setAttribute('class', 'card-img-top');

  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.setAttribute('class', 'card-title');
  cardTitle.textContent = `${film.show.name}`;

  const cardText = document.createElement('pre');
  cardText.setAttribute('class', 'card-text');
  if (film.show.genres.length !== 0 && film.show.premiered !== null) {
    cardText.textContent = `Дата выхода: ${film.show.premiered} Жанр: ${film.show.genres}`;
  } else if (film.show.genres.length !== 0 && film.show.premiered === null) {
    cardText.textContent = `Жанр: ${film.show.genres}`;
  } else if (film.show.genres.length === 0 && film.show.premiered !== null) {
    cardText.textContent = `Дата выхода: ${film.show.premiered}`;
  }

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);
  list.appendChild(col);
};
