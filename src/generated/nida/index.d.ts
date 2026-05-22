
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
 * Model NidaProfile
 * 
 */
export type NidaProfile = $Result.DefaultSelection<Prisma.$NidaProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NidaProfiles
 * const nidaProfiles = await prisma.nidaProfile.findMany()
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
   * // Fetch zero or more NidaProfiles
   * const nidaProfiles = await prisma.nidaProfile.findMany()
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
   * `prisma.nidaProfile`: Exposes CRUD operations for the **NidaProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NidaProfiles
    * const nidaProfiles = await prisma.nidaProfile.findMany()
    * ```
    */
  get nidaProfile(): Prisma.NidaProfileDelegate<ExtArgs, ClientOptions>;
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
    NidaProfile: 'NidaProfile'
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
      modelProps: "nidaProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NidaProfile: {
        payload: Prisma.$NidaProfilePayload<ExtArgs>
        fields: Prisma.NidaProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NidaProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NidaProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload>
          }
          findFirst: {
            args: Prisma.NidaProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NidaProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload>
          }
          findMany: {
            args: Prisma.NidaProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload>[]
          }
          create: {
            args: Prisma.NidaProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload>
          }
          createMany: {
            args: Prisma.NidaProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NidaProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload>[]
          }
          delete: {
            args: Prisma.NidaProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload>
          }
          update: {
            args: Prisma.NidaProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload>
          }
          deleteMany: {
            args: Prisma.NidaProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NidaProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NidaProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload>[]
          }
          upsert: {
            args: Prisma.NidaProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NidaProfilePayload>
          }
          aggregate: {
            args: Prisma.NidaProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNidaProfile>
          }
          groupBy: {
            args: Prisma.NidaProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<NidaProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.NidaProfileCountArgs<ExtArgs>
            result: $Utils.Optional<NidaProfileCountAggregateOutputType> | number
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
    nidaProfile?: NidaProfileOmit
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
   * Model NidaProfile
   */

  export type AggregateNidaProfile = {
    _count: NidaProfileCountAggregateOutputType | null
    _min: NidaProfileMinAggregateOutputType | null
    _max: NidaProfileMaxAggregateOutputType | null
  }

  export type NidaProfileMinAggregateOutputType = {
    id: string | null
    nationalId: string | null
    fullName: string | null
    gender: string | null
    dob: Date | null
    placeOfBirth: string | null
    nationality: string | null
    fatherName: string | null
    motherName: string | null
    address: string | null
    province: string | null
    district: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NidaProfileMaxAggregateOutputType = {
    id: string | null
    nationalId: string | null
    fullName: string | null
    gender: string | null
    dob: Date | null
    placeOfBirth: string | null
    nationality: string | null
    fatherName: string | null
    motherName: string | null
    address: string | null
    province: string | null
    district: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NidaProfileCountAggregateOutputType = {
    id: number
    nationalId: number
    fullName: number
    gender: number
    dob: number
    placeOfBirth: number
    nationality: number
    fatherName: number
    motherName: number
    address: number
    province: number
    district: number
    phone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NidaProfileMinAggregateInputType = {
    id?: true
    nationalId?: true
    fullName?: true
    gender?: true
    dob?: true
    placeOfBirth?: true
    nationality?: true
    fatherName?: true
    motherName?: true
    address?: true
    province?: true
    district?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NidaProfileMaxAggregateInputType = {
    id?: true
    nationalId?: true
    fullName?: true
    gender?: true
    dob?: true
    placeOfBirth?: true
    nationality?: true
    fatherName?: true
    motherName?: true
    address?: true
    province?: true
    district?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NidaProfileCountAggregateInputType = {
    id?: true
    nationalId?: true
    fullName?: true
    gender?: true
    dob?: true
    placeOfBirth?: true
    nationality?: true
    fatherName?: true
    motherName?: true
    address?: true
    province?: true
    district?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NidaProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NidaProfile to aggregate.
     */
    where?: NidaProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NidaProfiles to fetch.
     */
    orderBy?: NidaProfileOrderByWithRelationInput | NidaProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NidaProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NidaProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NidaProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NidaProfiles
    **/
    _count?: true | NidaProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NidaProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NidaProfileMaxAggregateInputType
  }

  export type GetNidaProfileAggregateType<T extends NidaProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateNidaProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNidaProfile[P]>
      : GetScalarType<T[P], AggregateNidaProfile[P]>
  }




  export type NidaProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NidaProfileWhereInput
    orderBy?: NidaProfileOrderByWithAggregationInput | NidaProfileOrderByWithAggregationInput[]
    by: NidaProfileScalarFieldEnum[] | NidaProfileScalarFieldEnum
    having?: NidaProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NidaProfileCountAggregateInputType | true
    _min?: NidaProfileMinAggregateInputType
    _max?: NidaProfileMaxAggregateInputType
  }

  export type NidaProfileGroupByOutputType = {
    id: string
    nationalId: string
    fullName: string
    gender: string
    dob: Date
    placeOfBirth: string
    nationality: string
    fatherName: string
    motherName: string
    address: string
    province: string
    district: string
    phone: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: NidaProfileCountAggregateOutputType | null
    _min: NidaProfileMinAggregateOutputType | null
    _max: NidaProfileMaxAggregateOutputType | null
  }

  type GetNidaProfileGroupByPayload<T extends NidaProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NidaProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NidaProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NidaProfileGroupByOutputType[P]>
            : GetScalarType<T[P], NidaProfileGroupByOutputType[P]>
        }
      >
    >


  export type NidaProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nationalId?: boolean
    fullName?: boolean
    gender?: boolean
    dob?: boolean
    placeOfBirth?: boolean
    nationality?: boolean
    fatherName?: boolean
    motherName?: boolean
    address?: boolean
    province?: boolean
    district?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nidaProfile"]>

  export type NidaProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nationalId?: boolean
    fullName?: boolean
    gender?: boolean
    dob?: boolean
    placeOfBirth?: boolean
    nationality?: boolean
    fatherName?: boolean
    motherName?: boolean
    address?: boolean
    province?: boolean
    district?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nidaProfile"]>

  export type NidaProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nationalId?: boolean
    fullName?: boolean
    gender?: boolean
    dob?: boolean
    placeOfBirth?: boolean
    nationality?: boolean
    fatherName?: boolean
    motherName?: boolean
    address?: boolean
    province?: boolean
    district?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nidaProfile"]>

  export type NidaProfileSelectScalar = {
    id?: boolean
    nationalId?: boolean
    fullName?: boolean
    gender?: boolean
    dob?: boolean
    placeOfBirth?: boolean
    nationality?: boolean
    fatherName?: boolean
    motherName?: boolean
    address?: boolean
    province?: boolean
    district?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NidaProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nationalId" | "fullName" | "gender" | "dob" | "placeOfBirth" | "nationality" | "fatherName" | "motherName" | "address" | "province" | "district" | "phone" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["nidaProfile"]>

  export type $NidaProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NidaProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nationalId: string
      fullName: string
      gender: string
      dob: Date
      placeOfBirth: string
      nationality: string
      fatherName: string
      motherName: string
      address: string
      province: string
      district: string
      phone: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nidaProfile"]>
    composites: {}
  }

  type NidaProfileGetPayload<S extends boolean | null | undefined | NidaProfileDefaultArgs> = $Result.GetResult<Prisma.$NidaProfilePayload, S>

  type NidaProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NidaProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NidaProfileCountAggregateInputType | true
    }

  export interface NidaProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NidaProfile'], meta: { name: 'NidaProfile' } }
    /**
     * Find zero or one NidaProfile that matches the filter.
     * @param {NidaProfileFindUniqueArgs} args - Arguments to find a NidaProfile
     * @example
     * // Get one NidaProfile
     * const nidaProfile = await prisma.nidaProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NidaProfileFindUniqueArgs>(args: SelectSubset<T, NidaProfileFindUniqueArgs<ExtArgs>>): Prisma__NidaProfileClient<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NidaProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NidaProfileFindUniqueOrThrowArgs} args - Arguments to find a NidaProfile
     * @example
     * // Get one NidaProfile
     * const nidaProfile = await prisma.nidaProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NidaProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, NidaProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NidaProfileClient<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NidaProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NidaProfileFindFirstArgs} args - Arguments to find a NidaProfile
     * @example
     * // Get one NidaProfile
     * const nidaProfile = await prisma.nidaProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NidaProfileFindFirstArgs>(args?: SelectSubset<T, NidaProfileFindFirstArgs<ExtArgs>>): Prisma__NidaProfileClient<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NidaProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NidaProfileFindFirstOrThrowArgs} args - Arguments to find a NidaProfile
     * @example
     * // Get one NidaProfile
     * const nidaProfile = await prisma.nidaProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NidaProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, NidaProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__NidaProfileClient<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NidaProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NidaProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NidaProfiles
     * const nidaProfiles = await prisma.nidaProfile.findMany()
     * 
     * // Get first 10 NidaProfiles
     * const nidaProfiles = await prisma.nidaProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nidaProfileWithIdOnly = await prisma.nidaProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NidaProfileFindManyArgs>(args?: SelectSubset<T, NidaProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NidaProfile.
     * @param {NidaProfileCreateArgs} args - Arguments to create a NidaProfile.
     * @example
     * // Create one NidaProfile
     * const NidaProfile = await prisma.nidaProfile.create({
     *   data: {
     *     // ... data to create a NidaProfile
     *   }
     * })
     * 
     */
    create<T extends NidaProfileCreateArgs>(args: SelectSubset<T, NidaProfileCreateArgs<ExtArgs>>): Prisma__NidaProfileClient<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NidaProfiles.
     * @param {NidaProfileCreateManyArgs} args - Arguments to create many NidaProfiles.
     * @example
     * // Create many NidaProfiles
     * const nidaProfile = await prisma.nidaProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NidaProfileCreateManyArgs>(args?: SelectSubset<T, NidaProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NidaProfiles and returns the data saved in the database.
     * @param {NidaProfileCreateManyAndReturnArgs} args - Arguments to create many NidaProfiles.
     * @example
     * // Create many NidaProfiles
     * const nidaProfile = await prisma.nidaProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NidaProfiles and only return the `id`
     * const nidaProfileWithIdOnly = await prisma.nidaProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NidaProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, NidaProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NidaProfile.
     * @param {NidaProfileDeleteArgs} args - Arguments to delete one NidaProfile.
     * @example
     * // Delete one NidaProfile
     * const NidaProfile = await prisma.nidaProfile.delete({
     *   where: {
     *     // ... filter to delete one NidaProfile
     *   }
     * })
     * 
     */
    delete<T extends NidaProfileDeleteArgs>(args: SelectSubset<T, NidaProfileDeleteArgs<ExtArgs>>): Prisma__NidaProfileClient<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NidaProfile.
     * @param {NidaProfileUpdateArgs} args - Arguments to update one NidaProfile.
     * @example
     * // Update one NidaProfile
     * const nidaProfile = await prisma.nidaProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NidaProfileUpdateArgs>(args: SelectSubset<T, NidaProfileUpdateArgs<ExtArgs>>): Prisma__NidaProfileClient<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NidaProfiles.
     * @param {NidaProfileDeleteManyArgs} args - Arguments to filter NidaProfiles to delete.
     * @example
     * // Delete a few NidaProfiles
     * const { count } = await prisma.nidaProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NidaProfileDeleteManyArgs>(args?: SelectSubset<T, NidaProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NidaProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NidaProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NidaProfiles
     * const nidaProfile = await prisma.nidaProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NidaProfileUpdateManyArgs>(args: SelectSubset<T, NidaProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NidaProfiles and returns the data updated in the database.
     * @param {NidaProfileUpdateManyAndReturnArgs} args - Arguments to update many NidaProfiles.
     * @example
     * // Update many NidaProfiles
     * const nidaProfile = await prisma.nidaProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NidaProfiles and only return the `id`
     * const nidaProfileWithIdOnly = await prisma.nidaProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends NidaProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, NidaProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NidaProfile.
     * @param {NidaProfileUpsertArgs} args - Arguments to update or create a NidaProfile.
     * @example
     * // Update or create a NidaProfile
     * const nidaProfile = await prisma.nidaProfile.upsert({
     *   create: {
     *     // ... data to create a NidaProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NidaProfile we want to update
     *   }
     * })
     */
    upsert<T extends NidaProfileUpsertArgs>(args: SelectSubset<T, NidaProfileUpsertArgs<ExtArgs>>): Prisma__NidaProfileClient<$Result.GetResult<Prisma.$NidaProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NidaProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NidaProfileCountArgs} args - Arguments to filter NidaProfiles to count.
     * @example
     * // Count the number of NidaProfiles
     * const count = await prisma.nidaProfile.count({
     *   where: {
     *     // ... the filter for the NidaProfiles we want to count
     *   }
     * })
    **/
    count<T extends NidaProfileCountArgs>(
      args?: Subset<T, NidaProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NidaProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NidaProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NidaProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NidaProfileAggregateArgs>(args: Subset<T, NidaProfileAggregateArgs>): Prisma.PrismaPromise<GetNidaProfileAggregateType<T>>

    /**
     * Group by NidaProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NidaProfileGroupByArgs} args - Group by arguments.
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
      T extends NidaProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NidaProfileGroupByArgs['orderBy'] }
        : { orderBy?: NidaProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NidaProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNidaProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NidaProfile model
   */
  readonly fields: NidaProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NidaProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NidaProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NidaProfile model
   */
  interface NidaProfileFieldRefs {
    readonly id: FieldRef<"NidaProfile", 'String'>
    readonly nationalId: FieldRef<"NidaProfile", 'String'>
    readonly fullName: FieldRef<"NidaProfile", 'String'>
    readonly gender: FieldRef<"NidaProfile", 'String'>
    readonly dob: FieldRef<"NidaProfile", 'DateTime'>
    readonly placeOfBirth: FieldRef<"NidaProfile", 'String'>
    readonly nationality: FieldRef<"NidaProfile", 'String'>
    readonly fatherName: FieldRef<"NidaProfile", 'String'>
    readonly motherName: FieldRef<"NidaProfile", 'String'>
    readonly address: FieldRef<"NidaProfile", 'String'>
    readonly province: FieldRef<"NidaProfile", 'String'>
    readonly district: FieldRef<"NidaProfile", 'String'>
    readonly phone: FieldRef<"NidaProfile", 'String'>
    readonly email: FieldRef<"NidaProfile", 'String'>
    readonly createdAt: FieldRef<"NidaProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"NidaProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NidaProfile findUnique
   */
  export type NidaProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * Filter, which NidaProfile to fetch.
     */
    where: NidaProfileWhereUniqueInput
  }

  /**
   * NidaProfile findUniqueOrThrow
   */
  export type NidaProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * Filter, which NidaProfile to fetch.
     */
    where: NidaProfileWhereUniqueInput
  }

  /**
   * NidaProfile findFirst
   */
  export type NidaProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * Filter, which NidaProfile to fetch.
     */
    where?: NidaProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NidaProfiles to fetch.
     */
    orderBy?: NidaProfileOrderByWithRelationInput | NidaProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NidaProfiles.
     */
    cursor?: NidaProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NidaProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NidaProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NidaProfiles.
     */
    distinct?: NidaProfileScalarFieldEnum | NidaProfileScalarFieldEnum[]
  }

  /**
   * NidaProfile findFirstOrThrow
   */
  export type NidaProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * Filter, which NidaProfile to fetch.
     */
    where?: NidaProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NidaProfiles to fetch.
     */
    orderBy?: NidaProfileOrderByWithRelationInput | NidaProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NidaProfiles.
     */
    cursor?: NidaProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NidaProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NidaProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NidaProfiles.
     */
    distinct?: NidaProfileScalarFieldEnum | NidaProfileScalarFieldEnum[]
  }

  /**
   * NidaProfile findMany
   */
  export type NidaProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * Filter, which NidaProfiles to fetch.
     */
    where?: NidaProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NidaProfiles to fetch.
     */
    orderBy?: NidaProfileOrderByWithRelationInput | NidaProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NidaProfiles.
     */
    cursor?: NidaProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NidaProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NidaProfiles.
     */
    skip?: number
    distinct?: NidaProfileScalarFieldEnum | NidaProfileScalarFieldEnum[]
  }

  /**
   * NidaProfile create
   */
  export type NidaProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a NidaProfile.
     */
    data: XOR<NidaProfileCreateInput, NidaProfileUncheckedCreateInput>
  }

  /**
   * NidaProfile createMany
   */
  export type NidaProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NidaProfiles.
     */
    data: NidaProfileCreateManyInput | NidaProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NidaProfile createManyAndReturn
   */
  export type NidaProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * The data used to create many NidaProfiles.
     */
    data: NidaProfileCreateManyInput | NidaProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NidaProfile update
   */
  export type NidaProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a NidaProfile.
     */
    data: XOR<NidaProfileUpdateInput, NidaProfileUncheckedUpdateInput>
    /**
     * Choose, which NidaProfile to update.
     */
    where: NidaProfileWhereUniqueInput
  }

  /**
   * NidaProfile updateMany
   */
  export type NidaProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NidaProfiles.
     */
    data: XOR<NidaProfileUpdateManyMutationInput, NidaProfileUncheckedUpdateManyInput>
    /**
     * Filter which NidaProfiles to update
     */
    where?: NidaProfileWhereInput
    /**
     * Limit how many NidaProfiles to update.
     */
    limit?: number
  }

  /**
   * NidaProfile updateManyAndReturn
   */
  export type NidaProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * The data used to update NidaProfiles.
     */
    data: XOR<NidaProfileUpdateManyMutationInput, NidaProfileUncheckedUpdateManyInput>
    /**
     * Filter which NidaProfiles to update
     */
    where?: NidaProfileWhereInput
    /**
     * Limit how many NidaProfiles to update.
     */
    limit?: number
  }

  /**
   * NidaProfile upsert
   */
  export type NidaProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the NidaProfile to update in case it exists.
     */
    where: NidaProfileWhereUniqueInput
    /**
     * In case the NidaProfile found by the `where` argument doesn't exist, create a new NidaProfile with this data.
     */
    create: XOR<NidaProfileCreateInput, NidaProfileUncheckedCreateInput>
    /**
     * In case the NidaProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NidaProfileUpdateInput, NidaProfileUncheckedUpdateInput>
  }

  /**
   * NidaProfile delete
   */
  export type NidaProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
    /**
     * Filter which NidaProfile to delete.
     */
    where: NidaProfileWhereUniqueInput
  }

  /**
   * NidaProfile deleteMany
   */
  export type NidaProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NidaProfiles to delete
     */
    where?: NidaProfileWhereInput
    /**
     * Limit how many NidaProfiles to delete.
     */
    limit?: number
  }

  /**
   * NidaProfile without action
   */
  export type NidaProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NidaProfile
     */
    select?: NidaProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NidaProfile
     */
    omit?: NidaProfileOmit<ExtArgs> | null
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


  export const NidaProfileScalarFieldEnum: {
    id: 'id',
    nationalId: 'nationalId',
    fullName: 'fullName',
    gender: 'gender',
    dob: 'dob',
    placeOfBirth: 'placeOfBirth',
    nationality: 'nationality',
    fatherName: 'fatherName',
    motherName: 'motherName',
    address: 'address',
    province: 'province',
    district: 'district',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NidaProfileScalarFieldEnum = (typeof NidaProfileScalarFieldEnum)[keyof typeof NidaProfileScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type NidaProfileWhereInput = {
    AND?: NidaProfileWhereInput | NidaProfileWhereInput[]
    OR?: NidaProfileWhereInput[]
    NOT?: NidaProfileWhereInput | NidaProfileWhereInput[]
    id?: StringFilter<"NidaProfile"> | string
    nationalId?: StringFilter<"NidaProfile"> | string
    fullName?: StringFilter<"NidaProfile"> | string
    gender?: StringFilter<"NidaProfile"> | string
    dob?: DateTimeFilter<"NidaProfile"> | Date | string
    placeOfBirth?: StringFilter<"NidaProfile"> | string
    nationality?: StringFilter<"NidaProfile"> | string
    fatherName?: StringFilter<"NidaProfile"> | string
    motherName?: StringFilter<"NidaProfile"> | string
    address?: StringFilter<"NidaProfile"> | string
    province?: StringFilter<"NidaProfile"> | string
    district?: StringFilter<"NidaProfile"> | string
    phone?: StringNullableFilter<"NidaProfile"> | string | null
    email?: StringNullableFilter<"NidaProfile"> | string | null
    createdAt?: DateTimeFilter<"NidaProfile"> | Date | string
    updatedAt?: DateTimeFilter<"NidaProfile"> | Date | string
  }

  export type NidaProfileOrderByWithRelationInput = {
    id?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    placeOfBirth?: SortOrder
    nationality?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    province?: SortOrder
    district?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NidaProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nationalId?: string
    email?: string
    AND?: NidaProfileWhereInput | NidaProfileWhereInput[]
    OR?: NidaProfileWhereInput[]
    NOT?: NidaProfileWhereInput | NidaProfileWhereInput[]
    fullName?: StringFilter<"NidaProfile"> | string
    gender?: StringFilter<"NidaProfile"> | string
    dob?: DateTimeFilter<"NidaProfile"> | Date | string
    placeOfBirth?: StringFilter<"NidaProfile"> | string
    nationality?: StringFilter<"NidaProfile"> | string
    fatherName?: StringFilter<"NidaProfile"> | string
    motherName?: StringFilter<"NidaProfile"> | string
    address?: StringFilter<"NidaProfile"> | string
    province?: StringFilter<"NidaProfile"> | string
    district?: StringFilter<"NidaProfile"> | string
    phone?: StringNullableFilter<"NidaProfile"> | string | null
    createdAt?: DateTimeFilter<"NidaProfile"> | Date | string
    updatedAt?: DateTimeFilter<"NidaProfile"> | Date | string
  }, "id" | "nationalId" | "email">

  export type NidaProfileOrderByWithAggregationInput = {
    id?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    placeOfBirth?: SortOrder
    nationality?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    province?: SortOrder
    district?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NidaProfileCountOrderByAggregateInput
    _max?: NidaProfileMaxOrderByAggregateInput
    _min?: NidaProfileMinOrderByAggregateInput
  }

  export type NidaProfileScalarWhereWithAggregatesInput = {
    AND?: NidaProfileScalarWhereWithAggregatesInput | NidaProfileScalarWhereWithAggregatesInput[]
    OR?: NidaProfileScalarWhereWithAggregatesInput[]
    NOT?: NidaProfileScalarWhereWithAggregatesInput | NidaProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NidaProfile"> | string
    nationalId?: StringWithAggregatesFilter<"NidaProfile"> | string
    fullName?: StringWithAggregatesFilter<"NidaProfile"> | string
    gender?: StringWithAggregatesFilter<"NidaProfile"> | string
    dob?: DateTimeWithAggregatesFilter<"NidaProfile"> | Date | string
    placeOfBirth?: StringWithAggregatesFilter<"NidaProfile"> | string
    nationality?: StringWithAggregatesFilter<"NidaProfile"> | string
    fatherName?: StringWithAggregatesFilter<"NidaProfile"> | string
    motherName?: StringWithAggregatesFilter<"NidaProfile"> | string
    address?: StringWithAggregatesFilter<"NidaProfile"> | string
    province?: StringWithAggregatesFilter<"NidaProfile"> | string
    district?: StringWithAggregatesFilter<"NidaProfile"> | string
    phone?: StringNullableWithAggregatesFilter<"NidaProfile"> | string | null
    email?: StringNullableWithAggregatesFilter<"NidaProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NidaProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NidaProfile"> | Date | string
  }

  export type NidaProfileCreateInput = {
    id?: string
    nationalId: string
    fullName: string
    gender: string
    dob: Date | string
    placeOfBirth: string
    nationality: string
    fatherName: string
    motherName: string
    address: string
    province: string
    district: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NidaProfileUncheckedCreateInput = {
    id?: string
    nationalId: string
    fullName: string
    gender: string
    dob: Date | string
    placeOfBirth: string
    nationality: string
    fatherName: string
    motherName: string
    address: string
    province: string
    district: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NidaProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NidaProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NidaProfileCreateManyInput = {
    id?: string
    nationalId: string
    fullName: string
    gender: string
    dob: Date | string
    placeOfBirth: string
    nationality: string
    fatherName: string
    motherName: string
    address: string
    province: string
    district: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NidaProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NidaProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NidaProfileCountOrderByAggregateInput = {
    id?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    placeOfBirth?: SortOrder
    nationality?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    province?: SortOrder
    district?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NidaProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    placeOfBirth?: SortOrder
    nationality?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    province?: SortOrder
    district?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NidaProfileMinOrderByAggregateInput = {
    id?: SortOrder
    nationalId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    placeOfBirth?: SortOrder
    nationality?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    address?: SortOrder
    province?: SortOrder
    district?: SortOrder
    phone?: SortOrder
    email?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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