import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/GameHub Resources/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import GameHeading from './GameHeading'
import { GameQuery } from '../App'
interface Props {
  onSubmit: (searchText: string) => void;
}
const NavBar = ({onSubmit}: Props) => {

  return (
    <HStack justifyContent = 'space-between' padding='10px'>
			<Image src={logo} boxSize="60px"></Image>
			<SearchInput onSubmit={onSubmit}></SearchInput>
			<ColorModeSwitch />
		</HStack>
  )
}

export default NavBar