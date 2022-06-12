import { Actor } from "@dfinity/agent";
import { createFactoryActor, createWrappedTokenActor, FactoryActor } from "@/integrations/actor";
import { mockAgent } from "../../mocks";
import { DFlowController } from "integrations/dflow-canister";
import { mockFactoryActor, mockWrappedTokenActor } from "../../mocks/actor";
import { Principal } from "@dfinity/principal";

jest.mock("@/integrations/actor");

(createFactoryActor as jest.Mock).mockImplementation(async () =>
  mockFactoryActor()
);

(createWrappedTokenActor as jest.Mock).mockImplementation(async () =>
  mockWrappedTokenActor()
);

jest.mock('@dfinity/agent');

(Actor.agentOf as jest.Mock).mockImplementation(() => mockAgent());

describe('Test DFlowController', () => {
  let factoryActor: FactoryActor;
  let controller: DFlowController;

  beforeEach(async () => {
    factoryActor = await createFactoryActor();
    controller = new DFlowController(factoryActor);
  })

  test('Test no parameter initialize', () => {
    expect(() => new DFlowController()).not.toThrow();
  })

  test('Test get Host', async () => {
    const res = controller.tokenList
    expect(res).toBeDefined;
  })

  describe('.getAllTokens', () => {

    test('Test getAllTokens res is valid', async () => {
      const res = await controller.getAllTokens();

      expect(res.length).toEqual(2);
    })

    test('Test res has been stored in tokenList', async () => {
      await controller.getAllTokens();

      expect(controller).toBeDefined();
      expect(controller.tokenList).toBeDefined();
      expect(controller.tokenList.length).toEqual(2);
    })
  })

  describe('.getWrappedToken', () => {
    test('test with USDC', async () => {
      const res = await controller.getWrappedTokens(
        Principal.fromText('2ksfx-7yaaa-aaaai-ql5pq-cai')
      );
      expect(res.length).toEqual(1);
    })
  })

  describe('.createFlow', () => {
    test('test with dUSDC', async () => {

      expect(() => {
        controller.createFlow(
          'm65t2-zyaaa-aaaah-qc2ua-cai',
          Principal.fromText('2ksfx-7yaaa-aaaai-ql5pq-cai'),
          Principal.fromText('2ksfx-7yaaa-aaaai-ql5pq-cai'),
          BigInt(1)
        )
      }).not.toThrow()
    })
  })

  describe('.deleteFlow', () => {
    test('test with dUSDC', async () => {

      expect(() => {
        controller.deleteFlow(
          'm65t2-zyaaa-aaaah-qc2ua-cai',
          'c.xxx.xxx'
        )
      }).not.toThrow()
    })
  })


})
