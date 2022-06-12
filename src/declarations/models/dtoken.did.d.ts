import type { Principal } from '@dfinity/principal';
export interface Flow {
  'startTime' : bigint,
  'deposit' : bigint,
  'sender' : Principal,
  'flowRate' : bigint,
  'flowType' : FlowType,
  'settleFunds' : bigint,
  'receiver' : Principal,
  'settleTime' : bigint,
}
// id: 'c.{sender.pricipal}.{receiver.principal}'
export type FlowType = { 'Constant' : null };
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
export type Result = { 'Ok' : bigint } |
  { 'Err' : TxError };
export type TxError = { 'InsufficientAllowance' : null } |
  { 'InsufficientBalance' : null } |
  { 'ErrorOperationStyle' : null } |
  { 'Unauthorized' : null } |
  { 'LedgerTrap' : null } |
  { 'ErrorTo' : null } |
  { 'Other' : string } |
  { 'BlockUsed' : null } |
  { 'AmountTooSmall' : null };
export interface UserFlowsResponse {
  'receiveFlows' : Array<Flow>,
  'sendFlows' : Array<Flow>,
}
export interface UserInfoResponse {
  'balance' : bigint,
  'receiveFlows' : Array<Flow>,
  'liquidationDate' : bigint,
  'flowRate' : bigint,
  'sendFlows' : Array<Flow>,
}
export interface _SERVICE {
  'addApp' : (arg_0: Principal) => Promise<Result>,
  'addAuth' : (arg_0: Principal) => Promise<Result>,
  'addOperator' : (arg_0: Principal) => Promise<Result>,
  'allowance' : (arg_0: Principal, arg_1: Principal) => Promise<bigint>,
  'approve' : (arg_0: Principal, arg_1: bigint) => Promise<Result>,
  'balanceOf' : (arg_0: Principal) => Promise<bigint>,
  'burn' : (arg_0: Principal, arg_1: bigint) => Promise<Result>,
  'createFlow' : (
      arg_0: FlowType, 
      arg_1: Principal,
      arg_2: Principal,
      arg_3: bigint, //rate
    ) => Promise<Result>,
  'deleteFlow' : (arg_0: string) => Promise<Result>,
  'getApps' : () => Promise<Array<Principal>>,
  'getFlow' : (arg_0: string) => Promise<[] | [Flow]>,
  'getMetadata' : () => Promise<Metadata>,
  'getUserFlowRate' : (arg_0: Principal) => Promise<bigint>,
  'getUserFlows' : (arg_0: Principal) => Promise<UserFlowsResponse>,
  'getUserInfo' : (arg_0: Principal) => Promise<UserInfoResponse>,
  'getUserLiquidationDate' : (arg_0: Principal) => Promise<bigint>,
  'mint' : (arg_0: Principal, arg_1: bigint) => Promise<Result>,
  'removeApp' : (arg_0: Principal) => Promise<Result>,
  'removeAuth' : (arg_0: Principal) => Promise<Result>,
  'removeOperator' : (arg_0: Principal) => Promise<Result>,
  'transfer' : (arg_0: Principal, arg_1: bigint) => Promise<Result>,
  'transferFrom' : (
      arg_0: Principal,
      arg_1: Principal,
      arg_2: bigint,
    ) => Promise<Result>,
  'updateFlow' : (arg_0: string, arg_1: bigint) => Promise<Result>,
}