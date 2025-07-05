import { useEffect, useState } from "react";
import { randomPlayers } from "../helpers/randomPlayer";
import type { ApiResponse, PlayerRanked } from "../api/types/player.types";

export const useSavePlayers = (data: ApiResponse) => {
  const [players, setPlayers] = useState<PlayerRanked[]>([]);

  useEffect(() => {
    const savedPlayers = localStorage.getItem("savedPlayers");

    if (savedPlayers) {
      setPlayers(JSON.parse(savedPlayers));
    } else if (data?.items) {
      const randomPlayer = randomPlayers(data.items);
      setPlayers(randomPlayer);
      localStorage.setItem("savedPlayers", JSON.stringify(randomPlayer));
    }
  }, [data?.items]);

  useEffect(() => {
    const handleLoad = () => {
      localStorage.removeItem("savedPlayers");
      setPlayers([]);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return players;
};
