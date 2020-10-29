const form = document.querySelector(".form");
const contentWrapper = document.querySelector('.form-container');
const buttonSubmit = document.querySelector('.form__button');
const loader = document.createElement('div');
loader.classList.add('lds-dual-ring');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = JSON.stringify(new FormData(form)); /*сериализация данных формы в JSON*/
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: formData
  })
  .then(response => response.text())
  .then(response => {
    if (response) {
      setTimeout(() => {
        console.log("прошло 3 секунды")
      }, 3000);
    }
  })
  .catch(error => console.error(error));
  form.reset();
  contentWrapper.removeChild(buttonSubmit);
  contentWrapper.appendChild(loader);


});