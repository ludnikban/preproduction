export let deleteListFilms = () => {
  let elements = document.getElementsByClassName('col');
  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }
};
