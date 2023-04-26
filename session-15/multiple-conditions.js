// && si
// || sau

var student1 = {
    age: 18,
    class: 12,
};

var student2 = {
    age: 17,
    class: 11,
};

// true && true => true
// true && false => false
// false && true => false
// false && false => false
if (student1.class === 12 && student2.class === 12) {
    console.log('Amandoi merg la facultate');
}

// true || true => true
// true || false => true
// false || true => true
// false || false => false
if (student1.class === 12 || student2.class === 12) {
    console.log('Cel putin 1 merge la facultate');
}

if (true && !false) {
    console.log('Mesaj');
}

var isWeekDay = true;

if (!isWeekDay) {
    console.log('Este in timpul saptamanii');
} else {
    console.log('Este weekend');
}

var isSpecialFeatureActive = false;

var backgroundBlue = !isSpecialFeatureActive;
var backgroundRed = isSpecialFeatureActive;

if (!inputHasErrors) {
    console.log('Felicitari!');
}
