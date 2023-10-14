import { gql } from '@apollo/client'

export interface FilmInformation {
  film: {
    title: string
    releaseDate: string
    openingCrawl: string
  }
}

export interface FilmArguments {
  filmId: number
}

const GET_FILM_BY_ID = gql`
  query Query($filmId: ID!) {
    film(filmID: $filmId) {
      title
      releaseDate
      openingCrawl
    }
  }
`

export default GET_FILM_BY_ID
