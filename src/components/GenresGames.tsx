import useGenres, { Genres } from "../hooks/useGenres";
import {
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Button,
  Heading,
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
    <>
    <Heading fontSize="3xl" marginBottom={4}>Genres</Heading>
      <List>
        {datas.map((genre) => (
          <ListItem paddingY={1} key={genre.id}>
            <HStack>
              <Image
                boxSize="42px"
                borderRadius={8}
                objectFit="cover"
                src={imageOpt(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
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
    </>
  );
};

export default GenresGames;
