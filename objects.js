let person = {
    firstName: 'Prenume',
    lastName: 'Nume',
    cnp: '12321678631827',
    address: 'Strada nr. 1, Romania',
    age: 30,
    gender: 'M',
    job: {
        company: 'SC COMPANY SRL',
        position: 'Programator',
        startYear: 2020,
        salary: {
            base: 5000,
            net: 3000,
        },
    },
    sayHello: () => {
        console.log('hello');
    },
};

for (let key in person) {
    console.log(person[key]);
}

// let person2 = person; // => shallow copy
// let person2 = { ...person }; // => shallow copy 2
// let person2 = { ...person, job: { ...person.job } }; // => shallow copy 3
// let person2 = Object.assign({}, person); // => shallow copy 4
let person2 = JSON.parse(JSON.stringify(person)); // => shallow copy 5

person2.age = 35;
person2.job.startYear = 2019;
person2.job.salary.base = 6000;

delete person2.job.salary;

console.log(person, person2);
