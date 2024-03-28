// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { startGame } from "../../src/isKingInCheck";
import { IsKingInCheckResponse } from "../../src/types";

const feature = loadFeature("./cucumber/features/invoke-api.feature");

defineFeature(feature, (test) => {
  test("Returning the initial chessboard with fixed piece positions", ({
    when,
    then,
    and,
  }) => {
    let response: IsKingInCheckResponse;
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
      expect(response.chessboard[4][0]).toEqual("R");
    });

    and(
      "an attribute is present that indicates if the king is in check or not.",
      () => {
        expect(response.isKingInCheck).toBeDefined();
      }
    );
  });
});
