const usersOnline = 10;

if (usersOnline) {
    console.log('Exista utilizatori online');
}

if (!usersOnline) {
    console.log('Nu exista utilizatori online');
}

//  ' '.trim() => ''
const firstName = 'Mihai';

if (firstName) {
    console.log('Numele utilizatorului este: ', firstName);
} else {
    console.log('Utilizatorul nu are nume');
}

var backgroundColor = null;

if (backgroundColor) {
    console.log('Culoarea de background este: ', backgroundColor);
} else {
    console.log('Nu avem aculoare de background');
}

var user;

// !user => user === undefined
// user => user !== undefined
if (user === undefined) {
    console.log('Utilizatorul nu exista');
}

// NaN
console.log(Number('Text care nu reprezinta un numar'));
