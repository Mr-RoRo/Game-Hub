import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresGames from "./components/GenresGames";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";


function App() {
  const [selectedGenres , setSelectedGenres] = useState<Genres | null>(null)


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base:"1fr",
        lg:"200px 1fr"
      }}
    >
      <GridItem area={"nav"} >
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={3} paddingY="35px">
          <GenresGames onSelectGenres={(genre) => setSelectedGenres(genre)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenres={selectedGenres} />
      </GridItem>
    </Grid>
  );
}

export default App;
