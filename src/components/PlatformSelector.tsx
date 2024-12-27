import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../model/game";
import usePlatforms from "../hooks/usePlatforms";
import { platform } from "os";

interface Props {
	onSelectedPlatform: (selectedPlatform: Platform | null) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
	const { data, isLoading, errors } = usePlatforms();
	if (isLoading) return null;
	if (!data) return null;
	return (
		<Menu>
			<MenuButton marginX={2} as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "All"}
			</MenuButton>

			<MenuList overflow="scroll" boxSize="200px">
				<MenuItem onClick={() => onSelectedPlatform(null)}> All</MenuItem>
				{data.map((platform: Platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectedPlatform(platform)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
