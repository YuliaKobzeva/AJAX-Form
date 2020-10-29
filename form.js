const form = document.querySelector(".form");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = JSON.stringify(new FormData(form)); /*сериализация данных формы в JSON*/
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: formData
  })
  .then(response => response.text())
  .catch(error => console.error(error));
  form.reset();

});