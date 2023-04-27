/* eslint-disable no-unused-vars */
function solution(inputArray, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }
  let maxSum = sum;
  for (let i = k; i < inputArray.length; i++) {
    sum = sum - inputArray[i - k] + inputArray[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}
