import { Principal } from "@dfinity/principal";

export namespace Type {

  /**
   * Type defination of `UserFlowResponse`.
   */
  export interface UserFlowsResponse {
    'receiveFlows': Array<Flow>,
    'sendFlows': Array<Flow>,
  }

  /**
   * Type defination of `Flow`.
   */
  export interface Flow {
    'startTime': bigint,
    'deposit': bigint,
    'sender': Principal,
    'flowRate': bigint,
    'flowType': FlowType,
    'settleFunds': bigint,
    'receiver': Principal,
    'settleTime': bigint,
  }

  /**
   * Type defination of `FlowType`. Only one currently.
   */
  export type FlowType = { 'Constant': null };

  /**
   * Type defination of `UserInfoResponse`, which includes user's information from one wrapped-token.
   */
  export interface UserInfoResponse {
    'balance': bigint,
    'receiveFlows': Array<Flow>,
    'liquidationDate': bigint,
    'flowRate': bigint,
    'sendFlows': Array<Flow>,
  }

  /**
   * Token's `Metadata`.
   */
  export interface Metadata {
    'fee': bigint,
    'decimals': number,
    'owner': Principal,
    'logo': string,
    'name': string,
    'totalSupply': bigint,
    'symbol': string,
  }

  /**
   * Type definaition of `TokenInfo`. `Id` is the token's canister Id.
   */
  export interface TokenInfo {
    'id': Principal,
    'metadata': Metadata
  }

  /**
   * Type `WrappedData` is used to describe a pair of base-token and wrapped-token 
   */
  export interface WrappedData {
    'base_token': [] | [TokenInfo],
    'wrapped_token': TokenInfo,
  }
}