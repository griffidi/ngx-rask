import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any };
};

export type AffectedRowsOutput = {
  readonly __typename?: 'AffectedRowsOutput';
  readonly count: Scalars['Int']['output'];
};

export type AggregateCustomer = {
  readonly __typename?: 'AggregateCustomer';
  readonly _count: Maybe<CustomerCountAggregate>;
  readonly _max: Maybe<CustomerMaxAggregate>;
  readonly _min: Maybe<CustomerMinAggregate>;
};

export type AggregateDepartment = {
  readonly __typename?: 'AggregateDepartment';
  readonly _count: Maybe<DepartmentCountAggregate>;
  readonly _max: Maybe<DepartmentMaxAggregate>;
  readonly _min: Maybe<DepartmentMinAggregate>;
};

export type AggregateEmployee = {
  readonly __typename?: 'AggregateEmployee';
  readonly _count: Maybe<EmployeeCountAggregate>;
  readonly _max: Maybe<EmployeeMaxAggregate>;
  readonly _min: Maybe<EmployeeMinAggregate>;
};

export type AggregateInventory = {
  readonly __typename?: 'AggregateInventory';
  readonly _avg: Maybe<InventoryAvgAggregate>;
  readonly _count: Maybe<InventoryCountAggregate>;
  readonly _max: Maybe<InventoryMaxAggregate>;
  readonly _min: Maybe<InventoryMinAggregate>;
  readonly _sum: Maybe<InventorySumAggregate>;
};

export type AggregateLocationState = {
  readonly __typename?: 'AggregateLocationState';
  readonly _count: Maybe<LocationStateCountAggregate>;
  readonly _max: Maybe<LocationStateMaxAggregate>;
  readonly _min: Maybe<LocationStateMinAggregate>;
};

export type AggregateProduct = {
  readonly __typename?: 'AggregateProduct';
  readonly _avg: Maybe<ProductAvgAggregate>;
  readonly _count: Maybe<ProductCountAggregate>;
  readonly _max: Maybe<ProductMaxAggregate>;
  readonly _min: Maybe<ProductMinAggregate>;
  readonly _sum: Maybe<ProductSumAggregate>;
};

export type AggregateProductSale = {
  readonly __typename?: 'AggregateProductSale';
  readonly _avg: Maybe<ProductSaleAvgAggregate>;
  readonly _count: Maybe<ProductSaleCountAggregate>;
  readonly _max: Maybe<ProductSaleMaxAggregate>;
  readonly _min: Maybe<ProductSaleMinAggregate>;
  readonly _sum: Maybe<ProductSaleSumAggregate>;
};

export type AggregateProductTransaction = {
  readonly __typename?: 'AggregateProductTransaction';
  readonly _avg: Maybe<ProductTransactionAvgAggregate>;
  readonly _count: Maybe<ProductTransactionCountAggregate>;
  readonly _max: Maybe<ProductTransactionMaxAggregate>;
  readonly _min: Maybe<ProductTransactionMinAggregate>;
  readonly _sum: Maybe<ProductTransactionSumAggregate>;
};

export type AggregateRole = {
  readonly __typename?: 'AggregateRole';
  readonly _count: Maybe<RoleCountAggregate>;
  readonly _max: Maybe<RoleMaxAggregate>;
  readonly _min: Maybe<RoleMinAggregate>;
};

export type AggregateSize = {
  readonly __typename?: 'AggregateSize';
  readonly _count: Maybe<SizeCountAggregate>;
  readonly _max: Maybe<SizeMaxAggregate>;
  readonly _min: Maybe<SizeMinAggregate>;
};

export type AggregateUser = {
  readonly __typename?: 'AggregateUser';
  readonly _count: Maybe<UserCountAggregate>;
  readonly _max: Maybe<UserMaxAggregate>;
  readonly _min: Maybe<UserMinAggregate>;
};

export type Customer = {
  readonly __typename?: 'Customer';
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly locationState: Maybe<LocationState>;
  readonly phone: Scalars['String']['output'];
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zipCode: Scalars['String']['output'];
};

export type CustomerCountAggregate = {
  readonly __typename?: 'CustomerCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly city: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly email: Scalars['Int']['output'];
  readonly firstName: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly lastName: Scalars['Int']['output'];
  readonly phone: Scalars['Int']['output'];
  readonly stateId: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly zipCode: Scalars['Int']['output'];
};

export type CustomerCountOrderByAggregateInput = {
  readonly city: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export type CustomerCreateInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly locationState: InputMaybe<LocationStateCreateNestedOneWithoutCustomersInput>;
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zipCode: Scalars['String']['input'];
};

export type CustomerCreateNestedManyWithoutLocationStateInput = {
  readonly connect: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<CustomerCreateOrConnectWithoutLocationStateInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<CustomerCreateWithoutLocationStateInput>>;
};

export type CustomerCreateOrConnectWithoutLocationStateInput = {
  readonly create: CustomerCreateWithoutLocationStateInput;
  readonly where: CustomerWhereUniqueInput;
};

export type CustomerCreateWithoutLocationStateInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zipCode: Scalars['String']['input'];
};

export type CustomerGroupBy = {
  readonly __typename?: 'CustomerGroupBy';
  readonly _count: Maybe<CustomerCountAggregate>;
  readonly _max: Maybe<CustomerMaxAggregate>;
  readonly _min: Maybe<CustomerMinAggregate>;
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zipCode: Scalars['String']['output'];
};

export type CustomerListRelationFilter = {
  readonly every: InputMaybe<CustomerWhereInput>;
  readonly none: InputMaybe<CustomerWhereInput>;
  readonly some: InputMaybe<CustomerWhereInput>;
};

export type CustomerMaxAggregate = {
  readonly __typename?: 'CustomerMaxAggregate';
  readonly city: Maybe<Scalars['String']['output']>;
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly firstName: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly lastName: Maybe<Scalars['String']['output']>;
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly stateId: Maybe<Scalars['String']['output']>;
  readonly streetAddress: Maybe<Scalars['String']['output']>;
  readonly zipCode: Maybe<Scalars['String']['output']>;
};

