export const idlFactory = ({ IDL }) => {
  const Stats = IDL.Record({
    'tokenPerUser' : IDL.Nat,
    'owner' : IDL.Principal,
    'cycles' : IDL.Nat,
    'userNumber' : IDL.Nat,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Faucet = IDL.Service({
    'claimed' : IDL.Func([IDL.Principal, IDL.Principal], [IDL.Bool], ['query']),
    'getRecords' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Tuple(IDL.Principal, IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat)))
          ),
        ],
        [],
      ),
    'getStats' : IDL.Func([], [Stats], []),
    'getToken' : IDL.Func([IDL.Principal], [Result], []),
    'setTokenPerUser' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
  return Faucet;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
