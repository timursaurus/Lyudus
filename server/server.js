import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
// import resolvers from './graphql/resolvers'
// import typeDefs from './graphql/typeDefs'

const prisma = new PrismaClient()

async function main() {
  const resolvers = {
    Query: {
      allThreads: (parent, args, context, info) => {
        return prisma.thread.findMany() 
      },
      allUsers: (parent, args, context, info) => {
        return prisma.user.findMany()
      }
    },
    Mutation: {
      createThread: (parent, args, context, info) => {
        return prisma.thread.create({
          data: {
            title: args.title,
            content: args.content,
            author: args.author
          }
        })
      },
      createUser: (parent, args, context, info) => {
        return prisma.user.create({
          data: {
            email: args.email,
            name: args.name,
            username: args.username,
          }
        })
      }
    }
    
  }

  const typeDefs = gql`
    type Thread {
      id: Int
      title: String
      content: String
      author: String
    },
    type User {
      id: Int
      email: String
      name: String
      username: String
    }


    type Query {
      allThreads: [Thread]
      allUsers: [User]
    }
    type Mutation {
      createThread(
        title: String! 
        content: String!
        author: String!
      ): Thread
      createUser(
        email: String!
        name: String
        username: String!
      ): User
    }
`

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      return {
        prisma
      }
    }
  })
  await server.start()

  const app = express()
  app.use(cors())
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
