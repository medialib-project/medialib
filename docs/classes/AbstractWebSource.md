[@medialib/medialib](../README.md) / [Exports](../modules.md) / AbstractWebSource

# Class: AbstractWebSource<T, U, V\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`webMediaSourceSettings`](../modules.md#webmediasourcesettings) = [`webMediaSourceSettings`](../modules.md#webmediasourcesettings) |
| `U` | extends [`webMediaSourceFetchOption`](../modules.md#webmediasourcefetchoption) = [`webMediaSourceFetchOption`](../modules.md#webmediasourcefetchoption) |
| `V` | extends [`webMediaSourceFetchResult`](../modules.md#webmediasourcefetchresult) = [`webMediaSourceFetchResult`](../modules.md#webmediasourcefetchresult) |

## Hierarchy

- [`AbstractMediaSource`](AbstractMediaSource.md)<`T`, `U`, `V`\>

  ↳ **`AbstractWebSource`**

## Table of contents

### Constructors

- [constructor](AbstractWebSource.md#constructor)

### Properties

- [webInstance](AbstractWebSource.md#webinstance)
- [defaultMaxListeners](AbstractWebSource.md#defaultmaxlisteners)

### Methods

- [addListener](AbstractWebSource.md#addlistener)
- [emit](AbstractWebSource.md#emit)
- [eventNames](AbstractWebSource.md#eventnames)
- [fetch](AbstractWebSource.md#fetch)
- [getFetchOptionsDefinition](AbstractWebSource.md#getfetchoptionsdefinition)
- [getMaxListeners](AbstractWebSource.md#getmaxlisteners)
- [getSettings](AbstractWebSource.md#getsettings)
- [getSettingsDefinition](AbstractWebSource.md#getsettingsdefinition)
- [listenerCount](AbstractWebSource.md#listenercount)
- [listeners](AbstractWebSource.md#listeners)
- [off](AbstractWebSource.md#off)
- [on](AbstractWebSource.md#on)
- [onSettingsChange](AbstractWebSource.md#onsettingschange)
- [once](AbstractWebSource.md#once)
- [prependListener](AbstractWebSource.md#prependlistener)
- [prependOnceListener](AbstractWebSource.md#prependoncelistener)
- [rawListeners](AbstractWebSource.md#rawlisteners)
- [removeAllListeners](AbstractWebSource.md#removealllisteners)
- [removeListener](AbstractWebSource.md#removelistener)
- [resetWebInstance](AbstractWebSource.md#resetwebinstance)
- [setMaxListeners](AbstractWebSource.md#setmaxlisteners)
- [setSettings](AbstractWebSource.md#setsettings)
- [listenerCount](AbstractWebSource.md#listenercount-1)

## Constructors

### constructor

• **new AbstractWebSource**<`T`, `U`, `V`\>(`settingsDefinition?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`webMediaSourceSettings`](../modules.md#webmediasourcesettings) = [`webMediaSourceSettings`](../modules.md#webmediasourcesettings) |
| `U` | extends [`webMediaSourceFetchOption`](../modules.md#webmediasourcefetchoption) = [`webMediaSourceFetchOption`](../modules.md#webmediasourcefetchoption) |
| `V` | extends [`webMediaSourceFetchResult`](../modules.md#webmediasourcefetchresult) = [`webMediaSourceFetchResult`](../modules.md#webmediasourcefetchresult) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `settingsDefinition?` | [`optionDefinition`](../modules.md#optiondefinition)<`T`\> |

#### Overrides

[AbstractMediaSource](AbstractMediaSource.md).[constructor](AbstractMediaSource.md#constructor)

#### Defined in

src/source/web/AbstractWebMediaSource.ts:19

## Properties

### webInstance

• `Protected` **webInstance**: `any`

#### Defined in

src/source/web/AbstractWebMediaSource.ts:17

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[defaultMaxListeners](AbstractMediaSource.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:11

## Methods

### addListener

▸ **addListener**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[addListener](AbstractMediaSource.md#addlistener)

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

[AbstractMediaSource](AbstractMediaSource.md).[emit](AbstractMediaSource.md#emit)

#### Defined in

node_modules/@types/events/index.d.ts:16

___

### eventNames

▸ **eventNames**(): (`string` \| `number`)[]

#### Returns

(`string` \| `number`)[]

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[eventNames](AbstractMediaSource.md#eventnames)

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

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[fetch](AbstractMediaSource.md#fetch)

#### Defined in

[src/source/AbstractMediaSource.ts:41](https://github.com/medialib-project/medialib/blob/3acd8bd/src/source/AbstractMediaSource.ts#L41)

___

### getFetchOptionsDefinition

▸ `Abstract` **getFetchOptionsDefinition**(): `Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`U`\>\>

#### Returns

`Promise`<[`optionDefinition`](../modules.md#optiondefinition)<`U`\>\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getFetchOptionsDefinition](AbstractMediaSource.md#getfetchoptionsdefinition)

#### Defined in

[src/source/AbstractMediaSource.ts:43](https://github.com/medialib-project/medialib/blob/3acd8bd/src/source/AbstractMediaSource.ts#L43)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getMaxListeners](AbstractMediaSource.md#getmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:15

___

### getSettings

▸ **getSettings**(): `T`

#### Returns

`T`

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getSettings](AbstractMediaSource.md#getsettings)

#### Defined in

[src/source/AbstractMediaSource.ts:31](https://github.com/medialib-project/medialib/blob/3acd8bd/src/source/AbstractMediaSource.ts#L31)

___

### getSettingsDefinition

▸ **getSettingsDefinition**(): [`optionDefinition`](../modules.md#optiondefinition)<`T`\>

#### Returns

[`optionDefinition`](../modules.md#optiondefinition)<`T`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getSettingsDefinition](AbstractMediaSource.md#getsettingsdefinition)

#### Defined in

[src/source/AbstractMediaSource.ts:27](https://github.com/medialib-project/medialib/blob/3acd8bd/src/source/AbstractMediaSource.ts#L27)

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

[AbstractMediaSource](AbstractMediaSource.md).[listenerCount](AbstractMediaSource.md#listenercount)

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

[AbstractMediaSource](AbstractMediaSource.md).[listeners](AbstractMediaSource.md#listeners)

#### Defined in

node_modules/@types/events/index.d.ts:25

___

### off

▸ **off**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[off](AbstractMediaSource.md#off)

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[on](AbstractMediaSource.md#on)

#### Defined in

node_modules/@types/events/index.d.ts:18

___

### onSettingsChange

▸ **onSettingsChange**(`_`, `changes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | [`AbstractWebSource`](AbstractWebSource.md)<[`webMediaSourceSettings`](../modules.md#webmediasourcesettings), [`webMediaSourceFetchOption`](../modules.md#webmediasourcefetchoption), [`webMediaSourceFetchResult`](../modules.md#webmediasourcefetchresult)\> |
| `changes` | [`diffType`](../modules.md#difftype) |

#### Returns

`void`

#### Defined in

src/source/web/AbstractWebMediaSource.ts:25

___

### once

▸ **once**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[once](AbstractMediaSource.md#once)

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[prependListener](AbstractMediaSource.md#prependlistener)

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[prependOnceListener](AbstractMediaSource.md#prependoncelistener)

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

[AbstractMediaSource](AbstractMediaSource.md).[rawListeners](AbstractMediaSource.md#rawlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:27

___

### removeAllListeners

▸ **removeAllListeners**(`type?`): [`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[removeAllListeners](AbstractMediaSource.md#removealllisteners)

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[removeListener](AbstractMediaSource.md#removelistener)

#### Defined in

node_modules/@types/events/index.d.ts:22

___

### resetWebInstance

▸ `Abstract` **resetWebInstance**(): `void`

#### Returns

`void`

#### Defined in

src/source/web/AbstractWebMediaSource.ts:34

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)<`T`, `U`, `V`\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[setMaxListeners](AbstractMediaSource.md#setmaxlisteners)

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

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[setSettings](AbstractMediaSource.md#setsettings)

#### Defined in

[src/source/AbstractMediaSource.ts:35](https://github.com/medialib-project/medialib/blob/3acd8bd/src/source/AbstractMediaSource.ts#L35)

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

[AbstractMediaSource](AbstractMediaSource.md).[listenerCount](AbstractMediaSource.md#listenercount-1)

#### Defined in

node_modules/@types/events/index.d.ts:10
