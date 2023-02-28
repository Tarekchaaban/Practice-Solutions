/* eslint-disable no-unused-vars */
function solution(matrix) {
  let priceTotal = 0;
  const bannedIndex = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        bannedIndex.push(j);
      } else if (bannedIndex.indexOf(j) === -1) {
        priceTotal += matrix[i][j];
      }
    }
  }
  return priceTotal;

}
