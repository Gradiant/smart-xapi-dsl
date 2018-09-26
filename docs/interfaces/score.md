[SMART xAPI DSL](../README.md) > [Score](../interfaces/score.md)

# Interface: Score

An optional property that represents the outcome of a graded Activity achieved by an Agent

## Hierarchy

**Score**

## Index

### Properties

* [max](score.md#max)
* [min](score.md#min)
* [raw](score.md#raw)
* [scaled](score.md#scaled)

---

## Properties

<a id="max"></a>

### `<Optional>` max

**● max**: * `undefined` &#124; `number`
*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/score/score.d.ts:28*

The highest possible score for the experience described by the Statement.

Decimal number greater than min (if present)

___
<a id="min"></a>

### `<Optional>` min

**● min**: * `undefined` &#124; `number`
*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/score/score.d.ts:22*

The lowest possible score for the experience described by the Statement.

Decimal number less than max (if present)

___
<a id="raw"></a>

### `<Optional>` raw

**● raw**: * `undefined` &#124; `number`
*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/score/score.d.ts:16*

The score achieved by the Actor in the experience described by the Statement. This is not modified by any scaling or normalization.

Decimal number between min and max (if present, otherwise unrestricted), inclusive

___
<a id="scaled"></a>

### `<Optional>` scaled

**● scaled**: * `undefined` &#124; `number`
*

*Defined in node_modules/@gradiant/xapi-dsl/types/result/score/score.d.ts:10*

The score related to the experience as modified by scaling and/or normalization.

Decimal number between -1 and 1, inclusive

___

