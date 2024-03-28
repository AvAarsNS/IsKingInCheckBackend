"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isKingInCheck_1 = require("./isKingInCheck");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/mcoen93ns/IsKingInCheck/1.0.0/game", (req, res) => {
    res.json((0, isKingInCheck_1.startGame)());
});
app.listen(5000, () => {
    console.log("App is listening on port 5000!");
});