export type CustomerMaxOrderByAggregateInput = {
  readonly city: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export type CustomerMinAggregate = {
  readonly __typename?: 'CustomerMinAggregate';
  readonly city: Maybe<Scalars['String']['output']>;
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly firstName: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly lastName: Maybe<Scalars['String']['output']>;
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly stateId: Maybe<Scalars['String']['output']>;
  readonly streetAddress: Maybe<Scalars['String']['output']>;
  readonly zipCode: Maybe<Scalars['String']['output']>;
};

export type CustomerMinOrderByAggregateInput = {
  readonly city: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export type CustomerOrderByRelationAggregateInput = {
  readonly _count: InputMaybe<SortOrder>;
};

export type CustomerOrderByWithAggregationInput = {
  readonly _count: InputMaybe<CustomerCountOrderByAggregateInput>;
  readonly _max: InputMaybe<CustomerMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<CustomerMinOrderByAggregateInput>;
  readonly city: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export type CustomerOrderByWithRelationInput = {
  readonly city: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly locationState: InputMaybe<LocationStateOrderByWithRelationInput>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export enum CustomerScalarFieldEnum {
  City = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Email = 3,
  FirstName = 4,
  Id = 5,
  LastName = 6,
  Phone = 7,
  StateId = 8,
  StreetAddress = 9,
  ZipCode = 10,
}

export type CustomerScalarWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly city: InputMaybe<StringFilter>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly email: InputMaybe<StringFilter>;
  readonly firstName: InputMaybe<StringFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly lastName: InputMaybe<StringFilter>;
  readonly phone: InputMaybe<StringFilter>;
  readonly stateId: InputMaybe<StringFilter>;
  readonly streetAddress: InputMaybe<StringFilter>;
  readonly zipCode: InputMaybe<StringFilter>;
};

export type CustomerScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<CustomerScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<CustomerScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<CustomerScalarWhereWithAggregatesInput>>;
  readonly city: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly email: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName: InputMaybe<StringWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName: InputMaybe<StringWithAggregatesFilter>;
  readonly phone: InputMaybe<StringWithAggregatesFilter>;
  readonly stateId: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress: InputMaybe<StringWithAggregatesFilter>;
  readonly zipCode: InputMaybe<StringWithAggregatesFilter>;
};

export type CustomerUpdateInput = {
  readonly city: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly locationState: InputMaybe<LocationStateUpdateOneWithoutCustomersNestedInput>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress: InputMaybe<Scalars['String']['input']>;
  readonly zipCode: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpdateManyMutationInput = {
  readonly city: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress: InputMaybe<Scalars['String']['input']>;
  readonly zipCode: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpdateManyWithWhereWithoutLocationStateInput = {
  readonly data: CustomerUpdateManyMutationInput;
  readonly where: CustomerScalarWhereInput;
};

export type CustomerUpdateManyWithoutLocationStateNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<CustomerCreateOrConnectWithoutLocationStateInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<CustomerCreateWithoutLocationStateInput>>;
  readonly delete: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly update: InputMaybe<
    ReadonlyArray<CustomerUpdateWithWhereUniqueWithoutLocationStateInput>
  >;
  readonly updateMany: InputMaybe<
    ReadonlyArray<CustomerUpdateManyWithWhereWithoutLocationStateInput>
  >;
  readonly upsert: InputMaybe<
    ReadonlyArray<CustomerUpsertWithWhereUniqueWithoutLocationStateInput>
  >;
};

export type CustomerUpdateWithWhereUniqueWithoutLocationStateInput = {
  readonly data: CustomerUpdateWithoutLocationStateInput;
  readonly where: CustomerWhereUniqueInput;
};

export type CustomerUpdateWithoutLocationStateInput = {
  readonly city: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress: InputMaybe<Scalars['String']['input']>;
  readonly zipCode: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpsertWithWhereUniqueWithoutLocationStateInput = {
  readonly create: CustomerCreateWithoutLocationStateInput;
  readonly update: CustomerUpdateWithoutLocationStateInput;
  readonly where: CustomerWhereUniqueInput;
};

export type CustomerWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly city: InputMaybe<StringFilter>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly email: InputMaybe<StringFilter>;
  readonly firstName: InputMaybe<StringFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly lastName: InputMaybe<StringFilter>;
  readonly locationState: InputMaybe<LocationStateRelationFilter>;
  readonly phone: InputMaybe<StringFilter>;
  readonly stateId: InputMaybe<StringFilter>;
  readonly streetAddress: InputMaybe<StringFilter>;
  readonly zipCode: InputMaybe<StringFilter>;
};

export type CustomerWhereUniqueInput = {
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilter = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<NestedDateTimeFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<NestedDateTimeNullableFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  readonly _count: InputMaybe<NestedIntNullableFilter>;
  readonly _max: InputMaybe<NestedDateTimeNullableFilter>;
  readonly _min: InputMaybe<NestedDateTimeNullableFilter>;
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  readonly _count: InputMaybe<NestedIntFilter>;
  readonly _max: InputMaybe<NestedDateTimeFilter>;
  readonly _min: InputMaybe<NestedDateTimeFilter>;
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
};

export type Department = {
  readonly __typename?: 'Department';
  readonly _count: Maybe<DepartmentCount>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly employees: ReadonlyArray<Employee>;
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type DepartmentEmployeesArgs = {
  cursor: InputMaybe<EmployeeWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<EmployeeScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<EmployeeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EmployeeWhereInput>;
};

export type DepartmentCount = {
  readonly __typename?: 'DepartmentCount';
  readonly employees: Scalars['Int']['output'];
};

export type DepartmentCountAggregate = {
  readonly __typename?: 'DepartmentCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
};

export type DepartmentCountOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type DepartmentCreateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly employees: InputMaybe<EmployeeCreateNestedManyWithoutDepartmentInput>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
};

export type DepartmentCreateNestedOneWithoutEmployeesInput = {
  readonly connect: InputMaybe<DepartmentWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<DepartmentCreateOrConnectWithoutEmployeesInput>;
  readonly create: InputMaybe<DepartmentCreateWithoutEmployeesInput>;
};

export type DepartmentCreateOrConnectWithoutEmployeesInput = {
  readonly create: DepartmentCreateWithoutEmployeesInput;
  readonly where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateWithoutEmployeesInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
};

export type DepartmentGroupBy = {
  readonly __typename?: 'DepartmentGroupBy';
  readonly _count: Maybe<DepartmentCountAggregate>;
  readonly _max: Maybe<DepartmentMaxAggregate>;
  readonly _min: Maybe<DepartmentMinAggregate>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type DepartmentMaxAggregate = {
  readonly __typename?: 'DepartmentMaxAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
};

export type DepartmentMaxOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type DepartmentMinAggregate = {
  readonly __typename?: 'DepartmentMinAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
};

export type DepartmentMinOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type DepartmentOrderByWithAggregationInput = {
  readonly _count: InputMaybe<DepartmentCountOrderByAggregateInput>;
  readonly _max: InputMaybe<DepartmentMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<DepartmentMinOrderByAggregateInput>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type DepartmentOrderByWithRelationInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly employees: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type DepartmentRelationFilter = {
  readonly is: InputMaybe<DepartmentWhereInput>;
  readonly isNot: InputMaybe<DepartmentWhereInput>;
};

export enum DepartmentScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export type DepartmentScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<DepartmentScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<DepartmentScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<DepartmentScalarWhereWithAggregatesInput>>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly name: InputMaybe<StringWithAggregatesFilter>;
};

export type DepartmentUpdateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly employees: InputMaybe<EmployeeUpdateManyWithoutDepartmentNestedInput>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentUpdateManyMutationInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentUpdateOneRequiredWithoutEmployeesNestedInput = {
  readonly connect: InputMaybe<DepartmentWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<DepartmentCreateOrConnectWithoutEmployeesInput>;
  readonly create: InputMaybe<DepartmentCreateWithoutEmployeesInput>;
  readonly update: InputMaybe<DepartmentUpdateWithoutEmployeesInput>;
  readonly upsert: InputMaybe<DepartmentUpsertWithoutEmployeesInput>;
};

export type DepartmentUpdateWithoutEmployeesInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentUpsertWithoutEmployeesInput = {
  readonly create: DepartmentCreateWithoutEmployeesInput;
  readonly update: DepartmentUpdateWithoutEmployeesInput;
};

export type DepartmentWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<DepartmentWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<DepartmentWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<DepartmentWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly employees: InputMaybe<EmployeeListRelationFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly name: InputMaybe<StringFilter>;
};

export type DepartmentWhereUniqueInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type Employee = {
  readonly __typename?: 'Employee';
  readonly city: Scalars['String']['output'];
  readonly dateStarted: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly department: Department;
  readonly departmentId: Scalars['String']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly gender: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly imagePath: Maybe<Scalars['String']['output']>;
  readonly jobTitle: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly locationState: LocationState;
  readonly phone: Scalars['String']['output'];
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zipCode: Scalars['String']['output'];
};

export type EmployeeCountAggregate = {
  readonly __typename?: 'EmployeeCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly city: Scalars['Int']['output'];
  readonly dateStarted: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly departmentId: Scalars['Int']['output'];
  readonly email: Scalars['Int']['output'];
  readonly firstName: Scalars['Int']['output'];
  readonly gender: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly imagePath: Scalars['Int']['output'];
  readonly jobTitle: Scalars['Int']['output'];
  readonly lastName: Scalars['Int']['output'];
  readonly phone: Scalars['Int']['output'];
  readonly stateId: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly zipCode: Scalars['Int']['output'];
};

export type EmployeeCountOrderByAggregateInput = {
  readonly city: InputMaybe<SortOrder>;
  readonly dateStarted: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly departmentId: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly gender: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly imagePath: InputMaybe<SortOrder>;
  readonly jobTitle: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export type EmployeeCreateInput = {
  readonly city: Scalars['String']['input'];
  readonly dateStarted: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly department: DepartmentCreateNestedOneWithoutEmployeesInput;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly gender: Scalars['String']['input'];
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly imagePath: InputMaybe<Scalars['String']['input']>;
  readonly jobTitle: Scalars['String']['input'];
  readonly lastName: Scalars['String']['input'];
  readonly locationState: LocationStateCreateNestedOneWithoutEmployeesInput;
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zipCode: Scalars['String']['input'];
};

export type EmployeeCreateNestedManyWithoutDepartmentInput = {
  readonly connect: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<EmployeeCreateOrConnectWithoutDepartmentInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<EmployeeCreateWithoutDepartmentInput>>;
};

export type EmployeeCreateNestedManyWithoutLocationStateInput = {
  readonly connect: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<EmployeeCreateOrConnectWithoutLocationStateInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<EmployeeCreateWithoutLocationStateInput>>;
};

export type EmployeeCreateOrConnectWithoutDepartmentInput = {
  readonly create: EmployeeCreateWithoutDepartmentInput;
  readonly where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutLocationStateInput = {
  readonly create: EmployeeCreateWithoutLocationStateInput;
  readonly where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateWithoutDepartmentInput = {
  readonly city: Scalars['String']['input'];
  readonly dateStarted: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly gender: Scalars['String']['input'];
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly imagePath: InputMaybe<Scalars['String']['input']>;
  readonly jobTitle: Scalars['String']['input'];
  readonly lastName: Scalars['String']['input'];
  readonly locationState: LocationStateCreateNestedOneWithoutEmployeesInput;
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zipCode: Scalars['String']['input'];
};

export type EmployeeCreateWithoutLocationStateInput = {
  readonly city: Scalars['String']['input'];
  readonly dateStarted: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly department: DepartmentCreateNestedOneWithoutEmployeesInput;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly gender: Scalars['String']['input'];
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly imagePath: InputMaybe<Scalars['String']['input']>;
  readonly jobTitle: Scalars['String']['input'];
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zipCode: Scalars['String']['input'];
};

export type EmployeeGroupBy = {
  readonly __typename?: 'EmployeeGroupBy';
  readonly _count: Maybe<EmployeeCountAggregate>;
  readonly _max: Maybe<EmployeeMaxAggregate>;
  readonly _min: Maybe<EmployeeMinAggregate>;
  readonly city: Scalars['String']['output'];
  readonly dateStarted: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly departmentId: Scalars['String']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly gender: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly imagePath: Maybe<Scalars['String']['output']>;
  readonly jobTitle: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zipCode: Scalars['String']['output'];
};

export type EmployeeListRelationFilter = {
  readonly every: InputMaybe<EmployeeWhereInput>;
  readonly none: InputMaybe<EmployeeWhereInput>;
  readonly some: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeMaxAggregate = {
  readonly __typename?: 'EmployeeMaxAggregate';
  readonly city: Maybe<Scalars['String']['output']>;
  readonly dateStarted: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly departmentId: Maybe<Scalars['String']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly firstName: Maybe<Scalars['String']['output']>;
  readonly gender: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly imagePath: Maybe<Scalars['String']['output']>;
  readonly jobTitle: Maybe<Scalars['String']['output']>;
  readonly lastName: Maybe<Scalars['String']['output']>;
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly stateId: Maybe<Scalars['String']['output']>;
  readonly streetAddress: Maybe<Scalars['String']['output']>;
  readonly zipCode: Maybe<Scalars['String']['output']>;
};

export type EmployeeMaxOrderByAggregateInput = {
  readonly city: InputMaybe<SortOrder>;
  readonly dateStarted: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly departmentId: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly gender: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly imagePath: InputMaybe<SortOrder>;
  readonly jobTitle: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export type EmployeeMinAggregate = {
  readonly __typename?: 'EmployeeMinAggregate';
  readonly city: Maybe<Scalars['String']['output']>;
  readonly dateStarted: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly departmentId: Maybe<Scalars['String']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly firstName: Maybe<Scalars['String']['output']>;
  readonly gender: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly imagePath: Maybe<Scalars['String']['output']>;
  readonly jobTitle: Maybe<Scalars['String']['output']>;
  readonly lastName: Maybe<Scalars['String']['output']>;
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly stateId: Maybe<Scalars['String']['output']>;
  readonly streetAddress: Maybe<Scalars['String']['output']>;
  readonly zipCode: Maybe<Scalars['String']['output']>;
};

export type EmployeeMinOrderByAggregateInput = {
  readonly city: InputMaybe<SortOrder>;
  readonly dateStarted: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly departmentId: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly gender: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly imagePath: InputMaybe<SortOrder>;
  readonly jobTitle: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export type EmployeeOrderByRelationAggregateInput = {
  readonly _count: InputMaybe<SortOrder>;
};

export type EmployeeOrderByWithAggregationInput = {
  readonly _count: InputMaybe<EmployeeCountOrderByAggregateInput>;
  readonly _max: InputMaybe<EmployeeMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<EmployeeMinOrderByAggregateInput>;
  readonly city: InputMaybe<SortOrder>;
  readonly dateStarted: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly departmentId: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly gender: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly imagePath: InputMaybe<SortOrder>;
  readonly jobTitle: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export type EmployeeOrderByWithRelationInput = {
  readonly city: InputMaybe<SortOrder>;
  readonly dateStarted: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly department: InputMaybe<DepartmentOrderByWithRelationInput>;
  readonly departmentId: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly gender: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly imagePath: InputMaybe<SortOrder>;
  readonly jobTitle: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly locationState: InputMaybe<LocationStateOrderByWithRelationInput>;
  readonly phone: InputMaybe<SortOrder>;
  readonly stateId: InputMaybe<SortOrder>;
  readonly streetAddress: InputMaybe<SortOrder>;
  readonly zipCode: InputMaybe<SortOrder>;
};

export enum EmployeeScalarFieldEnum {
  City = 0,
  DateStarted = 1,
  DateUpdated = 2,
  DepartmentId = 3,
  Email = 4,
  FirstName = 5,
  Gender = 6,
  Id = 7,
  ImagePath = 8,
  JobTitle = 9,
  LastName = 10,
  Phone = 11,
  StateId = 12,
  StreetAddress = 13,
  ZipCode = 14,
}

export type EmployeeScalarWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<EmployeeScalarWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<EmployeeScalarWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<EmployeeScalarWhereInput>>;
  readonly city: InputMaybe<StringFilter>;
  readonly dateStarted: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly departmentId: InputMaybe<StringFilter>;
  readonly email: InputMaybe<StringFilter>;
  readonly firstName: InputMaybe<StringFilter>;
  readonly gender: InputMaybe<StringFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly imagePath: InputMaybe<StringNullableFilter>;
  readonly jobTitle: InputMaybe<StringFilter>;
  readonly lastName: InputMaybe<StringFilter>;
  readonly phone: InputMaybe<StringFilter>;
  readonly stateId: InputMaybe<StringFilter>;
  readonly streetAddress: InputMaybe<StringFilter>;
  readonly zipCode: InputMaybe<StringFilter>;
};

export type EmployeeScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<EmployeeScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<EmployeeScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<EmployeeScalarWhereWithAggregatesInput>>;
  readonly city: InputMaybe<StringWithAggregatesFilter>;
  readonly dateStarted: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly departmentId: InputMaybe<StringWithAggregatesFilter>;
  readonly email: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName: InputMaybe<StringWithAggregatesFilter>;
  readonly gender: InputMaybe<StringWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly imagePath: InputMaybe<StringNullableWithAggregatesFilter>;
  readonly jobTitle: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName: InputMaybe<StringWithAggregatesFilter>;
  readonly phone: InputMaybe<StringWithAggregatesFilter>;
  readonly stateId: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress: InputMaybe<StringWithAggregatesFilter>;
  readonly zipCode: InputMaybe<StringWithAggregatesFilter>;
};

export type EmployeeUpdateInput = {
  readonly city: InputMaybe<Scalars['String']['input']>;
  readonly dateStarted: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly department: InputMaybe<DepartmentUpdateOneRequiredWithoutEmployeesNestedInput>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly gender: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly imagePath: InputMaybe<Scalars['String']['input']>;
  readonly jobTitle: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly locationState: InputMaybe<LocationStateUpdateOneRequiredWithoutEmployeesNestedInput>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress: InputMaybe<Scalars['String']['input']>;
  readonly zipCode: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeUpdateManyMutationInput = {
  readonly city: InputMaybe<Scalars['String']['input']>;
  readonly dateStarted: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly gender: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly imagePath: InputMaybe<Scalars['String']['input']>;
  readonly jobTitle: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress: InputMaybe<Scalars['String']['input']>;
  readonly zipCode: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
  readonly data: EmployeeUpdateManyMutationInput;
  readonly where: EmployeeScalarWhereInput;
};

export type EmployeeUpdateManyWithWhereWithoutLocationStateInput = {
  readonly data: EmployeeUpdateManyMutationInput;
  readonly where: EmployeeScalarWhereInput;
};

export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<EmployeeCreateOrConnectWithoutDepartmentInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<EmployeeCreateWithoutDepartmentInput>>;
  readonly delete: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<EmployeeScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly update: InputMaybe<ReadonlyArray<EmployeeUpdateWithWhereUniqueWithoutDepartmentInput>>;
  readonly updateMany: InputMaybe<ReadonlyArray<EmployeeUpdateManyWithWhereWithoutDepartmentInput>>;
  readonly upsert: InputMaybe<ReadonlyArray<EmployeeUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type EmployeeUpdateManyWithoutLocationStateNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<EmployeeCreateOrConnectWithoutLocationStateInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<EmployeeCreateWithoutLocationStateInput>>;
  readonly delete: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<EmployeeScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<EmployeeWhereUniqueInput>>;
  readonly update: InputMaybe<
    ReadonlyArray<EmployeeUpdateWithWhereUniqueWithoutLocationStateInput>
  >;
  readonly updateMany: InputMaybe<
    ReadonlyArray<EmployeeUpdateManyWithWhereWithoutLocationStateInput>
  >;
  readonly upsert: InputMaybe<
    ReadonlyArray<EmployeeUpsertWithWhereUniqueWithoutLocationStateInput>
  >;
};

export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
  readonly data: EmployeeUpdateWithoutDepartmentInput;
  readonly where: EmployeeWhereUniqueInput;
};

export type EmployeeUpdateWithWhereUniqueWithoutLocationStateInput = {
  readonly data: EmployeeUpdateWithoutLocationStateInput;
  readonly where: EmployeeWhereUniqueInput;
};

export type EmployeeUpdateWithoutDepartmentInput = {
  readonly city: InputMaybe<Scalars['String']['input']>;
  readonly dateStarted: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly gender: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly imagePath: InputMaybe<Scalars['String']['input']>;
  readonly jobTitle: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly locationState: InputMaybe<LocationStateUpdateOneRequiredWithoutEmployeesNestedInput>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress: InputMaybe<Scalars['String']['input']>;
  readonly zipCode: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeUpdateWithoutLocationStateInput = {
  readonly city: InputMaybe<Scalars['String']['input']>;
  readonly dateStarted: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly department: InputMaybe<DepartmentUpdateOneRequiredWithoutEmployeesNestedInput>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly gender: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly imagePath: InputMaybe<Scalars['String']['input']>;
  readonly jobTitle: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress: InputMaybe<Scalars['String']['input']>;
  readonly zipCode: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
  readonly create: EmployeeCreateWithoutDepartmentInput;
  readonly update: EmployeeUpdateWithoutDepartmentInput;
  readonly where: EmployeeWhereUniqueInput;
};

export type EmployeeUpsertWithWhereUniqueWithoutLocationStateInput = {
  readonly create: EmployeeCreateWithoutLocationStateInput;
  readonly update: EmployeeUpdateWithoutLocationStateInput;
  readonly where: EmployeeWhereUniqueInput;
};

export type EmployeeWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<EmployeeWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<EmployeeWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<EmployeeWhereInput>>;
  readonly city: InputMaybe<StringFilter>;
  readonly dateStarted: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly department: InputMaybe<DepartmentRelationFilter>;
  readonly departmentId: InputMaybe<StringFilter>;
  readonly email: InputMaybe<StringFilter>;
  readonly firstName: InputMaybe<StringFilter>;
  readonly gender: InputMaybe<StringFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly imagePath: InputMaybe<StringNullableFilter>;
  readonly jobTitle: InputMaybe<StringFilter>;
  readonly lastName: InputMaybe<StringFilter>;
  readonly locationState: InputMaybe<LocationStateRelationFilter>;
  readonly phone: InputMaybe<StringFilter>;
  readonly stateId: InputMaybe<StringFilter>;
  readonly streetAddress: InputMaybe<StringFilter>;
  readonly zipCode: InputMaybe<StringFilter>;
};

export type EmployeeWhereUniqueInput = {
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilter = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<NestedFloatFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  readonly _avg: InputMaybe<NestedFloatFilter>;
  readonly _count: InputMaybe<NestedIntFilter>;
  readonly _max: InputMaybe<NestedFloatFilter>;
  readonly _min: InputMaybe<NestedFloatFilter>;
  readonly _sum: InputMaybe<NestedFloatFilter>;
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<NestedFloatWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
};

export type IntFilter = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<NestedIntFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  readonly _avg: InputMaybe<NestedFloatFilter>;
  readonly _count: InputMaybe<NestedIntFilter>;
  readonly _max: InputMaybe<NestedIntFilter>;
  readonly _min: InputMaybe<NestedIntFilter>;
  readonly _sum: InputMaybe<NestedIntFilter>;
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<NestedIntWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type Inventory = {
  readonly __typename?: 'Inventory';
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly product: Product;
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly size: Size;
  readonly sizeId: Scalars['String']['output'];
};

export type InventoryAvgAggregate = {
  readonly __typename?: 'InventoryAvgAggregate';
  readonly quantity: Maybe<Scalars['Float']['output']>;
};

export type InventoryAvgOrderByAggregateInput = {
  readonly quantity: InputMaybe<SortOrder>;
};

export type InventoryCountAggregate = {
  readonly __typename?: 'InventoryCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly productId: Scalars['Int']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly sizeId: Scalars['Int']['output'];
};

export type InventoryCountOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type InventoryCreateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly product: ProductCreateNestedOneWithoutInventoryInput;
  readonly quantity: Scalars['Int']['input'];
  readonly size: SizeCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateNestedManyWithoutProductInput = {
  readonly connect: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<ReadonlyArray<InventoryCreateOrConnectWithoutProductInput>>;
  readonly create: InputMaybe<ReadonlyArray<InventoryCreateWithoutProductInput>>;
};

export type InventoryCreateNestedManyWithoutSizeInput = {
  readonly connect: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<ReadonlyArray<InventoryCreateOrConnectWithoutSizeInput>>;
  readonly create: InputMaybe<ReadonlyArray<InventoryCreateWithoutSizeInput>>;
};

export type InventoryCreateOrConnectWithoutProductInput = {
  readonly create: InventoryCreateWithoutProductInput;
  readonly where: InventoryWhereUniqueInput;
};

export type InventoryCreateOrConnectWithoutSizeInput = {
  readonly create: InventoryCreateWithoutSizeInput;
  readonly where: InventoryWhereUniqueInput;
};

export type InventoryCreateWithoutProductInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly quantity: Scalars['Int']['input'];
  readonly size: SizeCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateWithoutSizeInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly product: ProductCreateNestedOneWithoutInventoryInput;
  readonly quantity: Scalars['Int']['input'];
};

export type InventoryGroupBy = {
  readonly __typename?: 'InventoryGroupBy';
  readonly _avg: Maybe<InventoryAvgAggregate>;
  readonly _count: Maybe<InventoryCountAggregate>;
  readonly _max: Maybe<InventoryMaxAggregate>;
  readonly _min: Maybe<InventoryMinAggregate>;
  readonly _sum: Maybe<InventorySumAggregate>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly sizeId: Scalars['String']['output'];
};

export type InventoryListRelationFilter = {
  readonly every: InputMaybe<InventoryWhereInput>;
  readonly none: InputMaybe<InventoryWhereInput>;
  readonly some: InputMaybe<InventoryWhereInput>;
};

export type InventoryMaxAggregate = {
  readonly __typename?: 'InventoryMaxAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly productId: Maybe<Scalars['String']['output']>;
  readonly quantity: Maybe<Scalars['Int']['output']>;
  readonly sizeId: Maybe<Scalars['String']['output']>;
};

export type InventoryMaxOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type InventoryMinAggregate = {
  readonly __typename?: 'InventoryMinAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly productId: Maybe<Scalars['String']['output']>;
  readonly quantity: Maybe<Scalars['Int']['output']>;
  readonly sizeId: Maybe<Scalars['String']['output']>;
};

export type InventoryMinOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type InventoryOrderByRelationAggregateInput = {
  readonly _count: InputMaybe<SortOrder>;
};

export type InventoryOrderByWithAggregationInput = {
  readonly _avg: InputMaybe<InventoryAvgOrderByAggregateInput>;
  readonly _count: InputMaybe<InventoryCountOrderByAggregateInput>;
  readonly _max: InputMaybe<InventoryMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<InventoryMinOrderByAggregateInput>;
  readonly _sum: InputMaybe<InventorySumOrderByAggregateInput>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type InventoryOrderByWithRelationInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly product: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly size: InputMaybe<SizeOrderByWithRelationInput>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export enum InventoryScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  ProductId = 3,
  Quantity = 4,
  SizeId = 5,
}

export type InventoryScalarWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<InventoryScalarWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<InventoryScalarWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<InventoryScalarWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly productId: InputMaybe<StringFilter>;
  readonly quantity: InputMaybe<IntFilter>;
  readonly sizeId: InputMaybe<StringFilter>;
};

export type InventoryScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<InventoryScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<InventoryScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<InventoryScalarWhereWithAggregatesInput>>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly productId: InputMaybe<StringWithAggregatesFilter>;
  readonly quantity: InputMaybe<IntWithAggregatesFilter>;
  readonly sizeId: InputMaybe<StringWithAggregatesFilter>;
};

export type InventorySumAggregate = {
  readonly __typename?: 'InventorySumAggregate';
  readonly quantity: Maybe<Scalars['Int']['output']>;
};

export type InventorySumOrderByAggregateInput = {
  readonly quantity: InputMaybe<SortOrder>;
};

export type InventoryUpdateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly product: InputMaybe<ProductUpdateOneRequiredWithoutInventoryNestedInput>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
  readonly size: InputMaybe<SizeUpdateOneRequiredWithoutInventoryNestedInput>;
};

export type InventoryUpdateManyMutationInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
};

export type InventoryUpdateManyWithWhereWithoutProductInput = {
  readonly data: InventoryUpdateManyMutationInput;
  readonly where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithWhereWithoutSizeInput = {
  readonly data: InventoryUpdateManyMutationInput;
  readonly where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithoutProductNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<ReadonlyArray<InventoryCreateOrConnectWithoutProductInput>>;
  readonly create: InputMaybe<ReadonlyArray<InventoryCreateWithoutProductInput>>;
  readonly delete: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<InventoryScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly update: InputMaybe<ReadonlyArray<InventoryUpdateWithWhereUniqueWithoutProductInput>>;
  readonly updateMany: InputMaybe<ReadonlyArray<InventoryUpdateManyWithWhereWithoutProductInput>>;
  readonly upsert: InputMaybe<ReadonlyArray<InventoryUpsertWithWhereUniqueWithoutProductInput>>;
};

export type InventoryUpdateManyWithoutSizeNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<ReadonlyArray<InventoryCreateOrConnectWithoutSizeInput>>;
  readonly create: InputMaybe<ReadonlyArray<InventoryCreateWithoutSizeInput>>;
  readonly delete: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<InventoryScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly update: InputMaybe<ReadonlyArray<InventoryUpdateWithWhereUniqueWithoutSizeInput>>;
  readonly updateMany: InputMaybe<ReadonlyArray<InventoryUpdateManyWithWhereWithoutSizeInput>>;
  readonly upsert: InputMaybe<ReadonlyArray<InventoryUpsertWithWhereUniqueWithoutSizeInput>>;
};

export type InventoryUpdateWithWhereUniqueWithoutProductInput = {
  readonly data: InventoryUpdateWithoutProductInput;
  readonly where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithWhereUniqueWithoutSizeInput = {
  readonly data: InventoryUpdateWithoutSizeInput;
  readonly where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithoutProductInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
  readonly size: InputMaybe<SizeUpdateOneRequiredWithoutInventoryNestedInput>;
};

export type InventoryUpdateWithoutSizeInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly product: InputMaybe<ProductUpdateOneRequiredWithoutInventoryNestedInput>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
};

export type InventoryUpsertWithWhereUniqueWithoutProductInput = {
  readonly create: InventoryCreateWithoutProductInput;
  readonly update: InventoryUpdateWithoutProductInput;
  readonly where: InventoryWhereUniqueInput;
};

export type InventoryUpsertWithWhereUniqueWithoutSizeInput = {
  readonly create: InventoryCreateWithoutSizeInput;
  readonly update: InventoryUpdateWithoutSizeInput;
  readonly where: InventoryWhereUniqueInput;
};

export type InventoryWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<InventoryWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<InventoryWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<InventoryWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly product: InputMaybe<ProductRelationFilter>;
  readonly productId: InputMaybe<StringFilter>;
  readonly quantity: InputMaybe<IntFilter>;
  readonly size: InputMaybe<SizeRelationFilter>;
  readonly sizeId: InputMaybe<StringFilter>;
};

export type InventoryWhereUniqueInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
};

