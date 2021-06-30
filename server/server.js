import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
// import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'

const prisma = new PrismaClient()

async function main() {

  const resolvers = {
    Query: {
      me: () => 'ain\'t working yet!',
    },
  }

  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()

  const app = express()
  server.applyMiddleware({ app })

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve))
  console.log(
    `🤞 Server ready and steady at http://localhost:4000${server.graphqlPath}`
  )
  return { server, app }
}

main()
  .catch((err) => {
    throw err
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
