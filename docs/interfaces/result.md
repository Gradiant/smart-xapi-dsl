[SMART xAPI DSL](../README.md) > [Result](../interfaces/result.md)

# Interface: Result

An optional property that represents a measured outcome related to the Statement in which it is included

## Hierarchy

**Result**

## Index

### Properties

* [completion](result.md#completion)
* [duration](result.md#duration)
* [extensions](result.md#extensions)
* [response](result.md#response)
* [score](result.md#score)
* [success](result.md#success)

---

## Properties

<a id="completion"></a>

### `<Optional>` completion

**● completion**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/result.d.ts:19*

Indicates whether or not the Activity was completed

___
<a id="duration"></a>

### `<Optional>` duration

**● duration**: *[Duration](../#duration)*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/result.d.ts:27*

Period of time over which the Statement occurred ins ISO-8601

___
<a id="extensions"></a>

### `<Optional>` extensions

**● extensions**: *[Extensions](extensions.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/result.d.ts:31*

A map of other properties as needed

___
<a id="response"></a>

### `<Optional>` response

**● response**: * `undefined` &#124; `string`
*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/result.d.ts:23*

A response appropriately formatted for the given Activity

___
<a id="score"></a>

### `<Optional>` score

**● score**: *[Score](score.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/result.d.ts:11*

The score of the Agent in relation to the success or quality of the experience

___
<a id="success"></a>

### `<Optional>` success

**● success**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/result.d.ts:15*

Indicates whether or not the attempt on the Activity was successful

___

