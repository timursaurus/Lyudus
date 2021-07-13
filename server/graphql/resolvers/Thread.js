export default {
  Query: {
    allThreads: async (parent, args, context, info) => {
      return context.prisma.thread.findMany()
    },
  },
  Mutation: {
    postThread: async (parent, args, context, info) => {
      return context.prisma.thread.create({
        data: {
          title: args.title,
          content: args.content,
        },
      })
    },
  },
}
