[@medialib/medialib](README.md) / Exports

# @medialib/medialib

## Table of contents

### Namespaces

- [arrayUtils](modules/arrayUtils.md)
- [compareUtils](modules/compareUtils.md)
- [objectUtils](modules/objectUtils.md)
- [optionUtils](modules/optionUtils.md)
- [promiseUtils](modules/promiseUtils.md)

### Classes

- [AbstractAddon](classes/AbstractAddon.md)
- [AbstractAddonManager](classes/AbstractAddonManager.md)
- [AbstractMedia](classes/AbstractMedia.md)
- [AbstractMediaSource](classes/AbstractMediaSource.md)
- [AbstractMediaSourceAddon](classes/AbstractMediaSourceAddon.md)
- [AbstractWebSource](classes/AbstractWebSource.md)
- [AddonManagerCenter](classes/AddonManagerCenter.md)
- [AddonMediaSourceManager](classes/AddonMediaSourceManager.md)

### Type Aliases

- [addonType](modules.md#addontype)
- [basicAddonDetails](modules.md#basicaddondetails)
- [basicAddonManagerCenterDetails](modules.md#basicaddonmanagercenterdetails)
- [basicAddonManagerDetails](modules.md#basicaddonmanagerdetails)
- [basicAddonResources](modules.md#basicaddonresources)
- [basicAddonSettings](modules.md#basicaddonsettings)
- [basicMediaDetails](modules.md#basicmediadetails)
- [diff](modules.md#diff)
- [diffType](modules.md#difftype)
- [mediaSourceAddonDetails](modules.md#mediasourceaddondetails)
- [mediaSourceAddonManagerDetails](modules.md#mediasourceaddonmanagerdetails)
- [mediaSourceAddonResources](modules.md#mediasourceaddonresources)
- [mediaSourceAddonSettings](modules.md#mediasourceaddonsettings)
- [mediaSourceFetchOption](modules.md#mediasourcefetchoption)
- [mediaSourceFetchResult](modules.md#mediasourcefetchresult)
- [mediaSourceSettings](modules.md#mediasourcesettings)
- [optionDefinition](modules.md#optiondefinition)
- [webMediaSourceFetchOption](modules.md#webmediasourcefetchoption)
- [webMediaSourceFetchResult](modules.md#webmediasourcefetchresult)
- [webMediaSourceSettings](modules.md#webmediasourcesettings)

## Type Aliases

### addonType

Ƭ **addonType**: ``"addon"`` \| `string` & {}

#### Defined in

node_modules/@addonlib/addonlib/dist/addonTypes.d.ts:12

___

### basicAddonDetails

Ƭ **basicAddonDetails**: { `apiVersion`: `string` ; `authors`: `string`[] ; `dependencies`: `string`[] ; `description`: `string` ; `id`: `string` ; `tags`: `string`[] ; `title`: `string` ; `type`: [`addonType`](modules.md#addontype) ; `version`: `string`  } & `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@addonlib/addonlib/dist/addonTypes.d.ts:1

___

### basicAddonManagerCenterDetails

Ƭ **basicAddonManagerCenterDetails**: {} & `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@addonlib/addonlib/dist/addonManagerCenterTypes.d.ts:1

___

### basicAddonManagerDetails

Ƭ **basicAddonManagerDetails**: { `type`: [`addonType`](modules.md#addontype)  } & `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@addonlib/addonlib/dist/addonManagerTypes.d.ts:2

___

### basicAddonResources

Ƭ **basicAddonResources**: {} & `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@addonlib/addonlib/dist/addonTypes.d.ts:13

___

### basicAddonSettings

Ƭ **basicAddonSettings**: {} & `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@addonlib/addonlib/dist/addonTypes.d.ts:14

___

### basicMediaDetails

Ƭ **basicMediaDetails**: { `id`: `string` ; `title`: `string`  } & `Record`<`string`, `unknown`\>

#### Defined in

src/mediaTypes.ts:1

___

### diff

Ƭ **diff**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__new` | `any` |
| `__old` | `any` |

#### Defined in

[src/utils/diffType.ts:1](https://github.com/medialib-project/medialib/blob/3acd8bd/src/utils/diffType.ts#L1)

___

### diffType

Ƭ **diffType**: `Object`

#### Index signature

▪ [key: `string`]: [`diff`](modules.md#diff) \| [`diffType`](modules.md#difftype)

#### Defined in

[src/utils/diffType.ts:3](https://github.com/medialib-project/medialib/blob/3acd8bd/src/utils/diffType.ts#L3)

___

### mediaSourceAddonDetails

Ƭ **mediaSourceAddonDetails**: { `type`: ``"media-source"`` \| `string` & {}  } & [`basicAddonDetails`](modules.md#basicaddondetails)

#### Defined in

src/source/mediaSourceAddonTypes.ts:7

___

### mediaSourceAddonManagerDetails

Ƭ **mediaSourceAddonManagerDetails**: {} & [`basicAddonManagerDetails`](modules.md#basicaddonmanagerdetails)

#### Defined in

src/source/mediaSourceAddonManagerTypes.ts:3

___

### mediaSourceAddonResources

Ƭ **mediaSourceAddonResources**: {} & [`basicAddonResources`](modules.md#basicaddonresources)

#### Defined in

src/source/mediaSourceAddonTypes.ts:11

___

### mediaSourceAddonSettings

Ƭ **mediaSourceAddonSettings**: {} & [`basicAddonSettings`](modules.md#basicaddonsettings)

#### Defined in

src/source/mediaSourceAddonTypes.ts:13

___

### mediaSourceFetchOption

Ƭ **mediaSourceFetchOption**: {} & `Record`<`string`, `unknown`\>

#### Defined in

src/source/mediaSourceTypes.ts:5

___

### mediaSourceFetchResult

Ƭ **mediaSourceFetchResult**<`T`\>: { `content`: `T`[]  } & `Record`<`string`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractMedia`](classes/AbstractMedia.md) = [`AbstractMedia`](classes/AbstractMedia.md) |

#### Defined in

src/source/mediaSourceTypes.ts:7

___

### mediaSourceSettings

Ƭ **mediaSourceSettings**: {} & `Record`<`string`, `unknown`\>

#### Defined in

src/source/mediaSourceTypes.ts:3

___

### optionDefinition

Ƭ **optionDefinition**<`T`\>: { [K in keyof T]: Object }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Defined in

node_modules/@addonlib/addonlib/dist/optionTypes.d.ts:1

___

### webMediaSourceFetchOption

Ƭ **webMediaSourceFetchOption**: { `limit?`: `number` ; `offset?`: `number`  } & [`mediaSourceFetchOption`](modules.md#mediasourcefetchoption)

#### Defined in

src/source/web/webMediaSourceTypes.ts:13

___

### webMediaSourceFetchResult

Ƭ **webMediaSourceFetchResult**<`T`\>: { `limit?`: `number` ; `offset?`: `number` ; `total?`: `number`  } & [`mediaSourceFetchResult`](modules.md#mediasourcefetchresult)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractMedia`](classes/AbstractMedia.md) = [`AbstractMedia`](classes/AbstractMedia.md) |

#### Defined in

src/source/web/webMediaSourceTypes.ts:18

___

### webMediaSourceSettings

Ƭ **webMediaSourceSettings**: { `url`: `string` ; `userAgent`: `string`  } & [`mediaSourceSettings`](modules.md#mediasourcesettings)

#### Defined in

src/source/web/webMediaSourceTypes.ts:8
