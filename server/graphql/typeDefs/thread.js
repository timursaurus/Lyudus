import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    getThread(threadID: ID!): Thread!
    getThreads: [Thread]!
  }

  extend type Mutation {
    createThread(
      title: String!
      content: String!
      topic: String!
      author: ID!
    ): CreateThreadResponse!

    removeThread(threadID: ID!): RemoveThreadResponse!

    updateThread(
      threadID: ID!
      title: String!
      content: String!
      topic: String!
      author: ID!
    ): UpdateThreadResponse!
  }

  type CreateThreadResponse {
    ok: Boolean!
    thread: Thread!
    errors: [Error]!
  }
  type RemoveThreadResponse {
    ok: Boolean!
    errors: [Error]!
  }
  type UpdateThreadResponse {
    ok: Boolean!
    errors: [Error]!
  }

  type Thread {
    id: ID!
    author: User!
    title: String!
    content: String!
    topic: [Topic!]!
    created_at: String!
  }
`
