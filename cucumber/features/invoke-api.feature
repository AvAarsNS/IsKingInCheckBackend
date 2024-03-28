Feature: Cookiecutter

Scenario: Returning the initial chessboard with fixed piece positions
	When the API consumer invokes the IsKingInCheck API
    Then the response contains a chessboard
    And the king is placed at E1
    And the rook is placed at A5
    And an attribute is present that indicates if the king is in check or not.