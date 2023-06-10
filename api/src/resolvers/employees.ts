// import { type Employee } from '@prisma/client';
// import { Args, ArgsType, Ctx, Field, Query, Resolver } from 'type-graphql';
// import { type Context } from '../client/context.js';

// @ArgsType()
// export class GetEmployeesByQueryArgs {
//   @Field(() => String, { simple: true, nullable: true })
//   departmentId?: string;
// }

// @Resolver()
// export class EmployeesResolver {
//   /**
//    * Validate user credentials and return a JWT if valid.
//    *
//    * @param {LoginArgs} { userName, password } Credentials to validate.
//    * @param {Context} { prisma } Prisma client.
//    * @returns {Promise<string>} JWT if valid, null if invalid.
//    */
//   @Query(() => {}, { name: 'employees' })
//   async getEmployeesByQuery(
//     @Args(() => GetEmployeesByQueryArgs) { departmentId }: GetEmployeesByQueryArgs,
//     @Ctx() { prisma }: Context
//   ): Promise<Employee[]> {
//     let where: {
//       departmentId?: string;
//     } = {};

//     if (departmentId) {
//       where['departmentId'] = departmentId;
//     }

//     const employees = await prisma.employee.findMany({ where });

//     return employees;
//   }
// }
