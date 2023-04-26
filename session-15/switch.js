var currentDayNumber = 7;

switch (currentDayNumber) {
    case 1:
        console.log('Luni');
        break;
    case 2:
        console.log('Marti');
        break;
    case 3:
        console.log('Miercuri');
        break;
    case 4:
        console.log('Joi');
        break;
    case 5:
        console.log('Vineri');
        break;
    case 6:
    case 7:
        console.log('Este weekend');
        break;
    default:
        console.log('Ziua nu este corecta');
}

var currentDay = 'Miercuri';

switch (currentDay) {
    case 'Luni':
        console.log(1);
        break;
    case 'Marti':
        console.log(2);
        break;
    case 'Miercuri':
        console.log(3);
        break;
    default:
        console.log('Ziua nu este corecta');
}
