import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
}

export interface AffectedRowsOutput {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
}

export interface AggregateCustomer {
  __typename?: 'AggregateCustomer';
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
}

export interface AggregateDepartment {
  __typename?: 'AggregateDepartment';
  _count?: Maybe<DepartmentCountAggregate>;
  _max?: Maybe<DepartmentMaxAggregate>;
  _min?: Maybe<DepartmentMinAggregate>;
}

export interface AggregateEmployee {
  __typename?: 'AggregateEmployee';
  _count?: Maybe<EmployeeCountAggregate>;
  _max?: Maybe<EmployeeMaxAggregate>;
  _min?: Maybe<EmployeeMinAggregate>;
}

export interface AggregateInventory {
  __typename?: 'AggregateInventory';
  _avg?: Maybe<InventoryAvgAggregate>;
  _count?: Maybe<InventoryCountAggregate>;
  _max?: Maybe<InventoryMaxAggregate>;
  _min?: Maybe<InventoryMinAggregate>;
  _sum?: Maybe<InventorySumAggregate>;
}

export interface AggregateProduct {
  __typename?: 'AggregateProduct';
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
}

export interface AggregateProductSale {
  __typename?: 'AggregateProductSale';
  _avg?: Maybe<ProductSaleAvgAggregate>;
  _count?: Maybe<ProductSaleCountAggregate>;
  _max?: Maybe<ProductSaleMaxAggregate>;
  _min?: Maybe<ProductSaleMinAggregate>;
  _sum?: Maybe<ProductSaleSumAggregate>;
}

export interface AggregateRole {
  __typename?: 'AggregateRole';
  _count?: Maybe<RoleCountAggregate>;
  _max?: Maybe<RoleMaxAggregate>;
  _min?: Maybe<RoleMinAggregate>;
}

export interface AggregateSize {
  __typename?: 'AggregateSize';
  _count?: Maybe<SizeCountAggregate>;
  _max?: Maybe<SizeMaxAggregate>;
  _min?: Maybe<SizeMinAggregate>;
}

export interface AggregateUser {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
}

export interface Customer {
  __typename?: 'Customer';
  city: Scalars['String'];
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
}

export interface CustomerCountAggregate {
  __typename?: 'CustomerCountAggregate';
  _all: Scalars['Int'];
  city: Scalars['Int'];
  dateCreated: Scalars['Int'];
  dateUpdated: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  phone: Scalars['Int'];
  state: Scalars['Int'];
  streetAddress: Scalars['Int'];
  zipCode: Scalars['Int'];
}

