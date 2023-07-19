import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";
import imageOpt from "../services/image-url";
import { Emoji } from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={imageOpt(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={1}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name} <Emoji rating={game.rating_top} /></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
