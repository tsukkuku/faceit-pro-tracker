import { expect, test } from "vitest";
import type { PlayerLastMatches } from "@/modules/player/api";
import { renderHook } from "@testing-library/react";
import { useGetLastMatchesStats } from "./useGetLastMatchesStats";

const mockedValue: PlayerLastMatches = {
  items: [
    {
      stats: {
        Kills: "25",
        "K/D Ratio": "1.65",
        "K/R Ratio": "1.01",
        ADR: "105",
        "Headshots %": "43",
        Result: "1",
      },
    },
    {
      stats: {
        Kills: "25",
        "K/D Ratio": "1.65",
        "K/R Ratio": "1.01",
        ADR: "105",
        "Headshots %": "43",
        Result: "0",
      },
    },
  ],
};

test("useGetLastMatchesStats hook test", () => {
  const { result } = renderHook(() => useGetLastMatchesStats(mockedValue));

  expect(result.current.kills).toBe(25);
  expect(result.current.ADR).toBe("105.00");
  expect(result.current.KD).toBe("1.65");
  expect(result.current.KR).toBe("1.01");
  expect(result.current.headshots).toBe(43);
  expect(result.current.winRate).toBe("50");
});
