export default {
    Query: {
      allThreads: (parent, args, context, info) => {
        return context.prisma.thread.findMany() 
      },
      allUsers: async (parent, args, context, info) => {
        return context.prisma.user.findMany()
      }
    },
    Mutation: {
      createThread: (parent, args, context, info) => {
        return context.prisma.thread.create({
          data: {
            title: args.title,
            content: args.content,
            author: args.author
          }
        })
      },
      createUser: (parent, args, context, info) => {
        return context.prisma.user.create({
          data: {
            email: args.email,
            name: args.name,
            username: args.username,
          }
        })
      }
    }    
}