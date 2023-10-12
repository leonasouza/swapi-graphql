import { gql } from '@apollo/client'

export interface FilmInformation {
  film: {
    title: string
    releaseDate: Date
  }
}

export interface FilmArguments {
  filmId: number
}

const INFO_FILM = gql`
  query Query($filmId: ID!) {
    film(filmID: $filmId) {
      title
      releaseDate
    }
  }
`

export default INFO_FILM
