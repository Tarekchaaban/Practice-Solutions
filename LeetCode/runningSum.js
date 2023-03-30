/* eslint-disable no-unused-vars */
var runningSum = function (nums) {
  const runningSumArray = [];
  let runningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    runningSumArray.push(runningSum);
  }
  return runningSumArray;

};
