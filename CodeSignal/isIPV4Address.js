/* eslint-disable no-unused-vars */
function solution(inputString) {
  const numbersArray = inputString.split('.');
  if (numbersArray.length !== 4) {
    return false;
  } else {
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] < 0 || numbersArray[i] > 255 || numbersArray[i] === '' || isNaN(numbersArray[i]) || (numbersArray[i].length === 2 && numbersArray[i].startsWith('0'))) {
        return false;
      }
    }
    return true;
  }
}
