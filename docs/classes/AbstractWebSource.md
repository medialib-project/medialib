[@medialib/medialib](../README.md) / [Exports](../modules.md) / AbstractWebSource

# Class: AbstractWebSource

## Hierarchy

- [`AbstractMediaSource`](AbstractMediaSource.md)

  ↳ **`AbstractWebSource`**

## Table of contents

### Constructors

- [constructor](AbstractWebSource.md#constructor)

### Properties

- [webInstance](AbstractWebSource.md#webinstance)
- [defaultMaxListeners](AbstractWebSource.md#defaultmaxlisteners)
- [defaultSettings](AbstractWebSource.md#defaultsettings)
- [settingsDefinition](AbstractWebSource.md#settingsdefinition)

### Methods

- [addListener](AbstractWebSource.md#addlistener)
- [emit](AbstractWebSource.md#emit)
- [eventNames](AbstractWebSource.md#eventnames)
- [fetch](AbstractWebSource.md#fetch)
- [getDefaultSettings](AbstractWebSource.md#getdefaultsettings)
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
- [getDefaultSettings](AbstractWebSource.md#getdefaultsettings-1)
- [getSettingsDefinition](AbstractWebSource.md#getsettingsdefinition-1)
- [listenerCount](AbstractWebSource.md#listenercount-1)

## Constructors

### constructor

• **new AbstractWebSource**(`settings?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`sourceSettingsType`](../interfaces/sourceSettingsType.md) |

#### Overrides

[AbstractMediaSource](AbstractMediaSource.md).[constructor](AbstractMediaSource.md#constructor)

#### Defined in

[src/source/web/AbstractWebSource.ts:20](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/web/AbstractWebSource.ts#L20)

## Properties

### webInstance

• `Protected` **webInstance**: `any`

#### Defined in

[src/source/web/AbstractWebSource.ts:18](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/web/AbstractWebSource.ts#L18)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[defaultMaxListeners](AbstractMediaSource.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:11

___

### defaultSettings

▪ `Static` `Protected` **defaultSettings**: [`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Overrides

[AbstractMediaSource](AbstractMediaSource.md).[defaultSettings](AbstractMediaSource.md#defaultsettings)

#### Defined in

[src/source/web/AbstractWebSource.ts:13](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/web/AbstractWebSource.ts#L13)

___

### settingsDefinition

▪ `Static` `Protected` **settingsDefinition**: [`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md)

#### Overrides

[AbstractMediaSource](AbstractMediaSource.md).[settingsDefinition](AbstractMediaSource.md#settingsdefinition)

#### Defined in

[src/source/web/AbstractWebSource.ts:9](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/web/AbstractWebSource.ts#L9)

## Methods

### addListener

▸ **addListener**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)

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

▸ **fetch**(`options`): `Promise`<[`fetchResultType`](../interfaces/fetchResultType.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`sourceOptionsType`](../interfaces/sourceOptionsType.md) |

#### Returns

`Promise`<[`fetchResultType`](../interfaces/fetchResultType.md)\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[fetch](AbstractMediaSource.md#fetch)

#### Defined in

[src/source/AbstractMediaSource.ts:54](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L54)

___

### getDefaultSettings

▸ **getDefaultSettings**(): [`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Returns

[`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getDefaultSettings](AbstractMediaSource.md#getdefaultsettings)

#### Defined in

[src/source/AbstractMediaSource.ts:37](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L37)

___

### getFetchOptionsDefinition

▸ **getFetchOptionsDefinition**(): `Promise`<[`sourceOptionsDefinitionType`](../interfaces/sourceOptionsDefinitionType.md)\>

#### Returns

`Promise`<[`sourceOptionsDefinitionType`](../interfaces/sourceOptionsDefinitionType.md)\>

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getFetchOptionsDefinition](AbstractMediaSource.md#getfetchoptionsdefinition)

#### Defined in

[src/source/AbstractMediaSource.ts:58](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L58)

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

▸ **getSettings**(): [`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Returns

[`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getSettings](AbstractMediaSource.md#getsettings)

#### Defined in

[src/source/AbstractMediaSource.ts:42](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L42)

___

### getSettingsDefinition

▸ **getSettingsDefinition**(): [`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md)

#### Returns

[`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md)

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getSettingsDefinition](AbstractMediaSource.md#getsettingsdefinition)

#### Defined in

[src/source/AbstractMediaSource.ts:32](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L32)

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

▸ **off**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[off](AbstractMediaSource.md#off)

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)

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
| `_` | [`AbstractMediaSource`](AbstractMediaSource.md) |
| `changes` | [`diffType`](../modules.md#difftype) |

#### Returns

`void`

#### Defined in

[src/source/web/AbstractWebSource.ts:26](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/web/AbstractWebSource.ts#L26)

___

### once

▸ **once**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[once](AbstractMediaSource.md#once)

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[prependListener](AbstractMediaSource.md#prependlistener)

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)

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

▸ **removeAllListeners**(`type?`): [`AbstractWebSource`](AbstractWebSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[removeAllListeners](AbstractMediaSource.md#removealllisteners)

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AbstractWebSource`](AbstractWebSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)

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

[src/source/web/AbstractWebSource.ts:35](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/web/AbstractWebSource.ts#L35)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractWebSource`](AbstractWebSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractWebSource`](AbstractWebSource.md)

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
| `settings` | [`sourceSettingsType`](../interfaces/sourceSettingsType.md) |

#### Returns

`void`

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[setSettings](AbstractMediaSource.md#setsettings)

#### Defined in

[src/source/AbstractMediaSource.ts:46](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L46)

___

### getDefaultSettings

▸ `Static` **getDefaultSettings**(): [`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Returns

[`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getDefaultSettings](AbstractMediaSource.md#getdefaultsettings-1)

#### Defined in

[src/source/AbstractMediaSource.ts:28](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L28)

___

### getSettingsDefinition

▸ `Static` **getSettingsDefinition**(): [`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md)

#### Returns

[`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md)

#### Inherited from

[AbstractMediaSource](AbstractMediaSource.md).[getSettingsDefinition](AbstractMediaSource.md#getsettingsdefinition-1)

#### Defined in

[src/source/AbstractMediaSource.ts:24](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L24)

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
