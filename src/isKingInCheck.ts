import { IsKingInCheckResponse } from "./types";

export function startGame(): IsKingInCheckResponse {
  return {
    chessboard: [[]],
    isKingInCheck: true,
  };
}
