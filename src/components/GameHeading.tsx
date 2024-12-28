import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
	return (
		<Heading as="h1" marginY={3} marginX={2} fontSize="3xl" whiteSpace="nowrap">
			{gameQuery.platform?.name || ""} {gameQuery.genre?.name || ""} Games
		</Heading>
	);
};

export default GameHeading;
