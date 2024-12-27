import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./model/game";

//query object
export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<div className="App">
			<Grid
				templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				<GridItem area="nav">
					<NavBar></NavBar>
				</GridItem>

				<Show above="lg">
					<GridItem area="aside" paddingX={4}>
						<GenreList
							selectedGenre={gameQuery.genre}
							onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}
						></GenreList>
					</GridItem>
				</Show>

				<GridItem area="main">
					<PlatformSelector
						selectedPlatform={gameQuery.platform}
						onSelectedPlatform={(platform) => setGameQuery({...gameQuery,platform})}
					></PlatformSelector>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
