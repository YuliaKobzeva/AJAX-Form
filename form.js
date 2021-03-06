const form = document.querySelector(".form");
const contentWrapper = document.querySelector(".form-container");
const buttonSubmit = document.querySelector(".form__button");

const loader = document.createElement("div");
loader.classList.add("lds-dual-ring");

okMessage = document.createElement("div");
okMessage.classList.add("ok-message");
okMessage.textContent = "Форма успешно отправлена!";

function afterResponse() {
	contentWrapper.removeChild(loader);
	contentWrapper.appendChild(okMessage);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const formDataObject = {};
	formData.forEach((value, key) =>
		formDataObject[key] = value);

	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "post",
		body: JSON.stringify(formDataObject),
	})
		.then((response) => response.text())
		.then((response) => {
      if (response) {
				setTimeout(afterResponse, 3000);
			}
		})
		.catch((error) => console.error(error));
	form.reset();
	contentWrapper.removeChild(buttonSubmit);
	contentWrapper.appendChild(loader);
});
