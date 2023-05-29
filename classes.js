// class Car {
//     brand;
//     hp;
//     engine;

//     constructor(brand, hp) {
//         this.brand = brand;
//         this.hp = hp;

//         this.detectEngine();
//     }

//     detectEngine() {
//         if (this.hp < 250) {
//             this.engine = '2l';
//         } else {
//             this.engine = '3l';
//         }
//     }

//     startEngine() {
//         console.log(`Starting the ${this.hp}, ${this.engine} engine`);
//     }
// }

// const car1 = new Car('BMW', 245);
// const car2 = new Car('Audi', 300);

// car1.startEngine();
// car2.startEngine();

class Vehicle {
    static defaultWheels = 0;

    #brand; // private
    wheels;
    emissions;
    consumption;
    _passengers; // protected

    constructor(brand, wheels, emissions, consumption, passengers) {
        this.#brand = brand;
        this.wheels = wheels;
        this.emissions = emissions;
        this.consumption = consumption;
        this.passengers = passengers;
    }

    drive() {
        console.log('Driving vehicle...');
    }
}

class Car extends Vehicle {
    static wheels = 4;

    constructor(brand, emissions, consumption, passengers) {
        super(brand, Car.wheels, emissions, consumption, passengers);
    }

    static printNumberOfWheels() {
        console.log(this.wheels);
    }

    drive() {
        console.log(`Driving my ${this.brand} with a consumption of ${this.consumption}l/100 km.`);
    }

    #stop() {
        console.log('Full stop');
    }
}

class Truck extends Vehicle {
    constructor(brand, emissions, consumption, passengers) {
        super(brand, 8, emissions, consumption, passengers);
    }
}

const car = new Car('BMW', '92mg', 12.5, 4);
car.brand = 'Audi';
car.stop();
console.log(car.#brand);
// Car.printNumberOfWheels();
console.log(`A car has ${Car.wheels} wheels`);
car.drive();
console.log(car.wheels);

const truck = new Truck('MAN', '1000', 50, 3);
// truck.stop();
truck.drive();
console.log(Truck.defaultWheels);