export type LocationState = {
  readonly __typename?: 'LocationState';
  readonly _count: Maybe<LocationStateCount>;
  readonly customers: ReadonlyArray<Customer>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly employees: ReadonlyArray<Employee>;
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type LocationStateCustomersArgs = {
  cursor: InputMaybe<CustomerWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CustomerWhereInput>;
};

export type LocationStateEmployeesArgs = {
  cursor: InputMaybe<EmployeeWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<EmployeeScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<EmployeeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EmployeeWhereInput>;
};

export type LocationStateCount = {
  readonly __typename?: 'LocationStateCount';
  readonly customers: Scalars['Int']['output'];
  readonly employees: Scalars['Int']['output'];
};

export type LocationStateCountAggregate = {
  readonly __typename?: 'LocationStateCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
  readonly shortName: Scalars['Int']['output'];
};

export type LocationStateCountOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly shortName: InputMaybe<SortOrder>;
};

export type LocationStateCreateInput = {
  readonly customers: InputMaybe<CustomerCreateNestedManyWithoutLocationStateInput>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly employees: InputMaybe<EmployeeCreateNestedManyWithoutLocationStateInput>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly shortName: Scalars['String']['input'];
};

export type LocationStateCreateNestedOneWithoutCustomersInput = {
  readonly connect: InputMaybe<LocationStateWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<LocationStateCreateOrConnectWithoutCustomersInput>;
  readonly create: InputMaybe<LocationStateCreateWithoutCustomersInput>;
};

export type LocationStateCreateNestedOneWithoutEmployeesInput = {
  readonly connect: InputMaybe<LocationStateWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<LocationStateCreateOrConnectWithoutEmployeesInput>;
  readonly create: InputMaybe<LocationStateCreateWithoutEmployeesInput>;
};

export type LocationStateCreateOrConnectWithoutCustomersInput = {
  readonly create: LocationStateCreateWithoutCustomersInput;
  readonly where: LocationStateWhereUniqueInput;
};

export type LocationStateCreateOrConnectWithoutEmployeesInput = {
  readonly create: LocationStateCreateWithoutEmployeesInput;
  readonly where: LocationStateWhereUniqueInput;
};

export type LocationStateCreateWithoutCustomersInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly employees: InputMaybe<EmployeeCreateNestedManyWithoutLocationStateInput>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly shortName: Scalars['String']['input'];
};

export type LocationStateCreateWithoutEmployeesInput = {
  readonly customers: InputMaybe<CustomerCreateNestedManyWithoutLocationStateInput>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly shortName: Scalars['String']['input'];
};

export type LocationStateGroupBy = {
  readonly __typename?: 'LocationStateGroupBy';
  readonly _count: Maybe<LocationStateCountAggregate>;
  readonly _max: Maybe<LocationStateMaxAggregate>;
  readonly _min: Maybe<LocationStateMinAggregate>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly shortName: Scalars['String']['output'];
};

export type LocationStateMaxAggregate = {
  readonly __typename?: 'LocationStateMaxAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly shortName: Maybe<Scalars['String']['output']>;
};

export type LocationStateMaxOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly shortName: InputMaybe<SortOrder>;
};

export type LocationStateMinAggregate = {
  readonly __typename?: 'LocationStateMinAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly shortName: Maybe<Scalars['String']['output']>;
};

export type LocationStateMinOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly shortName: InputMaybe<SortOrder>;
};

export type LocationStateOrderByWithAggregationInput = {
  readonly _count: InputMaybe<LocationStateCountOrderByAggregateInput>;
  readonly _max: InputMaybe<LocationStateMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<LocationStateMinOrderByAggregateInput>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly shortName: InputMaybe<SortOrder>;
};

export type LocationStateOrderByWithRelationInput = {
  readonly customers: InputMaybe<CustomerOrderByRelationAggregateInput>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly employees: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly shortName: InputMaybe<SortOrder>;
};

export type LocationStateRelationFilter = {
  readonly is: InputMaybe<LocationStateWhereInput>;
  readonly isNot: InputMaybe<LocationStateWhereInput>;
};

export enum LocationStateScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
  ShortName = 4,
}

export type LocationStateScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<LocationStateScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<LocationStateScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<LocationStateScalarWhereWithAggregatesInput>>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly name: InputMaybe<StringWithAggregatesFilter>;
  readonly shortName: InputMaybe<StringWithAggregatesFilter>;
};

export type LocationStateUpdateInput = {
  readonly customers: InputMaybe<CustomerUpdateManyWithoutLocationStateNestedInput>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly employees: InputMaybe<EmployeeUpdateManyWithoutLocationStateNestedInput>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly shortName: InputMaybe<Scalars['String']['input']>;
};

export type LocationStateUpdateManyMutationInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly shortName: InputMaybe<Scalars['String']['input']>;
};

export type LocationStateUpdateOneRequiredWithoutEmployeesNestedInput = {
  readonly connect: InputMaybe<LocationStateWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<LocationStateCreateOrConnectWithoutEmployeesInput>;
  readonly create: InputMaybe<LocationStateCreateWithoutEmployeesInput>;
  readonly update: InputMaybe<LocationStateUpdateWithoutEmployeesInput>;
  readonly upsert: InputMaybe<LocationStateUpsertWithoutEmployeesInput>;
};

export type LocationStateUpdateOneWithoutCustomersNestedInput = {
  readonly connect: InputMaybe<LocationStateWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<LocationStateCreateOrConnectWithoutCustomersInput>;
  readonly create: InputMaybe<LocationStateCreateWithoutCustomersInput>;
  readonly delete: InputMaybe<Scalars['Boolean']['input']>;
  readonly disconnect: InputMaybe<Scalars['Boolean']['input']>;
  readonly update: InputMaybe<LocationStateUpdateWithoutCustomersInput>;
  readonly upsert: InputMaybe<LocationStateUpsertWithoutCustomersInput>;
};

export type LocationStateUpdateWithoutCustomersInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly employees: InputMaybe<EmployeeUpdateManyWithoutLocationStateNestedInput>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly shortName: InputMaybe<Scalars['String']['input']>;
};

export type LocationStateUpdateWithoutEmployeesInput = {
  readonly customers: InputMaybe<CustomerUpdateManyWithoutLocationStateNestedInput>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly shortName: InputMaybe<Scalars['String']['input']>;
};

export type LocationStateUpsertWithoutCustomersInput = {
  readonly create: LocationStateCreateWithoutCustomersInput;
  readonly update: LocationStateUpdateWithoutCustomersInput;
};

export type LocationStateUpsertWithoutEmployeesInput = {
  readonly create: LocationStateCreateWithoutEmployeesInput;
  readonly update: LocationStateUpdateWithoutEmployeesInput;
};

export type LocationStateWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<LocationStateWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<LocationStateWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<LocationStateWhereInput>>;
  readonly customers: InputMaybe<CustomerListRelationFilter>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly employees: InputMaybe<EmployeeListRelationFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly name: InputMaybe<StringFilter>;
  readonly shortName: InputMaybe<StringFilter>;
};

export type LocationStateWhereUniqueInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly shortName: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createOneCustomer: Customer;
  readonly createOneDepartment: Department;
  readonly createOneEmployee: Employee;
  readonly createOneInventory: Inventory;
  readonly createOneLocationState: LocationState;
  readonly createOneProduct: Product;
  readonly createOneProductSale: ProductSale;
  readonly createOneProductTransaction: ProductTransaction;
  readonly createOneRole: Role;
  readonly createOneSize: Size;
  readonly createOneUser: User;
  readonly deleteManyCustomer: AffectedRowsOutput;
  readonly deleteManyDepartment: AffectedRowsOutput;
  readonly deleteManyEmployee: AffectedRowsOutput;
  readonly deleteManyInventory: AffectedRowsOutput;
  readonly deleteManyLocationState: AffectedRowsOutput;
  readonly deleteManyProduct: AffectedRowsOutput;
  readonly deleteManyProductSale: AffectedRowsOutput;
  readonly deleteManyProductTransaction: AffectedRowsOutput;
  readonly deleteManyRole: AffectedRowsOutput;
  readonly deleteManySize: AffectedRowsOutput;
  readonly deleteManyUser: AffectedRowsOutput;
  readonly deleteOneCustomer: Maybe<Customer>;
  readonly deleteOneDepartment: Maybe<Department>;
  readonly deleteOneEmployee: Maybe<Employee>;
  readonly deleteOneInventory: Maybe<Inventory>;
  readonly deleteOneLocationState: Maybe<LocationState>;
  readonly deleteOneProduct: Maybe<Product>;
  readonly deleteOneProductSale: Maybe<ProductSale>;
  readonly deleteOneProductTransaction: Maybe<ProductTransaction>;
  readonly deleteOneRole: Maybe<Role>;
  readonly deleteOneSize: Maybe<Size>;
  readonly deleteOneUser: Maybe<User>;
  readonly login: Maybe<Scalars['String']['output']>;
  readonly updateManyCustomer: AffectedRowsOutput;
  readonly updateManyDepartment: AffectedRowsOutput;
  readonly updateManyEmployee: AffectedRowsOutput;
  readonly updateManyInventory: AffectedRowsOutput;
  readonly updateManyLocationState: AffectedRowsOutput;
  readonly updateManyProduct: AffectedRowsOutput;
  readonly updateManyProductSale: AffectedRowsOutput;
  readonly updateManyProductTransaction: AffectedRowsOutput;
  readonly updateManyRole: AffectedRowsOutput;
  readonly updateManySize: AffectedRowsOutput;
  readonly updateManyUser: AffectedRowsOutput;
  readonly updateOneCustomer: Maybe<Customer>;
  readonly updateOneDepartment: Maybe<Department>;
  readonly updateOneEmployee: Maybe<Employee>;
  readonly updateOneInventory: Maybe<Inventory>;
  readonly updateOneLocationState: Maybe<LocationState>;
  readonly updateOneProduct: Maybe<Product>;
  readonly updateOneProductSale: Maybe<ProductSale>;
  readonly updateOneProductTransaction: Maybe<ProductTransaction>;
  readonly updateOneRole: Maybe<Role>;
  readonly updateOneSize: Maybe<Size>;
  readonly updateOneUser: Maybe<User>;
  readonly upsertOneCustomer: Customer;
  readonly upsertOneDepartment: Department;
  readonly upsertOneEmployee: Employee;
  readonly upsertOneInventory: Inventory;
  readonly upsertOneLocationState: LocationState;
  readonly upsertOneProduct: Product;
  readonly upsertOneProductSale: ProductSale;
  readonly upsertOneProductTransaction: ProductTransaction;
  readonly upsertOneRole: Role;
  readonly upsertOneSize: Size;
  readonly upsertOneUser: User;
};

export type MutationCreateOneCustomerArgs = {
  data: CustomerCreateInput;
};

export type MutationCreateOneDepartmentArgs = {
  data: DepartmentCreateInput;
};

export type MutationCreateOneEmployeeArgs = {
  data: EmployeeCreateInput;
};

export type MutationCreateOneInventoryArgs = {
  data: InventoryCreateInput;
};

export type MutationCreateOneLocationStateArgs = {
  data: LocationStateCreateInput;
};

export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};

export type MutationCreateOneProductSaleArgs = {
  data: ProductSaleCreateInput;
};

export type MutationCreateOneProductTransactionArgs = {
  data: ProductTransactionCreateInput;
};

export type MutationCreateOneRoleArgs = {
  data: RoleCreateInput;
};

