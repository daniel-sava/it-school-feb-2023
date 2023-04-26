var currentDayNumber = 7;
var dayNumberForSunday = 7;

// Daca currentDayNumber este egal cu 3, afiseaza mesaj.
if (currentDayNumber == 3) {
    console.log('Astazi este Miercuri!');
} else {
    console.log('Astazi NU este Miercuri');
}

if (currentDayNumber == 1) {
    console.log('Luni');
} else if (currentDayNumber == 2) {
    console.log('Marti');
} else if (currentDayNumber == 3) {
    console.log('Miercuri');
} else if (currentDayNumber == 4) {
    console.log('Joi');
} else if (currentDayNumber == 5) {
    console.log('Vineri');
} else if (currentDayNumber == 6) {
    console.log('Sambata');
} else if (currentDayNumber == 7) {
    console.log('Duminica');
} else {
    console.log('Nu este o zi a saptamanii');
}

if (currentDayNumber == dayNumberForSunday) {
    console.log('Astazi este Duminica');
}

console.log(2 == '2');
console.log(2 === '2');

// == Verifica daca 2 valori/variabile sunt egale
// === Verifica daca 2 valori/variabile sunt egale si au acelasi tip
