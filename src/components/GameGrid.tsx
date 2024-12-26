import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { games, errors, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{errors && <Text color="tomato">{errors}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				padding={10}
				spacing={10}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardSkeleton key={skeleton}></GameCardSkeleton>
					))}
				{games.map((game) => (
					<GameCard key={game.id} game={game}></GameCard>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