export type MutationCreateOneSizeArgs = {
  data: SizeCreateInput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteManyCustomerArgs = {
  where: InputMaybe<CustomerWhereInput>;
};

export type MutationDeleteManyDepartmentArgs = {
  where: InputMaybe<DepartmentWhereInput>;
};

export type MutationDeleteManyEmployeeArgs = {
  where: InputMaybe<EmployeeWhereInput>;
};

export type MutationDeleteManyInventoryArgs = {
  where: InputMaybe<InventoryWhereInput>;
};

export type MutationDeleteManyLocationStateArgs = {
  where: InputMaybe<LocationStateWhereInput>;
};

export type MutationDeleteManyProductArgs = {
  where: InputMaybe<ProductWhereInput>;
};

export type MutationDeleteManyProductSaleArgs = {
  where: InputMaybe<ProductSaleWhereInput>;
};

export type MutationDeleteManyProductTransactionArgs = {
  where: InputMaybe<ProductTransactionWhereInput>;
};

export type MutationDeleteManyRoleArgs = {
  where: InputMaybe<RoleWhereInput>;
};

export type MutationDeleteManySizeArgs = {
  where: InputMaybe<SizeWhereInput>;
};

export type MutationDeleteManyUserArgs = {
  where: InputMaybe<UserWhereInput>;
};

export type MutationDeleteOneCustomerArgs = {
  where: CustomerWhereUniqueInput;
};

export type MutationDeleteOneDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};

export type MutationDeleteOneEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};

export type MutationDeleteOneInventoryArgs = {
  where: InventoryWhereUniqueInput;
};

export type MutationDeleteOneLocationStateArgs = {
  where: LocationStateWhereUniqueInput;
};

export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};

export type MutationDeleteOneProductSaleArgs = {
  where: ProductSaleWhereUniqueInput;
};

export type MutationDeleteOneProductTransactionArgs = {
  where: ProductTransactionWhereUniqueInput;
};

export type MutationDeleteOneRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type MutationDeleteOneSizeArgs = {
  where: SizeWhereUniqueInput;
};

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type MutationUpdateManyCustomerArgs = {
  data: CustomerUpdateManyMutationInput;
  where: InputMaybe<CustomerWhereInput>;
};

export type MutationUpdateManyDepartmentArgs = {
  data: DepartmentUpdateManyMutationInput;
  where: InputMaybe<DepartmentWhereInput>;
};

export type MutationUpdateManyEmployeeArgs = {
  data: EmployeeUpdateManyMutationInput;
  where: InputMaybe<EmployeeWhereInput>;
};

export type MutationUpdateManyInventoryArgs = {
  data: InventoryUpdateManyMutationInput;
  where: InputMaybe<InventoryWhereInput>;
};

export type MutationUpdateManyLocationStateArgs = {
  data: LocationStateUpdateManyMutationInput;
  where: InputMaybe<LocationStateWhereInput>;
};

export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where: InputMaybe<ProductWhereInput>;
};

export type MutationUpdateManyProductSaleArgs = {
  data: ProductSaleUpdateManyMutationInput;
  where: InputMaybe<ProductSaleWhereInput>;
};

export type MutationUpdateManyProductTransactionArgs = {
  data: ProductTransactionUpdateManyMutationInput;
  where: InputMaybe<ProductTransactionWhereInput>;
};

export type MutationUpdateManyRoleArgs = {
  data: RoleUpdateManyMutationInput;
  where: InputMaybe<RoleWhereInput>;
};

export type MutationUpdateManySizeArgs = {
  data: SizeUpdateManyMutationInput;
  where: InputMaybe<SizeWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where: InputMaybe<UserWhereInput>;
};

export type MutationUpdateOneCustomerArgs = {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};

export type MutationUpdateOneDepartmentArgs = {
  data: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
};

export type MutationUpdateOneEmployeeArgs = {
  data: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
};

export type MutationUpdateOneInventoryArgs = {
  data: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
};

export type MutationUpdateOneLocationStateArgs = {
  data: LocationStateUpdateInput;
  where: LocationStateWhereUniqueInput;
};

export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpdateOneProductSaleArgs = {
  data: ProductSaleUpdateInput;
  where: ProductSaleWhereUniqueInput;
};

export type MutationUpdateOneProductTransactionArgs = {
  data: ProductTransactionUpdateInput;
  where: ProductTransactionWhereUniqueInput;
};

export type MutationUpdateOneRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};

export type MutationUpdateOneSizeArgs = {
  data: SizeUpdateInput;
  where: SizeWhereUniqueInput;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpsertOneCustomerArgs = {
  create: CustomerCreateInput;
  update: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};

export type MutationUpsertOneDepartmentArgs = {
  create: DepartmentCreateInput;
  update: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
};

export type MutationUpsertOneEmployeeArgs = {
  create: EmployeeCreateInput;
  update: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
};

export type MutationUpsertOneInventoryArgs = {
  create: InventoryCreateInput;
  update: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
};

export type MutationUpsertOneLocationStateArgs = {
  create: LocationStateCreateInput;
  update: LocationStateUpdateInput;
  where: LocationStateWhereUniqueInput;
};

export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpsertOneProductSaleArgs = {
  create: ProductSaleCreateInput;
  update: ProductSaleUpdateInput;
  where: ProductSaleWhereUniqueInput;
};

export type MutationUpsertOneProductTransactionArgs = {
  create: ProductTransactionCreateInput;
  update: ProductTransactionUpdateInput;
  where: ProductTransactionWhereUniqueInput;
};

export type MutationUpsertOneRoleArgs = {
  create: RoleCreateInput;
  update: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};

export type MutationUpsertOneSizeArgs = {
  create: SizeCreateInput;
  update: SizeUpdateInput;
  where: SizeWhereUniqueInput;
};

export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<NestedDateTimeFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<NestedDateTimeNullableFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  readonly _count: InputMaybe<NestedIntNullableFilter>;
  readonly _max: InputMaybe<NestedDateTimeNullableFilter>;
  readonly _min: InputMaybe<NestedDateTimeNullableFilter>;
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  readonly _count: InputMaybe<NestedIntFilter>;
  readonly _max: InputMaybe<NestedDateTimeFilter>;
  readonly _min: InputMaybe<NestedDateTimeFilter>;
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
};

export type NestedFloatFilter = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<NestedFloatFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  readonly _avg: InputMaybe<NestedFloatFilter>;
  readonly _count: InputMaybe<NestedIntFilter>;
  readonly _max: InputMaybe<NestedFloatFilter>;
  readonly _min: InputMaybe<NestedFloatFilter>;
  readonly _sum: InputMaybe<NestedFloatFilter>;
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<NestedFloatWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<NestedIntFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<NestedIntNullableFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  readonly _avg: InputMaybe<NestedFloatFilter>;
  readonly _count: InputMaybe<NestedIntFilter>;
  readonly _max: InputMaybe<NestedIntFilter>;
  readonly _min: InputMaybe<NestedIntFilter>;
  readonly _sum: InputMaybe<NestedIntFilter>;
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<NestedIntWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<NestedStringFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<NestedStringNullableFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  readonly _count: InputMaybe<NestedIntNullableFilter>;
  readonly _max: InputMaybe<NestedStringNullableFilter>;
  readonly _min: InputMaybe<NestedStringNullableFilter>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  readonly _count: InputMaybe<NestedIntFilter>;
  readonly _max: InputMaybe<NestedStringFilter>;
  readonly _min: InputMaybe<NestedStringFilter>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<NestedStringWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Product = {
  readonly __typename?: 'Product';
  readonly _count: Maybe<ProductCount>;
  readonly cost: Scalars['Float']['output'];
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly inventory: ReadonlyArray<Inventory>;
  readonly name: Scalars['String']['output'];
  readonly productSales: ReadonlyArray<ProductSale>;
  readonly productTransactions: ReadonlyArray<ProductTransaction>;
  readonly rating: Scalars['Float']['output'];
};

export type ProductInventoryArgs = {
  cursor: InputMaybe<InventoryWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<InventoryScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<InventoryWhereInput>;
};

export type ProductProductSalesArgs = {
  cursor: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductSaleScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductSaleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductSaleWhereInput>;
};

export type ProductProductTransactionsArgs = {
  cursor: InputMaybe<ProductTransactionWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductTransactionScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductTransactionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductTransactionWhereInput>;
};

export type ProductAvgAggregate = {
  readonly __typename?: 'ProductAvgAggregate';
  readonly cost: Maybe<Scalars['Float']['output']>;
  readonly rating: Maybe<Scalars['Float']['output']>;
};

export type ProductAvgOrderByAggregateInput = {
  readonly cost: InputMaybe<SortOrder>;
  readonly rating: InputMaybe<SortOrder>;
};

export type ProductCount = {
  readonly __typename?: 'ProductCount';
  readonly inventory: Scalars['Int']['output'];
  readonly productSales: Scalars['Int']['output'];
  readonly productTransactions: Scalars['Int']['output'];
};

export type ProductCountAggregate = {
  readonly __typename?: 'ProductCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly cost: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
  readonly rating: Scalars['Int']['output'];
};

export type ProductCountOrderByAggregateInput = {
  readonly cost: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly rating: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  readonly cost: Scalars['Float']['input'];
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  readonly name: Scalars['String']['input'];
  readonly productSales: InputMaybe<ProductSaleCreateNestedManyWithoutProductInput>;
  readonly productTransactions: InputMaybe<ProductTransactionCreateNestedManyWithoutProductInput>;
  readonly rating: Scalars['Float']['input'];
};

export type ProductCreateNestedOneWithoutInventoryInput = {
  readonly connect: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutInventoryInput>;
  readonly create: InputMaybe<ProductCreateWithoutInventoryInput>;
};

export type ProductCreateNestedOneWithoutProductSalesInput = {
  readonly connect: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutProductSalesInput>;
  readonly create: InputMaybe<ProductCreateWithoutProductSalesInput>;
};

export type ProductCreateNestedOneWithoutProductTransactionsInput = {
  readonly connect: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutProductTransactionsInput>;
  readonly create: InputMaybe<ProductCreateWithoutProductTransactionsInput>;
};

export type ProductCreateOrConnectWithoutInventoryInput = {
  readonly create: ProductCreateWithoutInventoryInput;
  readonly where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductSalesInput = {
  readonly create: ProductCreateWithoutProductSalesInput;
  readonly where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductTransactionsInput = {
  readonly create: ProductCreateWithoutProductTransactionsInput;
  readonly where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutInventoryInput = {
  readonly cost: Scalars['Float']['input'];
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly productSales: InputMaybe<ProductSaleCreateNestedManyWithoutProductInput>;
  readonly productTransactions: InputMaybe<ProductTransactionCreateNestedManyWithoutProductInput>;
  readonly rating: Scalars['Float']['input'];
};

export type ProductCreateWithoutProductSalesInput = {
  readonly cost: Scalars['Float']['input'];
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  readonly name: Scalars['String']['input'];
  readonly productTransactions: InputMaybe<ProductTransactionCreateNestedManyWithoutProductInput>;
  readonly rating: Scalars['Float']['input'];
};

export type ProductCreateWithoutProductTransactionsInput = {
  readonly cost: Scalars['Float']['input'];
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  readonly name: Scalars['String']['input'];
  readonly productSales: InputMaybe<ProductSaleCreateNestedManyWithoutProductInput>;
  readonly rating: Scalars['Float']['input'];
};

export type ProductGroupBy = {
  readonly __typename?: 'ProductGroupBy';
  readonly _avg: Maybe<ProductAvgAggregate>;
  readonly _count: Maybe<ProductCountAggregate>;
  readonly _max: Maybe<ProductMaxAggregate>;
  readonly _min: Maybe<ProductMinAggregate>;
  readonly _sum: Maybe<ProductSumAggregate>;
  readonly cost: Scalars['Float']['output'];
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly rating: Scalars['Float']['output'];
};

export type ProductMaxAggregate = {
  readonly __typename?: 'ProductMaxAggregate';
  readonly cost: Maybe<Scalars['Float']['output']>;
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly rating: Maybe<Scalars['Float']['output']>;
};

export type ProductMaxOrderByAggregateInput = {
  readonly cost: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly rating: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  readonly __typename?: 'ProductMinAggregate';
  readonly cost: Maybe<Scalars['Float']['output']>;
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly rating: Maybe<Scalars['Float']['output']>;
};

export type ProductMinOrderByAggregateInput = {
  readonly cost: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly rating: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  readonly _avg: InputMaybe<ProductAvgOrderByAggregateInput>;
  readonly _count: InputMaybe<ProductCountOrderByAggregateInput>;
  readonly _max: InputMaybe<ProductMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<ProductMinOrderByAggregateInput>;
  readonly _sum: InputMaybe<ProductSumOrderByAggregateInput>;
  readonly cost: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly rating: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  readonly cost: InputMaybe<SortOrder>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly inventory: InputMaybe<InventoryOrderByRelationAggregateInput>;
  readonly name: InputMaybe<SortOrder>;
  readonly productSales: InputMaybe<ProductSaleOrderByRelationAggregateInput>;
  readonly productTransactions: InputMaybe<ProductTransactionOrderByRelationAggregateInput>;
  readonly rating: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  readonly is: InputMaybe<ProductWhereInput>;
  readonly isNot: InputMaybe<ProductWhereInput>;
};

export type ProductSale = {
  readonly __typename?: 'ProductSale';
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly product: Product;
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly size: Size;
  readonly sizeId: Scalars['String']['output'];
};

export type ProductSaleAvgAggregate = {
  readonly __typename?: 'ProductSaleAvgAggregate';
  readonly quantity: Maybe<Scalars['Float']['output']>;
};

export type ProductSaleAvgOrderByAggregateInput = {
  readonly quantity: InputMaybe<SortOrder>;
};

export type ProductSaleCountAggregate = {
  readonly __typename?: 'ProductSaleCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly productId: Scalars['Int']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly sizeId: Scalars['Int']['output'];
};

export type ProductSaleCountOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type ProductSaleCreateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly product: ProductCreateNestedOneWithoutProductSalesInput;
  readonly quantity: Scalars['Int']['input'];
  readonly size: SizeCreateNestedOneWithoutProductSalesInput;
};

export type ProductSaleCreateNestedManyWithoutProductInput = {
  readonly connect: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<ProductSaleCreateOrConnectWithoutProductInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<ProductSaleCreateWithoutProductInput>>;
};

export type ProductSaleCreateNestedManyWithoutSizeInput = {
  readonly connect: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<ReadonlyArray<ProductSaleCreateOrConnectWithoutSizeInput>>;
  readonly create: InputMaybe<ReadonlyArray<ProductSaleCreateWithoutSizeInput>>;
};

export type ProductSaleCreateOrConnectWithoutProductInput = {
  readonly create: ProductSaleCreateWithoutProductInput;
  readonly where: ProductSaleWhereUniqueInput;
};

export type ProductSaleCreateOrConnectWithoutSizeInput = {
  readonly create: ProductSaleCreateWithoutSizeInput;
  readonly where: ProductSaleWhereUniqueInput;
};

export type ProductSaleCreateWithoutProductInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly quantity: Scalars['Int']['input'];
  readonly size: SizeCreateNestedOneWithoutProductSalesInput;
};

export type ProductSaleCreateWithoutSizeInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly product: ProductCreateNestedOneWithoutProductSalesInput;
  readonly quantity: Scalars['Int']['input'];
};

export type ProductSaleGroupBy = {
  readonly __typename?: 'ProductSaleGroupBy';
  readonly _avg: Maybe<ProductSaleAvgAggregate>;
  readonly _count: Maybe<ProductSaleCountAggregate>;
  readonly _max: Maybe<ProductSaleMaxAggregate>;
  readonly _min: Maybe<ProductSaleMinAggregate>;
  readonly _sum: Maybe<ProductSaleSumAggregate>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly sizeId: Scalars['String']['output'];
};

export type ProductSaleListRelationFilter = {
  readonly every: InputMaybe<ProductSaleWhereInput>;
  readonly none: InputMaybe<ProductSaleWhereInput>;
  readonly some: InputMaybe<ProductSaleWhereInput>;
};

export type ProductSaleMaxAggregate = {
  readonly __typename?: 'ProductSaleMaxAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly productId: Maybe<Scalars['String']['output']>;
  readonly quantity: Maybe<Scalars['Int']['output']>;
  readonly sizeId: Maybe<Scalars['String']['output']>;
};

export type ProductSaleMaxOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type ProductSaleMinAggregate = {
  readonly __typename?: 'ProductSaleMinAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly productId: Maybe<Scalars['String']['output']>;
  readonly quantity: Maybe<Scalars['Int']['output']>;
  readonly sizeId: Maybe<Scalars['String']['output']>;
};

export type ProductSaleMinOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type ProductSaleOrderByRelationAggregateInput = {
  readonly _count: InputMaybe<SortOrder>;
};

