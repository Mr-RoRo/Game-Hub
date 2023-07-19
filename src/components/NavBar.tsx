import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  searchText: (textSearch: string) => void;
}

const NavBar = ({searchText} : Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchBar searchText={searchText}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
