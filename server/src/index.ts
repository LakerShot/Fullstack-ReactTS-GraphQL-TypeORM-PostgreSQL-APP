import 'dotenv/config'
import "reflect-metadata"
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/UserResolver'
import { createConnection } from 'typeorm'
import cookieParser from 'cookie-parser'
import { verify } from 'jsonwebtoken'
import { User } from './entity/User'
import cors from 'cors'
import { geterateAccessToken, geterateRefreshToken, sendRefreshToken } from './helpers/authJwtToken'
import { ProductResolver } from './resolvers/ProductResolver'

(async () => {
    const PORT = process.env.PORT || 1000
    const app = express()

    app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true
    }))
    app.use(cookieParser())

    app.post("/rfsh_token", async (req, res) => {
        const refreshfToken = req.cookies.rftknid

        if (!refreshfToken) return res.send({ ok: false, accessToken: "" })

        let payload: any = null
        try {
          payload = verify(refreshfToken, process.env.REFRESH_TOKEN_SECRET!)
        } catch (err) {
          console.log(err)
          return res.send({ ok: false, accessToken: "" })
        }

        const user = await User.findOne({ id: payload.userId })

        if (!user) return res.send({ ok: false, accessToken: "" })


        if (user.tokenVersion !== payload.tokenVersion) {
          return res.send({ ok: false, accessToken: "" })
        }

        sendRefreshToken(res, geterateRefreshToken(user))

        return res.send({ ok: true, accessToken: geterateAccessToken(user) })
      })

    await createConnection()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver, ProductResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    })

    apolloServer.applyMiddleware({ app, cors: false })

    app.listen(PORT, ()=> console.log(`Express has been running on port ${PORT}`))
})()