export interface CustomerCountOrderByAggregateInput {
  city?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export interface CustomerCreateInput {
  city: Scalars['String'];
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
}

export interface CustomerGroupBy {
  __typename?: 'CustomerGroupBy';
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
  city: Scalars['String'];
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
}

export interface CustomerMaxAggregate {
  __typename?: 'CustomerMaxAggregate';
  city?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
}

export interface CustomerMaxOrderByAggregateInput {
  city?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export interface CustomerMinAggregate {
  __typename?: 'CustomerMinAggregate';
  city?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
}

export interface CustomerMinOrderByAggregateInput {
  city?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export interface CustomerOrderByWithAggregationInput {
  _count?: InputMaybe<CustomerCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomerMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomerMinOrderByAggregateInput>;
  city?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export interface CustomerOrderByWithRelationInput {
  city?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export enum CustomerScalarFieldEnum {
  City = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Email = 3,
  FirstName = 4,
  Id = 5,
  LastName = 6,
  Phone = 7,
  State = 8,
  StreetAddress = 9,
  ZipCode = 10,
}

export interface CustomerScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  state?: InputMaybe<StringWithAggregatesFilter>;
  streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  zipCode?: InputMaybe<StringWithAggregatesFilter>;
}

export interface CustomerUpdateInput {
  city?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
}

export interface CustomerUpdateManyMutationInput {
  city?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
}

export interface CustomerWhereInput {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  city?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  streetAddress?: InputMaybe<StringFilter>;
  zipCode?: InputMaybe<StringFilter>;
}

export interface CustomerWhereUniqueInput {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
}

export interface DateTimeFilter {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface DateTimeNullableFilter {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface DateTimeNullableWithAggregatesFilter {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface DateTimeWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface Department {
  __typename?: 'Department';
  _count?: Maybe<DepartmentCount>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  employees: Array<Employee>;
  id: Scalars['String'];
  name: Scalars['String'];
}

export interface DepartmentEmployeesArgs {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployeeWhereInput>;
}

export interface DepartmentCount {
  __typename?: 'DepartmentCount';
  employees: Scalars['Int'];
}

export interface DepartmentCountAggregate {
  __typename?: 'DepartmentCountAggregate';
  _all: Scalars['Int'];
  dateCreated: Scalars['Int'];
  dateUpdated: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
}

export interface DepartmentCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface DepartmentCreateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  employees?: InputMaybe<EmployeeCreateNestedManyWithoutDepartmentInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}

export interface DepartmentCreateNestedOneWithoutEmployeesInput {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutEmployeesInput>;
  create?: InputMaybe<DepartmentCreateWithoutEmployeesInput>;
}

export interface DepartmentCreateOrConnectWithoutEmployeesInput {
  create: DepartmentCreateWithoutEmployeesInput;
  where: DepartmentWhereUniqueInput;
}

export interface DepartmentCreateWithoutEmployeesInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}

export interface DepartmentGroupBy {
  __typename?: 'DepartmentGroupBy';
  _count?: Maybe<DepartmentCountAggregate>;
  _max?: Maybe<DepartmentMaxAggregate>;
  _min?: Maybe<DepartmentMinAggregate>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
}

export interface DepartmentMaxAggregate {
  __typename?: 'DepartmentMaxAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface DepartmentMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface DepartmentMinAggregate {
  __typename?: 'DepartmentMinAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface DepartmentMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface DepartmentOrderByWithAggregationInput {
  _count?: InputMaybe<DepartmentCountOrderByAggregateInput>;
  _max?: InputMaybe<DepartmentMaxOrderByAggregateInput>;
  _min?: InputMaybe<DepartmentMinOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface DepartmentOrderByWithRelationInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  employees?: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface DepartmentRelationFilter {
  is?: InputMaybe<DepartmentWhereInput>;
  isNot?: InputMaybe<DepartmentWhereInput>;
}

export enum DepartmentScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export interface DepartmentScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<DepartmentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DepartmentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DepartmentScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
}

export interface DepartmentUpdateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  employees?: InputMaybe<EmployeeUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface DepartmentUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface DepartmentUpdateOneRequiredWithoutEmployeesNestedInput {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutEmployeesInput>;
  create?: InputMaybe<DepartmentCreateWithoutEmployeesInput>;
  update?: InputMaybe<DepartmentUpdateWithoutEmployeesInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutEmployeesInput>;
}

export interface DepartmentUpdateWithoutEmployeesInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface DepartmentUpsertWithoutEmployeesInput {
  create: DepartmentCreateWithoutEmployeesInput;
  update: DepartmentUpdateWithoutEmployeesInput;
}

export interface DepartmentWhereInput {
  AND?: InputMaybe<Array<DepartmentWhereInput>>;
  NOT?: InputMaybe<Array<DepartmentWhereInput>>;
  OR?: InputMaybe<Array<DepartmentWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  employees?: InputMaybe<EmployeeListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
}

export interface DepartmentWhereUniqueInput {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface Employee {
  __typename?: 'Employee';
  city: Scalars['String'];
  dateStarted: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  department: Department;
  departmentId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
}

export interface EmployeeCountAggregate {
  __typename?: 'EmployeeCountAggregate';
  _all: Scalars['Int'];
  city: Scalars['Int'];
  dateStarted: Scalars['Int'];
  dateUpdated: Scalars['Int'];
  departmentId: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  jobTitle: Scalars['Int'];
  lastName: Scalars['Int'];
  phone: Scalars['Int'];
  state: Scalars['Int'];
  streetAddress: Scalars['Int'];
  zipCode: Scalars['Int'];
}

export interface EmployeeCountOrderByAggregateInput {
  city?: InputMaybe<SortOrder>;
  dateStarted?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  departmentId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export interface EmployeeCreateInput {
  city: Scalars['String'];
  dateStarted?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  department: DepartmentCreateNestedOneWithoutEmployeesInput;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
}

export interface EmployeeCreateNestedManyWithoutDepartmentInput {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutDepartmentInput>>;
}

export interface EmployeeCreateOrConnectWithoutDepartmentInput {
  create: EmployeeCreateWithoutDepartmentInput;
  where: EmployeeWhereUniqueInput;
}

export interface EmployeeCreateWithoutDepartmentInput {
  city: Scalars['String'];
  dateStarted?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
}

export interface EmployeeGroupBy {
  __typename?: 'EmployeeGroupBy';
  _count?: Maybe<EmployeeCountAggregate>;
  _max?: Maybe<EmployeeMaxAggregate>;
  _min?: Maybe<EmployeeMinAggregate>;
  city: Scalars['String'];
  dateStarted: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  departmentId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
}

export interface EmployeeListRelationFilter {
  every?: InputMaybe<EmployeeWhereInput>;
  none?: InputMaybe<EmployeeWhereInput>;
  some?: InputMaybe<EmployeeWhereInput>;
}

export interface EmployeeMaxAggregate {
  __typename?: 'EmployeeMaxAggregate';
  city?: Maybe<Scalars['String']>;
  dateStarted?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  departmentId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
}

export interface EmployeeMaxOrderByAggregateInput {
  city?: InputMaybe<SortOrder>;
  dateStarted?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  departmentId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export interface EmployeeMinAggregate {
  __typename?: 'EmployeeMinAggregate';
  city?: Maybe<Scalars['String']>;
  dateStarted?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  departmentId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
}

export interface EmployeeMinOrderByAggregateInput {
  city?: InputMaybe<SortOrder>;
  dateStarted?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  departmentId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export interface EmployeeOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface EmployeeOrderByWithAggregationInput {
  _count?: InputMaybe<EmployeeCountOrderByAggregateInput>;
  _max?: InputMaybe<EmployeeMaxOrderByAggregateInput>;
  _min?: InputMaybe<EmployeeMinOrderByAggregateInput>;
  city?: InputMaybe<SortOrder>;
  dateStarted?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  departmentId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export interface EmployeeOrderByWithRelationInput {
  city?: InputMaybe<SortOrder>;
  dateStarted?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  department?: InputMaybe<DepartmentOrderByWithRelationInput>;
  departmentId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
}

export enum EmployeeScalarFieldEnum {
  City = 0,
  DateStarted = 1,
  DateUpdated = 2,
  DepartmentId = 3,
  Email = 4,
  FirstName = 5,
  Gender = 6,
  Id = 7,
  JobTitle = 8,
  LastName = 9,
  Phone = 10,
  State = 11,
  StreetAddress = 12,
  ZipCode = 13,
}

export interface EmployeeScalarWhereInput {
  AND?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  OR?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  city?: InputMaybe<StringFilter>;
  dateStarted?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  departmentId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  streetAddress?: InputMaybe<StringFilter>;
  zipCode?: InputMaybe<StringFilter>;
}

export interface EmployeeScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<EmployeeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EmployeeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EmployeeScalarWhereWithAggregatesInput>>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  dateStarted?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  departmentId?: InputMaybe<StringWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  gender?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  jobTitle?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  state?: InputMaybe<StringWithAggregatesFilter>;
  streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  zipCode?: InputMaybe<StringWithAggregatesFilter>;
}

export interface EmployeeUpdateInput {
  city?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutEmployeesNestedInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
}

export interface EmployeeUpdateManyMutationInput {
  city?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
}

export interface EmployeeUpdateManyWithWhereWithoutDepartmentInput {
  data: EmployeeUpdateManyMutationInput;
  where: EmployeeScalarWhereInput;
}

export interface EmployeeUpdateManyWithoutDepartmentNestedInput {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutDepartmentInput>>;
  delete?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<EmployeeUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<EmployeeUpsertWithWhereUniqueWithoutDepartmentInput>>;
}

export interface EmployeeUpdateWithWhereUniqueWithoutDepartmentInput {
  data: EmployeeUpdateWithoutDepartmentInput;
  where: EmployeeWhereUniqueInput;
}

export interface EmployeeUpdateWithoutDepartmentInput {
  city?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
}

export interface EmployeeUpsertWithWhereUniqueWithoutDepartmentInput {
  create: EmployeeCreateWithoutDepartmentInput;
  update: EmployeeUpdateWithoutDepartmentInput;
  where: EmployeeWhereUniqueInput;
}

export interface EmployeeWhereInput {
  AND?: InputMaybe<Array<EmployeeWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWhereInput>>;
  city?: InputMaybe<StringFilter>;
  dateStarted?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  department?: InputMaybe<DepartmentRelationFilter>;
  departmentId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  streetAddress?: InputMaybe<StringFilter>;
  zipCode?: InputMaybe<StringFilter>;
}

export interface EmployeeWhereUniqueInput {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
}

export interface IntFilter {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
}

export interface IntWithAggregatesFilter {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
}

export interface Inventory {
  __typename?: 'Inventory';
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  product: Product;
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  size: Size;
  sizeId: Scalars['String'];
}

export interface InventoryAvgAggregate {
  __typename?: 'InventoryAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
}

export interface InventoryAvgOrderByAggregateInput {
  quantity?: InputMaybe<SortOrder>;
}

export interface InventoryCountAggregate {
  __typename?: 'InventoryCountAggregate';
  _all: Scalars['Int'];
  dateCreated: Scalars['Int'];
  dateUpdated: Scalars['Int'];
  id: Scalars['Int'];
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  sizeId: Scalars['Int'];
}

export interface InventoryCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sizeId?: InputMaybe<SortOrder>;
}

export interface InventoryCreateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutInventoryInput;
  quantity: Scalars['Int'];
  size: SizeCreateNestedOneWithoutInventoryInput;
}

export interface InventoryCreateNestedManyWithoutProductInput {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutProductInput>>;
}

export interface InventoryCreateNestedManyWithoutSizeInput {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutSizeInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutSizeInput>>;
}

export interface InventoryCreateOrConnectWithoutProductInput {
  create: InventoryCreateWithoutProductInput;
  where: InventoryWhereUniqueInput;
}

export interface InventoryCreateOrConnectWithoutSizeInput {
  create: InventoryCreateWithoutSizeInput;
  where: InventoryWhereUniqueInput;
}

export interface InventoryCreateWithoutProductInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Int'];
  size: SizeCreateNestedOneWithoutInventoryInput;
}

export interface InventoryCreateWithoutSizeInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutInventoryInput;
  quantity: Scalars['Int'];
}

export interface InventoryGroupBy {
  __typename?: 'InventoryGroupBy';
  _avg?: Maybe<InventoryAvgAggregate>;
  _count?: Maybe<InventoryCountAggregate>;
  _max?: Maybe<InventoryMaxAggregate>;
  _min?: Maybe<InventoryMinAggregate>;
  _sum?: Maybe<InventorySumAggregate>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  sizeId: Scalars['String'];
}

export interface InventoryListRelationFilter {
  every?: InputMaybe<InventoryWhereInput>;
  none?: InputMaybe<InventoryWhereInput>;
  some?: InputMaybe<InventoryWhereInput>;
}

export interface InventoryMaxAggregate {
  __typename?: 'InventoryMaxAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  sizeId?: Maybe<Scalars['String']>;
}

export interface InventoryMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sizeId?: InputMaybe<SortOrder>;
}

export interface InventoryMinAggregate {
  __typename?: 'InventoryMinAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  sizeId?: Maybe<Scalars['String']>;
}

export interface InventoryMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sizeId?: InputMaybe<SortOrder>;
}

export interface InventoryOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface InventoryOrderByWithAggregationInput {
  _avg?: InputMaybe<InventoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<InventoryCountOrderByAggregateInput>;
  _max?: InputMaybe<InventoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<InventoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<InventorySumOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sizeId?: InputMaybe<SortOrder>;
}

export interface InventoryOrderByWithRelationInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  size?: InputMaybe<SizeOrderByWithRelationInput>;
  sizeId?: InputMaybe<SortOrder>;
}

export enum InventoryScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  ProductId = 3,
  Quantity = 4,
  SizeId = 5,
}

export interface InventoryScalarWhereInput {
  AND?: InputMaybe<Array<InventoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<InventoryScalarWhereInput>>;
  OR?: InputMaybe<Array<InventoryScalarWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  sizeId?: InputMaybe<StringFilter>;
}

export interface InventoryScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  quantity?: InputMaybe<IntWithAggregatesFilter>;
  sizeId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface InventorySumAggregate {
  __typename?: 'InventorySumAggregate';
  quantity?: Maybe<Scalars['Int']>;
}

export interface InventorySumOrderByAggregateInput {
  quantity?: InputMaybe<SortOrder>;
}

export interface InventoryUpdateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutInventoryNestedInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<SizeUpdateOneRequiredWithoutInventoryNestedInput>;
}

