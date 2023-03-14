/* eslint-disable no-unused-vars */

function solution(s1, s2) {
  let commonChars = 0;

  // Iterate over each character in s1
  for (let i = 0; i < s1.length; i++) {
    const char = s1.charAt(i);

    // Check if the character is also present in s2
    if (s2.includes(char)) {
      commonChars++;

      // Remove the character from s2 so it's not counted again
      s2 = s2.replace(char, '');
    }
  }

  return commonChars;
}
