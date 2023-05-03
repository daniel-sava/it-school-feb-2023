function sum(a, b) {
    return a + b;
}

var num1 = 100;
var num2 = 24;

var sumNum1Num2 = sum(num1, num2);
console.log(sumNum1Num2);

function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

var user = getFullName('Mihai', 'Popescu');
console.log(user);

var numbers = [14, 25, 28, 144, 35, 99];

function getHighestNumberFromArray(numbers) {
    var highestNumber = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }

    return highestNumber;
}

console.log(getHighestNumberFromArray(numbers));

var mixedNumbers = [3, 6, 12, 1, 4, 112, 44, 97, 32, 105, 101, 442];

function getEvenNumbersFromArray(numbers) {
    var evenNumbers = [];

    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }

    return evenNumbers;
}

// console.log(getEvenNumbersFromArray(mixedNumbers));

function sortNumbers(numbers) {
    var numbersCopy = [...numbers];

    for (var i = 0; i < numbersCopy.length; i++) {
        for (var j = 0; j < numbersCopy.length - i - 1; j++) {
            if (numbersCopy[j] > numbersCopy[j + 1]) {
                var temp = numbersCopy[j];
                numbersCopy[j] = numbersCopy[j + 1];
                numbersCopy[j + 1] = temp;
            }
        }
    }

    return numbersCopy;
}

var evenNumbers = getEvenNumbersFromArray(mixedNumbers);
var evenNumbersSorted = sortNumbers(evenNumbers);

console.log(evenNumbers);
console.log(evenNumbersSorted);
