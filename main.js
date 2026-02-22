let numbers = [1, 11, -2, 3, -10, 4];
const absNumbers = numbers.filter(num => num > 0);
console.log(`absolute numbers - ${absNumbers}`)


const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const animalOne = animals.find(anim => anim.length >= 5);
const elephantIndex = animals.indexOf('elephant');
console.log(`animal - ${animalOne}`);
console.log(`elephant index - ${elephantIndex}`);