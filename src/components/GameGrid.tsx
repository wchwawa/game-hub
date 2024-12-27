import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
	genre: Genre | null;
}

const GameGrid = ({genre}: Props) => {
	const { data, errors, isLoading } = useGames(genre);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<>
			{errors && <Text color="tomato">{errors}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				padding={2}
				spacing={5}
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
