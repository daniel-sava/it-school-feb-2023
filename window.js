window.alert('Aceasta este o alerta');

const promptResult = window.prompt('Te rog introdu o valoare');
console.log(`Ai introdus ${promptResult}`);

const googleButton = document.getElementById('go-to-google');
googleButton.addEventListener('click', () => {
    window.location.href = 'https://google.com';
});
