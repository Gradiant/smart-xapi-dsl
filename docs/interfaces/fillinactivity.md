[SMART xAPI DSL](../README.md) > [FillInActivity](../interfaces/fillinactivity.md)

# Interface: FillInActivity

## Hierarchy

 [BaseActivity](baseactivity.md)<[FillInDefinition](fillindefinition.md)>

**↳ FillInActivity**

## Index

### Properties

* [correctResponsesPattern](fillinactivity.md#correctresponsespattern)
* [definition](fillinactivity.md#definition)
* [id](fillinactivity.md#id)
* [interactionType](fillinactivity.md#interactiontype)
* [objectType](fillinactivity.md#objecttype)

---

## Properties

<a id="correctresponsespattern"></a>

###  correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/fill-in-activity.d.ts:9*

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

**● interactionType**: *[FillIn](../enums/interactiontype.md#fillin) \| "fill-in"*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/fill-in-activity.d.ts:5*

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: *`undefined` \| "Activity"*

*Inherited from [BaseActivity](baseactivity.md).[objectType](baseactivity.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:7*

MUST be Activity when present

___

