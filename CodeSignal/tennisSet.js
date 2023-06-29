/* eslint-disable no-unused-vars */
function solution(score1, score2) {
  if ((score1 === 6 && score2 < 5) || (score2 === 6 && score1 < 5)) {
    return true;
  } else if (score1 === score2 || score2 > 7) {
    return false;
  } else if ((score1 === 7 && score2 >= 5) || (score2 === 7 && score1 >= 5)) {
    return true;
  } else {
    return false;
  }

}
