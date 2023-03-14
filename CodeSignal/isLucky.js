/* eslint-disable no-unused-vars */
function solution(n) {
  const numberStringArray = n.toString().split('');
  let firstHalfSum = 0;
  let secondHalfSum = 0;
  for (let i = 0; i < numberStringArray.length / 2; i++) {
    firstHalfSum += parseInt(numberStringArray[i]);
  }

  for (let i = numberStringArray.length - 1; i >= numberStringArray.length / 2; i--) {
    secondHalfSum += parseInt(numberStringArray[i]);
  }

  if (firstHalfSum === secondHalfSum) {
    return true;
  } else {
    return false;
  }
}
