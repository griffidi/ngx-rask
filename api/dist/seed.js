// prisma/seed.ts
import { seed } from "@ngneat/falso";
import { PrismaClient } from "@prisma/client";

// prisma/data/customers.ts
import {
  randCity,
  randEmail,
  randFirstName,
  randLastName,
  randPastDate,
  randPhoneNumber,
  randStateAbbr,
  randStreetAddress,
  randZipCode
} from "@ngneat/falso";
import { nanoid } from "nanoid";

// prisma/data/generators/chance-fn.ts
import { randChanceBoolean } from "@ngneat/falso";
function randChanceFn(options, func) {
  const isNotNull = randChanceBoolean(options);
  return isNotNull ? func(options) : null;
}

// prisma/data/customers.ts
var customers = Array.from({ length: 100 }, () => {
  return {
    id: nanoid(),
    firstName: randFirstName(),
    lastName: randLastName(),
    email: randEmail(),
    phone: randPhoneNumber(),
    streetAddress: randStreetAddress(),
    city: randCity(),
    state: randStateAbbr(),
    zipCode: randZipCode(),
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 }))
  };
});

// prisma/data/departments.ts
import { nanoid as nanoid2 } from "nanoid";
var departments = [
  {
    id: nanoid2(),
    name: "Accounting",
    dateCreated: /* @__PURE__ */ new Date("2021-01-01"),
    dateUpdated: /* @__PURE__ */ new Date("2021-01-02")
  },
  {
    id: nanoid2(),
    name: "Engineering",
    dateCreated: /* @__PURE__ */ new Date("2021-01-01"),
    dateUpdated: null
  },
  {
    id: nanoid2(),
    name: "Back Office",
    dateCreated: /* @__PURE__ */ new Date("2021-01-01"),
    dateUpdated: /* @__PURE__ */ new Date("2021-01-02")
  },
  {
    id: nanoid2(),
    name: "Sales",
    dateCreated: /* @__PURE__ */ new Date("2022-01-01"),
    dateUpdated: /* @__PURE__ */ new Date("2021-01-02")
  },
  {
    id: nanoid2(),
    name: "Marketing",
    dateCreated: /* @__PURE__ */ new Date("2022-01-01"),
    dateUpdated: /* @__PURE__ */ new Date("2021-01-02")
  },
  {
    id: nanoid2(),
    name: "Human Resources",
    dateCreated: /* @__PURE__ */ new Date("2023-01-01"),
    dateUpdated: null
  },
  {
    id: nanoid2(),
    name: "Legal",
    dateCreated: /* @__PURE__ */ new Date("2023-01-01"),
    dateUpdated: null
  },
  {
    id: nanoid2(),
    name: "Information Technology",
    dateCreated: /* @__PURE__ */ new Date("2023-01-01"),
    dateUpdated: null
  }
];

// prisma/data/employees.ts
import {
  randCity as randCity2,
  randEmail as randEmail2,
  randFirstName as randFirstName2,
  randGender,
  randJobTitle,
  randLastName as randLastName2,
  randPastDate as randPastDate2,
  randPhoneNumber as randPhoneNumber2,
  randStateAbbr as randStateAbbr2,
  randStreetAddress as randStreetAddress2,
  randZipCode as randZipCode2
} from "@ngneat/falso";
import { nanoid as nanoid3 } from "nanoid";
var departmentLength = departments.length;
function randDepartmentIdCustom() {
  const randomIndex = Math.floor(Math.random() * departmentLength);
  return departments[randomIndex].id;
}
var employees = Array.from({ length: 100 }, () => {
  return {
    id: nanoid3(),
    firstName: randFirstName2(),
    lastName: randLastName2(),
    email: randEmail2(),
    gender: randGender(),
    phone: randPhoneNumber2(),
    streetAddress: randStreetAddress2(),
    city: randCity2(),
    state: randStateAbbr2(),
    zipCode: randZipCode2(),
    jobTitle: randJobTitle(),
    departmentId: randDepartmentIdCustom(),
    dateStarted: randPastDate2({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.6 }, () => randPastDate2({ years: 10 }))
  };
});

