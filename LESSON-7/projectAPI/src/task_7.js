import jQuery from 'jquery';

jQuery(function () {
  jQuery('body').css('color', 'blue');
});

const API = 'http://api.tvmaze.com/search/shows/?q=';
const form = document.querySelector('form');
const list = document.getElementById('films');
let search = '';

function myAsyncFunctionFetch(url, method) {
  return fetch(API + url, {
    method: method,
  });
}
function createListFilms(film) {
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
}

function deleteListFilms() {
  let elements = document.getElementsByClassName('col');
  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function sendForm(e) {
  e.preventDefault();
  for (let input of e.target) {
    if (input.type === 'text') {
      search = input.value;
    }
  }
  myAsyncFunctionFetch(search, 'GET')
    .then(response => response.json())
    .then(async data => {
      try {
        deleteListFilms();
        data.forEach(movie => {
          createListFilms(movie);
        });
      } catch (e) {
        console.log(e);
      }
    });
}

form.onsubmit = sendForm;
