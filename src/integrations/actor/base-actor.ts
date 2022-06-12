import { _SERVICE } from '@/declarations/models/dip20.did';
import { idlFactory } from '@/declarations/idls/dip20.did'
import { ActorAdapter } from './adapter';

/**
 * Options for creating an SwapActor.
 * @param {string} canisterId Swap canister ID, default is applied
 * @param {ActorAdapter} actorAdapter ActorAdapter instance with or without a provider, default is applied
 */
 export interface CreateBaseTokenActorOptions {
  canisterId?: string;
  actorAdapter?: ActorAdapter;
}

export type BaseTokenActor = ActorAdapter.Actor<_SERVICE>

export const createBaseTokenActor = ({
  canisterId = '',
  actorAdapter = new ActorAdapter(),
}: CreateBaseTokenActorOptions = {}): Promise<BaseTokenActor> => {
  return actorAdapter.createActor(canisterId, idlFactory)
}

