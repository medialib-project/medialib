[@medialib/medialib](../README.md) / [Exports](../modules.md) / AbstractMediaSourceAddon

# Class: AbstractMediaSourceAddon

## Hierarchy

- [`AbstractAddon`](AbstractAddon.md)

  ↳ **`AbstractMediaSourceAddon`**

## Table of contents

### Constructors

- [constructor](AbstractMediaSourceAddon.md#constructor)

### Properties

- [source](AbstractMediaSourceAddon.md#source)
- [apiVersion](AbstractMediaSourceAddon.md#apiversion)
- [authors](AbstractMediaSourceAddon.md#authors)
- [defaultMaxListeners](AbstractMediaSourceAddon.md#defaultmaxlisteners)
- [dependencies](AbstractMediaSourceAddon.md#dependencies)
- [description](AbstractMediaSourceAddon.md#description)
- [id](AbstractMediaSourceAddon.md#id)
- [tags](AbstractMediaSourceAddon.md#tags)
- [title](AbstractMediaSourceAddon.md#title)
- [type](AbstractMediaSourceAddon.md#type)
- [version](AbstractMediaSourceAddon.md#version)

### Methods

- [addListener](AbstractMediaSourceAddon.md#addlistener)
- [emit](AbstractMediaSourceAddon.md#emit)
- [error](AbstractMediaSourceAddon.md#error)
- [eventNames](AbstractMediaSourceAddon.md#eventnames)
- [getApiVersion](AbstractMediaSourceAddon.md#getapiversion)
- [getAuthors](AbstractMediaSourceAddon.md#getauthors)
- [getDependencies](AbstractMediaSourceAddon.md#getdependencies)
- [getDescription](AbstractMediaSourceAddon.md#getdescription)
- [getId](AbstractMediaSourceAddon.md#getid)
- [getMaxListeners](AbstractMediaSourceAddon.md#getmaxlisteners)
- [getResources](AbstractMediaSourceAddon.md#getresources)
- [getSource](AbstractMediaSourceAddon.md#getsource)
- [getSourceClass](AbstractMediaSourceAddon.md#getsourceclass)
- [getTags](AbstractMediaSourceAddon.md#gettags)
- [getTitle](AbstractMediaSourceAddon.md#gettitle)
- [getType](AbstractMediaSourceAddon.md#gettype)
- [getVersion](AbstractMediaSourceAddon.md#getversion)
- [listenerCount](AbstractMediaSourceAddon.md#listenercount)
- [listeners](AbstractMediaSourceAddon.md#listeners)
- [log](AbstractMediaSourceAddon.md#log)
- [off](AbstractMediaSourceAddon.md#off)
- [on](AbstractMediaSourceAddon.md#on)
- [onInstall](AbstractMediaSourceAddon.md#oninstall)
- [onLoad](AbstractMediaSourceAddon.md#onload)
- [onUninstall](AbstractMediaSourceAddon.md#onuninstall)
- [onUnload](AbstractMediaSourceAddon.md#onunload)
- [onUpdate](AbstractMediaSourceAddon.md#onupdate)
- [once](AbstractMediaSourceAddon.md#once)
- [prependListener](AbstractMediaSourceAddon.md#prependlistener)
- [prependOnceListener](AbstractMediaSourceAddon.md#prependoncelistener)
- [rawListeners](AbstractMediaSourceAddon.md#rawlisteners)
- [removeAllListeners](AbstractMediaSourceAddon.md#removealllisteners)
- [removeListener](AbstractMediaSourceAddon.md#removelistener)
- [setMaxListeners](AbstractMediaSourceAddon.md#setmaxlisteners)
- [warn](AbstractMediaSourceAddon.md#warn)
- [getApiVersion](AbstractMediaSourceAddon.md#getapiversion-1)
- [getAuthors](AbstractMediaSourceAddon.md#getauthors-1)
- [getDependencies](AbstractMediaSourceAddon.md#getdependencies-1)
- [getDescription](AbstractMediaSourceAddon.md#getdescription-1)
- [getId](AbstractMediaSourceAddon.md#getid-1)
- [getTags](AbstractMediaSourceAddon.md#gettags-1)
- [getTitle](AbstractMediaSourceAddon.md#gettitle-1)
- [getType](AbstractMediaSourceAddon.md#gettype-1)
- [getVersion](AbstractMediaSourceAddon.md#getversion-1)
- [listenerCount](AbstractMediaSourceAddon.md#listenercount-1)

## Constructors

### constructor

• **new AbstractMediaSourceAddon**(`resources`, `settings?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resources` | [`addonResourcesType`](../interfaces/addonResourcesType.md) |
| `settings` | [`sourceSettingsType`](../interfaces/sourceSettingsType.md) |

#### Overrides

[AbstractAddon](AbstractAddon.md).[constructor](AbstractAddon.md#constructor)

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:10](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSourceAddon.ts#L10)

## Properties

### source

• `Private` **source**: [`AbstractMediaSource`](AbstractMediaSource.md)

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:8](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSourceAddon.ts#L8)

___

### apiVersion

▪ `Static` `Protected` **apiVersion**: `string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[apiVersion](AbstractAddon.md#apiversion)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:9

___

### authors

▪ `Static` `Protected` **authors**: `string`[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[authors](AbstractAddon.md#authors)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:10

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[defaultMaxListeners](AbstractAddon.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:11

___

### dependencies

▪ `Static` `Protected` **dependencies**: `string`[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[dependencies](AbstractAddon.md#dependencies)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:13

___

### description

▪ `Static` `Protected` **description**: `string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[description](AbstractAddon.md#description)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:11

___

### id

▪ `Static` `Protected` **id**: `string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[id](AbstractAddon.md#id)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:5

___

### tags

▪ `Static` `Protected` **tags**: `string`[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[tags](AbstractAddon.md#tags)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:12

___

### title

▪ `Static` `Protected` **title**: `string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[title](AbstractAddon.md#title)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:6

___

### type

▪ `Static` `Protected` **type**: `string` = `'media-source'`

#### Overrides

[AbstractAddon](AbstractAddon.md).[type](AbstractAddon.md#type)

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:6](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSourceAddon.ts#L6)

___

### version

▪ `Static` `Protected` **version**: `string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[version](AbstractAddon.md#version)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:8

## Methods

### addListener

▸ **addListener**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[addListener](AbstractAddon.md#addlistener)

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

[AbstractAddon](AbstractAddon.md).[emit](AbstractAddon.md#emit)

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

#### Inherited from

[AbstractAddon](AbstractAddon.md).[error](AbstractAddon.md#error)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:42

___

### eventNames

▸ **eventNames**(): (`string` \| `number`)[]

#### Returns

(`string` \| `number`)[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[eventNames](AbstractAddon.md#eventnames)

#### Defined in

node_modules/@types/events/index.d.ts:13

___

### getApiVersion

▸ **getApiVersion**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getApiVersion](AbstractAddon.md#getapiversion)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:29

___

### getAuthors

▸ **getAuthors**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getAuthors](AbstractAddon.md#getauthors)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:30

___

### getDependencies

▸ **getDependencies**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getDependencies](AbstractAddon.md#getdependencies)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:33

___

### getDescription

▸ **getDescription**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getDescription](AbstractAddon.md#getdescription)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:31

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getId](AbstractAddon.md#getid)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:25

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getMaxListeners](AbstractAddon.md#getmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:15

___

### getResources

▸ **getResources**(): [`addonResourcesType`](../interfaces/addonResourcesType.md)

#### Returns

[`addonResourcesType`](../interfaces/addonResourcesType.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getResources](AbstractAddon.md#getresources)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:34

___

### getSource

▸ **getSource**(): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:21](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSourceAddon.ts#L21)

___

### getSourceClass

▸ `Abstract` **getSourceClass**(): [`AbstractMediaSource`](AbstractMediaSource.md)

#### Returns

[`AbstractMediaSource`](AbstractMediaSource.md)

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:19](https://github.com/medialib-project/medialib/blob/0cfc488/src/source/AbstractMediaSourceAddon.ts#L19)

___

### getTags

▸ **getTags**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getTags](AbstractAddon.md#gettags)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:32

___

### getTitle

▸ **getTitle**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getTitle](AbstractAddon.md#gettitle)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:26

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getType](AbstractAddon.md#gettype)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:27

___

### getVersion

▸ **getVersion**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getVersion](AbstractAddon.md#getversion)

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

[AbstractAddon](AbstractAddon.md).[listenerCount](AbstractAddon.md#listenercount)

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

[AbstractAddon](AbstractAddon.md).[listeners](AbstractAddon.md#listeners)

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

#### Inherited from

[AbstractAddon](AbstractAddon.md).[log](AbstractAddon.md#log)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:40

___

### off

▸ **off**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[off](AbstractAddon.md#off)

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[on](AbstractAddon.md#on)

#### Defined in

node_modules/@types/events/index.d.ts:18

___

### onInstall

▸ `Abstract` **onInstall**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onInstall](AbstractAddon.md#oninstall)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:35

___

### onLoad

▸ `Abstract` **onLoad**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onLoad](AbstractAddon.md#onload)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:37

___

### onUninstall

▸ `Abstract` **onUninstall**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onUninstall](AbstractAddon.md#onuninstall)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:39

___

### onUnload

▸ `Abstract` **onUnload**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onUnload](AbstractAddon.md#onunload)

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

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onUpdate](AbstractAddon.md#onupdate)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:36

___

### once

▸ **once**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[once](AbstractAddon.md#once)

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[prependListener](AbstractAddon.md#prependlistener)

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[prependOnceListener](AbstractAddon.md#prependoncelistener)

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

[AbstractAddon](AbstractAddon.md).[rawListeners](AbstractAddon.md#rawlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:27

___

### removeAllListeners

▸ **removeAllListeners**(`type?`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[removeAllListeners](AbstractAddon.md#removealllisteners)

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[removeListener](AbstractAddon.md#removelistener)

#### Defined in

node_modules/@types/events/index.d.ts:22

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[setMaxListeners](AbstractAddon.md#setmaxlisteners)

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

#### Inherited from

[AbstractAddon](AbstractAddon.md).[warn](AbstractAddon.md#warn)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:41

___

### getApiVersion

▸ `Static` **getApiVersion**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getApiVersion](AbstractAddon.md#getapiversion-1)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:20

___

### getAuthors

▸ `Static` **getAuthors**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getAuthors](AbstractAddon.md#getauthors-1)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:21

___

### getDependencies

▸ `Static` **getDependencies**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getDependencies](AbstractAddon.md#getdependencies-1)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:24

___

### getDescription

▸ `Static` **getDescription**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getDescription](AbstractAddon.md#getdescription-1)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:22

___

### getId

▸ `Static` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getId](AbstractAddon.md#getid-1)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:16

___

### getTags

▸ `Static` **getTags**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getTags](AbstractAddon.md#gettags-1)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:23

___

### getTitle

▸ `Static` **getTitle**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getTitle](AbstractAddon.md#gettitle-1)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:17

___

### getType

▸ `Static` **getType**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getType](AbstractAddon.md#gettype-1)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:18

___

### getVersion

▸ `Static` **getVersion**(): `string`

#### Returns

`string`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getVersion](AbstractAddon.md#getversion-1)

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

[AbstractAddon](AbstractAddon.md).[listenerCount](AbstractAddon.md#listenercount-1)

#### Defined in

node_modules/@types/events/index.d.ts:10
