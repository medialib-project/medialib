[@medialib/medialib](../README.md) / [Exports](../modules.md) / AbstractAddon

# Class: AbstractAddon<T, V, X\>

**`No Inherit Doc`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`basicAddonDetails`](../modules.md#basicaddondetails) = [`basicAddonDetails`](../modules.md#basicaddondetails) |
| `V` | extends [`basicAddonResources`](../modules.md#basicaddonresources) = [`basicAddonResources`](../modules.md#basicaddonresources) |
| `X` | extends [`basicAddonSettings`](../modules.md#basicaddonsettings) = [`basicAddonSettings`](../modules.md#basicaddonsettings) |

## Hierarchy

- `EventEmitter`

  ↳ **`AbstractAddon`**

  ↳↳ [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

## Table of contents

### Constructors

- [constructor](AbstractAddon.md#constructor)

### Properties

- [details](AbstractAddon.md#details)
- [resources](AbstractAddon.md#resources)
- [settings](AbstractAddon.md#settings)
- [settingsDefinition](AbstractAddon.md#settingsdefinition)
- [defaultMaxListeners](AbstractAddon.md#defaultmaxlisteners)

### Methods

- [addListener](AbstractAddon.md#addlistener)
- [emit](AbstractAddon.md#emit)
- [error](AbstractAddon.md#error)
- [eventNames](AbstractAddon.md#eventnames)
- [getDetails](AbstractAddon.md#getdetails)
- [getMaxListeners](AbstractAddon.md#getmaxlisteners)
- [getResources](AbstractAddon.md#getresources)
- [getSettings](AbstractAddon.md#getsettings)
- [getSettingsDefinition](AbstractAddon.md#getsettingsdefinition)
- [listenerCount](AbstractAddon.md#listenercount)
- [listeners](AbstractAddon.md#listeners)
- [log](AbstractAddon.md#log)
- [off](AbstractAddon.md#off)
- [on](AbstractAddon.md#on)
- [onInstall](AbstractAddon.md#oninstall)
- [onLoad](AbstractAddon.md#onload)
- [onUninstall](AbstractAddon.md#onuninstall)
- [onUnload](AbstractAddon.md#onunload)
- [onUpdate](AbstractAddon.md#onupdate)
- [once](AbstractAddon.md#once)
- [prependListener](AbstractAddon.md#prependlistener)
- [prependOnceListener](AbstractAddon.md#prependoncelistener)
- [rawListeners](AbstractAddon.md#rawlisteners)
- [removeAllListeners](AbstractAddon.md#removealllisteners)
- [removeListener](AbstractAddon.md#removelistener)
- [setMaxListeners](AbstractAddon.md#setmaxlisteners)
- [setSettings](AbstractAddon.md#setsettings)
- [warn](AbstractAddon.md#warn)
- [listenerCount](AbstractAddon.md#listenercount-1)

## Constructors

### constructor

• **new AbstractAddon**<`T`, `V`, `X`\>(`resources`, `details?`, `settingsDefinition?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`basicAddonDetails`](../modules.md#basicaddondetails) = [`basicAddonDetails`](../modules.md#basicaddondetails) |
| `V` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |
| `X` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resources` | `V` |
| `details?` | `T` |
| `settingsDefinition?` | [`optionDefinition`](../modules.md#optiondefinition)<`X`\> |

#### Overrides

EventEmitter.constructor

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:13

## Properties

### details

• `Private` **details**: `any`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:10

___

### resources

• `Private` **resources**: `any`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:9

___

### settings

• `Private` **settings**: `any`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:11

___

### settingsDefinition

• `Private` **settingsDefinition**: `any`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:12

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/events/index.d.ts:11

## Methods

### addListener

▸ **addListener**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

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

### error

▸ **error**(`...parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `any`[] |

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:26

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

### getDetails

▸ **getDetails**(): `T`

#### Returns

`T`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:14

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

### getResources

▸ **getResources**(): `V`

#### Returns

`V`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:15

___

### getSettings

▸ **getSettings**(): `X`

#### Returns

`X`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:17

___

### getSettingsDefinition

▸ **getSettingsDefinition**(): [`optionDefinition`](../modules.md#optiondefinition)<`X`\>

#### Returns

[`optionDefinition`](../modules.md#optiondefinition)<`X`\>

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:16

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

### log

▸ **log**(`...parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `any`[] |

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:24

___

### off

▸ **off**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/events/index.d.ts:18

___

### onInstall

▸ `Abstract` **onInstall**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:19

___

### onLoad

▸ `Abstract` **onLoad**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:21

___

### onUninstall

▸ `Abstract` **onUninstall**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:23

___

### onUnload

▸ `Abstract` **onUnload**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:22

___

### onUpdate

▸ `Abstract` **onUpdate**(`previous`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `previous` | [`AbstractAddon`](AbstractAddon.md)<[`basicAddonDetails`](../modules.md#basicaddondetails), `Record`<`string`, `unknown`\>, `Record`<`string`, `unknown`\>\> |

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:20

___

### once

▸ **once**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

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

▸ **removeAllListeners**(`type?`): [`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/events/index.d.ts:22

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)<`T`, `V`, `X`\>

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
| `settings` | `X` |

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:18

___

### warn

▸ **warn**(`...parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `any`[] |

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:25

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
