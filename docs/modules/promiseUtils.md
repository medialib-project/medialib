[@medialib/medialib](../README.md) / [Exports](../modules.md) / promiseUtils

# Namespace: promiseUtils

## Table of contents

### Functions

- [chainPromisesOnArray](promiseUtils.md#chainpromisesonarray)

## Functions

### chainPromisesOnArray

▸ **chainPromisesOnArray**<`T`, `V`\>(`array`, `promise`, `initialValue`): `V`

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `promise` | (`element`: `T`, `results`: `V`, `index`: `number`) => `Promise`<`V`\> |
| `initialValue` | `V` |

#### Returns

`V`

#### Defined in

[src/utils/promiseUtils.ts:1](https://github.com/medialib-project/medialib/blob/d187830/src/utils/promiseUtils.ts#L1)
