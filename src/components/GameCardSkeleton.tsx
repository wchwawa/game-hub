import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
	return (
		<Card>
			<Skeleton height="250px" borderRadius={10} />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
