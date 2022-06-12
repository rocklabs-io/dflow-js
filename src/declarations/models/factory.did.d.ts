import type { Principal } from '@dfinity/principal';
export type FactoryError = { 'CanisterStatusNotAvailableError' : null } |
  { 'CreateCanisterError' : null } |
  { 'GetMetadataError' : null } |
  { 'EncodeError' : null } |
  { 'WithdrawError' : string } |
  { 'CodeAlreadyInstalled' : null } |
  { 'InstallCodeError' : string };
export interface InitArgs {
  'cap' : [] | [Principal],
  'fee' : bigint,
  'decimals' : number,
  'owner' : [] | [Principal],
  'logo' : string,
  'name' : string,
  'underlyingToken' : [] | [Principal],
  'symbol' : string,
}
export interface Metadata {
  'fee' : bigint,
  'decimals' : number,
  'owner' : Principal,
  'logo' : string,
  'name' : string,
  'totalSupply' : bigint,
  'symbol' : string,
}
export type Result = { 'Ok' : null } |
  { 'Err' : FactoryError };
export type Result_1 = { 'Ok' : Principal } |
  { 'Err' : FactoryError };
export interface TokenInfo { 'id' : Principal, 'metadata' : Metadata }
export interface WithdrawArgs {
  'to' : Principal,
  'token' : Principal,
  'amount' : bigint,
}
export interface WrappedData {
  'base_token' : [] | [TokenInfo],
  'wrapped_token' : TokenInfo,
}
export interface _SERVICE {
  'addAdmin' : (arg_0: Principal) => Promise<boolean>,
  'addExternalNativeToken' : (arg_0: Principal) => Promise<Result>,
  'addExternalToken' : (arg_0: Principal, arg_1: Principal) => Promise<Result>,
  'addNativeToken' : (arg_0: InitArgs) => Promise<Result_1>,
  'addToken' : (arg_0: Principal, arg_1: [] | [Principal]) => Promise<Result_1>,
  'getAllTokens' : () => Promise<Array<[Principal, WrappedData]>>,
  'getWrappedTokens' : (arg_0: Principal) => Promise<[] | [WrappedData]>,
  'withdraw' : (arg_0: WithdrawArgs) => Promise<Result>,
}