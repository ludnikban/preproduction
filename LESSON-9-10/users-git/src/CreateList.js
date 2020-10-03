export let CreateListUsers = (user, list) => {
  const col = document.createElement('div');
  col.setAttribute('class', 'col mb-4');

  const card = document.createElement('div');
  card.setAttribute('class', 'card h-100');

  const img = document.createElement('img');
  img.setAttribute('src', `${user.avatar_url}`);
  img.setAttribute('alt', `${user.login}`);
  img.setAttribute('class', 'card-img-top');

  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.setAttribute('class', 'card-title');
  cardTitle.textContent = `${user.login}`;

  const cardText = document.createElement('pre');
  cardText.setAttribute('class', 'card-text');
  cardText.textContent = `id: ${user.id} type: ${user.type} `;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);
  list.appendChild(col)
}
