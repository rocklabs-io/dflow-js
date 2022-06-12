import { Agent } from "@dfinity/agent";
import { mockPrincipal } from ".";

export const mockAgent = (params: Partial<Agent> = {}): Agent => ({
  getPrincipal: async () => mockPrincipal(),
  ...params
} as Agent)