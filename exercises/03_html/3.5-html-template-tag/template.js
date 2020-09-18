const template = document.getElementById('contact-template');
const div = document.getElementById('contacts');
const form = document.getElementById('form');
const submitButton = document.getElementById('submit');
// const test = document.

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const clone = template.content.cloneNode(true);
    const a = clone.querySelector("a");
    clone.querySelector('h2').innerHTML = document.getElementById('input-name').value;
    clone.querySelector('p').innerHTML = document.getElementById('input-email').value;
    a.setAttribute('href', document.getElementById('input-homepage').value);
    a.innerHTML = document.getElementById('input-homepage').value;
    div.appendChild(clone);
    form.reset();
})