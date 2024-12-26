import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	const color =
		score >= 90
			? "blue.400"
			: score >= 80
			? "green.500"
			: score >= 60
			? "yellow.500"
			: "red.500";
	return (
		<Badge fontSize={14} paddingX={2} borderRadius={4} color={color}>
			{score}
		</Badge>
	);
};

export default CriticScore;
