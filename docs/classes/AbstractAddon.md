[@medialib/medialib](../README.md) / [Exports](../modules.md) / AbstractAddon

# Class: AbstractAddon

## Hierarchy

- `EventEmitter`

  ↳ **`AbstractAddon`**

  ↳↳ [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

## Table of contents

### Constructors

- [constructor](AbstractAddon.md#constructor)

### Properties

- [resources](AbstractAddon.md#resources)
- [apiVersion](AbstractAddon.md#apiversion)
- [authors](AbstractAddon.md#authors)
- [defaultMaxListeners](AbstractAddon.md#defaultmaxlisteners)
- [dependencies](AbstractAddon.md#dependencies)
- [description](AbstractAddon.md#description)
- [id](AbstractAddon.md#id)
- [tags](AbstractAddon.md#tags)
- [title](AbstractAddon.md#title)
- [type](AbstractAddon.md#type)
- [version](AbstractAddon.md#version)

### Methods

- [addListener](AbstractAddon.md#addlistener)
- [emit](AbstractAddon.md#emit)
- [error](AbstractAddon.md#error)
- [eventNames](AbstractAddon.md#eventnames)
- [getApiVersion](AbstractAddon.md#getapiversion)
- [getAuthors](AbstractAddon.md#getauthors)
- [getDependencies](AbstractAddon.md#getdependencies)
- [getDescription](AbstractAddon.md#getdescription)
- [getId](AbstractAddon.md#getid)
- [getMaxListeners](AbstractAddon.md#getmaxlisteners)
- [getResources](AbstractAddon.md#getresources)
- [getTags](AbstractAddon.md#gettags)
- [getTitle](AbstractAddon.md#gettitle)
- [getType](AbstractAddon.md#gettype)
- [getVersion](AbstractAddon.md#getversion)
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
- [warn](AbstractAddon.md#warn)
- [getApiVersion](AbstractAddon.md#getapiversion-1)
- [getAuthors](AbstractAddon.md#getauthors-1)
- [getDependencies](AbstractAddon.md#getdependencies-1)
- [getDescription](AbstractAddon.md#getdescription-1)
- [getId](AbstractAddon.md#getid-1)
- [getTags](AbstractAddon.md#gettags-1)
- [getTitle](AbstractAddon.md#gettitle-1)
- [getType](AbstractAddon.md#gettype-1)
- [getVersion](AbstractAddon.md#getversion-1)
- [listenerCount](AbstractAddon.md#listenercount-1)

## Constructors

### constructor

• **new AbstractAddon**(`resources?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resources?` | [`addonResourcesType`](../interfaces/addonResourcesType.md) |

#### Overrides

EventEmitter.constructor

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:15

## Properties

### resources

• `Private` **resources**: `any`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:14

___

### apiVersion

▪ `Static` `Protected` **apiVersion**: `string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:9

___

### authors

▪ `Static` `Protected` **authors**: `string`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:10

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/events/index.d.ts:11

___

### dependencies

▪ `Static` `Protected` **dependencies**: `string`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:13

___

### description

▪ `Static` `Protected` **description**: `string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:11

___

### id

▪ `Static` `Protected` **id**: `string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:5

___

### tags

▪ `Static` `Protected` **tags**: `string`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:12

___

### title

▪ `Static` `Protected` **title**: `string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:6

___

### type

▪ `Static` `Protected` **type**: `string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:7

___

### version

▪ `Static` `Protected` **version**: `string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:8

## Methods

### addListener

▸ **addListener**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

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

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:42

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

### getApiVersion

▸ **getApiVersion**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:29

___

### getAuthors

▸ **getAuthors**(): `string`[]

#### Returns

`string`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:30

___

### getDependencies

▸ **getDependencies**(): `string`[]

#### Returns

`string`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:33

___

### getDescription

▸ **getDescription**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:31

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:25

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

▸ **getResources**(): [`addonResourcesType`](../interfaces/addonResourcesType.md)

#### Returns

[`addonResourcesType`](../interfaces/addonResourcesType.md)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:34

___

### getTags

▸ **getTags**(): `string`[]

#### Returns

`string`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:32

___

### getTitle

▸ **getTitle**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:26

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:27

___

### getVersion

▸ **getVersion**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:28

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

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:40

___

### off

▸ **off**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

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

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:35

___

### onLoad

▸ `Abstract` **onLoad**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:37

___

### onUninstall

▸ `Abstract` **onUninstall**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:39

___

### onUnload

▸ `Abstract` **onUnload**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:38

___

### onUpdate

▸ `Abstract` **onUpdate**(`previous`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `previous` | [`AbstractAddon`](AbstractAddon.md) |

#### Returns

`void`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:36

___

### once

▸ **once**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

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

▸ **removeAllListeners**(`type?`): [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/events/index.d.ts:22

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractAddon`](AbstractAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/events/index.d.ts:14

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

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:41

___

### getApiVersion

▸ `Static` **getApiVersion**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:20

___

### getAuthors

▸ `Static` **getAuthors**(): `string`[]

#### Returns

`string`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:21

___

### getDependencies

▸ `Static` **getDependencies**(): `string`[]

#### Returns

`string`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:24

___

### getDescription

▸ `Static` **getDescription**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:22

___

### getId

▸ `Static` **getId**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:16

___

### getTags

▸ `Static` **getTags**(): `string`[]

#### Returns

`string`[]

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:23

___

### getTitle

▸ `Static` **getTitle**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:17

___

### getType

▸ `Static` **getType**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:18

___

### getVersion

▸ `Static` **getVersion**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:19

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
