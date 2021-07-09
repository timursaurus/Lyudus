export default {
  Query: {
    allUsers: async (parent, args, context, info) => {
      return context.prisma.user.findMany()
    },
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      return context.prisma.user.create({
        data: {
          email: args.email,
          name: args.name,
          username: args.username,
        },
      })
    },
  },
}
