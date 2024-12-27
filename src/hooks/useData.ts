import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";

interface Response<T>{
  count: number;
  results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
	const [errors, setErrors] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await apiClient.get<Response<T>>(endpoint, {signal: controller.signal, ...requestConfig});
				setData(response.data.results);
				setIsLoading(false);
			} catch (e) {
				if (e instanceof CanceledError) {
					setIsLoading(false);
					return;
				}
				setErrors((e as AxiosError).message);
				setIsLoading(false);
			}
		};

		fetchData();
		return () => controller.abort();
	}, deps ? [...deps]: []);

	return { data, errors, isLoading };

}

export default useData;