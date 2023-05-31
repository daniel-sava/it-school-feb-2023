console.log(document);

const pageTitle = document.getElementById('heading');
const day = document.getElementsByClassName('day');

console.log(pageTitle);
console.log(day);

const firstName = document.getElementsByName('firstName')[0];
const lastName = document.getElementsByName('lastName')[0];
const email = document.getElementsByName('email')[0];

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
    };

    if (!data.email || !data.firstName || !data.lastName) {
        console.log('Fill each input!');
        return;
    }

    if (!data.email.includes('@')) {
        console.log('Invalid email');
        return;
    }

    console.log(data);
});

const allListItems = document.getElementsByTagName('li');
console.log(allListItems);

const allElementsWithClassDay = document.querySelectorAll('.day');
console.log(allElementsWithClassDay);

const spanElementWithClassDay = document.querySelector('span.day');
console.log(spanElementWithClassDay);

const title = document.querySelector('#heading');
console.log(title);

const allElementsWithSrc = document.querySelectorAll('[src]');
console.log(allElementsWithSrc);

for (let item of allListItems) {
    console.log(item.className);
    console.log(item.children);
}

const addClassButton = document.getElementById('add-class');
addClassButton.addEventListener('click', () => {
    for (let item of allListItems) {
        item.classList.add('new-class');
        item.textContent = item.textContent + ' (Class Added)';
    }
});

const imageUrl = 'https://picsum.photos/200/300';
const images = document.getElementsByTagName('img');

for (let image of images) {
    image.setAttribute('src', imageUrl);
}
