// Template literals

const fullName = 'Mihai Popescu';
const place = 'IT School';
console.log(`Salut ${fullName}! Welcome to ${place}`);

const productSKU = '123551122';
const productName = `Iphone 14 Pro Max ${productSKU}`;
const price = 6600;
const vat = 1200;

console.log(`Tocmai ai comandat ${productName}, la pretul de ${price + vat} (TVA inclus)`);

// Nullish coalescing operator

let a = 15;
let b;

if (a && b) {
    console.log(a + b);
}

// let person = {
//     firstName: 'Person',
// };
let person;

// if (person) {
//     console.log(person.firstName);
// }

function printPersonFirstName() {
    console.log(person.firstName);
}

person && printPersonFirstName();

// Optional chaining operator

let employee = {
    firstName: 'Random Employee',
    age: 34,
    title: 'Frontend Developer',
    company: {
        name: 'Test Company',
        address: {
            city: 'Timisoara',
        },
    },
};

console.log(employee?.company?.address?.city);

// Object destructuring

const { firstName, age, title } = employee;

console.log(`${firstName} is ${age} years old, and works as a ${title}`);
