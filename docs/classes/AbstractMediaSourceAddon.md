[@medialib/medialib](../README.md) / [Exports](../modules.md) / AbstractMediaSourceAddon

# Class: AbstractMediaSourceAddon<T, U, V, W\>

**`No Inherit Doc`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractMediaSource`](AbstractMediaSource.md) = [`AbstractMediaSource`](AbstractMediaSource.md) |
| `U` | extends [`mediaSourceAddonDetails`](../modules.md#mediasourceaddondetails) = [`mediaSourceAddonDetails`](../modules.md#mediasourceaddondetails) |
| `V` | extends [`mediaSourceAddonResources`](../modules.md#mediasourceaddonresources) = [`mediaSourceAddonResources`](../modules.md#mediasourceaddonresources) |
| `W` | extends [`mediaSourceSettings`](../modules.md#mediasourcesettings) = [`mediaSourceSettings`](../modules.md#mediasourcesettings) |

## Hierarchy

- [`AbstractAddon`](AbstractAddon.md)

  ↳ **`AbstractMediaSourceAddon`**

## Table of contents

### Constructors

- [constructor](AbstractMediaSourceAddon.md#constructor)

### Properties

- [source](AbstractMediaSourceAddon.md#source)
- [defaultMaxListeners](AbstractMediaSourceAddon.md#defaultmaxlisteners)

### Methods

- [addListener](AbstractMediaSourceAddon.md#addlistener)
- [emit](AbstractMediaSourceAddon.md#emit)
- [error](AbstractMediaSourceAddon.md#error)
- [eventNames](AbstractMediaSourceAddon.md#eventnames)
- [getDetails](AbstractMediaSourceAddon.md#getdetails)
- [getMaxListeners](AbstractMediaSourceAddon.md#getmaxlisteners)
- [getResources](AbstractMediaSourceAddon.md#getresources)
- [getSettings](AbstractMediaSourceAddon.md#getsettings)
- [getSettingsDefinition](AbstractMediaSourceAddon.md#getsettingsdefinition)
- [getSource](AbstractMediaSourceAddon.md#getsource)
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
- [setSettings](AbstractMediaSourceAddon.md#setsettings)
- [warn](AbstractMediaSourceAddon.md#warn)
- [listenerCount](AbstractMediaSourceAddon.md#listenercount-1)

## Constructors

### constructor

• **new AbstractMediaSourceAddon**<`T`, `U`, `V`, `W`\>(`resources`, `details?`, `sourceClass?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractMediaSource`](AbstractMediaSource.md)<`Record`<`string`, `unknown`\>, `Record`<`string`, `unknown`\>, [`mediaSourceFetchResult`](../modules.md#mediasourcefetchresult), `T`\> = [`AbstractMediaSource`](AbstractMediaSource.md)<`Record`<`string`, `unknown`\>, `Record`<`string`, `unknown`\>, [`mediaSourceFetchResult`](../modules.md#mediasourcefetchresult)\> |
| `U` | extends [`mediaSourceAddonDetails`](../modules.md#mediasourceaddondetails) = [`mediaSourceAddonDetails`](../modules.md#mediasourceaddondetails) |
| `V` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |
| `W` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resources` | `V` |
| `details?` | `U` |
| `sourceClass?` | () => `T` |

#### Overrides

[AbstractAddon](AbstractAddon.md).[constructor](AbstractAddon.md#constructor)

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:17](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSourceAddon.ts#L17)

## Properties

### source

• `Private` **source**: `T`

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:15](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSourceAddon.ts#L15)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[defaultMaxListeners](AbstractAddon.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:11

## Methods

### addListener

▸ **addListener**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:26

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

### getDetails

▸ **getDetails**(): [`basicAddonDetails`](../modules.md#basicaddondetails)

#### Returns

[`basicAddonDetails`](../modules.md#basicaddondetails)

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getDetails](AbstractAddon.md#getdetails)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:14

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

▸ **getResources**(): `Record`<`string`, `unknown`\>

#### Returns

`Record`<`string`, `unknown`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[getResources](AbstractAddon.md#getresources)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:15

___

### getSettings

▸ **getSettings**(): `W`

#### Returns

`W`

#### Overrides

[AbstractAddon](AbstractAddon.md).[getSettings](AbstractAddon.md#getsettings)

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:29](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSourceAddon.ts#L29)

___

### getSettingsDefinition

▸ **getSettingsDefinition**(): [`optionDefinition`](../modules.md#optiondefinition)<`W`\>

#### Returns

[`optionDefinition`](../modules.md#optiondefinition)<`W`\>

#### Overrides

[AbstractAddon](AbstractAddon.md).[getSettingsDefinition](AbstractAddon.md#getsettingsdefinition)

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:37](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSourceAddon.ts#L37)

___

### getSource

▸ **getSource**(): `T`

#### Returns

`T`

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:25](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSourceAddon.ts#L25)

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

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:24

___

### off

▸ **off**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[off](AbstractAddon.md#off)

#### Defined in

node_modules/@types/events/index.d.ts:23

___

### on

▸ **on**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:19

___

### onLoad

▸ `Abstract` **onLoad**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onLoad](AbstractAddon.md#onload)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:21

___

### onUninstall

▸ `Abstract` **onUninstall**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onUninstall](AbstractAddon.md#onuninstall)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:23

___

### onUnload

▸ `Abstract` **onUnload**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onUnload](AbstractAddon.md#onunload)

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

#### Inherited from

[AbstractAddon](AbstractAddon.md).[onUpdate](AbstractAddon.md#onupdate)

#### Defined in

node_modules/@addonlib/addonlib/dist/AbstractAddon.d.ts:20

___

### once

▸ **once**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[once](AbstractAddon.md#once)

#### Defined in

node_modules/@types/events/index.d.ts:19

___

### prependListener

▸ **prependListener**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[prependListener](AbstractAddon.md#prependlistener)

#### Defined in

node_modules/@types/events/index.d.ts:20

___

### prependOnceListener

▸ **prependOnceListener**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

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

▸ **removeAllListeners**(`type?`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `number` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[removeAllListeners](AbstractAddon.md#removealllisteners)

#### Defined in

node_modules/@types/events/index.d.ts:24

___

### removeListener

▸ **removeListener**(`type`, `listener`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `listener` | `Listener` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[removeListener](AbstractAddon.md#removelistener)

#### Defined in

node_modules/@types/events/index.d.ts:22

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractMediaSourceAddon`](AbstractMediaSourceAddon.md)<`T`, `U`, `V`, `W`\>

#### Inherited from

[AbstractAddon](AbstractAddon.md).[setMaxListeners](AbstractAddon.md#setmaxlisteners)

#### Defined in

node_modules/@types/events/index.d.ts:14

___

### setSettings

▸ **setSettings**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `W` |

#### Returns

`void`

#### Overrides

[AbstractAddon](AbstractAddon.md).[setSettings](AbstractAddon.md#setsettings)

#### Defined in

[src/source/AbstractMediaSourceAddon.ts:33](https://github.com/medialib-project/medialib/blob/d187830/src/source/AbstractMediaSourceAddon.ts#L33)

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

[AbstractAddon](AbstractAddon.md).[listenerCount](AbstractAddon.md#listenercount-1)

#### Defined in

node_modules/@types/events/index.d.ts:10
