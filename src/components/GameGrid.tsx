import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";

interface Game {
	id: number;
	name: string;
}

interface GameResponse {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [errors, setErrors] = useState("");

	useEffect(() => {
		const fetchGames = async () => {
			try {
				const response = await apiClient.get<GameResponse>("/games");
				setGames(response.data.results);
			} catch (e) {
				setErrors((e as AxiosError).message);
			}
		};

		fetchGames();
	}, []);

	return (
		<>
			{errors && <Text color="tomato">{errors}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
