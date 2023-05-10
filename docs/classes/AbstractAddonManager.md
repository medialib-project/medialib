[@medialib/medialib](../README.md) / [Exports](../modules.md) / AbstractAddonManager

# Class: AbstractAddonManager<T, V\>

Only accepts Addons that are of the same type

**`No Inherit Doc`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`basicAddonManagerDetails`](../modules.md#basicaddonmanagerdetails) = [`basicAddonManagerDetails`](../modules.md#basicaddonmanagerdetails) |
| `V` | extends [`AbstractAddon`](AbstractAddon.md) = [`AbstractAddon`](AbstractAddon.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`AbstractAddonManager`**

  ↳↳ [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

## Table of contents

### Constructors

- [constructor](AbstractAddonManager.md#constructor)

### Properties

- [addons](AbstractAddonManager.md#addons)
- [details](AbstractAddonManager.md#details)
- [defaultMaxListeners](AbstractAddonManager.md#defaultmaxlisteners)

### Methods

- [add](AbstractAddonManager.md#add)
- [addListener](AbstractAddonManager.md#addlistener)
- [emit](AbstractAddonManager.md#emit)
- [eventNames](AbstractAddonManager.md#eventnames)
- [getAll](AbstractAddonManager.md#getall)
- [getById](AbstractAddonManager.md#getbyid)
- [getDetails](AbstractAddonManager.md#getdetails)
- [getIndexById](AbstractAddonManager.md#getindexbyid)
- [getMaxListeners](AbstractAddonManager.md#getmaxlisteners)
- [haveById](AbstractAddonManager.md#havebyid)
- [haveCorrectType](AbstractAddonManager.md#havecorrecttype)
- [listenerCount](AbstractAddonManager.md#listenercount)
- [listeners](AbstractAddonManager.md#listeners)
- [off](AbstractAddonManager.md#off)
- [on](AbstractAddonManager.md#on)
- [once](AbstractAddonManager.md#once)
- [prependListener](AbstractAddonManager.md#prependlistener)
- [prependOnceListener](AbstractAddonManager.md#prependoncelistener)
- [rawListeners](AbstractAddonManager.md#rawlisteners)
- [remove](AbstractAddonManager.md#remove)
- [removeAllListeners](AbstractAddonManager.md#removealllisteners)
- [removeListener](AbstractAddonManager.md#removelistener)
- [set](AbstractAddonManager.md#set)
- [setMaxListeners](AbstractAddonManager.md#setmaxlisteners)
- [listenerCount](AbstractAddonManager.md#listenercount-1)

## Constructors

### constructor

• **new AbstractAddonManager**<`T`, `V`\>(`addons`, `details?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`basicAddonManagerDetails`](../modules.md#basicaddonmanagerdetails) = [`basicAddonManagerDetails`](../modules.md#basicaddonmanagerdetails) |
| `V` | extends [`AbstractAddon`](AbstractAddon.md)<[`basicAddonDetails`](../modules.md#basicaddondetails), `Record`<`string`, `unknown`\>, `Record`<`string`, `unknown`\>, `V`\> = [`AbstractAddon`](AbstractAddon.md)<[`basicAddonDetails`](../modules.md#basicaddondetails), `Record`<`string`, `unknown`\>, `Record`<`string`, `unknown`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `addons` | `V`[] |
| `details?` | `T` |

#### Overrides

EventEmitter.constructor

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:12

## Properties

### addons

• `Private` **addons**: `any`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:10

___

### details

• `Private` **details**: `any`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:11

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/events/index.d.ts:11

## Methods

### add

▸ **add**(`addon`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addon` | `V` |

#### Returns

`boolean`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:19

___

### addListener

▸ **addListener**(`type`, `listener`): [`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

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

### getAll

▸ **getAll**(): `V`[]

#### Returns

`V`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:14

___

### getById

▸ **getById**(`id`): ``null`` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| `V`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:17

___

### getDetails

▸ **getDetails**(): `T`

#### Returns

`T`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:13

___

### getIndexById

▸ **getIndexById**(`id`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`number`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:16

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

### haveById

▸ **haveById**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:18

___

### haveCorrectType

▸ **haveCorrectType**(`addon`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addon` | `V` |

#### Returns

`boolean`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:15

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

▸ **off**(`type`, `listener`): [`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/events/index.d.ts:18

___

### once

▸ **once**(`type`, `listener`): [`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

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

### remove

▸ **remove**(`addon`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addon` | `V` |

#### Returns

`boolean`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:20

___

### removeAllListeners

▸ **removeAllListeners**(`type?`): [`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/events/index.d.ts:22

___

### set

▸ **set**(`addons`): `void`

**`Deprecated`**

set the addon list without any check

#### Parameters

| Name | Type |
| :------ | :------ |
| `addons` | `V`[] |

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:25

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)<`T`, `V`\>

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/events/index.d.ts:14

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
