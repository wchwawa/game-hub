import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface SearchInputProps {
	onSubmit: (value: string) => void;
}

const SearchInput = ({ onSubmit }: SearchInputProps) => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) onSubmit(ref.current.value);
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search games..."
					variant="filled"
				></Input>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
