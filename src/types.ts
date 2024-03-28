export type Chessboard = number[][];
export type IsKingInCheckResponse = {
  chessboard: Chessboard;
  isKingInCheck: boolean;
};