export type ProductSaleOrderByWithAggregationInput = {
  readonly _avg: InputMaybe<ProductSaleAvgOrderByAggregateInput>;
  readonly _count: InputMaybe<ProductSaleCountOrderByAggregateInput>;
  readonly _max: InputMaybe<ProductSaleMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<ProductSaleMinOrderByAggregateInput>;
  readonly _sum: InputMaybe<ProductSaleSumOrderByAggregateInput>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type ProductSaleOrderByWithRelationInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly product: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly size: InputMaybe<SizeOrderByWithRelationInput>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export enum ProductSaleScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  ProductId = 3,
  Quantity = 4,
  SizeId = 5,
}

export type ProductSaleScalarWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<ProductSaleScalarWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<ProductSaleScalarWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ProductSaleScalarWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly productId: InputMaybe<StringFilter>;
  readonly quantity: InputMaybe<IntFilter>;
  readonly sizeId: InputMaybe<StringFilter>;
};

export type ProductSaleScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<ProductSaleScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<ProductSaleScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ProductSaleScalarWhereWithAggregatesInput>>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly productId: InputMaybe<StringWithAggregatesFilter>;
  readonly quantity: InputMaybe<IntWithAggregatesFilter>;
  readonly sizeId: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductSaleSumAggregate = {
  readonly __typename?: 'ProductSaleSumAggregate';
  readonly quantity: Maybe<Scalars['Int']['output']>;
};

export type ProductSaleSumOrderByAggregateInput = {
  readonly quantity: InputMaybe<SortOrder>;
};

export type ProductSaleUpdateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly product: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
  readonly size: InputMaybe<SizeUpdateOneRequiredWithoutProductSalesNestedInput>;
};

export type ProductSaleUpdateManyMutationInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSaleUpdateManyWithWhereWithoutProductInput = {
  readonly data: ProductSaleUpdateManyMutationInput;
  readonly where: ProductSaleScalarWhereInput;
};

export type ProductSaleUpdateManyWithWhereWithoutSizeInput = {
  readonly data: ProductSaleUpdateManyMutationInput;
  readonly where: ProductSaleScalarWhereInput;
};

export type ProductSaleUpdateManyWithoutProductNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<ProductSaleCreateOrConnectWithoutProductInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<ProductSaleCreateWithoutProductInput>>;
  readonly delete: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<ProductSaleScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly update: InputMaybe<ReadonlyArray<ProductSaleUpdateWithWhereUniqueWithoutProductInput>>;
  readonly updateMany: InputMaybe<ReadonlyArray<ProductSaleUpdateManyWithWhereWithoutProductInput>>;
  readonly upsert: InputMaybe<ReadonlyArray<ProductSaleUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductSaleUpdateManyWithoutSizeNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<ReadonlyArray<ProductSaleCreateOrConnectWithoutSizeInput>>;
  readonly create: InputMaybe<ReadonlyArray<ProductSaleCreateWithoutSizeInput>>;
  readonly delete: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<ProductSaleScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<ProductSaleWhereUniqueInput>>;
  readonly update: InputMaybe<ReadonlyArray<ProductSaleUpdateWithWhereUniqueWithoutSizeInput>>;
  readonly updateMany: InputMaybe<ReadonlyArray<ProductSaleUpdateManyWithWhereWithoutSizeInput>>;
  readonly upsert: InputMaybe<ReadonlyArray<ProductSaleUpsertWithWhereUniqueWithoutSizeInput>>;
};

export type ProductSaleUpdateWithWhereUniqueWithoutProductInput = {
  readonly data: ProductSaleUpdateWithoutProductInput;
  readonly where: ProductSaleWhereUniqueInput;
};

export type ProductSaleUpdateWithWhereUniqueWithoutSizeInput = {
  readonly data: ProductSaleUpdateWithoutSizeInput;
  readonly where: ProductSaleWhereUniqueInput;
};

export type ProductSaleUpdateWithoutProductInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
  readonly size: InputMaybe<SizeUpdateOneRequiredWithoutProductSalesNestedInput>;
};

export type ProductSaleUpdateWithoutSizeInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly product: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSaleUpsertWithWhereUniqueWithoutProductInput = {
  readonly create: ProductSaleCreateWithoutProductInput;
  readonly update: ProductSaleUpdateWithoutProductInput;
  readonly where: ProductSaleWhereUniqueInput;
};

export type ProductSaleUpsertWithWhereUniqueWithoutSizeInput = {
  readonly create: ProductSaleCreateWithoutSizeInput;
  readonly update: ProductSaleUpdateWithoutSizeInput;
  readonly where: ProductSaleWhereUniqueInput;
};

export type ProductSaleWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<ProductSaleWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<ProductSaleWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ProductSaleWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly product: InputMaybe<ProductRelationFilter>;
  readonly productId: InputMaybe<StringFilter>;
  readonly quantity: InputMaybe<IntFilter>;
  readonly size: InputMaybe<SizeRelationFilter>;
  readonly sizeId: InputMaybe<StringFilter>;
};

export type ProductSaleWhereUniqueInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
};

export enum ProductScalarFieldEnum {
  Cost = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Id = 3,
  Name = 4,
  Rating = 5,
}

export type ProductScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<ProductScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<ProductScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ProductScalarWhereWithAggregatesInput>>;
  readonly cost: InputMaybe<FloatWithAggregatesFilter>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly name: InputMaybe<StringWithAggregatesFilter>;
  readonly rating: InputMaybe<FloatWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  readonly __typename?: 'ProductSumAggregate';
  readonly cost: Maybe<Scalars['Float']['output']>;
  readonly rating: Maybe<Scalars['Float']['output']>;
};

export type ProductSumOrderByAggregateInput = {
  readonly cost: InputMaybe<SortOrder>;
  readonly rating: InputMaybe<SortOrder>;
};

export type ProductTransaction = {
  readonly __typename?: 'ProductTransaction';
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly id: Scalars['String']['output'];
  readonly price: Scalars['Float']['output'];
  readonly product: Product;
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly size: Size;
  readonly sizeId: Scalars['String']['output'];
};

export type ProductTransactionAvgAggregate = {
  readonly __typename?: 'ProductTransactionAvgAggregate';
  readonly price: Maybe<Scalars['Float']['output']>;
  readonly quantity: Maybe<Scalars['Float']['output']>;
};

export type ProductTransactionAvgOrderByAggregateInput = {
  readonly price: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
};

export type ProductTransactionCountAggregate = {
  readonly __typename?: 'ProductTransactionCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly price: Scalars['Int']['output'];
  readonly productId: Scalars['Int']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly sizeId: Scalars['Int']['output'];
};

export type ProductTransactionCountOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly price: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type ProductTransactionCreateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['Float']['input'];
  readonly product: ProductCreateNestedOneWithoutProductTransactionsInput;
  readonly quantity: Scalars['Int']['input'];
  readonly size: SizeCreateNestedOneWithoutProductTransactionsInput;
};

export type ProductTransactionCreateNestedManyWithoutProductInput = {
  readonly connect: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<ProductTransactionCreateOrConnectWithoutProductInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<ProductTransactionCreateWithoutProductInput>>;
};

export type ProductTransactionCreateNestedManyWithoutSizeInput = {
  readonly connect: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<ProductTransactionCreateOrConnectWithoutSizeInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<ProductTransactionCreateWithoutSizeInput>>;
};

export type ProductTransactionCreateOrConnectWithoutProductInput = {
  readonly create: ProductTransactionCreateWithoutProductInput;
  readonly where: ProductTransactionWhereUniqueInput;
};

export type ProductTransactionCreateOrConnectWithoutSizeInput = {
  readonly create: ProductTransactionCreateWithoutSizeInput;
  readonly where: ProductTransactionWhereUniqueInput;
};

export type ProductTransactionCreateWithoutProductInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['Float']['input'];
  readonly quantity: Scalars['Int']['input'];
  readonly size: SizeCreateNestedOneWithoutProductTransactionsInput;
};

export type ProductTransactionCreateWithoutSizeInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['Float']['input'];
  readonly product: ProductCreateNestedOneWithoutProductTransactionsInput;
  readonly quantity: Scalars['Int']['input'];
};

export type ProductTransactionGroupBy = {
  readonly __typename?: 'ProductTransactionGroupBy';
  readonly _avg: Maybe<ProductTransactionAvgAggregate>;
  readonly _count: Maybe<ProductTransactionCountAggregate>;
  readonly _max: Maybe<ProductTransactionMaxAggregate>;
  readonly _min: Maybe<ProductTransactionMinAggregate>;
  readonly _sum: Maybe<ProductTransactionSumAggregate>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly id: Scalars['String']['output'];
  readonly price: Scalars['Float']['output'];
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly sizeId: Scalars['String']['output'];
};

export type ProductTransactionListRelationFilter = {
  readonly every: InputMaybe<ProductTransactionWhereInput>;
  readonly none: InputMaybe<ProductTransactionWhereInput>;
  readonly some: InputMaybe<ProductTransactionWhereInput>;
};

export type ProductTransactionMaxAggregate = {
  readonly __typename?: 'ProductTransactionMaxAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly price: Maybe<Scalars['Float']['output']>;
  readonly productId: Maybe<Scalars['String']['output']>;
  readonly quantity: Maybe<Scalars['Int']['output']>;
  readonly sizeId: Maybe<Scalars['String']['output']>;
};

export type ProductTransactionMaxOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly price: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type ProductTransactionMinAggregate = {
  readonly __typename?: 'ProductTransactionMinAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly price: Maybe<Scalars['Float']['output']>;
  readonly productId: Maybe<Scalars['String']['output']>;
  readonly quantity: Maybe<Scalars['Int']['output']>;
  readonly sizeId: Maybe<Scalars['String']['output']>;
};

export type ProductTransactionMinOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly price: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type ProductTransactionOrderByRelationAggregateInput = {
  readonly _count: InputMaybe<SortOrder>;
};

export type ProductTransactionOrderByWithAggregationInput = {
  readonly _avg: InputMaybe<ProductTransactionAvgOrderByAggregateInput>;
  readonly _count: InputMaybe<ProductTransactionCountOrderByAggregateInput>;
  readonly _max: InputMaybe<ProductTransactionMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<ProductTransactionMinOrderByAggregateInput>;
  readonly _sum: InputMaybe<ProductTransactionSumOrderByAggregateInput>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly price: InputMaybe<SortOrder>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export type ProductTransactionOrderByWithRelationInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly price: InputMaybe<SortOrder>;
  readonly product: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
  readonly size: InputMaybe<SizeOrderByWithRelationInput>;
  readonly sizeId: InputMaybe<SortOrder>;
};

export enum ProductTransactionScalarFieldEnum {
  DateCreated = 0,
  Id = 1,
  Price = 2,
  ProductId = 3,
  Quantity = 4,
  SizeId = 5,
}

export type ProductTransactionScalarWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<ProductTransactionScalarWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<ProductTransactionScalarWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ProductTransactionScalarWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly price: InputMaybe<FloatFilter>;
  readonly productId: InputMaybe<StringFilter>;
  readonly quantity: InputMaybe<IntFilter>;
  readonly sizeId: InputMaybe<StringFilter>;
};

export type ProductTransactionScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<ProductTransactionScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<ProductTransactionScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ProductTransactionScalarWhereWithAggregatesInput>>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly price: InputMaybe<FloatWithAggregatesFilter>;
  readonly productId: InputMaybe<StringWithAggregatesFilter>;
  readonly quantity: InputMaybe<IntWithAggregatesFilter>;
  readonly sizeId: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductTransactionSumAggregate = {
  readonly __typename?: 'ProductTransactionSumAggregate';
  readonly price: Maybe<Scalars['Float']['output']>;
  readonly quantity: Maybe<Scalars['Int']['output']>;
};

export type ProductTransactionSumOrderByAggregateInput = {
  readonly price: InputMaybe<SortOrder>;
  readonly quantity: InputMaybe<SortOrder>;
};

export type ProductTransactionUpdateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly price: InputMaybe<Scalars['Float']['input']>;
  readonly product: InputMaybe<ProductUpdateOneRequiredWithoutProductTransactionsNestedInput>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
  readonly size: InputMaybe<SizeUpdateOneRequiredWithoutProductTransactionsNestedInput>;
};

export type ProductTransactionUpdateManyMutationInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly price: InputMaybe<Scalars['Float']['input']>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
};

export type ProductTransactionUpdateManyWithWhereWithoutProductInput = {
  readonly data: ProductTransactionUpdateManyMutationInput;
  readonly where: ProductTransactionScalarWhereInput;
};

export type ProductTransactionUpdateManyWithWhereWithoutSizeInput = {
  readonly data: ProductTransactionUpdateManyMutationInput;
  readonly where: ProductTransactionScalarWhereInput;
};

export type ProductTransactionUpdateManyWithoutProductNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<ProductTransactionCreateOrConnectWithoutProductInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<ProductTransactionCreateWithoutProductInput>>;
  readonly delete: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<ProductTransactionScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly update: InputMaybe<
    ReadonlyArray<ProductTransactionUpdateWithWhereUniqueWithoutProductInput>
  >;
  readonly updateMany: InputMaybe<
    ReadonlyArray<ProductTransactionUpdateManyWithWhereWithoutProductInput>
  >;
  readonly upsert: InputMaybe<
    ReadonlyArray<ProductTransactionUpsertWithWhereUniqueWithoutProductInput>
  >;
};

export type ProductTransactionUpdateManyWithoutSizeNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<
    ReadonlyArray<ProductTransactionCreateOrConnectWithoutSizeInput>
  >;
  readonly create: InputMaybe<ReadonlyArray<ProductTransactionCreateWithoutSizeInput>>;
  readonly delete: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<ProductTransactionScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<ProductTransactionWhereUniqueInput>>;
  readonly update: InputMaybe<
    ReadonlyArray<ProductTransactionUpdateWithWhereUniqueWithoutSizeInput>
  >;
  readonly updateMany: InputMaybe<
    ReadonlyArray<ProductTransactionUpdateManyWithWhereWithoutSizeInput>
  >;
  readonly upsert: InputMaybe<
    ReadonlyArray<ProductTransactionUpsertWithWhereUniqueWithoutSizeInput>
  >;
};

export type ProductTransactionUpdateWithWhereUniqueWithoutProductInput = {
  readonly data: ProductTransactionUpdateWithoutProductInput;
  readonly where: ProductTransactionWhereUniqueInput;
};

export type ProductTransactionUpdateWithWhereUniqueWithoutSizeInput = {
  readonly data: ProductTransactionUpdateWithoutSizeInput;
  readonly where: ProductTransactionWhereUniqueInput;
};

export type ProductTransactionUpdateWithoutProductInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly price: InputMaybe<Scalars['Float']['input']>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
  readonly size: InputMaybe<SizeUpdateOneRequiredWithoutProductTransactionsNestedInput>;
};

export type ProductTransactionUpdateWithoutSizeInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly price: InputMaybe<Scalars['Float']['input']>;
  readonly product: InputMaybe<ProductUpdateOneRequiredWithoutProductTransactionsNestedInput>;
  readonly quantity: InputMaybe<Scalars['Int']['input']>;
};

export type ProductTransactionUpsertWithWhereUniqueWithoutProductInput = {
  readonly create: ProductTransactionCreateWithoutProductInput;
  readonly update: ProductTransactionUpdateWithoutProductInput;
  readonly where: ProductTransactionWhereUniqueInput;
};

export type ProductTransactionUpsertWithWhereUniqueWithoutSizeInput = {
  readonly create: ProductTransactionCreateWithoutSizeInput;
  readonly update: ProductTransactionUpdateWithoutSizeInput;
  readonly where: ProductTransactionWhereUniqueInput;
};

export type ProductTransactionWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<ProductTransactionWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<ProductTransactionWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ProductTransactionWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly price: InputMaybe<FloatFilter>;
  readonly product: InputMaybe<ProductRelationFilter>;
  readonly productId: InputMaybe<StringFilter>;
  readonly quantity: InputMaybe<IntFilter>;
  readonly size: InputMaybe<SizeRelationFilter>;
  readonly sizeId: InputMaybe<StringFilter>;
};

export type ProductTransactionWhereUniqueInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
};

export type ProductUpdateInput = {
  readonly cost: InputMaybe<Scalars['Float']['input']>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly productSales: InputMaybe<ProductSaleUpdateManyWithoutProductNestedInput>;
  readonly productTransactions: InputMaybe<ProductTransactionUpdateManyWithoutProductNestedInput>;
  readonly rating: InputMaybe<Scalars['Float']['input']>;
};

export type ProductUpdateManyMutationInput = {
  readonly cost: InputMaybe<Scalars['Float']['input']>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly rating: InputMaybe<Scalars['Float']['input']>;
};

