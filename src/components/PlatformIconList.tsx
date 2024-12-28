import React from "react";
import { FaWindows, FaPlaystation, FaXbox, FaDesktop } from "react-icons/fa";
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
		pc: FaDesktop,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		linux: FaDesktop,
		mac: FaDesktop,
		android: MdPhoneIphone,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};

	// handle duplicate icons
	const distinctPlatforms = platforms.filter((platform, index, self) => {
		// mobile
		if (platform.slug === "ios" || platform.slug === "android") {
			const firstMobileIndex = self.findIndex(
				(p) => p.slug === "ios" || p.slug === "android"
			);
			return index === firstMobileIndex;
		}
		// PC
		if (
			platform.slug === "pc" ||
			platform.slug === "linux" ||
			platform.slug === "mac"
		) {
			const firstPCIndex = self.findIndex(
				(p) => p.slug === "pc" || p.slug === "linux" || p.slug === "mac"
			);
			return index === firstPCIndex;
		}
		return true;
	});

	return (
		<HStack marginY={1}>
			{distinctPlatforms.map((platform) => (
				<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
			))}
		</HStack>
	);
};

export default PlatformIconList;
