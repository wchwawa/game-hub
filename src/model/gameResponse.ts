import Game from "./game";

export default interface GameResponse {
	count: number;
	results: Game[];
}