export type ProductUpdateOneRequiredWithoutInventoryNestedInput = {
  readonly connect: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutInventoryInput>;
  readonly create: InputMaybe<ProductCreateWithoutInventoryInput>;
  readonly update: InputMaybe<ProductUpdateWithoutInventoryInput>;
  readonly upsert: InputMaybe<ProductUpsertWithoutInventoryInput>;
};

export type ProductUpdateOneRequiredWithoutProductSalesNestedInput = {
  readonly connect: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutProductSalesInput>;
  readonly create: InputMaybe<ProductCreateWithoutProductSalesInput>;
  readonly update: InputMaybe<ProductUpdateWithoutProductSalesInput>;
  readonly upsert: InputMaybe<ProductUpsertWithoutProductSalesInput>;
};

export type ProductUpdateOneRequiredWithoutProductTransactionsNestedInput = {
  readonly connect: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutProductTransactionsInput>;
  readonly create: InputMaybe<ProductCreateWithoutProductTransactionsInput>;
  readonly update: InputMaybe<ProductUpdateWithoutProductTransactionsInput>;
  readonly upsert: InputMaybe<ProductUpsertWithoutProductTransactionsInput>;
};

export type ProductUpdateWithoutInventoryInput = {
  readonly cost: InputMaybe<Scalars['Float']['input']>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly productSales: InputMaybe<ProductSaleUpdateManyWithoutProductNestedInput>;
  readonly productTransactions: InputMaybe<ProductTransactionUpdateManyWithoutProductNestedInput>;
  readonly rating: InputMaybe<Scalars['Float']['input']>;
};

export type ProductUpdateWithoutProductSalesInput = {
  readonly cost: InputMaybe<Scalars['Float']['input']>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly productTransactions: InputMaybe<ProductTransactionUpdateManyWithoutProductNestedInput>;
  readonly rating: InputMaybe<Scalars['Float']['input']>;
};

export type ProductUpdateWithoutProductTransactionsInput = {
  readonly cost: InputMaybe<Scalars['Float']['input']>;
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly productSales: InputMaybe<ProductSaleUpdateManyWithoutProductNestedInput>;
  readonly rating: InputMaybe<Scalars['Float']['input']>;
};

export type ProductUpsertWithoutInventoryInput = {
  readonly create: ProductCreateWithoutInventoryInput;
  readonly update: ProductUpdateWithoutInventoryInput;
};

export type ProductUpsertWithoutProductSalesInput = {
  readonly create: ProductCreateWithoutProductSalesInput;
  readonly update: ProductUpdateWithoutProductSalesInput;
};

export type ProductUpsertWithoutProductTransactionsInput = {
  readonly create: ProductCreateWithoutProductTransactionsInput;
  readonly update: ProductUpdateWithoutProductTransactionsInput;
};

export type ProductWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly cost: InputMaybe<FloatFilter>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly inventory: InputMaybe<InventoryListRelationFilter>;
  readonly name: InputMaybe<StringFilter>;
  readonly productSales: InputMaybe<ProductSaleListRelationFilter>;
  readonly productTransactions: InputMaybe<ProductTransactionListRelationFilter>;
  readonly rating: InputMaybe<FloatFilter>;
};

export type ProductWhereUniqueInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly aggregateCustomer: AggregateCustomer;
  readonly aggregateDepartment: AggregateDepartment;
  readonly aggregateEmployee: AggregateEmployee;
  readonly aggregateInventory: AggregateInventory;
  readonly aggregateLocationState: AggregateLocationState;
  readonly aggregateProduct: AggregateProduct;
  readonly aggregateProductSale: AggregateProductSale;
  readonly aggregateProductTransaction: AggregateProductTransaction;
  readonly aggregateRole: AggregateRole;
  readonly aggregateSize: AggregateSize;
  readonly aggregateUser: AggregateUser;
  readonly customer: Maybe<Customer>;
  readonly customers: ReadonlyArray<Customer>;
  readonly department: Maybe<Department>;
  readonly departments: ReadonlyArray<Department>;
  readonly employee: Maybe<Employee>;
  readonly employees: ReadonlyArray<Employee>;
  readonly findFirstCustomer: Maybe<Customer>;
  readonly findFirstCustomerOrThrow: Maybe<Customer>;
  readonly findFirstDepartment: Maybe<Department>;
  readonly findFirstDepartmentOrThrow: Maybe<Department>;
  readonly findFirstEmployee: Maybe<Employee>;
  readonly findFirstEmployeeOrThrow: Maybe<Employee>;
  readonly findFirstInventory: Maybe<Inventory>;
  readonly findFirstInventoryOrThrow: Maybe<Inventory>;
  readonly findFirstLocationState: Maybe<LocationState>;
  readonly findFirstLocationStateOrThrow: Maybe<LocationState>;
  readonly findFirstProduct: Maybe<Product>;
  readonly findFirstProductOrThrow: Maybe<Product>;
  readonly findFirstProductSale: Maybe<ProductSale>;
  readonly findFirstProductSaleOrThrow: Maybe<ProductSale>;
  readonly findFirstProductTransaction: Maybe<ProductTransaction>;
  readonly findFirstProductTransactionOrThrow: Maybe<ProductTransaction>;
  readonly findFirstRole: Maybe<Role>;
  readonly findFirstRoleOrThrow: Maybe<Role>;
  readonly findFirstSize: Maybe<Size>;
  readonly findFirstSizeOrThrow: Maybe<Size>;
  readonly findFirstUser: Maybe<User>;
  readonly findFirstUserOrThrow: Maybe<User>;
  readonly getCustomer: Maybe<Customer>;
  readonly getDepartment: Maybe<Department>;
  readonly getEmployee: Maybe<Employee>;
  readonly getInventory: Maybe<Inventory>;
  readonly getLocationState: Maybe<LocationState>;
  readonly getProduct: Maybe<Product>;
  readonly getProductSale: Maybe<ProductSale>;
  readonly getProductTransaction: Maybe<ProductTransaction>;
  readonly getRole: Maybe<Role>;
  readonly getSize: Maybe<Size>;
  readonly getUser: Maybe<User>;
  readonly groupByCustomer: ReadonlyArray<CustomerGroupBy>;
  readonly groupByDepartment: ReadonlyArray<DepartmentGroupBy>;
  readonly groupByEmployee: ReadonlyArray<EmployeeGroupBy>;
  readonly groupByInventory: ReadonlyArray<InventoryGroupBy>;
  readonly groupByLocationState: ReadonlyArray<LocationStateGroupBy>;
  readonly groupByProduct: ReadonlyArray<ProductGroupBy>;
  readonly groupByProductSale: ReadonlyArray<ProductSaleGroupBy>;
  readonly groupByProductTransaction: ReadonlyArray<ProductTransactionGroupBy>;
  readonly groupByRole: ReadonlyArray<RoleGroupBy>;
  readonly groupBySize: ReadonlyArray<SizeGroupBy>;
  readonly groupByUser: ReadonlyArray<UserGroupBy>;
  readonly inventories: ReadonlyArray<Inventory>;
  readonly inventory: Maybe<Inventory>;
  readonly locationState: Maybe<LocationState>;
  readonly locationStates: ReadonlyArray<LocationState>;
  readonly product: Maybe<Product>;
  readonly productSale: Maybe<ProductSale>;
  readonly productSales: ReadonlyArray<ProductSale>;
  readonly productTransaction: Maybe<ProductTransaction>;
  readonly productTransactionCountByProductId: Maybe<Scalars['String']['output']>;
  readonly productTransactions: ReadonlyArray<ProductTransaction>;
  readonly products: ReadonlyArray<Product>;
  readonly role: Maybe<Role>;
  readonly roles: ReadonlyArray<Role>;
  readonly size: Maybe<Size>;
  readonly sizes: ReadonlyArray<Size>;
  readonly user: Maybe<User>;
  readonly users: ReadonlyArray<User>;
};

export type QueryAggregateCustomerArgs = {
  cursor: InputMaybe<CustomerWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CustomerWhereInput>;
};

export type QueryAggregateDepartmentArgs = {
  cursor: InputMaybe<DepartmentWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<DepartmentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<DepartmentWhereInput>;
};

export type QueryAggregateEmployeeArgs = {
  cursor: InputMaybe<EmployeeWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<EmployeeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EmployeeWhereInput>;
};

export type QueryAggregateInventoryArgs = {
  cursor: InputMaybe<InventoryWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<InventoryWhereInput>;
};

export type QueryAggregateLocationStateArgs = {
  cursor: InputMaybe<LocationStateWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<LocationStateOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LocationStateWhereInput>;
};

export type QueryAggregateProductArgs = {
  cursor: InputMaybe<ProductWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductWhereInput>;
};

export type QueryAggregateProductSaleArgs = {
  cursor: InputMaybe<ProductSaleWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<ProductSaleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductSaleWhereInput>;
};

export type QueryAggregateProductTransactionArgs = {
  cursor: InputMaybe<ProductTransactionWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<ProductTransactionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductTransactionWhereInput>;
};

export type QueryAggregateRoleArgs = {
  cursor: InputMaybe<RoleWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<RoleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RoleWhereInput>;
};

export type QueryAggregateSizeArgs = {
  cursor: InputMaybe<SizeWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<SizeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SizeWhereInput>;
};

export type QueryAggregateUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  orderBy: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserWhereInput>;
};

export type QueryCustomerArgs = {
  where: CustomerWhereUniqueInput;
};

export type QueryCustomersArgs = {
  cursor: InputMaybe<CustomerWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CustomerWhereInput>;
};

export type QueryDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};

export type QueryDepartmentsArgs = {
  cursor: InputMaybe<DepartmentWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<DepartmentScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<DepartmentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<DepartmentWhereInput>;
};

export type QueryEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};

export type QueryEmployeesArgs = {
  cursor: InputMaybe<EmployeeWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<EmployeeScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<EmployeeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EmployeeWhereInput>;
};

export type QueryFindFirstCustomerArgs = {
  cursor: InputMaybe<CustomerWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CustomerWhereInput>;
};

export type QueryFindFirstCustomerOrThrowArgs = {
  cursor: InputMaybe<CustomerWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CustomerWhereInput>;
};

export type QueryFindFirstDepartmentArgs = {
  cursor: InputMaybe<DepartmentWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<DepartmentScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<DepartmentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<DepartmentWhereInput>;
};

export type QueryFindFirstDepartmentOrThrowArgs = {
  cursor: InputMaybe<DepartmentWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<DepartmentScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<DepartmentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<DepartmentWhereInput>;
};

export type QueryFindFirstEmployeeArgs = {
  cursor: InputMaybe<EmployeeWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<EmployeeScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<EmployeeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EmployeeWhereInput>;
};

export type QueryFindFirstEmployeeOrThrowArgs = {
  cursor: InputMaybe<EmployeeWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<EmployeeScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<EmployeeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EmployeeWhereInput>;
};

export type QueryFindFirstInventoryArgs = {
  cursor: InputMaybe<InventoryWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<InventoryScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<InventoryWhereInput>;
};

export type QueryFindFirstInventoryOrThrowArgs = {
  cursor: InputMaybe<InventoryWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<InventoryScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<InventoryWhereInput>;
};

export type QueryFindFirstLocationStateArgs = {
  cursor: InputMaybe<LocationStateWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<LocationStateScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<LocationStateOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LocationStateWhereInput>;
};

export type QueryFindFirstLocationStateOrThrowArgs = {
  cursor: InputMaybe<LocationStateWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<LocationStateScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<LocationStateOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LocationStateWhereInput>;
};

export type QueryFindFirstProductArgs = {
  cursor: InputMaybe<ProductWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductWhereInput>;
};

export type QueryFindFirstProductOrThrowArgs = {
  cursor: InputMaybe<ProductWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductWhereInput>;
};

export type QueryFindFirstProductSaleArgs = {
  cursor: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductSaleScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductSaleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductSaleWhereInput>;
};

export type QueryFindFirstProductSaleOrThrowArgs = {
  cursor: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductSaleScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductSaleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductSaleWhereInput>;
};

export type QueryFindFirstProductTransactionArgs = {
  cursor: InputMaybe<ProductTransactionWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductTransactionScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductTransactionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductTransactionWhereInput>;
};

export type QueryFindFirstProductTransactionOrThrowArgs = {
  cursor: InputMaybe<ProductTransactionWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductTransactionScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductTransactionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductTransactionWhereInput>;
};

export type QueryFindFirstRoleArgs = {
  cursor: InputMaybe<RoleWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<RoleScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<RoleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RoleWhereInput>;
};

export type QueryFindFirstRoleOrThrowArgs = {
  cursor: InputMaybe<RoleWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<RoleScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<RoleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RoleWhereInput>;
};

export type QueryFindFirstSizeArgs = {
  cursor: InputMaybe<SizeWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<SizeScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<SizeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SizeWhereInput>;
};

export type QueryFindFirstSizeOrThrowArgs = {
  cursor: InputMaybe<SizeWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<SizeScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<SizeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SizeWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstUserOrThrowArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserWhereInput>;
};

export type QueryGetCustomerArgs = {
  where: CustomerWhereUniqueInput;
};

export type QueryGetDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};

export type QueryGetEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};

export type QueryGetInventoryArgs = {
  where: InventoryWhereUniqueInput;
};

export type QueryGetLocationStateArgs = {
  where: LocationStateWhereUniqueInput;
};

export type QueryGetProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryGetProductSaleArgs = {
  where: ProductSaleWhereUniqueInput;
};

export type QueryGetProductTransactionArgs = {
  where: ProductTransactionWhereUniqueInput;
};

export type QueryGetRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type QueryGetSizeArgs = {
  where: SizeWhereUniqueInput;
};

export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryGroupByCustomerArgs = {
  by: ReadonlyArray<CustomerScalarFieldEnum>;
  having: InputMaybe<CustomerScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<CustomerOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CustomerWhereInput>;
};

export type QueryGroupByDepartmentArgs = {
  by: ReadonlyArray<DepartmentScalarFieldEnum>;
  having: InputMaybe<DepartmentScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<DepartmentOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<DepartmentWhereInput>;
};

export type QueryGroupByEmployeeArgs = {
  by: ReadonlyArray<EmployeeScalarFieldEnum>;
  having: InputMaybe<EmployeeScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<EmployeeOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EmployeeWhereInput>;
};

export type QueryGroupByInventoryArgs = {
  by: ReadonlyArray<InventoryScalarFieldEnum>;
  having: InputMaybe<InventoryScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<InventoryOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<InventoryWhereInput>;
};

export type QueryGroupByLocationStateArgs = {
  by: ReadonlyArray<LocationStateScalarFieldEnum>;
  having: InputMaybe<LocationStateScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<LocationStateOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LocationStateWhereInput>;
};

export type QueryGroupByProductArgs = {
  by: ReadonlyArray<ProductScalarFieldEnum>;
  having: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<ProductOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductWhereInput>;
};

export type QueryGroupByProductSaleArgs = {
  by: ReadonlyArray<ProductSaleScalarFieldEnum>;
  having: InputMaybe<ProductSaleScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<ProductSaleOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductSaleWhereInput>;
};

export type QueryGroupByProductTransactionArgs = {
  by: ReadonlyArray<ProductTransactionScalarFieldEnum>;
  having: InputMaybe<ProductTransactionScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<ProductTransactionOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductTransactionWhereInput>;
};

export type QueryGroupByRoleArgs = {
  by: ReadonlyArray<RoleScalarFieldEnum>;
  having: InputMaybe<RoleScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<RoleOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RoleWhereInput>;
};

export type QueryGroupBySizeArgs = {
  by: ReadonlyArray<SizeScalarFieldEnum>;
  having: InputMaybe<SizeScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<SizeOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SizeWhereInput>;
};

export type QueryGroupByUserArgs = {
  by: ReadonlyArray<UserScalarFieldEnum>;
  having: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<ReadonlyArray<UserOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserWhereInput>;
};

export type QueryInventoriesArgs = {
  cursor: InputMaybe<InventoryWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<InventoryScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<InventoryWhereInput>;
};

export type QueryInventoryArgs = {
  where: InventoryWhereUniqueInput;
};

export type QueryLocationStateArgs = {
  where: LocationStateWhereUniqueInput;
};

