import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Switch
				colorScheme="purple"
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
			/>
			<motion.div
				key={colorMode}
				initial={{ opacity: 0, rotate: -180 }}
				animate={{ opacity: 1, rotate: 0 }}
				transition={{ duration: 0.3 }}
			>
				<Icon as={colorMode === "dark" ? BsFillSunFill : BsFillMoonFill} />
			</motion.div>
		</HStack>
	);
};

export default ColorModeSwitch;
