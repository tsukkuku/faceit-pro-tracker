import { describe, expect, test } from "vitest";
import type { PlayerRanked } from "@/modules/player/api";
import { randomPlayers } from "./randomPlayer";

const mockedValue: PlayerRanked[] = [
  {
    nickname: "player1",
    player_id: "1",
    position: 1,
  },
  {
    nickname: "player2",
    player_id: "2",
    position: 2,
  },
  {
    nickname: "player3",
    player_id: "3",
    position: 3,
  },
  {
    nickname: "player4",
    player_id: "4",
    position: 4,
  },
  {
    nickname: "player5",
    player_id: "5",
    position: 5,
  },
  {
    nickname: "player6",
    player_id: "6",
    position: 6,
  },
];

describe("randomPlayer function tests", () => {
  test("no array", () => {
    const result = randomPlayers([]);

    expect(result).toEqual([]);
  });
  test("0 count", () => {
    const result = randomPlayers(mockedValue, 0);

    expect(result).toEqual([]);
  });
  test("return 5 players", () => {
    const result = randomPlayers(mockedValue);

    result.map((player) => {
      expect(mockedValue).toContainEqual(player);
    });
  });
});
