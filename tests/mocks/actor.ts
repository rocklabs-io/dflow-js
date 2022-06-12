import { Principal } from "@dfinity/principal";
import { _SERVICE as dtoken_SERVICE } from "@/declarations/models/dtoken.did";
import { Metadata, _SERVICE as factory_SERVICE } from "@/declarations/models/factory.did";
import { FactoryActor, WrappedTokenActor } from "integrations";
import { mockFlow } from ".";
import { mockPrincipal } from "./principal";
// import { idlFactory } from "declearations/idls/dtoken.did";

export const mockFactoryActor = (params: Partial<factory_SERVICE> = {}): FactoryActor => ({
  getAllTokens: async () => {
    return [
    ['', {
      base_token: [{
        id: Principal.fromText('g2nul-aqaaa-aaaai-qm7za-cai'),
        metadata: {
          symbol: 'WICP'
        } as Metadata
      }],
      wrapped_token: {
        id: Principal.fromText('mfyp7-daaaa-aaaah-qc2wq-cai'),
        metadata: {
          symbol: 'dWICP'
        } as Metadata
      }
    }],
    ['', {
      base_token: [{
        id: Principal.fromText('2ksfx-7yaaa-aaaai-ql5pq-cai'),
        metadata: {
          symbol: 'USDC'
        } as Metadata
      }],
      wrapped_token: {
        id: Principal.fromText('m65t2-zyaaa-aaaah-qc2ua-cai'),
        metadata: {
          symbol: 'dUSDC'
        } as Metadata
      }
    }],
  ]}
  ,
  getWrappedTokens: async () => [{
    id: mockPrincipal,
    metadata: {
      symbol: 'dUSDC'
    } as Metadata
  }],
  ...params
} as FactoryActor)

export const mockWrappedTokenActor = (params: Partial<dtoken_SERVICE> = {}): WrappedTokenActor => ({
  getFlow: async (flowId: string) => [mockFlow],
  getUserFlows: async () => ({
    receiveFlows: [mockFlow],
    sendFlows: [mockFlow]
  }),
  updateFlow: async () => ({ Ok: BigInt(1) }),
  createFlow: async () => ({ Ok: BigInt(1) }),
  deleteFlow: async () => ({ Ok: BigInt(1) }),
  ...params
} as WrappedTokenActor);
