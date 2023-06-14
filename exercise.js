const list = document.getElementById('to-do-list');
const input = document.getElementById('item');

let items = [];

function loadSavedData() {
    items = JSON.parse(localStorage.getItem('todoList'));

    for (let item of items) {
        addItemToUl(item);
    }
}

function addItemToUl(text) {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
}

function addItem() {
    if (input.value === '') {
        return;
    }

    addItemToUl(input.value);

    items.push(input.value);
    localStorage.setItem('todoList', JSON.stringify(items));
}

function clearAll() {
    localStorage.removeItem('todoList');
    list.innerHTML = '';
    items = [];
}

loadSavedData();
