import { GameQuary } from "../App";
import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuary: GameQuary) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuary.genre?.id,
        platforms: gameQuary.platform?.id,
      },
    },
    [gameQuary]
  );

export default useGames;
