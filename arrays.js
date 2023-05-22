const numbers = [9, 6, 5, 11, 7, 11];

// console.log(numbers.length);

// for (let number of numbers) {
//     console.log(number);
// }

// const numbers2 = [...numbers];

// console.log(numbers2 == numbers);

// const users = [
//     { id: 1, name: 'Nume1' },
//     { id: 1, name: 'Nume1' },
// ];

// const items = [
//     ['Apple', 100],
//     ['Mango', 17],
// ];

// console.log(JSON.stringify(users[0]) === JSON.stringify(users[1]));

// const evenNumbers = new Array('2');

// console.log(evenNumbers.length);
// for (let evenNumber of evenNumbers) {
//     console.log(evenNumber);
// }

const allNumbersAreLow = numbers.some((number) => number < 5);
console.log(allNumbersAreLow);

const newArray = new Array(10).fill(5);
console.log(newArray);

const evenNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(evenNumbers);
console.log(numbers);

const array2 = [1, 2, 3, 4, 5];
array2.push(6);
console.log(array2);
const value = array2.pop();
console.log(array2);

const value2 = array2.pop();
console.log(array2);
console.log(value, value2);

const element = numbers.findLastIndex((number) => number === 11);
console.log(element);

const hasNumber = numbers.includes(7);
console.log(hasNumber);

console.log(Array.isArray([]));

const keywords = ['Telefon', 'Apple', 'Iphone', '13'];
const url = keywords.join().toLowerCase();
console.log(url);

const users = [
    { id: 'abc1', name: 'Name 1' },
    { id: 'abc2', name: 'Name 2' },
    { id: 'abc3', name: 'Name 3' },
];
const formattedUsers = users.map((user) => {
    return { ...user, isOnline: true };
});

console.log(formattedUsers);

const sum = numbers.reduce((accumulator, number) => {
    console.log(accumulator, number);

    return accumulator + number;
}, 10);
console.log(sum);

const usersObj = users.reduce((accumulator, user) => {
    return { ...accumulator, [user.id]: user.name };
}, {});
console.log(usersObj);

/**
 * 1. {}
 * 2. { 'abc1': 'Name 1' }
 * 3. { 'abc1': 'Name 1', 'abc2': 'Name 2' }
 */

console.log(users.reverse());

const firstUser = users.shift();
console.log(firstUser);
console.log(users);

users.unshift(firstUser);
console.log(users);

console.log(numbers.slice(1, 4));

console.log(numbers.splice(0, 1, 10));
console.log(numbers);

numbers.sort((number1, number2) => number2 - number1);
console.log(numbers);
