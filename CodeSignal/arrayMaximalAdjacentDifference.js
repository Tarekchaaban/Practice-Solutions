/* eslint-disable no-unused-vars */
function solution(inputArray) {
  let largestDifference = -Infinity;
  for (let i = 0; i < inputArray.length; i++) {
    const currentDifferenceForward = inputArray[i] - inputArray[i + 1];
    const currentDifferenceBackward = inputArray[i] - inputArray[i - 1];
    let biggestCurrentDifference = 0;
    if (currentDifferenceForward > currentDifferenceBackward) {
      biggestCurrentDifference = currentDifferenceForward;
    } else {
      biggestCurrentDifference = currentDifferenceBackward;
    }
    if (biggestCurrentDifference > largestDifference) {
      largestDifference = biggestCurrentDifference;
    }
  }
  return largestDifference;
}
