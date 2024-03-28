"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = exports.isKingInCheck = exports.isKingInSameColumnAsRook = exports.isKingInSameRowAsRook = exports.extractColumn = exports.lineIncludesKingAndRook = exports.placeRook = exports.placeKing = exports.createEmptyChessboard = void 0;
const getRandomChessIndex_1 = require("./getRandomChessIndex");
function createEmptyChessboard() {
    return Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ""));
}
exports.createEmptyChessboard = createEmptyChessboard;
function placeKing(chessboard) {
    const row = (0, getRandomChessIndex_1.getRandomChessIndex)();
    const column = (0, getRandomChessIndex_1.getRandomChessIndex)();
    chessboard[row][column] = "K";
}
exports.placeKing = placeKing;
function placeRook(chessboard) {
    const row = (0, getRandomChessIndex_1.getRandomChessIndex)();
    const column = (0, getRandomChessIndex_1.getRandomChessIndex)();
    chessboard[row][column] = "R";
}
exports.placeRook = placeRook;
function lineIncludesKingAndRook(line) {
    return line.includes("K") && line.includes("R");
}
exports.lineIncludesKingAndRook = lineIncludesKingAndRook;
function extractColumn(chessboard, column) {
    return chessboard.map((row) => row[column]);
}
exports.extractColumn = extractColumn;
function isKingInSameRowAsRook(chessboard) {
    return chessboard.some((row) => lineIncludesKingAndRook(row));
}
exports.isKingInSameRowAsRook = isKingInSameRowAsRook;
function isKingInSameColumnAsRook(chessboard) {
    for (let index = 0; index < 8; index += 1) {
        const column = extractColumn(chessboard, index);
        if (lineIncludesKingAndRook(column))
            return true;
    }
    return false;
}
exports.isKingInSameColumnAsRook = isKingInSameColumnAsRook;
function isKingInCheck(chessboard) {
    return (isKingInSameColumnAsRook(chessboard) || isKingInSameRowAsRook(chessboard));
}
exports.isKingInCheck = isKingInCheck;
function startGame() {
    const chessboard = createEmptyChessboard();
    placeKing(chessboard);
    placeRook(chessboard);
    return {
        chessboard,
        isKingInCheck: isKingInCheck(chessboard),
    };
}
exports.startGame = startGame;
