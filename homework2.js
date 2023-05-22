// 762345 => 543267

/**
 * 1. last digit = 7
 *    result = 0 * 10 + 7 = 7
 *    number = 54326
 *
 * 2. last digit = 6
 *    result = 7 * 10 + 6 = 76
 *    number = 5432
 *
 * 3. last digit = 2
 *    result = 76 * 10 + 2 = 762
 *    number = 543
 */

function reverseNumber(number) {
    let result = 0;

    while (number) {
        let lastDigit = number % 10;
        result = result * 10 + lastDigit;
        number = parseInt(number / 10);
    }

    return result;
}

console.log(reverseNumber(543267));

function checkPalindromeStrings(word) {
    let letters = word.split('');
    let isPalindrom = true;

    for (let index = 0; index < letters.length / 2; index++) {
        if (letters[index] !== letters[letters.length - 1 - index]) {
            isPalindrom = false;
            break;
        }
    }

    return isPalindrom;
}

console.log(checkPalindromeStrings('abcdefdcba'));

function checkPalindromeNumbers(number) {
    const numberCopy = number;
    const reversedNumber = reverseNumber(number);

    return numberCopy === reversedNumber ? true : false;
}

console.log(checkPalindromeNumbers(123464321));

function countVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let index = 0; index < text.length; index++) {
        const character = text.charAt(index).toLowerCase();

        if (vowels.includes(character)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Astazi este Miercuri'));
