import { createUser, allUsers } from '../resolvers/User'

const resolvers = {
    Query: {
        allUsers
    },
    Mutation: {
        createUser
    }
    
}

module.export = resolvers