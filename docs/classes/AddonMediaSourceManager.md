[@medialib/medialib](../README.md) / [Exports](../modules.md) / AddonMediaSourceManager

# Class: AddonMediaSourceManager

## Hierarchy

- [`AbstractAddonManager`](AbstractAddonManager.md)

  ↳ **`AddonMediaSourceManager`**

## Table of contents

### Constructors

- [constructor](AddonMediaSourceManager.md#constructor)

### Properties

- [defaultMaxListeners](AddonMediaSourceManager.md#defaultmaxlisteners)
- [type](AddonMediaSourceManager.md#type)

### Methods

- [add](AddonMediaSourceManager.md#add)
- [addListener](AddonMediaSourceManager.md#addlistener)
- [emit](AddonMediaSourceManager.md#emit)
- [eventNames](AddonMediaSourceManager.md#eventnames)
- [getAll](AddonMediaSourceManager.md#getall)
- [getById](AddonMediaSourceManager.md#getbyid)
- [getIndexById](AddonMediaSourceManager.md#getindexbyid)
- [getMaxListeners](AddonMediaSourceManager.md#getmaxlisteners)
- [getType](AddonMediaSourceManager.md#gettype)
- [haveById](AddonMediaSourceManager.md#havebyid)
- [haveCorrectType](AddonMediaSourceManager.md#havecorrecttype)
- [listenerCount](AddonMediaSourceManager.md#listenercount)
- [listeners](AddonMediaSourceManager.md#listeners)
- [off](AddonMediaSourceManager.md#off)
- [on](AddonMediaSourceManager.md#on)
- [once](AddonMediaSourceManager.md#once)
- [prependListener](AddonMediaSourceManager.md#prependlistener)
- [prependOnceListener](AddonMediaSourceManager.md#prependoncelistener)
- [rawListeners](AddonMediaSourceManager.md#rawlisteners)
- [remove](AddonMediaSourceManager.md#remove)
- [removeAllListeners](AddonMediaSourceManager.md#removealllisteners)
- [removeListener](AddonMediaSourceManager.md#removelistener)
- [set](AddonMediaSourceManager.md#set)
- [setMaxListeners](AddonMediaSourceManager.md#setmaxlisteners)
- [getType](AddonMediaSourceManager.md#gettype-1)
- [listenerCount](AddonMediaSourceManager.md#listenercount-1)

## Constructors

### constructor

• **new AddonMediaSourceManager**(`...sourcesAddons`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sourcesAddons` | [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)[] |

#### Overrides

[AbstractAddonManager](AbstractAddonManager.md).[constructor](AbstractAddonManager.md#constructor)

#### Defined in

[src/source/AddonMediaSourceManager.ts:7](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AddonMediaSourceManager.ts#L7)

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[defaultMaxListeners](AbstractAddonManager.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:11

___

### type

▪ `Static` **type**: `string` = `'media-source'`

#### Overrides

[AbstractAddonManager](AbstractAddonManager.md).[type](AbstractAddonManager.md#type)

#### Defined in

[src/source/AddonMediaSourceManager.ts:5](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AddonMediaSourceManager.ts#L5)

## Methods

### add

▸ **add**(`addon`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addon` | [`AbstractAddon`](AbstractAddon.md) |

#### Returns

`boolean`

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[add](AbstractAddonManager.md#add)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:15

___

### addListener

▸ **addListener**(`type`, `listener`): [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[addListener](AbstractAddonManager.md#addlistener)

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

[AbstractAddonManager](AbstractAddonManager.md).[emit](AbstractAddonManager.md#emit)

#### Defined in

node_modules/@types/events/index.d.ts:16

___

### eventNames

▸ **eventNames**(): (`string` \| `number`)[]

#### Returns

(`string` \| `number`)[]

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[eventNames](AbstractAddonManager.md#eventnames)

#### Defined in

node_modules/@types/events/index.d.ts:13

___

### getAll

▸ **getAll**(): [`AbstractAddon`](AbstractAddon.md)[]

#### Returns

[`AbstractAddon`](AbstractAddon.md)[]

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[getAll](AbstractAddonManager.md#getall)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:10

___

### getById

▸ **getById**(`id`): ``null`` \| [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`AbstractAddon`](AbstractAddon.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[getById](AbstractAddonManager.md#getbyid)

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

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[getIndexById](AbstractAddonManager.md#getindexbyid)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:12

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[getMaxListeners](AbstractAddonManager.md#getmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:15

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[getType](AbstractAddonManager.md#gettype)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:9

___

### haveById

▸ **haveById**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[haveById](AbstractAddonManager.md#havebyid)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:14

___

### haveCorrectType

▸ **haveCorrectType**(`addon`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addon` | [`AbstractAddon`](AbstractAddon.md) |

#### Returns

`boolean`

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[haveCorrectType](AbstractAddonManager.md#havecorrecttype)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:11

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

[AbstractAddonManager](AbstractAddonManager.md).[listenerCount](AbstractAddonManager.md#listenercount)

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

[AbstractAddonManager](AbstractAddonManager.md).[listeners](AbstractAddonManager.md#listeners)

#### Defined in

node_modules/@types/events/index.d.ts:25

___

### off

▸ **off**(`type`, `listener`): [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[off](AbstractAddonManager.md#off)

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[on](AbstractAddonManager.md#on)

#### Defined in

node_modules/@types/events/index.d.ts:18

___

### once

▸ **once**(`type`, `listener`): [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[once](AbstractAddonManager.md#once)

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[prependListener](AbstractAddonManager.md#prependlistener)

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[prependOnceListener](AbstractAddonManager.md#prependoncelistener)

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

[AbstractAddonManager](AbstractAddonManager.md).[rawListeners](AbstractAddonManager.md#rawlisteners)

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

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[remove](AbstractAddonManager.md#remove)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:16

___

### removeAllListeners

▸ **removeAllListeners**(`type?`): [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[removeAllListeners](AbstractAddonManager.md#removealllisteners)

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[removeListener](AbstractAddonManager.md#removelistener)

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
| `addons` | [`AbstractAddon`](AbstractAddon.md)[] |

#### Returns

`void`

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[set](AbstractAddonManager.md#set)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:21

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AddonMediaSourceManager`](AddonMediaSourceManager.md)

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[setMaxListeners](AbstractAddonManager.md#setmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:14

___

### getType

▸ `Static` **getType**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddonManager](AbstractAddonManager.md).[getType](AbstractAddonManager.md#gettype-1)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddonManager.d.ts:8

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

[AbstractAddonManager](AbstractAddonManager.md).[listenerCount](AbstractAddonManager.md#listenercount-1)

#### Defined in

node_modules/@types/events/index.d.ts:10
