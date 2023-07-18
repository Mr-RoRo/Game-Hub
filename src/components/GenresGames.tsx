import React from 'react'
import useGenres from '../hooks/useGenres'

const GenresGames = () => {
    const {datas , error , isLoading} = useGenres()
  return (
    <ul>
        {datas.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenresGames