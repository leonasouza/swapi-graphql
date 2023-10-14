import { ApolloClient, InMemoryCache } from '@apollo/client'

// CONSTANTS
import { SWAPI_URL } from '../constants'

const client = new ApolloClient({
  uri: SWAPI_URL,
  cache: new InMemoryCache(),
})

export default client