export interface InventoryUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
}

export interface InventoryUpdateManyWithWhereWithoutProductInput {
  data: InventoryUpdateManyMutationInput;
  where: InventoryScalarWhereInput;
}

export interface InventoryUpdateManyWithWhereWithoutSizeInput {
  data: InventoryUpdateManyMutationInput;
  where: InventoryScalarWhereInput;
}

export interface InventoryUpdateManyWithoutProductNestedInput {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutProductInput>>;
  delete?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InventoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  set?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  update?: InputMaybe<Array<InventoryUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<InventoryUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<InventoryUpsertWithWhereUniqueWithoutProductInput>>;
}

export interface InventoryUpdateManyWithoutSizeNestedInput {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutSizeInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutSizeInput>>;
  delete?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InventoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  set?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  update?: InputMaybe<Array<InventoryUpdateWithWhereUniqueWithoutSizeInput>>;
  updateMany?: InputMaybe<Array<InventoryUpdateManyWithWhereWithoutSizeInput>>;
  upsert?: InputMaybe<Array<InventoryUpsertWithWhereUniqueWithoutSizeInput>>;
}

export interface InventoryUpdateWithWhereUniqueWithoutProductInput {
  data: InventoryUpdateWithoutProductInput;
  where: InventoryWhereUniqueInput;
}

export interface InventoryUpdateWithWhereUniqueWithoutSizeInput {
  data: InventoryUpdateWithoutSizeInput;
  where: InventoryWhereUniqueInput;
}

export interface InventoryUpdateWithoutProductInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<SizeUpdateOneRequiredWithoutInventoryNestedInput>;
}

export interface InventoryUpdateWithoutSizeInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutInventoryNestedInput>;
  quantity?: InputMaybe<Scalars['Int']>;
}

export interface InventoryUpsertWithWhereUniqueWithoutProductInput {
  create: InventoryCreateWithoutProductInput;
  update: InventoryUpdateWithoutProductInput;
  where: InventoryWhereUniqueInput;
}

export interface InventoryUpsertWithWhereUniqueWithoutSizeInput {
  create: InventoryCreateWithoutSizeInput;
  update: InventoryUpdateWithoutSizeInput;
  where: InventoryWhereUniqueInput;
}

export interface InventoryWhereInput {
  AND?: InputMaybe<Array<InventoryWhereInput>>;
  NOT?: InputMaybe<Array<InventoryWhereInput>>;
  OR?: InputMaybe<Array<InventoryWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  size?: InputMaybe<SizeRelationFilter>;
  sizeId?: InputMaybe<StringFilter>;
}

export interface InventoryWhereUniqueInput {
  id?: InputMaybe<Scalars['String']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createOneCustomer: Customer;
  createOneDepartment: Department;
  createOneEmployee: Employee;
  createOneInventory: Inventory;
  createOneProduct: Product;
  createOneProductSale: ProductSale;
  createOneRole: Role;
  createOneSize: Size;
  createOneUser: User;
  deleteManyCustomer: AffectedRowsOutput;
  deleteManyDepartment: AffectedRowsOutput;
  deleteManyEmployee: AffectedRowsOutput;
  deleteManyInventory: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteManyProductSale: AffectedRowsOutput;
  deleteManyRole: AffectedRowsOutput;
  deleteManySize: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneCustomer?: Maybe<Customer>;
  deleteOneDepartment?: Maybe<Department>;
  deleteOneEmployee?: Maybe<Employee>;
  deleteOneInventory?: Maybe<Inventory>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneProductSale?: Maybe<ProductSale>;
  deleteOneRole?: Maybe<Role>;
  deleteOneSize?: Maybe<Size>;
  deleteOneUser?: Maybe<User>;
  updateManyCustomer: AffectedRowsOutput;
  updateManyDepartment: AffectedRowsOutput;
  updateManyEmployee: AffectedRowsOutput;
  updateManyInventory: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateManyProductSale: AffectedRowsOutput;
  updateManyRole: AffectedRowsOutput;
  updateManySize: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneCustomer?: Maybe<Customer>;
  updateOneDepartment?: Maybe<Department>;
  updateOneEmployee?: Maybe<Employee>;
  updateOneInventory?: Maybe<Inventory>;
  updateOneProduct?: Maybe<Product>;
  updateOneProductSale?: Maybe<ProductSale>;
  updateOneRole?: Maybe<Role>;
  updateOneSize?: Maybe<Size>;
  updateOneUser?: Maybe<User>;
  upsertOneCustomer: Customer;
  upsertOneDepartment: Department;
  upsertOneEmployee: Employee;
  upsertOneInventory: Inventory;
  upsertOneProduct: Product;
  upsertOneProductSale: ProductSale;
  upsertOneRole: Role;
  upsertOneSize: Size;
  upsertOneUser: User;
}

export interface MutationCreateOneCustomerArgs {
  data: CustomerCreateInput;
}

export interface MutationCreateOneDepartmentArgs {
  data: DepartmentCreateInput;
}

export interface MutationCreateOneEmployeeArgs {
  data: EmployeeCreateInput;
}

export interface MutationCreateOneInventoryArgs {
  data: InventoryCreateInput;
}

export interface MutationCreateOneProductArgs {
  data: ProductCreateInput;
}

export interface MutationCreateOneProductSaleArgs {
  data: ProductSaleCreateInput;
}

export interface MutationCreateOneRoleArgs {
  data: RoleCreateInput;
}

export interface MutationCreateOneSizeArgs {
  data: SizeCreateInput;
}

export interface MutationCreateOneUserArgs {
  data: UserCreateInput;
}

export interface MutationDeleteManyCustomerArgs {
  where?: InputMaybe<CustomerWhereInput>;
}

export interface MutationDeleteManyDepartmentArgs {
  where?: InputMaybe<DepartmentWhereInput>;
}

