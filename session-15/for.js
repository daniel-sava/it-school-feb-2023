for (var iteration = 10; iteration >= 1; iteration = iteration - 1) {
    if (iteration === 3) {
        continue;
    }

    console.log('Iteratia nr ', iteration);
}

const someValue = 6;
console.log(someValue);

someValue = 100;
console.log(someValue);
