// 1.
function pow1(number, power) {
    let result = 1;

    // let iteration = 1;
    // while (iteration <= power) {
    //     result = result * number;
    //     iteration++;
    // }

    for (let iteration = 1; iteration <= power; iteration++) {
        result = result * number;
    }

    return result;
}

function pow2(number, power) {
    return number ** power;
}

function pow3(number, power) {
    return Math.pow(number, power);
}

// console.log(pow1(2, 2));
// console.log(pow2(2, 2));
// console.log(pow3(2, 2));

// 2.
function getDuplicates(array) {
    let duplicates = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                // if (duplicates.indexOf(array[i]) === -1) {
                //     duplicates.push(array[i]);
                // }
                if (!duplicates.includes(array[i])) {
                    duplicates.push(array[i]);
                }
            }
        }
    }

    return duplicates;
}

let numbers = [1, 5, 4, 1, 8, 2, 22, 5, 4];
// console.log(getDuplicates(numbers));

// 3.
function getLongestString(array) {
    let longestString = '';

    for (let item of array) {
        console.log(longestString, item);
        if (item.length > longestString.length) {
            longestString = item;
        }
    }

    return longestString;
}

let strings = ['a', 'ab', 'abc', 'abcd', 'ab1', 'abcde', 'abc1'];
console.log(getLongestString(strings));

// 4.
function romanToInt(romanNumber) {
    let totalValue = romanCharacterToInt(romanNumber.charAt(0));
    let previousNumber;
    let currentNumber;

    for (let index = 1; index < romanNumber.length; index++) {
        currentNumber = romanCharacterToInt(romanNumber.charAt(index));
        previousNumber = romanCharacterToInt(romanNumber.charAt(index - 1));

        if (currentNumber <= previousNumber) {
            totalValue = totalValue + currentNumber;
        } else {
            totalValue = totalValue - previousNumber * 2 + currentNumber;
        }
    }

    return totalValue;
}

function romanCharacterToInt(romanCharacter) {
    switch (romanCharacter) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

console.log(romanToInt('IIII'));
