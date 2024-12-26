import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Button color={"blue.400"} bgColor={"Highlight"}>
				hi
			</Button>
		</div>
	);
}

export default App;