export interface MutationDeleteManyEmployeeArgs {
  where?: InputMaybe<EmployeeWhereInput>;
}

export interface MutationDeleteManyInventoryArgs {
  where?: InputMaybe<InventoryWhereInput>;
}

export interface MutationDeleteManyProductArgs {
  where?: InputMaybe<ProductWhereInput>;
}

export interface MutationDeleteManyProductSaleArgs {
  where?: InputMaybe<ProductSaleWhereInput>;
}

export interface MutationDeleteManyRoleArgs {
  where?: InputMaybe<RoleWhereInput>;
}

export interface MutationDeleteManySizeArgs {
  where?: InputMaybe<SizeWhereInput>;
}

export interface MutationDeleteManyUserArgs {
  where?: InputMaybe<UserWhereInput>;
}

export interface MutationDeleteOneCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface MutationDeleteOneDepartmentArgs {
  where: DepartmentWhereUniqueInput;
}

export interface MutationDeleteOneEmployeeArgs {
  where: EmployeeWhereUniqueInput;
}

export interface MutationDeleteOneInventoryArgs {
  where: InventoryWhereUniqueInput;
}

export interface MutationDeleteOneProductArgs {
  where: ProductWhereUniqueInput;
}

export interface MutationDeleteOneProductSaleArgs {
  where: ProductSaleWhereUniqueInput;
}

export interface MutationDeleteOneRoleArgs {
  where: RoleWhereUniqueInput;
}

export interface MutationDeleteOneSizeArgs {
  where: SizeWhereUniqueInput;
}

export interface MutationDeleteOneUserArgs {
  where: UserWhereUniqueInput;
}

export interface MutationUpdateManyCustomerArgs {
  data: CustomerUpdateManyMutationInput;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface MutationUpdateManyDepartmentArgs {
  data: DepartmentUpdateManyMutationInput;
  where?: InputMaybe<DepartmentWhereInput>;
}

export interface MutationUpdateManyEmployeeArgs {
  data: EmployeeUpdateManyMutationInput;
  where?: InputMaybe<EmployeeWhereInput>;
}

export interface MutationUpdateManyInventoryArgs {
  data: InventoryUpdateManyMutationInput;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface MutationUpdateManyProductArgs {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
}

export interface MutationUpdateManyProductSaleArgs {
  data: ProductSaleUpdateManyMutationInput;
  where?: InputMaybe<ProductSaleWhereInput>;
}

export interface MutationUpdateManyRoleArgs {
  data: RoleUpdateManyMutationInput;
  where?: InputMaybe<RoleWhereInput>;
}

export interface MutationUpdateManySizeArgs {
  data: SizeUpdateManyMutationInput;
  where?: InputMaybe<SizeWhereInput>;
}

export interface MutationUpdateManyUserArgs {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
}

export interface MutationUpdateOneCustomerArgs {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
}

export interface MutationUpdateOneDepartmentArgs {
  data: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
}

export interface MutationUpdateOneEmployeeArgs {
  data: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
}

export interface MutationUpdateOneInventoryArgs {
  data: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
}

export interface MutationUpdateOneProductArgs {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
}

export interface MutationUpdateOneProductSaleArgs {
  data: ProductSaleUpdateInput;
  where: ProductSaleWhereUniqueInput;
}

export interface MutationUpdateOneRoleArgs {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
}

export interface MutationUpdateOneSizeArgs {
  data: SizeUpdateInput;
  where: SizeWhereUniqueInput;
}

export interface MutationUpdateOneUserArgs {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface MutationUpsertOneCustomerArgs {
  create: CustomerCreateInput;
  update: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
}

export interface MutationUpsertOneDepartmentArgs {
  create: DepartmentCreateInput;
  update: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
}

export interface MutationUpsertOneEmployeeArgs {
  create: EmployeeCreateInput;
  update: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
}

export interface MutationUpsertOneInventoryArgs {
  create: InventoryCreateInput;
  update: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
}

export interface MutationUpsertOneProductArgs {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
}

export interface MutationUpsertOneProductSaleArgs {
  create: ProductSaleCreateInput;
  update: ProductSaleUpdateInput;
  where: ProductSaleWhereUniqueInput;
}

export interface MutationUpsertOneRoleArgs {
  create: RoleCreateInput;
  update: RoleUpdateInput;
  where: RoleWhereUniqueInput;
}

export interface MutationUpsertOneSizeArgs {
  create: SizeCreateInput;
  update: SizeUpdateInput;
  where: SizeWhereUniqueInput;
}

export interface MutationUpsertOneUserArgs {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface NestedDateTimeFilter {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface NestedDateTimeNullableFilter {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface NestedDateTimeNullableWithAggregatesFilter {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface NestedDateTimeWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface NestedFloatFilter {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
}

export interface NestedIntFilter {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
}

export interface NestedIntNullableFilter {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
}

export interface NestedIntWithAggregatesFilter {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
}

export interface NestedStringFilter {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
}

export interface NestedStringWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
}

export interface Product {
  __typename?: 'Product';
  _count?: Maybe<ProductCount>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  inventory: Array<Inventory>;
  name: Scalars['String'];
  productSale: Array<ProductSale>;
}

export interface ProductInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface ProductProductSaleArgs {
  cursor?: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSaleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSaleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSaleWhereInput>;
}

export interface ProductCount {
  __typename?: 'ProductCount';
  inventory: Scalars['Int'];
  productSale: Scalars['Int'];
}

export interface ProductCountAggregate {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int'];
  dateCreated: Scalars['Int'];
  dateUpdated: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
}

export interface ProductCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface ProductCreateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  name: Scalars['String'];
  productSale?: InputMaybe<ProductSaleCreateNestedManyWithoutProductInput>;
}

export interface ProductCreateNestedOneWithoutInventoryInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<ProductCreateWithoutInventoryInput>;
}

export interface ProductCreateNestedOneWithoutProductSaleInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductSaleInput>;
  create?: InputMaybe<ProductCreateWithoutProductSaleInput>;
}

export interface ProductCreateOrConnectWithoutInventoryInput {
  create: ProductCreateWithoutInventoryInput;
  where: ProductWhereUniqueInput;
}

export interface ProductCreateOrConnectWithoutProductSaleInput {
  create: ProductCreateWithoutProductSaleInput;
  where: ProductWhereUniqueInput;
}

export interface ProductCreateWithoutInventoryInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  productSale?: InputMaybe<ProductSaleCreateNestedManyWithoutProductInput>;
}

export interface ProductCreateWithoutProductSaleInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  name: Scalars['String'];
}

export interface ProductGroupBy {
  __typename?: 'ProductGroupBy';
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
}

export interface ProductMaxAggregate {
  __typename?: 'ProductMaxAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface ProductMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface ProductMinAggregate {
  __typename?: 'ProductMinAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface ProductMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface ProductOrderByWithAggregationInput {
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface ProductOrderByWithRelationInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inventory?: InputMaybe<InventoryOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  productSale?: InputMaybe<ProductSaleOrderByRelationAggregateInput>;
}

export interface ProductRelationFilter {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
}

export interface ProductSale {
  __typename?: 'ProductSale';
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  product: Product;
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  size: Size;
  sizeId: Scalars['String'];
}

export interface ProductSaleAvgAggregate {
  __typename?: 'ProductSaleAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
}

export interface ProductSaleAvgOrderByAggregateInput {
  quantity?: InputMaybe<SortOrder>;
}

export interface ProductSaleCountAggregate {
  __typename?: 'ProductSaleCountAggregate';
  _all: Scalars['Int'];
  dateCreated: Scalars['Int'];
  dateUpdated: Scalars['Int'];
  id: Scalars['Int'];
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  sizeId: Scalars['Int'];
}

export interface ProductSaleCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sizeId?: InputMaybe<SortOrder>;
}

