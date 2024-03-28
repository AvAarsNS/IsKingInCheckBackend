"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = exports.placeRook = exports.placeKing = exports.createEmptyChessboard = void 0;
function createEmptyChessboard() {
    return Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ""));
}
exports.createEmptyChessboard = createEmptyChessboard;
function placeKing(chessboard) {
    chessboard[7][4] = "K";
}
exports.placeKing = placeKing;
function placeRook(chessboard) {
    chessboard[3][0] = "R";
}
exports.placeRook = placeRook;
function startGame() {
    const chessboard = createEmptyChessboard();
    placeKing(chessboard);
    placeRook(chessboard);
    return {
        chessboard,
        isKingInCheck: true,
    };
}
exports.startGame = startGame;
