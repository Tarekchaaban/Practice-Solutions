/* eslint-disable no-unused-vars */
function solution(picture) {
  const newPicture = picture.map(element => '*' + element + '*');
  let border = [];
  for (let i = 0; i < newPicture[0].length; i++) {
    border.push('*');
  }
  border = border.join('');
  newPicture.push(border);
  newPicture.unshift(border);
  return newPicture;
}
