/* eslint-disable no-unused-vars */
function solution(inputString) {
  const letters = 'abcdefghijklmnopqrstuvwxyza';
  const array = inputString.split('');
  const newWord = [];
  for (let i = 0; i < array.length; i++) {
    const charIndex = letters.indexOf(array[i]);
    newWord.push(letters[charIndex + 1]);
  }
  return newWord.join('');
}
