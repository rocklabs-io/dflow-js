# @rocklabs-io/dflow-js

## Table of contents

### Classes

- [ActorAdapter](classes/ActorAdapter.md)
- [DFlowController](classes/DFlowController.md)

### Namespaces

- [ActorAdapter](modules/ActorAdapter.md)
- [Type](modules/Type.md)

### Type Aliases

- [BaseTokenActor](README.md#basetokenactor)
- [FactoryActor](README.md#factoryactor)
- [WrappedTokenActor](README.md#wrappedtokenactor)

### Interfaces

- [CreateBaseTokenActorOptions](interfaces/CreateBaseTokenActorOptions.md)
- [CreateFactoryActorOptions](interfaces/CreateFactoryActorOptions.md)
- [CreateWrappedTokenActorOptions](interfaces/CreateWrappedTokenActorOptions.md)

### Variables

- [Default](README.md#default)

### Functions

- [createBaseTokenActor](README.md#createbasetokenactor)
- [createFactoryActor](README.md#createfactoryactor)
- [createWrappedTokenActor](README.md#createwrappedtokenactor)

## Type Aliases

### BaseTokenActor

Ƭ **BaseTokenActor**: [`Actor`](modules/ActorAdapter.md#actor)<`_SERVICE`\>

___

### FactoryActor

Ƭ **FactoryActor**: [`Actor`](modules/ActorAdapter.md#actor)<`_SERVICE`\>

___

### WrappedTokenActor

Ƭ **WrappedTokenActor**: [`Actor`](modules/ActorAdapter.md#actor)<`_SERVICE`\>

## Variables

### Default

• `Const` **Default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canisterIds` | { `USDC`: `string` = '2ksfx-7yaaa-aaaai-ql5pq-cai'; `WICP`: `string` = 'g2nul-aqaaa-aaaai-qm7za-cai'; `dUSDC`: `string` = 'm65t2-zyaaa-aaaah-qc2ua-cai'; `dWICP`: `string` = 'mfyp7-daaaa-aaaah-qc2wq-cai'; `factory`: `string` = 'mz4vo-uaaaa-aaaah-qc2uq-cai'; `faucet`: `string` = 'clyka-eqaaa-aaaai-qm7ba-cai' } |
| `canisterIds.USDC` | `string` |
| `canisterIds.WICP` | `string` |
| `canisterIds.dUSDC` | `string` |
| `canisterIds.dWICP` | `string` |
| `canisterIds.factory` | `string` |
| `canisterIds.faucet` | `string` |
| `host` | `string` |

## Functions

### createBaseTokenActor

▸ **createBaseTokenActor**(`__namedParameters?`): `Promise`<[`BaseTokenActor`](README.md#basetokenactor)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CreateBaseTokenActorOptions`](interfaces/CreateBaseTokenActorOptions.md) |

#### Returns

`Promise`<[`BaseTokenActor`](README.md#basetokenactor)\>

___

### createFactoryActor

▸ **createFactoryActor**(`__namedParameters?`): `Promise`<[`FactoryActor`](README.md#factoryactor)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CreateFactoryActorOptions`](interfaces/CreateFactoryActorOptions.md) |

#### Returns

`Promise`<[`FactoryActor`](README.md#factoryactor)\>

___

### createWrappedTokenActor

▸ **createWrappedTokenActor**(`__namedParameters?`): `Promise`<[`WrappedTokenActor`](README.md#wrappedtokenactor)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CreateWrappedTokenActorOptions`](interfaces/CreateWrappedTokenActorOptions.md) |

#### Returns

`Promise`<[`WrappedTokenActor`](README.md#wrappedtokenactor)\>
