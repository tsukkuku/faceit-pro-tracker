import { afterEach, describe, expect, test, vi } from "vitest";
import type { ApiResponse, PlayerRanked } from "@/modules/player/api";
import { renderHook } from "@testing-library/react";
import { useSavePlayers } from "./useSavePlayers";
import { randomPlayers } from "@/modules/player/helpers";

vi.mock("@/modules/player/helpers", () => ({
  randomPlayers: vi.fn().mockImplementation((items) => items),
}));

const mockReturnValue: PlayerRanked[] = [
  {
    nickname: "lilpeepfan-",
    player_id: "1ace868a-d60c-46b8-a61e-f51d40d0305b",
    position: 25,
  },
];

const mockData: ApiResponse = {
  items: mockReturnValue,
};

describe("useSavePlayers hook tests", () => {
  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });
  test("undefined players", () => {
    const { result } = renderHook(() => useSavePlayers(undefined));

    expect(result.current).toEqual([]);
    expect(randomPlayers).not.toBeCalled();
    expect(localStorage.getItem("savedPlayers")).toBeNull();
  });
  test("dont saved players variant", () => {
    const { result } = renderHook(() => useSavePlayers(mockData));
    expect(randomPlayers).toBeCalledWith(mockData.items);
    expect(randomPlayers).toBeCalledTimes(1);
    expect(result.current).toEqual(mockReturnValue);
  });
  test("save players", () => {
    localStorage.setItem("savedPlayers", JSON.stringify(mockReturnValue));
    const { result } = renderHook(() => useSavePlayers(mockData));

    const savedPlayers = localStorage.getItem("savedPlayers");

    expect(randomPlayers).not.toHaveBeenCalled();
    expect(result.current).toEqual(JSON.parse(savedPlayers!));
  });
});
