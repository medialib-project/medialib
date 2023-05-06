[@medialib/medialib](../README.md) / [Exports](../modules.md) / AbstractMediaSource

# Class: AbstractMediaSource

## Hierarchy

- `EventEmitter`

  ↳ **`AbstractMediaSource`**

  ↳↳ [`AbstractWebSource`](AbstractWebSource.md)

## Table of contents

### Constructors

- [constructor](AbstractMediaSource.md#constructor)

### Properties

- [settings](AbstractMediaSource.md#settings)
- [defaultMaxListeners](AbstractMediaSource.md#defaultmaxlisteners)
- [defaultSettings](AbstractMediaSource.md#defaultsettings)
- [settingsDefinition](AbstractMediaSource.md#settingsdefinition)

### Methods

- [addListener](AbstractMediaSource.md#addlistener)
- [emit](AbstractMediaSource.md#emit)
- [eventNames](AbstractMediaSource.md#eventnames)
- [fetch](AbstractMediaSource.md#fetch)
- [getDefaultSettings](AbstractMediaSource.md#getdefaultsettings)
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
- [getDefaultSettings](AbstractMediaSource.md#getdefaultsettings-1)
- [getSettingsDefinition](AbstractMediaSource.md#getsettingsdefinition-1)
- [listenerCount](AbstractMediaSource.md#listenercount-1)

## Constructors

### constructor

• **new AbstractMediaSource**(`settings?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`sourceSettingsType`](../interfaces/sourceSettingsType.md) |

#### Overrides

EventEmitter.constructor

#### Defined in

[src/source/AbstractMediaSource.ts:19](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L19)

## Properties

### settings

• `Private` **settings**: [`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Defined in

[src/source/AbstractMediaSource.ts:17](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L17)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/events/index.d.ts:11

___

### defaultSettings

▪ `Static` `Protected` **defaultSettings**: [`sourceSettingsType`](../interfaces/sourceSettingsType.md) = `{}`

#### Defined in

[src/source/AbstractMediaSource.ts:15](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L15)

___

### settingsDefinition

▪ `Static` `Protected` **settingsDefinition**: [`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md) = `{}`

#### Defined in

[src/source/AbstractMediaSource.ts:14](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L14)

## Methods

### addListener

▸ **addListener**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

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

▸ **fetch**(`options`): `Promise`<[`fetchResultType`](../interfaces/fetchResultType.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`sourceOptionsType`](../interfaces/sourceOptionsType.md) |

#### Returns

`Promise`<[`fetchResultType`](../interfaces/fetchResultType.md)\>

#### Defined in

[src/source/AbstractMediaSource.ts:54](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L54)

___

### getDefaultSettings

▸ **getDefaultSettings**(): [`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Returns

[`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Defined in

[src/source/AbstractMediaSource.ts:37](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L37)

___

### getFetchOptionsDefinition

▸ **getFetchOptionsDefinition**(): `Promise`<[`sourceOptionsDefinitionType`](../interfaces/sourceOptionsDefinitionType.md)\>

#### Returns

`Promise`<[`sourceOptionsDefinitionType`](../interfaces/sourceOptionsDefinitionType.md)\>

#### Defined in

[src/source/AbstractMediaSource.ts:58](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L58)

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

▸ **getSettings**(): [`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Returns

[`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Defined in

[src/source/AbstractMediaSource.ts:42](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L42)

___

### getSettingsDefinition

▸ **getSettingsDefinition**(): [`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md)

#### Returns

[`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md)

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

▸ **off**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/events/index.d.ts:18

___

### once

▸ **once**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

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

▸ **removeAllListeners**(`type?`): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/events/index.d.ts:22

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

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
| `settings` | [`sourceSettingsType`](../interfaces/sourceSettingsType.md) |

#### Returns

`void`

#### Defined in

[src/source/AbstractMediaSource.ts:46](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L46)

___

### getDefaultSettings

▸ `Static` **getDefaultSettings**(): [`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Returns

[`sourceSettingsType`](../interfaces/sourceSettingsType.md)

#### Defined in

[src/source/AbstractMediaSource.ts:28](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSource.ts#L28)

___

### getSettingsDefinition

▸ `Static` **getSettingsDefinition**(): [`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md)

#### Returns

[`sourceSettingsDefinitionType`](../interfaces/sourceSettingsDefinitionType.md)

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

EventEmitter.listenerCount

#### Defined in

node_modules/@types/events/index.d.ts:10
