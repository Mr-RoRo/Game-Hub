import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { ReactNode } from "react";

interface Props {
  searchText: (textSearch: string) => void;
  children: ReactNode;
}

const NavBar = ({ searchText, children }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchBar searchText={searchText} />
      <ColorModeSwitch />
      {children}
    </HStack>
  );
};

export default NavBar;
