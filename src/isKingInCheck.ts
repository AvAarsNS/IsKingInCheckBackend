/* eslint-disable no-param-reassign */
import { getRandomChessIndex } from "./getRandomChessIndex";
import { Chessboard, IsKingInCheckResponse } from "./types";

export function createEmptyChessboard(): Chessboard {
  return Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ""));
}

export function placeKing(chessboard: Chessboard) {
  const row = getRandomChessIndex();
  const column = getRandomChessIndex();
  chessboard[row][column] = "K";
}

export function placeRook(chessboard: Chessboard) {
  const row = getRandomChessIndex();
  const column = getRandomChessIndex();
  chessboard[row][column] = "R";
}

export function lineIncludesKingAndRook(line: string[]) {
  return line.includes("K") && line.includes("R");
}

export function extractColumn(chessboard: Chessboard, column: number) {
  return chessboard.map((row) => row[column]);
}

export function isKingInSameRowAsRook(chessboard: Chessboard) {
  return chessboard.some((row) => lineIncludesKingAndRook(row));
}

export function isKingInSameColumnAsRook(chessboard: Chessboard) {
  for (let index = 0; index < 8; index += 1) {
    const column = extractColumn(chessboard, index);

    if (lineIncludesKingAndRook(column)) return true;
  }
  return false;
}

export function isKingInCheck(chessboard: Chessboard) {
  return (
    isKingInSameColumnAsRook(chessboard) || isKingInSameRowAsRook(chessboard)
  );
}

export function startGame(): IsKingInCheckResponse {
  const chessboard = createEmptyChessboard();

  placeKing(chessboard);
  placeRook(chessboard);

  return {
    chessboard,
    isKingInCheck: isKingInCheck(chessboard),
  };
}