export interface ProductSaleCreateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutProductSaleInput;
  quantity: Scalars['Int'];
  size: SizeCreateNestedOneWithoutProductSaleInput;
}

export interface ProductSaleCreateNestedManyWithoutProductInput {
  connect?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductSaleCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductSaleCreateWithoutProductInput>>;
}

export interface ProductSaleCreateNestedManyWithoutSizeInput {
  connect?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductSaleCreateOrConnectWithoutSizeInput>>;
  create?: InputMaybe<Array<ProductSaleCreateWithoutSizeInput>>;
}

export interface ProductSaleCreateOrConnectWithoutProductInput {
  create: ProductSaleCreateWithoutProductInput;
  where: ProductSaleWhereUniqueInput;
}

export interface ProductSaleCreateOrConnectWithoutSizeInput {
  create: ProductSaleCreateWithoutSizeInput;
  where: ProductSaleWhereUniqueInput;
}

export interface ProductSaleCreateWithoutProductInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Int'];
  size: SizeCreateNestedOneWithoutProductSaleInput;
}

export interface ProductSaleCreateWithoutSizeInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutProductSaleInput;
  quantity: Scalars['Int'];
}

export interface ProductSaleGroupBy {
  __typename?: 'ProductSaleGroupBy';
  _avg?: Maybe<ProductSaleAvgAggregate>;
  _count?: Maybe<ProductSaleCountAggregate>;
  _max?: Maybe<ProductSaleMaxAggregate>;
  _min?: Maybe<ProductSaleMinAggregate>;
  _sum?: Maybe<ProductSaleSumAggregate>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  sizeId: Scalars['String'];
}

export interface ProductSaleListRelationFilter {
  every?: InputMaybe<ProductSaleWhereInput>;
  none?: InputMaybe<ProductSaleWhereInput>;
  some?: InputMaybe<ProductSaleWhereInput>;
}

export interface ProductSaleMaxAggregate {
  __typename?: 'ProductSaleMaxAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  sizeId?: Maybe<Scalars['String']>;
}

export interface ProductSaleMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sizeId?: InputMaybe<SortOrder>;
}

export interface ProductSaleMinAggregate {
  __typename?: 'ProductSaleMinAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  sizeId?: Maybe<Scalars['String']>;
}

export interface ProductSaleMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sizeId?: InputMaybe<SortOrder>;
}

export interface ProductSaleOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface ProductSaleOrderByWithAggregationInput {
  _avg?: InputMaybe<ProductSaleAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductSaleCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductSaleMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductSaleMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSaleSumOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sizeId?: InputMaybe<SortOrder>;
}

export interface ProductSaleOrderByWithRelationInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  size?: InputMaybe<SizeOrderByWithRelationInput>;
  sizeId?: InputMaybe<SortOrder>;
}

export enum ProductSaleScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  ProductId = 3,
  Quantity = 4,
  SizeId = 5,
}

export interface ProductSaleScalarWhereInput {
  AND?: InputMaybe<Array<ProductSaleScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductSaleScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductSaleScalarWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  sizeId?: InputMaybe<StringFilter>;
}

export interface ProductSaleScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<ProductSaleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductSaleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductSaleScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  quantity?: InputMaybe<IntWithAggregatesFilter>;
  sizeId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ProductSaleSumAggregate {
  __typename?: 'ProductSaleSumAggregate';
  quantity?: Maybe<Scalars['Int']>;
}

export interface ProductSaleSumOrderByAggregateInput {
  quantity?: InputMaybe<SortOrder>;
}

export interface ProductSaleUpdateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSaleNestedInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<SizeUpdateOneRequiredWithoutProductSaleNestedInput>;
}

export interface ProductSaleUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
}

export interface ProductSaleUpdateManyWithWhereWithoutProductInput {
  data: ProductSaleUpdateManyMutationInput;
  where: ProductSaleScalarWhereInput;
}

export interface ProductSaleUpdateManyWithWhereWithoutSizeInput {
  data: ProductSaleUpdateManyMutationInput;
  where: ProductSaleScalarWhereInput;
}

export interface ProductSaleUpdateManyWithoutProductNestedInput {
  connect?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductSaleCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductSaleCreateWithoutProductInput>>;
  delete?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductSaleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductSaleUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductSaleUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductSaleUpsertWithWhereUniqueWithoutProductInput>>;
}

export interface ProductSaleUpdateManyWithoutSizeNestedInput {
  connect?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductSaleCreateOrConnectWithoutSizeInput>>;
  create?: InputMaybe<Array<ProductSaleCreateWithoutSizeInput>>;
  delete?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductSaleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductSaleWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductSaleUpdateWithWhereUniqueWithoutSizeInput>>;
  updateMany?: InputMaybe<Array<ProductSaleUpdateManyWithWhereWithoutSizeInput>>;
  upsert?: InputMaybe<Array<ProductSaleUpsertWithWhereUniqueWithoutSizeInput>>;
}

export interface ProductSaleUpdateWithWhereUniqueWithoutProductInput {
  data: ProductSaleUpdateWithoutProductInput;
  where: ProductSaleWhereUniqueInput;
}

export interface ProductSaleUpdateWithWhereUniqueWithoutSizeInput {
  data: ProductSaleUpdateWithoutSizeInput;
  where: ProductSaleWhereUniqueInput;
}

export interface ProductSaleUpdateWithoutProductInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<SizeUpdateOneRequiredWithoutProductSaleNestedInput>;
}

export interface ProductSaleUpdateWithoutSizeInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSaleNestedInput>;
  quantity?: InputMaybe<Scalars['Int']>;
}

export interface ProductSaleUpsertWithWhereUniqueWithoutProductInput {
  create: ProductSaleCreateWithoutProductInput;
  update: ProductSaleUpdateWithoutProductInput;
  where: ProductSaleWhereUniqueInput;
}

export interface ProductSaleUpsertWithWhereUniqueWithoutSizeInput {
  create: ProductSaleCreateWithoutSizeInput;
  update: ProductSaleUpdateWithoutSizeInput;
  where: ProductSaleWhereUniqueInput;
}

export interface ProductSaleWhereInput {
  AND?: InputMaybe<Array<ProductSaleWhereInput>>;
  NOT?: InputMaybe<Array<ProductSaleWhereInput>>;
  OR?: InputMaybe<Array<ProductSaleWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  size?: InputMaybe<SizeRelationFilter>;
  sizeId?: InputMaybe<StringFilter>;
}

export interface ProductSaleWhereUniqueInput {
  id?: InputMaybe<Scalars['String']>;
}

export enum ProductScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export interface ProductScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ProductUpdateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<Scalars['String']>;
  productSale?: InputMaybe<ProductSaleUpdateManyWithoutProductNestedInput>;
}

export interface ProductUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface ProductUpdateOneRequiredWithoutInventoryNestedInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<ProductCreateWithoutInventoryInput>;
  update?: InputMaybe<ProductUpdateWithoutInventoryInput>;
  upsert?: InputMaybe<ProductUpsertWithoutInventoryInput>;
}

export interface ProductUpdateOneRequiredWithoutProductSaleNestedInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductSaleInput>;
  create?: InputMaybe<ProductCreateWithoutProductSaleInput>;
  update?: InputMaybe<ProductUpdateWithoutProductSaleInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductSaleInput>;
}

export interface ProductUpdateWithoutInventoryInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  productSale?: InputMaybe<ProductSaleUpdateManyWithoutProductNestedInput>;
}

export interface ProductUpdateWithoutProductSaleInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<Scalars['String']>;
}

