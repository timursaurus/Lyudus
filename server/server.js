import * as express from "express"
import { ApolloServer } from "apollo-server"
import { PrismaClient } from "@prisma/client"
import { resolvers, typeDefs } from "./graphql/resolvers"

const prisma = new PrismaClient()
const app = express()

const main = async () => {
    const server = new ApolloServer({
        resolvers,
        typeDefs,
    })

    server.applyMiddleware({ app })

    server.listen().then(({ url }) => {
        console.log(`🤞 Server ready at ${url}`)
    })
}

main()
    .catch((err) => {
        throw err
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
