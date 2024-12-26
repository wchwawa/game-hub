import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Grid
				templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
			>
				<GridItem area="nav">
					<NavBar></NavBar>
				</GridItem>

				<Show above="lg">
					<GridItem area="aside">
						Aside
					</GridItem>
				</Show>

				<GridItem area="main">
					Main
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
