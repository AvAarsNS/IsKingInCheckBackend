import { getRandomChessIndex } from "../../src/getRandomChessIndex";

describe("We want to get a random chess index, so we want to get a random integer", () => {
  it.concurrent.each(Array(10).fill(null))("= 0", () => {
    const number = getRandomChessIndex();
    expect(number).toBeGreaterThanOrEqual(0);
  });
  it.concurrent.each(Array(10).fill(null))("<= 7", () => {
    const number = getRandomChessIndex();
    expect(number).toBeLessThanOrEqual(7);
  });
});
