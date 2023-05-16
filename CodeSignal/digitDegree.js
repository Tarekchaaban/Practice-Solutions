/* eslint-disable no-unused-vars */
function solution(n) {
  let degree = 0;

  while (n >= 10) {
    n = sumDigits(n);
    degree++;
  }

  return degree;
}

function sumDigits(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}
