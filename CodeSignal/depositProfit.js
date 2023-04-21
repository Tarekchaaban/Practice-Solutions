/* eslint-disable no-unused-vars */
function solution(deposit, rate, threshold) {
  let balance = deposit;
  let years = 0;
  while (balance < threshold) {
    balance *= (1 + rate / 100);
    years++;
  }
  return years;
}
