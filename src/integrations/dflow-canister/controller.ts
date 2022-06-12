// import { TokenInfo } from "@/declearations/models/dip20.did";
import { WrappedData, _SERVICE } from "@/declearations/models/factory.did";
import { ActorAdapter } from "../actor/adapter";
import { FactoryActor } from "../actor/factory-actor";
import { idlFactory } from "@/declearations/idls/factory.did";
import { Default } from "@/declearations";
import { Principal } from "@dfinity/principal";
import { createBaseTokenActor, createWrappedTokenActor } from "../actor"
import { Flow, UserFlowsResponse } from "@/declearations/models/dtoken.did";

export class DFlowController {

  tokenList: Array<WrappedData> = [];

  constructor(
    private factoryActor: FactoryActor = ActorAdapter.createAnonymousActor<_SERVICE>(
      Default.canisterIds.factory,
      idlFactory
    )
  ) { }
  /**
   * Get all token pair supported by DFlow. 
   * @returns {WrappedData} the returned data is an array of 
   * base-token and wrapped token pair.
   */
  async getAllTokens(): Promise<Array<WrappedData>> {
    const res = await this.factoryActor.getAllTokens()
    const parsedRes = res.reduce(
      (prased, item) => [...prased, item[1]]
      , [] as Array<WrappedData>);
    this.tokenList = parsedRes;
    return parsedRes;
  }

  /**
   * Get the wrapped token info of a base token.
   * This function get wrapped token from factory canister.
   * @param {Principal} tokenId The principal id of the token.
   * @returns {Promise<Array<WrappedData>>} Return an array. 
   * The array would be empty if the wrapped token is not found.
   */
  async getWrappedTokens(tokenId: Principal): Promise<Array<WrappedData>> {
    const res = await this.factoryActor.getWrappedTokens(tokenId)
    const parsedRes = res
    return parsedRes;
  }

  /**
   * Check whether a token Id belongs to one of the wrapped tokens.
   * Throw error if not.
   * @param {string} tokenId Token's canister Id.
   */
  async checkWrappedTokenId(tokenId: string): Promise<void> {
    if (this.tokenList) await this.getAllTokens()
    // check if the id in the list
    if (this.tokenList.filter(token => token.wrapped_token.id.toString()
      === tokenId).length <= 0)
      throw new Error("Unknown tokenId: " + tokenId)
  }

  /**
   * Get user's balance of one token.
   * @param {string} tokenId Token's canister Id.
   * @param {Principal} who User's principal Id.
   * @returns {bigint} Return balance in bigint. 
   */
  async getTokenBalanceOf(tokenId: string, who: Principal): Promise<bigint> {
    const tokenActor = await createBaseTokenActor({
      canisterId: tokenId,
    })
    return await tokenActor.balanceOf(who)
  }

  /**
   * Get the allowance amount of one token from one user to another.
   * @param {string} tokenId Token's canister Id.
   * @param {Principal} from Owner's principal Id.
   * @param {Principal} to Taker's principal Id.
   * @returns {bigint} Return amount.
   */
  async getTokenAllowanceOf(tokenId: string, from: Principal, to: Principal): Promise<bigint> {
    await this.checkWrappedTokenId(tokenId)
    const tokenActor = await createBaseTokenActor({
      canisterId: tokenId,
    })
    return await tokenActor.allowance(from, to)
  }

  /**
   * Approve token to one principal Id. 
   * Calling this function needs user's Identity.
   * @param {string} tokenId Token's canister Id.
   * @param {Principal} to The user being approved to.
   * @param {bigint} amount The amount going to be approved.
   */
  async approveTo(tokenId: string, to: Principal, amount: bigint): Promise<void> {
    await this.checkWrappedTokenId(tokenId)
    const tokenActor = await createBaseTokenActor({
      canisterId: tokenId,
    })
    const res = await tokenActor.approve(to, amount)
    if ('Err' in res) throw new Error(res.Err.toString())
  }

  /**
   * Mint wrapped token to one user.
   * This function needs sufficient allowance of base-token to wrapped-token's canister.
   * Calling this function needs user's Identity.
   * @param {string} tokenId Token's canister Id.
   * @param {Principal} to The user being minted to.
   * @param {bigint} amount The amount going to be minted.
   */
  async mintToken(tokenId: string, to: Principal, amount: bigint): Promise<void> {
    if (this.tokenList) await this.getAllTokens()
    // check if the id in the list
    if (this.tokenList.filter(token => token.wrapped_token.id.toString()
      === tokenId).length <= 0)
      throw new Error("Unknown tokenId: " + tokenId)

    const tokenActor = await createWrappedTokenActor({
      canisterId: tokenId
    })
    tokenActor.mint(to, amount).then((res) => {
      if ('Err' in res) throw new Error(res.Err.toString())
    })
  }

