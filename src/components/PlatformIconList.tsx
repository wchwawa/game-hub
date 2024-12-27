import React from "react";
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../model/game";

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		// name:e.g. ps
		// slug:e.g. ps
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		linux: FaLinux,
		mac: FaApple,
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
	};
	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon
					key={platform.id}
					as={iconMap[platform.slug]}
					color={"gray.400"}
				/>
			))}
		</HStack>
	);
};

export default PlatformIconList;
