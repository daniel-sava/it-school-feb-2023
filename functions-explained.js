var mixedNumbers = [3, 6, 12, 1, 4, 112, 44, 97, 32, 105, 101, 442];

function getEvenNumbersFromArray(mixedNumbersParameter) {
    let evenNumbers = [];

    for (let number of mixedNumbersParameter) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
}

let evenNumbersResult = getEvenNumbersFromArray(mixedNumbers);
console.log(evenNumbersResult);

/* Trimiterea prin valoare
let coffeeLevel = 0;
console.log(coffeeLevel);
function addCoffee(coffeCup) {
    coffeCup = coffeCup + 5;
    console.log(coffeCup);
    return coffeCup;
}

coffeeLevel = addCoffee(coffeeLevel);
console.log(coffeeLevel);

coffeeLevel = addCoffee(coffeeLevel);
console.log(coffeeLevel);
*/
