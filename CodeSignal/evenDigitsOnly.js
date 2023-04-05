/* eslint-disable no-unused-vars */
function solution(n) {
  const numbersArray = n.toString().split('');
  for (let i = 0; i < numbersArray.length; i++) {
    if (parseInt(numbersArray[i]) % 2 !== 0) {
      return false;
    }
  }
  return true;

}
