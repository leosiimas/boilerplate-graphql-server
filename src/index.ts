import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import type { ListenOptions } from 'net'

import { resolvers } from './graphql/resolvers'
import typeDefs from './graphql/schems'

export const createApolloServer = async (
  listenOptions: ListenOptions = { port: 4000 }
) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  const { url } = await startStandaloneServer(server, { listen: listenOptions })

  return { server, url }
}

export async function startApolloServer() {
  if (process.env.NODE_ENV !== 'test') {
    const { url } = await createApolloServer()
    console.log(`🚀 Query endpoint ready at ${url}`)
  }
}

startApolloServer()
