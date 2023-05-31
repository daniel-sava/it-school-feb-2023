document.addEventListener('DOMContentLoaded', () => {
    const itemsToShop = ['mere', 'pere', 'paine', 'lapte'];

    const shoppingList = document.getElementById('shopping-list');
    for (let item of itemsToShop) {
        const listItem = document.createElement('li');
        listItem.textContent = item.toUpperCase();

        shoppingList.appendChild(listItem);
    }

    const title = document.getElementById('heading');
    const firstNameInput = document.getElementsByName('firstName')[0];
    firstNameInput.addEventListener('input', (event) => {
        title.textContent = firstNameInput.value;
    });

    const box = document.getElementById('box');
    box.addEventListener('mouseenter', () => {
        if (box.classList.contains('red')) {
            box.classList.remove('red');
            box.classList.add('blue');
        }
    });

    box.addEventListener('mouseleave', () => {
        if (box.classList.contains('blue')) {
            box.classList.remove('blue');
            box.classList.add('red');
        }
    });
});
