/* eslint-disable no-unused-vars */
function solution(inputArray) {
  let largest = -Infinity;
  for (var i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > largest) {
      largest = product;
    }
  }
  return largest;
}
