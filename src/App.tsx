import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Grid
				templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
				templateColumns={{
					base: '1fr',
					lg: '200px 1fr'

				}}
			>
				<GridItem area="nav">
					<NavBar></NavBar>
				</GridItem>

				<Show above="lg">
					<GridItem area="aside" paddingX={4}>
						<GenreList></GenreList>
					</GridItem>
				</Show>

				<GridItem area="main">
					<GameGrid />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
