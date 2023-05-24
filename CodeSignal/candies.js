/* eslint-disable no-unused-vars */
function solution(n, m) {
  const amountToEat = Math.floor(m / n);
  let kidsFed = 0;
  let totalEaten = 0;
  while (kidsFed < n) {
    totalEaten += amountToEat;
    kidsFed++;
  }
  return totalEaten;

}
