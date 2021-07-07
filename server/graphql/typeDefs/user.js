import { gql } from 'apollo-server-express'

const schema = gql`
    extend type Mutation {
        register(username: String!, email: String!, password: String!): AuthPayload!
        login(email: String!, password: String!): AuthPayload!
        

    }
    # extend type Query {

    # }
    
    type AuthPayload {
        token: Token!
        user: User!
    }
`