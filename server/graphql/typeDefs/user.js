import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    me: User!
  }

  extend type Mutation {
    register(
      email: String!
      username: String!
      password: String!
      name: String
    ): RegisterResponse!

    login(email: String!, password: String!): LoginResponse!
  }

  type RegisterResponse {
    ok: Boolean!
    user: User
    errors: [Error!]
  }
  type LoginResponse {
    ok: Boolean!
    accessToken: String!
    refreshToken: String!
    errors: [Error!]
  }

  type User {
    id: ID!
    email: String!
    name: String
    password: String!
    username: String!
    signed_up: String!
  }
`
