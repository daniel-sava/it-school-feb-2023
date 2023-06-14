let promise = new Promise(function (resolve, reject) {
    const car = {
        brand: 'Dacia',
        model: '1310',
        isRunning: true,
    };

    if (car.isRunning) {
        resolve(car);
    } else {
        reject('Car is broken!');
    }
});

console.log(promise);

promise.then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    }
);

let setTimeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 5000);
});

console.log(setTimeoutPromise);

setTimeoutPromise.finally(() => {
    console.log('Error or success');
});

// Modalitatea 1
promise.then(
    (success) => {}
    // (error) => {}
);

// Modalitatea 2
promise.then((success) => {}).catch((error) => {});

// Modalitatea 3
promise.finally(() => {});

Promise.race([
    new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve('Timeout 1');
        }, 6000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve('Timeout 2');
        }, 4000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve('Timeout 3');
        }, 2000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve('Timeout 4');
        }, 0)
    ),
]).then((result) => console.log(result));
