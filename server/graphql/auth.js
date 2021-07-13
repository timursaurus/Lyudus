import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET

function getTokenPayload(token) {
  return jwt.verify(token, JWT_SECRET)
}

function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const token = authHeader.replace('Bearer', '')
      if (!token) {
        throw new Error('Токен не найден')
      }
      const { userId } = getTokenPayload(token)
      return userId
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken)
    return userId
  }

  throw new Error('Не авторизован')
}

module.export = {
  JWT_SECRET,
  getUserId,
}
