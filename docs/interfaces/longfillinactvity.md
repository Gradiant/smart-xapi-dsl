[SMART xAPI DSL](../README.md) > [LongFillInActvity](../interfaces/longfillinactvity.md)

# Interface: LongFillInActvity

## Hierarchy

 [BaseActivity](baseactivity.md)<[LongFillInDefinition](longfillindefinition.md)>

**↳ LongFillInActvity**

## Index

### Properties

* [correctResponsesPattern](longfillinactvity.md#correctresponsespattern)
* [definition](longfillinactvity.md#definition)
* [id](longfillinactvity.md#id)
* [interactionType](longfillinactvity.md#interactiontype)
* [objectType](longfillinactvity.md#objecttype)

---

## Properties

<a id="correctresponsespattern"></a>

###  correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/long-fill-in-actvity.d.ts:9*

A list of responses delimited by \[,\]. If the response contains only one item, the delimiter MUST not be used

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

**● interactionType**: *[LongFillIn](../enums/interactiontype.md#longfillin) \| "long-fill-in"*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/long-fill-in-actvity.d.ts:5*

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: *`undefined` \| "Activity"*

*Inherited from [BaseActivity](baseactivity.md).[objectType](baseactivity.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:7*

MUST be Activity when present

___

