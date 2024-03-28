Feature: Cookiecutter

Scenario: The king is not in check
    Given the randomness generator places the king at E1
    And the randomness generator places a rook at A5
	When the API consumer invokes the IsKingInCheck API
    Then the response contains a chessboard
    And the king is placed at E1
    And the rook is placed at A5
    And an attribute is present that indicates that the king is not in check

Scenario: The king is in check
    Given the randomness generator places the king at B4
    And the randomness generator places a rook at B2
	When the API consumer invokes the IsKingInCheck API
    Then the response contains a chessboard
    And the king is placed at B4
    And the rook is placed at B2
    And an attribute is present that indicates that the king is in check