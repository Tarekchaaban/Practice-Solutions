/* eslint-disable no-unused-vars */
function solution(lastNumberOfDays) {
  if (lastNumberOfDays === 28 || lastNumberOfDays === 30) {
    return [31];
  } else if (lastNumberOfDays === 31) {
    return [28, 30, 31];
  }
}
