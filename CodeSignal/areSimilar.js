/* eslint-disable no-unused-vars */
function solution(a, b) {
  let arr1 = [];
  let arr2 = [];
  if (a.join('') === b.join('')) {
    return true;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        arr1.push(a[i]);
        arr2.push(b[i]);
      }
    }
    arr2 = arr2.reverse().join('');
    arr1 = arr1.join('');
    if (arr1 === arr2) {
      return true;
    } else {
      return false;
    }
  }
}