export type QueryLocationStatesArgs = {
  cursor: InputMaybe<LocationStateWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<LocationStateScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<LocationStateOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LocationStateWhereInput>;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryProductSaleArgs = {
  where: ProductSaleWhereUniqueInput;
};

export type QueryProductSalesArgs = {
  cursor: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductSaleScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductSaleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductSaleWhereInput>;
};

export type QueryProductTransactionArgs = {
  where: ProductTransactionWhereUniqueInput;
};

export type QueryProductTransactionCountByProductIdArgs = {
  productId: Scalars['String']['input'];
};

export type QueryProductTransactionsArgs = {
  cursor: InputMaybe<ProductTransactionWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductTransactionScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductTransactionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductTransactionWhereInput>;
};

export type QueryProductsArgs = {
  cursor: InputMaybe<ProductWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductWhereInput>;
};

export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type QueryRolesArgs = {
  cursor: InputMaybe<RoleWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<RoleScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<RoleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RoleWhereInput>;
};

export type QuerySizeArgs = {
  where: SizeWhereUniqueInput;
};

export type QuerySizesArgs = {
  cursor: InputMaybe<SizeWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<SizeScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<SizeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SizeWhereInput>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserWhereInput>;
};

export type Role = {
  readonly __typename?: 'Role';
  readonly _count: Maybe<RoleCount>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly users: ReadonlyArray<User>;
};

export type RoleUsersArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserWhereInput>;
};

export type RoleCount = {
  readonly __typename?: 'RoleCount';
  readonly users: Scalars['Int']['output'];
};

export type RoleCountAggregate = {
  readonly __typename?: 'RoleCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly description: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
};

export type RoleCountOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly description: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type RoleCreateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly description: Scalars['String']['input'];
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly users: InputMaybe<UserCreateNestedManyWithoutRoleInput>;
};

export type RoleCreateNestedOneWithoutUsersInput = {
  readonly connect: InputMaybe<RoleWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  readonly create: InputMaybe<RoleCreateWithoutUsersInput>;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  readonly create: RoleCreateWithoutUsersInput;
  readonly where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutUsersInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly description: Scalars['String']['input'];
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
};

export type RoleGroupBy = {
  readonly __typename?: 'RoleGroupBy';
  readonly _count: Maybe<RoleCountAggregate>;
  readonly _max: Maybe<RoleMaxAggregate>;
  readonly _min: Maybe<RoleMinAggregate>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type RoleMaxAggregate = {
  readonly __typename?: 'RoleMaxAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
};

export type RoleMaxOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly description: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type RoleMinAggregate = {
  readonly __typename?: 'RoleMinAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
};

export type RoleMinOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly description: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type RoleOrderByWithAggregationInput = {
  readonly _count: InputMaybe<RoleCountOrderByAggregateInput>;
  readonly _max: InputMaybe<RoleMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<RoleMinOrderByAggregateInput>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly description: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type RoleOrderByWithRelationInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly description: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
  readonly users: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type RoleRelationFilter = {
  readonly is: InputMaybe<RoleWhereInput>;
  readonly isNot: InputMaybe<RoleWhereInput>;
};

export enum RoleScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Description = 2,
  Id = 3,
  Name = 4,
}

export type RoleScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<RoleScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<RoleScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<RoleScalarWhereWithAggregatesInput>>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly description: InputMaybe<StringWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly name: InputMaybe<StringWithAggregatesFilter>;
};

export type RoleUpdateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<UserUpdateManyWithoutRoleNestedInput>;
};

export type RoleUpdateManyMutationInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
  readonly connect: InputMaybe<RoleWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  readonly create: InputMaybe<RoleCreateWithoutUsersInput>;
  readonly update: InputMaybe<RoleUpdateWithoutUsersInput>;
  readonly upsert: InputMaybe<RoleUpsertWithoutUsersInput>;
};

export type RoleUpdateWithoutUsersInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type RoleUpsertWithoutUsersInput = {
  readonly create: RoleCreateWithoutUsersInput;
  readonly update: RoleUpdateWithoutUsersInput;
};

export type RoleWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<RoleWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<RoleWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<RoleWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly description: InputMaybe<StringFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly name: InputMaybe<StringFilter>;
  readonly users: InputMaybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type Size = {
  readonly __typename?: 'Size';
  readonly _count: Maybe<SizeCount>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly inventory: ReadonlyArray<Inventory>;
  readonly name: Scalars['String']['output'];
  readonly productSales: ReadonlyArray<ProductSale>;
  readonly productTransactions: ReadonlyArray<ProductTransaction>;
};

export type SizeInventoryArgs = {
  cursor: InputMaybe<InventoryWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<InventoryScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<InventoryWhereInput>;
};

export type SizeProductSalesArgs = {
  cursor: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductSaleScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductSaleOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductSaleWhereInput>;
};

export type SizeProductTransactionsArgs = {
  cursor: InputMaybe<ProductTransactionWhereUniqueInput>;
  distinct: InputMaybe<ReadonlyArray<ProductTransactionScalarFieldEnum>>;
  orderBy: InputMaybe<ReadonlyArray<ProductTransactionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductTransactionWhereInput>;
};

export type SizeCount = {
  readonly __typename?: 'SizeCount';
  readonly inventory: Scalars['Int']['output'];
  readonly productSales: Scalars['Int']['output'];
  readonly productTransactions: Scalars['Int']['output'];
};

export type SizeCountAggregate = {
  readonly __typename?: 'SizeCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
};

export type SizeCountOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type SizeCreateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryCreateNestedManyWithoutSizeInput>;
  readonly name: Scalars['String']['input'];
  readonly productSales: InputMaybe<ProductSaleCreateNestedManyWithoutSizeInput>;
  readonly productTransactions: InputMaybe<ProductTransactionCreateNestedManyWithoutSizeInput>;
};

export type SizeCreateNestedOneWithoutInventoryInput = {
  readonly connect: InputMaybe<SizeWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<SizeCreateOrConnectWithoutInventoryInput>;
  readonly create: InputMaybe<SizeCreateWithoutInventoryInput>;
};

export type SizeCreateNestedOneWithoutProductSalesInput = {
  readonly connect: InputMaybe<SizeWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<SizeCreateOrConnectWithoutProductSalesInput>;
  readonly create: InputMaybe<SizeCreateWithoutProductSalesInput>;
};

export type SizeCreateNestedOneWithoutProductTransactionsInput = {
  readonly connect: InputMaybe<SizeWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<SizeCreateOrConnectWithoutProductTransactionsInput>;
  readonly create: InputMaybe<SizeCreateWithoutProductTransactionsInput>;
};

export type SizeCreateOrConnectWithoutInventoryInput = {
  readonly create: SizeCreateWithoutInventoryInput;
  readonly where: SizeWhereUniqueInput;
};

export type SizeCreateOrConnectWithoutProductSalesInput = {
  readonly create: SizeCreateWithoutProductSalesInput;
  readonly where: SizeWhereUniqueInput;
};

export type SizeCreateOrConnectWithoutProductTransactionsInput = {
  readonly create: SizeCreateWithoutProductTransactionsInput;
  readonly where: SizeWhereUniqueInput;
};

export type SizeCreateWithoutInventoryInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly productSales: InputMaybe<ProductSaleCreateNestedManyWithoutSizeInput>;
  readonly productTransactions: InputMaybe<ProductTransactionCreateNestedManyWithoutSizeInput>;
};

export type SizeCreateWithoutProductSalesInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryCreateNestedManyWithoutSizeInput>;
  readonly name: Scalars['String']['input'];
  readonly productTransactions: InputMaybe<ProductTransactionCreateNestedManyWithoutSizeInput>;
};

export type SizeCreateWithoutProductTransactionsInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryCreateNestedManyWithoutSizeInput>;
  readonly name: Scalars['String']['input'];
  readonly productSales: InputMaybe<ProductSaleCreateNestedManyWithoutSizeInput>;
};

export type SizeGroupBy = {
  readonly __typename?: 'SizeGroupBy';
  readonly _count: Maybe<SizeCountAggregate>;
  readonly _max: Maybe<SizeMaxAggregate>;
  readonly _min: Maybe<SizeMinAggregate>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type SizeMaxAggregate = {
  readonly __typename?: 'SizeMaxAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
};

export type SizeMaxOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type SizeMinAggregate = {
  readonly __typename?: 'SizeMinAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
};

export type SizeMinOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type SizeOrderByWithAggregationInput = {
  readonly _count: InputMaybe<SizeCountOrderByAggregateInput>;
  readonly _max: InputMaybe<SizeMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<SizeMinOrderByAggregateInput>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly name: InputMaybe<SortOrder>;
};

export type SizeOrderByWithRelationInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly inventory: InputMaybe<InventoryOrderByRelationAggregateInput>;
  readonly name: InputMaybe<SortOrder>;
  readonly productSales: InputMaybe<ProductSaleOrderByRelationAggregateInput>;
  readonly productTransactions: InputMaybe<ProductTransactionOrderByRelationAggregateInput>;
};

export type SizeRelationFilter = {
  readonly is: InputMaybe<SizeWhereInput>;
  readonly isNot: InputMaybe<SizeWhereInput>;
};

export enum SizeScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export type SizeScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<SizeScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<SizeScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<SizeScalarWhereWithAggregatesInput>>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly name: InputMaybe<StringWithAggregatesFilter>;
};

export type SizeUpdateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryUpdateManyWithoutSizeNestedInput>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly productSales: InputMaybe<ProductSaleUpdateManyWithoutSizeNestedInput>;
  readonly productTransactions: InputMaybe<ProductTransactionUpdateManyWithoutSizeNestedInput>;
};

export type SizeUpdateManyMutationInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type SizeUpdateOneRequiredWithoutInventoryNestedInput = {
  readonly connect: InputMaybe<SizeWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<SizeCreateOrConnectWithoutInventoryInput>;
  readonly create: InputMaybe<SizeCreateWithoutInventoryInput>;
  readonly update: InputMaybe<SizeUpdateWithoutInventoryInput>;
  readonly upsert: InputMaybe<SizeUpsertWithoutInventoryInput>;
};

export type SizeUpdateOneRequiredWithoutProductSalesNestedInput = {
  readonly connect: InputMaybe<SizeWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<SizeCreateOrConnectWithoutProductSalesInput>;
  readonly create: InputMaybe<SizeCreateWithoutProductSalesInput>;
  readonly update: InputMaybe<SizeUpdateWithoutProductSalesInput>;
  readonly upsert: InputMaybe<SizeUpsertWithoutProductSalesInput>;
};

export type SizeUpdateOneRequiredWithoutProductTransactionsNestedInput = {
  readonly connect: InputMaybe<SizeWhereUniqueInput>;
  readonly connectOrCreate: InputMaybe<SizeCreateOrConnectWithoutProductTransactionsInput>;
  readonly create: InputMaybe<SizeCreateWithoutProductTransactionsInput>;
  readonly update: InputMaybe<SizeUpdateWithoutProductTransactionsInput>;
  readonly upsert: InputMaybe<SizeUpsertWithoutProductTransactionsInput>;
};

export type SizeUpdateWithoutInventoryInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly productSales: InputMaybe<ProductSaleUpdateManyWithoutSizeNestedInput>;
  readonly productTransactions: InputMaybe<ProductTransactionUpdateManyWithoutSizeNestedInput>;
};

export type SizeUpdateWithoutProductSalesInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryUpdateManyWithoutSizeNestedInput>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly productTransactions: InputMaybe<ProductTransactionUpdateManyWithoutSizeNestedInput>;
};

export type SizeUpdateWithoutProductTransactionsInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly inventory: InputMaybe<InventoryUpdateManyWithoutSizeNestedInput>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly productSales: InputMaybe<ProductSaleUpdateManyWithoutSizeNestedInput>;
};

export type SizeUpsertWithoutInventoryInput = {
  readonly create: SizeCreateWithoutInventoryInput;
  readonly update: SizeUpdateWithoutInventoryInput;
};

export type SizeUpsertWithoutProductSalesInput = {
  readonly create: SizeCreateWithoutProductSalesInput;
  readonly update: SizeUpdateWithoutProductSalesInput;
};

export type SizeUpsertWithoutProductTransactionsInput = {
  readonly create: SizeCreateWithoutProductTransactionsInput;
  readonly update: SizeUpdateWithoutProductTransactionsInput;
};

export type SizeWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<SizeWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<SizeWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<SizeWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly inventory: InputMaybe<InventoryListRelationFilter>;
  readonly name: InputMaybe<StringFilter>;
  readonly productSales: InputMaybe<ProductSaleListRelationFilter>;
  readonly productTransactions: InputMaybe<ProductTransactionListRelationFilter>;
};

export type SizeWhereUniqueInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export enum SortOrder {
  Asc = 0,
  Desc = 1,
}

export type StringFilter = {
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<NestedStringFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<NestedStringNullableFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  readonly _count: InputMaybe<NestedIntNullableFilter>;
  readonly _max: InputMaybe<NestedStringNullableFilter>;
  readonly _min: InputMaybe<NestedStringNullableFilter>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  readonly _count: InputMaybe<NestedIntFilter>;
  readonly _max: InputMaybe<NestedStringFilter>;
  readonly _min: InputMaybe<NestedStringFilter>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<NestedStringWithAggregatesFilter>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  readonly __typename?: 'User';
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly role: Role;
  readonly roleId: Scalars['String']['output'];
  readonly userName: Scalars['String']['output'];
};

export type UserCountAggregate = {
  readonly __typename?: 'UserCountAggregate';
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly email: Scalars['Int']['output'];
  readonly firstName: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly lastName: Scalars['Int']['output'];
  readonly password: Scalars['Int']['output'];
  readonly roleId: Scalars['Int']['output'];
  readonly userName: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly password: InputMaybe<SortOrder>;
  readonly roleId: InputMaybe<SortOrder>;
  readonly userName: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly role: RoleCreateNestedOneWithoutUsersInput;
  readonly userName: Scalars['String']['input'];
};

export type UserCreateNestedManyWithoutRoleInput = {
  readonly connect: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<ReadonlyArray<UserCreateOrConnectWithoutRoleInput>>;
  readonly create: InputMaybe<ReadonlyArray<UserCreateWithoutRoleInput>>;
};

export type UserCreateOrConnectWithoutRoleInput = {
  readonly create: UserCreateWithoutRoleInput;
  readonly where: UserWhereUniqueInput;
};

export type UserCreateWithoutRoleInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly userName: Scalars['String']['input'];
};

export type UserGroupBy = {
  readonly __typename?: 'UserGroupBy';
  readonly _count: Maybe<UserCountAggregate>;
  readonly _max: Maybe<UserMaxAggregate>;
  readonly _min: Maybe<UserMinAggregate>;
  readonly dateCreated: Scalars['DateTime']['output'];
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly roleId: Scalars['String']['output'];
  readonly userName: Scalars['String']['output'];
};

export type UserListRelationFilter = {
  readonly every: InputMaybe<UserWhereInput>;
  readonly none: InputMaybe<UserWhereInput>;
  readonly some: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  readonly __typename?: 'UserMaxAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly firstName: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly lastName: Maybe<Scalars['String']['output']>;
  readonly password: Maybe<Scalars['String']['output']>;
  readonly roleId: Maybe<Scalars['String']['output']>;
  readonly userName: Maybe<Scalars['String']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly password: InputMaybe<SortOrder>;
  readonly roleId: InputMaybe<SortOrder>;
  readonly userName: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  readonly __typename?: 'UserMinAggregate';
  readonly dateCreated: Maybe<Scalars['DateTime']['output']>;
  readonly dateUpdated: Maybe<Scalars['DateTime']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly firstName: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly lastName: Maybe<Scalars['String']['output']>;
  readonly password: Maybe<Scalars['String']['output']>;
  readonly roleId: Maybe<Scalars['String']['output']>;
  readonly userName: Maybe<Scalars['String']['output']>;
};

export type UserMinOrderByAggregateInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly password: InputMaybe<SortOrder>;
  readonly roleId: InputMaybe<SortOrder>;
  readonly userName: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  readonly _count: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  readonly _count: InputMaybe<UserCountOrderByAggregateInput>;
  readonly _max: InputMaybe<UserMaxOrderByAggregateInput>;
  readonly _min: InputMaybe<UserMinOrderByAggregateInput>;
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly password: InputMaybe<SortOrder>;
  readonly roleId: InputMaybe<SortOrder>;
  readonly userName: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  readonly dateCreated: InputMaybe<SortOrder>;
  readonly dateUpdated: InputMaybe<SortOrder>;
  readonly email: InputMaybe<SortOrder>;
  readonly firstName: InputMaybe<SortOrder>;
  readonly id: InputMaybe<SortOrder>;
  readonly lastName: InputMaybe<SortOrder>;
  readonly password: InputMaybe<SortOrder>;
  readonly role: InputMaybe<RoleOrderByWithRelationInput>;
  readonly roleId: InputMaybe<SortOrder>;
  readonly userName: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Email = 2,
  FirstName = 3,
  Id = 4,
  LastName = 5,
  Password = 6,
  RoleId = 7,
  UserName = 8,
}

