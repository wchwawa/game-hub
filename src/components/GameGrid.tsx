import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
	const { data, errors, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton></GameCardSkeleton>
						</GameCardContainer>
					))}

				{data.map((game) => (
						<GameCardContainer key={game.id}>
							<GameCard game={game}></GameCard>
						</GameCardContainer>
					))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
