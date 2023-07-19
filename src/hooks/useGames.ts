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

const useGames = (
  selectedGenres: Genres | null,
  selectedPlatforms: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenres?.id, platforms: selectedPlatforms?.id } },
    [selectedGenres?.id,selectedPlatforms?.id]
  );

export default useGames;
