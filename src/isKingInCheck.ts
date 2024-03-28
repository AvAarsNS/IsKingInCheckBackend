/* eslint-disable no-param-reassign */
import { Chessboard, IsKingInCheckResponse } from "./types";

export function createEmptyChessboard(): Chessboard {
  return Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ""));
}

export function placeKing(chessboard: Chessboard) {
  chessboard[7][4] = "K";
}

export function startGame(): IsKingInCheckResponse {
  const chessboard = createEmptyChessboard();

  placeKing(chessboard);

  return {
    chessboard,
    isKingInCheck: true,
  };
}
