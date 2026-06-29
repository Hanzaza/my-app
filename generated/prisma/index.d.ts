
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model SaleUnit
 * 
 */
export type SaleUnit = $Result.DefaultSelection<Prisma.$SaleUnitPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SaleItem
 * 
 */
export type SaleItem = $Result.DefaultSelection<Prisma.$SaleItemPayload>
/**
 * Model InventoryAdjustment
 * 
 */
export type InventoryAdjustment = $Result.DefaultSelection<Prisma.$InventoryAdjustmentPayload>
/**
 * Model CashFlow
 * 
 */
export type CashFlow = $Result.DefaultSelection<Prisma.$CashFlowPayload>
/**
 * Model CashInflow
 * 
 */
export type CashInflow = $Result.DefaultSelection<Prisma.$CashInflowPayload>
/**
 * Model CashOutflow
 * 
 */
export type CashOutflow = $Result.DefaultSelection<Prisma.$CashOutflowPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  manager: 'manager',
  employee: 'employee'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SaleStatus: {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED'
};

export type SaleStatus = (typeof SaleStatus)[keyof typeof SaleStatus]


export const FlowType: {
  INFLOW: 'INFLOW',
  OUTFLOW: 'OUTFLOW'
};

export type FlowType = (typeof FlowType)[keyof typeof FlowType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SaleStatus = $Enums.SaleStatus

export const SaleStatus: typeof $Enums.SaleStatus

export type FlowType = $Enums.FlowType

export const FlowType: typeof $Enums.FlowType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleUnit`: Exposes CRUD operations for the **SaleUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleUnits
    * const saleUnits = await prisma.saleUnit.findMany()
    * ```
    */
  get saleUnit(): Prisma.SaleUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleItem`: Exposes CRUD operations for the **SaleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleItems
    * const saleItems = await prisma.saleItem.findMany()
    * ```
    */
  get saleItem(): Prisma.SaleItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryAdjustment`: Exposes CRUD operations for the **InventoryAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryAdjustments
    * const inventoryAdjustments = await prisma.inventoryAdjustment.findMany()
    * ```
    */
  get inventoryAdjustment(): Prisma.InventoryAdjustmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashFlow`: Exposes CRUD operations for the **CashFlow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashFlows
    * const cashFlows = await prisma.cashFlow.findMany()
    * ```
    */
  get cashFlow(): Prisma.CashFlowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashInflow`: Exposes CRUD operations for the **CashInflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashInflows
    * const cashInflows = await prisma.cashInflow.findMany()
    * ```
    */
  get cashInflow(): Prisma.CashInflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashOutflow`: Exposes CRUD operations for the **CashOutflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashOutflows
    * const cashOutflows = await prisma.cashOutflow.findMany()
    * ```
    */
  get cashOutflow(): Prisma.CashOutflowDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    User: 'User',
    Category: 'Category',
    Product: 'Product',
    SaleUnit: 'SaleUnit',
    Sale: 'Sale',
    SaleItem: 'SaleItem',
    InventoryAdjustment: 'InventoryAdjustment',
    CashFlow: 'CashFlow',
    CashInflow: 'CashInflow',
    CashOutflow: 'CashOutflow'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "user" | "category" | "product" | "saleUnit" | "sale" | "saleItem" | "inventoryAdjustment" | "cashFlow" | "cashInflow" | "cashOutflow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      SaleUnit: {
        payload: Prisma.$SaleUnitPayload<ExtArgs>
        fields: Prisma.SaleUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload>
          }
          findFirst: {
            args: Prisma.SaleUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload>
          }
          findMany: {
            args: Prisma.SaleUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload>[]
          }
          create: {
            args: Prisma.SaleUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload>
          }
          createMany: {
            args: Prisma.SaleUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload>[]
          }
          delete: {
            args: Prisma.SaleUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload>
          }
          update: {
            args: Prisma.SaleUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload>
          }
          deleteMany: {
            args: Prisma.SaleUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload>[]
          }
          upsert: {
            args: Prisma.SaleUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleUnitPayload>
          }
          aggregate: {
            args: Prisma.SaleUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleUnit>
          }
          groupBy: {
            args: Prisma.SaleUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleUnitCountArgs<ExtArgs>
            result: $Utils.Optional<SaleUnitCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SaleItem: {
        payload: Prisma.$SaleItemPayload<ExtArgs>
        fields: Prisma.SaleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findFirst: {
            args: Prisma.SaleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findMany: {
            args: Prisma.SaleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          create: {
            args: Prisma.SaleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          createMany: {
            args: Prisma.SaleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          delete: {
            args: Prisma.SaleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          update: {
            args: Prisma.SaleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          deleteMany: {
            args: Prisma.SaleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          upsert: {
            args: Prisma.SaleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          aggregate: {
            args: Prisma.SaleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleItem>
          }
          groupBy: {
            args: Prisma.SaleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleItemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleItemCountAggregateOutputType> | number
          }
        }
      }
      InventoryAdjustment: {
        payload: Prisma.$InventoryAdjustmentPayload<ExtArgs>
        fields: Prisma.InventoryAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.InventoryAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          findMany: {
            args: Prisma.InventoryAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>[]
          }
          create: {
            args: Prisma.InventoryAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          createMany: {
            args: Prisma.InventoryAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryAdjustmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>[]
          }
          delete: {
            args: Prisma.InventoryAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          update: {
            args: Prisma.InventoryAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.InventoryAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryAdjustmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>[]
          }
          upsert: {
            args: Prisma.InventoryAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.InventoryAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryAdjustment>
          }
          groupBy: {
            args: Prisma.InventoryAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryAdjustmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryAdjustmentCountAggregateOutputType> | number
          }
        }
      }
      CashFlow: {
        payload: Prisma.$CashFlowPayload<ExtArgs>
        fields: Prisma.CashFlowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashFlowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashFlowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload>
          }
          findFirst: {
            args: Prisma.CashFlowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashFlowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload>
          }
          findMany: {
            args: Prisma.CashFlowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload>[]
          }
          create: {
            args: Prisma.CashFlowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload>
          }
          createMany: {
            args: Prisma.CashFlowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashFlowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload>[]
          }
          delete: {
            args: Prisma.CashFlowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload>
          }
          update: {
            args: Prisma.CashFlowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload>
          }
          deleteMany: {
            args: Prisma.CashFlowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashFlowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashFlowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload>[]
          }
          upsert: {
            args: Prisma.CashFlowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowPayload>
          }
          aggregate: {
            args: Prisma.CashFlowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashFlow>
          }
          groupBy: {
            args: Prisma.CashFlowGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashFlowGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashFlowCountArgs<ExtArgs>
            result: $Utils.Optional<CashFlowCountAggregateOutputType> | number
          }
        }
      }
      CashInflow: {
        payload: Prisma.$CashInflowPayload<ExtArgs>
        fields: Prisma.CashInflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashInflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashInflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload>
          }
          findFirst: {
            args: Prisma.CashInflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashInflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload>
          }
          findMany: {
            args: Prisma.CashInflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload>[]
          }
          create: {
            args: Prisma.CashInflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload>
          }
          createMany: {
            args: Prisma.CashInflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashInflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload>[]
          }
          delete: {
            args: Prisma.CashInflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload>
          }
          update: {
            args: Prisma.CashInflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload>
          }
          deleteMany: {
            args: Prisma.CashInflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashInflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashInflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload>[]
          }
          upsert: {
            args: Prisma.CashInflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashInflowPayload>
          }
          aggregate: {
            args: Prisma.CashInflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashInflow>
          }
          groupBy: {
            args: Prisma.CashInflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashInflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashInflowCountArgs<ExtArgs>
            result: $Utils.Optional<CashInflowCountAggregateOutputType> | number
          }
        }
      }
      CashOutflow: {
        payload: Prisma.$CashOutflowPayload<ExtArgs>
        fields: Prisma.CashOutflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashOutflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashOutflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload>
          }
          findFirst: {
            args: Prisma.CashOutflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashOutflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload>
          }
          findMany: {
            args: Prisma.CashOutflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload>[]
          }
          create: {
            args: Prisma.CashOutflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload>
          }
          createMany: {
            args: Prisma.CashOutflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashOutflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload>[]
          }
          delete: {
            args: Prisma.CashOutflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload>
          }
          update: {
            args: Prisma.CashOutflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload>
          }
          deleteMany: {
            args: Prisma.CashOutflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashOutflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashOutflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload>[]
          }
          upsert: {
            args: Prisma.CashOutflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOutflowPayload>
          }
          aggregate: {
            args: Prisma.CashOutflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashOutflow>
          }
          groupBy: {
            args: Prisma.CashOutflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashOutflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashOutflowCountArgs<ExtArgs>
            result: $Utils.Optional<CashOutflowCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    user?: UserOmit
    category?: CategoryOmit
    product?: ProductOmit
    saleUnit?: SaleUnitOmit
    sale?: SaleOmit
    saleItem?: SaleItemOmit
    inventoryAdjustment?: InventoryAdjustmentOmit
    cashFlow?: CashFlowOmit
    cashInflow?: CashInflowOmit
    cashOutflow?: CashOutflowOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    products: number
    sales: number
    inflows: number
    outflows: number
    categories: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    products?: boolean | CompanyCountOutputTypeCountProductsArgs
    sales?: boolean | CompanyCountOutputTypeCountSalesArgs
    inflows?: boolean | CompanyCountOutputTypeCountInflowsArgs
    outflows?: boolean | CompanyCountOutputTypeCountOutflowsArgs
    categories?: boolean | CompanyCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountInflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashInflowWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOutflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashOutflowWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sales: number
    cashFlows: number
    inventoryAdjustments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | UserCountOutputTypeCountSalesArgs
    cashFlows?: boolean | UserCountOutputTypeCountCashFlowsArgs
    inventoryAdjustments?: boolean | UserCountOutputTypeCountInventoryAdjustmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCashFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashFlowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryAdjustmentWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    saleUnits: number
    saleItems: number
    inventoryAdjustments: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleUnits?: boolean | ProductCountOutputTypeCountSaleUnitsArgs
    saleItems?: boolean | ProductCountOutputTypeCountSaleItemsArgs
    inventoryAdjustments?: boolean | ProductCountOutputTypeCountInventoryAdjustmentsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSaleUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleUnitWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSaleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryAdjustmentWhereInput
  }


  /**
   * Count Type SaleUnitCountOutputType
   */

  export type SaleUnitCountOutputType = {
    saleItems: number
  }

  export type SaleUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItems?: boolean | SaleUnitCountOutputTypeCountSaleItemsArgs
  }

  // Custom InputTypes
  /**
   * SaleUnitCountOutputType without action
   */
  export type SaleUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnitCountOutputType
     */
    select?: SaleUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleUnitCountOutputType without action
   */
  export type SaleUnitCountOutputTypeCountSaleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    items: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SaleCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    products?: boolean | Company$productsArgs<ExtArgs>
    sales?: boolean | Company$salesArgs<ExtArgs>
    inflows?: boolean | Company$inflowsArgs<ExtArgs>
    outflows?: boolean | Company$outflowsArgs<ExtArgs>
    categories?: boolean | Company$categoriesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    products?: boolean | Company$productsArgs<ExtArgs>
    sales?: boolean | Company$salesArgs<ExtArgs>
    inflows?: boolean | Company$inflowsArgs<ExtArgs>
    outflows?: boolean | Company$outflowsArgs<ExtArgs>
    categories?: boolean | Company$categoriesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      sales: Prisma.$SalePayload<ExtArgs>[]
      inflows: Prisma.$CashInflowPayload<ExtArgs>[]
      outflows: Prisma.$CashOutflowPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Company$productsArgs<ExtArgs> = {}>(args?: Subset<T, Company$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Company$salesArgs<ExtArgs> = {}>(args?: Subset<T, Company$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inflows<T extends Company$inflowsArgs<ExtArgs> = {}>(args?: Subset<T, Company$inflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outflows<T extends Company$outflowsArgs<ExtArgs> = {}>(args?: Subset<T, Company$outflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Company$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Company$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.products
   */
  export type Company$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Company.sales
   */
  export type Company$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Company.inflows
   */
  export type Company$inflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    where?: CashInflowWhereInput
    orderBy?: CashInflowOrderByWithRelationInput | CashInflowOrderByWithRelationInput[]
    cursor?: CashInflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashInflowScalarFieldEnum | CashInflowScalarFieldEnum[]
  }

  /**
   * Company.outflows
   */
  export type Company$outflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    where?: CashOutflowWhereInput
    orderBy?: CashOutflowOrderByWithRelationInput | CashOutflowOrderByWithRelationInput[]
    cursor?: CashOutflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashOutflowScalarFieldEnum | CashOutflowScalarFieldEnum[]
  }

  /**
   * Company.categories
   */
  export type Company$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: $Enums.Role
    companyId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    cashFlows?: boolean | User$cashFlowsArgs<ExtArgs>
    inventoryAdjustments?: boolean | User$inventoryAdjustmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    cashFlows?: boolean | User$cashFlowsArgs<ExtArgs>
    inventoryAdjustments?: boolean | User$inventoryAdjustmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      sales: Prisma.$SalePayload<ExtArgs>[]
      cashFlows: Prisma.$CashFlowPayload<ExtArgs>[]
      inventoryAdjustments: Prisma.$InventoryAdjustmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: $Enums.Role
      companyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sales<T extends User$salesArgs<ExtArgs> = {}>(args?: Subset<T, User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cashFlows<T extends User$cashFlowsArgs<ExtArgs> = {}>(args?: Subset<T, User$cashFlowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryAdjustments<T extends User$inventoryAdjustmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryAdjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly companyId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sales
   */
  export type User$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * User.cashFlows
   */
  export type User$cashFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    where?: CashFlowWhereInput
    orderBy?: CashFlowOrderByWithRelationInput | CashFlowOrderByWithRelationInput[]
    cursor?: CashFlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashFlowScalarFieldEnum | CashFlowScalarFieldEnum[]
  }

  /**
   * User.inventoryAdjustments
   */
  export type User$inventoryAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    where?: InventoryAdjustmentWhereInput
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    cursor?: InventoryAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    companyId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    companyId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    companyId: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    companyId: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    companyId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      companyId: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly companyId: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    quantity: Decimal | null
    purchaseCost: Decimal | null
    salePrice: Decimal | null
    lowStockThreshold: number | null
  }

  export type ProductSumAggregateOutputType = {
    quantity: Decimal | null
    purchaseCost: Decimal | null
    salePrice: Decimal | null
    lowStockThreshold: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    companyId: string | null
    categoryId: string | null
    stockingUnit: string | null
    quantity: Decimal | null
    purchaseCost: Decimal | null
    salePrice: Decimal | null
    lowStockThreshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    companyId: string | null
    categoryId: string | null
    stockingUnit: string | null
    quantity: Decimal | null
    purchaseCost: Decimal | null
    salePrice: Decimal | null
    lowStockThreshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    companyId: number
    categoryId: number
    stockingUnit: number
    quantity: number
    purchaseCost: number
    salePrice: number
    lowStockThreshold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    quantity?: true
    purchaseCost?: true
    salePrice?: true
    lowStockThreshold?: true
  }

  export type ProductSumAggregateInputType = {
    quantity?: true
    purchaseCost?: true
    salePrice?: true
    lowStockThreshold?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    categoryId?: true
    stockingUnit?: true
    quantity?: true
    purchaseCost?: true
    salePrice?: true
    lowStockThreshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    categoryId?: true
    stockingUnit?: true
    quantity?: true
    purchaseCost?: true
    salePrice?: true
    lowStockThreshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    categoryId?: true
    stockingUnit?: true
    quantity?: true
    purchaseCost?: true
    salePrice?: true
    lowStockThreshold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    companyId: string
    categoryId: string | null
    stockingUnit: string
    quantity: Decimal
    purchaseCost: Decimal
    salePrice: Decimal
    lowStockThreshold: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    categoryId?: boolean
    stockingUnit?: boolean
    quantity?: boolean
    purchaseCost?: boolean
    salePrice?: boolean
    lowStockThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    saleUnits?: boolean | Product$saleUnitsArgs<ExtArgs>
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    inventoryAdjustments?: boolean | Product$inventoryAdjustmentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    categoryId?: boolean
    stockingUnit?: boolean
    quantity?: boolean
    purchaseCost?: boolean
    salePrice?: boolean
    lowStockThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    categoryId?: boolean
    stockingUnit?: boolean
    quantity?: boolean
    purchaseCost?: boolean
    salePrice?: boolean
    lowStockThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    companyId?: boolean
    categoryId?: boolean
    stockingUnit?: boolean
    quantity?: boolean
    purchaseCost?: boolean
    salePrice?: boolean
    lowStockThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyId" | "categoryId" | "stockingUnit" | "quantity" | "purchaseCost" | "salePrice" | "lowStockThreshold" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    saleUnits?: boolean | Product$saleUnitsArgs<ExtArgs>
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    inventoryAdjustments?: boolean | Product$inventoryAdjustmentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      saleUnits: Prisma.$SaleUnitPayload<ExtArgs>[]
      saleItems: Prisma.$SaleItemPayload<ExtArgs>[]
      inventoryAdjustments: Prisma.$InventoryAdjustmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      companyId: string
      categoryId: string | null
      stockingUnit: string
      quantity: Prisma.Decimal
      purchaseCost: Prisma.Decimal
      salePrice: Prisma.Decimal
      lowStockThreshold: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    saleUnits<T extends Product$saleUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Product$saleUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saleItems<T extends Product$saleItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$saleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryAdjustments<T extends Product$inventoryAdjustmentsArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoryAdjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly companyId: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly stockingUnit: FieldRef<"Product", 'String'>
    readonly quantity: FieldRef<"Product", 'Decimal'>
    readonly purchaseCost: FieldRef<"Product", 'Decimal'>
    readonly salePrice: FieldRef<"Product", 'Decimal'>
    readonly lowStockThreshold: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.saleUnits
   */
  export type Product$saleUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    where?: SaleUnitWhereInput
    orderBy?: SaleUnitOrderByWithRelationInput | SaleUnitOrderByWithRelationInput[]
    cursor?: SaleUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleUnitScalarFieldEnum | SaleUnitScalarFieldEnum[]
  }

  /**
   * Product.saleItems
   */
  export type Product$saleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Product.inventoryAdjustments
   */
  export type Product$inventoryAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    where?: InventoryAdjustmentWhereInput
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    cursor?: InventoryAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model SaleUnit
   */

  export type AggregateSaleUnit = {
    _count: SaleUnitCountAggregateOutputType | null
    _avg: SaleUnitAvgAggregateOutputType | null
    _sum: SaleUnitSumAggregateOutputType | null
    _min: SaleUnitMinAggregateOutputType | null
    _max: SaleUnitMaxAggregateOutputType | null
  }

  export type SaleUnitAvgAggregateOutputType = {
    price: Decimal | null
    conversionFactor: Decimal | null
  }

  export type SaleUnitSumAggregateOutputType = {
    price: Decimal | null
    conversionFactor: Decimal | null
  }

  export type SaleUnitMinAggregateOutputType = {
    id: string | null
    productId: string | null
    unitName: string | null
    price: Decimal | null
    conversionFactor: Decimal | null
  }

  export type SaleUnitMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    unitName: string | null
    price: Decimal | null
    conversionFactor: Decimal | null
  }

  export type SaleUnitCountAggregateOutputType = {
    id: number
    productId: number
    unitName: number
    price: number
    conversionFactor: number
    _all: number
  }


  export type SaleUnitAvgAggregateInputType = {
    price?: true
    conversionFactor?: true
  }

  export type SaleUnitSumAggregateInputType = {
    price?: true
    conversionFactor?: true
  }

  export type SaleUnitMinAggregateInputType = {
    id?: true
    productId?: true
    unitName?: true
    price?: true
    conversionFactor?: true
  }

  export type SaleUnitMaxAggregateInputType = {
    id?: true
    productId?: true
    unitName?: true
    price?: true
    conversionFactor?: true
  }

  export type SaleUnitCountAggregateInputType = {
    id?: true
    productId?: true
    unitName?: true
    price?: true
    conversionFactor?: true
    _all?: true
  }

  export type SaleUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleUnit to aggregate.
     */
    where?: SaleUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleUnits to fetch.
     */
    orderBy?: SaleUnitOrderByWithRelationInput | SaleUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleUnits
    **/
    _count?: true | SaleUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleUnitMaxAggregateInputType
  }

  export type GetSaleUnitAggregateType<T extends SaleUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleUnit[P]>
      : GetScalarType<T[P], AggregateSaleUnit[P]>
  }




  export type SaleUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleUnitWhereInput
    orderBy?: SaleUnitOrderByWithAggregationInput | SaleUnitOrderByWithAggregationInput[]
    by: SaleUnitScalarFieldEnum[] | SaleUnitScalarFieldEnum
    having?: SaleUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleUnitCountAggregateInputType | true
    _avg?: SaleUnitAvgAggregateInputType
    _sum?: SaleUnitSumAggregateInputType
    _min?: SaleUnitMinAggregateInputType
    _max?: SaleUnitMaxAggregateInputType
  }

  export type SaleUnitGroupByOutputType = {
    id: string
    productId: string
    unitName: string
    price: Decimal
    conversionFactor: Decimal
    _count: SaleUnitCountAggregateOutputType | null
    _avg: SaleUnitAvgAggregateOutputType | null
    _sum: SaleUnitSumAggregateOutputType | null
    _min: SaleUnitMinAggregateOutputType | null
    _max: SaleUnitMaxAggregateOutputType | null
  }

  type GetSaleUnitGroupByPayload<T extends SaleUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleUnitGroupByOutputType[P]>
            : GetScalarType<T[P], SaleUnitGroupByOutputType[P]>
        }
      >
    >


  export type SaleUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    unitName?: boolean
    price?: boolean
    conversionFactor?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    saleItems?: boolean | SaleUnit$saleItemsArgs<ExtArgs>
    _count?: boolean | SaleUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleUnit"]>

  export type SaleUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    unitName?: boolean
    price?: boolean
    conversionFactor?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleUnit"]>

  export type SaleUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    unitName?: boolean
    price?: boolean
    conversionFactor?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleUnit"]>

  export type SaleUnitSelectScalar = {
    id?: boolean
    productId?: boolean
    unitName?: boolean
    price?: boolean
    conversionFactor?: boolean
  }

  export type SaleUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "unitName" | "price" | "conversionFactor", ExtArgs["result"]["saleUnit"]>
  export type SaleUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    saleItems?: boolean | SaleUnit$saleItemsArgs<ExtArgs>
    _count?: boolean | SaleUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SaleUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SaleUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleUnit"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      saleItems: Prisma.$SaleItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      unitName: string
      price: Prisma.Decimal
      conversionFactor: Prisma.Decimal
    }, ExtArgs["result"]["saleUnit"]>
    composites: {}
  }

  type SaleUnitGetPayload<S extends boolean | null | undefined | SaleUnitDefaultArgs> = $Result.GetResult<Prisma.$SaleUnitPayload, S>

  type SaleUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleUnitCountAggregateInputType | true
    }

  export interface SaleUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleUnit'], meta: { name: 'SaleUnit' } }
    /**
     * Find zero or one SaleUnit that matches the filter.
     * @param {SaleUnitFindUniqueArgs} args - Arguments to find a SaleUnit
     * @example
     * // Get one SaleUnit
     * const saleUnit = await prisma.saleUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleUnitFindUniqueArgs>(args: SelectSubset<T, SaleUnitFindUniqueArgs<ExtArgs>>): Prisma__SaleUnitClient<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaleUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleUnitFindUniqueOrThrowArgs} args - Arguments to find a SaleUnit
     * @example
     * // Get one SaleUnit
     * const saleUnit = await prisma.saleUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleUnitClient<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUnitFindFirstArgs} args - Arguments to find a SaleUnit
     * @example
     * // Get one SaleUnit
     * const saleUnit = await prisma.saleUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleUnitFindFirstArgs>(args?: SelectSubset<T, SaleUnitFindFirstArgs<ExtArgs>>): Prisma__SaleUnitClient<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUnitFindFirstOrThrowArgs} args - Arguments to find a SaleUnit
     * @example
     * // Get one SaleUnit
     * const saleUnit = await prisma.saleUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleUnitClient<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaleUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleUnits
     * const saleUnits = await prisma.saleUnit.findMany()
     * 
     * // Get first 10 SaleUnits
     * const saleUnits = await prisma.saleUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleUnitWithIdOnly = await prisma.saleUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleUnitFindManyArgs>(args?: SelectSubset<T, SaleUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaleUnit.
     * @param {SaleUnitCreateArgs} args - Arguments to create a SaleUnit.
     * @example
     * // Create one SaleUnit
     * const SaleUnit = await prisma.saleUnit.create({
     *   data: {
     *     // ... data to create a SaleUnit
     *   }
     * })
     * 
     */
    create<T extends SaleUnitCreateArgs>(args: SelectSubset<T, SaleUnitCreateArgs<ExtArgs>>): Prisma__SaleUnitClient<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaleUnits.
     * @param {SaleUnitCreateManyArgs} args - Arguments to create many SaleUnits.
     * @example
     * // Create many SaleUnits
     * const saleUnit = await prisma.saleUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleUnitCreateManyArgs>(args?: SelectSubset<T, SaleUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleUnits and returns the data saved in the database.
     * @param {SaleUnitCreateManyAndReturnArgs} args - Arguments to create many SaleUnits.
     * @example
     * // Create many SaleUnits
     * const saleUnit = await prisma.saleUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleUnits and only return the `id`
     * const saleUnitWithIdOnly = await prisma.saleUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaleUnit.
     * @param {SaleUnitDeleteArgs} args - Arguments to delete one SaleUnit.
     * @example
     * // Delete one SaleUnit
     * const SaleUnit = await prisma.saleUnit.delete({
     *   where: {
     *     // ... filter to delete one SaleUnit
     *   }
     * })
     * 
     */
    delete<T extends SaleUnitDeleteArgs>(args: SelectSubset<T, SaleUnitDeleteArgs<ExtArgs>>): Prisma__SaleUnitClient<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaleUnit.
     * @param {SaleUnitUpdateArgs} args - Arguments to update one SaleUnit.
     * @example
     * // Update one SaleUnit
     * const saleUnit = await prisma.saleUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUnitUpdateArgs>(args: SelectSubset<T, SaleUnitUpdateArgs<ExtArgs>>): Prisma__SaleUnitClient<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaleUnits.
     * @param {SaleUnitDeleteManyArgs} args - Arguments to filter SaleUnits to delete.
     * @example
     * // Delete a few SaleUnits
     * const { count } = await prisma.saleUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleUnitDeleteManyArgs>(args?: SelectSubset<T, SaleUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleUnits
     * const saleUnit = await prisma.saleUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUnitUpdateManyArgs>(args: SelectSubset<T, SaleUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleUnits and returns the data updated in the database.
     * @param {SaleUnitUpdateManyAndReturnArgs} args - Arguments to update many SaleUnits.
     * @example
     * // Update many SaleUnits
     * const saleUnit = await prisma.saleUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaleUnits and only return the `id`
     * const saleUnitWithIdOnly = await prisma.saleUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaleUnit.
     * @param {SaleUnitUpsertArgs} args - Arguments to update or create a SaleUnit.
     * @example
     * // Update or create a SaleUnit
     * const saleUnit = await prisma.saleUnit.upsert({
     *   create: {
     *     // ... data to create a SaleUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleUnit we want to update
     *   }
     * })
     */
    upsert<T extends SaleUnitUpsertArgs>(args: SelectSubset<T, SaleUnitUpsertArgs<ExtArgs>>): Prisma__SaleUnitClient<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaleUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUnitCountArgs} args - Arguments to filter SaleUnits to count.
     * @example
     * // Count the number of SaleUnits
     * const count = await prisma.saleUnit.count({
     *   where: {
     *     // ... the filter for the SaleUnits we want to count
     *   }
     * })
    **/
    count<T extends SaleUnitCountArgs>(
      args?: Subset<T, SaleUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleUnitAggregateArgs>(args: Subset<T, SaleUnitAggregateArgs>): Prisma.PrismaPromise<GetSaleUnitAggregateType<T>>

    /**
     * Group by SaleUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleUnitGroupByArgs['orderBy'] }
        : { orderBy?: SaleUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleUnit model
   */
  readonly fields: SaleUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    saleItems<T extends SaleUnit$saleItemsArgs<ExtArgs> = {}>(args?: Subset<T, SaleUnit$saleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SaleUnit model
   */
  interface SaleUnitFieldRefs {
    readonly id: FieldRef<"SaleUnit", 'String'>
    readonly productId: FieldRef<"SaleUnit", 'String'>
    readonly unitName: FieldRef<"SaleUnit", 'String'>
    readonly price: FieldRef<"SaleUnit", 'Decimal'>
    readonly conversionFactor: FieldRef<"SaleUnit", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * SaleUnit findUnique
   */
  export type SaleUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    /**
     * Filter, which SaleUnit to fetch.
     */
    where: SaleUnitWhereUniqueInput
  }

  /**
   * SaleUnit findUniqueOrThrow
   */
  export type SaleUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    /**
     * Filter, which SaleUnit to fetch.
     */
    where: SaleUnitWhereUniqueInput
  }

  /**
   * SaleUnit findFirst
   */
  export type SaleUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    /**
     * Filter, which SaleUnit to fetch.
     */
    where?: SaleUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleUnits to fetch.
     */
    orderBy?: SaleUnitOrderByWithRelationInput | SaleUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleUnits.
     */
    cursor?: SaleUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleUnits.
     */
    distinct?: SaleUnitScalarFieldEnum | SaleUnitScalarFieldEnum[]
  }

  /**
   * SaleUnit findFirstOrThrow
   */
  export type SaleUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    /**
     * Filter, which SaleUnit to fetch.
     */
    where?: SaleUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleUnits to fetch.
     */
    orderBy?: SaleUnitOrderByWithRelationInput | SaleUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleUnits.
     */
    cursor?: SaleUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleUnits.
     */
    distinct?: SaleUnitScalarFieldEnum | SaleUnitScalarFieldEnum[]
  }

  /**
   * SaleUnit findMany
   */
  export type SaleUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    /**
     * Filter, which SaleUnits to fetch.
     */
    where?: SaleUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleUnits to fetch.
     */
    orderBy?: SaleUnitOrderByWithRelationInput | SaleUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleUnits.
     */
    cursor?: SaleUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleUnits.
     */
    distinct?: SaleUnitScalarFieldEnum | SaleUnitScalarFieldEnum[]
  }

  /**
   * SaleUnit create
   */
  export type SaleUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleUnit.
     */
    data: XOR<SaleUnitCreateInput, SaleUnitUncheckedCreateInput>
  }

  /**
   * SaleUnit createMany
   */
  export type SaleUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleUnits.
     */
    data: SaleUnitCreateManyInput | SaleUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleUnit createManyAndReturn
   */
  export type SaleUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * The data used to create many SaleUnits.
     */
    data: SaleUnitCreateManyInput | SaleUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleUnit update
   */
  export type SaleUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleUnit.
     */
    data: XOR<SaleUnitUpdateInput, SaleUnitUncheckedUpdateInput>
    /**
     * Choose, which SaleUnit to update.
     */
    where: SaleUnitWhereUniqueInput
  }

  /**
   * SaleUnit updateMany
   */
  export type SaleUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleUnits.
     */
    data: XOR<SaleUnitUpdateManyMutationInput, SaleUnitUncheckedUpdateManyInput>
    /**
     * Filter which SaleUnits to update
     */
    where?: SaleUnitWhereInput
    /**
     * Limit how many SaleUnits to update.
     */
    limit?: number
  }

  /**
   * SaleUnit updateManyAndReturn
   */
  export type SaleUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * The data used to update SaleUnits.
     */
    data: XOR<SaleUnitUpdateManyMutationInput, SaleUnitUncheckedUpdateManyInput>
    /**
     * Filter which SaleUnits to update
     */
    where?: SaleUnitWhereInput
    /**
     * Limit how many SaleUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleUnit upsert
   */
  export type SaleUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleUnit to update in case it exists.
     */
    where: SaleUnitWhereUniqueInput
    /**
     * In case the SaleUnit found by the `where` argument doesn't exist, create a new SaleUnit with this data.
     */
    create: XOR<SaleUnitCreateInput, SaleUnitUncheckedCreateInput>
    /**
     * In case the SaleUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUnitUpdateInput, SaleUnitUncheckedUpdateInput>
  }

  /**
   * SaleUnit delete
   */
  export type SaleUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
    /**
     * Filter which SaleUnit to delete.
     */
    where: SaleUnitWhereUniqueInput
  }

  /**
   * SaleUnit deleteMany
   */
  export type SaleUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleUnits to delete
     */
    where?: SaleUnitWhereInput
    /**
     * Limit how many SaleUnits to delete.
     */
    limit?: number
  }

  /**
   * SaleUnit.saleItems
   */
  export type SaleUnit$saleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleUnit without action
   */
  export type SaleUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleUnit
     */
    select?: SaleUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleUnit
     */
    omit?: SaleUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleUnitInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type SaleSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    userId: string | null
    totalAmount: Decimal | null
    status: $Enums.SaleStatus | null
    saleDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    userId: string | null
    totalAmount: Decimal | null
    status: $Enums.SaleStatus | null
    saleDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    companyId: number
    userId: number
    totalAmount: number
    status: number
    saleDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    totalAmount?: true
  }

  export type SaleSumAggregateInputType = {
    totalAmount?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    companyId?: true
    userId?: true
    totalAmount?: true
    status?: true
    saleDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    companyId?: true
    userId?: true
    totalAmount?: true
    status?: true
    saleDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    companyId?: true
    userId?: true
    totalAmount?: true
    status?: true
    saleDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    companyId: string
    userId: string
    totalAmount: Decimal
    status: $Enums.SaleStatus
    saleDate: Date
    createdAt: Date
    updatedAt: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    userId?: boolean
    totalAmount?: boolean
    status?: boolean
    saleDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    userId?: boolean
    totalAmount?: boolean
    status?: boolean
    saleDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    userId?: boolean
    totalAmount?: boolean
    status?: boolean
    saleDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    companyId?: boolean
    userId?: boolean
    totalAmount?: boolean
    status?: boolean
    saleDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "userId" | "totalAmount" | "status" | "saleDate" | "createdAt" | "updatedAt", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$SaleItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      userId: string
      totalAmount: Prisma.Decimal
      status: $Enums.SaleStatus
      saleDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Sale$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly companyId: FieldRef<"Sale", 'String'>
    readonly userId: FieldRef<"Sale", 'String'>
    readonly totalAmount: FieldRef<"Sale", 'Decimal'>
    readonly status: FieldRef<"Sale", 'SaleStatus'>
    readonly saleDate: FieldRef<"Sale", 'DateTime'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly updatedAt: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.items
   */
  export type Sale$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SaleItem
   */

  export type AggregateSaleItem = {
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  export type SaleItemAvgAggregateOutputType = {
    quantitySold: Decimal | null
    priceAtSale: Decimal | null
  }

  export type SaleItemSumAggregateOutputType = {
    quantitySold: Decimal | null
    priceAtSale: Decimal | null
  }

  export type SaleItemMinAggregateOutputType = {
    id: string | null
    saleId: string | null
    productId: string | null
    saleUnitId: string | null
    quantitySold: Decimal | null
    priceAtSale: Decimal | null
  }

  export type SaleItemMaxAggregateOutputType = {
    id: string | null
    saleId: string | null
    productId: string | null
    saleUnitId: string | null
    quantitySold: Decimal | null
    priceAtSale: Decimal | null
  }

  export type SaleItemCountAggregateOutputType = {
    id: number
    saleId: number
    productId: number
    saleUnitId: number
    quantitySold: number
    priceAtSale: number
    _all: number
  }


  export type SaleItemAvgAggregateInputType = {
    quantitySold?: true
    priceAtSale?: true
  }

  export type SaleItemSumAggregateInputType = {
    quantitySold?: true
    priceAtSale?: true
  }

  export type SaleItemMinAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    saleUnitId?: true
    quantitySold?: true
    priceAtSale?: true
  }

  export type SaleItemMaxAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    saleUnitId?: true
    quantitySold?: true
    priceAtSale?: true
  }

  export type SaleItemCountAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    saleUnitId?: true
    quantitySold?: true
    priceAtSale?: true
    _all?: true
  }

  export type SaleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItem to aggregate.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleItems
    **/
    _count?: true | SaleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleItemMaxAggregateInputType
  }

  export type GetSaleItemAggregateType<T extends SaleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleItem[P]>
      : GetScalarType<T[P], AggregateSaleItem[P]>
  }




  export type SaleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithAggregationInput | SaleItemOrderByWithAggregationInput[]
    by: SaleItemScalarFieldEnum[] | SaleItemScalarFieldEnum
    having?: SaleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleItemCountAggregateInputType | true
    _avg?: SaleItemAvgAggregateInputType
    _sum?: SaleItemSumAggregateInputType
    _min?: SaleItemMinAggregateInputType
    _max?: SaleItemMaxAggregateInputType
  }

  export type SaleItemGroupByOutputType = {
    id: string
    saleId: string
    productId: string
    saleUnitId: string
    quantitySold: Decimal
    priceAtSale: Decimal
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  type GetSaleItemGroupByPayload<T extends SaleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
        }
      >
    >


  export type SaleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    saleUnitId?: boolean
    quantitySold?: boolean
    priceAtSale?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    saleUnit?: boolean | SaleUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    saleUnitId?: boolean
    quantitySold?: boolean
    priceAtSale?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    saleUnit?: boolean | SaleUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    saleUnitId?: boolean
    quantitySold?: boolean
    priceAtSale?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    saleUnit?: boolean | SaleUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectScalar = {
    id?: boolean
    saleId?: boolean
    productId?: boolean
    saleUnitId?: boolean
    quantitySold?: boolean
    priceAtSale?: boolean
  }

  export type SaleItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleId" | "productId" | "saleUnitId" | "quantitySold" | "priceAtSale", ExtArgs["result"]["saleItem"]>
  export type SaleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    saleUnit?: boolean | SaleUnitDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    saleUnit?: boolean | SaleUnitDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    saleUnit?: boolean | SaleUnitDefaultArgs<ExtArgs>
  }

  export type $SaleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleItem"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      saleUnit: Prisma.$SaleUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      saleId: string
      productId: string
      saleUnitId: string
      quantitySold: Prisma.Decimal
      priceAtSale: Prisma.Decimal
    }, ExtArgs["result"]["saleItem"]>
    composites: {}
  }

  type SaleItemGetPayload<S extends boolean | null | undefined | SaleItemDefaultArgs> = $Result.GetResult<Prisma.$SaleItemPayload, S>

  type SaleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleItemCountAggregateInputType | true
    }

  export interface SaleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleItem'], meta: { name: 'SaleItem' } }
    /**
     * Find zero or one SaleItem that matches the filter.
     * @param {SaleItemFindUniqueArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleItemFindUniqueArgs>(args: SelectSubset<T, SaleItemFindUniqueArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaleItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleItemFindUniqueOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleItemFindFirstArgs>(args?: SelectSubset<T, SaleItemFindFirstArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleItems
     * const saleItems = await prisma.saleItem.findMany()
     * 
     * // Get first 10 SaleItems
     * const saleItems = await prisma.saleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleItemFindManyArgs>(args?: SelectSubset<T, SaleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaleItem.
     * @param {SaleItemCreateArgs} args - Arguments to create a SaleItem.
     * @example
     * // Create one SaleItem
     * const SaleItem = await prisma.saleItem.create({
     *   data: {
     *     // ... data to create a SaleItem
     *   }
     * })
     * 
     */
    create<T extends SaleItemCreateArgs>(args: SelectSubset<T, SaleItemCreateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaleItems.
     * @param {SaleItemCreateManyArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleItemCreateManyArgs>(args?: SelectSubset<T, SaleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleItems and returns the data saved in the database.
     * @param {SaleItemCreateManyAndReturnArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaleItem.
     * @param {SaleItemDeleteArgs} args - Arguments to delete one SaleItem.
     * @example
     * // Delete one SaleItem
     * const SaleItem = await prisma.saleItem.delete({
     *   where: {
     *     // ... filter to delete one SaleItem
     *   }
     * })
     * 
     */
    delete<T extends SaleItemDeleteArgs>(args: SelectSubset<T, SaleItemDeleteArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaleItem.
     * @param {SaleItemUpdateArgs} args - Arguments to update one SaleItem.
     * @example
     * // Update one SaleItem
     * const saleItem = await prisma.saleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleItemUpdateArgs>(args: SelectSubset<T, SaleItemUpdateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaleItems.
     * @param {SaleItemDeleteManyArgs} args - Arguments to filter SaleItems to delete.
     * @example
     * // Delete a few SaleItems
     * const { count } = await prisma.saleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleItemDeleteManyArgs>(args?: SelectSubset<T, SaleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleItemUpdateManyArgs>(args: SelectSubset<T, SaleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems and returns the data updated in the database.
     * @param {SaleItemUpdateManyAndReturnArgs} args - Arguments to update many SaleItems.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaleItem.
     * @param {SaleItemUpsertArgs} args - Arguments to update or create a SaleItem.
     * @example
     * // Update or create a SaleItem
     * const saleItem = await prisma.saleItem.upsert({
     *   create: {
     *     // ... data to create a SaleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleItem we want to update
     *   }
     * })
     */
    upsert<T extends SaleItemUpsertArgs>(args: SelectSubset<T, SaleItemUpsertArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemCountArgs} args - Arguments to filter SaleItems to count.
     * @example
     * // Count the number of SaleItems
     * const count = await prisma.saleItem.count({
     *   where: {
     *     // ... the filter for the SaleItems we want to count
     *   }
     * })
    **/
    count<T extends SaleItemCountArgs>(
      args?: Subset<T, SaleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleItemAggregateArgs>(args: Subset<T, SaleItemAggregateArgs>): Prisma.PrismaPromise<GetSaleItemAggregateType<T>>

    /**
     * Group by SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleItemGroupByArgs['orderBy'] }
        : { orderBy?: SaleItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleItem model
   */
  readonly fields: SaleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    saleUnit<T extends SaleUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleUnitDefaultArgs<ExtArgs>>): Prisma__SaleUnitClient<$Result.GetResult<Prisma.$SaleUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SaleItem model
   */
  interface SaleItemFieldRefs {
    readonly id: FieldRef<"SaleItem", 'String'>
    readonly saleId: FieldRef<"SaleItem", 'String'>
    readonly productId: FieldRef<"SaleItem", 'String'>
    readonly saleUnitId: FieldRef<"SaleItem", 'String'>
    readonly quantitySold: FieldRef<"SaleItem", 'Decimal'>
    readonly priceAtSale: FieldRef<"SaleItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * SaleItem findUnique
   */
  export type SaleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findUniqueOrThrow
   */
  export type SaleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findFirst
   */
  export type SaleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findFirstOrThrow
   */
  export type SaleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findMany
   */
  export type SaleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItems to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem create
   */
  export type SaleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleItem.
     */
    data: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
  }

  /**
   * SaleItem createMany
   */
  export type SaleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleItem createManyAndReturn
   */
  export type SaleItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem update
   */
  export type SaleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleItem.
     */
    data: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
    /**
     * Choose, which SaleItem to update.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem updateMany
   */
  export type SaleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
  }

  /**
   * SaleItem updateManyAndReturn
   */
  export type SaleItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem upsert
   */
  export type SaleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleItem to update in case it exists.
     */
    where: SaleItemWhereUniqueInput
    /**
     * In case the SaleItem found by the `where` argument doesn't exist, create a new SaleItem with this data.
     */
    create: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
    /**
     * In case the SaleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
  }

  /**
   * SaleItem delete
   */
  export type SaleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter which SaleItem to delete.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem deleteMany
   */
  export type SaleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItems to delete
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to delete.
     */
    limit?: number
  }

  /**
   * SaleItem without action
   */
  export type SaleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
  }


  /**
   * Model InventoryAdjustment
   */

  export type AggregateInventoryAdjustment = {
    _count: InventoryAdjustmentCountAggregateOutputType | null
    _avg: InventoryAdjustmentAvgAggregateOutputType | null
    _sum: InventoryAdjustmentSumAggregateOutputType | null
    _min: InventoryAdjustmentMinAggregateOutputType | null
    _max: InventoryAdjustmentMaxAggregateOutputType | null
  }

  export type InventoryAdjustmentAvgAggregateOutputType = {
    adjustmentQty: Decimal | null
  }

  export type InventoryAdjustmentSumAggregateOutputType = {
    adjustmentQty: Decimal | null
  }

  export type InventoryAdjustmentMinAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    adjustmentQty: Decimal | null
    reason: string | null
    createdAt: Date | null
  }

  export type InventoryAdjustmentMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    adjustmentQty: Decimal | null
    reason: string | null
    createdAt: Date | null
  }

  export type InventoryAdjustmentCountAggregateOutputType = {
    id: number
    productId: number
    userId: number
    adjustmentQty: number
    reason: number
    createdAt: number
    _all: number
  }


  export type InventoryAdjustmentAvgAggregateInputType = {
    adjustmentQty?: true
  }

  export type InventoryAdjustmentSumAggregateInputType = {
    adjustmentQty?: true
  }

  export type InventoryAdjustmentMinAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    adjustmentQty?: true
    reason?: true
    createdAt?: true
  }

  export type InventoryAdjustmentMaxAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    adjustmentQty?: true
    reason?: true
    createdAt?: true
  }

  export type InventoryAdjustmentCountAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    adjustmentQty?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryAdjustment to aggregate.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryAdjustments
    **/
    _count?: true | InventoryAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryAdjustmentMaxAggregateInputType
  }

  export type GetInventoryAdjustmentAggregateType<T extends InventoryAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryAdjustment[P]>
      : GetScalarType<T[P], AggregateInventoryAdjustment[P]>
  }




  export type InventoryAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryAdjustmentWhereInput
    orderBy?: InventoryAdjustmentOrderByWithAggregationInput | InventoryAdjustmentOrderByWithAggregationInput[]
    by: InventoryAdjustmentScalarFieldEnum[] | InventoryAdjustmentScalarFieldEnum
    having?: InventoryAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryAdjustmentCountAggregateInputType | true
    _avg?: InventoryAdjustmentAvgAggregateInputType
    _sum?: InventoryAdjustmentSumAggregateInputType
    _min?: InventoryAdjustmentMinAggregateInputType
    _max?: InventoryAdjustmentMaxAggregateInputType
  }

  export type InventoryAdjustmentGroupByOutputType = {
    id: string
    productId: string
    userId: string
    adjustmentQty: Decimal
    reason: string
    createdAt: Date
    _count: InventoryAdjustmentCountAggregateOutputType | null
    _avg: InventoryAdjustmentAvgAggregateOutputType | null
    _sum: InventoryAdjustmentSumAggregateOutputType | null
    _min: InventoryAdjustmentMinAggregateOutputType | null
    _max: InventoryAdjustmentMaxAggregateOutputType | null
  }

  type GetInventoryAdjustmentGroupByPayload<T extends InventoryAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type InventoryAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    adjustmentQty?: boolean
    reason?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryAdjustment"]>

  export type InventoryAdjustmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    adjustmentQty?: boolean
    reason?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryAdjustment"]>

  export type InventoryAdjustmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    adjustmentQty?: boolean
    reason?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryAdjustment"]>

  export type InventoryAdjustmentSelectScalar = {
    id?: boolean
    productId?: boolean
    userId?: boolean
    adjustmentQty?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type InventoryAdjustmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "userId" | "adjustmentQty" | "reason" | "createdAt", ExtArgs["result"]["inventoryAdjustment"]>
  export type InventoryAdjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InventoryAdjustmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InventoryAdjustmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InventoryAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryAdjustment"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      userId: string
      adjustmentQty: Prisma.Decimal
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["inventoryAdjustment"]>
    composites: {}
  }

  type InventoryAdjustmentGetPayload<S extends boolean | null | undefined | InventoryAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$InventoryAdjustmentPayload, S>

  type InventoryAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryAdjustmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryAdjustmentCountAggregateInputType | true
    }

  export interface InventoryAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryAdjustment'], meta: { name: 'InventoryAdjustment' } }
    /**
     * Find zero or one InventoryAdjustment that matches the filter.
     * @param {InventoryAdjustmentFindUniqueArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryAdjustmentFindUniqueArgs>(args: SelectSubset<T, InventoryAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryAdjustment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentFindFirstArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryAdjustmentFindFirstArgs>(args?: SelectSubset<T, InventoryAdjustmentFindFirstArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentFindFirstOrThrowArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryAdjustments
     * const inventoryAdjustments = await prisma.inventoryAdjustment.findMany()
     * 
     * // Get first 10 InventoryAdjustments
     * const inventoryAdjustments = await prisma.inventoryAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryAdjustmentWithIdOnly = await prisma.inventoryAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryAdjustmentFindManyArgs>(args?: SelectSubset<T, InventoryAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryAdjustment.
     * @param {InventoryAdjustmentCreateArgs} args - Arguments to create a InventoryAdjustment.
     * @example
     * // Create one InventoryAdjustment
     * const InventoryAdjustment = await prisma.inventoryAdjustment.create({
     *   data: {
     *     // ... data to create a InventoryAdjustment
     *   }
     * })
     * 
     */
    create<T extends InventoryAdjustmentCreateArgs>(args: SelectSubset<T, InventoryAdjustmentCreateArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryAdjustments.
     * @param {InventoryAdjustmentCreateManyArgs} args - Arguments to create many InventoryAdjustments.
     * @example
     * // Create many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryAdjustmentCreateManyArgs>(args?: SelectSubset<T, InventoryAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryAdjustments and returns the data saved in the database.
     * @param {InventoryAdjustmentCreateManyAndReturnArgs} args - Arguments to create many InventoryAdjustments.
     * @example
     * // Create many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryAdjustments and only return the `id`
     * const inventoryAdjustmentWithIdOnly = await prisma.inventoryAdjustment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryAdjustmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryAdjustmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryAdjustment.
     * @param {InventoryAdjustmentDeleteArgs} args - Arguments to delete one InventoryAdjustment.
     * @example
     * // Delete one InventoryAdjustment
     * const InventoryAdjustment = await prisma.inventoryAdjustment.delete({
     *   where: {
     *     // ... filter to delete one InventoryAdjustment
     *   }
     * })
     * 
     */
    delete<T extends InventoryAdjustmentDeleteArgs>(args: SelectSubset<T, InventoryAdjustmentDeleteArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryAdjustment.
     * @param {InventoryAdjustmentUpdateArgs} args - Arguments to update one InventoryAdjustment.
     * @example
     * // Update one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryAdjustmentUpdateArgs>(args: SelectSubset<T, InventoryAdjustmentUpdateArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryAdjustments.
     * @param {InventoryAdjustmentDeleteManyArgs} args - Arguments to filter InventoryAdjustments to delete.
     * @example
     * // Delete a few InventoryAdjustments
     * const { count } = await prisma.inventoryAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryAdjustmentDeleteManyArgs>(args?: SelectSubset<T, InventoryAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryAdjustmentUpdateManyArgs>(args: SelectSubset<T, InventoryAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryAdjustments and returns the data updated in the database.
     * @param {InventoryAdjustmentUpdateManyAndReturnArgs} args - Arguments to update many InventoryAdjustments.
     * @example
     * // Update many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryAdjustments and only return the `id`
     * const inventoryAdjustmentWithIdOnly = await prisma.inventoryAdjustment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryAdjustmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryAdjustmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryAdjustment.
     * @param {InventoryAdjustmentUpsertArgs} args - Arguments to update or create a InventoryAdjustment.
     * @example
     * // Update or create a InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.upsert({
     *   create: {
     *     // ... data to create a InventoryAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends InventoryAdjustmentUpsertArgs>(args: SelectSubset<T, InventoryAdjustmentUpsertArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentCountArgs} args - Arguments to filter InventoryAdjustments to count.
     * @example
     * // Count the number of InventoryAdjustments
     * const count = await prisma.inventoryAdjustment.count({
     *   where: {
     *     // ... the filter for the InventoryAdjustments we want to count
     *   }
     * })
    **/
    count<T extends InventoryAdjustmentCountArgs>(
      args?: Subset<T, InventoryAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAdjustmentAggregateArgs>(args: Subset<T, InventoryAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetInventoryAdjustmentAggregateType<T>>

    /**
     * Group by InventoryAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: InventoryAdjustmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryAdjustment model
   */
  readonly fields: InventoryAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryAdjustment model
   */
  interface InventoryAdjustmentFieldRefs {
    readonly id: FieldRef<"InventoryAdjustment", 'String'>
    readonly productId: FieldRef<"InventoryAdjustment", 'String'>
    readonly userId: FieldRef<"InventoryAdjustment", 'String'>
    readonly adjustmentQty: FieldRef<"InventoryAdjustment", 'Decimal'>
    readonly reason: FieldRef<"InventoryAdjustment", 'String'>
    readonly createdAt: FieldRef<"InventoryAdjustment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryAdjustment findUnique
   */
  export type InventoryAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment findUniqueOrThrow
   */
  export type InventoryAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment findFirst
   */
  export type InventoryAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryAdjustments.
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryAdjustments.
     */
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * InventoryAdjustment findFirstOrThrow
   */
  export type InventoryAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryAdjustments.
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryAdjustments.
     */
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * InventoryAdjustment findMany
   */
  export type InventoryAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustments to fetch.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryAdjustments.
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryAdjustments.
     */
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * InventoryAdjustment create
   */
  export type InventoryAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryAdjustment.
     */
    data: XOR<InventoryAdjustmentCreateInput, InventoryAdjustmentUncheckedCreateInput>
  }

  /**
   * InventoryAdjustment createMany
   */
  export type InventoryAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryAdjustments.
     */
    data: InventoryAdjustmentCreateManyInput | InventoryAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryAdjustment createManyAndReturn
   */
  export type InventoryAdjustmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryAdjustments.
     */
    data: InventoryAdjustmentCreateManyInput | InventoryAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryAdjustment update
   */
  export type InventoryAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryAdjustment.
     */
    data: XOR<InventoryAdjustmentUpdateInput, InventoryAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which InventoryAdjustment to update.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment updateMany
   */
  export type InventoryAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryAdjustments.
     */
    data: XOR<InventoryAdjustmentUpdateManyMutationInput, InventoryAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which InventoryAdjustments to update
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * Limit how many InventoryAdjustments to update.
     */
    limit?: number
  }

  /**
   * InventoryAdjustment updateManyAndReturn
   */
  export type InventoryAdjustmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * The data used to update InventoryAdjustments.
     */
    data: XOR<InventoryAdjustmentUpdateManyMutationInput, InventoryAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which InventoryAdjustments to update
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * Limit how many InventoryAdjustments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryAdjustment upsert
   */
  export type InventoryAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryAdjustment to update in case it exists.
     */
    where: InventoryAdjustmentWhereUniqueInput
    /**
     * In case the InventoryAdjustment found by the `where` argument doesn't exist, create a new InventoryAdjustment with this data.
     */
    create: XOR<InventoryAdjustmentCreateInput, InventoryAdjustmentUncheckedCreateInput>
    /**
     * In case the InventoryAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryAdjustmentUpdateInput, InventoryAdjustmentUncheckedUpdateInput>
  }

  /**
   * InventoryAdjustment delete
   */
  export type InventoryAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter which InventoryAdjustment to delete.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment deleteMany
   */
  export type InventoryAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryAdjustments to delete
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * Limit how many InventoryAdjustments to delete.
     */
    limit?: number
  }

  /**
   * InventoryAdjustment without action
   */
  export type InventoryAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
  }


  /**
   * Model CashFlow
   */

  export type AggregateCashFlow = {
    _count: CashFlowCountAggregateOutputType | null
    _avg: CashFlowAvgAggregateOutputType | null
    _sum: CashFlowSumAggregateOutputType | null
    _min: CashFlowMinAggregateOutputType | null
    _max: CashFlowMaxAggregateOutputType | null
  }

  export type CashFlowAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type CashFlowSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type CashFlowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.FlowType | null
    amount: Decimal | null
    description: string | null
    createdAt: Date | null
  }

  export type CashFlowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.FlowType | null
    amount: Decimal | null
    description: string | null
    createdAt: Date | null
  }

  export type CashFlowCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    amount: number
    description: number
    createdAt: number
    _all: number
  }


  export type CashFlowAvgAggregateInputType = {
    amount?: true
  }

  export type CashFlowSumAggregateInputType = {
    amount?: true
  }

  export type CashFlowMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    createdAt?: true
  }

  export type CashFlowMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    createdAt?: true
  }

  export type CashFlowCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CashFlowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashFlow to aggregate.
     */
    where?: CashFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashFlows to fetch.
     */
    orderBy?: CashFlowOrderByWithRelationInput | CashFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashFlows
    **/
    _count?: true | CashFlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashFlowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashFlowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashFlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashFlowMaxAggregateInputType
  }

  export type GetCashFlowAggregateType<T extends CashFlowAggregateArgs> = {
        [P in keyof T & keyof AggregateCashFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashFlow[P]>
      : GetScalarType<T[P], AggregateCashFlow[P]>
  }




  export type CashFlowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashFlowWhereInput
    orderBy?: CashFlowOrderByWithAggregationInput | CashFlowOrderByWithAggregationInput[]
    by: CashFlowScalarFieldEnum[] | CashFlowScalarFieldEnum
    having?: CashFlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashFlowCountAggregateInputType | true
    _avg?: CashFlowAvgAggregateInputType
    _sum?: CashFlowSumAggregateInputType
    _min?: CashFlowMinAggregateInputType
    _max?: CashFlowMaxAggregateInputType
  }

  export type CashFlowGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.FlowType
    amount: Decimal
    description: string | null
    createdAt: Date
    _count: CashFlowCountAggregateOutputType | null
    _avg: CashFlowAvgAggregateOutputType | null
    _sum: CashFlowSumAggregateOutputType | null
    _min: CashFlowMinAggregateOutputType | null
    _max: CashFlowMaxAggregateOutputType | null
  }

  type GetCashFlowGroupByPayload<T extends CashFlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashFlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashFlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashFlowGroupByOutputType[P]>
            : GetScalarType<T[P], CashFlowGroupByOutputType[P]>
        }
      >
    >


  export type CashFlowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    inflow?: boolean | CashFlow$inflowArgs<ExtArgs>
    outflow?: boolean | CashFlow$outflowArgs<ExtArgs>
  }, ExtArgs["result"]["cashFlow"]>

  export type CashFlowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashFlow"]>

  export type CashFlowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashFlow"]>

  export type CashFlowSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CashFlowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "amount" | "description" | "createdAt", ExtArgs["result"]["cashFlow"]>
  export type CashFlowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    inflow?: boolean | CashFlow$inflowArgs<ExtArgs>
    outflow?: boolean | CashFlow$outflowArgs<ExtArgs>
  }
  export type CashFlowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CashFlowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CashFlowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashFlow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      inflow: Prisma.$CashInflowPayload<ExtArgs> | null
      outflow: Prisma.$CashOutflowPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.FlowType
      amount: Prisma.Decimal
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["cashFlow"]>
    composites: {}
  }

  type CashFlowGetPayload<S extends boolean | null | undefined | CashFlowDefaultArgs> = $Result.GetResult<Prisma.$CashFlowPayload, S>

  type CashFlowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashFlowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashFlowCountAggregateInputType | true
    }

  export interface CashFlowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashFlow'], meta: { name: 'CashFlow' } }
    /**
     * Find zero or one CashFlow that matches the filter.
     * @param {CashFlowFindUniqueArgs} args - Arguments to find a CashFlow
     * @example
     * // Get one CashFlow
     * const cashFlow = await prisma.cashFlow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashFlowFindUniqueArgs>(args: SelectSubset<T, CashFlowFindUniqueArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashFlow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashFlowFindUniqueOrThrowArgs} args - Arguments to find a CashFlow
     * @example
     * // Get one CashFlow
     * const cashFlow = await prisma.cashFlow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashFlowFindUniqueOrThrowArgs>(args: SelectSubset<T, CashFlowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashFlow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowFindFirstArgs} args - Arguments to find a CashFlow
     * @example
     * // Get one CashFlow
     * const cashFlow = await prisma.cashFlow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashFlowFindFirstArgs>(args?: SelectSubset<T, CashFlowFindFirstArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashFlow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowFindFirstOrThrowArgs} args - Arguments to find a CashFlow
     * @example
     * // Get one CashFlow
     * const cashFlow = await prisma.cashFlow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashFlowFindFirstOrThrowArgs>(args?: SelectSubset<T, CashFlowFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashFlows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashFlows
     * const cashFlows = await prisma.cashFlow.findMany()
     * 
     * // Get first 10 CashFlows
     * const cashFlows = await prisma.cashFlow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashFlowWithIdOnly = await prisma.cashFlow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashFlowFindManyArgs>(args?: SelectSubset<T, CashFlowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashFlow.
     * @param {CashFlowCreateArgs} args - Arguments to create a CashFlow.
     * @example
     * // Create one CashFlow
     * const CashFlow = await prisma.cashFlow.create({
     *   data: {
     *     // ... data to create a CashFlow
     *   }
     * })
     * 
     */
    create<T extends CashFlowCreateArgs>(args: SelectSubset<T, CashFlowCreateArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashFlows.
     * @param {CashFlowCreateManyArgs} args - Arguments to create many CashFlows.
     * @example
     * // Create many CashFlows
     * const cashFlow = await prisma.cashFlow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashFlowCreateManyArgs>(args?: SelectSubset<T, CashFlowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashFlows and returns the data saved in the database.
     * @param {CashFlowCreateManyAndReturnArgs} args - Arguments to create many CashFlows.
     * @example
     * // Create many CashFlows
     * const cashFlow = await prisma.cashFlow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashFlows and only return the `id`
     * const cashFlowWithIdOnly = await prisma.cashFlow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashFlowCreateManyAndReturnArgs>(args?: SelectSubset<T, CashFlowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CashFlow.
     * @param {CashFlowDeleteArgs} args - Arguments to delete one CashFlow.
     * @example
     * // Delete one CashFlow
     * const CashFlow = await prisma.cashFlow.delete({
     *   where: {
     *     // ... filter to delete one CashFlow
     *   }
     * })
     * 
     */
    delete<T extends CashFlowDeleteArgs>(args: SelectSubset<T, CashFlowDeleteArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashFlow.
     * @param {CashFlowUpdateArgs} args - Arguments to update one CashFlow.
     * @example
     * // Update one CashFlow
     * const cashFlow = await prisma.cashFlow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashFlowUpdateArgs>(args: SelectSubset<T, CashFlowUpdateArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashFlows.
     * @param {CashFlowDeleteManyArgs} args - Arguments to filter CashFlows to delete.
     * @example
     * // Delete a few CashFlows
     * const { count } = await prisma.cashFlow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashFlowDeleteManyArgs>(args?: SelectSubset<T, CashFlowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashFlows
     * const cashFlow = await prisma.cashFlow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashFlowUpdateManyArgs>(args: SelectSubset<T, CashFlowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashFlows and returns the data updated in the database.
     * @param {CashFlowUpdateManyAndReturnArgs} args - Arguments to update many CashFlows.
     * @example
     * // Update many CashFlows
     * const cashFlow = await prisma.cashFlow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CashFlows and only return the `id`
     * const cashFlowWithIdOnly = await prisma.cashFlow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashFlowUpdateManyAndReturnArgs>(args: SelectSubset<T, CashFlowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CashFlow.
     * @param {CashFlowUpsertArgs} args - Arguments to update or create a CashFlow.
     * @example
     * // Update or create a CashFlow
     * const cashFlow = await prisma.cashFlow.upsert({
     *   create: {
     *     // ... data to create a CashFlow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashFlow we want to update
     *   }
     * })
     */
    upsert<T extends CashFlowUpsertArgs>(args: SelectSubset<T, CashFlowUpsertArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowCountArgs} args - Arguments to filter CashFlows to count.
     * @example
     * // Count the number of CashFlows
     * const count = await prisma.cashFlow.count({
     *   where: {
     *     // ... the filter for the CashFlows we want to count
     *   }
     * })
    **/
    count<T extends CashFlowCountArgs>(
      args?: Subset<T, CashFlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashFlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CashFlowAggregateArgs>(args: Subset<T, CashFlowAggregateArgs>): Prisma.PrismaPromise<GetCashFlowAggregateType<T>>

    /**
     * Group by CashFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CashFlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashFlowGroupByArgs['orderBy'] }
        : { orderBy?: CashFlowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CashFlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashFlow model
   */
  readonly fields: CashFlowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashFlow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashFlowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inflow<T extends CashFlow$inflowArgs<ExtArgs> = {}>(args?: Subset<T, CashFlow$inflowArgs<ExtArgs>>): Prisma__CashInflowClient<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    outflow<T extends CashFlow$outflowArgs<ExtArgs> = {}>(args?: Subset<T, CashFlow$outflowArgs<ExtArgs>>): Prisma__CashOutflowClient<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CashFlow model
   */
  interface CashFlowFieldRefs {
    readonly id: FieldRef<"CashFlow", 'String'>
    readonly userId: FieldRef<"CashFlow", 'String'>
    readonly type: FieldRef<"CashFlow", 'FlowType'>
    readonly amount: FieldRef<"CashFlow", 'Decimal'>
    readonly description: FieldRef<"CashFlow", 'String'>
    readonly createdAt: FieldRef<"CashFlow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashFlow findUnique
   */
  export type CashFlowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    /**
     * Filter, which CashFlow to fetch.
     */
    where: CashFlowWhereUniqueInput
  }

  /**
   * CashFlow findUniqueOrThrow
   */
  export type CashFlowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    /**
     * Filter, which CashFlow to fetch.
     */
    where: CashFlowWhereUniqueInput
  }

  /**
   * CashFlow findFirst
   */
  export type CashFlowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    /**
     * Filter, which CashFlow to fetch.
     */
    where?: CashFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashFlows to fetch.
     */
    orderBy?: CashFlowOrderByWithRelationInput | CashFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashFlows.
     */
    cursor?: CashFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashFlows.
     */
    distinct?: CashFlowScalarFieldEnum | CashFlowScalarFieldEnum[]
  }

  /**
   * CashFlow findFirstOrThrow
   */
  export type CashFlowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    /**
     * Filter, which CashFlow to fetch.
     */
    where?: CashFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashFlows to fetch.
     */
    orderBy?: CashFlowOrderByWithRelationInput | CashFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashFlows.
     */
    cursor?: CashFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashFlows.
     */
    distinct?: CashFlowScalarFieldEnum | CashFlowScalarFieldEnum[]
  }

  /**
   * CashFlow findMany
   */
  export type CashFlowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    /**
     * Filter, which CashFlows to fetch.
     */
    where?: CashFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashFlows to fetch.
     */
    orderBy?: CashFlowOrderByWithRelationInput | CashFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashFlows.
     */
    cursor?: CashFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashFlows.
     */
    distinct?: CashFlowScalarFieldEnum | CashFlowScalarFieldEnum[]
  }

  /**
   * CashFlow create
   */
  export type CashFlowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    /**
     * The data needed to create a CashFlow.
     */
    data: XOR<CashFlowCreateInput, CashFlowUncheckedCreateInput>
  }

  /**
   * CashFlow createMany
   */
  export type CashFlowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashFlows.
     */
    data: CashFlowCreateManyInput | CashFlowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashFlow createManyAndReturn
   */
  export type CashFlowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * The data used to create many CashFlows.
     */
    data: CashFlowCreateManyInput | CashFlowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashFlow update
   */
  export type CashFlowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    /**
     * The data needed to update a CashFlow.
     */
    data: XOR<CashFlowUpdateInput, CashFlowUncheckedUpdateInput>
    /**
     * Choose, which CashFlow to update.
     */
    where: CashFlowWhereUniqueInput
  }

  /**
   * CashFlow updateMany
   */
  export type CashFlowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashFlows.
     */
    data: XOR<CashFlowUpdateManyMutationInput, CashFlowUncheckedUpdateManyInput>
    /**
     * Filter which CashFlows to update
     */
    where?: CashFlowWhereInput
    /**
     * Limit how many CashFlows to update.
     */
    limit?: number
  }

  /**
   * CashFlow updateManyAndReturn
   */
  export type CashFlowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * The data used to update CashFlows.
     */
    data: XOR<CashFlowUpdateManyMutationInput, CashFlowUncheckedUpdateManyInput>
    /**
     * Filter which CashFlows to update
     */
    where?: CashFlowWhereInput
    /**
     * Limit how many CashFlows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashFlow upsert
   */
  export type CashFlowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    /**
     * The filter to search for the CashFlow to update in case it exists.
     */
    where: CashFlowWhereUniqueInput
    /**
     * In case the CashFlow found by the `where` argument doesn't exist, create a new CashFlow with this data.
     */
    create: XOR<CashFlowCreateInput, CashFlowUncheckedCreateInput>
    /**
     * In case the CashFlow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashFlowUpdateInput, CashFlowUncheckedUpdateInput>
  }

  /**
   * CashFlow delete
   */
  export type CashFlowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
    /**
     * Filter which CashFlow to delete.
     */
    where: CashFlowWhereUniqueInput
  }

  /**
   * CashFlow deleteMany
   */
  export type CashFlowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashFlows to delete
     */
    where?: CashFlowWhereInput
    /**
     * Limit how many CashFlows to delete.
     */
    limit?: number
  }

  /**
   * CashFlow.inflow
   */
  export type CashFlow$inflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    where?: CashInflowWhereInput
  }

  /**
   * CashFlow.outflow
   */
  export type CashFlow$outflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    where?: CashOutflowWhereInput
  }

  /**
   * CashFlow without action
   */
  export type CashFlowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlow
     */
    select?: CashFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlow
     */
    omit?: CashFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashFlowInclude<ExtArgs> | null
  }


  /**
   * Model CashInflow
   */

  export type AggregateCashInflow = {
    _count: CashInflowCountAggregateOutputType | null
    _min: CashInflowMinAggregateOutputType | null
    _max: CashInflowMaxAggregateOutputType | null
  }

  export type CashInflowMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    cashFlowId: string | null
    method: string | null
    createdAt: Date | null
  }

  export type CashInflowMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    cashFlowId: string | null
    method: string | null
    createdAt: Date | null
  }

  export type CashInflowCountAggregateOutputType = {
    id: number
    companyId: number
    cashFlowId: number
    method: number
    createdAt: number
    _all: number
  }


  export type CashInflowMinAggregateInputType = {
    id?: true
    companyId?: true
    cashFlowId?: true
    method?: true
    createdAt?: true
  }

  export type CashInflowMaxAggregateInputType = {
    id?: true
    companyId?: true
    cashFlowId?: true
    method?: true
    createdAt?: true
  }

  export type CashInflowCountAggregateInputType = {
    id?: true
    companyId?: true
    cashFlowId?: true
    method?: true
    createdAt?: true
    _all?: true
  }

  export type CashInflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashInflow to aggregate.
     */
    where?: CashInflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashInflows to fetch.
     */
    orderBy?: CashInflowOrderByWithRelationInput | CashInflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashInflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashInflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashInflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashInflows
    **/
    _count?: true | CashInflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashInflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashInflowMaxAggregateInputType
  }

  export type GetCashInflowAggregateType<T extends CashInflowAggregateArgs> = {
        [P in keyof T & keyof AggregateCashInflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashInflow[P]>
      : GetScalarType<T[P], AggregateCashInflow[P]>
  }




  export type CashInflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashInflowWhereInput
    orderBy?: CashInflowOrderByWithAggregationInput | CashInflowOrderByWithAggregationInput[]
    by: CashInflowScalarFieldEnum[] | CashInflowScalarFieldEnum
    having?: CashInflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashInflowCountAggregateInputType | true
    _min?: CashInflowMinAggregateInputType
    _max?: CashInflowMaxAggregateInputType
  }

  export type CashInflowGroupByOutputType = {
    id: string
    companyId: string
    cashFlowId: string
    method: string
    createdAt: Date
    _count: CashInflowCountAggregateOutputType | null
    _min: CashInflowMinAggregateOutputType | null
    _max: CashInflowMaxAggregateOutputType | null
  }

  type GetCashInflowGroupByPayload<T extends CashInflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashInflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashInflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashInflowGroupByOutputType[P]>
            : GetScalarType<T[P], CashInflowGroupByOutputType[P]>
        }
      >
    >


  export type CashInflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    cashFlowId?: boolean
    method?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashInflow"]>

  export type CashInflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    cashFlowId?: boolean
    method?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashInflow"]>

  export type CashInflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    cashFlowId?: boolean
    method?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashInflow"]>

  export type CashInflowSelectScalar = {
    id?: boolean
    companyId?: boolean
    cashFlowId?: boolean
    method?: boolean
    createdAt?: boolean
  }

  export type CashInflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "cashFlowId" | "method" | "createdAt", ExtArgs["result"]["cashInflow"]>
  export type CashInflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }
  export type CashInflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }
  export type CashInflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }

  export type $CashInflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashInflow"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      cashFlow: Prisma.$CashFlowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      cashFlowId: string
      method: string
      createdAt: Date
    }, ExtArgs["result"]["cashInflow"]>
    composites: {}
  }

  type CashInflowGetPayload<S extends boolean | null | undefined | CashInflowDefaultArgs> = $Result.GetResult<Prisma.$CashInflowPayload, S>

  type CashInflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashInflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashInflowCountAggregateInputType | true
    }

  export interface CashInflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashInflow'], meta: { name: 'CashInflow' } }
    /**
     * Find zero or one CashInflow that matches the filter.
     * @param {CashInflowFindUniqueArgs} args - Arguments to find a CashInflow
     * @example
     * // Get one CashInflow
     * const cashInflow = await prisma.cashInflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashInflowFindUniqueArgs>(args: SelectSubset<T, CashInflowFindUniqueArgs<ExtArgs>>): Prisma__CashInflowClient<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashInflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashInflowFindUniqueOrThrowArgs} args - Arguments to find a CashInflow
     * @example
     * // Get one CashInflow
     * const cashInflow = await prisma.cashInflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashInflowFindUniqueOrThrowArgs>(args: SelectSubset<T, CashInflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashInflowClient<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashInflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashInflowFindFirstArgs} args - Arguments to find a CashInflow
     * @example
     * // Get one CashInflow
     * const cashInflow = await prisma.cashInflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashInflowFindFirstArgs>(args?: SelectSubset<T, CashInflowFindFirstArgs<ExtArgs>>): Prisma__CashInflowClient<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashInflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashInflowFindFirstOrThrowArgs} args - Arguments to find a CashInflow
     * @example
     * // Get one CashInflow
     * const cashInflow = await prisma.cashInflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashInflowFindFirstOrThrowArgs>(args?: SelectSubset<T, CashInflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashInflowClient<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashInflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashInflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashInflows
     * const cashInflows = await prisma.cashInflow.findMany()
     * 
     * // Get first 10 CashInflows
     * const cashInflows = await prisma.cashInflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashInflowWithIdOnly = await prisma.cashInflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashInflowFindManyArgs>(args?: SelectSubset<T, CashInflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashInflow.
     * @param {CashInflowCreateArgs} args - Arguments to create a CashInflow.
     * @example
     * // Create one CashInflow
     * const CashInflow = await prisma.cashInflow.create({
     *   data: {
     *     // ... data to create a CashInflow
     *   }
     * })
     * 
     */
    create<T extends CashInflowCreateArgs>(args: SelectSubset<T, CashInflowCreateArgs<ExtArgs>>): Prisma__CashInflowClient<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashInflows.
     * @param {CashInflowCreateManyArgs} args - Arguments to create many CashInflows.
     * @example
     * // Create many CashInflows
     * const cashInflow = await prisma.cashInflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashInflowCreateManyArgs>(args?: SelectSubset<T, CashInflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashInflows and returns the data saved in the database.
     * @param {CashInflowCreateManyAndReturnArgs} args - Arguments to create many CashInflows.
     * @example
     * // Create many CashInflows
     * const cashInflow = await prisma.cashInflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashInflows and only return the `id`
     * const cashInflowWithIdOnly = await prisma.cashInflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashInflowCreateManyAndReturnArgs>(args?: SelectSubset<T, CashInflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CashInflow.
     * @param {CashInflowDeleteArgs} args - Arguments to delete one CashInflow.
     * @example
     * // Delete one CashInflow
     * const CashInflow = await prisma.cashInflow.delete({
     *   where: {
     *     // ... filter to delete one CashInflow
     *   }
     * })
     * 
     */
    delete<T extends CashInflowDeleteArgs>(args: SelectSubset<T, CashInflowDeleteArgs<ExtArgs>>): Prisma__CashInflowClient<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashInflow.
     * @param {CashInflowUpdateArgs} args - Arguments to update one CashInflow.
     * @example
     * // Update one CashInflow
     * const cashInflow = await prisma.cashInflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashInflowUpdateArgs>(args: SelectSubset<T, CashInflowUpdateArgs<ExtArgs>>): Prisma__CashInflowClient<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashInflows.
     * @param {CashInflowDeleteManyArgs} args - Arguments to filter CashInflows to delete.
     * @example
     * // Delete a few CashInflows
     * const { count } = await prisma.cashInflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashInflowDeleteManyArgs>(args?: SelectSubset<T, CashInflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashInflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashInflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashInflows
     * const cashInflow = await prisma.cashInflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashInflowUpdateManyArgs>(args: SelectSubset<T, CashInflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashInflows and returns the data updated in the database.
     * @param {CashInflowUpdateManyAndReturnArgs} args - Arguments to update many CashInflows.
     * @example
     * // Update many CashInflows
     * const cashInflow = await prisma.cashInflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CashInflows and only return the `id`
     * const cashInflowWithIdOnly = await prisma.cashInflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashInflowUpdateManyAndReturnArgs>(args: SelectSubset<T, CashInflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CashInflow.
     * @param {CashInflowUpsertArgs} args - Arguments to update or create a CashInflow.
     * @example
     * // Update or create a CashInflow
     * const cashInflow = await prisma.cashInflow.upsert({
     *   create: {
     *     // ... data to create a CashInflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashInflow we want to update
     *   }
     * })
     */
    upsert<T extends CashInflowUpsertArgs>(args: SelectSubset<T, CashInflowUpsertArgs<ExtArgs>>): Prisma__CashInflowClient<$Result.GetResult<Prisma.$CashInflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashInflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashInflowCountArgs} args - Arguments to filter CashInflows to count.
     * @example
     * // Count the number of CashInflows
     * const count = await prisma.cashInflow.count({
     *   where: {
     *     // ... the filter for the CashInflows we want to count
     *   }
     * })
    **/
    count<T extends CashInflowCountArgs>(
      args?: Subset<T, CashInflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashInflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashInflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashInflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CashInflowAggregateArgs>(args: Subset<T, CashInflowAggregateArgs>): Prisma.PrismaPromise<GetCashInflowAggregateType<T>>

    /**
     * Group by CashInflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashInflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CashInflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashInflowGroupByArgs['orderBy'] }
        : { orderBy?: CashInflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CashInflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashInflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashInflow model
   */
  readonly fields: CashInflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashInflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashInflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cashFlow<T extends CashFlowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CashFlowDefaultArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CashInflow model
   */
  interface CashInflowFieldRefs {
    readonly id: FieldRef<"CashInflow", 'String'>
    readonly companyId: FieldRef<"CashInflow", 'String'>
    readonly cashFlowId: FieldRef<"CashInflow", 'String'>
    readonly method: FieldRef<"CashInflow", 'String'>
    readonly createdAt: FieldRef<"CashInflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashInflow findUnique
   */
  export type CashInflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    /**
     * Filter, which CashInflow to fetch.
     */
    where: CashInflowWhereUniqueInput
  }

  /**
   * CashInflow findUniqueOrThrow
   */
  export type CashInflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    /**
     * Filter, which CashInflow to fetch.
     */
    where: CashInflowWhereUniqueInput
  }

  /**
   * CashInflow findFirst
   */
  export type CashInflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    /**
     * Filter, which CashInflow to fetch.
     */
    where?: CashInflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashInflows to fetch.
     */
    orderBy?: CashInflowOrderByWithRelationInput | CashInflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashInflows.
     */
    cursor?: CashInflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashInflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashInflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashInflows.
     */
    distinct?: CashInflowScalarFieldEnum | CashInflowScalarFieldEnum[]
  }

  /**
   * CashInflow findFirstOrThrow
   */
  export type CashInflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    /**
     * Filter, which CashInflow to fetch.
     */
    where?: CashInflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashInflows to fetch.
     */
    orderBy?: CashInflowOrderByWithRelationInput | CashInflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashInflows.
     */
    cursor?: CashInflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashInflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashInflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashInflows.
     */
    distinct?: CashInflowScalarFieldEnum | CashInflowScalarFieldEnum[]
  }

  /**
   * CashInflow findMany
   */
  export type CashInflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    /**
     * Filter, which CashInflows to fetch.
     */
    where?: CashInflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashInflows to fetch.
     */
    orderBy?: CashInflowOrderByWithRelationInput | CashInflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashInflows.
     */
    cursor?: CashInflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashInflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashInflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashInflows.
     */
    distinct?: CashInflowScalarFieldEnum | CashInflowScalarFieldEnum[]
  }

  /**
   * CashInflow create
   */
  export type CashInflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    /**
     * The data needed to create a CashInflow.
     */
    data: XOR<CashInflowCreateInput, CashInflowUncheckedCreateInput>
  }

  /**
   * CashInflow createMany
   */
  export type CashInflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashInflows.
     */
    data: CashInflowCreateManyInput | CashInflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashInflow createManyAndReturn
   */
  export type CashInflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * The data used to create many CashInflows.
     */
    data: CashInflowCreateManyInput | CashInflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashInflow update
   */
  export type CashInflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    /**
     * The data needed to update a CashInflow.
     */
    data: XOR<CashInflowUpdateInput, CashInflowUncheckedUpdateInput>
    /**
     * Choose, which CashInflow to update.
     */
    where: CashInflowWhereUniqueInput
  }

  /**
   * CashInflow updateMany
   */
  export type CashInflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashInflows.
     */
    data: XOR<CashInflowUpdateManyMutationInput, CashInflowUncheckedUpdateManyInput>
    /**
     * Filter which CashInflows to update
     */
    where?: CashInflowWhereInput
    /**
     * Limit how many CashInflows to update.
     */
    limit?: number
  }

  /**
   * CashInflow updateManyAndReturn
   */
  export type CashInflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * The data used to update CashInflows.
     */
    data: XOR<CashInflowUpdateManyMutationInput, CashInflowUncheckedUpdateManyInput>
    /**
     * Filter which CashInflows to update
     */
    where?: CashInflowWhereInput
    /**
     * Limit how many CashInflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashInflow upsert
   */
  export type CashInflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    /**
     * The filter to search for the CashInflow to update in case it exists.
     */
    where: CashInflowWhereUniqueInput
    /**
     * In case the CashInflow found by the `where` argument doesn't exist, create a new CashInflow with this data.
     */
    create: XOR<CashInflowCreateInput, CashInflowUncheckedCreateInput>
    /**
     * In case the CashInflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashInflowUpdateInput, CashInflowUncheckedUpdateInput>
  }

  /**
   * CashInflow delete
   */
  export type CashInflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
    /**
     * Filter which CashInflow to delete.
     */
    where: CashInflowWhereUniqueInput
  }

  /**
   * CashInflow deleteMany
   */
  export type CashInflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashInflows to delete
     */
    where?: CashInflowWhereInput
    /**
     * Limit how many CashInflows to delete.
     */
    limit?: number
  }

  /**
   * CashInflow without action
   */
  export type CashInflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashInflow
     */
    select?: CashInflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashInflow
     */
    omit?: CashInflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashInflowInclude<ExtArgs> | null
  }


  /**
   * Model CashOutflow
   */

  export type AggregateCashOutflow = {
    _count: CashOutflowCountAggregateOutputType | null
    _min: CashOutflowMinAggregateOutputType | null
    _max: CashOutflowMaxAggregateOutputType | null
  }

  export type CashOutflowMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    cashFlowId: string | null
    method: string | null
    createdAt: Date | null
  }

  export type CashOutflowMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    cashFlowId: string | null
    method: string | null
    createdAt: Date | null
  }

  export type CashOutflowCountAggregateOutputType = {
    id: number
    companyId: number
    cashFlowId: number
    method: number
    createdAt: number
    _all: number
  }


  export type CashOutflowMinAggregateInputType = {
    id?: true
    companyId?: true
    cashFlowId?: true
    method?: true
    createdAt?: true
  }

  export type CashOutflowMaxAggregateInputType = {
    id?: true
    companyId?: true
    cashFlowId?: true
    method?: true
    createdAt?: true
  }

  export type CashOutflowCountAggregateInputType = {
    id?: true
    companyId?: true
    cashFlowId?: true
    method?: true
    createdAt?: true
    _all?: true
  }

  export type CashOutflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashOutflow to aggregate.
     */
    where?: CashOutflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashOutflows to fetch.
     */
    orderBy?: CashOutflowOrderByWithRelationInput | CashOutflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashOutflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashOutflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashOutflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashOutflows
    **/
    _count?: true | CashOutflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashOutflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashOutflowMaxAggregateInputType
  }

  export type GetCashOutflowAggregateType<T extends CashOutflowAggregateArgs> = {
        [P in keyof T & keyof AggregateCashOutflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashOutflow[P]>
      : GetScalarType<T[P], AggregateCashOutflow[P]>
  }




  export type CashOutflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashOutflowWhereInput
    orderBy?: CashOutflowOrderByWithAggregationInput | CashOutflowOrderByWithAggregationInput[]
    by: CashOutflowScalarFieldEnum[] | CashOutflowScalarFieldEnum
    having?: CashOutflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashOutflowCountAggregateInputType | true
    _min?: CashOutflowMinAggregateInputType
    _max?: CashOutflowMaxAggregateInputType
  }

  export type CashOutflowGroupByOutputType = {
    id: string
    companyId: string
    cashFlowId: string
    method: string
    createdAt: Date
    _count: CashOutflowCountAggregateOutputType | null
    _min: CashOutflowMinAggregateOutputType | null
    _max: CashOutflowMaxAggregateOutputType | null
  }

  type GetCashOutflowGroupByPayload<T extends CashOutflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashOutflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashOutflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashOutflowGroupByOutputType[P]>
            : GetScalarType<T[P], CashOutflowGroupByOutputType[P]>
        }
      >
    >


  export type CashOutflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    cashFlowId?: boolean
    method?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashOutflow"]>

  export type CashOutflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    cashFlowId?: boolean
    method?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashOutflow"]>

  export type CashOutflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    cashFlowId?: boolean
    method?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashOutflow"]>

  export type CashOutflowSelectScalar = {
    id?: boolean
    companyId?: boolean
    cashFlowId?: boolean
    method?: boolean
    createdAt?: boolean
  }

  export type CashOutflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "cashFlowId" | "method" | "createdAt", ExtArgs["result"]["cashOutflow"]>
  export type CashOutflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }
  export type CashOutflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }
  export type CashOutflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    cashFlow?: boolean | CashFlowDefaultArgs<ExtArgs>
  }

  export type $CashOutflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashOutflow"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      cashFlow: Prisma.$CashFlowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      cashFlowId: string
      method: string
      createdAt: Date
    }, ExtArgs["result"]["cashOutflow"]>
    composites: {}
  }

  type CashOutflowGetPayload<S extends boolean | null | undefined | CashOutflowDefaultArgs> = $Result.GetResult<Prisma.$CashOutflowPayload, S>

  type CashOutflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashOutflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashOutflowCountAggregateInputType | true
    }

  export interface CashOutflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashOutflow'], meta: { name: 'CashOutflow' } }
    /**
     * Find zero or one CashOutflow that matches the filter.
     * @param {CashOutflowFindUniqueArgs} args - Arguments to find a CashOutflow
     * @example
     * // Get one CashOutflow
     * const cashOutflow = await prisma.cashOutflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashOutflowFindUniqueArgs>(args: SelectSubset<T, CashOutflowFindUniqueArgs<ExtArgs>>): Prisma__CashOutflowClient<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashOutflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashOutflowFindUniqueOrThrowArgs} args - Arguments to find a CashOutflow
     * @example
     * // Get one CashOutflow
     * const cashOutflow = await prisma.cashOutflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashOutflowFindUniqueOrThrowArgs>(args: SelectSubset<T, CashOutflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashOutflowClient<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashOutflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOutflowFindFirstArgs} args - Arguments to find a CashOutflow
     * @example
     * // Get one CashOutflow
     * const cashOutflow = await prisma.cashOutflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashOutflowFindFirstArgs>(args?: SelectSubset<T, CashOutflowFindFirstArgs<ExtArgs>>): Prisma__CashOutflowClient<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashOutflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOutflowFindFirstOrThrowArgs} args - Arguments to find a CashOutflow
     * @example
     * // Get one CashOutflow
     * const cashOutflow = await prisma.cashOutflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashOutflowFindFirstOrThrowArgs>(args?: SelectSubset<T, CashOutflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashOutflowClient<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashOutflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOutflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashOutflows
     * const cashOutflows = await prisma.cashOutflow.findMany()
     * 
     * // Get first 10 CashOutflows
     * const cashOutflows = await prisma.cashOutflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashOutflowWithIdOnly = await prisma.cashOutflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashOutflowFindManyArgs>(args?: SelectSubset<T, CashOutflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashOutflow.
     * @param {CashOutflowCreateArgs} args - Arguments to create a CashOutflow.
     * @example
     * // Create one CashOutflow
     * const CashOutflow = await prisma.cashOutflow.create({
     *   data: {
     *     // ... data to create a CashOutflow
     *   }
     * })
     * 
     */
    create<T extends CashOutflowCreateArgs>(args: SelectSubset<T, CashOutflowCreateArgs<ExtArgs>>): Prisma__CashOutflowClient<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashOutflows.
     * @param {CashOutflowCreateManyArgs} args - Arguments to create many CashOutflows.
     * @example
     * // Create many CashOutflows
     * const cashOutflow = await prisma.cashOutflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashOutflowCreateManyArgs>(args?: SelectSubset<T, CashOutflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashOutflows and returns the data saved in the database.
     * @param {CashOutflowCreateManyAndReturnArgs} args - Arguments to create many CashOutflows.
     * @example
     * // Create many CashOutflows
     * const cashOutflow = await prisma.cashOutflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashOutflows and only return the `id`
     * const cashOutflowWithIdOnly = await prisma.cashOutflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashOutflowCreateManyAndReturnArgs>(args?: SelectSubset<T, CashOutflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CashOutflow.
     * @param {CashOutflowDeleteArgs} args - Arguments to delete one CashOutflow.
     * @example
     * // Delete one CashOutflow
     * const CashOutflow = await prisma.cashOutflow.delete({
     *   where: {
     *     // ... filter to delete one CashOutflow
     *   }
     * })
     * 
     */
    delete<T extends CashOutflowDeleteArgs>(args: SelectSubset<T, CashOutflowDeleteArgs<ExtArgs>>): Prisma__CashOutflowClient<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashOutflow.
     * @param {CashOutflowUpdateArgs} args - Arguments to update one CashOutflow.
     * @example
     * // Update one CashOutflow
     * const cashOutflow = await prisma.cashOutflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashOutflowUpdateArgs>(args: SelectSubset<T, CashOutflowUpdateArgs<ExtArgs>>): Prisma__CashOutflowClient<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashOutflows.
     * @param {CashOutflowDeleteManyArgs} args - Arguments to filter CashOutflows to delete.
     * @example
     * // Delete a few CashOutflows
     * const { count } = await prisma.cashOutflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashOutflowDeleteManyArgs>(args?: SelectSubset<T, CashOutflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashOutflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOutflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashOutflows
     * const cashOutflow = await prisma.cashOutflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashOutflowUpdateManyArgs>(args: SelectSubset<T, CashOutflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashOutflows and returns the data updated in the database.
     * @param {CashOutflowUpdateManyAndReturnArgs} args - Arguments to update many CashOutflows.
     * @example
     * // Update many CashOutflows
     * const cashOutflow = await prisma.cashOutflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CashOutflows and only return the `id`
     * const cashOutflowWithIdOnly = await prisma.cashOutflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashOutflowUpdateManyAndReturnArgs>(args: SelectSubset<T, CashOutflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CashOutflow.
     * @param {CashOutflowUpsertArgs} args - Arguments to update or create a CashOutflow.
     * @example
     * // Update or create a CashOutflow
     * const cashOutflow = await prisma.cashOutflow.upsert({
     *   create: {
     *     // ... data to create a CashOutflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashOutflow we want to update
     *   }
     * })
     */
    upsert<T extends CashOutflowUpsertArgs>(args: SelectSubset<T, CashOutflowUpsertArgs<ExtArgs>>): Prisma__CashOutflowClient<$Result.GetResult<Prisma.$CashOutflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashOutflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOutflowCountArgs} args - Arguments to filter CashOutflows to count.
     * @example
     * // Count the number of CashOutflows
     * const count = await prisma.cashOutflow.count({
     *   where: {
     *     // ... the filter for the CashOutflows we want to count
     *   }
     * })
    **/
    count<T extends CashOutflowCountArgs>(
      args?: Subset<T, CashOutflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashOutflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashOutflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOutflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CashOutflowAggregateArgs>(args: Subset<T, CashOutflowAggregateArgs>): Prisma.PrismaPromise<GetCashOutflowAggregateType<T>>

    /**
     * Group by CashOutflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOutflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CashOutflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashOutflowGroupByArgs['orderBy'] }
        : { orderBy?: CashOutflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CashOutflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashOutflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashOutflow model
   */
  readonly fields: CashOutflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashOutflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashOutflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cashFlow<T extends CashFlowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CashFlowDefaultArgs<ExtArgs>>): Prisma__CashFlowClient<$Result.GetResult<Prisma.$CashFlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CashOutflow model
   */
  interface CashOutflowFieldRefs {
    readonly id: FieldRef<"CashOutflow", 'String'>
    readonly companyId: FieldRef<"CashOutflow", 'String'>
    readonly cashFlowId: FieldRef<"CashOutflow", 'String'>
    readonly method: FieldRef<"CashOutflow", 'String'>
    readonly createdAt: FieldRef<"CashOutflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashOutflow findUnique
   */
  export type CashOutflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    /**
     * Filter, which CashOutflow to fetch.
     */
    where: CashOutflowWhereUniqueInput
  }

  /**
   * CashOutflow findUniqueOrThrow
   */
  export type CashOutflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    /**
     * Filter, which CashOutflow to fetch.
     */
    where: CashOutflowWhereUniqueInput
  }

  /**
   * CashOutflow findFirst
   */
  export type CashOutflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    /**
     * Filter, which CashOutflow to fetch.
     */
    where?: CashOutflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashOutflows to fetch.
     */
    orderBy?: CashOutflowOrderByWithRelationInput | CashOutflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashOutflows.
     */
    cursor?: CashOutflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashOutflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashOutflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashOutflows.
     */
    distinct?: CashOutflowScalarFieldEnum | CashOutflowScalarFieldEnum[]
  }

  /**
   * CashOutflow findFirstOrThrow
   */
  export type CashOutflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    /**
     * Filter, which CashOutflow to fetch.
     */
    where?: CashOutflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashOutflows to fetch.
     */
    orderBy?: CashOutflowOrderByWithRelationInput | CashOutflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashOutflows.
     */
    cursor?: CashOutflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashOutflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashOutflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashOutflows.
     */
    distinct?: CashOutflowScalarFieldEnum | CashOutflowScalarFieldEnum[]
  }

  /**
   * CashOutflow findMany
   */
  export type CashOutflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    /**
     * Filter, which CashOutflows to fetch.
     */
    where?: CashOutflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashOutflows to fetch.
     */
    orderBy?: CashOutflowOrderByWithRelationInput | CashOutflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashOutflows.
     */
    cursor?: CashOutflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashOutflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashOutflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashOutflows.
     */
    distinct?: CashOutflowScalarFieldEnum | CashOutflowScalarFieldEnum[]
  }

  /**
   * CashOutflow create
   */
  export type CashOutflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    /**
     * The data needed to create a CashOutflow.
     */
    data: XOR<CashOutflowCreateInput, CashOutflowUncheckedCreateInput>
  }

  /**
   * CashOutflow createMany
   */
  export type CashOutflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashOutflows.
     */
    data: CashOutflowCreateManyInput | CashOutflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashOutflow createManyAndReturn
   */
  export type CashOutflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * The data used to create many CashOutflows.
     */
    data: CashOutflowCreateManyInput | CashOutflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashOutflow update
   */
  export type CashOutflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    /**
     * The data needed to update a CashOutflow.
     */
    data: XOR<CashOutflowUpdateInput, CashOutflowUncheckedUpdateInput>
    /**
     * Choose, which CashOutflow to update.
     */
    where: CashOutflowWhereUniqueInput
  }

  /**
   * CashOutflow updateMany
   */
  export type CashOutflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashOutflows.
     */
    data: XOR<CashOutflowUpdateManyMutationInput, CashOutflowUncheckedUpdateManyInput>
    /**
     * Filter which CashOutflows to update
     */
    where?: CashOutflowWhereInput
    /**
     * Limit how many CashOutflows to update.
     */
    limit?: number
  }

  /**
   * CashOutflow updateManyAndReturn
   */
  export type CashOutflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * The data used to update CashOutflows.
     */
    data: XOR<CashOutflowUpdateManyMutationInput, CashOutflowUncheckedUpdateManyInput>
    /**
     * Filter which CashOutflows to update
     */
    where?: CashOutflowWhereInput
    /**
     * Limit how many CashOutflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashOutflow upsert
   */
  export type CashOutflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    /**
     * The filter to search for the CashOutflow to update in case it exists.
     */
    where: CashOutflowWhereUniqueInput
    /**
     * In case the CashOutflow found by the `where` argument doesn't exist, create a new CashOutflow with this data.
     */
    create: XOR<CashOutflowCreateInput, CashOutflowUncheckedCreateInput>
    /**
     * In case the CashOutflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashOutflowUpdateInput, CashOutflowUncheckedUpdateInput>
  }

  /**
   * CashOutflow delete
   */
  export type CashOutflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
    /**
     * Filter which CashOutflow to delete.
     */
    where: CashOutflowWhereUniqueInput
  }

  /**
   * CashOutflow deleteMany
   */
  export type CashOutflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashOutflows to delete
     */
    where?: CashOutflowWhereInput
    /**
     * Limit how many CashOutflows to delete.
     */
    limit?: number
  }

  /**
   * CashOutflow without action
   */
  export type CashOutflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOutflow
     */
    select?: CashOutflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOutflow
     */
    omit?: CashOutflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashOutflowInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyId: 'companyId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyId: 'companyId',
    categoryId: 'categoryId',
    stockingUnit: 'stockingUnit',
    quantity: 'quantity',
    purchaseCost: 'purchaseCost',
    salePrice: 'salePrice',
    lowStockThreshold: 'lowStockThreshold',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SaleUnitScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    unitName: 'unitName',
    price: 'price',
    conversionFactor: 'conversionFactor'
  };

  export type SaleUnitScalarFieldEnum = (typeof SaleUnitScalarFieldEnum)[keyof typeof SaleUnitScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    userId: 'userId',
    totalAmount: 'totalAmount',
    status: 'status',
    saleDate: 'saleDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SaleItemScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    productId: 'productId',
    saleUnitId: 'saleUnitId',
    quantitySold: 'quantitySold',
    priceAtSale: 'priceAtSale'
  };

  export type SaleItemScalarFieldEnum = (typeof SaleItemScalarFieldEnum)[keyof typeof SaleItemScalarFieldEnum]


  export const InventoryAdjustmentScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId',
    adjustmentQty: 'adjustmentQty',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type InventoryAdjustmentScalarFieldEnum = (typeof InventoryAdjustmentScalarFieldEnum)[keyof typeof InventoryAdjustmentScalarFieldEnum]


  export const CashFlowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    amount: 'amount',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CashFlowScalarFieldEnum = (typeof CashFlowScalarFieldEnum)[keyof typeof CashFlowScalarFieldEnum]


  export const CashInflowScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    cashFlowId: 'cashFlowId',
    method: 'method',
    createdAt: 'createdAt'
  };

  export type CashInflowScalarFieldEnum = (typeof CashInflowScalarFieldEnum)[keyof typeof CashInflowScalarFieldEnum]


  export const CashOutflowScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    cashFlowId: 'cashFlowId',
    method: 'method',
    createdAt: 'createdAt'
  };

  export type CashOutflowScalarFieldEnum = (typeof CashOutflowScalarFieldEnum)[keyof typeof CashOutflowScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SaleStatus'
   */
  export type EnumSaleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SaleStatus'>
    


  /**
   * Reference to a field of type 'SaleStatus[]'
   */
  export type ListEnumSaleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SaleStatus[]'>
    


  /**
   * Reference to a field of type 'FlowType'
   */
  export type EnumFlowTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlowType'>
    


  /**
   * Reference to a field of type 'FlowType[]'
   */
  export type ListEnumFlowTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlowType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    products?: ProductListRelationFilter
    sales?: SaleListRelationFilter
    inflows?: CashInflowListRelationFilter
    outflows?: CashOutflowListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
    inflows?: CashInflowOrderByRelationAggregateInput
    outflows?: CashOutflowOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    products?: ProductListRelationFilter
    sales?: SaleListRelationFilter
    inflows?: CashInflowListRelationFilter
    outflows?: CashOutflowListRelationFilter
    categories?: CategoryListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    companyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    sales?: SaleListRelationFilter
    cashFlows?: CashFlowListRelationFilter
    inventoryAdjustments?: InventoryAdjustmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    sales?: SaleOrderByRelationAggregateInput
    cashFlows?: CashFlowOrderByRelationAggregateInput
    inventoryAdjustments?: InventoryAdjustmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    companyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    sales?: SaleListRelationFilter
    cashFlows?: CashFlowListRelationFilter
    inventoryAdjustments?: InventoryAdjustmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    companyId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    companyId?: StringFilter<"Category"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_name?: CategoryCompanyIdNameCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    companyId?: StringFilter<"Category"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    products?: ProductListRelationFilter
  }, "id" | "companyId_name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    companyId?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    companyId?: StringFilter<"Product"> | string
    categoryId?: StringNullableFilter<"Product"> | string | null
    stockingUnit?: StringFilter<"Product"> | string
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    saleUnits?: SaleUnitListRelationFilter
    saleItems?: SaleItemListRelationFilter
    inventoryAdjustments?: InventoryAdjustmentListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    stockingUnit?: SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    salePrice?: SortOrder
    lowStockThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    saleUnits?: SaleUnitOrderByRelationAggregateInput
    saleItems?: SaleItemOrderByRelationAggregateInput
    inventoryAdjustments?: InventoryAdjustmentOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_name?: ProductCompanyIdNameCompoundUniqueInput
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    companyId?: StringFilter<"Product"> | string
    categoryId?: StringNullableFilter<"Product"> | string | null
    stockingUnit?: StringFilter<"Product"> | string
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    saleUnits?: SaleUnitListRelationFilter
    saleItems?: SaleItemListRelationFilter
    inventoryAdjustments?: InventoryAdjustmentListRelationFilter
  }, "id" | "companyId_name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    stockingUnit?: SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    salePrice?: SortOrder
    lowStockThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    companyId?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    stockingUnit?: StringWithAggregatesFilter<"Product"> | string
    quantity?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type SaleUnitWhereInput = {
    AND?: SaleUnitWhereInput | SaleUnitWhereInput[]
    OR?: SaleUnitWhereInput[]
    NOT?: SaleUnitWhereInput | SaleUnitWhereInput[]
    id?: StringFilter<"SaleUnit"> | string
    productId?: StringFilter<"SaleUnit"> | string
    unitName?: StringFilter<"SaleUnit"> | string
    price?: DecimalFilter<"SaleUnit"> | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFilter<"SaleUnit"> | Decimal | DecimalJsLike | number | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    saleItems?: SaleItemListRelationFilter
  }

  export type SaleUnitOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    unitName?: SortOrder
    price?: SortOrder
    conversionFactor?: SortOrder
    product?: ProductOrderByWithRelationInput
    saleItems?: SaleItemOrderByRelationAggregateInput
  }

  export type SaleUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_unitName?: SaleUnitProductIdUnitNameCompoundUniqueInput
    AND?: SaleUnitWhereInput | SaleUnitWhereInput[]
    OR?: SaleUnitWhereInput[]
    NOT?: SaleUnitWhereInput | SaleUnitWhereInput[]
    productId?: StringFilter<"SaleUnit"> | string
    unitName?: StringFilter<"SaleUnit"> | string
    price?: DecimalFilter<"SaleUnit"> | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFilter<"SaleUnit"> | Decimal | DecimalJsLike | number | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    saleItems?: SaleItemListRelationFilter
  }, "id" | "productId_unitName">

  export type SaleUnitOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    unitName?: SortOrder
    price?: SortOrder
    conversionFactor?: SortOrder
    _count?: SaleUnitCountOrderByAggregateInput
    _avg?: SaleUnitAvgOrderByAggregateInput
    _max?: SaleUnitMaxOrderByAggregateInput
    _min?: SaleUnitMinOrderByAggregateInput
    _sum?: SaleUnitSumOrderByAggregateInput
  }

  export type SaleUnitScalarWhereWithAggregatesInput = {
    AND?: SaleUnitScalarWhereWithAggregatesInput | SaleUnitScalarWhereWithAggregatesInput[]
    OR?: SaleUnitScalarWhereWithAggregatesInput[]
    NOT?: SaleUnitScalarWhereWithAggregatesInput | SaleUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleUnit"> | string
    productId?: StringWithAggregatesFilter<"SaleUnit"> | string
    unitName?: StringWithAggregatesFilter<"SaleUnit"> | string
    price?: DecimalWithAggregatesFilter<"SaleUnit"> | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalWithAggregatesFilter<"SaleUnit"> | Decimal | DecimalJsLike | number | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    companyId?: StringFilter<"Sale"> | string
    userId?: StringFilter<"Sale"> | string
    totalAmount?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFilter<"Sale"> | $Enums.SaleStatus
    saleDate?: DateTimeFilter<"Sale"> | Date | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: SaleItemListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    saleDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    items?: SaleItemOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    companyId?: StringFilter<"Sale"> | string
    userId?: StringFilter<"Sale"> | string
    totalAmount?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFilter<"Sale"> | $Enums.SaleStatus
    saleDate?: DateTimeFilter<"Sale"> | Date | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: SaleItemListRelationFilter
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    saleDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    companyId?: StringWithAggregatesFilter<"Sale"> | string
    userId?: StringWithAggregatesFilter<"Sale"> | string
    totalAmount?: DecimalWithAggregatesFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusWithAggregatesFilter<"Sale"> | $Enums.SaleStatus
    saleDate?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
  }

  export type SaleItemWhereInput = {
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    saleUnitId?: StringFilter<"SaleItem"> | string
    quantitySold?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    saleUnit?: XOR<SaleUnitScalarRelationFilter, SaleUnitWhereInput>
  }

  export type SaleItemOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    saleUnitId?: SortOrder
    quantitySold?: SortOrder
    priceAtSale?: SortOrder
    sale?: SaleOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    saleUnit?: SaleUnitOrderByWithRelationInput
  }

  export type SaleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    saleUnitId?: StringFilter<"SaleItem"> | string
    quantitySold?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    saleUnit?: XOR<SaleUnitScalarRelationFilter, SaleUnitWhereInput>
  }, "id">

  export type SaleItemOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    saleUnitId?: SortOrder
    quantitySold?: SortOrder
    priceAtSale?: SortOrder
    _count?: SaleItemCountOrderByAggregateInput
    _avg?: SaleItemAvgOrderByAggregateInput
    _max?: SaleItemMaxOrderByAggregateInput
    _min?: SaleItemMinOrderByAggregateInput
    _sum?: SaleItemSumOrderByAggregateInput
  }

  export type SaleItemScalarWhereWithAggregatesInput = {
    AND?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    OR?: SaleItemScalarWhereWithAggregatesInput[]
    NOT?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleItem"> | string
    saleId?: StringWithAggregatesFilter<"SaleItem"> | string
    productId?: StringWithAggregatesFilter<"SaleItem"> | string
    saleUnitId?: StringWithAggregatesFilter<"SaleItem"> | string
    quantitySold?: DecimalWithAggregatesFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalWithAggregatesFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
  }

  export type InventoryAdjustmentWhereInput = {
    AND?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    OR?: InventoryAdjustmentWhereInput[]
    NOT?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    id?: StringFilter<"InventoryAdjustment"> | string
    productId?: StringFilter<"InventoryAdjustment"> | string
    userId?: StringFilter<"InventoryAdjustment"> | string
    adjustmentQty?: DecimalFilter<"InventoryAdjustment"> | Decimal | DecimalJsLike | number | string
    reason?: StringFilter<"InventoryAdjustment"> | string
    createdAt?: DateTimeFilter<"InventoryAdjustment"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InventoryAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    adjustmentQty?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type InventoryAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    OR?: InventoryAdjustmentWhereInput[]
    NOT?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    productId?: StringFilter<"InventoryAdjustment"> | string
    userId?: StringFilter<"InventoryAdjustment"> | string
    adjustmentQty?: DecimalFilter<"InventoryAdjustment"> | Decimal | DecimalJsLike | number | string
    reason?: StringFilter<"InventoryAdjustment"> | string
    createdAt?: DateTimeFilter<"InventoryAdjustment"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InventoryAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    adjustmentQty?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: InventoryAdjustmentCountOrderByAggregateInput
    _avg?: InventoryAdjustmentAvgOrderByAggregateInput
    _max?: InventoryAdjustmentMaxOrderByAggregateInput
    _min?: InventoryAdjustmentMinOrderByAggregateInput
    _sum?: InventoryAdjustmentSumOrderByAggregateInput
  }

  export type InventoryAdjustmentScalarWhereWithAggregatesInput = {
    AND?: InventoryAdjustmentScalarWhereWithAggregatesInput | InventoryAdjustmentScalarWhereWithAggregatesInput[]
    OR?: InventoryAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: InventoryAdjustmentScalarWhereWithAggregatesInput | InventoryAdjustmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryAdjustment"> | string
    productId?: StringWithAggregatesFilter<"InventoryAdjustment"> | string
    userId?: StringWithAggregatesFilter<"InventoryAdjustment"> | string
    adjustmentQty?: DecimalWithAggregatesFilter<"InventoryAdjustment"> | Decimal | DecimalJsLike | number | string
    reason?: StringWithAggregatesFilter<"InventoryAdjustment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InventoryAdjustment"> | Date | string
  }

  export type CashFlowWhereInput = {
    AND?: CashFlowWhereInput | CashFlowWhereInput[]
    OR?: CashFlowWhereInput[]
    NOT?: CashFlowWhereInput | CashFlowWhereInput[]
    id?: StringFilter<"CashFlow"> | string
    userId?: StringFilter<"CashFlow"> | string
    type?: EnumFlowTypeFilter<"CashFlow"> | $Enums.FlowType
    amount?: DecimalFilter<"CashFlow"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"CashFlow"> | string | null
    createdAt?: DateTimeFilter<"CashFlow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inflow?: XOR<CashInflowNullableScalarRelationFilter, CashInflowWhereInput> | null
    outflow?: XOR<CashOutflowNullableScalarRelationFilter, CashOutflowWhereInput> | null
  }

  export type CashFlowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    inflow?: CashInflowOrderByWithRelationInput
    outflow?: CashOutflowOrderByWithRelationInput
  }

  export type CashFlowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CashFlowWhereInput | CashFlowWhereInput[]
    OR?: CashFlowWhereInput[]
    NOT?: CashFlowWhereInput | CashFlowWhereInput[]
    userId?: StringFilter<"CashFlow"> | string
    type?: EnumFlowTypeFilter<"CashFlow"> | $Enums.FlowType
    amount?: DecimalFilter<"CashFlow"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"CashFlow"> | string | null
    createdAt?: DateTimeFilter<"CashFlow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inflow?: XOR<CashInflowNullableScalarRelationFilter, CashInflowWhereInput> | null
    outflow?: XOR<CashOutflowNullableScalarRelationFilter, CashOutflowWhereInput> | null
  }, "id">

  export type CashFlowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CashFlowCountOrderByAggregateInput
    _avg?: CashFlowAvgOrderByAggregateInput
    _max?: CashFlowMaxOrderByAggregateInput
    _min?: CashFlowMinOrderByAggregateInput
    _sum?: CashFlowSumOrderByAggregateInput
  }

  export type CashFlowScalarWhereWithAggregatesInput = {
    AND?: CashFlowScalarWhereWithAggregatesInput | CashFlowScalarWhereWithAggregatesInput[]
    OR?: CashFlowScalarWhereWithAggregatesInput[]
    NOT?: CashFlowScalarWhereWithAggregatesInput | CashFlowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CashFlow"> | string
    userId?: StringWithAggregatesFilter<"CashFlow"> | string
    type?: EnumFlowTypeWithAggregatesFilter<"CashFlow"> | $Enums.FlowType
    amount?: DecimalWithAggregatesFilter<"CashFlow"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"CashFlow"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CashFlow"> | Date | string
  }

  export type CashInflowWhereInput = {
    AND?: CashInflowWhereInput | CashInflowWhereInput[]
    OR?: CashInflowWhereInput[]
    NOT?: CashInflowWhereInput | CashInflowWhereInput[]
    id?: StringFilter<"CashInflow"> | string
    companyId?: StringFilter<"CashInflow"> | string
    cashFlowId?: StringFilter<"CashInflow"> | string
    method?: StringFilter<"CashInflow"> | string
    createdAt?: DateTimeFilter<"CashInflow"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    cashFlow?: XOR<CashFlowScalarRelationFilter, CashFlowWhereInput>
  }

  export type CashInflowOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    cashFlow?: CashFlowOrderByWithRelationInput
  }

  export type CashInflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cashFlowId?: string
    AND?: CashInflowWhereInput | CashInflowWhereInput[]
    OR?: CashInflowWhereInput[]
    NOT?: CashInflowWhereInput | CashInflowWhereInput[]
    companyId?: StringFilter<"CashInflow"> | string
    method?: StringFilter<"CashInflow"> | string
    createdAt?: DateTimeFilter<"CashInflow"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    cashFlow?: XOR<CashFlowScalarRelationFilter, CashFlowWhereInput>
  }, "id" | "cashFlowId">

  export type CashInflowOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    _count?: CashInflowCountOrderByAggregateInput
    _max?: CashInflowMaxOrderByAggregateInput
    _min?: CashInflowMinOrderByAggregateInput
  }

  export type CashInflowScalarWhereWithAggregatesInput = {
    AND?: CashInflowScalarWhereWithAggregatesInput | CashInflowScalarWhereWithAggregatesInput[]
    OR?: CashInflowScalarWhereWithAggregatesInput[]
    NOT?: CashInflowScalarWhereWithAggregatesInput | CashInflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CashInflow"> | string
    companyId?: StringWithAggregatesFilter<"CashInflow"> | string
    cashFlowId?: StringWithAggregatesFilter<"CashInflow"> | string
    method?: StringWithAggregatesFilter<"CashInflow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CashInflow"> | Date | string
  }

  export type CashOutflowWhereInput = {
    AND?: CashOutflowWhereInput | CashOutflowWhereInput[]
    OR?: CashOutflowWhereInput[]
    NOT?: CashOutflowWhereInput | CashOutflowWhereInput[]
    id?: StringFilter<"CashOutflow"> | string
    companyId?: StringFilter<"CashOutflow"> | string
    cashFlowId?: StringFilter<"CashOutflow"> | string
    method?: StringFilter<"CashOutflow"> | string
    createdAt?: DateTimeFilter<"CashOutflow"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    cashFlow?: XOR<CashFlowScalarRelationFilter, CashFlowWhereInput>
  }

  export type CashOutflowOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    cashFlow?: CashFlowOrderByWithRelationInput
  }

  export type CashOutflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cashFlowId?: string
    AND?: CashOutflowWhereInput | CashOutflowWhereInput[]
    OR?: CashOutflowWhereInput[]
    NOT?: CashOutflowWhereInput | CashOutflowWhereInput[]
    companyId?: StringFilter<"CashOutflow"> | string
    method?: StringFilter<"CashOutflow"> | string
    createdAt?: DateTimeFilter<"CashOutflow"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    cashFlow?: XOR<CashFlowScalarRelationFilter, CashFlowWhereInput>
  }, "id" | "cashFlowId">

  export type CashOutflowOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    _count?: CashOutflowCountOrderByAggregateInput
    _max?: CashOutflowMaxOrderByAggregateInput
    _min?: CashOutflowMinOrderByAggregateInput
  }

  export type CashOutflowScalarWhereWithAggregatesInput = {
    AND?: CashOutflowScalarWhereWithAggregatesInput | CashOutflowScalarWhereWithAggregatesInput[]
    OR?: CashOutflowScalarWhereWithAggregatesInput[]
    NOT?: CashOutflowScalarWhereWithAggregatesInput | CashOutflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CashOutflow"> | string
    companyId?: StringWithAggregatesFilter<"CashOutflow"> | string
    cashFlowId?: StringWithAggregatesFilter<"CashOutflow"> | string
    method?: StringWithAggregatesFilter<"CashOutflow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CashOutflow"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowCreateNestedManyWithoutCompanyInput
    categories?: CategoryCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowUncheckedCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowUncheckedCreateNestedManyWithoutCompanyInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    sales?: SaleUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUncheckedUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    sales?: SaleCreateNestedManyWithoutUserInput
    cashFlows?: CashFlowCreateNestedManyWithoutUserInput
    inventoryAdjustments?: InventoryAdjustmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
    cashFlows?: CashFlowUncheckedCreateNestedManyWithoutUserInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
    cashFlows?: CashFlowUpdateManyWithoutUserNestedInput
    inventoryAdjustments?: InventoryAdjustmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
    cashFlows?: CashFlowUncheckedUpdateManyWithoutUserNestedInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    company: CompanyCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    companyId: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    companyId: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    saleUnits?: SaleUnitCreateNestedManyWithoutProductInput
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    companyId: string
    categoryId?: string | null
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saleUnits?: SaleUnitUncheckedCreateNestedManyWithoutProductInput
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    saleUnits?: SaleUnitUpdateManyWithoutProductNestedInput
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleUnits?: SaleUnitUncheckedUpdateManyWithoutProductNestedInput
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    companyId: string
    categoryId?: string | null
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUnitCreateInput = {
    id?: string
    unitName: string
    price: Decimal | DecimalJsLike | number | string
    conversionFactor: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutSaleUnitsInput
    saleItems?: SaleItemCreateNestedManyWithoutSaleUnitInput
  }

  export type SaleUnitUncheckedCreateInput = {
    id?: string
    productId: string
    unitName: string
    price: Decimal | DecimalJsLike | number | string
    conversionFactor: Decimal | DecimalJsLike | number | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutSaleUnitInput
  }

  export type SaleUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutSaleUnitsNestedInput
    saleItems?: SaleItemUpdateManyWithoutSaleUnitNestedInput
  }

  export type SaleUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    unitName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutSaleUnitNestedInput
  }

  export type SaleUnitCreateManyInput = {
    id?: string
    productId: string
    unitName: string
    price: Decimal | DecimalJsLike | number | string
    conversionFactor: Decimal | DecimalJsLike | number | string
  }

  export type SaleUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    unitName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleCreateInput = {
    id?: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutSalesInput
    user: UserCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    companyId: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutSalesNestedInput
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: string
    companyId: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateInput = {
    id?: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
    sale: SaleCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutSaleItemsInput
    saleUnit: SaleUnitCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateInput = {
    id?: string
    saleId: string
    productId: string
    saleUnitId: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
    saleUnit?: SaleUnitUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    saleUnitId?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateManyInput = {
    id?: string
    saleId: string
    productId: string
    saleUnitId: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    saleUnitId?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InventoryAdjustmentCreateInput = {
    id?: string
    adjustmentQty: Decimal | DecimalJsLike | number | string
    reason: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoryAdjustmentsInput
    user: UserCreateNestedOneWithoutInventoryAdjustmentsInput
  }

  export type InventoryAdjustmentUncheckedCreateInput = {
    id?: string
    productId: string
    userId: string
    adjustmentQty: Decimal | DecimalJsLike | number | string
    reason: string
    createdAt?: Date | string
  }

  export type InventoryAdjustmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoryAdjustmentsNestedInput
    user?: UserUpdateOneRequiredWithoutInventoryAdjustmentsNestedInput
  }

  export type InventoryAdjustmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentCreateManyInput = {
    id?: string
    productId: string
    userId: string
    adjustmentQty: Decimal | DecimalJsLike | number | string
    reason: string
    createdAt?: Date | string
  }

  export type InventoryAdjustmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashFlowCreateInput = {
    id?: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCashFlowsInput
    inflow?: CashInflowCreateNestedOneWithoutCashFlowInput
    outflow?: CashOutflowCreateNestedOneWithoutCashFlowInput
  }

  export type CashFlowUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    inflow?: CashInflowUncheckedCreateNestedOneWithoutCashFlowInput
    outflow?: CashOutflowUncheckedCreateNestedOneWithoutCashFlowInput
  }

  export type CashFlowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCashFlowsNestedInput
    inflow?: CashInflowUpdateOneWithoutCashFlowNestedInput
    outflow?: CashOutflowUpdateOneWithoutCashFlowNestedInput
  }

  export type CashFlowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inflow?: CashInflowUncheckedUpdateOneWithoutCashFlowNestedInput
    outflow?: CashOutflowUncheckedUpdateOneWithoutCashFlowNestedInput
  }

  export type CashFlowCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
  }

  export type CashFlowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashFlowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashInflowCreateInput = {
    id?: string
    method: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutInflowsInput
    cashFlow: CashFlowCreateNestedOneWithoutInflowInput
  }

  export type CashInflowUncheckedCreateInput = {
    id?: string
    companyId: string
    cashFlowId: string
    method: string
    createdAt?: Date | string
  }

  export type CashInflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutInflowsNestedInput
    cashFlow?: CashFlowUpdateOneRequiredWithoutInflowNestedInput
  }

  export type CashInflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    cashFlowId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashInflowCreateManyInput = {
    id?: string
    companyId: string
    cashFlowId: string
    method: string
    createdAt?: Date | string
  }

  export type CashInflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashInflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    cashFlowId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashOutflowCreateInput = {
    id?: string
    method: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutOutflowsInput
    cashFlow: CashFlowCreateNestedOneWithoutOutflowInput
  }

  export type CashOutflowUncheckedCreateInput = {
    id?: string
    companyId: string
    cashFlowId: string
    method: string
    createdAt?: Date | string
  }

  export type CashOutflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutOutflowsNestedInput
    cashFlow?: CashFlowUpdateOneRequiredWithoutOutflowNestedInput
  }

  export type CashOutflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    cashFlowId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashOutflowCreateManyInput = {
    id?: string
    companyId: string
    cashFlowId: string
    method: string
    createdAt?: Date | string
  }

  export type CashOutflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashOutflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    cashFlowId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type CashInflowListRelationFilter = {
    every?: CashInflowWhereInput
    some?: CashInflowWhereInput
    none?: CashInflowWhereInput
  }

  export type CashOutflowListRelationFilter = {
    every?: CashOutflowWhereInput
    some?: CashOutflowWhereInput
    none?: CashOutflowWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CashInflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CashOutflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CashFlowListRelationFilter = {
    every?: CashFlowWhereInput
    some?: CashFlowWhereInput
    none?: CashFlowWhereInput
  }

  export type InventoryAdjustmentListRelationFilter = {
    every?: InventoryAdjustmentWhereInput
    some?: InventoryAdjustmentWhereInput
    none?: InventoryAdjustmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CashFlowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryAdjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CategoryCompanyIdNameCompoundUniqueInput = {
    companyId: string
    name: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type SaleUnitListRelationFilter = {
    every?: SaleUnitWhereInput
    some?: SaleUnitWhereInput
    none?: SaleUnitWhereInput
  }

  export type SaleItemListRelationFilter = {
    every?: SaleItemWhereInput
    some?: SaleItemWhereInput
    none?: SaleItemWhereInput
  }

  export type SaleUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCompanyIdNameCompoundUniqueInput = {
    companyId: string
    name: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    categoryId?: SortOrder
    stockingUnit?: SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    salePrice?: SortOrder
    lowStockThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    quantity?: SortOrder
    purchaseCost?: SortOrder
    salePrice?: SortOrder
    lowStockThreshold?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    categoryId?: SortOrder
    stockingUnit?: SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    salePrice?: SortOrder
    lowStockThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    categoryId?: SortOrder
    stockingUnit?: SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    salePrice?: SortOrder
    lowStockThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    quantity?: SortOrder
    purchaseCost?: SortOrder
    salePrice?: SortOrder
    lowStockThreshold?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SaleUnitProductIdUnitNameCompoundUniqueInput = {
    productId: string
    unitName: string
  }

  export type SaleUnitCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    unitName?: SortOrder
    price?: SortOrder
    conversionFactor?: SortOrder
  }

  export type SaleUnitAvgOrderByAggregateInput = {
    price?: SortOrder
    conversionFactor?: SortOrder
  }

  export type SaleUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    unitName?: SortOrder
    price?: SortOrder
    conversionFactor?: SortOrder
  }

  export type SaleUnitMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    unitName?: SortOrder
    price?: SortOrder
    conversionFactor?: SortOrder
  }

  export type SaleUnitSumOrderByAggregateInput = {
    price?: SortOrder
    conversionFactor?: SortOrder
  }

  export type EnumSaleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleStatus | EnumSaleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleStatusFilter<$PrismaModel> | $Enums.SaleStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    saleDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    saleDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    saleDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumSaleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleStatus | EnumSaleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleStatusWithAggregatesFilter<$PrismaModel> | $Enums.SaleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSaleStatusFilter<$PrismaModel>
    _max?: NestedEnumSaleStatusFilter<$PrismaModel>
  }

  export type SaleScalarRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type SaleUnitScalarRelationFilter = {
    is?: SaleUnitWhereInput
    isNot?: SaleUnitWhereInput
  }

  export type SaleItemCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    saleUnitId?: SortOrder
    quantitySold?: SortOrder
    priceAtSale?: SortOrder
  }

  export type SaleItemAvgOrderByAggregateInput = {
    quantitySold?: SortOrder
    priceAtSale?: SortOrder
  }

  export type SaleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    saleUnitId?: SortOrder
    quantitySold?: SortOrder
    priceAtSale?: SortOrder
  }

  export type SaleItemMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    saleUnitId?: SortOrder
    quantitySold?: SortOrder
    priceAtSale?: SortOrder
  }

  export type SaleItemSumOrderByAggregateInput = {
    quantitySold?: SortOrder
    priceAtSale?: SortOrder
  }

  export type InventoryAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    adjustmentQty?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryAdjustmentAvgOrderByAggregateInput = {
    adjustmentQty?: SortOrder
  }

  export type InventoryAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    adjustmentQty?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    adjustmentQty?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryAdjustmentSumOrderByAggregateInput = {
    adjustmentQty?: SortOrder
  }

  export type EnumFlowTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowType | EnumFlowTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FlowType[] | ListEnumFlowTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlowType[] | ListEnumFlowTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFlowTypeFilter<$PrismaModel> | $Enums.FlowType
  }

  export type CashInflowNullableScalarRelationFilter = {
    is?: CashInflowWhereInput | null
    isNot?: CashInflowWhereInput | null
  }

  export type CashOutflowNullableScalarRelationFilter = {
    is?: CashOutflowWhereInput | null
    isNot?: CashOutflowWhereInput | null
  }

  export type CashFlowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CashFlowAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CashFlowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CashFlowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CashFlowSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumFlowTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowType | EnumFlowTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FlowType[] | ListEnumFlowTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlowType[] | ListEnumFlowTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFlowTypeWithAggregatesFilter<$PrismaModel> | $Enums.FlowType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlowTypeFilter<$PrismaModel>
    _max?: NestedEnumFlowTypeFilter<$PrismaModel>
  }

  export type CashFlowScalarRelationFilter = {
    is?: CashFlowWhereInput
    isNot?: CashFlowWhereInput
  }

  export type CashInflowCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type CashInflowMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type CashInflowMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type CashOutflowCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type CashOutflowMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type CashOutflowMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    cashFlowId?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutCompanyInput = {
    create?: XOR<SaleCreateWithoutCompanyInput, SaleUncheckedCreateWithoutCompanyInput> | SaleCreateWithoutCompanyInput[] | SaleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCompanyInput | SaleCreateOrConnectWithoutCompanyInput[]
    createMany?: SaleCreateManyCompanyInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CashInflowCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CashInflowCreateWithoutCompanyInput, CashInflowUncheckedCreateWithoutCompanyInput> | CashInflowCreateWithoutCompanyInput[] | CashInflowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CashInflowCreateOrConnectWithoutCompanyInput | CashInflowCreateOrConnectWithoutCompanyInput[]
    createMany?: CashInflowCreateManyCompanyInputEnvelope
    connect?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
  }

  export type CashOutflowCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CashOutflowCreateWithoutCompanyInput, CashOutflowUncheckedCreateWithoutCompanyInput> | CashOutflowCreateWithoutCompanyInput[] | CashOutflowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CashOutflowCreateOrConnectWithoutCompanyInput | CashOutflowCreateOrConnectWithoutCompanyInput[]
    createMany?: CashOutflowCreateManyCompanyInputEnvelope
    connect?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CategoryCreateWithoutCompanyInput, CategoryUncheckedCreateWithoutCompanyInput> | CategoryCreateWithoutCompanyInput[] | CategoryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCompanyInput | CategoryCreateOrConnectWithoutCompanyInput[]
    createMany?: CategoryCreateManyCompanyInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<SaleCreateWithoutCompanyInput, SaleUncheckedCreateWithoutCompanyInput> | SaleCreateWithoutCompanyInput[] | SaleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCompanyInput | SaleCreateOrConnectWithoutCompanyInput[]
    createMany?: SaleCreateManyCompanyInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CashInflowUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CashInflowCreateWithoutCompanyInput, CashInflowUncheckedCreateWithoutCompanyInput> | CashInflowCreateWithoutCompanyInput[] | CashInflowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CashInflowCreateOrConnectWithoutCompanyInput | CashInflowCreateOrConnectWithoutCompanyInput[]
    createMany?: CashInflowCreateManyCompanyInputEnvelope
    connect?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
  }

  export type CashOutflowUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CashOutflowCreateWithoutCompanyInput, CashOutflowUncheckedCreateWithoutCompanyInput> | CashOutflowCreateWithoutCompanyInput[] | CashOutflowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CashOutflowCreateOrConnectWithoutCompanyInput | CashOutflowCreateOrConnectWithoutCompanyInput[]
    createMany?: CashOutflowCreateManyCompanyInputEnvelope
    connect?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CategoryCreateWithoutCompanyInput, CategoryUncheckedCreateWithoutCompanyInput> | CategoryCreateWithoutCompanyInput[] | CategoryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCompanyInput | CategoryCreateOrConnectWithoutCompanyInput[]
    createMany?: CategoryCreateManyCompanyInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput | ProductUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCompanyInput | ProductUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCompanyInput | ProductUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<SaleCreateWithoutCompanyInput, SaleUncheckedCreateWithoutCompanyInput> | SaleCreateWithoutCompanyInput[] | SaleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCompanyInput | SaleCreateOrConnectWithoutCompanyInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCompanyInput | SaleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: SaleCreateManyCompanyInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCompanyInput | SaleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCompanyInput | SaleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CashInflowUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CashInflowCreateWithoutCompanyInput, CashInflowUncheckedCreateWithoutCompanyInput> | CashInflowCreateWithoutCompanyInput[] | CashInflowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CashInflowCreateOrConnectWithoutCompanyInput | CashInflowCreateOrConnectWithoutCompanyInput[]
    upsert?: CashInflowUpsertWithWhereUniqueWithoutCompanyInput | CashInflowUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CashInflowCreateManyCompanyInputEnvelope
    set?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
    disconnect?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
    delete?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
    connect?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
    update?: CashInflowUpdateWithWhereUniqueWithoutCompanyInput | CashInflowUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CashInflowUpdateManyWithWhereWithoutCompanyInput | CashInflowUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CashInflowScalarWhereInput | CashInflowScalarWhereInput[]
  }

  export type CashOutflowUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CashOutflowCreateWithoutCompanyInput, CashOutflowUncheckedCreateWithoutCompanyInput> | CashOutflowCreateWithoutCompanyInput[] | CashOutflowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CashOutflowCreateOrConnectWithoutCompanyInput | CashOutflowCreateOrConnectWithoutCompanyInput[]
    upsert?: CashOutflowUpsertWithWhereUniqueWithoutCompanyInput | CashOutflowUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CashOutflowCreateManyCompanyInputEnvelope
    set?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
    disconnect?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
    delete?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
    connect?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
    update?: CashOutflowUpdateWithWhereUniqueWithoutCompanyInput | CashOutflowUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CashOutflowUpdateManyWithWhereWithoutCompanyInput | CashOutflowUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CashOutflowScalarWhereInput | CashOutflowScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CategoryCreateWithoutCompanyInput, CategoryUncheckedCreateWithoutCompanyInput> | CategoryCreateWithoutCompanyInput[] | CategoryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCompanyInput | CategoryCreateOrConnectWithoutCompanyInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutCompanyInput | CategoryUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CategoryCreateManyCompanyInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutCompanyInput | CategoryUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutCompanyInput | CategoryUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput | ProductUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCompanyInput | ProductUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCompanyInput | ProductUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<SaleCreateWithoutCompanyInput, SaleUncheckedCreateWithoutCompanyInput> | SaleCreateWithoutCompanyInput[] | SaleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCompanyInput | SaleCreateOrConnectWithoutCompanyInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCompanyInput | SaleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: SaleCreateManyCompanyInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCompanyInput | SaleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCompanyInput | SaleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CashInflowUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CashInflowCreateWithoutCompanyInput, CashInflowUncheckedCreateWithoutCompanyInput> | CashInflowCreateWithoutCompanyInput[] | CashInflowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CashInflowCreateOrConnectWithoutCompanyInput | CashInflowCreateOrConnectWithoutCompanyInput[]
    upsert?: CashInflowUpsertWithWhereUniqueWithoutCompanyInput | CashInflowUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CashInflowCreateManyCompanyInputEnvelope
    set?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
    disconnect?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
    delete?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
    connect?: CashInflowWhereUniqueInput | CashInflowWhereUniqueInput[]
    update?: CashInflowUpdateWithWhereUniqueWithoutCompanyInput | CashInflowUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CashInflowUpdateManyWithWhereWithoutCompanyInput | CashInflowUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CashInflowScalarWhereInput | CashInflowScalarWhereInput[]
  }

  export type CashOutflowUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CashOutflowCreateWithoutCompanyInput, CashOutflowUncheckedCreateWithoutCompanyInput> | CashOutflowCreateWithoutCompanyInput[] | CashOutflowUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CashOutflowCreateOrConnectWithoutCompanyInput | CashOutflowCreateOrConnectWithoutCompanyInput[]
    upsert?: CashOutflowUpsertWithWhereUniqueWithoutCompanyInput | CashOutflowUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CashOutflowCreateManyCompanyInputEnvelope
    set?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
    disconnect?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
    delete?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
    connect?: CashOutflowWhereUniqueInput | CashOutflowWhereUniqueInput[]
    update?: CashOutflowUpdateWithWhereUniqueWithoutCompanyInput | CashOutflowUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CashOutflowUpdateManyWithWhereWithoutCompanyInput | CashOutflowUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CashOutflowScalarWhereInput | CashOutflowScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CategoryCreateWithoutCompanyInput, CategoryUncheckedCreateWithoutCompanyInput> | CategoryCreateWithoutCompanyInput[] | CategoryUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCompanyInput | CategoryCreateOrConnectWithoutCompanyInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutCompanyInput | CategoryUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CategoryCreateManyCompanyInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutCompanyInput | CategoryUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutCompanyInput | CategoryUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type SaleCreateNestedManyWithoutUserInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CashFlowCreateNestedManyWithoutUserInput = {
    create?: XOR<CashFlowCreateWithoutUserInput, CashFlowUncheckedCreateWithoutUserInput> | CashFlowCreateWithoutUserInput[] | CashFlowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CashFlowCreateOrConnectWithoutUserInput | CashFlowCreateOrConnectWithoutUserInput[]
    createMany?: CashFlowCreateManyUserInputEnvelope
    connect?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
  }

  export type InventoryAdjustmentCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutUserInput, InventoryAdjustmentUncheckedCreateWithoutUserInput> | InventoryAdjustmentCreateWithoutUserInput[] | InventoryAdjustmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutUserInput | InventoryAdjustmentCreateOrConnectWithoutUserInput[]
    createMany?: InventoryAdjustmentCreateManyUserInputEnvelope
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CashFlowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CashFlowCreateWithoutUserInput, CashFlowUncheckedCreateWithoutUserInput> | CashFlowCreateWithoutUserInput[] | CashFlowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CashFlowCreateOrConnectWithoutUserInput | CashFlowCreateOrConnectWithoutUserInput[]
    createMany?: CashFlowCreateManyUserInputEnvelope
    connect?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
  }

  export type InventoryAdjustmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutUserInput, InventoryAdjustmentUncheckedCreateWithoutUserInput> | InventoryAdjustmentCreateWithoutUserInput[] | InventoryAdjustmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutUserInput | InventoryAdjustmentCreateOrConnectWithoutUserInput[]
    createMany?: InventoryAdjustmentCreateManyUserInputEnvelope
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type SaleUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUserInput | SaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUserInput | SaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUserInput | SaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CashFlowUpdateManyWithoutUserNestedInput = {
    create?: XOR<CashFlowCreateWithoutUserInput, CashFlowUncheckedCreateWithoutUserInput> | CashFlowCreateWithoutUserInput[] | CashFlowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CashFlowCreateOrConnectWithoutUserInput | CashFlowCreateOrConnectWithoutUserInput[]
    upsert?: CashFlowUpsertWithWhereUniqueWithoutUserInput | CashFlowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CashFlowCreateManyUserInputEnvelope
    set?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
    disconnect?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
    delete?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
    connect?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
    update?: CashFlowUpdateWithWhereUniqueWithoutUserInput | CashFlowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CashFlowUpdateManyWithWhereWithoutUserInput | CashFlowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CashFlowScalarWhereInput | CashFlowScalarWhereInput[]
  }

  export type InventoryAdjustmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutUserInput, InventoryAdjustmentUncheckedCreateWithoutUserInput> | InventoryAdjustmentCreateWithoutUserInput[] | InventoryAdjustmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutUserInput | InventoryAdjustmentCreateOrConnectWithoutUserInput[]
    upsert?: InventoryAdjustmentUpsertWithWhereUniqueWithoutUserInput | InventoryAdjustmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryAdjustmentCreateManyUserInputEnvelope
    set?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    disconnect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    delete?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    update?: InventoryAdjustmentUpdateWithWhereUniqueWithoutUserInput | InventoryAdjustmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryAdjustmentUpdateManyWithWhereWithoutUserInput | InventoryAdjustmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUserInput | SaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUserInput | SaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUserInput | SaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CashFlowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CashFlowCreateWithoutUserInput, CashFlowUncheckedCreateWithoutUserInput> | CashFlowCreateWithoutUserInput[] | CashFlowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CashFlowCreateOrConnectWithoutUserInput | CashFlowCreateOrConnectWithoutUserInput[]
    upsert?: CashFlowUpsertWithWhereUniqueWithoutUserInput | CashFlowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CashFlowCreateManyUserInputEnvelope
    set?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
    disconnect?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
    delete?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
    connect?: CashFlowWhereUniqueInput | CashFlowWhereUniqueInput[]
    update?: CashFlowUpdateWithWhereUniqueWithoutUserInput | CashFlowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CashFlowUpdateManyWithWhereWithoutUserInput | CashFlowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CashFlowScalarWhereInput | CashFlowScalarWhereInput[]
  }

  export type InventoryAdjustmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutUserInput, InventoryAdjustmentUncheckedCreateWithoutUserInput> | InventoryAdjustmentCreateWithoutUserInput[] | InventoryAdjustmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutUserInput | InventoryAdjustmentCreateOrConnectWithoutUserInput[]
    upsert?: InventoryAdjustmentUpsertWithWhereUniqueWithoutUserInput | InventoryAdjustmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryAdjustmentCreateManyUserInputEnvelope
    set?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    disconnect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    delete?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    update?: InventoryAdjustmentUpdateWithWhereUniqueWithoutUserInput | InventoryAdjustmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryAdjustmentUpdateManyWithWhereWithoutUserInput | InventoryAdjustmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<CompanyCreateWithoutCategoriesInput, CompanyUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCategoriesInput
    connect?: CompanyWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<CompanyCreateWithoutCategoriesInput, CompanyUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCategoriesInput
    upsert?: CompanyUpsertWithoutCategoriesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCategoriesInput, CompanyUpdateWithoutCategoriesInput>, CompanyUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutProductsInput = {
    create?: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SaleUnitCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleUnitCreateWithoutProductInput, SaleUnitUncheckedCreateWithoutProductInput> | SaleUnitCreateWithoutProductInput[] | SaleUnitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleUnitCreateOrConnectWithoutProductInput | SaleUnitCreateOrConnectWithoutProductInput[]
    createMany?: SaleUnitCreateManyProductInputEnvelope
    connect?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
  }

  export type SaleItemCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type InventoryAdjustmentCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutProductInput, InventoryAdjustmentUncheckedCreateWithoutProductInput> | InventoryAdjustmentCreateWithoutProductInput[] | InventoryAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutProductInput | InventoryAdjustmentCreateOrConnectWithoutProductInput[]
    createMany?: InventoryAdjustmentCreateManyProductInputEnvelope
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
  }

  export type SaleUnitUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleUnitCreateWithoutProductInput, SaleUnitUncheckedCreateWithoutProductInput> | SaleUnitCreateWithoutProductInput[] | SaleUnitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleUnitCreateOrConnectWithoutProductInput | SaleUnitCreateOrConnectWithoutProductInput[]
    createMany?: SaleUnitCreateManyProductInputEnvelope
    connect?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type InventoryAdjustmentUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutProductInput, InventoryAdjustmentUncheckedCreateWithoutProductInput> | InventoryAdjustmentCreateWithoutProductInput[] | InventoryAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutProductInput | InventoryAdjustmentCreateOrConnectWithoutProductInput[]
    createMany?: InventoryAdjustmentCreateManyProductInputEnvelope
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput
    upsert?: CompanyUpsertWithoutProductsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProductsInput, CompanyUpdateWithoutProductsInput>, CompanyUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SaleUnitUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleUnitCreateWithoutProductInput, SaleUnitUncheckedCreateWithoutProductInput> | SaleUnitCreateWithoutProductInput[] | SaleUnitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleUnitCreateOrConnectWithoutProductInput | SaleUnitCreateOrConnectWithoutProductInput[]
    upsert?: SaleUnitUpsertWithWhereUniqueWithoutProductInput | SaleUnitUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleUnitCreateManyProductInputEnvelope
    set?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
    disconnect?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
    delete?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
    connect?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
    update?: SaleUnitUpdateWithWhereUniqueWithoutProductInput | SaleUnitUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleUnitUpdateManyWithWhereWithoutProductInput | SaleUnitUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleUnitScalarWhereInput | SaleUnitScalarWhereInput[]
  }

  export type SaleItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type InventoryAdjustmentUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutProductInput, InventoryAdjustmentUncheckedCreateWithoutProductInput> | InventoryAdjustmentCreateWithoutProductInput[] | InventoryAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutProductInput | InventoryAdjustmentCreateOrConnectWithoutProductInput[]
    upsert?: InventoryAdjustmentUpsertWithWhereUniqueWithoutProductInput | InventoryAdjustmentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryAdjustmentCreateManyProductInputEnvelope
    set?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    disconnect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    delete?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    update?: InventoryAdjustmentUpdateWithWhereUniqueWithoutProductInput | InventoryAdjustmentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryAdjustmentUpdateManyWithWhereWithoutProductInput | InventoryAdjustmentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
  }

  export type SaleUnitUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleUnitCreateWithoutProductInput, SaleUnitUncheckedCreateWithoutProductInput> | SaleUnitCreateWithoutProductInput[] | SaleUnitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleUnitCreateOrConnectWithoutProductInput | SaleUnitCreateOrConnectWithoutProductInput[]
    upsert?: SaleUnitUpsertWithWhereUniqueWithoutProductInput | SaleUnitUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleUnitCreateManyProductInputEnvelope
    set?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
    disconnect?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
    delete?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
    connect?: SaleUnitWhereUniqueInput | SaleUnitWhereUniqueInput[]
    update?: SaleUnitUpdateWithWhereUniqueWithoutProductInput | SaleUnitUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleUnitUpdateManyWithWhereWithoutProductInput | SaleUnitUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleUnitScalarWhereInput | SaleUnitScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type InventoryAdjustmentUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutProductInput, InventoryAdjustmentUncheckedCreateWithoutProductInput> | InventoryAdjustmentCreateWithoutProductInput[] | InventoryAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutProductInput | InventoryAdjustmentCreateOrConnectWithoutProductInput[]
    upsert?: InventoryAdjustmentUpsertWithWhereUniqueWithoutProductInput | InventoryAdjustmentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryAdjustmentCreateManyProductInputEnvelope
    set?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    disconnect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    delete?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    update?: InventoryAdjustmentUpdateWithWhereUniqueWithoutProductInput | InventoryAdjustmentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryAdjustmentUpdateManyWithWhereWithoutProductInput | InventoryAdjustmentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSaleUnitsInput = {
    create?: XOR<ProductCreateWithoutSaleUnitsInput, ProductUncheckedCreateWithoutSaleUnitsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleUnitsInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutSaleUnitInput = {
    create?: XOR<SaleItemCreateWithoutSaleUnitInput, SaleItemUncheckedCreateWithoutSaleUnitInput> | SaleItemCreateWithoutSaleUnitInput[] | SaleItemUncheckedCreateWithoutSaleUnitInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleUnitInput | SaleItemCreateOrConnectWithoutSaleUnitInput[]
    createMany?: SaleItemCreateManySaleUnitInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutSaleUnitInput = {
    create?: XOR<SaleItemCreateWithoutSaleUnitInput, SaleItemUncheckedCreateWithoutSaleUnitInput> | SaleItemCreateWithoutSaleUnitInput[] | SaleItemUncheckedCreateWithoutSaleUnitInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleUnitInput | SaleItemCreateOrConnectWithoutSaleUnitInput[]
    createMany?: SaleItemCreateManySaleUnitInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutSaleUnitsNestedInput = {
    create?: XOR<ProductCreateWithoutSaleUnitsInput, ProductUncheckedCreateWithoutSaleUnitsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleUnitsInput
    upsert?: ProductUpsertWithoutSaleUnitsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSaleUnitsInput, ProductUpdateWithoutSaleUnitsInput>, ProductUncheckedUpdateWithoutSaleUnitsInput>
  }

  export type SaleItemUpdateManyWithoutSaleUnitNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleUnitInput, SaleItemUncheckedCreateWithoutSaleUnitInput> | SaleItemCreateWithoutSaleUnitInput[] | SaleItemUncheckedCreateWithoutSaleUnitInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleUnitInput | SaleItemCreateOrConnectWithoutSaleUnitInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleUnitInput | SaleItemUpsertWithWhereUniqueWithoutSaleUnitInput[]
    createMany?: SaleItemCreateManySaleUnitInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleUnitInput | SaleItemUpdateWithWhereUniqueWithoutSaleUnitInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleUnitInput | SaleItemUpdateManyWithWhereWithoutSaleUnitInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleUnitNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleUnitInput, SaleItemUncheckedCreateWithoutSaleUnitInput> | SaleItemCreateWithoutSaleUnitInput[] | SaleItemUncheckedCreateWithoutSaleUnitInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleUnitInput | SaleItemCreateOrConnectWithoutSaleUnitInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleUnitInput | SaleItemUpsertWithWhereUniqueWithoutSaleUnitInput[]
    createMany?: SaleItemCreateManySaleUnitInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleUnitInput | SaleItemUpdateWithWhereUniqueWithoutSaleUnitInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleUnitInput | SaleItemUpdateManyWithWhereWithoutSaleUnitInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutSalesInput = {
    create?: XOR<CompanyCreateWithoutSalesInput, CompanyUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSalesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSalesInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    connect?: UserWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type EnumSaleStatusFieldUpdateOperationsInput = {
    set?: $Enums.SaleStatus
  }

  export type CompanyUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<CompanyCreateWithoutSalesInput, CompanyUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSalesInput
    upsert?: CompanyUpsertWithoutSalesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutSalesInput, CompanyUpdateWithoutSalesInput>, CompanyUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    upsert?: UserUpsertWithoutSalesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesInput, UserUpdateWithoutSalesInput>, UserUncheckedUpdateWithoutSalesInput>
  }

  export type SaleItemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SaleCreateNestedOneWithoutItemsInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    connect?: SaleWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSaleItemsInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleUnitCreateNestedOneWithoutSaleItemsInput = {
    create?: XOR<SaleUnitCreateWithoutSaleItemsInput, SaleUnitUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: SaleUnitCreateOrConnectWithoutSaleItemsInput
    connect?: SaleUnitWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    upsert?: SaleUpsertWithoutItemsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutItemsInput, SaleUpdateWithoutItemsInput>, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutSaleItemsNestedInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    upsert?: ProductUpsertWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSaleItemsInput, ProductUpdateWithoutSaleItemsInput>, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type SaleUnitUpdateOneRequiredWithoutSaleItemsNestedInput = {
    create?: XOR<SaleUnitCreateWithoutSaleItemsInput, SaleUnitUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: SaleUnitCreateOrConnectWithoutSaleItemsInput
    upsert?: SaleUnitUpsertWithoutSaleItemsInput
    connect?: SaleUnitWhereUniqueInput
    update?: XOR<XOR<SaleUnitUpdateToOneWithWhereWithoutSaleItemsInput, SaleUnitUpdateWithoutSaleItemsInput>, SaleUnitUncheckedUpdateWithoutSaleItemsInput>
  }

  export type ProductCreateNestedOneWithoutInventoryAdjustmentsInput = {
    create?: XOR<ProductCreateWithoutInventoryAdjustmentsInput, ProductUncheckedCreateWithoutInventoryAdjustmentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryAdjustmentsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInventoryAdjustmentsInput = {
    create?: XOR<UserCreateWithoutInventoryAdjustmentsInput, UserUncheckedCreateWithoutInventoryAdjustmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryAdjustmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutInventoryAdjustmentsNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryAdjustmentsInput, ProductUncheckedCreateWithoutInventoryAdjustmentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryAdjustmentsInput
    upsert?: ProductUpsertWithoutInventoryAdjustmentsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryAdjustmentsInput, ProductUpdateWithoutInventoryAdjustmentsInput>, ProductUncheckedUpdateWithoutInventoryAdjustmentsInput>
  }

  export type UserUpdateOneRequiredWithoutInventoryAdjustmentsNestedInput = {
    create?: XOR<UserCreateWithoutInventoryAdjustmentsInput, UserUncheckedCreateWithoutInventoryAdjustmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryAdjustmentsInput
    upsert?: UserUpsertWithoutInventoryAdjustmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryAdjustmentsInput, UserUpdateWithoutInventoryAdjustmentsInput>, UserUncheckedUpdateWithoutInventoryAdjustmentsInput>
  }

  export type UserCreateNestedOneWithoutCashFlowsInput = {
    create?: XOR<UserCreateWithoutCashFlowsInput, UserUncheckedCreateWithoutCashFlowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCashFlowsInput
    connect?: UserWhereUniqueInput
  }

  export type CashInflowCreateNestedOneWithoutCashFlowInput = {
    create?: XOR<CashInflowCreateWithoutCashFlowInput, CashInflowUncheckedCreateWithoutCashFlowInput>
    connectOrCreate?: CashInflowCreateOrConnectWithoutCashFlowInput
    connect?: CashInflowWhereUniqueInput
  }

  export type CashOutflowCreateNestedOneWithoutCashFlowInput = {
    create?: XOR<CashOutflowCreateWithoutCashFlowInput, CashOutflowUncheckedCreateWithoutCashFlowInput>
    connectOrCreate?: CashOutflowCreateOrConnectWithoutCashFlowInput
    connect?: CashOutflowWhereUniqueInput
  }

  export type CashInflowUncheckedCreateNestedOneWithoutCashFlowInput = {
    create?: XOR<CashInflowCreateWithoutCashFlowInput, CashInflowUncheckedCreateWithoutCashFlowInput>
    connectOrCreate?: CashInflowCreateOrConnectWithoutCashFlowInput
    connect?: CashInflowWhereUniqueInput
  }

  export type CashOutflowUncheckedCreateNestedOneWithoutCashFlowInput = {
    create?: XOR<CashOutflowCreateWithoutCashFlowInput, CashOutflowUncheckedCreateWithoutCashFlowInput>
    connectOrCreate?: CashOutflowCreateOrConnectWithoutCashFlowInput
    connect?: CashOutflowWhereUniqueInput
  }

  export type EnumFlowTypeFieldUpdateOperationsInput = {
    set?: $Enums.FlowType
  }

  export type UserUpdateOneRequiredWithoutCashFlowsNestedInput = {
    create?: XOR<UserCreateWithoutCashFlowsInput, UserUncheckedCreateWithoutCashFlowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCashFlowsInput
    upsert?: UserUpsertWithoutCashFlowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCashFlowsInput, UserUpdateWithoutCashFlowsInput>, UserUncheckedUpdateWithoutCashFlowsInput>
  }

  export type CashInflowUpdateOneWithoutCashFlowNestedInput = {
    create?: XOR<CashInflowCreateWithoutCashFlowInput, CashInflowUncheckedCreateWithoutCashFlowInput>
    connectOrCreate?: CashInflowCreateOrConnectWithoutCashFlowInput
    upsert?: CashInflowUpsertWithoutCashFlowInput
    disconnect?: CashInflowWhereInput | boolean
    delete?: CashInflowWhereInput | boolean
    connect?: CashInflowWhereUniqueInput
    update?: XOR<XOR<CashInflowUpdateToOneWithWhereWithoutCashFlowInput, CashInflowUpdateWithoutCashFlowInput>, CashInflowUncheckedUpdateWithoutCashFlowInput>
  }

  export type CashOutflowUpdateOneWithoutCashFlowNestedInput = {
    create?: XOR<CashOutflowCreateWithoutCashFlowInput, CashOutflowUncheckedCreateWithoutCashFlowInput>
    connectOrCreate?: CashOutflowCreateOrConnectWithoutCashFlowInput
    upsert?: CashOutflowUpsertWithoutCashFlowInput
    disconnect?: CashOutflowWhereInput | boolean
    delete?: CashOutflowWhereInput | boolean
    connect?: CashOutflowWhereUniqueInput
    update?: XOR<XOR<CashOutflowUpdateToOneWithWhereWithoutCashFlowInput, CashOutflowUpdateWithoutCashFlowInput>, CashOutflowUncheckedUpdateWithoutCashFlowInput>
  }

  export type CashInflowUncheckedUpdateOneWithoutCashFlowNestedInput = {
    create?: XOR<CashInflowCreateWithoutCashFlowInput, CashInflowUncheckedCreateWithoutCashFlowInput>
    connectOrCreate?: CashInflowCreateOrConnectWithoutCashFlowInput
    upsert?: CashInflowUpsertWithoutCashFlowInput
    disconnect?: CashInflowWhereInput | boolean
    delete?: CashInflowWhereInput | boolean
    connect?: CashInflowWhereUniqueInput
    update?: XOR<XOR<CashInflowUpdateToOneWithWhereWithoutCashFlowInput, CashInflowUpdateWithoutCashFlowInput>, CashInflowUncheckedUpdateWithoutCashFlowInput>
  }

  export type CashOutflowUncheckedUpdateOneWithoutCashFlowNestedInput = {
    create?: XOR<CashOutflowCreateWithoutCashFlowInput, CashOutflowUncheckedCreateWithoutCashFlowInput>
    connectOrCreate?: CashOutflowCreateOrConnectWithoutCashFlowInput
    upsert?: CashOutflowUpsertWithoutCashFlowInput
    disconnect?: CashOutflowWhereInput | boolean
    delete?: CashOutflowWhereInput | boolean
    connect?: CashOutflowWhereUniqueInput
    update?: XOR<XOR<CashOutflowUpdateToOneWithWhereWithoutCashFlowInput, CashOutflowUpdateWithoutCashFlowInput>, CashOutflowUncheckedUpdateWithoutCashFlowInput>
  }

  export type CompanyCreateNestedOneWithoutInflowsInput = {
    create?: XOR<CompanyCreateWithoutInflowsInput, CompanyUncheckedCreateWithoutInflowsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutInflowsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CashFlowCreateNestedOneWithoutInflowInput = {
    create?: XOR<CashFlowCreateWithoutInflowInput, CashFlowUncheckedCreateWithoutInflowInput>
    connectOrCreate?: CashFlowCreateOrConnectWithoutInflowInput
    connect?: CashFlowWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutInflowsNestedInput = {
    create?: XOR<CompanyCreateWithoutInflowsInput, CompanyUncheckedCreateWithoutInflowsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutInflowsInput
    upsert?: CompanyUpsertWithoutInflowsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutInflowsInput, CompanyUpdateWithoutInflowsInput>, CompanyUncheckedUpdateWithoutInflowsInput>
  }

  export type CashFlowUpdateOneRequiredWithoutInflowNestedInput = {
    create?: XOR<CashFlowCreateWithoutInflowInput, CashFlowUncheckedCreateWithoutInflowInput>
    connectOrCreate?: CashFlowCreateOrConnectWithoutInflowInput
    upsert?: CashFlowUpsertWithoutInflowInput
    connect?: CashFlowWhereUniqueInput
    update?: XOR<XOR<CashFlowUpdateToOneWithWhereWithoutInflowInput, CashFlowUpdateWithoutInflowInput>, CashFlowUncheckedUpdateWithoutInflowInput>
  }

  export type CompanyCreateNestedOneWithoutOutflowsInput = {
    create?: XOR<CompanyCreateWithoutOutflowsInput, CompanyUncheckedCreateWithoutOutflowsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutOutflowsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CashFlowCreateNestedOneWithoutOutflowInput = {
    create?: XOR<CashFlowCreateWithoutOutflowInput, CashFlowUncheckedCreateWithoutOutflowInput>
    connectOrCreate?: CashFlowCreateOrConnectWithoutOutflowInput
    connect?: CashFlowWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutOutflowsNestedInput = {
    create?: XOR<CompanyCreateWithoutOutflowsInput, CompanyUncheckedCreateWithoutOutflowsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutOutflowsInput
    upsert?: CompanyUpsertWithoutOutflowsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutOutflowsInput, CompanyUpdateWithoutOutflowsInput>, CompanyUncheckedUpdateWithoutOutflowsInput>
  }

  export type CashFlowUpdateOneRequiredWithoutOutflowNestedInput = {
    create?: XOR<CashFlowCreateWithoutOutflowInput, CashFlowUncheckedCreateWithoutOutflowInput>
    connectOrCreate?: CashFlowCreateOrConnectWithoutOutflowInput
    upsert?: CashFlowUpsertWithoutOutflowInput
    connect?: CashFlowWhereUniqueInput
    update?: XOR<XOR<CashFlowUpdateToOneWithWhereWithoutOutflowInput, CashFlowUpdateWithoutOutflowInput>, CashFlowUncheckedUpdateWithoutOutflowInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSaleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleStatus | EnumSaleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleStatusFilter<$PrismaModel> | $Enums.SaleStatus
  }

  export type NestedEnumSaleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SaleStatus | EnumSaleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SaleStatus[] | ListEnumSaleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSaleStatusWithAggregatesFilter<$PrismaModel> | $Enums.SaleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSaleStatusFilter<$PrismaModel>
    _max?: NestedEnumSaleStatusFilter<$PrismaModel>
  }

  export type NestedEnumFlowTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowType | EnumFlowTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FlowType[] | ListEnumFlowTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlowType[] | ListEnumFlowTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFlowTypeFilter<$PrismaModel> | $Enums.FlowType
  }

  export type NestedEnumFlowTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowType | EnumFlowTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FlowType[] | ListEnumFlowTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlowType[] | ListEnumFlowTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFlowTypeWithAggregatesFilter<$PrismaModel> | $Enums.FlowType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlowTypeFilter<$PrismaModel>
    _max?: NestedEnumFlowTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleCreateNestedManyWithoutUserInput
    cashFlows?: CashFlowCreateNestedManyWithoutUserInput
    inventoryAdjustments?: InventoryAdjustmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
    cashFlows?: CashFlowUncheckedCreateNestedManyWithoutUserInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCompanyInput = {
    id?: string
    name: string
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    saleUnits?: SaleUnitCreateNestedManyWithoutProductInput
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    categoryId?: string | null
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saleUnits?: SaleUnitUncheckedCreateNestedManyWithoutProductInput
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductCreateManyCompanyInputEnvelope = {
    data: ProductCreateManyCompanyInput | ProductCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutCompanyInput = {
    id?: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutCompanyInput = {
    id?: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutCompanyInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCompanyInput, SaleUncheckedCreateWithoutCompanyInput>
  }

  export type SaleCreateManyCompanyInputEnvelope = {
    data: SaleCreateManyCompanyInput | SaleCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CashInflowCreateWithoutCompanyInput = {
    id?: string
    method: string
    createdAt?: Date | string
    cashFlow: CashFlowCreateNestedOneWithoutInflowInput
  }

  export type CashInflowUncheckedCreateWithoutCompanyInput = {
    id?: string
    cashFlowId: string
    method: string
    createdAt?: Date | string
  }

  export type CashInflowCreateOrConnectWithoutCompanyInput = {
    where: CashInflowWhereUniqueInput
    create: XOR<CashInflowCreateWithoutCompanyInput, CashInflowUncheckedCreateWithoutCompanyInput>
  }

  export type CashInflowCreateManyCompanyInputEnvelope = {
    data: CashInflowCreateManyCompanyInput | CashInflowCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CashOutflowCreateWithoutCompanyInput = {
    id?: string
    method: string
    createdAt?: Date | string
    cashFlow: CashFlowCreateNestedOneWithoutOutflowInput
  }

  export type CashOutflowUncheckedCreateWithoutCompanyInput = {
    id?: string
    cashFlowId: string
    method: string
    createdAt?: Date | string
  }

  export type CashOutflowCreateOrConnectWithoutCompanyInput = {
    where: CashOutflowWhereUniqueInput
    create: XOR<CashOutflowCreateWithoutCompanyInput, CashOutflowUncheckedCreateWithoutCompanyInput>
  }

  export type CashOutflowCreateManyCompanyInputEnvelope = {
    data: CashOutflowCreateManyCompanyInput | CashOutflowCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutCompanyInput = {
    id?: string
    name: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCompanyInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCompanyInput, CategoryUncheckedCreateWithoutCompanyInput>
  }

  export type CategoryCreateManyCompanyInputEnvelope = {
    data: CategoryCreateManyCompanyInput | CategoryCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    companyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
  }

  export type ProductUpdateManyWithWhereWithoutCompanyInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    companyId?: StringFilter<"Product"> | string
    categoryId?: StringNullableFilter<"Product"> | string | null
    stockingUnit?: StringFilter<"Product"> | string
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type SaleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCompanyInput, SaleUncheckedUpdateWithoutCompanyInput>
    create: XOR<SaleCreateWithoutCompanyInput, SaleUncheckedCreateWithoutCompanyInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCompanyInput, SaleUncheckedUpdateWithoutCompanyInput>
  }

  export type SaleUpdateManyWithWhereWithoutCompanyInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutCompanyInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    companyId?: StringFilter<"Sale"> | string
    userId?: StringFilter<"Sale"> | string
    totalAmount?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFilter<"Sale"> | $Enums.SaleStatus
    saleDate?: DateTimeFilter<"Sale"> | Date | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
  }

  export type CashInflowUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CashInflowWhereUniqueInput
    update: XOR<CashInflowUpdateWithoutCompanyInput, CashInflowUncheckedUpdateWithoutCompanyInput>
    create: XOR<CashInflowCreateWithoutCompanyInput, CashInflowUncheckedCreateWithoutCompanyInput>
  }

  export type CashInflowUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CashInflowWhereUniqueInput
    data: XOR<CashInflowUpdateWithoutCompanyInput, CashInflowUncheckedUpdateWithoutCompanyInput>
  }

  export type CashInflowUpdateManyWithWhereWithoutCompanyInput = {
    where: CashInflowScalarWhereInput
    data: XOR<CashInflowUpdateManyMutationInput, CashInflowUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CashInflowScalarWhereInput = {
    AND?: CashInflowScalarWhereInput | CashInflowScalarWhereInput[]
    OR?: CashInflowScalarWhereInput[]
    NOT?: CashInflowScalarWhereInput | CashInflowScalarWhereInput[]
    id?: StringFilter<"CashInflow"> | string
    companyId?: StringFilter<"CashInflow"> | string
    cashFlowId?: StringFilter<"CashInflow"> | string
    method?: StringFilter<"CashInflow"> | string
    createdAt?: DateTimeFilter<"CashInflow"> | Date | string
  }

  export type CashOutflowUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CashOutflowWhereUniqueInput
    update: XOR<CashOutflowUpdateWithoutCompanyInput, CashOutflowUncheckedUpdateWithoutCompanyInput>
    create: XOR<CashOutflowCreateWithoutCompanyInput, CashOutflowUncheckedCreateWithoutCompanyInput>
  }

  export type CashOutflowUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CashOutflowWhereUniqueInput
    data: XOR<CashOutflowUpdateWithoutCompanyInput, CashOutflowUncheckedUpdateWithoutCompanyInput>
  }

  export type CashOutflowUpdateManyWithWhereWithoutCompanyInput = {
    where: CashOutflowScalarWhereInput
    data: XOR<CashOutflowUpdateManyMutationInput, CashOutflowUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CashOutflowScalarWhereInput = {
    AND?: CashOutflowScalarWhereInput | CashOutflowScalarWhereInput[]
    OR?: CashOutflowScalarWhereInput[]
    NOT?: CashOutflowScalarWhereInput | CashOutflowScalarWhereInput[]
    id?: StringFilter<"CashOutflow"> | string
    companyId?: StringFilter<"CashOutflow"> | string
    cashFlowId?: StringFilter<"CashOutflow"> | string
    method?: StringFilter<"CashOutflow"> | string
    createdAt?: DateTimeFilter<"CashOutflow"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutCompanyInput, CategoryUncheckedUpdateWithoutCompanyInput>
    create: XOR<CategoryCreateWithoutCompanyInput, CategoryUncheckedCreateWithoutCompanyInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutCompanyInput, CategoryUncheckedUpdateWithoutCompanyInput>
  }

  export type CategoryUpdateManyWithWhereWithoutCompanyInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    companyId?: StringFilter<"Category"> | string
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowCreateNestedManyWithoutCompanyInput
    categories?: CategoryCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowUncheckedCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowUncheckedCreateNestedManyWithoutCompanyInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type SaleCreateWithoutUserInput = {
    id?: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutUserInput = {
    id?: string
    companyId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutUserInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleCreateManyUserInputEnvelope = {
    data: SaleCreateManyUserInput | SaleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CashFlowCreateWithoutUserInput = {
    id?: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    inflow?: CashInflowCreateNestedOneWithoutCashFlowInput
    outflow?: CashOutflowCreateNestedOneWithoutCashFlowInput
  }

  export type CashFlowUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    inflow?: CashInflowUncheckedCreateNestedOneWithoutCashFlowInput
    outflow?: CashOutflowUncheckedCreateNestedOneWithoutCashFlowInput
  }

  export type CashFlowCreateOrConnectWithoutUserInput = {
    where: CashFlowWhereUniqueInput
    create: XOR<CashFlowCreateWithoutUserInput, CashFlowUncheckedCreateWithoutUserInput>
  }

  export type CashFlowCreateManyUserInputEnvelope = {
    data: CashFlowCreateManyUserInput | CashFlowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InventoryAdjustmentCreateWithoutUserInput = {
    id?: string
    adjustmentQty: Decimal | DecimalJsLike | number | string
    reason: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoryAdjustmentsInput
  }

  export type InventoryAdjustmentUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    adjustmentQty: Decimal | DecimalJsLike | number | string
    reason: string
    createdAt?: Date | string
  }

  export type InventoryAdjustmentCreateOrConnectWithoutUserInput = {
    where: InventoryAdjustmentWhereUniqueInput
    create: XOR<InventoryAdjustmentCreateWithoutUserInput, InventoryAdjustmentUncheckedCreateWithoutUserInput>
  }

  export type InventoryAdjustmentCreateManyUserInputEnvelope = {
    data: InventoryAdjustmentCreateManyUserInput | InventoryAdjustmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    sales?: SaleUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUncheckedUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type SaleUpsertWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
  }

  export type SaleUpdateManyWithWhereWithoutUserInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutUserInput>
  }

  export type CashFlowUpsertWithWhereUniqueWithoutUserInput = {
    where: CashFlowWhereUniqueInput
    update: XOR<CashFlowUpdateWithoutUserInput, CashFlowUncheckedUpdateWithoutUserInput>
    create: XOR<CashFlowCreateWithoutUserInput, CashFlowUncheckedCreateWithoutUserInput>
  }

  export type CashFlowUpdateWithWhereUniqueWithoutUserInput = {
    where: CashFlowWhereUniqueInput
    data: XOR<CashFlowUpdateWithoutUserInput, CashFlowUncheckedUpdateWithoutUserInput>
  }

  export type CashFlowUpdateManyWithWhereWithoutUserInput = {
    where: CashFlowScalarWhereInput
    data: XOR<CashFlowUpdateManyMutationInput, CashFlowUncheckedUpdateManyWithoutUserInput>
  }

  export type CashFlowScalarWhereInput = {
    AND?: CashFlowScalarWhereInput | CashFlowScalarWhereInput[]
    OR?: CashFlowScalarWhereInput[]
    NOT?: CashFlowScalarWhereInput | CashFlowScalarWhereInput[]
    id?: StringFilter<"CashFlow"> | string
    userId?: StringFilter<"CashFlow"> | string
    type?: EnumFlowTypeFilter<"CashFlow"> | $Enums.FlowType
    amount?: DecimalFilter<"CashFlow"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"CashFlow"> | string | null
    createdAt?: DateTimeFilter<"CashFlow"> | Date | string
  }

  export type InventoryAdjustmentUpsertWithWhereUniqueWithoutUserInput = {
    where: InventoryAdjustmentWhereUniqueInput
    update: XOR<InventoryAdjustmentUpdateWithoutUserInput, InventoryAdjustmentUncheckedUpdateWithoutUserInput>
    create: XOR<InventoryAdjustmentCreateWithoutUserInput, InventoryAdjustmentUncheckedCreateWithoutUserInput>
  }

  export type InventoryAdjustmentUpdateWithWhereUniqueWithoutUserInput = {
    where: InventoryAdjustmentWhereUniqueInput
    data: XOR<InventoryAdjustmentUpdateWithoutUserInput, InventoryAdjustmentUncheckedUpdateWithoutUserInput>
  }

  export type InventoryAdjustmentUpdateManyWithWhereWithoutUserInput = {
    where: InventoryAdjustmentScalarWhereInput
    data: XOR<InventoryAdjustmentUpdateManyMutationInput, InventoryAdjustmentUncheckedUpdateManyWithoutUserInput>
  }

  export type InventoryAdjustmentScalarWhereInput = {
    AND?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
    OR?: InventoryAdjustmentScalarWhereInput[]
    NOT?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
    id?: StringFilter<"InventoryAdjustment"> | string
    productId?: StringFilter<"InventoryAdjustment"> | string
    userId?: StringFilter<"InventoryAdjustment"> | string
    adjustmentQty?: DecimalFilter<"InventoryAdjustment"> | Decimal | DecimalJsLike | number | string
    reason?: StringFilter<"InventoryAdjustment"> | string
    createdAt?: DateTimeFilter<"InventoryAdjustment"> | Date | string
  }

  export type CompanyCreateWithoutCategoriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowUncheckedCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCategoriesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCategoriesInput, CompanyUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProductsInput
    saleUnits?: SaleUnitCreateNestedManyWithoutProductInput
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    companyId: string
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saleUnits?: SaleUnitUncheckedCreateNestedManyWithoutProductInput
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutCategoriesInput = {
    update: XOR<CompanyUpdateWithoutCategoriesInput, CompanyUncheckedUpdateWithoutCategoriesInput>
    create: XOR<CompanyCreateWithoutCategoriesInput, CompanyUncheckedCreateWithoutCategoriesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCategoriesInput, CompanyUncheckedUpdateWithoutCategoriesInput>
  }

  export type CompanyUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    sales?: SaleUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUncheckedUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CompanyCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowCreateNestedManyWithoutCompanyInput
    categories?: CategoryCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowUncheckedCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowUncheckedCreateNestedManyWithoutCompanyInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutProductsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    company: CompanyCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    companyId: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type SaleUnitCreateWithoutProductInput = {
    id?: string
    unitName: string
    price: Decimal | DecimalJsLike | number | string
    conversionFactor: Decimal | DecimalJsLike | number | string
    saleItems?: SaleItemCreateNestedManyWithoutSaleUnitInput
  }

  export type SaleUnitUncheckedCreateWithoutProductInput = {
    id?: string
    unitName: string
    price: Decimal | DecimalJsLike | number | string
    conversionFactor: Decimal | DecimalJsLike | number | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutSaleUnitInput
  }

  export type SaleUnitCreateOrConnectWithoutProductInput = {
    where: SaleUnitWhereUniqueInput
    create: XOR<SaleUnitCreateWithoutProductInput, SaleUnitUncheckedCreateWithoutProductInput>
  }

  export type SaleUnitCreateManyProductInputEnvelope = {
    data: SaleUnitCreateManyProductInput | SaleUnitCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SaleItemCreateWithoutProductInput = {
    id?: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
    sale: SaleCreateNestedOneWithoutItemsInput
    saleUnit: SaleUnitCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateWithoutProductInput = {
    id?: string
    saleId: string
    saleUnitId: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateOrConnectWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemCreateManyProductInputEnvelope = {
    data: SaleItemCreateManyProductInput | SaleItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type InventoryAdjustmentCreateWithoutProductInput = {
    id?: string
    adjustmentQty: Decimal | DecimalJsLike | number | string
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInventoryAdjustmentsInput
  }

  export type InventoryAdjustmentUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    adjustmentQty: Decimal | DecimalJsLike | number | string
    reason: string
    createdAt?: Date | string
  }

  export type InventoryAdjustmentCreateOrConnectWithoutProductInput = {
    where: InventoryAdjustmentWhereUniqueInput
    create: XOR<InventoryAdjustmentCreateWithoutProductInput, InventoryAdjustmentUncheckedCreateWithoutProductInput>
  }

  export type InventoryAdjustmentCreateManyProductInputEnvelope = {
    data: InventoryAdjustmentCreateManyProductInput | InventoryAdjustmentCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutProductsInput = {
    update: XOR<CompanyUpdateWithoutProductsInput, CompanyUncheckedUpdateWithoutProductsInput>
    create: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProductsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProductsInput, CompanyUncheckedUpdateWithoutProductsInput>
  }

  export type CompanyUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    sales?: SaleUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUncheckedUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type SaleUnitUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleUnitWhereUniqueInput
    update: XOR<SaleUnitUpdateWithoutProductInput, SaleUnitUncheckedUpdateWithoutProductInput>
    create: XOR<SaleUnitCreateWithoutProductInput, SaleUnitUncheckedCreateWithoutProductInput>
  }

  export type SaleUnitUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleUnitWhereUniqueInput
    data: XOR<SaleUnitUpdateWithoutProductInput, SaleUnitUncheckedUpdateWithoutProductInput>
  }

  export type SaleUnitUpdateManyWithWhereWithoutProductInput = {
    where: SaleUnitScalarWhereInput
    data: XOR<SaleUnitUpdateManyMutationInput, SaleUnitUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleUnitScalarWhereInput = {
    AND?: SaleUnitScalarWhereInput | SaleUnitScalarWhereInput[]
    OR?: SaleUnitScalarWhereInput[]
    NOT?: SaleUnitScalarWhereInput | SaleUnitScalarWhereInput[]
    id?: StringFilter<"SaleUnit"> | string
    productId?: StringFilter<"SaleUnit"> | string
    unitName?: StringFilter<"SaleUnit"> | string
    price?: DecimalFilter<"SaleUnit"> | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFilter<"SaleUnit"> | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutProductInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleItemScalarWhereInput = {
    AND?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    OR?: SaleItemScalarWhereInput[]
    NOT?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    saleUnitId?: StringFilter<"SaleItem"> | string
    quantitySold?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
  }

  export type InventoryAdjustmentUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryAdjustmentWhereUniqueInput
    update: XOR<InventoryAdjustmentUpdateWithoutProductInput, InventoryAdjustmentUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryAdjustmentCreateWithoutProductInput, InventoryAdjustmentUncheckedCreateWithoutProductInput>
  }

  export type InventoryAdjustmentUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryAdjustmentWhereUniqueInput
    data: XOR<InventoryAdjustmentUpdateWithoutProductInput, InventoryAdjustmentUncheckedUpdateWithoutProductInput>
  }

  export type InventoryAdjustmentUpdateManyWithWhereWithoutProductInput = {
    where: InventoryAdjustmentScalarWhereInput
    data: XOR<InventoryAdjustmentUpdateManyMutationInput, InventoryAdjustmentUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutSaleUnitsInput = {
    id?: string
    name: string
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSaleUnitsInput = {
    id?: string
    name: string
    companyId: string
    categoryId?: string | null
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSaleUnitsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleUnitsInput, ProductUncheckedCreateWithoutSaleUnitsInput>
  }

  export type SaleItemCreateWithoutSaleUnitInput = {
    id?: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
    sale: SaleCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateWithoutSaleUnitInput = {
    id?: string
    saleId: string
    productId: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateOrConnectWithoutSaleUnitInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutSaleUnitInput, SaleItemUncheckedCreateWithoutSaleUnitInput>
  }

  export type SaleItemCreateManySaleUnitInputEnvelope = {
    data: SaleItemCreateManySaleUnitInput | SaleItemCreateManySaleUnitInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutSaleUnitsInput = {
    update: XOR<ProductUpdateWithoutSaleUnitsInput, ProductUncheckedUpdateWithoutSaleUnitsInput>
    create: XOR<ProductCreateWithoutSaleUnitsInput, ProductUncheckedCreateWithoutSaleUnitsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSaleUnitsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSaleUnitsInput, ProductUncheckedUpdateWithoutSaleUnitsInput>
  }

  export type ProductUpdateWithoutSaleUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SaleItemUpsertWithWhereUniqueWithoutSaleUnitInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutSaleUnitInput, SaleItemUncheckedUpdateWithoutSaleUnitInput>
    create: XOR<SaleItemCreateWithoutSaleUnitInput, SaleItemUncheckedCreateWithoutSaleUnitInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutSaleUnitInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutSaleUnitInput, SaleItemUncheckedUpdateWithoutSaleUnitInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutSaleUnitInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutSaleUnitInput>
  }

  export type CompanyCreateWithoutSalesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowCreateNestedManyWithoutCompanyInput
    categories?: CategoryCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowUncheckedCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowUncheckedCreateNestedManyWithoutCompanyInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSalesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSalesInput, CompanyUncheckedCreateWithoutSalesInput>
  }

  export type UserCreateWithoutSalesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    cashFlows?: CashFlowCreateNestedManyWithoutUserInput
    inventoryAdjustments?: InventoryAdjustmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSalesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cashFlows?: CashFlowUncheckedCreateNestedManyWithoutUserInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
  }

  export type SaleItemCreateWithoutSaleInput = {
    id?: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutSaleItemsInput
    saleUnit: SaleUnitCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateWithoutSaleInput = {
    id?: string
    productId: string
    saleUnitId: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateOrConnectWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemCreateManySaleInputEnvelope = {
    data: SaleItemCreateManySaleInput | SaleItemCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutSalesInput = {
    update: XOR<CompanyUpdateWithoutSalesInput, CompanyUncheckedUpdateWithoutSalesInput>
    create: XOR<CompanyCreateWithoutSalesInput, CompanyUncheckedCreateWithoutSalesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutSalesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutSalesInput, CompanyUncheckedUpdateWithoutSalesInput>
  }

  export type CompanyUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUncheckedUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutSalesInput = {
    update: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    cashFlows?: CashFlowUpdateManyWithoutUserNestedInput
    inventoryAdjustments?: InventoryAdjustmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashFlows?: CashFlowUncheckedUpdateManyWithoutUserNestedInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutSaleInput>
  }

  export type SaleCreateWithoutItemsInput = {
    id?: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutSalesInput
    user: UserCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutItemsInput = {
    id?: string
    companyId: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleCreateOrConnectWithoutItemsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutSaleItemsInput = {
    id?: string
    name: string
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    saleUnits?: SaleUnitCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSaleItemsInput = {
    id?: string
    name: string
    companyId: string
    categoryId?: string | null
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saleUnits?: SaleUnitUncheckedCreateNestedManyWithoutProductInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSaleItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
  }

  export type SaleUnitCreateWithoutSaleItemsInput = {
    id?: string
    unitName: string
    price: Decimal | DecimalJsLike | number | string
    conversionFactor: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutSaleUnitsInput
  }

  export type SaleUnitUncheckedCreateWithoutSaleItemsInput = {
    id?: string
    productId: string
    unitName: string
    price: Decimal | DecimalJsLike | number | string
    conversionFactor: Decimal | DecimalJsLike | number | string
  }

  export type SaleUnitCreateOrConnectWithoutSaleItemsInput = {
    where: SaleUnitWhereUniqueInput
    create: XOR<SaleUnitCreateWithoutSaleItemsInput, SaleUnitUncheckedCreateWithoutSaleItemsInput>
  }

  export type SaleUpsertWithoutItemsInput = {
    update: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type SaleUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutSalesNestedInput
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutSaleItemsInput = {
    update: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSaleItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type ProductUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    saleUnits?: SaleUnitUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleUnits?: SaleUnitUncheckedUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SaleUnitUpsertWithoutSaleItemsInput = {
    update: XOR<SaleUnitUpdateWithoutSaleItemsInput, SaleUnitUncheckedUpdateWithoutSaleItemsInput>
    create: XOR<SaleUnitCreateWithoutSaleItemsInput, SaleUnitUncheckedCreateWithoutSaleItemsInput>
    where?: SaleUnitWhereInput
  }

  export type SaleUnitUpdateToOneWithWhereWithoutSaleItemsInput = {
    where?: SaleUnitWhereInput
    data: XOR<SaleUnitUpdateWithoutSaleItemsInput, SaleUnitUncheckedUpdateWithoutSaleItemsInput>
  }

  export type SaleUnitUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutSaleUnitsNestedInput
  }

  export type SaleUnitUncheckedUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    unitName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductCreateWithoutInventoryAdjustmentsInput = {
    id?: string
    name: string
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    saleUnits?: SaleUnitCreateNestedManyWithoutProductInput
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoryAdjustmentsInput = {
    id?: string
    name: string
    companyId: string
    categoryId?: string | null
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saleUnits?: SaleUnitUncheckedCreateNestedManyWithoutProductInput
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoryAdjustmentsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryAdjustmentsInput, ProductUncheckedCreateWithoutInventoryAdjustmentsInput>
  }

  export type UserCreateWithoutInventoryAdjustmentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    sales?: SaleCreateNestedManyWithoutUserInput
    cashFlows?: CashFlowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInventoryAdjustmentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
    cashFlows?: CashFlowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInventoryAdjustmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryAdjustmentsInput, UserUncheckedCreateWithoutInventoryAdjustmentsInput>
  }

  export type ProductUpsertWithoutInventoryAdjustmentsInput = {
    update: XOR<ProductUpdateWithoutInventoryAdjustmentsInput, ProductUncheckedUpdateWithoutInventoryAdjustmentsInput>
    create: XOR<ProductCreateWithoutInventoryAdjustmentsInput, ProductUncheckedCreateWithoutInventoryAdjustmentsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryAdjustmentsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryAdjustmentsInput, ProductUncheckedUpdateWithoutInventoryAdjustmentsInput>
  }

  export type ProductUpdateWithoutInventoryAdjustmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    saleUnits?: SaleUnitUpdateManyWithoutProductNestedInput
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryAdjustmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleUnits?: SaleUnitUncheckedUpdateManyWithoutProductNestedInput
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutInventoryAdjustmentsInput = {
    update: XOR<UserUpdateWithoutInventoryAdjustmentsInput, UserUncheckedUpdateWithoutInventoryAdjustmentsInput>
    create: XOR<UserCreateWithoutInventoryAdjustmentsInput, UserUncheckedCreateWithoutInventoryAdjustmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryAdjustmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryAdjustmentsInput, UserUncheckedUpdateWithoutInventoryAdjustmentsInput>
  }

  export type UserUpdateWithoutInventoryAdjustmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
    cashFlows?: CashFlowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryAdjustmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
    cashFlows?: CashFlowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCashFlowsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    sales?: SaleCreateNestedManyWithoutUserInput
    inventoryAdjustments?: InventoryAdjustmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCashFlowsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCashFlowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCashFlowsInput, UserUncheckedCreateWithoutCashFlowsInput>
  }

  export type CashInflowCreateWithoutCashFlowInput = {
    id?: string
    method: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutInflowsInput
  }

  export type CashInflowUncheckedCreateWithoutCashFlowInput = {
    id?: string
    companyId: string
    method: string
    createdAt?: Date | string
  }

  export type CashInflowCreateOrConnectWithoutCashFlowInput = {
    where: CashInflowWhereUniqueInput
    create: XOR<CashInflowCreateWithoutCashFlowInput, CashInflowUncheckedCreateWithoutCashFlowInput>
  }

  export type CashOutflowCreateWithoutCashFlowInput = {
    id?: string
    method: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutOutflowsInput
  }

  export type CashOutflowUncheckedCreateWithoutCashFlowInput = {
    id?: string
    companyId: string
    method: string
    createdAt?: Date | string
  }

  export type CashOutflowCreateOrConnectWithoutCashFlowInput = {
    where: CashOutflowWhereUniqueInput
    create: XOR<CashOutflowCreateWithoutCashFlowInput, CashOutflowUncheckedCreateWithoutCashFlowInput>
  }

  export type UserUpsertWithoutCashFlowsInput = {
    update: XOR<UserUpdateWithoutCashFlowsInput, UserUncheckedUpdateWithoutCashFlowsInput>
    create: XOR<UserCreateWithoutCashFlowsInput, UserUncheckedCreateWithoutCashFlowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCashFlowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCashFlowsInput, UserUncheckedUpdateWithoutCashFlowsInput>
  }

  export type UserUpdateWithoutCashFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
    inventoryAdjustments?: InventoryAdjustmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCashFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CashInflowUpsertWithoutCashFlowInput = {
    update: XOR<CashInflowUpdateWithoutCashFlowInput, CashInflowUncheckedUpdateWithoutCashFlowInput>
    create: XOR<CashInflowCreateWithoutCashFlowInput, CashInflowUncheckedCreateWithoutCashFlowInput>
    where?: CashInflowWhereInput
  }

  export type CashInflowUpdateToOneWithWhereWithoutCashFlowInput = {
    where?: CashInflowWhereInput
    data: XOR<CashInflowUpdateWithoutCashFlowInput, CashInflowUncheckedUpdateWithoutCashFlowInput>
  }

  export type CashInflowUpdateWithoutCashFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutInflowsNestedInput
  }

  export type CashInflowUncheckedUpdateWithoutCashFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashOutflowUpsertWithoutCashFlowInput = {
    update: XOR<CashOutflowUpdateWithoutCashFlowInput, CashOutflowUncheckedUpdateWithoutCashFlowInput>
    create: XOR<CashOutflowCreateWithoutCashFlowInput, CashOutflowUncheckedCreateWithoutCashFlowInput>
    where?: CashOutflowWhereInput
  }

  export type CashOutflowUpdateToOneWithWhereWithoutCashFlowInput = {
    where?: CashOutflowWhereInput
    data: XOR<CashOutflowUpdateWithoutCashFlowInput, CashOutflowUncheckedUpdateWithoutCashFlowInput>
  }

  export type CashOutflowUpdateWithoutCashFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutOutflowsNestedInput
  }

  export type CashOutflowUncheckedUpdateWithoutCashFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutInflowsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowCreateNestedManyWithoutCompanyInput
    categories?: CategoryCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutInflowsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    outflows?: CashOutflowUncheckedCreateNestedManyWithoutCompanyInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutInflowsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutInflowsInput, CompanyUncheckedCreateWithoutInflowsInput>
  }

  export type CashFlowCreateWithoutInflowInput = {
    id?: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCashFlowsInput
    outflow?: CashOutflowCreateNestedOneWithoutCashFlowInput
  }

  export type CashFlowUncheckedCreateWithoutInflowInput = {
    id?: string
    userId: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    outflow?: CashOutflowUncheckedCreateNestedOneWithoutCashFlowInput
  }

  export type CashFlowCreateOrConnectWithoutInflowInput = {
    where: CashFlowWhereUniqueInput
    create: XOR<CashFlowCreateWithoutInflowInput, CashFlowUncheckedCreateWithoutInflowInput>
  }

  export type CompanyUpsertWithoutInflowsInput = {
    update: XOR<CompanyUpdateWithoutInflowsInput, CompanyUncheckedUpdateWithoutInflowsInput>
    create: XOR<CompanyCreateWithoutInflowsInput, CompanyUncheckedCreateWithoutInflowsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutInflowsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutInflowsInput, CompanyUncheckedUpdateWithoutInflowsInput>
  }

  export type CompanyUpdateWithoutInflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    sales?: SaleUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutInflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyNestedInput
    outflows?: CashOutflowUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CashFlowUpsertWithoutInflowInput = {
    update: XOR<CashFlowUpdateWithoutInflowInput, CashFlowUncheckedUpdateWithoutInflowInput>
    create: XOR<CashFlowCreateWithoutInflowInput, CashFlowUncheckedCreateWithoutInflowInput>
    where?: CashFlowWhereInput
  }

  export type CashFlowUpdateToOneWithWhereWithoutInflowInput = {
    where?: CashFlowWhereInput
    data: XOR<CashFlowUpdateWithoutInflowInput, CashFlowUncheckedUpdateWithoutInflowInput>
  }

  export type CashFlowUpdateWithoutInflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCashFlowsNestedInput
    outflow?: CashOutflowUpdateOneWithoutCashFlowNestedInput
  }

  export type CashFlowUncheckedUpdateWithoutInflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outflow?: CashOutflowUncheckedUpdateOneWithoutCashFlowNestedInput
  }

  export type CompanyCreateWithoutOutflowsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    sales?: SaleCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowCreateNestedManyWithoutCompanyInput
    categories?: CategoryCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutOutflowsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    sales?: SaleUncheckedCreateNestedManyWithoutCompanyInput
    inflows?: CashInflowUncheckedCreateNestedManyWithoutCompanyInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutOutflowsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutOutflowsInput, CompanyUncheckedCreateWithoutOutflowsInput>
  }

  export type CashFlowCreateWithoutOutflowInput = {
    id?: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCashFlowsInput
    inflow?: CashInflowCreateNestedOneWithoutCashFlowInput
  }

  export type CashFlowUncheckedCreateWithoutOutflowInput = {
    id?: string
    userId: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    inflow?: CashInflowUncheckedCreateNestedOneWithoutCashFlowInput
  }

  export type CashFlowCreateOrConnectWithoutOutflowInput = {
    where: CashFlowWhereUniqueInput
    create: XOR<CashFlowCreateWithoutOutflowInput, CashFlowUncheckedCreateWithoutOutflowInput>
  }

  export type CompanyUpsertWithoutOutflowsInput = {
    update: XOR<CompanyUpdateWithoutOutflowsInput, CompanyUncheckedUpdateWithoutOutflowsInput>
    create: XOR<CompanyCreateWithoutOutflowsInput, CompanyUncheckedCreateWithoutOutflowsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutOutflowsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutOutflowsInput, CompanyUncheckedUpdateWithoutOutflowsInput>
  }

  export type CompanyUpdateWithoutOutflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    sales?: SaleUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutOutflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCompanyNestedInput
    inflows?: CashInflowUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CashFlowUpsertWithoutOutflowInput = {
    update: XOR<CashFlowUpdateWithoutOutflowInput, CashFlowUncheckedUpdateWithoutOutflowInput>
    create: XOR<CashFlowCreateWithoutOutflowInput, CashFlowUncheckedCreateWithoutOutflowInput>
    where?: CashFlowWhereInput
  }

  export type CashFlowUpdateToOneWithWhereWithoutOutflowInput = {
    where?: CashFlowWhereInput
    data: XOR<CashFlowUpdateWithoutOutflowInput, CashFlowUncheckedUpdateWithoutOutflowInput>
  }

  export type CashFlowUpdateWithoutOutflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCashFlowsNestedInput
    inflow?: CashInflowUpdateOneWithoutCashFlowNestedInput
  }

  export type CashFlowUncheckedUpdateWithoutOutflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inflow?: CashInflowUncheckedUpdateOneWithoutCashFlowNestedInput
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyCompanyInput = {
    id?: string
    name: string
    categoryId?: string | null
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleCreateManyCompanyInput = {
    id?: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashInflowCreateManyCompanyInput = {
    id?: string
    cashFlowId: string
    method: string
    createdAt?: Date | string
  }

  export type CashOutflowCreateManyCompanyInput = {
    id?: string
    cashFlowId: string
    method: string
    createdAt?: Date | string
  }

  export type CategoryCreateManyCompanyInput = {
    id?: string
    name: string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutUserNestedInput
    cashFlows?: CashFlowUpdateManyWithoutUserNestedInput
    inventoryAdjustments?: InventoryAdjustmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
    cashFlows?: CashFlowUncheckedUpdateManyWithoutUserNestedInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    saleUnits?: SaleUnitUpdateManyWithoutProductNestedInput
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleUnits?: SaleUnitUncheckedUpdateManyWithoutProductNestedInput
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashInflowUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashFlow?: CashFlowUpdateOneRequiredWithoutInflowNestedInput
  }

  export type CashInflowUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashFlowId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashInflowUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashFlowId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashOutflowUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashFlow?: CashFlowUpdateOneRequiredWithoutOutflowNestedInput
  }

  export type CashOutflowUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashFlowId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashOutflowUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashFlowId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SaleCreateManyUserInput = {
    id?: string
    companyId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SaleStatus
    saleDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashFlowCreateManyUserInput = {
    id?: string
    type: $Enums.FlowType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
  }

  export type InventoryAdjustmentCreateManyUserInput = {
    id?: string
    productId: string
    adjustmentQty: Decimal | DecimalJsLike | number | string
    reason: string
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSaleStatusFieldUpdateOperationsInput | $Enums.SaleStatus
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashFlowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inflow?: CashInflowUpdateOneWithoutCashFlowNestedInput
    outflow?: CashOutflowUpdateOneWithoutCashFlowNestedInput
  }

  export type CashFlowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inflow?: CashInflowUncheckedUpdateOneWithoutCashFlowNestedInput
    outflow?: CashOutflowUncheckedUpdateOneWithoutCashFlowNestedInput
  }

  export type CashFlowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFlowTypeFieldUpdateOperationsInput | $Enums.FlowType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoryAdjustmentsNestedInput
  }

  export type InventoryAdjustmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    companyId: string
    stockingUnit: string
    quantity?: Decimal | DecimalJsLike | number | string
    purchaseCost?: Decimal | DecimalJsLike | number | string
    salePrice?: Decimal | DecimalJsLike | number | string
    lowStockThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
    saleUnits?: SaleUnitUpdateManyWithoutProductNestedInput
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleUnits?: SaleUnitUncheckedUpdateManyWithoutProductNestedInput
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    inventoryAdjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    stockingUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lowStockThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUnitCreateManyProductInput = {
    id?: string
    unitName: string
    price: Decimal | DecimalJsLike | number | string
    conversionFactor: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateManyProductInput = {
    id?: string
    saleId: string
    saleUnitId: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
  }

  export type InventoryAdjustmentCreateManyProductInput = {
    id?: string
    userId: string
    adjustmentQty: Decimal | DecimalJsLike | number | string
    reason: string
    createdAt?: Date | string
  }

  export type SaleUnitUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saleItems?: SaleItemUpdateManyWithoutSaleUnitNestedInput
  }

  export type SaleUnitUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutSaleUnitNestedInput
  }

  export type SaleUnitUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conversionFactor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
    saleUnit?: SaleUnitUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    saleUnitId?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    saleUnitId?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InventoryAdjustmentUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInventoryAdjustmentsNestedInput
  }

  export type InventoryAdjustmentUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adjustmentQty?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManySaleUnitInput = {
    id?: string
    saleId: string
    productId: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateWithoutSaleUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutSaleUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateManySaleInput = {
    id?: string
    productId: string
    saleUnitId: string
    quantitySold: Decimal | DecimalJsLike | number | string
    priceAtSale: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
    saleUnit?: SaleUnitUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    saleUnitId?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    saleUnitId?: StringFieldUpdateOperationsInput | string
    quantitySold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceAtSale?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}