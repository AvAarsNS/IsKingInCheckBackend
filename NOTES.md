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

- Create a function to check if the king is in check
    - Empty chessboard: false
    - King in same row as the rook: true
        - Create unit tests to check this
    - King in same column as the rook: true
    - King in different row and different column: false