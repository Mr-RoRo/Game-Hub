import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkelet from "./CardSkelet";
import BoxCards from "./BoxCards";
import { Genres } from "../hooks/useGenres";

interface Props {
  selectedGenres: Genres | null;
}

const GameGrid = ({ selectedGenres }: Props) => {
  const { datas, error, isLoading } = useGames(selectedGenres);
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
      >
        {isLoading &&
          skeleton.map((skelet) => (
            <BoxCards key={skelet}>
              <CardSkelet />
            </BoxCards>
          ))}
        {datas.map((game) => (
          <BoxCards key={game.id}>
            <GameCard game={game} />
          </BoxCards>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
