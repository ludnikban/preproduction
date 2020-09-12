const IMAGE_API_URL = 'https://picsum.photos/200/300'
const imageElement = document.getElementById('image')
// 1. Реализовать упрощенный вариант функции fetch() используя Promise + XHR (XMLHttpRequest),
// в response должны быть минимум реализованы методы json() и blob()

function myFetch(url, method) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, IMAGE_API_URL);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject.error(xhr.response);
        console.log('Неудача');
      }
      resolve(xhr.response);
      console.log('Успех');
    }
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
// 2. Загрузить изображение, преобразовать его в Blob и используя FileReader преобразовать в формат DataUrl,
// далее используя функцию insertImage вставить DataUrl в тег img (добавить обработку ошибок)

myFetch(IMAGE_API_URL, 'GET')
  .then(response => {
    console.log(response)
    return response
  })
  .then(blob => {
    let myReader = new FileReader();
    myReader.readAsDataURL(blob);
    console.log(myReader);
    myReader.onload = function() {
      insertImage(myReader.result);
    }
  })
  .catch(err => {
    console.log('Ошибка! ');
    console.error(err);
  });

function insertImage(src) {
    imageElement.src = src;
}
