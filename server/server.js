import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

const prisma = new PrismaClient()

async function main() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      return {
        prisma,
      }
    },
  })
  await server.start()

  const app = express()
  app.use(cors())
  server.applyMiddleware({ app })

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve))
  console.log(
    `🤞 Server ready and steady at http://localhost:4000${server.graphqlPath} ✅`
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
