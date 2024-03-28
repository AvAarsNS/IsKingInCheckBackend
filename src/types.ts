export type Chessboard = string[][];
export type IsKingInCheckResponse = {
  chessboard: Chessboard;
  isKingInCheck: boolean;
};
