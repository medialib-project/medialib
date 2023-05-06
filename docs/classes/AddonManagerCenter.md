[@medialib/medialib](../README.md) / [Exports](../modules.md) / AddonManagerCenter

# Class: AddonManagerCenter

## Hierarchy

- `EventEmitter`

  ↳ **`AddonManagerCenter`**

## Table of contents

### Constructors

- [constructor](AddonManagerCenter.md#constructor)

### Properties

- [managers](AddonManagerCenter.md#managers)
- [defaultMaxListeners](AddonManagerCenter.md#defaultmaxlisteners)

### Methods

- [add](AddonManagerCenter.md#add)
- [addListener](AddonManagerCenter.md#addlistener)
- [addManager](AddonManagerCenter.md#addmanager)
- [emit](AddonManagerCenter.md#emit)
- [eventNames](AddonManagerCenter.md#eventnames)
- [getAllManagers](AddonManagerCenter.md#getallmanagers)
- [getById](AddonManagerCenter.md#getbyid)
- [getManagerByType](AddonManagerCenter.md#getmanagerbytype)
- [getManagerIndex](AddonManagerCenter.md#getmanagerindex)
- [getMaxListeners](AddonManagerCenter.md#getmaxlisteners)
- [haveById](AddonManagerCenter.md#havebyid)
- [haveCorrectType](AddonManagerCenter.md#havecorrecttype)
- [haveManager](AddonManagerCenter.md#havemanager)
- [haveManagerByType](AddonManagerCenter.md#havemanagerbytype)
- [listenerCount](AddonManagerCenter.md#listenercount)
- [listeners](AddonManagerCenter.md#listeners)
- [off](AddonManagerCenter.md#off)
- [on](AddonManagerCenter.md#on)
- [once](AddonManagerCenter.md#once)
- [prependListener](AddonManagerCenter.md#prependlistener)
- [prependOnceListener](AddonManagerCenter.md#prependoncelistener)
- [rawListeners](AddonManagerCenter.md#rawlisteners)
- [remove](AddonManagerCenter.md#remove)
- [removeAllListeners](AddonManagerCenter.md#removealllisteners)
- [removeListener](AddonManagerCenter.md#removelistener)
- [removeManager](AddonManagerCenter.md#removemanager)
- [setMaxListeners](AddonManagerCenter.md#setmaxlisteners)
- [listenerCount](AddonManagerCenter.md#listenercount-1)

## Constructors

### constructor

• **new AddonManagerCenter**(`...managers`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...managers` | [`AbstractAddonManager`](AbstractAddonManager.md)[] |

#### Overrides

EventEmitter.constructor

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:7

## Properties

### managers

• `Private` **managers**: `any`

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:6

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
| `addon` | [`AbstractAddon`](AbstractAddon.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:18

___

### addListener

▸ **addListener**(`type`, `listener`): [`AddonManagerCenter`](AddonManagerCenter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonManagerCenter`](AddonManagerCenter.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/events/index.d.ts:17

___

### addManager

▸ **addManager**(`manager`): `number` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`AbstractAddonManager`](AbstractAddonManager.md) |

#### Returns

`number` \| ``false``

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:13

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

### getAllManagers

▸ **getAllManagers**(): [`AbstractAddonManager`](AbstractAddonManager.md)[]

#### Returns

[`AbstractAddonManager`](AbstractAddonManager.md)[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:8

___

### getById

▸ **getById**(`id`): `undefined` \| [`AbstractAddonManager`](AbstractAddonManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`AbstractAddonManager`](AbstractAddonManager.md)

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:17

___

### getManagerByType

▸ **getManagerByType**(`type`): `undefined` \| [`AbstractAddonManager`](AbstractAddonManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`undefined` \| [`AbstractAddonManager`](AbstractAddonManager.md)

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:12

___

### getManagerIndex

▸ **getManagerIndex**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`AbstractAddonManager`](AbstractAddonManager.md) |

#### Returns

`number`

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:9

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

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:16

___

### haveCorrectType

▸ **haveCorrectType**(`addon`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addon` | [`AbstractAddon`](AbstractAddon.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:15

___

### haveManager

▸ **haveManager**(`manager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`AbstractAddonManager`](AbstractAddonManager.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:10

___

### haveManagerByType

▸ **haveManagerByType**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:11

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

▸ **off**(`type`, `listener`): [`AddonManagerCenter`](AddonManagerCenter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonManagerCenter`](AddonManagerCenter.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AddonManagerCenter`](AddonManagerCenter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonManagerCenter`](AddonManagerCenter.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/events/index.d.ts:18

___

### once

▸ **once**(`type`, `listener`): [`AddonManagerCenter`](AddonManagerCenter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonManagerCenter`](AddonManagerCenter.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AddonManagerCenter`](AddonManagerCenter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonManagerCenter`](AddonManagerCenter.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AddonManagerCenter`](AddonManagerCenter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonManagerCenter`](AddonManagerCenter.md)

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
| `addon` | [`AbstractAddon`](AbstractAddon.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:19

___

### removeAllListeners

▸ **removeAllListeners**(`type?`): [`AddonManagerCenter`](AddonManagerCenter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AddonManagerCenter`](AddonManagerCenter.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AddonManagerCenter`](AddonManagerCenter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonManagerCenter`](AddonManagerCenter.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/events/index.d.ts:22

___

### removeManager

▸ **removeManager**(`manager`): ``false`` \| [`AbstractAddonManager`](AbstractAddonManager.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`AbstractAddonManager`](AbstractAddonManager.md) |

#### Returns

``false`` \| [`AbstractAddonManager`](AbstractAddonManager.md)[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AddonManagerCenter.d.ts:14

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AddonManagerCenter`](AddonManagerCenter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AddonManagerCenter`](AddonManagerCenter.md)

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