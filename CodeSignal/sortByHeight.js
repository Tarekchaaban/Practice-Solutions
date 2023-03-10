/* eslint-disable no-unused-vars */
function solution(a) {
  const heights = a.filter(x => x !== -1);
  heights.sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = heights[j];
      j++;
    }
  }
  return a;
}