// prisma/data/inventories.ts
import { randNumber, randPastDate as randPastDate3 } from "@ngneat/falso";
import { nanoid as nanoid5 } from "nanoid";

// prisma/data/sizes.ts
import { nanoid as nanoid4 } from "nanoid";
var SIZE_SMALL_ID = nanoid4(10);
var SIZE_MEDIUM_ID = nanoid4(10);
var SIZE_LARGE_ID = nanoid4(10);
var SIZE_SMALL = "Small";
var SIZE_MEDIUM = "Medium";
var SIZE_LARGE = "Large";
var sizes = [
  {
    id: SIZE_SMALL_ID,
    name: SIZE_SMALL,
    dateCreated: /* @__PURE__ */ new Date("2018-01-01"),
    dateUpdated: /* @__PURE__ */ new Date("2019-01-02")
  },
  {
    id: SIZE_MEDIUM_ID,
    name: SIZE_MEDIUM,
    dateCreated: /* @__PURE__ */ new Date("2018-01-01"),
    dateUpdated: /* @__PURE__ */ new Date("2019-01-02")
  },
  {
    id: SIZE_LARGE_ID,
    name: SIZE_LARGE,
    dateCreated: /* @__PURE__ */ new Date("2018-01-01"),
    dateUpdated: /* @__PURE__ */ new Date("2019-01-02")
  }
];

