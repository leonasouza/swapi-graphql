import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { describe, it } from 'vitest'
import userEvent from '@testing-library/user-event'

// COMPONENTS
import { Films } from './Films'

// SERVICES
import GET_FILM_BY_ID from '../../services/films'

describe('Films component', () => {
  it('Should render Films component loading state', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Films />
      </MockedProvider>
    )

    expect(await screen.getByText('Loading...')).toBeInTheDocument()
  })

  it("Should render Films component with one film's information", async () => {
    const mocks = [
      {
        request: {
          query: GET_FILM_BY_ID,
          variables: {
            filmId: 4,
          },
        },
        result: {
          data: {
            film: {
              title: 'The Phantom Menace',
              releaseDate: '1999-05-18',
            },
          },
        },
      },
      {
        request: {
          query: GET_FILM_BY_ID,
          variables: {
            filmId: 1,
          },
        },
        result: {
          data: {
            film: {
              title: 'A New Hope',
              releaseDate: '1977-05-24',
            },
          },
        },
      },
    ]

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Films />
      </MockedProvider>
    )

    expect(await screen.findByText('The Phantom Menace')).toBeInTheDocument()
    expect(await screen.findByText('4')).toBeInTheDocument()
    userEvent.click(await screen.findByText('4'))
    expect(await screen.findByText('A New Hope')).toBeInTheDocument()
  })
})
