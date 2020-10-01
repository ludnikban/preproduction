import { deleteListFilms } from './deletelist.js';
import { createListFilms } from './createlist.js';

const API = 'http://api.tvmaze.com/search/shows/?q=';
const form = document.querySelector('form');
let search = '';

function myAsyncFunctionFetch(url, method) {
  return fetch(API + url, {
    method: method,
  });
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
