/* eslint-disable no-unused-vars */
function solution(a) {
  const teamOneArray = [];
  const teamTwoArray = [];
  let teamOneSum = 0;
  let teamTwoSum = 0;
  const totalWeight = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      teamOneArray.push(a[i]);
    } else {
      teamTwoArray.push(a[i]);
    }
  }
  for (let i = 0; i < teamOneArray.length; i++) {
    teamOneSum += teamOneArray[i];
  }
  totalWeight.push(teamOneSum);

  for (let i = 0; i < teamTwoArray.length; i++) {
    teamTwoSum += teamTwoArray[i];
  }
  totalWeight.push(teamTwoSum);

  return totalWeight;
}
