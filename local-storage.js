const input = document.getElementById('name');
const button = document.getElementById('save');
const buttonDelete = document.getElementById('delete');

button.addEventListener('click', function () {
    const name = input.value;
    sessionStorage.setItem('name', name);
});

function getSavedName() {
    const name = sessionStorage.getItem('name');

    if (name) {
        input.setAttribute('value', name);
    }
}

getSavedName();

function clearStorage() {
    sessionStorage.removeItem('name');
}
