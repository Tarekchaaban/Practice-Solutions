/* eslint-disable no-unused-vars */
function solution(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let days = 0;
  while (height < desiredHeight) {
    days++;
    height += upSpeed;
    if (height >= desiredHeight) {
      break;
    }
    height -= downSpeed;
  }
  return days;
}
