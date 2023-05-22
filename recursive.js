function countDown(startingNumber) {
    console.log(startingNumber);

    if (startingNumber === 1) {
        return;
    }

    startingNumber = startingNumber - 1;
    countDown(startingNumber);
}

countDown(10);

function factorial(number) {
    if (number === 0) {
        return 1;
    }

    return number * factorial(number - 1);
}

const result = factorial(3);
console.log(result);

/**
 * 1. factorial(3)
 *  3 * factorial(2)
 * 2. factorial(2)
 *  3 * 2 * factorial(1)
 * 3. factorial(1)
 *  3 * 2 * 1 * factorial(0)
 * 4. factorial(0)
 *  3 * 2 * 1 * 1
 */
