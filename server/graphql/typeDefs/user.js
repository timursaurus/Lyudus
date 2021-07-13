import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    allUsers: [User]!
  }

  extend type Mutation {
    register(email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }

  type User {
    id: ID!
    email: String!
    name: String
    username: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`
