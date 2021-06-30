import { gql } from 'apollo-server-express'

export default gql`
  type Topic {
    id: ID!
    name: String!
  }
`
