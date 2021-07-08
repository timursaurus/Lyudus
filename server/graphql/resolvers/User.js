function allUsers(parent, args, context, info) {
    return prisma.user.findMany()
}

async function login() {

}

async function createUser(parent, args, context, info) {
    return prisma.user.create({
        data: {
          email: args.email,
          name: args.name,
          username: args.username,
        }
    })
}

module.export = {
    allUsers,
    createUser
}