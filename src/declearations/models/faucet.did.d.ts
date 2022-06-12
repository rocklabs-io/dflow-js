import type { Principal } from '@dfinity/principal';
export interface Faucet {
  'claimed' : (arg_0: Principal, arg_1: Principal) => Promise<boolean>,
  'getRecords' : () => Promise<Array<[Principal, Array<[Principal, bigint]>]>>,
  'getStats' : () => Promise<Stats>,
  'getToken' : (arg_0: Principal) => Promise<Result>,
  'setTokenPerUser' : (arg_0: bigint) => Promise<undefined>,
}
export type Result = { 'ok' : bigint } |
  { 'err' : string };
export interface Stats {
  'tokenPerUser' : bigint,
  'owner' : Principal,
  'cycles' : bigint,
  'userNumber' : bigint,
}
export interface _SERVICE extends Faucet {}
