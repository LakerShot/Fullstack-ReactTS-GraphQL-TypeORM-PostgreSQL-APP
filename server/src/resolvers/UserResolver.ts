import { sendRefreshToken } from './../helpers/authJwtToken';
import { MyContext } from './../interfaces';
import { verify } from 'jsonwebtoken';
import { UserisAuth } from '../middleware/authMiddleware';
import { geterateAccessToken, geterateRefreshToken } from '../helpers/authJwtToken';
import { Resolver, Query, Mutation, Arg, ObjectType, Field, Ctx, UseMiddleware, Int } from 'type-graphql'
import { compare, hash } from 'bcryptjs'
import { User } from '../entity/User'
import { getConnection } from 'typeorm';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string
  @Field(() => User)
  user: User
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  @UseMiddleware(UserisAuth)
  test(
    @Ctx() {payload}: MyContext
  ) {
    return `route under jwt your id is ${payload!.userId}`
  }

  @Query(() => User, {nullable: true})
  @UseMiddleware(UserisAuth)
  currentUser(
    @Ctx() ctx: MyContext
  ) {
    const authorization = ctx.req.headers['authorization']
    if (!authorization) return null
    try {
      const token = authorization.split(' ')[1]
      const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!)

      return User.findOne(payload.userId)
    } catch (e) {
      return null
    }
  }

  @Query(() => [User])
  users() {
    return User.find()
  }

  @Mutation(() => Boolean)
  async revokeRefreshTokenForUser(
    @Arg('userId', ()=> Int) userId: number
  ) {
    await getConnection()
      .getRepository(User)
      .increment({id: userId}, 'tokenVersion', 1)

      return true
  }

  @Mutation(() => Boolean)
  async sighUp(
    @Arg('email') email: string,
    @Arg('password') password: string,
  ) {
    try {
      const hashedPassword = await hash(password, 10)

      await User.insert({
        email,
        password: hashedPassword
      })

      return true
      //mean that user is created

    } catch (e) {
      console.log(e)
      return false
      //mean that user is already exist
    }
  }

  @Mutation(() => LoginResponse)
  async signIn(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() {res}: MyContext
  ): Promise<LoginResponse> {

      const user = await User.findOne({ where: { email } })

      if (!user) throw new Error ('invalid login')

      const isvalid = await compare(password, user.password)

      if (!isvalid) throw new Error ('invalid password')

      res.cookie(
        'rftknid',
        geterateRefreshToken(user),
        { httpOnly: true }
      )

      return {
        accessToken: geterateAccessToken(user),
        user
      }
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() {res}: MyContext) {
    sendRefreshToken(res, '')
    return true
  }
}