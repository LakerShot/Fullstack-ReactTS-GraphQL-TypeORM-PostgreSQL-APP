import { User } from "../entity/User"
import { sign } from "jsonwebtoken"
import { Response } from "express"

export const geterateAccessToken = (user: User) => {
  return sign(
    { userId: user.id },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: "15m" }
  )
}

export const geterateRefreshToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET!,
    {expiresIn: "7d"}
  )
}

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("jid", token, {
    httpOnly: true,
    path: "/refresh_token"
  })
}