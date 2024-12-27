import { Game } from "../model/game";
import useData from "./useData";
import { Genre } from "./useGenre";

const useGames = (genre: Genre | null) => useData<Game>('/games', {params: {genres: genre?.id}}, [genre?.id])

export default useGames;