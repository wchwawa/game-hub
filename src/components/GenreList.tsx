import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
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

	if (errors) return null;
	return (
		<List>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GenreListSkeleton key={skeleton}></GenreListSkeleton>
				))}

			{data.map((genre) => (
				<ListItem padding={1} key={genre.id}>
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
							fontSize="sm"
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
		</List>
	);
};

export default GenreList;
