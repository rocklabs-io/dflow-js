import { Principal } from "@dfinity/principal";
import { Flow } from "@/declarations/models/dtoken.did";

export const mockFlow = (params: Partial<Flow> = {}): Flow => ({
  sender: Principal.fromText('wjsrf-myaaa-aaaam-qaayq-cai'),
  rate: BigInt(100),
  ...params
} as Flow)