let sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.length);
console.log(sentence.at(-4));
console.log(sentence.charAt(5));
console.log(sentence.charCodeAt(5));

const firstName = 'Prenume';
const lastName = 'Nume';

const fullName = lastName.concat(' ', '-', ' ', firstName);
console.log(fullName);

console.log(sentence.startsWith('T'));
console.log(sentence.endsWith('dog.'));

console.log(String.fromCharCode(536, 534, 535));

console.log(sentence.includes('brown fox'));
console.log(sentence.indexOf('quick'));
console.log(sentence.lastIndexOf('o'));

console.log(fullName.padStart(30, 'a'));
console.log(fullName.padEnd(30, '.'));

const hello = 'Hello!';
console.log(hello.repeat(5));

console.log(sentence.replace('brown fox', 'red dog'));

console.log(sentence.slice(4, 19));

const keywords = 'keyboard,apple,device,it school';
console.log(keywords.split(','));

console.log(keywords.substring(9, 14));

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

const randomString = '      Salut!      ';
console.log(randomString.trim());
console.log(randomString.trimStart());
console.log(randomString.trimEnd());

const anotherString = new String('This is another string');
console.log(anotherString);
console.log(typeof anotherString);
console.log(anotherString.toString());
console.log(typeof anotherString.toString());
console.log(anotherString.valueOf());
console.log(typeof anotherString.valueOf());

for (let character of firstName) {
    console.log(character);
}
