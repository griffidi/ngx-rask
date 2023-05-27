import { seed } from '@ngneat/falso';
import { PrismaClient } from '@prisma/client';
import { customers } from './data/customers.js';
import { departments } from './data/departments.js';
import { employees } from './data/employees.js';
import { inventories } from './data/inventories.js';
import { locationStates } from './data/location-states.js';
import { productSales } from './data/product-sales.js';
import { productTransations } from './data/product-transactions.js';
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
  const startTime = performance.now();

  await prisma.$connect();

  console.log('Loading locationState data...');
  for (let i = 0, len = locationStates.length; i < len; i++) {
    await prisma.locationState.create({
      data: locationStates[i],
    });
  }

  console.log('Loading department data...');
  for (let i = 0, len = departments.length; i < len; i++) {
    await prisma.department.create({
      data: departments[i],
    });
  }

  console.log('Loading customer data...');
  for (let i = 0, len = customers.length; i < len; i++) {
    await prisma.customer.create({
      data: customers[i],
    });
  }

  console.log('Loading sizes data...');
  for (let i = 0, len = sizes.length; i < len; i++) {
    await prisma.size.create({
      data: sizes[i],
    });
  }

  console.log('Loading product data...');
  for (let i = 0, len = products.length; i < len; i++) {
    await prisma.product.create({
      data: products[i],
    });
  }

  console.log('Loading inventory data...');
  for (let i = 0, len = inventories.length; i < len; i++) {
    await prisma.inventory.create({
      data: inventories[i],
    });
  }

  console.log('Sorting productTransaction data...');
  const productTransationsSorted = productTransations.sort(
    (a, b) => a.dateCreated.getUTCDate() - b.dateCreated.getUTCDate()
  );

  console.log('Loading productTransaction data...');
  for (let i = 0, len = productTransationsSorted.length; i < len; i++) {
    await prisma.productTransaction.create({
      data: productTransationsSorted[i],
    });
  }

  console.log('Loading productSale data...');
  for (let i = 0, len = productSales.length; i < len; i++) {
    await prisma.productSale.create({
      data: productSales[i],
    });
  }

  console.log('Loading employee data...');
  for (let i = 0, len = employees.length; i < len; i++) {
    await prisma.employee.create({
      data: employees[i],
    });
  }

  console.log('Loading role data...');
  for (let i = 0, len = roles.length; i < len; i++) {
    await prisma.role.create({
      data: roles[i],
    });
  }

  console.log('Loading user data...');
  for (let i = 0, len = users.length; i < len; i++) {
    await prisma.user.create({
      data: users[i],
    });
  }

  const endTime = performance.now();
  console.log(`Data loaded in ${(endTime - startTime) * 1000} seconds.`);
};

load()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
