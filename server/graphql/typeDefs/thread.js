import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    allThreads: [Thread]
  }

  extend type Mutation {
    createThread(title: String!, content: String!): Message!
  }

  type Thread {
    id: Int
    title: String
    content: String
    author: User
  }

  type Message {
    message: String!
  }
`
