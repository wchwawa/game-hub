import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-released", label: "Released Date" },
		{ value: "-rating", label: "Rating" },
	];

	const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder
	);

	return (
		<Menu>
			<MenuButton marginX={2} as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentSortOrder?.label}
			</MenuButton>

			<MenuList overflow="scroll" boxSize="200px">
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => onSelectSortOrder(order.value)}
						key={order.value}
						value={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
