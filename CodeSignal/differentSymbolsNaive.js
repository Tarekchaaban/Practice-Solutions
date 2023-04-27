/* eslint-disable no-unused-vars */
function solution(s) {
  const uniqueChars = new Set();
  for (let i = 0; i < s.length; i++) {
    uniqueChars.add(s[i]);
  }
  return uniqueChars.size;
}
