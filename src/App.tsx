import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresGames from "./components/GenresGames";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/useGames";

export interface GameQuary {
  genre: Genres | null;
  platform: Platform | null;
}

function App() {
  const [gameQuary, setGameQuary] = useState<GameQuary>({} as GameQuary);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={3} paddingY="35px">
          <GenresGames
            selectedGenres={gameQuary.genre}
            onSelectGenres={(genre) => setGameQuary({ ...gameQuary, genre })}
          />
        </GridItem>
      </Show>
      <GridItem padding={8} area={"main"}>
        <PlatformList
          selcetedPlatforms={gameQuary.platform}
          onSelectPlatform={(platform) =>
            setGameQuary({ ...gameQuary, platform })
          }
        />
        <GameGrid gameQuary={gameQuary} />
      </GridItem>
    </Grid>
  );
}

export default App;
