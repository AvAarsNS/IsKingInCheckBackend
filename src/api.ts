import express, { Request, Response } from "express";
import { startGame } from "./isKingInCheck";

// Create a new express application instance
const app: express.Application = express();

app.use(express.json());

// Define the POST endpoint
app.get(
  "/mcoen93ns/IsKingInCheck/1.0.0/game",
  (req: Request, res: Response) => {
    res.json(startGame());
  }
);

// The server is listening on port 3000
app.listen(5000, () => {
  console.log("App is listening on port 5000!");
});