export type UserScalarWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly email: InputMaybe<StringFilter>;
  readonly firstName: InputMaybe<StringFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly lastName: InputMaybe<StringFilter>;
  readonly password: InputMaybe<StringFilter>;
  readonly roleId: InputMaybe<StringFilter>;
  readonly userName: InputMaybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  readonly AND: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly OR: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly dateCreated: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  readonly email: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName: InputMaybe<StringWithAggregatesFilter>;
  readonly id: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName: InputMaybe<StringWithAggregatesFilter>;
  readonly password: InputMaybe<StringWithAggregatesFilter>;
  readonly roleId: InputMaybe<StringWithAggregatesFilter>;
  readonly userName: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<RoleUpdateOneRequiredWithoutUsersNestedInput>;
  readonly userName: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyMutationInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly userName: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyWithWhereWithoutRoleInput = {
  readonly data: UserUpdateManyMutationInput;
  readonly where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutRoleNestedInput = {
  readonly connect: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly connectOrCreate: InputMaybe<ReadonlyArray<UserCreateOrConnectWithoutRoleInput>>;
  readonly create: InputMaybe<ReadonlyArray<UserCreateWithoutRoleInput>>;
  readonly delete: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly deleteMany: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly disconnect: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly set: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly update: InputMaybe<ReadonlyArray<UserUpdateWithWhereUniqueWithoutRoleInput>>;
  readonly updateMany: InputMaybe<ReadonlyArray<UserUpdateManyWithWhereWithoutRoleInput>>;
  readonly upsert: InputMaybe<ReadonlyArray<UserUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type UserUpdateWithWhereUniqueWithoutRoleInput = {
  readonly data: UserUpdateWithoutRoleInput;
  readonly where: UserWhereUniqueInput;
};

export type UserUpdateWithoutRoleInput = {
  readonly dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  readonly dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly userName: InputMaybe<Scalars['String']['input']>;
};

export type UserUpsertWithWhereUniqueWithoutRoleInput = {
  readonly create: UserCreateWithoutRoleInput;
  readonly update: UserUpdateWithoutRoleInput;
  readonly where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  readonly AND: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly dateCreated: InputMaybe<DateTimeFilter>;
  readonly dateUpdated: InputMaybe<DateTimeNullableFilter>;
  readonly email: InputMaybe<StringFilter>;
  readonly firstName: InputMaybe<StringFilter>;
  readonly id: InputMaybe<StringFilter>;
  readonly lastName: InputMaybe<StringFilter>;
  readonly password: InputMaybe<StringFilter>;
  readonly role: InputMaybe<RoleRelationFilter>;
  readonly roleId: InputMaybe<StringFilter>;
  readonly userName: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly userName: InputMaybe<Scalars['String']['input']>;
};

export type GetCustomersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCustomersQuery = {
  readonly __typename?: 'Query';
  readonly customers: ReadonlyArray<{
    readonly __typename?: 'Customer';
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly streetAddress: string;
    readonly city: string;
    readonly stateId: string;
    readonly zipCode: string;
  }>;
};

export type GetCustomerByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetCustomerByIdQuery = {
  readonly __typename?: 'Query';
  readonly customer:
    | {
        readonly __typename?: 'Customer';
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly phone: string;
        readonly streetAddress: string;
        readonly city: string;
        readonly stateId: string;
        readonly zipCode: string;
      }
    | undefined;
};

export type GetDepartmentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDepartmentsQuery = {
  readonly __typename?: 'Query';
  readonly departments: ReadonlyArray<{
    readonly __typename?: 'Department';
    readonly id: string;
    readonly name: string;
  }>;
};

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never }>;

export type GetEmployeesQuery = {
  readonly __typename?: 'Query';
  readonly employees: ReadonlyArray<{
    readonly __typename?: 'Employee';
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly gender: string;
    readonly phone: string;
    readonly streetAddress: string;
    readonly city: string;
    readonly stateId: string;
    readonly zipCode: string;
    readonly jobTitle: string;
    readonly departmentId: string;
    readonly imagePath: string | undefined;
    readonly dateStarted: any;
    readonly dateUpdated: any | undefined;
    readonly department: { readonly __typename?: 'Department'; readonly name: string };
  }>;
};

export type GetEmployeeByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetEmployeeByIdQuery = {
  readonly __typename?: 'Query';
  readonly employee:
    | {
        readonly __typename?: 'Employee';
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly gender: string;
        readonly phone: string;
        readonly streetAddress: string;
        readonly city: string;
        readonly stateId: string;
        readonly zipCode: string;
        readonly jobTitle: string;
        readonly departmentId: string;
        readonly imagePath: string | undefined;
        readonly dateStarted: any;
        readonly dateUpdated: any | undefined;
      }
    | undefined;
};

export type UpdateEmployeeMutationVariables = Exact<{
  id: Scalars['String']['input'];
  employee: EmployeeUpdateInput;
}>;

export type UpdateEmployeeMutation = {
  readonly __typename?: 'Mutation';
  readonly updateOneEmployee: { readonly __typename?: 'Employee'; readonly id: string } | undefined;
};

export type GetInventoryByProductIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetInventoryByProductIdQuery = {
  readonly __typename?: 'Query';
  readonly inventories: ReadonlyArray<{
    readonly __typename?: 'Inventory';
    readonly id: string;
    readonly productId: string;
    readonly quantity: number;
    readonly sizeId: string;
    readonly product: {
      readonly __typename?: 'Product';
      readonly id: string;
      readonly name: string;
      readonly cost: number;
      readonly rating: number;
    };
  }>;
};

export type GetInventoryBySizeQueryVariables = Exact<{
  sizeId: Scalars['String']['input'];
}>;

export type GetInventoryBySizeQuery = {
  readonly __typename?: 'Query';
  readonly inventories: ReadonlyArray<{
    readonly __typename?: 'Inventory';
    readonly id: string;
    readonly productId: string;
    readonly quantity: number;
    readonly sizeId: string;
    readonly product: {
      readonly __typename?: 'Product';
      readonly id: string;
      readonly name: string;
      readonly cost: number;
      readonly rating: number;
    };
  }>;
};

export type GetLocationStatesQueryVariables = Exact<{ [key: string]: never }>;

export type GetLocationStatesQuery = {
  readonly __typename?: 'Query';
  readonly locationStates: ReadonlyArray<{
    readonly __typename?: 'LocationState';
    readonly id: string;
    readonly name: string;
    readonly shortName: string;
  }>;
};

export type LoginMutationVariables = Exact<{
  userName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type LoginMutation = {
  readonly __typename?: 'Mutation';
  readonly login: string | undefined;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  readonly __typename?: 'Query';
  readonly products: ReadonlyArray<{
    readonly __typename?: 'Product';
    readonly id: string;
    readonly name: string;
    readonly cost: number;
    readonly rating: number;
  }>;
};

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetProductByIdQuery = {
  readonly __typename?: 'Query';
  readonly product:
    | {
        readonly __typename?: 'Product';
        readonly id: string;
        readonly name: string;
        readonly cost: number;
        readonly rating: number;
      }
    | undefined;
};

export type GetProductSalesQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductSalesQuery = {
  readonly __typename?: 'Query';
  readonly productSales: ReadonlyArray<{
    readonly __typename?: 'ProductSale';
    readonly id: string;
    readonly quantity: number;
    readonly product: {
      readonly __typename?: 'Product';
      readonly id: string;
      readonly name: string;
    };
    readonly size: { readonly __typename?: 'Size'; readonly id: string; readonly name: string };
  }>;
};

export type GetTopProductSalesByProductIdQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;

export type GetTopProductSalesByProductIdQuery = {
  readonly __typename?: 'Query';
  readonly productSales: ReadonlyArray<{
    readonly __typename?: 'ProductSale';
    readonly id: string;
    readonly quantity: number;
    readonly product: {
      readonly __typename?: 'Product';
      readonly id: string;
      readonly name: string;
    };
    readonly size: { readonly __typename?: 'Size'; readonly id: string; readonly name: string };
  }>;
};

export type GetProductTransactionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductTransactionsQuery = {
  readonly __typename?: 'Query';
  readonly productTransactions: ReadonlyArray<{
    readonly __typename?: 'ProductTransaction';
    readonly id: string;
    readonly productId: string;
    readonly sizeId: string;
    readonly quantity: number;
    readonly price: number;
    readonly dateCreated: any;
  }>;
};

export type GetProductTransactionsByProductIdQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
}>;

export type GetProductTransactionsByProductIdQuery = {
  readonly __typename?: 'Query';
  readonly productTransactions: ReadonlyArray<{
    readonly __typename?: 'ProductTransaction';
    readonly id: string;
    readonly productId: string;
    readonly sizeId: string;
    readonly quantity: number;
    readonly price: number;
    readonly dateCreated: any;
    readonly product: { readonly __typename?: 'Product'; readonly name: string };
    readonly size: { readonly __typename?: 'Size'; readonly name: string };
  }>;
};

export type GetProductTransactionsCountByProductIdQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;

export type GetProductTransactionsCountByProductIdQuery = {
  readonly __typename?: 'Query';
  readonly productTransactionCountByProductId: string | undefined;
};

export type GetProductTransactionsByProductIdAndDateRangeQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
  fromDate: Scalars['DateTime']['input'];
  toDate: Scalars['DateTime']['input'];
}>;

export type GetProductTransactionsByProductIdAndDateRangeQuery = {
  readonly __typename?: 'Query';
  readonly productTransactions: ReadonlyArray<{
    readonly __typename?: 'ProductTransaction';
    readonly id: string;
    readonly productId: string;
    readonly sizeId: string;
    readonly quantity: number;
    readonly price: number;
    readonly dateCreated: any;
  }>;
};

export type GetSizesQueryVariables = Exact<{ [key: string]: never }>;

export type GetSizesQuery = {
  readonly __typename?: 'Query';
  readonly sizes: ReadonlyArray<{
    readonly __typename?: 'Size';
    readonly id: string;
    readonly name: string;
  }>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  readonly __typename?: 'Query';
  readonly users: ReadonlyArray<{
    readonly __typename?: 'User';
    readonly id: string;
    readonly userName: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
  }>;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetUserByIdQuery = {
  readonly __typename?: 'Query';
  readonly user:
    | {
        readonly __typename?: 'User';
        readonly id: string;
        readonly userName: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
      }
    | undefined;
};

export type GetUserByUserNameQueryVariables = Exact<{
  userName: Scalars['String']['input'];
}>;

export type GetUserByUserNameQuery = {
  readonly __typename?: 'Query';
  readonly user:
    | {
        readonly __typename?: 'User';
        readonly id: string;
        readonly userName: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
      }
    | undefined;
};

export type CustomerPartsFragment = {
  readonly __typename?: 'Customer';
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly streetAddress: string;
  readonly city: string;
  readonly stateId: string;
  readonly zipCode: string;
};

export type EmployeePartsFragment = {
  readonly __typename?: 'Employee';
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly gender: string;
  readonly phone: string;
  readonly streetAddress: string;
  readonly city: string;
  readonly stateId: string;
  readonly zipCode: string;
  readonly jobTitle: string;
  readonly departmentId: string;
  readonly imagePath: string | undefined;
  readonly dateStarted: any;
  readonly dateUpdated: any | undefined;
};

export type InventoryPartsFragment = {
  readonly __typename?: 'Inventory';
  readonly id: string;
  readonly productId: string;
  readonly quantity: number;
  readonly sizeId: string;
};

export type ProductPartsFragment = {
  readonly __typename?: 'Product';
  readonly id: string;
  readonly name: string;
  readonly cost: number;
  readonly rating: number;
};

export type ProductSalePartsFragment = {
  readonly __typename?: 'ProductSale';
  readonly id: string;
  readonly quantity: number;
  readonly product: { readonly __typename?: 'Product'; readonly id: string; readonly name: string };
  readonly size: { readonly __typename?: 'Size'; readonly id: string; readonly name: string };
};

export type ProductTransactionPartsFragment = {
  readonly __typename?: 'ProductTransaction';
  readonly id: string;
  readonly productId: string;
  readonly sizeId: string;
  readonly quantity: number;
  readonly price: number;
  readonly dateCreated: any;
};

export type UserPartsFragment = {
  readonly __typename?: 'User';
  readonly id: string;
  readonly userName: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
};

export const CustomerPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CustomerPartsFragment, unknown>;
export const EmployeePartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmployeeParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Employee' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jobTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'departmentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'imagePath' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateStarted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EmployeePartsFragment, unknown>;
export const InventoryPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'InventoryParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Inventory' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeId' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<InventoryPartsFragment, unknown>;
export const ProductPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductPartsFragment, unknown>;
export const ProductSalePartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductSaleParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductSale' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'size' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductSalePartsFragment, unknown>;
export const ProductTransactionPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductTransactionParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductTransaction' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductTransactionPartsFragment, unknown>;
export const UserPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserPartsFragment, unknown>;
export const GetCustomersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCustomers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetCustomerByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCustomerById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>;
export const GetDepartmentsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetDepartments' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'departments' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetDepartmentsQuery, GetDepartmentsQueryVariables>;
export const GetEmployeesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEmployees' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employees' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'EmployeeParts' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'department' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmployeeParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Employee' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jobTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'departmentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'imagePath' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateStarted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEmployeesQuery, GetEmployeesQueryVariables>;
export const GetEmployeeByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEmployeeById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employee' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'EmployeeParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmployeeParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Employee' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jobTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'departmentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'imagePath' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateStarted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>;
export const UpdateEmployeeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateEmployee' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'employee' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'EmployeeUpdateInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateOneEmployee' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'employee' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>;
export const GetInventoryByProductIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetInventoryByProductId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'inventories' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'productId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'InventoryParts' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'InventoryParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Inventory' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetInventoryByProductIdQuery, GetInventoryByProductIdQueryVariables>;
export const GetInventoryBySizeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetInventoryBySize' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sizeId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'inventories' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sizeId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'sizeId' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'InventoryParts' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'InventoryParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Inventory' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeId' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetInventoryBySizeQuery, GetInventoryBySizeQueryVariables>;
export const GetLocationStatesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetLocationStates' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locationStates' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shortName' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationStatesQuery, GetLocationStatesQueryVariables>;
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userName' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userName' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userName' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetProductsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProducts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'products' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProductById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetProductSalesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProductSales' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productSales' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'quantity' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductSaleParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductSaleParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductSale' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'size' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductSalesQuery, GetProductSalesQueryVariables>;
export const GetTopProductSalesByProductIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTopProductSalesByProductId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'productId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productSales' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'productId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'productId' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'quantity' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductSaleParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductSaleParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductSale' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'size' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTopProductSalesByProductIdQuery,
  GetTopProductSalesByProductIdQueryVariables
>;
export const GetProductTransactionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProductTransactions' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productTransactions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProductTransactionParts' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductTransactionParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductTransaction' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductTransactionsQuery, GetProductTransactionsQueryVariables>;
export const GetProductTransactionsByProductIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProductTransactionsByProductId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'productId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productTransactions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'productId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'productId' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProductTransactionParts' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'size' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductTransactionParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductTransaction' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProductTransactionsByProductIdQuery,
  GetProductTransactionsByProductIdQueryVariables
>;
export const GetProductTransactionsCountByProductIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProductTransactionsCountByProductId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'productId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productTransactionCountByProductId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'productId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'productId' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProductTransactionsCountByProductIdQuery,
  GetProductTransactionsCountByProductIdQueryVariables
>;
export const GetProductTransactionsByProductIdAndDateRangeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProductTransactionsByProductIdAndDateRange' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'productId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'fromDate' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'toDate' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productTransactions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'productId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'productId' } },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'dateCreated' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'gte' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'fromDate' } },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'lte' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'toDate' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProductTransactionParts' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductTransactionParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductTransaction' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProductTransactionsByProductIdAndDateRangeQuery,
  GetProductTransactionsByProductIdAndDateRangeQueryVariables
>;
export const GetSizesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSizes' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sizes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSizesQuery, GetSizesQueryVariables>;
export const GetUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUsers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserParts' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUserById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserParts' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUserByUserNameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUserByUserName' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userName' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userName' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'userName' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserParts' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>;
