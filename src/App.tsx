import { useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./model/game";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

//query object
export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<div className="App">
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					md: `"nav nav" "aside main"`,
					lg: `"nav nav" "aside main"`,
					xl: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					md: "200px 1fr",
					lg: "200px 1fr",
					xl: "200px 1fr",
				}}
			>
				<GridItem area="nav">
					<NavBar
						onSubmit={(searchText) =>
							setGameQuery({ ...gameQuery, searchText })
						}
					></NavBar>
				</GridItem>

				<Show above="md">
					<GridItem area="aside" paddingX={4}>
						<GenreList
							selectedGenre={gameQuery.genre}
							onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						></GenreList>
					</GridItem>
				</Show>

				<GridItem area="main">
					<GameHeading gameQuery={gameQuery} />
					<HStack spacing={0}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectedPlatform={(platform) =>
								setGameQuery({ ...gameQuery, platform })
							}
						></PlatformSelector>
						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						></SortSelector>
					</HStack>

					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
