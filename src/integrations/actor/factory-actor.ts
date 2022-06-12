import { _SERVICE } from '@/declearations/models/factory.did';
import { idlFactory } from '@/declearations/idls/factory.did'
import { ActorAdapter } from './adapter';
import { Default } from "@/declearations";

/**
 * Options for creating an SwapActor.
 * @param {string} canisterId Swap canister ID, default is applied
 * @param {ActorAdapter} actorAdapter ActorAdapter instance with or without a provider, default is applied
 */
export interface CreateFactoryActorOptions {
  canisterId?: string;
  actorAdapter?: ActorAdapter;
}

export type FactoryActor = ActorAdapter.Actor<_SERVICE>

export const createFactoryActor = ({
  canisterId = Default.canisterIds.factory,
  actorAdapter = new ActorAdapter(),
}: CreateFactoryActorOptions = {}): Promise<FactoryActor> => {
  return actorAdapter.createActor(canisterId, idlFactory)
}

