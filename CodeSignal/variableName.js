/* eslint-disable no-unused-vars */
function solution(name) {
  // Regular expression to match a valid variable name
  const regex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

  // Test the input string against the regular expression
  return regex.test(name);
}
