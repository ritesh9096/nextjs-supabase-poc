import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12
  return await bcrypt.hash(password, saltRounds)
}

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword)
}

export const generateJWT = (userId: string): string => {
  const secret = process.env.JWT_SECRET!
  return jwt.sign({ userId }, secret, { expiresIn: '7d' })
}

export const verifyJWT = (token: string): { userId: string } | null => {
  try {
    const secret = process.env.JWT_SECRET!
    const decoded = jwt.verify(token, secret) as { userId: string }
    return decoded
  } catch {
    return null
  }
} 