export interface ProductUpsertWithoutInventoryInput {
  create: ProductCreateWithoutInventoryInput;
  update: ProductUpdateWithoutInventoryInput;
}

export interface ProductUpsertWithoutProductSaleInput {
  create: ProductCreateWithoutProductSaleInput;
  update: ProductUpdateWithoutProductSaleInput;
}

export interface ProductWhereInput {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  inventory?: InputMaybe<InventoryListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  productSale?: InputMaybe<ProductSaleListRelationFilter>;
}

export interface ProductWhereUniqueInput {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  aggregateCustomer: AggregateCustomer;
  aggregateDepartment: AggregateDepartment;
  aggregateEmployee: AggregateEmployee;
  aggregateInventory: AggregateInventory;
  aggregateProduct: AggregateProduct;
  aggregateProductSale: AggregateProductSale;
  aggregateRole: AggregateRole;
  aggregateSize: AggregateSize;
  aggregateUser: AggregateUser;
  customer?: Maybe<Customer>;
  customers: Array<Customer>;
  department?: Maybe<Department>;
  departments: Array<Department>;
  employee?: Maybe<Employee>;
  employees: Array<Employee>;
  findFirstCustomer?: Maybe<Customer>;
  findFirstCustomerOrThrow?: Maybe<Customer>;
  findFirstDepartment?: Maybe<Department>;
  findFirstDepartmentOrThrow?: Maybe<Department>;
  findFirstEmployee?: Maybe<Employee>;
  findFirstEmployeeOrThrow?: Maybe<Employee>;
  findFirstInventory?: Maybe<Inventory>;
  findFirstInventoryOrThrow?: Maybe<Inventory>;
  findFirstProduct?: Maybe<Product>;
  findFirstProductOrThrow?: Maybe<Product>;
  findFirstProductSale?: Maybe<ProductSale>;
  findFirstProductSaleOrThrow?: Maybe<ProductSale>;
  findFirstRole?: Maybe<Role>;
  findFirstRoleOrThrow?: Maybe<Role>;
  findFirstSize?: Maybe<Size>;
  findFirstSizeOrThrow?: Maybe<Size>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  getCustomer?: Maybe<Customer>;
  getDepartment?: Maybe<Department>;
  getEmployee?: Maybe<Employee>;
  getInventory?: Maybe<Inventory>;
  getProduct?: Maybe<Product>;
  getProductSale?: Maybe<ProductSale>;
  getRole?: Maybe<Role>;
  getSize?: Maybe<Size>;
  getUser?: Maybe<User>;
  groupByCustomer: Array<CustomerGroupBy>;
  groupByDepartment: Array<DepartmentGroupBy>;
  groupByEmployee: Array<EmployeeGroupBy>;
  groupByInventory: Array<InventoryGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  groupByProductSale: Array<ProductSaleGroupBy>;
  groupByRole: Array<RoleGroupBy>;
  groupBySize: Array<SizeGroupBy>;
  groupByUser: Array<UserGroupBy>;
  inventories: Array<Inventory>;
  inventory?: Maybe<Inventory>;
  login?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  productSale?: Maybe<ProductSale>;
  productSales: Array<ProductSale>;
  products: Array<Product>;
  role?: Maybe<Role>;
  roles: Array<Role>;
  size?: Maybe<Size>;
  sizes: Array<Size>;
  user?: Maybe<User>;
  users: Array<User>;
}

export interface QueryAggregateCustomerArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryAggregateDepartmentArgs {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
}

export interface QueryAggregateEmployeeArgs {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployeeWhereInput>;
}

export interface QueryAggregateInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryAggregateProductArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryAggregateProductSaleArgs {
  cursor?: InputMaybe<ProductSaleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductSaleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSaleWhereInput>;
}

export interface QueryAggregateRoleArgs {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
}

export interface QueryAggregateSizeArgs {
  cursor?: InputMaybe<SizeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SizeWhereInput>;
}

export interface QueryAggregateUserArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface QueryCustomersArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryDepartmentArgs {
  where: DepartmentWhereUniqueInput;
}

export interface QueryDepartmentsArgs {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<DepartmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
}

export interface QueryEmployeeArgs {
  where: EmployeeWhereUniqueInput;
}

export interface QueryEmployeesArgs {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployeeWhereInput>;
}

export interface QueryFindFirstCustomerArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstCustomerOrThrowArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstDepartmentArgs {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<DepartmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
}

export interface QueryFindFirstDepartmentOrThrowArgs {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<DepartmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
}

export interface QueryFindFirstEmployeeArgs {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployeeWhereInput>;
}

export interface QueryFindFirstEmployeeOrThrowArgs {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployeeWhereInput>;
}

export interface QueryFindFirstInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryFindFirstInventoryOrThrowArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryFindFirstProductArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryFindFirstProductOrThrowArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryFindFirstProductSaleArgs {
  cursor?: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSaleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSaleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSaleWhereInput>;
}

export interface QueryFindFirstProductSaleOrThrowArgs {
  cursor?: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSaleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSaleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSaleWhereInput>;
}

export interface QueryFindFirstRoleArgs {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
}

export interface QueryFindFirstRoleOrThrowArgs {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
}

export interface QueryFindFirstSizeArgs {
  cursor?: InputMaybe<SizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<SizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SizeWhereInput>;
}

export interface QueryFindFirstSizeOrThrowArgs {
  cursor?: InputMaybe<SizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<SizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SizeWhereInput>;
}

export interface QueryFindFirstUserArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryFindFirstUserOrThrowArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryGetCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface QueryGetDepartmentArgs {
  where: DepartmentWhereUniqueInput;
}

export interface QueryGetEmployeeArgs {
  where: EmployeeWhereUniqueInput;
}

export interface QueryGetInventoryArgs {
  where: InventoryWhereUniqueInput;
}

export interface QueryGetProductArgs {
  where: ProductWhereUniqueInput;
}

export interface QueryGetProductSaleArgs {
  where: ProductSaleWhereUniqueInput;
}

export interface QueryGetRoleArgs {
  where: RoleWhereUniqueInput;
}

export interface QueryGetSizeArgs {
  where: SizeWhereUniqueInput;
}

export interface QueryGetUserArgs {
  where: UserWhereUniqueInput;
}

