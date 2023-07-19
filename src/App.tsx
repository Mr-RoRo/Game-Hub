import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresGames from "./components/GenresGames";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/useGames";
import SortDropListDown from "./components/SortDropListDown";
import { GameHeading } from "./components/GameHeading";
import DrawerGenresMobile from "./components/DrawerGenresMobile";

export interface GameQuary {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuary, setGameQuary] = useState<GameQuary>({} as GameQuary);
  const genresNode = (
    <GenresGames
      selectedGenres={gameQuary.genre}
      onSelectGenres={(genre) => setGameQuary({ ...gameQuary, genre })}
    />
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "aside" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          searchText={(searchText) =>
            setGameQuary({ ...gameQuary, searchText })
          }
        >
          <Show below="lg">
            <DrawerGenresMobile>
            {genresNode}
            </DrawerGenresMobile>
          </Show>
        </NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={3} paddingY="35px">
          {genresNode}
        </GridItem>
      </Show>
      <GridItem padding={8} area={"main"}>
        <GameHeading gameQuary={gameQuary} />
        <HStack>
          <PlatformList
            selcetedPlatforms={gameQuary.platform}
            onSelectPlatform={(platform) =>
              setGameQuary({ ...gameQuary, platform })
            }
          />
          <SortDropListDown
            sortList={gameQuary.sortOrder}
            onSortList={(sortOrder) =>
              setGameQuary({ ...gameQuary, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuary={gameQuary} />
      </GridItem>
    </Grid>
  );
}

export default App;
