import { useEffect, useState } from "react";
import { Game } from "../model/game";
import GameResponse from "../model/gameResponse";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";
import exp from "constants";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
	const [errors, setErrors] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		const fetchGames = async () => {
			try {
				const response = await apiClient.get<GameResponse>("/games");
				setGames(response.data.results);
				setIsLoading(true);
			} catch (e) {
				if (e instanceof CanceledError) return;
				setErrors((e as AxiosError).message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchGames();
		return () => controller.abort();
	}, []);

	return { games, errors, isLoading };
}

export default useGames;