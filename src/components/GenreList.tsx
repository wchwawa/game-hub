import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
	onSelectedGenre: (genre: Genre | null) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
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
							src={getCroppedImageUrl(genre.image_background)}
						></Image>
						<Button
							onClick={() => onSelectedGenre(genre)}
							fontSize="lg"
							variant="link"
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
