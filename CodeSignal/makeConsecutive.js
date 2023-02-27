/* eslint-disable no-unused-vars */

function solution(statues) {
  const largest = Math.max(...statues);
  const smallest = Math.min(...statues);
  const arr = [];
  for (let i = smallest; i <= largest; i++) {
    arr.push(statues[i]);
  }
  return arr.length - statues.length;
}
