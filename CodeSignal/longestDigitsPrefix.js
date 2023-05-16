/* eslint-disable no-unused-vars */
function solution(inputString) {
  let longestPrefix = '';
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (isNaN(char) || inputString[0] === ' ') {
      break;
    }
    longestPrefix += inputString[i];
  }
  return longestPrefix;
}
