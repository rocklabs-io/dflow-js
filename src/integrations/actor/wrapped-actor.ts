import { _SERVICE } from '@/declarations/models/dtoken.did';
import { idlFactory } from '@/declarations/idls/dtoken.did'
import { ActorAdapter } from './adapter';

/**
 * Options for creating an SwapActor.
 * @param {string} canisterId Swap canister ID, default is applied
 * @param {ActorAdapter} actorAdapter ActorAdapter instance with or without a provider, default is applied
 */
 export interface CreateWrappedTokenActorOptions {
  canisterId?: string;
  actorAdapter?: ActorAdapter;
}

export type WrappedTokenActor = ActorAdapter.Actor<_SERVICE>

export const createWrappedTokenActor = ({
  canisterId = '',
  actorAdapter = new ActorAdapter(),
}: CreateWrappedTokenActorOptions = {}): Promise<WrappedTokenActor> => {
  return actorAdapter.createActor(canisterId, idlFactory)
}

