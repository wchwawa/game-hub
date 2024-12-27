import { Game, Platform } from "../model/game";
import useData from "./useData";
import { Genre } from "./useGenre";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      }
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;