export interface QueryGroupByCustomerArgs {
  by: Array<CustomerScalarFieldEnum>;
  having?: InputMaybe<CustomerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryGroupByDepartmentArgs {
  by: Array<DepartmentScalarFieldEnum>;
  having?: InputMaybe<DepartmentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
}

export interface QueryGroupByEmployeeArgs {
  by: Array<EmployeeScalarFieldEnum>;
  having?: InputMaybe<EmployeeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployeeWhereInput>;
}

export interface QueryGroupByInventoryArgs {
  by: Array<InventoryScalarFieldEnum>;
  having?: InputMaybe<InventoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryGroupByProductArgs {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryGroupByProductSaleArgs {
  by: Array<ProductSaleScalarFieldEnum>;
  having?: InputMaybe<ProductSaleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductSaleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSaleWhereInput>;
}

export interface QueryGroupByRoleArgs {
  by: Array<RoleScalarFieldEnum>;
  having?: InputMaybe<RoleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RoleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
}

export interface QueryGroupBySizeArgs {
  by: Array<SizeScalarFieldEnum>;
  having?: InputMaybe<SizeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SizeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SizeWhereInput>;
}

export interface QueryGroupByUserArgs {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryInventoriesArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryInventoryArgs {
  where: InventoryWhereUniqueInput;
}

export interface QueryLoginArgs {
  password: Scalars['String'];
  userName: Scalars['String'];
}

export interface QueryProductArgs {
  where: ProductWhereUniqueInput;
}

export interface QueryProductSaleArgs {
  where: ProductSaleWhereUniqueInput;
}

export interface QueryProductSalesArgs {
  cursor?: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSaleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSaleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSaleWhereInput>;
}

export interface QueryProductsArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryRoleArgs {
  where: RoleWhereUniqueInput;
}

export interface QueryRolesArgs {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
}

export interface QuerySizeArgs {
  where: SizeWhereUniqueInput;
}

export interface QuerySizesArgs {
  cursor?: InputMaybe<SizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<SizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SizeWhereInput>;
}

export interface QueryUserArgs {
  where: UserWhereUniqueInput;
}

export interface QueryUsersArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface Role {
  __typename?: 'Role';
  _count?: Maybe<RoleCount>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<User>;
}

export interface RoleUsersArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface RoleCount {
  __typename?: 'RoleCount';
  users: Scalars['Int'];
}

export interface RoleCountAggregate {
  __typename?: 'RoleCountAggregate';
  _all: Scalars['Int'];
  dateCreated: Scalars['Int'];
  dateUpdated: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
}

export interface RoleCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface RoleCreateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  users?: InputMaybe<UserCreateNestedManyWithoutRoleInput>;
}

export interface RoleCreateNestedOneWithoutUsersInput {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RoleCreateWithoutUsersInput>;
}

export interface RoleCreateOrConnectWithoutUsersInput {
  create: RoleCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
}

export interface RoleCreateWithoutUsersInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}

export interface RoleGroupBy {
  __typename?: 'RoleGroupBy';
  _count?: Maybe<RoleCountAggregate>;
  _max?: Maybe<RoleMaxAggregate>;
  _min?: Maybe<RoleMinAggregate>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
}

export interface RoleMaxAggregate {
  __typename?: 'RoleMaxAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface RoleMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface RoleMinAggregate {
  __typename?: 'RoleMinAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface RoleMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface RoleOrderByWithAggregationInput {
  _count?: InputMaybe<RoleCountOrderByAggregateInput>;
  _max?: InputMaybe<RoleMaxOrderByAggregateInput>;
  _min?: InputMaybe<RoleMinOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface RoleOrderByWithRelationInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
}

export interface RoleRelationFilter {
  is?: InputMaybe<RoleWhereInput>;
  isNot?: InputMaybe<RoleWhereInput>;
}

export enum RoleScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Description = 2,
  Id = 3,
  Name = 4,
}

export interface RoleScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<RoleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RoleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RoleScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
}

export interface RoleUpdateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserUpdateManyWithoutRoleNestedInput>;
}

export interface RoleUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface RoleUpdateOneRequiredWithoutUsersNestedInput {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RoleCreateWithoutUsersInput>;
  update?: InputMaybe<RoleUpdateWithoutUsersInput>;
  upsert?: InputMaybe<RoleUpsertWithoutUsersInput>;
}

export interface RoleUpdateWithoutUsersInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface RoleUpsertWithoutUsersInput {
  create: RoleCreateWithoutUsersInput;
  update: RoleUpdateWithoutUsersInput;
}

export interface RoleWhereInput {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
}

export interface RoleWhereUniqueInput {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface Size {
  __typename?: 'Size';
  _count?: Maybe<SizeCount>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  inventory: Array<Inventory>;
  name: Scalars['String'];
  productSale: Array<ProductSale>;
}

export interface SizeInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface SizeProductSaleArgs {
  cursor?: InputMaybe<ProductSaleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSaleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSaleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSaleWhereInput>;
}

export interface SizeCount {
  __typename?: 'SizeCount';
  inventory: Scalars['Int'];
  productSale: Scalars['Int'];
}

export interface SizeCountAggregate {
  __typename?: 'SizeCountAggregate';
  _all: Scalars['Int'];
  dateCreated: Scalars['Int'];
  dateUpdated: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
}

export interface SizeCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface SizeCreateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutSizeInput>;
  name: Scalars['String'];
  productSale?: InputMaybe<ProductSaleCreateNestedManyWithoutSizeInput>;
}

export interface SizeCreateNestedOneWithoutInventoryInput {
  connect?: InputMaybe<SizeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SizeCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<SizeCreateWithoutInventoryInput>;
}

export interface SizeCreateNestedOneWithoutProductSaleInput {
  connect?: InputMaybe<SizeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SizeCreateOrConnectWithoutProductSaleInput>;
  create?: InputMaybe<SizeCreateWithoutProductSaleInput>;
}

export interface SizeCreateOrConnectWithoutInventoryInput {
  create: SizeCreateWithoutInventoryInput;
  where: SizeWhereUniqueInput;
}

export interface SizeCreateOrConnectWithoutProductSaleInput {
  create: SizeCreateWithoutProductSaleInput;
  where: SizeWhereUniqueInput;
}

export interface SizeCreateWithoutInventoryInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  productSale?: InputMaybe<ProductSaleCreateNestedManyWithoutSizeInput>;
}

export interface SizeCreateWithoutProductSaleInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutSizeInput>;
  name: Scalars['String'];
}

export interface SizeGroupBy {
  __typename?: 'SizeGroupBy';
  _count?: Maybe<SizeCountAggregate>;
  _max?: Maybe<SizeMaxAggregate>;
  _min?: Maybe<SizeMinAggregate>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
}

export interface SizeMaxAggregate {
  __typename?: 'SizeMaxAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface SizeMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface SizeMinAggregate {
  __typename?: 'SizeMinAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface SizeMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface SizeOrderByWithAggregationInput {
  _count?: InputMaybe<SizeCountOrderByAggregateInput>;
  _max?: InputMaybe<SizeMaxOrderByAggregateInput>;
  _min?: InputMaybe<SizeMinOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface SizeOrderByWithRelationInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inventory?: InputMaybe<InventoryOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  productSale?: InputMaybe<ProductSaleOrderByRelationAggregateInput>;
}

export interface SizeRelationFilter {
  is?: InputMaybe<SizeWhereInput>;
  isNot?: InputMaybe<SizeWhereInput>;
}

export enum SizeScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export interface SizeScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<SizeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SizeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SizeScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
}

export interface SizeUpdateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutSizeNestedInput>;
  name?: InputMaybe<Scalars['String']>;
  productSale?: InputMaybe<ProductSaleUpdateManyWithoutSizeNestedInput>;
}

export interface SizeUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface SizeUpdateOneRequiredWithoutInventoryNestedInput {
  connect?: InputMaybe<SizeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SizeCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<SizeCreateWithoutInventoryInput>;
  update?: InputMaybe<SizeUpdateWithoutInventoryInput>;
  upsert?: InputMaybe<SizeUpsertWithoutInventoryInput>;
}

export interface SizeUpdateOneRequiredWithoutProductSaleNestedInput {
  connect?: InputMaybe<SizeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SizeCreateOrConnectWithoutProductSaleInput>;
  create?: InputMaybe<SizeCreateWithoutProductSaleInput>;
  update?: InputMaybe<SizeUpdateWithoutProductSaleInput>;
  upsert?: InputMaybe<SizeUpsertWithoutProductSaleInput>;
}

export interface SizeUpdateWithoutInventoryInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  productSale?: InputMaybe<ProductSaleUpdateManyWithoutSizeNestedInput>;
}

export interface SizeUpdateWithoutProductSaleInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutSizeNestedInput>;
  name?: InputMaybe<Scalars['String']>;
}

export interface SizeUpsertWithoutInventoryInput {
  create: SizeCreateWithoutInventoryInput;
  update: SizeUpdateWithoutInventoryInput;
}

