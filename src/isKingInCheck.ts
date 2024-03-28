/* eslint-disable no-param-reassign */
import { Chessboard, IsKingInCheckResponse } from "./types";

export function createEmptyChessboard(): Chessboard {
  return Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ""));
}

export function placeKing(chessboard: Chessboard) {
  chessboard[7][4] = "K";
}

export function placeRook(chessboard: Chessboard) {
  chessboard[3][0] = "R";
}

export function rowIncludesKingAndRook(row: string[]) {
  return row.includes("K") && row.includes("R");
}

export function isKingInCheck(chessboard: Chessboard) {
  if (chessboard.some((row) => rowIncludesKingAndRook(row))) return true;
  return false;
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
