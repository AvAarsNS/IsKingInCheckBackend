// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { startGame } from "../../src/isKingInCheck";
import * as randomModule from "../../src/getRandomChessIndex";
import { IsKingInCheckResponse } from "../../src/types";

const feature = loadFeature("./cucumber/features/invoke-api.feature");

const randomChessIndexMock = jest.spyOn(randomModule, "getRandomChessIndex");

defineFeature(feature, (test) => {
  test("The king is not in check", ({ given, when, then, and }) => {
    let response: IsKingInCheckResponse;

    given("the randomness generator places the king at E1", () => {
      randomChessIndexMock.mockReturnValueOnce(7);
      randomChessIndexMock.mockReturnValueOnce(4);
    });

    and("the randomness generator places a rook at A5", () => {
      randomChessIndexMock.mockReturnValueOnce(3);
      randomChessIndexMock.mockReturnValueOnce(0);
    });

    when("the API consumer invokes the IsKingInCheck API", () => {
      response = startGame();
    });

    then("the response contains a chessboard", () => {
      expect(response.chessboard).toHaveLength(8);
      response.chessboard.forEach((row) => expect(row).toHaveLength(8));
    });

    and("the king is placed at E1", () => {
      expect(response.chessboard[7][4]).toEqual("K");
    });

    and("the rook is placed at A5", () => {
      expect(response.chessboard[3][0]).toEqual("R");
    });

    and(
      "an attribute is present that indicates that the king is not in check",
      () => {
        expect(response.isKingInCheck).toBeFalsy();
      }
    );
  });

  test("The king is in check", ({ given, when, then, and }) => {
    let response: IsKingInCheckResponse;

    given("the randomness generator places the king at B4", () => {
      randomChessIndexMock.mockReturnValueOnce(3);
      randomChessIndexMock.mockReturnValueOnce(1);
    });

    and("the randomness generator places a rook at B2", () => {
      randomChessIndexMock.mockReturnValueOnce(2);
      randomChessIndexMock.mockReturnValueOnce(1);
    });

    when("the API consumer invokes the IsKingInCheck API", () => {
      response = startGame();
    });

    then("the response contains a chessboard", () => {
      expect(response.chessboard).toHaveLength(8);
      response.chessboard.forEach((row) => expect(row).toHaveLength(8));
    });

    and("the king is placed at B4", () => {
      expect(response.chessboard[3][1]).toEqual("K");
    });

    and("the rook is placed at B2", () => {
      expect(response.chessboard[2][1]).toEqual("R");
    });

    and(
      "an attribute is present that indicates that the king is in check",
      () => {
        expect(response.isKingInCheck).toBeTruthy();
      }
    );
  });
});
