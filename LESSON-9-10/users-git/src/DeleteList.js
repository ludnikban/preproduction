export let DeleteListUsers = () => {
  let elements = document.getElementsByClassName('col');
  if (elements) {
    while (elements[0]) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
}