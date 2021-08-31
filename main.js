function capitalize(str) {
  str = str.trim();
  if (str.match(/^[a-z]/)) {
    let first = str[0];
    let strArr = str.split('');
    let result = '';

    strArr[0] = first.toUpperCase();
    strArr.forEach((character) => {
      result += character;
    });
    return result;
  } else {
    return 'First character is not a letter';
  }
}

function reverse(str) {
  let strArr = str.trim().split('');
  let newStr = '';
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr += strArr[i];
  }
  return newStr;
}

function calculator(a, b, op) {
  switch (op) {
    case 'add':
      return a + b;
    case 'sub':
      return a - b;
    case 'mul':
      return a * b;
    case 'div':
      return a / b;
  }
}

function caesarify(str, shift = 2) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphaArr = alphabet.split('');
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let letterIndex = alphaArr.indexOf(str[i]);
    newStr += alphaArr[letterIndex + shift];
  }
  return newStr;
}

function checkUpperCase(char) {
  if (char === char.toUpperCase()) {
    return true;
  }
  return false;
}

module.exports = {
  capitalize: capitalize,
  reverse: reverse,
  calculator: calculator,
  caesarify: caesarify,
};
