/* eslint-disable no-unused-vars */
function solution(n) {
  let currentFactorial = 1;
  for (let i = 1; i < 100; i++) {
    if (currentFactorial < n) {
      currentFactorial = currentFactorial * (i + 1);
    } else {
      break;
    }
  }
  return currentFactorial;

}
