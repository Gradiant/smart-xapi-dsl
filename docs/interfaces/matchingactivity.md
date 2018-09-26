[SMART xAPI DSL](../README.md) > [MatchingActivity](../interfaces/matchingactivity.md)

# Interface: MatchingActivity

## Hierarchy

 [BaseActivity](baseactivity.md)<[MatchingDefinition](matchingdefinition.md)>

**↳ MatchingActivity**

## Index

### Properties

* [correctResponsesPattern](matchingactivity.md#correctresponsespattern)
* [definition](matchingactivity.md#definition)
* [id](matchingactivity.md#id)
* [interactionType](matchingactivity.md#interactiontype)
* [objectType](matchingactivity.md#objecttype)
* [source](matchingactivity.md#source)
* [target](matchingactivity.md#target)

---

## Properties

<a id="correctresponsespattern"></a>

###  correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/matching-activity.d.ts:18*

A list of matching pairs, where each pair consists of a source item id followed by a target item id. Items can appear in multiple (or zero) pairs. Items within a pair are delimited by \[.\]. Pairs are delimited by \[,\]

___
<a id="definition"></a>

### `<Optional>` definition

**● definition**: *[T]()*

*Inherited from [BaseActivity](baseactivity.md).[definition](baseactivity.md#definition)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:16*

Metadata

___
<a id="id"></a>

###  id

**● id**: *[IRI](../#iri)*

*Inherited from [BaseActivity](baseactivity.md).[id](baseactivity.md#id)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:12*

An identifier for a single unique Activity.

___
<a id="interactiontype"></a>

###  interactionType

**● interactionType**: * [Matching](../enums/interactiontype.md#matching) &#124; "matching"
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/matching-activity.d.ts:5*

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: * `undefined` &#124; "Activity"
*

*Inherited from [BaseActivity](baseactivity.md).[objectType](baseactivity.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:7*

MUST be Activity when present

___
<a id="source"></a>

### `<Optional>` source

**● source**: *[InteractionComponent](interactioncomponent.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/matching-activity.d.ts:9*

Lists of sources to be matched

___
<a id="target"></a>

### `<Optional>` target

**● target**: *[InteractionComponent](interactioncomponent.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/matching-activity.d.ts:13*

Lists of targets to be matched

___

