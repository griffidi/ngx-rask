import { GraphQLError } from 'graphql';
import jwt, { type Secret } from 'jsonwebtoken';
import { Args, ArgsType, Ctx, Field, Mutation, Resolver } from 'type-graphql';
import config from '../app.config.js';
import { type Context } from '../client/context.js';
import { compareHash } from '../crypto/hash.js';

@ArgsType()
export class LoginArgs {
  @Field(() => String, { simple: true })
  userName!: string;

  @Field(() => String, { simple: true })
  password!: string;
}

@Resolver()
export class LoginResolver {
  /**
   * Validate user credentials and return a JWT if valid.
   *
   * @param {LoginArgs} { userName, password } Credentials to validate.
   * @param {Context} { prisma } Prisma client.
   * @returns {Promise<string>} JWT if valid, null if invalid.
   */
  @Mutation(() => String, { nullable: true })
  async login(
    @Args(() => LoginArgs) { userName, password }: LoginArgs,
    @Ctx() { prisma }: Context
  ): Promise<string | null> {
    const user = await prisma.user.findFirst({
      where: {
        userName: userName,
      },
      select: {
        password: true,
      },
    });

    if (!user) {
      throw new GraphQLError('User not found', {
        extensions: { code: 'NOT_FOUND' },
      });
    }

    // validate password against stored hash
    const hashPassword = user.password;
    const isValid = compareHash(password, hashPassword);

    if (isValid) {
      // credentials are valid, so return a JWT
      const token = jwt.sign({ userName }, config.jwtSecret as Secret, { expiresIn: '1h' });
      return token;
    }

    return null;
  }
}
