import { useEffect, useState } from "react";
import { randomPlayers } from "@/modules/player/helpers";
import type { ApiResponse, PlayerRanked } from "@/modules/player/api";

export const useSavePlayers = (data: ApiResponse | undefined) => {
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
