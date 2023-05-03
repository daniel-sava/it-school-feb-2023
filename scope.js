var userCountry = '';

if (true) {
    let b = 1;
    userCountry = 'Romania';
}

{
    const c = '1';
}

// console.log(c);

// console.log(b);

function showUserCountry() {
    var d = 11;
    console.log(userCountry);
}

showUserCountry();

// var vs let vs const

// var => declarat global are scope global, declarat in functie are function scope
// let, const => block scope

let a = 1;
function test() {
    let b = 2;

    function test2() {
        let c = 3;
        console.log(a, b, c);
    }

    test2();

    console.log(a, b);
}
console.log(a);

test();
