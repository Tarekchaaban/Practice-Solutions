/* eslint-disable no-unused-vars */
function solution(bishop, pawn) {
  const letterToNumber = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7
  };

  const bishopFile = letterToNumber[bishop[0]];
  const bishopRank = parseInt(bishop[1]) - 1;
  const pawnFile = letterToNumber[pawn[0]];
  const pawnRank = parseInt(pawn[1]) - 1;

  const bishopSum = bishopFile + bishopRank;
  const pawnSum = pawnFile + pawnRank;

  return bishopSum % 2 === pawnSum % 2;
}
