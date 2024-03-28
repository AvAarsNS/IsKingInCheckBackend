import {
  createEmptyChessboard,
  placeKing,
  placeRook,
  lineIncludesKingAndRook,
  extractColumn,
} from "../../src/isKingInCheck";
import { Chessboard } from "../../src/types";
import * as randomModule from "../../src/getRandomChessIndex";
import { emptyChessboardStub, filledChessboardStub } from "../stubs/chessboard";
import {
  emptyLineStub,
  kingAndRookLineStub,
  kingLineStub,
  rookLineStub,
} from "../stubs/line";

const randomChessIndexMock = jest.spyOn(randomModule, "getRandomChessIndex");

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

      describe("When the random generater tells us to", () => {
        it("We can place a king at E1", () => {
          randomChessIndexMock.mockReturnValueOnce(7);
          randomChessIndexMock.mockReturnValueOnce(4);

          placeKing(chessboard);

          expect(chessboard[7][4]).toEqual("K");
        });
        it("We can place a king at H8", () => {
          randomChessIndexMock.mockReturnValueOnce(0);
          randomChessIndexMock.mockReturnValueOnce(7);
          placeKing(chessboard);

          expect(chessboard[0][7]).toEqual("K");
        });
      });
    });
    describe("Then, we want to place a rook somewhere", () => {
      let chessboard: Chessboard;

      beforeEach(() => {
        chessboard = emptyChessboardStub;
      });

      describe("When the random generater tells us to", () => {
        it("We can place a rook at A5", () => {
          randomChessIndexMock.mockReturnValueOnce(3);
          randomChessIndexMock.mockReturnValueOnce(0);
          placeRook(chessboard);

          expect(chessboard[3][0]).toEqual("R");
        });

        it("We can place a rook at D3", () => {
          randomChessIndexMock.mockReturnValueOnce(5);
          randomChessIndexMock.mockReturnValueOnce(3);
          placeRook(chessboard);

          expect(chessboard[5][3]).toEqual("R");
        });
      });
    });
    describe("Now, we want to check if the king is in check by a rook", () => {
      describe("We want to check if a king and rook are both in the same line", () => {
        it("Row is empty => false", () => {
          expect(lineIncludesKingAndRook(emptyLineStub)).toBeFalsy();
        });
        it("Row contains just a king => false", () => {
          expect(lineIncludesKingAndRook(kingLineStub)).toBeFalsy();
        });
        it("Row contains just a rook => false", () => {
          expect(lineIncludesKingAndRook(rookLineStub)).toBeFalsy();
        });
        it("Row contains a king and rook => true", () => {
          expect(lineIncludesKingAndRook(kingAndRookLineStub)).toBeTruthy();
        });
      });

      describe("We also want to extract columns for a chessboard, to get a usable line", () => {
        describe("When the king is on E1 and the rook is on A5, we should be able to extract", () => {
          const chessboard = filledChessboardStub;

          it("The first column, containing a rook on the 4th cell", () => {
            expect(extractColumn(chessboard, 0)).toEqual(rookLineStub);
          });
          it("The third column, containing nothing", () => {
            expect(extractColumn(chessboard, 2)).toEqual(emptyLineStub);
          });
          it("The fifth column, containing a king, containing a king on the 8th cell", () => {
            expect(extractColumn(chessboard, 4)).toEqual(kingLineStub);
          });
        });
      });
    });
  });
});
