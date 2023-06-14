let x = 15;
let y = 34;

function multiply(x, y) {
    console.log(x * y);
}

multiply(x, y);

setTimeout(() => {
    console.log('yay!');
}, 0);

console.log(x);
console.log(y);

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}

let timeout;

function showAlert() {
    timeout = setTimeout(() => {
        alert('Random message');
    }, 4000);
}

function cancelAlert() {
    clearTimeout(timeout);
}

let intervalPrintCount = 0;

const interval = setInterval(() => {
    intervalPrintCount++;
    console.log('interval');

    if (intervalPrintCount === 10) {
        clearInterval(interval);
    }
}, 2000);
