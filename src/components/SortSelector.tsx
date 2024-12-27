import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton marginX={2} as={Button} rightIcon={<BsChevronDown />}>
				Order by: Relevance
			</MenuButton>

			<MenuList overflow="scroll" boxSize="200px">
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Released Date</MenuItem>
				<MenuItem>Rating</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
