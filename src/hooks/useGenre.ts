import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

interface GenreResponse{
  count: number;
  results: Genre[]
}

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
	const [errors, setErrors] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		const fetchGames = async () => {
			try {
				const response = await apiClient.get<GenreResponse>("/genres");
				setGenres(response.data.results);
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

	return { genres, errors, isLoading };

}

export default useGenres;