  /**
   * This function unwrap wrapped-token to base-token.
   * Calling this function needs user's Identity.
   * @param {string} tokenId Token's canister Id.
   * @param {Principal} who The one going to be unwrap. 
   * @param {bigint} amount The amount going to be unwrap.
   */
  async burnToken(tokenId: string, who: Principal, amount: bigint) {
    if (this.tokenList) await this.getAllTokens()
    // check if the id in the list
    if (this.tokenList.filter(token => token.wrapped_token.id.toString()
      === tokenId).length <= 0)
      throw new Error("Unknown tokenId: " + tokenId)

    const tokenActor = await createWrappedTokenActor({
      canisterId: tokenId
    })
    tokenActor.burn(who, amount).then((res) => {
      if ('Err' in res) throw new Error(res.Err.toString())
    })
  }

  /**
   * Get one flow's information of a token by flow Id.
   * @param {string} tokenId Token's canister Id.
   * @param flowId FlowId in format: '''c.<sender.principal.toString()>.<receiver.principal.toString()>'''.
   * @returns {Promise<Array<Flow>>} Return Array of Flow in Promise. Empty if not found.
   */
  async getFlowFromId(tokenId: string, flowId: string): Promise<Array<Flow>> {
    await this.checkWrappedTokenId(tokenId);
    const tokenActor = await createWrappedTokenActor({
      canisterId: tokenId
    })
    return await tokenActor.getFlow(flowId)
  }



  /**
   * Get all flows' information of a token by user's principal Id.
   * @param {string} tokenId Token's canister Id.
   * @param {Principal} userId User's principal Id.
   * @returns {Promise<UserFlowsResponse>} Return Array of UserFlowResponse in Promise. Empty if not found.
   */
  async getUserFlows(tokenId: string, userId: Principal): Promise<UserFlowsResponse> {
    await this.checkWrappedTokenId(tokenId);
    const tokenActor = await createWrappedTokenActor({
      canisterId: tokenId
    })
    return await tokenActor.getUserFlows(userId)
  }

  /**
   * Create a flow stream from sender to receiver.
   * The amount calculated at the hourly rate will be mortgaged.
   * Calling this function needs user's Identity.
   * @param {string} tokenId Token's canister Id.
   * @param {Principal} from Sender's principal Id.
   * @param {Principal} to Receiver's principal Id.
   * @param {bigint} rate Stream's rate, smallest denomination token per second.
   */
  async createFlow(tokenId: string, from: Principal, to: Principal, rate: bigint):
    Promise<void> {
    await this.checkWrappedTokenId(tokenId)
    const tokenActor = await createWrappedTokenActor({
      canisterId: tokenId
    })
    const res = await tokenActor.createFlow(
      { 'Constant': null }, from, to, rate
    )
    if ('Err' in res) throw new Error(res.Err.toString())
  }

  /**
   * Cancel a flow. Flow could be canceled by sender and receiver.
   * @param {string} tokenId Token's canister Id.
   * @param {string} flowId FlowId in format: '''c.<sender.principal.toString()>.<receiver.principal.toString()>'''.
   */
  async deleteFlow(tokenId: string, flowId: string): Promise<void> {
    await this.checkWrappedTokenId(tokenId)
    const tokenActor = await createWrappedTokenActor({
      canisterId: tokenId
    })
    const res = await tokenActor.deleteFlow(flowId)
    if ('Err' in res) throw new Error(res.Err.toString())
  }

  /**
   * Update rate of flow. Flow rate could be updated by sender.
   * @param {string} tokenId Token's canister Id.
   * @param {string} flowId FlowId in format: '''c.<sender.principal.toString()>.<receiver.principal.toString()>'''.
   * @param {bigint} newRate Rate: smallest denomination token per second.
   */
  async updateFlowRate(tokenId: string, flowId: string, newRate: bigint): Promise<void> {
    await this.checkWrappedTokenId(tokenId)
    const tokenActor = await createWrappedTokenActor({
      canisterId: tokenId
    })
    const res = await tokenActor.updateFlow(flowId, newRate)
    if ('Err' in res) throw new Error(res.Err.toString())
  }
}