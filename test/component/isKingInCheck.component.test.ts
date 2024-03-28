import { isKingInCheck } from "../../src/isKingInCheck";
import {
  emptyChessboardStub,
  filledChessboardStub,
  kingInSameColumnAsRookChessboardStub,
  kingInSameRowAsRookChessboardStub,
} from "../stubs/chessboard";

describe("These are tests for components of the isKingInCheck game", () => {
  describe("Now, we want to check if the king is in check", () => {
    it("With an empty chessboard, the king is not in check", () => {
      const chessboard = emptyChessboardStub;
      expect(isKingInCheck(chessboard)).toBeFalsy();
    });
    it("When the king is in the same row as the rook, the king is in check", () => {
      const chessboard = kingInSameRowAsRookChessboardStub;
      expect(isKingInCheck(chessboard)).toBeTruthy();
    });
    it("When the king is in the same column as the rook, the king is in check", () => {
      const chessboard = kingInSameColumnAsRookChessboardStub;
      expect(isKingInCheck(chessboard)).toBeTruthy();
    });
    it("When the king is in a different row and column as the rook, the king is not in check", () => {
      const chessboard = filledChessboardStub;
      expect(isKingInCheck(chessboard)).toBeFalsy();
    });
  });
});
