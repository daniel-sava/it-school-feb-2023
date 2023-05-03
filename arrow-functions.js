var numbers = [3, 67, 98, 23, 43, -108];

var sumOfNumbers = (numbers) => {
    var sum = 0;

    for (var number of numbers) {
        sum = sum + number;
    }

    return sum;
};

console.log(sumOfNumbers(numbers));

console.log(parseInt('4.5'));
console.log(parseFloat('4.5'));

alert('I am a message!');
prompt('Prompt message');
