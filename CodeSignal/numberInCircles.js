/* eslint-disable no-unused-vars */
function solution(n, firstNumber) {
  const halfOfN = n / 2;
  let oppositeNumber = 0;
  if (firstNumber >= halfOfN) {
    oppositeNumber = firstNumber - halfOfN;
  } else {
    oppositeNumber = firstNumber + halfOfN;
  }
  return oppositeNumber;

}
