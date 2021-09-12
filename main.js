/*capitalize function */
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

/*reverse function */
function reverse(str) {
  let strArr = str.trim().split('');
  let newStr = '';
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr += strArr[i];
  }
  return newStr;
}

/*calculator function */
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

/*caesarify function */
function caesarify(str, shift = 2) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphaArr = alphabet.split('');
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let letterIndex = alphaArr.indexOf(str[i].toLowerCase());
    if (letterIndex !== -1) {
      if (checkUpperCase(str[i])) {
        if (!checkWrappedChar(letterIndex, shift, alphabet.length)) {
          newStr += alphaArr[letterIndex + shift].toUpperCase();
        } else {
          newStr +=
            alphaArr[letterIndex + shift - alphabet.length].toUpperCase();
        }
      } else {
        if (!checkWrappedChar(letterIndex, shift, alphabet.length)) {
          newStr += alphaArr[letterIndex + shift];
        } else {
          newStr += alphaArr[letterIndex + shift - alphabet.length];
        }
      }
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

function checkWrappedChar(index, shift, length) {
  if (index + shift > length - 1) {
    return true;
  }
  return false;
}

function checkUpperCase(char) {
  let upper = char.toUpperCase();
  if (char === upper) {
    return true;
  }
  return false;
}

/*number array to object function */
function createNumObj(arr) {
  length = arr.length;
  min = checkMinNumber(arr);
  max = checkMaxNumber(arr);
  avg = calcAverageFromArr(arr);

  return {
    avg: avg,
    min: min,
    max: max,
    length: length,
  };
}

function checkMinNumber(numArr) {
  let min = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (min > numArr[i]) {
      min = numArr[i];
    }
  }
  return min;
}

function checkMaxNumber(numArr) {
  let max = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (max < numArr[i]) {
      max = numArr[i];
    }
  }
  return max;
}

function calcAverageFromArr(numArr) {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum / numArr.length;
}

module.exports = {
  capitalize: capitalize,
  reverse: reverse,
  calculator: calculator,
  caesarify: caesarify,
  createNumObj: createNumObj,
};
