/* Is the current element greater than the last (increasing)?
Yes...
Good! We don't need to do anything.
No...
Has this happened already ? If so, it's not almost increasing.
If we remove the previous item, are the surrounding items fixed ?
  No ? What if we remove the current item instead ?
    Still no ? Then that means we can't solve this in one move. It's not almost increasing. */
/* eslint-disable no-unused-vars */
function solution(sequence) {
  let invalidItemCount = 0;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      invalidItemCount++;
      if (invalidItemCount > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
    }
  }
  return true;
}
