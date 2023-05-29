// const car1 = {
//     brand: 'BMW',
//     hp: 245,
//     startEngine: function () {
//         console.log(`Starting the ${this.hp} engine`);
//     },
// };

// const car2 = {
//     brand: 'Audi',
//     hp: 300,
//     startEngine: function () {
//         console.log(`Starting the ${this.hp} engine`);
//     },
// };

function Car(brand, hp) {
    console.log(this);
    this.brand = brand;
    this.hp = hp;

    this.startEngine = function () {
        console.log(`Starting the ${this.hp} engine`);
    };
}

const car1 = new Car('BMW', 245);
const car2 = new Car('Audi', 300);

car1.startEngine();
car2.startEngine();
