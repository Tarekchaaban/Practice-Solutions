/* eslint-disable no-unused-vars */
/* function solution(inputString) {
  var charArray = inputString.split('');

  var letterObject = {};

  for (var i = 0; i < charArray.length; i++) {
    if (!letterObject.hasOwnProperty(charArray[i])) {
      letterObject[charArray[i]] = 1;
    } else {
      letterObject[charArray[i]]++;
    }
  }

  var oddCount = 0;
  for (var key in letterObject) {
    if (letterObject[key] % 2 !== 0) {
      oddCount++;
    }
  }
  return !(oddCount > 1);
} */
