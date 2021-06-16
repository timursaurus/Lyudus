
import * as bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'

module.export = {
    Query: {
        
    },
    Mutation: {
        Signup: async (req, { email, password }) => {
            const hashpass = await bcrypt.hash(password, 10)
            await User.create({
                email,
                hashpass
            })
        },
        Signin: async (req, { email, username, password } ) => {
            const user = await User.findOne({ where: { email } })
        }
    }
}