import React from 'react'
import { Game } from '../hooks/useGames'
import { Card , Image , CardBody, Heading , Text, HStack} from '@chakra-ui/react'
import { PlatformIconList } from './PlatformIconList'
import CriticScore from './CriticScore'
import imageOpt from '../services/image-url'

interface Props{
    game: Game
}

const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={imageOpt(game.background_image)} />
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent="space-between">
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard