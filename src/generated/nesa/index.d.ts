
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model NesaRecord
 * 
 */
export type NesaRecord = $Result.DefaultSelection<Prisma.$NesaRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NesaResult: {
  PASS: 'PASS',
  FAIL: 'FAIL'
};

export type NesaResult = (typeof NesaResult)[keyof typeof NesaResult]

}

export type NesaResult = $Enums.NesaResult

export const NesaResult: typeof $Enums.NesaResult

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NesaRecords
 * const nesaRecords = await prisma.nesaRecord.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more NesaRecords
   * const nesaRecords = await prisma.nesaRecord.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.nesaRecord`: Exposes CRUD operations for the **NesaRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NesaRecords
    * const nesaRecords = await prisma.nesaRecord.findMany()
    * ```
    */
  get nesaRecord(): Prisma.NesaRecordDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    NesaRecord: 'NesaRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "nesaRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NesaRecord: {
        payload: Prisma.$NesaRecordPayload<ExtArgs>
        fields: Prisma.NesaRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NesaRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NesaRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload>
          }
          findFirst: {
            args: Prisma.NesaRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NesaRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload>
          }
          findMany: {
            args: Prisma.NesaRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload>[]
          }
          create: {
            args: Prisma.NesaRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload>
          }
          createMany: {
            args: Prisma.NesaRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NesaRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload>[]
          }
          delete: {
            args: Prisma.NesaRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload>
          }
          update: {
            args: Prisma.NesaRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload>
          }
          deleteMany: {
            args: Prisma.NesaRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NesaRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NesaRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload>[]
          }
          upsert: {
            args: Prisma.NesaRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NesaRecordPayload>
          }
          aggregate: {
            args: Prisma.NesaRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNesaRecord>
          }
          groupBy: {
            args: Prisma.NesaRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<NesaRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.NesaRecordCountArgs<ExtArgs>
            result: $Utils.Optional<NesaRecordCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    nesaRecord?: NesaRecordOmit
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
   * Models
   */

  /**
   * Model NesaRecord
   */

  export type AggregateNesaRecord = {
    _count: NesaRecordCountAggregateOutputType | null
    _avg: NesaRecordAvgAggregateOutputType | null
    _sum: NesaRecordSumAggregateOutputType | null
    _min: NesaRecordMinAggregateOutputType | null
    _max: NesaRecordMaxAggregateOutputType | null
  }

  export type NesaRecordAvgAggregateOutputType = {
    yearCompleted: number | null
  }

  export type NesaRecordSumAggregateOutputType = {
    yearCompleted: number | null
  }

  export type NesaRecordMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    nationalId: string | null
    fullName: string | null
    school: string | null
    option: string | null
    yearCompleted: number | null
    result: $Enums.NesaResult | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NesaRecordMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    nationalId: string | null
    fullName: string | null
    school: string | null
    option: string | null
    yearCompleted: number | null
    result: $Enums.NesaResult | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NesaRecordCountAggregateOutputType = {
    id: number
    studentId: number
    nationalId: number
    fullName: number
    school: number
    option: number
    yearCompleted: number
    grades: number
    result: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NesaRecordAvgAggregateInputType = {
    yearCompleted?: true
  }

  export type NesaRecordSumAggregateInputType = {
    yearCompleted?: true
  }

  export type NesaRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    nationalId?: true
    fullName?: true
    school?: true
    option?: true
    yearCompleted?: true
    result?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NesaRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    nationalId?: true
    fullName?: true
    school?: true
    option?: true
    yearCompleted?: true
    result?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NesaRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    nationalId?: true
    fullName?: true
    school?: true
    option?: true
    yearCompleted?: true
    grades?: true
    result?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NesaRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NesaRecord to aggregate.
     */
    where?: NesaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NesaRecords to fetch.
     */
    orderBy?: NesaRecordOrderByWithRelationInput | NesaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NesaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NesaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NesaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NesaRecords
    **/
    _count?: true | NesaRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NesaRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NesaRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NesaRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NesaRecordMaxAggregateInputType
  }

  export type GetNesaRecordAggregateType<T extends NesaRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateNesaRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNesaRecord[P]>
      : GetScalarType<T[P], AggregateNesaRecord[P]>
  }




  export type NesaRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NesaRecordWhereInput
    orderBy?: NesaRecordOrderByWithAggregationInput | NesaRecordOrderByWithAggregationInput[]
    by: NesaRecordScalarFieldEnum[] | NesaRecordScalarFieldEnum
    having?: NesaRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NesaRecordCountAggregateInputType | true
    _avg?: NesaRecordAvgAggregateInputType
    _sum?: NesaRecordSumAggregateInputType
    _min?: NesaRecordMinAggregateInputType
    _max?: NesaRecordMaxAggregateInputType
  }

  export type NesaRecordGroupByOutputType = {
    id: string
    studentId: string
    nationalId: string
    fullName: string
    school: string
    option: string
    yearCompleted: number
    grades: JsonValue
    result: $Enums.NesaResult
    createdAt: Date
    updatedAt: Date
    _count: NesaRecordCountAggregateOutputType | null
    _avg: NesaRecordAvgAggregateOutputType | null
    _sum: NesaRecordSumAggregateOutputType | null
    _min: NesaRecordMinAggregateOutputType | null
    _max: NesaRecordMaxAggregateOutputType | null
  }

  type GetNesaRecordGroupByPayload<T extends NesaRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NesaRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NesaRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NesaRecordGroupByOutputType[P]>
            : GetScalarType<T[P], NesaRecordGroupByOutputType[P]>
        }
      >
    >


  export type NesaRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    nationalId?: boolean
    fullName?: boolean
    school?: boolean
    option?: boolean
    yearCompleted?: boolean
    grades?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nesaRecord"]>

  export type NesaRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    nationalId?: boolean
    fullName?: boolean
    school?: boolean
    option?: boolean
    yearCompleted?: boolean
    grades?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nesaRecord"]>

  export type NesaRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    nationalId?: boolean
    fullName?: boolean
    school?: boolean
    option?: boolean
    yearCompleted?: boolean
    grades?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nesaRecord"]>

  export type NesaRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    nationalId?: boolean
    fullName?: boolean
    school?: boolean
    option?: boolean
    yearCompleted?: boolean
    grades?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NesaRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "nationalId" | "fullName" | "school" | "option" | "yearCompleted" | "grades" | "result" | "createdAt" | "updatedAt", ExtArgs["result"]["nesaRecord"]>

  export type $NesaRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NesaRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      nationalId: string
      fullName: string
      school: string
      option: string
      yearCompleted: number
      grades: Prisma.JsonValue
      result: $Enums.NesaResult
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nesaRecord"]>
    composites: {}
  }

  type NesaRecordGetPayload<S extends boolean | null | undefined | NesaRecordDefaultArgs> = $Result.GetResult<Prisma.$NesaRecordPayload, S>

  type NesaRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NesaRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NesaRecordCountAggregateInputType | true
    }

  export interface NesaRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NesaRecord'], meta: { name: 'NesaRecord' } }
    /**
     * Find zero or one NesaRecord that matches the filter.
     * @param {NesaRecordFindUniqueArgs} args - Arguments to find a NesaRecord
     * @example
     * // Get one NesaRecord
     * const nesaRecord = await prisma.nesaRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NesaRecordFindUniqueArgs>(args: SelectSubset<T, NesaRecordFindUniqueArgs<ExtArgs>>): Prisma__NesaRecordClient<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NesaRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NesaRecordFindUniqueOrThrowArgs} args - Arguments to find a NesaRecord
     * @example
     * // Get one NesaRecord
     * const nesaRecord = await prisma.nesaRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NesaRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, NesaRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NesaRecordClient<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NesaRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NesaRecordFindFirstArgs} args - Arguments to find a NesaRecord
     * @example
     * // Get one NesaRecord
     * const nesaRecord = await prisma.nesaRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NesaRecordFindFirstArgs>(args?: SelectSubset<T, NesaRecordFindFirstArgs<ExtArgs>>): Prisma__NesaRecordClient<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NesaRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NesaRecordFindFirstOrThrowArgs} args - Arguments to find a NesaRecord
     * @example
     * // Get one NesaRecord
     * const nesaRecord = await prisma.nesaRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NesaRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, NesaRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__NesaRecordClient<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NesaRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NesaRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NesaRecords
     * const nesaRecords = await prisma.nesaRecord.findMany()
     * 
     * // Get first 10 NesaRecords
     * const nesaRecords = await prisma.nesaRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nesaRecordWithIdOnly = await prisma.nesaRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NesaRecordFindManyArgs>(args?: SelectSubset<T, NesaRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NesaRecord.
     * @param {NesaRecordCreateArgs} args - Arguments to create a NesaRecord.
     * @example
     * // Create one NesaRecord
     * const NesaRecord = await prisma.nesaRecord.create({
     *   data: {
     *     // ... data to create a NesaRecord
     *   }
     * })
     * 
     */
    create<T extends NesaRecordCreateArgs>(args: SelectSubset<T, NesaRecordCreateArgs<ExtArgs>>): Prisma__NesaRecordClient<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NesaRecords.
     * @param {NesaRecordCreateManyArgs} args - Arguments to create many NesaRecords.
     * @example
     * // Create many NesaRecords
     * const nesaRecord = await prisma.nesaRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NesaRecordCreateManyArgs>(args?: SelectSubset<T, NesaRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NesaRecords and returns the data saved in the database.
     * @param {NesaRecordCreateManyAndReturnArgs} args - Arguments to create many NesaRecords.
     * @example
     * // Create many NesaRecords
     * const nesaRecord = await prisma.nesaRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NesaRecords and only return the `id`
     * const nesaRecordWithIdOnly = await prisma.nesaRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NesaRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, NesaRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NesaRecord.
     * @param {NesaRecordDeleteArgs} args - Arguments to delete one NesaRecord.
     * @example
     * // Delete one NesaRecord
     * const NesaRecord = await prisma.nesaRecord.delete({
     *   where: {
     *     // ... filter to delete one NesaRecord
     *   }
     * })
     * 
     */
    delete<T extends NesaRecordDeleteArgs>(args: SelectSubset<T, NesaRecordDeleteArgs<ExtArgs>>): Prisma__NesaRecordClient<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NesaRecord.
     * @param {NesaRecordUpdateArgs} args - Arguments to update one NesaRecord.
     * @example
     * // Update one NesaRecord
     * const nesaRecord = await prisma.nesaRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NesaRecordUpdateArgs>(args: SelectSubset<T, NesaRecordUpdateArgs<ExtArgs>>): Prisma__NesaRecordClient<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NesaRecords.
     * @param {NesaRecordDeleteManyArgs} args - Arguments to filter NesaRecords to delete.
     * @example
     * // Delete a few NesaRecords
     * const { count } = await prisma.nesaRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NesaRecordDeleteManyArgs>(args?: SelectSubset<T, NesaRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NesaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NesaRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NesaRecords
     * const nesaRecord = await prisma.nesaRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NesaRecordUpdateManyArgs>(args: SelectSubset<T, NesaRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NesaRecords and returns the data updated in the database.
     * @param {NesaRecordUpdateManyAndReturnArgs} args - Arguments to update many NesaRecords.
     * @example
     * // Update many NesaRecords
     * const nesaRecord = await prisma.nesaRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NesaRecords and only return the `id`
     * const nesaRecordWithIdOnly = await prisma.nesaRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends NesaRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, NesaRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NesaRecord.
     * @param {NesaRecordUpsertArgs} args - Arguments to update or create a NesaRecord.
     * @example
     * // Update or create a NesaRecord
     * const nesaRecord = await prisma.nesaRecord.upsert({
     *   create: {
     *     // ... data to create a NesaRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NesaRecord we want to update
     *   }
     * })
     */
    upsert<T extends NesaRecordUpsertArgs>(args: SelectSubset<T, NesaRecordUpsertArgs<ExtArgs>>): Prisma__NesaRecordClient<$Result.GetResult<Prisma.$NesaRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NesaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NesaRecordCountArgs} args - Arguments to filter NesaRecords to count.
     * @example
     * // Count the number of NesaRecords
     * const count = await prisma.nesaRecord.count({
     *   where: {
     *     // ... the filter for the NesaRecords we want to count
     *   }
     * })
    **/
    count<T extends NesaRecordCountArgs>(
      args?: Subset<T, NesaRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NesaRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NesaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NesaRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NesaRecordAggregateArgs>(args: Subset<T, NesaRecordAggregateArgs>): Prisma.PrismaPromise<GetNesaRecordAggregateType<T>>

    /**
     * Group by NesaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NesaRecordGroupByArgs} args - Group by arguments.
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
      T extends NesaRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NesaRecordGroupByArgs['orderBy'] }
        : { orderBy?: NesaRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NesaRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNesaRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NesaRecord model
   */
  readonly fields: NesaRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NesaRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NesaRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NesaRecord model
   */
  interface NesaRecordFieldRefs {
    readonly id: FieldRef<"NesaRecord", 'String'>
    readonly studentId: FieldRef<"NesaRecord", 'String'>
    readonly nationalId: FieldRef<"NesaRecord", 'String'>
    readonly fullName: FieldRef<"NesaRecord", 'String'>
    readonly school: FieldRef<"NesaRecord", 'String'>
    readonly option: FieldRef<"NesaRecord", 'String'>
    readonly yearCompleted: FieldRef<"NesaRecord", 'Int'>
    readonly grades: FieldRef<"NesaRecord", 'Json'>
    readonly result: FieldRef<"NesaRecord", 'NesaResult'>
    readonly createdAt: FieldRef<"NesaRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"NesaRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NesaRecord findUnique
   */
  export type NesaRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * Filter, which NesaRecord to fetch.
     */
    where: NesaRecordWhereUniqueInput
  }

  /**
   * NesaRecord findUniqueOrThrow
   */
  export type NesaRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * Filter, which NesaRecord to fetch.
     */
    where: NesaRecordWhereUniqueInput
  }

  /**
   * NesaRecord findFirst
   */
  export type NesaRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * Filter, which NesaRecord to fetch.
     */
    where?: NesaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NesaRecords to fetch.
     */
    orderBy?: NesaRecordOrderByWithRelationInput | NesaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NesaRecords.
     */
    cursor?: NesaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NesaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NesaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NesaRecords.
     */
    distinct?: NesaRecordScalarFieldEnum | NesaRecordScalarFieldEnum[]
  }

  /**
   * NesaRecord findFirstOrThrow
   */
  export type NesaRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * Filter, which NesaRecord to fetch.
     */
    where?: NesaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NesaRecords to fetch.
     */
    orderBy?: NesaRecordOrderByWithRelationInput | NesaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NesaRecords.
     */
    cursor?: NesaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NesaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NesaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NesaRecords.
     */
    distinct?: NesaRecordScalarFieldEnum | NesaRecordScalarFieldEnum[]
  }

  /**
   * NesaRecord findMany
   */
  export type NesaRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * Filter, which NesaRecords to fetch.
     */
    where?: NesaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NesaRecords to fetch.
     */
    orderBy?: NesaRecordOrderByWithRelationInput | NesaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NesaRecords.
     */
    cursor?: NesaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NesaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NesaRecords.
     */
    skip?: number
    distinct?: NesaRecordScalarFieldEnum | NesaRecordScalarFieldEnum[]
  }

  /**
   * NesaRecord create
   */
  export type NesaRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a NesaRecord.
     */
    data: XOR<NesaRecordCreateInput, NesaRecordUncheckedCreateInput>
  }

  /**
   * NesaRecord createMany
   */
  export type NesaRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NesaRecords.
     */
    data: NesaRecordCreateManyInput | NesaRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NesaRecord createManyAndReturn
   */
  export type NesaRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * The data used to create many NesaRecords.
     */
    data: NesaRecordCreateManyInput | NesaRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NesaRecord update
   */
  export type NesaRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a NesaRecord.
     */
    data: XOR<NesaRecordUpdateInput, NesaRecordUncheckedUpdateInput>
    /**
     * Choose, which NesaRecord to update.
     */
    where: NesaRecordWhereUniqueInput
  }

  /**
   * NesaRecord updateMany
   */
  export type NesaRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NesaRecords.
     */
    data: XOR<NesaRecordUpdateManyMutationInput, NesaRecordUncheckedUpdateManyInput>
    /**
     * Filter which NesaRecords to update
     */
    where?: NesaRecordWhereInput
    /**
     * Limit how many NesaRecords to update.
     */
    limit?: number
  }

  /**
   * NesaRecord updateManyAndReturn
   */
  export type NesaRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * The data used to update NesaRecords.
     */
    data: XOR<NesaRecordUpdateManyMutationInput, NesaRecordUncheckedUpdateManyInput>
    /**
     * Filter which NesaRecords to update
     */
    where?: NesaRecordWhereInput
    /**
     * Limit how many NesaRecords to update.
     */
    limit?: number
  }

  /**
   * NesaRecord upsert
   */
  export type NesaRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the NesaRecord to update in case it exists.
     */
    where: NesaRecordWhereUniqueInput
    /**
     * In case the NesaRecord found by the `where` argument doesn't exist, create a new NesaRecord with this data.
     */
    create: XOR<NesaRecordCreateInput, NesaRecordUncheckedCreateInput>
    /**
     * In case the NesaRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NesaRecordUpdateInput, NesaRecordUncheckedUpdateInput>
  }

  /**
   * NesaRecord delete
   */
  export type NesaRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
    /**
     * Filter which NesaRecord to delete.
     */
    where: NesaRecordWhereUniqueInput
  }

  /**
   * NesaRecord deleteMany
   */
  export type NesaRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NesaRecords to delete
     */
    where?: NesaRecordWhereInput
    /**
     * Limit how many NesaRecords to delete.
     */
    limit?: number
  }

  /**
   * NesaRecord without action
   */
  export type NesaRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NesaRecord
     */
    select?: NesaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NesaRecord
     */
    omit?: NesaRecordOmit<ExtArgs> | null
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


  export const NesaRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    nationalId: 'nationalId',
    fullName: 'fullName',
    school: 'school',
    option: 'option',
    yearCompleted: 'yearCompleted',
    grades: 'grades',
    result: 'result',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NesaRecordScalarFieldEnum = (typeof NesaRecordScalarFieldEnum)[keyof typeof NesaRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'NesaResult'
   */
  export type EnumNesaResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NesaResult'>
    


  /**
   * Reference to a field of type 'NesaResult[]'
   */
  export type ListEnumNesaResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NesaResult[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type NesaRecordWhereInput = {
    AND?: NesaRecordWhereInput | NesaRecordWhereInput[]
    OR?: NesaRecordWhereInput[]
    NOT?: NesaRecordWhereInput | NesaRecordWhereInput[]
    id?: StringFilter<"NesaRecord"> | string
    studentId?: StringFilter<"NesaRecord"> | string
    nationalId?: StringFilter<"NesaRecord"> | string
    fullName?: StringFilter<"NesaRecord"> | string
    school?: StringFilter<"NesaRecord"> | string
    option?: StringFilter<"NesaRecord"> | string
    yearCompleted?: IntFilter<"NesaRecord"> | number
    grades?: JsonFilter<"NesaRecord">
    result?: EnumNesaResultFilter<"NesaRecord"> | $Enums.NesaResult
    createdAt?: DateTimeFilter<"NesaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"NesaRecord"> | Date | string
  }

  export type NesaRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    school?: SortOrder
    option?: SortOrder
    yearCompleted?: SortOrder
    grades?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NesaRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    nationalId?: string
    AND?: NesaRecordWhereInput | NesaRecordWhereInput[]
    OR?: NesaRecordWhereInput[]
    NOT?: NesaRecordWhereInput | NesaRecordWhereInput[]
    fullName?: StringFilter<"NesaRecord"> | string
    school?: StringFilter<"NesaRecord"> | string
    option?: StringFilter<"NesaRecord"> | string
    yearCompleted?: IntFilter<"NesaRecord"> | number
    grades?: JsonFilter<"NesaRecord">
    result?: EnumNesaResultFilter<"NesaRecord"> | $Enums.NesaResult
    createdAt?: DateTimeFilter<"NesaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"NesaRecord"> | Date | string
  }, "id" | "studentId" | "nationalId">

  export type NesaRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    school?: SortOrder
    option?: SortOrder
    yearCompleted?: SortOrder
    grades?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NesaRecordCountOrderByAggregateInput
    _avg?: NesaRecordAvgOrderByAggregateInput
    _max?: NesaRecordMaxOrderByAggregateInput
    _min?: NesaRecordMinOrderByAggregateInput
    _sum?: NesaRecordSumOrderByAggregateInput
  }

  export type NesaRecordScalarWhereWithAggregatesInput = {
    AND?: NesaRecordScalarWhereWithAggregatesInput | NesaRecordScalarWhereWithAggregatesInput[]
    OR?: NesaRecordScalarWhereWithAggregatesInput[]
    NOT?: NesaRecordScalarWhereWithAggregatesInput | NesaRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NesaRecord"> | string
    studentId?: StringWithAggregatesFilter<"NesaRecord"> | string
    nationalId?: StringWithAggregatesFilter<"NesaRecord"> | string
    fullName?: StringWithAggregatesFilter<"NesaRecord"> | string
    school?: StringWithAggregatesFilter<"NesaRecord"> | string
    option?: StringWithAggregatesFilter<"NesaRecord"> | string
    yearCompleted?: IntWithAggregatesFilter<"NesaRecord"> | number
    grades?: JsonWithAggregatesFilter<"NesaRecord">
    result?: EnumNesaResultWithAggregatesFilter<"NesaRecord"> | $Enums.NesaResult
    createdAt?: DateTimeWithAggregatesFilter<"NesaRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NesaRecord"> | Date | string
  }

  export type NesaRecordCreateInput = {
    id?: string
    studentId: string
    nationalId: string
    fullName: string
    school: string
    option: string
    yearCompleted: number
    grades: JsonNullValueInput | InputJsonValue
    result?: $Enums.NesaResult
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NesaRecordUncheckedCreateInput = {
    id?: string
    studentId: string
    nationalId: string
    fullName: string
    school: string
    option: string
    yearCompleted: number
    grades: JsonNullValueInput | InputJsonValue
    result?: $Enums.NesaResult
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NesaRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    grades?: JsonNullValueInput | InputJsonValue
    result?: EnumNesaResultFieldUpdateOperationsInput | $Enums.NesaResult
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NesaRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    grades?: JsonNullValueInput | InputJsonValue
    result?: EnumNesaResultFieldUpdateOperationsInput | $Enums.NesaResult
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NesaRecordCreateManyInput = {
    id?: string
    studentId: string
    nationalId: string
    fullName: string
    school: string
    option: string
    yearCompleted: number
    grades: JsonNullValueInput | InputJsonValue
    result?: $Enums.NesaResult
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NesaRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    grades?: JsonNullValueInput | InputJsonValue
    result?: EnumNesaResultFieldUpdateOperationsInput | $Enums.NesaResult
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NesaRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    yearCompleted?: IntFieldUpdateOperationsInput | number
    grades?: JsonNullValueInput | InputJsonValue
    result?: EnumNesaResultFieldUpdateOperationsInput | $Enums.NesaResult
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumNesaResultFilter<$PrismaModel = never> = {
    equals?: $Enums.NesaResult | EnumNesaResultFieldRefInput<$PrismaModel>
    in?: $Enums.NesaResult[] | ListEnumNesaResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.NesaResult[] | ListEnumNesaResultFieldRefInput<$PrismaModel>
    not?: NestedEnumNesaResultFilter<$PrismaModel> | $Enums.NesaResult
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

  export type NesaRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    school?: SortOrder
    option?: SortOrder
    yearCompleted?: SortOrder
    grades?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NesaRecordAvgOrderByAggregateInput = {
    yearCompleted?: SortOrder
  }

  export type NesaRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    school?: SortOrder
    option?: SortOrder
    yearCompleted?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NesaRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    school?: SortOrder
    option?: SortOrder
    yearCompleted?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NesaRecordSumOrderByAggregateInput = {
    yearCompleted?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumNesaResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NesaResult | EnumNesaResultFieldRefInput<$PrismaModel>
    in?: $Enums.NesaResult[] | ListEnumNesaResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.NesaResult[] | ListEnumNesaResultFieldRefInput<$PrismaModel>
    not?: NestedEnumNesaResultWithAggregatesFilter<$PrismaModel> | $Enums.NesaResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNesaResultFilter<$PrismaModel>
    _max?: NestedEnumNesaResultFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumNesaResultFieldUpdateOperationsInput = {
    set?: $Enums.NesaResult
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedEnumNesaResultFilter<$PrismaModel = never> = {
    equals?: $Enums.NesaResult | EnumNesaResultFieldRefInput<$PrismaModel>
    in?: $Enums.NesaResult[] | ListEnumNesaResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.NesaResult[] | ListEnumNesaResultFieldRefInput<$PrismaModel>
    not?: NestedEnumNesaResultFilter<$PrismaModel> | $Enums.NesaResult
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumNesaResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NesaResult | EnumNesaResultFieldRefInput<$PrismaModel>
    in?: $Enums.NesaResult[] | ListEnumNesaResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.NesaResult[] | ListEnumNesaResultFieldRefInput<$PrismaModel>
    not?: NestedEnumNesaResultWithAggregatesFilter<$PrismaModel> | $Enums.NesaResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNesaResultFilter<$PrismaModel>
    _max?: NestedEnumNesaResultFilter<$PrismaModel>
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