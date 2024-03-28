# User Story Back End

## Title: Creating first version of the IsKingInCheck API

## Description:
As a API consumer, I want to be able to invoke the IsKingInCheck API so that I can get the outcome of a game of 'Is King In Check' in which the king is not in check.

## Acceptance Criteria BE:

    The API should be contain a GET call that returns the outcome of Is King In Check.
    Adheres to the API specification (see: API folder)
    The response should be JSON. 
    And contain the following elements:
    1. The chessboard, which should contain only two pieces: a king and a rook. For now, the positions of the king and the rook are fixed and known (e.g., king at E1, rook at A5).
    2. An attribute that indicates if the king is in check.

## Gherkin Scenario:

### Scenario: Returning the initial chessboard with fixed piece positions

    Given the API consumer is ready to get the outcome of Is King In Check
    When the API consumer invokes the IsKingInCheck API
    Then a valid response will be received
    And the response contains a chessboard
    And the king is placed at E1
    And the rook is placed at A5
    And an attribute is present that indicates if the king is in check or not.