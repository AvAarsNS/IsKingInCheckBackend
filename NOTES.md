# IsKingInCheckBackend

## 🍅 1: The Fellowship of the King
- ✅ Add contract backend
- ✅ Setup E2E test
    - ✅ Include scaffolding of startGame

- Create startGame:
    - ✅ Setup empty chessboard
    - ✅ Place the king on E1
    - Place the rook on A5

## 🍅 2: The Two Towers (joking, it's only one tower)
- ✅ Finish work to place a rook
- ✅ Connect API to startGame
- ✅ Test API via newman

- ✅ Create a function to check if the king is in check
    - ✅ Empty chessboard: false
    - ✅ King in same row as the rook: true
        - ✅ Create unit tests to check this
    - King in same column as the rook: true
    - King in different row and different column: false

## 🍅 3: The Return of the King
- ✅ Continue work on the isKingInCheck function
    - ✅ To check if the king is in the same column, we can create a unit to extract a column
        - ✅ Check different columns of a filled chessboard
    - ✅ Now we expand the isKingInCheck function with this functionality

- ✅ Everything is green, but the isKingInCheck function is a bit too complicated
    - ✅ Extract row and column checks
    - ✅ No need to test these individually, as they came from a refactor.

- ✅ Now, for a sanity check, do the last component test:
    - ✅ King in different row and different column: false

### Actually implement some randomness
- ✅ Create a function to get random integers from 0-7
    - ✅ Check for the boundaries
    - ✅ Put this in a different file for ease of mocking

## 🍅 4: We're taking the hobbits to Isengard!
- ✅ Implement randomness into the place() functions
    - ✅ Include some tests with the mocked function
- ✅ Mock the randomness in the E2E test

- ✅ Fix the E2E test to assert that the king is not in check
- ✅ Create a second E2E test where the king is in check

- ✅ Test E2E with the front end
    - ⛔️ The UI does not correctly show if the king is in check

## 🍅 5:
- Fix project so it builds
- Start new repo with nextJS (including typescript, docker etc)