export interface SizeUpsertWithoutProductSaleInput {
  create: SizeCreateWithoutProductSaleInput;
  update: SizeUpdateWithoutProductSaleInput;
}

export interface SizeWhereInput {
  AND?: InputMaybe<Array<SizeWhereInput>>;
  NOT?: InputMaybe<Array<SizeWhereInput>>;
  OR?: InputMaybe<Array<SizeWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  inventory?: InputMaybe<InventoryListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  productSale?: InputMaybe<ProductSaleListRelationFilter>;
}

export interface SizeWhereUniqueInput {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export enum SortOrder {
  Asc = 0,
  Desc = 1,
}

export interface StringFilter {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
}

export interface StringWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
}

export interface User {
  __typename?: 'User';
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  roleId: Scalars['String'];
  userName: Scalars['String'];
}

export interface UserCountAggregate {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  dateCreated: Scalars['Int'];
  dateUpdated: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  password: Scalars['Int'];
  roleId: Scalars['Int'];
  userName: Scalars['Int'];
}

export interface UserCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  roleId?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
}

export interface UserCreateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: RoleCreateNestedOneWithoutUsersInput;
  userName: Scalars['String'];
}

export interface UserCreateNestedManyWithoutRoleInput {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>;
}

export interface UserCreateOrConnectWithoutRoleInput {
  create: UserCreateWithoutRoleInput;
  where: UserWhereUniqueInput;
}

export interface UserCreateWithoutRoleInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  userName: Scalars['String'];
}

export interface UserGroupBy {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  dateCreated: Scalars['DateTime'];
  dateUpdated?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  roleId: Scalars['String'];
  userName: Scalars['String'];
}

export interface UserListRelationFilter {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
}

export interface UserMaxAggregate {
  __typename?: 'UserMaxAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
}

export interface UserMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  roleId?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
}

export interface UserMinAggregate {
  __typename?: 'UserMinAggregate';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
}

export interface UserMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  roleId?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
}

export interface UserOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithAggregationInput {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  roleId?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithRelationInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<RoleOrderByWithRelationInput>;
  roleId?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
}

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

export interface UserScalarWhereInput {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  roleId?: InputMaybe<StringFilter>;
  userName?: InputMaybe<StringFilter>;
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  roleId?: InputMaybe<StringWithAggregatesFilter>;
  userName?: InputMaybe<StringWithAggregatesFilter>;
}

export interface UserUpdateInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUsersNestedInput>;
  userName?: InputMaybe<Scalars['String']>;
}

export interface UserUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
}

export interface UserUpdateManyWithWhereWithoutRoleInput {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
}

export interface UserUpdateManyWithoutRoleNestedInput {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutRoleInput>>;
}

export interface UserUpdateWithWhereUniqueWithoutRoleInput {
  data: UserUpdateWithoutRoleInput;
  where: UserWhereUniqueInput;
}

export interface UserUpdateWithoutRoleInput {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
}

export interface UserUpsertWithWhereUniqueWithoutRoleInput {
  create: UserCreateWithoutRoleInput;
  update: UserUpdateWithoutRoleInput;
  where: UserWhereUniqueInput;
}

export interface UserWhereInput {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<RoleRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  userName?: InputMaybe<StringFilter>;
}

export interface UserWhereUniqueInput {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
}

export type GetCustomersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCustomersQuery = {
  __typename?: 'Query';
  customers: Array<{
    __typename?: 'Customer';
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
  }>;
};

export type GetCustomerByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetCustomerByIdQuery = {
  __typename?: 'Query';
  customer?:
    | {
        __typename?: 'Customer';
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        streetAddress: string;
        city: string;
        state: string;
        zipCode: string;
      }
    | undefined;
};

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never }>;

export type GetEmployeesQuery = {
  __typename?: 'Query';
  employees: Array<{
    __typename?: 'Employee';
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phone: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    jobTitle: string;
    departmentId: string;
    dateStarted: any;
  }>;
};

export type GetEmployeeByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;

export type GetEmployeeByIdQuery = {
  __typename?: 'Query';
  employee?:
    | {
        __typename?: 'Employee';
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        gender: string;
        phone: string;
        streetAddress: string;
        city: string;
        state: string;
        zipCode: string;
        jobTitle: string;
        departmentId: string;
        dateStarted: any;
      }
    | undefined;
};

export type GetInventoryByProductIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetInventoryByProductIdQuery = {
  __typename?: 'Query';
  inventories: Array<{
    __typename?: 'Inventory';
    id: string;
    productId: string;
    quantity: number;
    sizeId: string;
    product: { __typename?: 'Product'; id: string; name: string };
  }>;
};

export type GetInventoryBySizeQueryVariables = Exact<{
  sizeId: Scalars['String'];
}>;

export type GetInventoryBySizeQuery = {
  __typename?: 'Query';
  inventories: Array<{
    __typename?: 'Inventory';
    id: string;
    productId: string;
    quantity: number;
    sizeId: string;
    product: { __typename?: 'Product'; id: string; name: string };
  }>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  __typename?: 'Query';
  products: Array<{ __typename?: 'Product'; id: string; name: string }>;
};

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetProductByIdQuery = {
  __typename?: 'Query';
  product?: { __typename?: 'Product'; id: string; name: string } | undefined;
};

export type GetProductSalesQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductSalesQuery = {
  __typename?: 'Query';
  productSales: Array<{
    __typename?: 'ProductSale';
    id: string;
    quantity: number;
    product: { __typename?: 'Product'; id: string; name: string };
    size: { __typename?: 'Size'; id: string; name: string };
  }>;
};

export type GetTopProductSalesByProductIdQueryVariables = Exact<{
  productId: Scalars['String'];
}>;

export type GetTopProductSalesByProductIdQuery = {
  __typename?: 'Query';
  productSales: Array<{
    __typename?: 'ProductSale';
    id: string;
    quantity: number;
    product: { __typename?: 'Product'; id: string; name: string };
    size: { __typename?: 'Size'; id: string; name: string };
  }>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  users: Array<{
    __typename?: 'User';
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
  }>;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetUserByIdQuery = {
  __typename?: 'Query';
  user?:
    | { __typename?: 'User'; id: string; userName: string; firstName: string; lastName: string; email: string }
    | undefined;
};

export type CustomerPartsFragment = {
  __typename?: 'Customer';
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
};

export type EmployeePartsFragment = {
  __typename?: 'Employee';
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  jobTitle: string;
  departmentId: string;
  dateStarted: any;
};

export type InventoryPartsFragment = {
  __typename?: 'Inventory';
  id: string;
  productId: string;
  quantity: number;
  sizeId: string;
};

export type ProductPartsFragment = { __typename?: 'Product'; id: string; name: string };

export type ProductSalePartsFragment = {
  __typename?: 'ProductSale';
  id: string;
  quantity: number;
  product: { __typename?: 'Product'; id: string; name: string };
  size: { __typename?: 'Size'; id: string; name: string };
};

export type UserPartsFragment = {
  __typename?: 'User';
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
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
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
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
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jobTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'departmentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateStarted' } },
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
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } }],
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
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
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
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
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
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } }],
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
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>;
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
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'EmployeeParts' } }],
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
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jobTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'departmentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateStarted' } },
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
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
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
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'EmployeeParts' } }],
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
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zipCode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'jobTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'departmentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateStarted' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>;
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
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
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
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } }],
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
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
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
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } }],
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
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetInventoryBySizeQuery, GetInventoryBySizeQueryVariables>;
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
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } }],
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
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
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
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } }],
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
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductSaleParts' } }],
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
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
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
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductSaleParts' } }],
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
} as unknown as DocumentNode<GetTopProductSalesByProductIdQuery, GetTopProductSalesByProductIdQueryVariables>;
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
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
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
