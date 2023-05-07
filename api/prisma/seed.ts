import { seed } from '@ngneat/falso';
import { PrismaClient } from '@prisma/client';
import { customers } from './data/customers.js';
import { departments } from './data/departments.js';
import { employees } from './data/employees.js';
import { inventories } from './data/inventories.js';
import { productSales } from './data/product-sales.js';
import { products } from './data/products.js';
import { roles } from './data/roles.js';
import { sizes } from './data/sizes.js';
import { users } from './data/users.js';

const prisma = new PrismaClient();

/**
 * Set a seed constant to ensure the same data is always loaded.
 *
 * https://ngneat.github.io/falso/docs/getting-started#setting-a-randomness-seed
 */
seed('some-constant-seed');

console.log('Loading data...');

const load = async () => {
  await prisma.$connect();

  for (let i = 0, len = departments.length; i < len; i++) {
    await prisma.department.create({
      data: departments[i],
    });
  }

  for (let i = 0, len = customers.length; i < len; i++) {
    await prisma.customer.create({
      data: customers[i],
    });
  }

  for (let i = 0, len = sizes.length; i < len; i++) {
    await prisma.size.create({
      data: sizes[i],
    });
  }

  for (let i = 0, len = products.length; i < len; i++) {
    await prisma.product.create({
      data: products[i],
    });
  }

  for (let i = 0, len = inventories.length; i < len; i++) {
    await prisma.inventory.create({
      data: inventories[i],
    });
  }

  for (let i = 0, len = productSales.length; i < len; i++) {
    await prisma.productSale.create({
      data: productSales[i],
    });
  }

  for (let i = 0, len = employees.length; i < len; i++) {
    await prisma.employee.create({
      data: employees[i],
    });
  }

  for (let i = 0, len = roles.length; i < len; i++) {
    await prisma.role.create({
      data: roles[i],
    });
  }

  for (let i = 0, len = users.length; i < len; i++) {
    await prisma.user.create({
      data: users[i],
    });
  }
};

load()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
