import { gql } from 'apollo-server-express'

export default gql`

    extend type Query {
        me: User!
        allUsers: [User]!
    }

    extend type Mutation {
        # register(username: String!, email: String!, password: String!): AuthPayload!
        # login(email: String!, password: String!): AuthPayload!
        createUser(email: String!, password: String!, username: String!): User!
    }

    type User {
      id: ID!
      email: String!
      name: String
      username: String!
      password: String!
    }
    
    # type AuthPayload {
    #     token: Token!
    #     user: User!
    # }
`;

