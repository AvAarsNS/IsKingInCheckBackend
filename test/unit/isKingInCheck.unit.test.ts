import {
  createEmptyChessboard,
  placeKing,
  placeRook,
  rowIncludesKingAndRook,
} from "../../src/isKingInCheck";
import { Chessboard } from "../../src/types";
import { emptyChessboardStub } from "../stubs/chessboard";
import {
  emptyRowStub,
  kingAndRookRowStub,
  kingRowStub,
  rookRowStub,
} from "../stubs/row";

describe("These are tests for the IsKingInCheck game", () => {
  it("First, we need to create an empty chessboard", () => {
    expect(createEmptyChessboard()).toEqual(emptyChessboardStub);
  });
  describe("Then, we want to put some pieces on the chessboard", () => {
    describe("First, we need to place the king somewhere", () => {
      let chessboard: Chessboard;

      beforeEach(() => {
        chessboard = emptyChessboardStub;
      });

      it("For now, we place the king at E1", () => {
        placeKing(chessboard);

        expect(chessboard[7][4]).toEqual("K");
      });
    });
    describe("Then, we want to place a rook somewhere", () => {
      let chessboard: Chessboard;

      beforeEach(() => {
        chessboard = emptyChessboardStub;
      });

      it("For now, we place a rook at A5", () => {
        placeRook(chessboard);

        expect(chessboard[3][0]).toEqual("R");
      });
    });
    describe("Now, we want to check if the king is in check by a rook", () => {
      describe("We first want to check if a king and rook are both in the same row", () => {
        it("Row is empty => false", () => {
          expect(rowIncludesKingAndRook(emptyRowStub)).toBeFalsy();
        });
        it("Row contains just a king => false", () => {
          expect(rowIncludesKingAndRook(kingRowStub)).toBeFalsy();
        });
        it("Row contains just a rook => false", () => {
          expect(rowIncludesKingAndRook(rookRowStub)).toBeFalsy();
        });
        it("Row contains a king and rook => true", () => {
          expect(rowIncludesKingAndRook(kingAndRookRowStub)).toBeTruthy();
        });
      });
    });
  });
});
