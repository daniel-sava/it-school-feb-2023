Array.prototype.getFirstAndLastElement = function () {
    console.log(this);
    return [this[0], this[this.length - 1]];
};

const numbers = [100, 56, 98, 234, 7654, 123];
console.log(numbers.getFirstAndLastElement());

const users = ['User 1', 'User 2', 'User 3', 'User N'];
console.log(users.getFirstAndLastElement());

// function getFirstAndLastElement(array) {
//     return [array[0], array[array.length - 1]];
// }
// console.log(getFirstAndLastElement(numbers));

String.prototype.getMiddleCharacter = function () {
    return this.charAt(this.length / 2);
};

const text1 = 'This is a random text';

console.log(text1.getMiddleCharacter());
