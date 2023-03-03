/* eslint-disable no-unused-vars */

function solution(inputArray) {
  let largestLength = 0;
  const largestWordsInArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > largestLength) {
      largestLength = inputArray[i].length;
    }
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === largestLength) {
      largestWordsInArray.push(inputArray[i]);
    }
  }
  return largestWordsInArray;
}
