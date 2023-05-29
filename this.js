const car = {
    brand: 'Audi',
    start: function () {
        console.log(`This car is an ${this.brand}`);
    },
};

car.start();

const person = {
    firstName: 'Mihai',
    lastName: 'Popescu',
    age: 32,
    grades: [9, 7, 10, 8, 10],
    printName: function () {
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    },
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.firstName}`);
        }, 1000);
    },
    printMaximumGrades: function () {
        this.grades.forEach(function (grade) {
            if (grade === 10) {
                console.log(`${this.firstName} got a ${grade}`);
            }
        }, this);
    },
};

person.country = 'Romania';
person.printAge = function () {
    console.log(`I am ${this.age} years old`);
};

person.printName();
person.printAge();
person.greet();

person.printMaximumGrades();

const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((number) => {});

firstName = 'Andrei';

function printPersonName(param) {
    console.log(this);
    console.log(`${param} Global: My name is ${this.firstName}`);
}

// printPersonName.bind(person)(1);
// printPersonName.call(person);

function sumOfNNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    console.log(sum);
}

sumOfNNumbers(1, 5, 23, 0, 44, 100, 245);

const sumOfNNumbers2 = () => {
    console.log(arguments);
};

// sumOfNNumbers2(1, 5, 2, 56);

const player1 = {
    firstName: 'Jack',
    lastName: 'Black',
    getName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};

const player2 = {
    firstName: 'Bunny',
    lastName: 'Rabbit',
    getName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};

const game = {
    players: [],
    gameName: 'Chess',

    listPlayers: function () {
        this.players.forEach(function (player) {
            console.log(`${player.getName()} is playing ${this.gameName}`);
        }, this);
    },
};

game.players.push(player1, player2);
game.listPlayers();
