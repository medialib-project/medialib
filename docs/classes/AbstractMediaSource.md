[@medialib/medialib](../README.md) / [Exports](../modules.md) / AbstractMediaSource

# Class: AbstractMediaSource<T, U, V\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`mediaSourceSettings`](../modules.md#mediasourcesettings) = [`mediaSourceSettings`](../modules.md#mediasourcesettings) |
| `U` | extends [`mediaSourceFetchOption`](../modules.md#mediasourcefetchoption) = [`mediaSourceFetchOption`](../modules.md#mediasourcefetchoption) |
| `V` | extends [`mediaSourceFetchResult`](../modules.md#mediasourcefetchresult) = [`mediaSourceFetchResult`](../modules.md#mediasourcefetchresult) |

## Hierarchy

- `EventEmitter`

  ↳ **`AbstractMediaSource`**

  ↳↳ [`AbstractWebSource`](AbstractWebSource.md)

## Table of contents

### Constructors

- [constructor](AbstractMediaSource.md#constructor)

### Properties

- [settings](AbstractMediaSource.md#settings)
- [settingsDefinition](AbstractMediaSource.md#settingsdefinition)
- [defaultMaxListeners](AbstractMediaSource.md#defaultmaxlisteners)

### Methods

- [addListener](AbstractMediaSource.md#addlistener)
- [emit](AbstractMediaSource.md#emit)
- [eventNames](AbstractMediaSource.md#eventnames)
- [fetch](AbstractMediaSource.md#fetch)
- [getFetchOptionsDefinition](AbstractMediaSource.md#getfetchoptionsdefinition)
- [getMaxListeners](AbstractMediaSource.md#getmaxlisteners)
- [getSettings](AbstractMediaSource.md#getsettings)
- [getSettingsDefinition](AbstractMediaSource.md#getsettingsdefinition)
- [listenerCount](AbstractMediaSource.md#listenercount)
- [listeners](AbstractMediaSource.md#listeners)
- [off](AbstractMediaSource.md#off)
- [on](AbstractMediaSource.md#on)
- [once](AbstractMediaSource.md#once)
- [prependListener](AbstractMediaSource.md#prependlistener)
- [prependOnceListener](AbstractMediaSource.md#prependoncelistener)
- [rawListeners](AbstractMediaSource.md#rawlisteners)
- [removeAllListeners](AbstractMediaSource.md#removealllisteners)
- [removeListener](AbstractMediaSource.md#removelistener)
- [setMaxListeners](AbstractMediaSource.md#setmaxlisteners)
- [setSettings](AbstractMediaSource.md#setsettings)
- [listenerCount](AbstractMediaSource.md#listenercount-1)

## Constructors

### constructor

• **new AbstractMediaSource**<`T`, `U`, `V`\>(`settingsDefinition?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |
| `U` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |
| `V` | extends [`mediaSourceFetchResult`](../modules.md#mediasourcefetchresult) = [`mediaSourceFetchResult`](../modules.md#mediasourcefetchresult) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `settingsDefinition?` | [`optionDefinition`](../modules.md#optiondefinition)<`T`\> |

#### Overrides

EventEmitter.constructor

#### Defined in

[src/source/AbstractMediaSource.ts:19](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSource.ts#L19)

## Properties

### settings

• `Private` **settings**: `T`

#### Defined in

[src/source/AbstractMediaSource.ts:17](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSource.ts#L17)

___

### settingsDefinition

• `Private` **settingsDefinition**: [`optionDefinition`](../modules.md#optiondefinition)<`T`\>

#### Defined in

[src/source/AbstractMediaSource.ts:16](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSource.ts#L16)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/events/index.d.ts:11

## Methods

### addListener

▸ **addListener**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/events/index.d.ts:17

___

### emit

▸ **emit**(`type`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/events/index.d.ts:16

___

### eventNames

▸ **eventNames**(): (`string` \| `number`)[]

#### Returns

(`string` \| `number`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/events/index.d.ts:13

___

### fetch

▸ `Abstract` **fetch**(`options`): `Promise`<`V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `U` |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/source/AbstractMediaSource.ts:40](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSource.ts#L40)

___

### getFetchOptionsDefinition

▸ `Abstract` **getFetchOptionsDefinition**(): `Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`U`\>\>

#### Returns

`Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`U`\>\>

#### Defined in

[src/source/AbstractMediaSource.ts:42](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSource.ts#L42)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/events/index.d.ts:15

___

### getSettings

▸ **getSettings**(): `T`

#### Returns

`T`

#### Defined in

[src/source/AbstractMediaSource.ts:30](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSource.ts#L30)

___

### getSettingsDefinition

▸ **getSettingsDefinition**(): [`optionDefinition`](../modules.md#optiondefinition)<`T`\>

#### Returns

[`optionDefinition`](../modules.md#optiondefinition)<`T`\>

#### Defined in

[src/source/AbstractMediaSource.ts:26](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSource.ts#L26)

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/events/index.d.ts:26

___

### listeners

▸ **listeners**(`type`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |

#### Returns

`Listener`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/events/index.d.ts:25

___

### off

▸ **off**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/events/index.d.ts:18

___

### once

▸ **once**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/events/index.d.ts:21

___

### rawListeners

▸ **rawListeners**(`type`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |

#### Returns

`Listener`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/events/index.d.ts:27

___

### removeAllListeners

▸ **removeAllListeners**(`type?`): [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/events/index.d.ts:22

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/events/index.d.ts:14

___

### setSettings

▸ **setSettings**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `T` |

#### Returns

`void`

#### Defined in

[src/source/AbstractMediaSource.ts:34](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSource.ts#L34)

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `type` | `string` \| `number` |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/events/index.d.ts:10
