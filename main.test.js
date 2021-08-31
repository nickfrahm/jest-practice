const functions = require('./main.js');
const capitalize = functions.capitalize;
const reverse = functions.reverse;
const calculator = functions.calculator;
const caesarify = functions.caesarify;

//capitalize tests
test('normal string of letter, capitalize first letter of string', () => {
  expect(capitalize('a fat cat')).toBe('A fat cat');
});

test('spaces in front of string', () => {
  expect(capitalize('     a fat cat')).toBe('A fat cat');
});

test('returns error message on non-letter for first character', () => {
  expect(capitalize('!a fat cat')).toBe('First character is not a letter');
});

/********************/

//reverse string tests
test('one words string reversed', () => {
  expect(reverse('nick')).toBe('kcin');
  expect(reverse('random')).toBe('modnar');
});

test('spaced strings reversed', () => {
  expect(reverse('nick is a cool guy')).toBe('yug looc a si kcin');
  expect(reverse('random words')).toBe('sdrow modnar');
});

/********************/

//calculator tests
test('Adding', () => {
  expect(calculator(1, 2, 'add')).toBe(3);
});

test('Subtracting', () => {
  expect(calculator(55, 44, 'sub')).toBe(11);
});

test('Dividing', () => {
  expect(calculator(6, 3, 'div')).toBe(2);
});

test('Multiplying', () => {
  expect(calculator(4, 5, 'mul')).toBe(20);
});

/********************/

//caesar cipher tests
test('Shift of 2 letters, no punctuation, no casing, not passing z', () => {
  expect(caesarify('cat', 2)).toBe('ecv');
  expect(caesarify('dog')).toBe('fqi');
});

test('Test for case specific strings', () => {
  expect(caesarify('SpIkE')).toBe('UrKmG');
});
