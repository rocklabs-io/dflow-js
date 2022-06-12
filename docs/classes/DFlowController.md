# Class: DFlowController

## Table of contents

### Methods

- [approveTo](DFlowController.md#approveto)
- [burnToken](DFlowController.md#burntoken)
- [checkWrappedTokenId](DFlowController.md#checkwrappedtokenid)
- [createFlow](DFlowController.md#createflow)
- [deleteFlow](DFlowController.md#deleteflow)
- [getAllTokens](DFlowController.md#getalltokens)
- [getFlowFromId](DFlowController.md#getflowfromid)
- [getTokenAllowanceOf](DFlowController.md#gettokenallowanceof)
- [getTokenBalanceOf](DFlowController.md#gettokenbalanceof)
- [getUserFlows](DFlowController.md#getuserflows)
- [getWrappedTokens](DFlowController.md#getwrappedtokens)
- [mintToken](DFlowController.md#minttoken)
- [updateFlowRate](DFlowController.md#updateflowrate)

### Constructors

- [constructor](DFlowController.md#constructor)

### Properties

- [tokenList](DFlowController.md#tokenlist)

## Methods

### approveTo

▸ **approveTo**(`tokenId`, `to`, `amount`): `Promise`<`void`\>

Approve token to one principal Id.
Calling this function needs user's Identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `to` | `Principal` | The user being approved to. |
| `amount` | `bigint` | The amount going to be approved. |

#### Returns

`Promise`<`void`\>

___

### burnToken

▸ **burnToken**(`tokenId`, `who`, `amount`): `Promise`<`void`\>

This function unwrap wrapped-token to base-token.
Calling this function needs user's Identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `who` | `Principal` | The one going to be unwrap. |
| `amount` | `bigint` | The amount going to be unwrap. |

#### Returns

`Promise`<`void`\>

___

### checkWrappedTokenId

▸ **checkWrappedTokenId**(`tokenId`): `Promise`<`void`\>

Check whether a token Id belongs to one of the wrapped tokens.
Throw error if not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |

#### Returns

`Promise`<`void`\>

___

### createFlow

▸ **createFlow**(`tokenId`, `from`, `to`, `rate`): `Promise`<`void`\>

Create a flow stream from sender to receiver.
The amount calculated at the hourly rate will be mortgaged.
Calling this function needs user's Identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `from` | `Principal` | Sender's principal Id. |
| `to` | `Principal` | Receiver's principal Id. |
| `rate` | `bigint` | Stream's rate, smallest denomination token per second. |

#### Returns

`Promise`<`void`\>

___

### deleteFlow

▸ **deleteFlow**(`tokenId`, `flowId`): `Promise`<`void`\>

Cancel a flow. Flow could be canceled by sender and receiver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `flowId` | `string` | FlowId in format: '''c.<sender.principal.toString()>.<receiver.principal.toString()>'''. |

#### Returns

`Promise`<`void`\>

___

### getAllTokens

▸ **getAllTokens**(): `Promise`<[`WrappedData`](../interfaces/Type.WrappedData.md)[]\>

Get all token pair supported by DFlow.

#### Returns

`Promise`<[`WrappedData`](../interfaces/Type.WrappedData.md)[]\>

the returned data is an array of
base-token and wrapped token pair.

___

### getFlowFromId

▸ **getFlowFromId**(`tokenId`, `flowId`): `Promise`<[`Flow`](../interfaces/Type.Flow.md)[]\>

Get one flow's information of a token by flow Id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `flowId` | `string` | FlowId in format: `c.<sender.principal.toString()>.<receiver.principal.toString()>`. |

#### Returns

`Promise`<[`Flow`](../interfaces/Type.Flow.md)[]\>

Return Array of Flow in Promise. Empty if not found.

___

### getTokenAllowanceOf

▸ **getTokenAllowanceOf**(`tokenId`, `from`, `to`): `Promise`<`bigint`\>

Get the allowance amount of one token from one user to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `from` | `Principal` | Owner's principal Id. |
| `to` | `Principal` | Taker's principal Id. |

#### Returns

`Promise`<`bigint`\>

Return amount.

___

### getTokenBalanceOf

▸ **getTokenBalanceOf**(`tokenId`, `who`): `Promise`<`bigint`\>

Get user's balance of one token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `who` | `Principal` | User's principal Id. |

#### Returns

`Promise`<`bigint`\>

Return balance in bigint.

___

### getUserFlows

▸ **getUserFlows**(`tokenId`, `userId`): `Promise`<[`UserFlowsResponse`](../interfaces/Type.UserFlowsResponse.md)\>

Get all flows' information of a token by user's principal Id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `userId` | `Principal` | User's principal Id. |

#### Returns

`Promise`<[`UserFlowsResponse`](../interfaces/Type.UserFlowsResponse.md)\>

Return Array of UserFlowResponse in Promise. Empty if not found.

___

### getWrappedTokens

▸ **getWrappedTokens**(`tokenId`): `Promise`<[`WrappedData`](../interfaces/Type.WrappedData.md)[]\>

Get the wrapped token info of a base token.
This function get wrapped token from factory canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `Principal` | The principal id of the token. |

#### Returns

`Promise`<[`WrappedData`](../interfaces/Type.WrappedData.md)[]\>

Return an array.
The array would be empty if the wrapped token is not found.

___

### mintToken

▸ **mintToken**(`tokenId`, `to`, `amount`): `Promise`<`void`\>

Mint wrapped token to one user.
This function needs sufficient allowance of base-token to wrapped-token's canister.
Calling this function needs user's Identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `to` | `Principal` | The user being minted to. |
| `amount` | `bigint` | The amount going to be minted. |

#### Returns

`Promise`<`void`\>

___

### updateFlowRate

▸ **updateFlowRate**(`tokenId`, `flowId`, `newRate`): `Promise`<`void`\>

Update rate of flow. Flow rate could be updated by sender.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | Token's canister Id. |
| `flowId` | `string` | FlowId in format: `c.<sender.principal.toString()>.<receiver.principal.toString()>`. |
| `newRate` | `bigint` | Rate: smallest denomination token per second. |

#### Returns

`Promise`<`void`\>

## Constructors

### constructor

• **new DFlowController**(`factoryActor?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryActor` | [`FactoryActor`](../README.md#factoryactor) |

## Properties

### tokenList

• **tokenList**: [`WrappedData`](../interfaces/Type.WrappedData.md)[] = `[]`
