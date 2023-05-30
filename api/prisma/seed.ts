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
  await prisma.$transaction(
    locationStates.map(locationState =>
      prisma.locationState.create({
        data: locationState,
      })
    )
  );

  console.log('Loading department data...');
  await prisma.$transaction(
    departments.map(department =>
      prisma.department.create({
        data: department,
      })
    )
  );

  console.log('Loading customer data...');
  await prisma.$transaction(
    customers.map(customer =>
      prisma.customer.create({
        data: customer,
      })
    )
  );

  console.log('Loading sizes data...');
  await prisma.$transaction(
    sizes.map(size =>
      prisma.size.create({
        data: size,
      })
    )
  );

  console.log('Loading product data...');
  await prisma.$transaction(
    products.map(product =>
      prisma.product.create({
        data: product,
      })
    )
  );

  console.log('Loading inventory data...');
  await prisma.$transaction(
    inventories.map(inventory =>
      prisma.inventory.create({
        data: inventory,
      })
    )
  );

  console.log('Sorting productTransaction data...');
  const productTransationsSorted = productTransations.sort(
    (a, b) => a.dateCreated.getUTCDate() - b.dateCreated.getUTCDate()
  );

  console.log('Loading productTransaction data...');
  await prisma.$transaction(
    productTransationsSorted.map(productTransaction =>
      prisma.productTransaction.create({
        data: productTransaction,
      })
    )
  );

  console.log('Loading productSale data...');
  await prisma.$transaction(
    productSales.map(productSale =>
      prisma.productSale.create({
        data: productSale,
      })
    )
  );

  console.log('Loading employee data...');
  await prisma.$transaction(
    employees.map(employee =>
      prisma.employee.create({
        data: employee,
      })
    )
  );

  console.log('Loading role data...');
  await prisma.$transaction(
    roles.map(role =>
      prisma.role.create({
        data: role,
      })
    )
  );

  console.log('Loading user data...');
  await prisma.$transaction(
    users.map(user =>
      prisma.user.create({
        data: user,
      })
    )
  );

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
