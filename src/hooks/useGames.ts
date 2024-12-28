import { GameQuery } from "../App";
import { Game, Platform } from "../model/game";
import useData from "./useData";
import { Genre } from "./useGenre";

const useGames = (
	gameQuery: GameQuery
) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText
      }
    },
    [gameQuery]
  );

export default useGames;