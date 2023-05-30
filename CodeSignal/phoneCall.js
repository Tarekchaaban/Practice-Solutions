/* eslint-disable no-unused-vars */
function solution(min1, min210, min11, s) {
  let cost = 0;
  let timeSpoken = 0;
  if (min1 > s) {
    return 0;
  }

  if (s > cost) {
    cost += 1 * min1;
    timeSpoken++;
  }
  for (let i = 2; i <= 10; i++) {
    if (s > cost) {
      if (min210 > s - cost) {
        return timeSpoken;
      }
      cost += 1 * min210;
      timeSpoken++;
    }
  }
  for (let i = 11; i <= 1000; i++) {
    if (s > cost & s - cost >= min11) {
      cost += 1 * min11;
      timeSpoken++;
    }
  }
  return timeSpoken;

}
