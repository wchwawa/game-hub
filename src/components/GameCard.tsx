import { Game } from "../model/game";
import {
	Card,
	CardBody,
	Heading,
	HStack,
	Icon,
	Image,
	Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
  if (!game.parent_platforms) game.parent_platforms = [];
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)}></Image>
			<CardBody>
				<Heading fontSize={"2xl"}>{game.name}</Heading>

				<HStack justifyContent={"space-between"}>
					<PlatformIconList
						platforms={game.parent_platforms?.map((p) => p.platform)}
					></PlatformIconList>
					<CriticScore score={game.metacritic}></CriticScore>
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
