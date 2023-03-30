/* eslint-disable no-unused-vars */
function solution(inputArray) {
  inputArray = inputArray.sort((a, b) => {
    return a - b;
  });

  var lastArrayVal = inputArray[inputArray.length - 1];

  for (var i = 1; i <= lastArrayVal + 1; i++) {
    if (inputArray.every(element => {
      return element % i !== 0;
    })) {
      return i;
    }
  }
}
