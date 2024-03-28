import { createEmptyChessboard, placeKing } from "../../src/isKingInCheck";
import { Chessboard } from "../../src/types";
import chessboardStub from "../stubs/chessboard";

describe("These are tests for the IsKingInCheck game", () => {
  it("First, we need to create an empty chessboard", () => {
    expect(createEmptyChessboard()).toEqual(chessboardStub);
  });
  describe("Then, we want to put some pieces on the chessboard", () => {
    describe("First, we need to place the king somewhere", () => {
      let chessboard: Chessboard;

      beforeEach(() => {
        chessboard = chessboardStub;
      });

      it("For now, we place the king at E1", () => {
        placeKing(chessboard);

        expect(chessboard[7][4]).toEqual("K");
      });
    });
    describe("Then, we want to place a rook somewhere", () => {
      let chessboard: Chessboard;

      beforeEach(() => {
        chessboard = chessboardStub;
      });

      it("For now, we place a rook at A5", () => {
        placeRook(chessboard);

        expect(chessboard[4][0]).toEqual("R");
      });
    });
  });
});
