import { Game } from "../model/game";
import useData from "./useData";

const useGames = () => useData<Game>('/games')

export default useGames;