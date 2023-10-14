import { useState } from 'react'

// HOOKS
import { useQuery } from '@apollo/client'

// SERVICES
import GET_FILM_BY_ID, {
  FilmArguments,
  FilmInformation,
} from '../../services/films'

// STYLES
import * as S from './Films.styles.ts'

export const Films = () => {
  const [filmId, setFilmId] = useState<number>(4)

  const handleSelectFilm = (option: number): void => {
    type sortedOption = { [key: number]: number }
    const sortedOptions: sortedOption = {
      1: 4,
      2: 5,
      3: 6,
      4: 1,
      5: 2,
      6: 3,
    }

    setFilmId(sortedOptions[option])
  }

  const { loading, error, data } = useQuery<FilmInformation, FilmArguments>(
    GET_FILM_BY_ID,
    {
      variables: { filmId },
      fetchPolicy: 'cache-and-network',
    }
  )

  const options = Array.from({ length: 6 }, (_, i) => i + 1)

  if (error) {
    return <p>an error occurred...</p>
  }

  const releaseDate = new Date(data?.film.releaseDate || '')

  return (
    <S.Container>
      <S.Header>Choose a Star Wars film</S.Header>
      <S.Selector>
        {options.map((option) => (
          <S.SelectButton
            key={option}
            onClick={() => handleSelectFilm(option)}
            disabled={option === data?.film.episodeID}
          >
            {option}
          </S.SelectButton>
        ))}
      </S.Selector>

      <S.Film>
        {loading ? (
          <S.Loader>Loading...</S.Loader>
        ) : (
          <>
            <S.FilmTitle>{data?.film.title}</S.FilmTitle>
            <S.FilmDate>{releaseDate.toLocaleDateString()}</S.FilmDate>
            <S.FilmDescription>{data?.film.openingCrawl}</S.FilmDescription>
          </>
        )}
      </S.Film>
    </S.Container>
  )
}
