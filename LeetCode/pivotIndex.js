/* eslint-disable no-unused-vars */
var pivotIndex = function (nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - nums[i] - leftSum;
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
