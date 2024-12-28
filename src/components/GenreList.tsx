import {
	Button,
	Collapse,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
	onSelectedGenre: (genre: Genre | null) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
	const { data, isLoading, errors } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
	const [isExpanded, setIsExpanded] = useState(false);

	if (errors) return null;

	const initialItems = data?.slice(0, 8) || [];
	const expandedItems = data?.slice(10) || [];

	return (
		<>
			<Heading fontSize="2xl" marginBottom={3} marginLeft={1} marginTop={4}>
				Genres
			</Heading>
			<List>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GenreListSkeleton key={skeleton}></GenreListSkeleton>
					))}

				{initialItems.map((genre) => (
					<ListItem padding={1} key={genre.id} overflow="hidden">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								onClick={() => onSelectedGenre(genre)}
								fontSize="lg"
								variant="link"
								size="sm"
								width="150px"
								justifyContent="flex-start"
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}

				<Collapse in={isExpanded} animateOpacity startingHeight={0}>
					{expandedItems.map((genre) => (
						<ListItem padding={1} key={genre.id} overflow="hidden">
							<HStack>
								<Image
									boxSize="32px"
									borderRadius={8}
									objectFit="cover"
									src={getCroppedImageUrl(genre.image_background)}
								/>
								<Button
									whiteSpace="normal"
									textAlign="left"
									fontWeight={
										genre.id === selectedGenre?.id ? "bold" : "normal"
									}
									onClick={() => onSelectedGenre(genre)}
									fontSize="lg"
									variant="link"
									size="sm"
									width="150px"
									justifyContent="flex-start"
								>
									{genre.name}
								</Button>
							</HStack>
						</ListItem>
					))}
				</Collapse>

				{data && data.length > 8 && (
					<Button
						marginTop={2}
						onClick={() => setIsExpanded(!isExpanded)}
						size="sm"
						variant="link"
						color="gray.500"
					>
						{isExpanded ? "show less" : "show more"}
					</Button>
				)}
			</List>
		</>
	);
};

export default GenreList;
