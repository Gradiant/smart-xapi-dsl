[SMART xAPI DSL](../README.md) > [NumericActivity](../interfaces/numericactivity.md)

# Interface: NumericActivity

## Hierarchy

 [BaseActivity](baseactivity.md)<[NumericDefinition](numericdefinition.md)>

**↳ NumericActivity**

## Index

### Properties

* [correctResponsesPattern](numericactivity.md#correctresponsespattern)
* [definition](numericactivity.md#definition)
* [id](numericactivity.md#id)
* [interactionType](numericactivity.md#interactiontype)
* [objectType](numericactivity.md#objecttype)

---

## Properties

<a id="correctresponsespattern"></a>

###  correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/numeric-activity.d.ts:12*

A range of numbers represented by a minimum and a maximum delimited by \[:\]. Where the range does not have a maximum or does not have a minimum, that number is omitted but the delimiter is still used. E.g. \[:\]4 indicates a maximum for 4 and no minimum. Where the correct response or learner's response is a single number rather than a range, the single number with no delimiter MAY be used.

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

**● interactionType**: *[Numeric](../enums/interactiontype.md#numeric) \| "numeric"*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/numeric-activity.d.ts:5*

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: *`undefined` \| "Activity"*

*Inherited from [BaseActivity](baseactivity.md).[objectType](baseactivity.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:7*

MUST be Activity when present

___

