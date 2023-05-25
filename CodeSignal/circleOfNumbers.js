/* eslint-disable no-unused-vars */
function solution(n, firstNumber) {
  const addOrSubtractValue = (n / 2);
  if (firstNumber < addOrSubtractValue) {
    return firstNumber + addOrSubtractValue;
  } else {
    return firstNumber - addOrSubtractValue;
  }

}
