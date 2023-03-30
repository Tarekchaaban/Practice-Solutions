/* eslint-disable no-unused-vars */

function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToTMap = new Map();
  const tToSMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sToTMap.has(sChar) && sToTMap.get(sChar) !== tChar) {
      return false;
    }

    if (tToSMap.has(tChar) && tToSMap.get(tChar) !== sChar) {
      return false;
    }

    sToTMap.set(sChar, tChar);
    tToSMap.set(tChar, sChar);
  }

  return true;
}
