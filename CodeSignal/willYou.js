/* eslint-disable no-unused-vars */
function solution(young, beautiful, loved) {
  if ((loved === true) && (young === false || beautiful === false)) {
    return true;
  } else if ((loved === false) && (young === true && beautiful === true)) {
    return true;
  } else {
    return false;
  }

}
