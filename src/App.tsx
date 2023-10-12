import { useState } from 'react'
import { useQuery } from '@apollo/client'

import INFO_FILM, { FilmArguments, FilmInformation } from './services/films'

import './App.css'

function App() {
  const [filmId, setFilmId] = useState<number>(1)

  const { loading, error, data } = useQuery<
    FilmInformation,
    FilmArguments
  >(INFO_FILM, {
    variables: { filmId },
  })

  const options = Array.from({length: 6}, (_, i) => i + 1)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>an error occurred...</p>
  }

  return (
    <>
        {options.map(option => (
          <div onClick={() => setFilmId(option)}>{option}</div>
        ))}
      {data?.film.title}
      <br />
      {data?.film.releaseDate}
    </>
  )
}

export default App
