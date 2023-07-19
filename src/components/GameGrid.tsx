import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkelet from "./CardSkelet";
import BoxCards from "./BoxCards";
import { GameQuary } from "../App";

interface Props {
  gameQuary: GameQuary;
}

const GameGrid = ({ gameQuary }: Props) => {
  const { datas, error, isLoading } = useGames(gameQuary);
  const skeleton = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
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
  );
};
export default GameGrid;