// prisma/data/inventories.ts
var inventories = [
  {
    id: nanoid5(10),
    productId: "KIIOc" /* tshirt */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "KIIOc" /* tshirt */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "KIIOc" /* tshirt */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "0we-a" /* pants */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "0we-a" /* pants */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "0we-a" /* pants */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "Ge2N3" /* shorts */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "Ge2N3" /* shorts */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "Ge2N3" /* shorts */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "88tOb" /* sweater */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "88tOb" /* sweater */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "88tOb" /* sweater */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "RlV0I" /* hat */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "RlV0I" /* hat */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "RlV0I" /* hat */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "pHD3V" /* hoodie */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "pHD3V" /* hoodie */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  },
  {
    id: nanoid5(10),
    productId: "pHD3V" /* hoodie */,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate3({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate3({ years: 10 }))
  }
];

// prisma/data/product-sales.ts
import { randNumber as randNumber2, randPastDate as randPastDate4 } from "@ngneat/falso";
import { nanoid as nanoid6 } from "nanoid";
var productSales = [
  {
    id: nanoid6(10),
    productId: "KIIOc" /* tshirt */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "KIIOc" /* tshirt */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "KIIOc" /* tshirt */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "0we-a" /* pants */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "0we-a" /* pants */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "0we-a" /* pants */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "Ge2N3" /* shorts */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "Ge2N3" /* shorts */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "Ge2N3" /* shorts */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "88tOb" /* sweater */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "88tOb" /* sweater */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "88tOb" /* sweater */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "RlV0I" /* hat */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "RlV0I" /* hat */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "RlV0I" /* hat */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "pHD3V" /* hoodie */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "pHD3V" /* hoodie */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  },
  {
    id: nanoid6(10),
    productId: "pHD3V" /* hoodie */,
    quantity: randNumber2({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate4({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate4({ years: 10 }))
  }
];

// prisma/data/products.ts
import { randPastDate as randPastDate5 } from "@ngneat/falso";
var products = [
  {
    id: "KIIOc" /* tshirt */,
    name: "T-Shirt",
    dateCreated: randPastDate5({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate5({ years: 10 }))
  },
  {
    id: "0we-a" /* pants */,
    name: "Pants",
    dateCreated: randPastDate5({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate5({ years: 10 }))
  },
  {
    id: "Ge2N3" /* shorts */,
    name: "Shorts",
    dateCreated: randPastDate5({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate5({ years: 10 }))
  },
  {
    id: "88tOb" /* sweater */,
    name: "Sweater",
    dateCreated: randPastDate5({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate5({ years: 10 }))
  },
  {
    id: "RlV0I" /* hat */,
    name: "Hat",
    dateCreated: randPastDate5({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate5({ years: 10 }))
  },
  {
    id: "pHD3V" /* hoodie */,
    name: "Hoodie",
    dateCreated: randPastDate5({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate5({ years: 10 }))
  }
];

// prisma/data/roles.ts
import { nanoid as nanoid7 } from "nanoid";
var ADMIN = "Administrator";
var USER = "User";
var roles = [
  {
    id: nanoid7(),
    name: ADMIN,
    description: "Full access to all resources",
    dateCreated: /* @__PURE__ */ new Date("2018-01-01"),
    dateUpdated: /* @__PURE__ */ new Date("2019-01-02")
  },
  {
    id: nanoid7(),
    name: USER,
    description: "Limited access to resources",
    dateCreated: /* @__PURE__ */ new Date("2018-01-01"),
    dateUpdated: null
  }
];

// prisma/data/users.ts
import {
  randEmail as randEmail3,
  randFirstName as randFirstName3,
  randLastName as randLastName3,
  randNumber as randNumber3,
  randPassword,
  randPastDate as randPastDate6,
  randUserName
} from "@ngneat/falso";
import { nanoid as nanoid8 } from "nanoid";

// src/crypto/hash.ts
import crypto from "node:crypto";
var generateHash = (value) => {
  if (!value) {
    throw new Error("Value is required to generate hash");
  }
  return crypto.createHash("sha256").update(value).digest("hex");
};

// prisma/data/users.ts
var adminRoleId = roles.find((role) => role.name === ADMIN).id;
var userRoleId = roles.find((role) => role.name === USER).id;
var adminUser = {
  id: nanoid8(),
  userName: `admin.user-0000001`,
  password: generateHash("test"),
  email: "dustingriffith@outlook.com",
  firstName: "Admin",
  lastName: "One",
  roleId: adminRoleId,
  dateCreated: randPastDate6({ years: 10 }),
  dateUpdated: /* @__PURE__ */ new Date("2023-01-01")
};
var basicUsers = Array.from({ length: 50 }, () => {
  return {
    id: nanoid8(),
    userName: `${randUserName()}-${randNumber3({ length: 6, min: 2, max: 999999 }).toString().padStart(6, "0")}`,
    password: generateHash(randPassword()),
    email: randEmail3(),
    firstName: randFirstName3(),
    lastName: randLastName3(),
    roleId: userRoleId,
    dateCreated: randPastDate6({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.6 }, () => randPastDate6({ years: 10 }))
  };
});
var users = [
  adminUser,
  ...basicUsers
];

// prisma/seed.ts
var prisma = new PrismaClient();
seed("some-constant-seed");
console.log("Loading data...");
var load = async () => {
  await prisma.$connect();
  for (let i = 0, len = departments.length; i < len; i++) {
    await prisma.department.create({
      data: departments[i]
    });
  }
  for (let i = 0, len = customers.length; i < len; i++) {
    await prisma.customer.create({
      data: customers[i]
    });
  }
  for (let i = 0, len = sizes.length; i < len; i++) {
    await prisma.size.create({
      data: sizes[i]
    });
  }
  for (let i = 0, len = products.length; i < len; i++) {
    await prisma.product.create({
      data: products[i]
    });
  }
  for (let i = 0, len = inventories.length; i < len; i++) {
    await prisma.inventory.create({
      data: inventories[i]
    });
  }
  for (let i = 0, len = productSales.length; i < len; i++) {
    await prisma.productSale.create({
      data: productSales[i]
    });
  }
  for (let i = 0, len = employees.length; i < len; i++) {
    await prisma.employee.create({
      data: employees[i]
    });
  }
  for (let i = 0, len = roles.length; i < len; i++) {
    await prisma.role.create({
      data: roles[i]
    });
  }
  for (let i = 0, len = users.length; i < len; i++) {
    await prisma.user.create({
      data: users[i]
    });
  }
};
load().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
