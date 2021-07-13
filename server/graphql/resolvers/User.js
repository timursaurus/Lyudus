import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getUserId } from '../auth'
const JWT_SECRET = process.env.JWT_SECRET

export default {
  Query: {
    allUsers: async (parent, args, context, info) => {
      return context.prisma.user.findMany()
    },
  },
  Mutation: {
    register: async (parent, args, context, info) => {
      const password = await bcrypt.hash(args.password, 10)
      const user = context.prisma.user.create({
        data: {
          ...args,
          password,
        },
      })
      const token = jwt.sign({ userId: user.id }, JWT_SECRET)
      return {
        user,
        token,
      }
    },
    login: async (parent, args, context, info) => {
      const user = await context.prisma.user.findUnique({
        where: { email: args.email },
      })
      if (!user) {
        throw new Error('Такого пользователя не существует')
      }
      const valid = await bcrypt.compare(args.password, user.password)
      if (!valid) {
        throw new Error('Неверная почта или пароль')
      }
    },
  },
}
