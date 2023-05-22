var userCountry = '';

if (true) {
    let b = 1;
    userCountry = 'Romania';
}

{
    const c = '1';
}

// console.log(c);

// console.log(b);

function showUserCountry() {
    var d = 11;
    console.log(userCountry);
}

showUserCountry();

// var vs let vs const

// var => declarat global are scope global, declarat in functie are function scope
// let, const => block scope

let a = 1;
function test() {
    let b = 2;

    function test2() {
        let c = 3;
        console.log(a, b, c);
    }

    test2();

    console.log(a, b);
}
console.log(a);

test();

// let b = a; // => shallow copy
let b = [...a]; // => deep copy

b.push(5);
console.log(a, b);
// b NU ESTE egal cu [1, 2, 3, 4]

function addNumberToArray(array) {
    array.push(6);
}

addNumberToArray(a);

console.log(a, b);

let variable = 20;

// FOARTE GRESIT!
var variable2 = 10;
console.log(variable2);
var variable2 = 30;
console.log(variable2);

var variable3 = 'Andrei';

if (true) {
    var variable3 = 'Andrei2';
}

function changeVariable() {
    var variable3 = 'Andrei3';
}

{
    var variable3 = 'Andrei4';
    let variable5 = 100;
}

changeVariable();
console.log(variable3);
