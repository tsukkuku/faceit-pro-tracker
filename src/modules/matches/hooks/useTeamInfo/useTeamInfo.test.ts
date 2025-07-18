import { expect, test } from "vitest";
import { useTeamInfo } from "./useTeamInfo";

const testMockStats: any = {
  rounds: [
    {
      teams: [
        {
          team_id: "team1",
          players: [
            { player_stats: { Kills: "15" } },
            { player_stats: { Kills: "10" } },
          ],
        },
        {
          team_id: "team2",
          players: [
            { player_stats: { Kills: "20" } },
            { player_stats: { Kills: "5" } },
          ],
        },
      ],
    },
  ],
};

test("correctly sort", () => {
  const { faction1, faction2, sortedFirstTeam, sortedSecondTeam } =
    useTeamInfo(testMockStats);

  expect(faction1).toEqual(testMockStats.rounds[0].teams[0]);
  expect(faction2).toEqual(testMockStats.rounds[0].teams[1]);

  expect(sortedFirstTeam[0].player_stats.Kills).toEqual("15");
  expect(sortedFirstTeam[1].player_stats.Kills).toEqual("10");

  expect(sortedSecondTeam[0].player_stats.Kills).toEqual("20");
  expect(sortedSecondTeam[1].player_stats.Kills).toEqual("5");
});
