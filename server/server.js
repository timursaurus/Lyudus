const express = require("express")
const { ApolloServer } = require("apollo-server")
const { PrismaClient } = require("@prisma/client")
const { resolvers, typeDefs } = require("./graphql/resolvers")

const prisma = new PrismaClient()

const main = async () => {
    const server = new ApolloServer({
        resolvers,
        typeDefs,
    })
    
    const app = express()
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
