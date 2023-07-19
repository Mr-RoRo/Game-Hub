import React from 'react'
import useGenres from '../hooks/useGenres'
import { List, ListItem , Image, HStack , Text, Spinner} from '@chakra-ui/react'
import imageOpt from '../services/image-url'

const GenresGames = () => {
    const {datas , error , isLoading} = useGenres()
    if (isLoading) return <Spinner />
    if (error) return null
  return (
    <List>
        {datas.map(genre => <ListItem paddingY={1} key={genre.id}>
          <HStack>
          <Image boxSize="42px" borderRadius={8} src={imageOpt(genre.image_background)} />
          <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenresGames