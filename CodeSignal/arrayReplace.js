/* eslint-disable no-unused-vars */
function solution(inputArray, elemToReplace, substitutionElem) {
  const substitutedArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      substitutedArray.push(substitutionElem);
    } else {
      substitutedArray.push(inputArray[i]);
    }
  }
  return substitutedArray;
}
