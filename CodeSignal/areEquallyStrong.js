/* eslint-disable no-unused-vars */
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourStronger = 0;
  let friendsStronger = 0;
  const yourTotal = yourLeft + yourRight;
  const friendsTotal = friendsLeft + friendsRight;
  if (yourLeft > yourRight) {
    yourStronger = yourLeft;
  } else {
    yourStronger = yourRight;
  }
  if (friendsLeft > friendsRight) {
    friendsStronger = friendsLeft;
  } else {
    friendsStronger = friendsRight;
  }

  if (yourStronger === friendsStronger && yourTotal === friendsTotal) {
    return true;
  } else {
    return false;
  }
}
