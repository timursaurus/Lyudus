import { gql } from "apollo-server-express"

module.export = gql`
    type Query {
        hello: String
    }
`