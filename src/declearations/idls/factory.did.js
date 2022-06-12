export const idlFactory = ({ IDL }) => {
  const FactoryError = IDL.Variant({
    'CanisterStatusNotAvailableError' : IDL.Null,
    'CreateCanisterError' : IDL.Null,
    'GetMetadataError' : IDL.Null,
    'EncodeError' : IDL.Null,
    'WithdrawError' : IDL.Text,
    'CodeAlreadyInstalled' : IDL.Null,
    'InstallCodeError' : IDL.Text,
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : FactoryError });
  const InitArgs = IDL.Record({
    'cap' : IDL.Opt(IDL.Principal),
    'fee' : IDL.Nat,
    'decimals' : IDL.Nat8,
    'owner' : IDL.Opt(IDL.Principal),
    'logo' : IDL.Text,
    'name' : IDL.Text,
    'underlyingToken' : IDL.Opt(IDL.Principal),
    'symbol' : IDL.Text,
  });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Principal, 'Err' : FactoryError });
  const Metadata = IDL.Record({
    'fee' : IDL.Nat,
    'decimals' : IDL.Nat8,
    'owner' : IDL.Principal,
    'logo' : IDL.Text,
    'name' : IDL.Text,
    'totalSupply' : IDL.Nat,
    'symbol' : IDL.Text,
  });
  const TokenInfo = IDL.Record({ 'id' : IDL.Principal, 'metadata' : Metadata });
  const WrappedData = IDL.Record({
    'base_token' : IDL.Opt(TokenInfo),
    'wrapped_token' : TokenInfo,
  });
  const WithdrawArgs = IDL.Record({
    'to' : IDL.Principal,
    'token' : IDL.Principal,
    'amount' : IDL.Nat,
  });
  return IDL.Service({
    'addAdmin' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'addExternalNativeToken' : IDL.Func([IDL.Principal], [Result], []),
    'addExternalToken' : IDL.Func([IDL.Principal, IDL.Principal], [Result], []),
    'addNativeToken' : IDL.Func([InitArgs], [Result_1], []),
    'addToken' : IDL.Func(
        [IDL.Principal, IDL.Opt(IDL.Principal)],
        [Result_1],
        [],
      ),
    'getAllTokens' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, WrappedData))],
        ['query'],
      ),
    'getWrappedTokens' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(WrappedData)],
        ['query'],
      ),
    'withdraw' : IDL.Func([WithdrawArgs], [Result], []),
  });
};
export const init = ({ IDL }) => { return [IDL.Principal]; };