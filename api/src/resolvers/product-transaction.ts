import { Args, ArgsType, Ctx, Field, Query, Resolver } from 'type-graphql';
import { type Context } from '../client/context.js';

@ArgsType()
export class ProductTransactionCountByProductIdArgs {
  @Field(() => String, { simple: true })
  productId!: string;
}

@Resolver()
export class ProductTransactionResolver {
  /**
   * Get product transaction count by product id.
   *
   * @param {ProductTransactionCountByProductIdArgs} { productId } ProductId.
   * @param {Context} { prisma } Prisma client.
   * @returns {Promise<number>} Product count for productId.
   */
  @Query(() => String, { nullable: true })
  async productTransactionCountByProductId(
    @Args(() => ProductTransactionCountByProductIdArgs)
    { productId }: ProductTransactionCountByProductIdArgs,
    @Ctx() { prisma }: Context
  ): Promise<number> {
    const count = await prisma.productTransaction.count({
      where: {
        productId: productId,
      },
    });

    return count;
  }
}
