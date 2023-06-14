let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig',
];

// const fetchPromise = fetch(urls[0]);
// fetchPromise.then((response) => {
//     response.json().then((body) => {
//         console.log(body);
//     });
// });

async function fetchUserData(url) {
    const response = await fetch(url);
    const body = await response.json();

    console.log(body);
}

console.log('before function call');

fetchUserData(urls[0]).then((result) => {
    console.log('after function call');
});

async function fetchData(resource, number = 1) {
    const response = await fetch(`https://random-data-api.com/api/v2/${resource}?size=${number}`);
    const body = await response.json();

    const normalizedBody = Array.isArray(body) ? body : [body];
    normalizedBody.map((item) => {
        console.log(`${item.brand} (${item.alcohol}) - ${item.style}`);
    });
}

fetchData('beers', 10);

async function fetchUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const body = await response.json();
    console.log(body);

    const responseDelete = await fetch(`https://jsonplaceholder.typicode.com/users/${body[4].id}`, {
        method: 'DELETE',
    });

    const responseGet = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const bodyGet = await responseGet.json();

    console.log(bodyGet);
}

fetchUsers();

async function fetchDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const body = await response.json();

    console.log(body);
    addImageToPage(body.message);
}

function addImageToPage(url) {
    const dogImagesContainer = document.getElementById('dog-images');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', url);

    dogImagesContainer.appendChild(imgElement);
}
