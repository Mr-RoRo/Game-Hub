import useGenres, { Genres } from "../hooks/useGenres";
import {
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Button,
} from "@chakra-ui/react";
import imageOpt from "../services/image-url";

interface Props {
  onSelectGenres: (genre: Genres) => void;
  selectedGenres: Genres | null;
}

const GenresGames = ({ selectedGenres, onSelectGenres }: Props) => {
  const { datas, error, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {datas.map((genre) => (
        <ListItem paddingY={1} key={genre.id}>
          <HStack>
            <Image
              boxSize="42px"
              borderRadius={8}
              src={imageOpt(genre.image_background)}
            />
            <Button whiteSpace="pre-wrap"
              fontWeight={selectedGenres?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectGenres(genre)}
              variant={"link"}
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresGames;
