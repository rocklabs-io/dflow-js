export const idlFactory = ({ IDL }) => {
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
  const TxError = IDL.Variant({
    'InsufficientAllowance' : IDL.Null,
    'InsufficientBalance' : IDL.Null,
    'ErrorOperationStyle' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'LedgerTrap' : IDL.Null,
    'ErrorTo' : IDL.Null,
    'Other' : IDL.Text,
    'BlockUsed' : IDL.Null,
    'AmountTooSmall' : IDL.Null,
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : TxError });
  const FlowType = IDL.Variant({ 'Constant' : IDL.Null });
  const Flow = IDL.Record({
    'startTime' : IDL.Nat64,
    'deposit' : IDL.Nat,
    'sender' : IDL.Principal,
    'flowRate' : IDL.Nat,
    'flowType' : FlowType,
    'settleFunds' : IDL.Nat,
    'receiver' : IDL.Principal,
    'settleTime' : IDL.Nat64,
  });
  const Metadata = IDL.Record({
    'fee' : IDL.Nat,
    'decimals' : IDL.Nat8,
    'owner' : IDL.Principal,
    'logo' : IDL.Text,
    'name' : IDL.Text,
    'totalSupply' : IDL.Nat,
    'symbol' : IDL.Text,
  });
  const UserFlowsResponse = IDL.Record({
    'receiveFlows' : IDL.Vec(Flow),
    'sendFlows' : IDL.Vec(Flow),
  });
  const UserInfoResponse = IDL.Record({
    'balance' : IDL.Nat,
    'receiveFlows' : IDL.Vec(Flow),
    'liquidationDate' : IDL.Nat64,
    'flowRate' : IDL.Int,
    'sendFlows' : IDL.Vec(Flow),
  });
  return IDL.Service({
    'addApp' : IDL.Func([IDL.Principal], [Result], []),
    'addAuth' : IDL.Func([IDL.Principal], [Result], []),
    'addOperator' : IDL.Func([IDL.Principal], [Result], []),
    'allowance' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Nat],
        ['query'],
      ),
    'approve' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'burn' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    'createFlow' : IDL.Func(
        [FlowType, IDL.Principal, IDL.Principal, IDL.Nat],
        [Result],
        [],
      ),
    'deleteFlow' : IDL.Func([IDL.Text], [Result], []),
    'getApps' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getFlow' : IDL.Func([IDL.Text], [IDL.Opt(Flow)], ['query']),
    'getMetadata' : IDL.Func([], [Metadata], ['query']),
    'getUserFlowRate' : IDL.Func([IDL.Principal], [IDL.Int], ['query']),
    'getUserFlows' : IDL.Func([IDL.Principal], [UserFlowsResponse], ['query']),
    'getUserInfo' : IDL.Func([IDL.Principal], [UserInfoResponse], ['query']),
    'getUserLiquidationDate' : IDL.Func(
        [IDL.Principal],
        [IDL.Nat64],
        ['query'],
      ),
    'mint' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    'removeApp' : IDL.Func([IDL.Principal], [Result], []),
    'removeAuth' : IDL.Func([IDL.Principal], [Result], []),
    'removeOperator' : IDL.Func([IDL.Principal], [Result], []),
    'transfer' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    'transferFrom' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat],
        [Result],
        [],
      ),
    'updateFlow' : IDL.Func([IDL.Text, IDL.Nat], [Result], []),
  });
};
export const init = ({ IDL }) => {
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
  return [InitArgs];
};