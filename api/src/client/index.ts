import { PrismaClient } from '@prisma/client';

/**
 * This is a HMR workaround since the module
 * responsible for exporting PrismaClient gets refreshed, which can result
 * in new instances of PrismaClient being created.
 *
 * @see {@link https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prevent-hot-reloading-from-creating-new-instances-of-prismaclient | PrismaClient in long-running applications}
 */
const globalForPrisma = global as unknown as { prisma: PrismaClient };

/**
 * `PrismaClient` singleton.
 */
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env['NODE_ENV'] === 'development') {
  globalForPrisma.prisma = prisma;
}

// export const prisma = new PrismaClient();
