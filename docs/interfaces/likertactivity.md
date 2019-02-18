[SMART xAPI DSL](../README.md) > [LikertActivity](../interfaces/likertactivity.md)

# Interface: LikertActivity

## Hierarchy

 [BaseActivity](baseactivity.md)<[LikertDefinition](likertdefinition.md)>

**↳ LikertActivity**

## Index

### Properties

* [correctResponsesPattern](likertactivity.md#correctresponsespattern)
* [definition](likertactivity.md#definition)
* [id](likertactivity.md#id)
* [interactionType](likertactivity.md#interactiontype)
* [objectType](likertactivity.md#objecttype)
* [scale](likertactivity.md#scale)

---

## Properties

<a id="correctresponsespattern"></a>

###  correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/likert-activity.d.ts:13*

A single item id

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

**● interactionType**: *[Likert](../enums/interactiontype.md#likert) \| "likert"*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/likert-activity.d.ts:5*

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: *`undefined` \| "Activity"*

*Inherited from [BaseActivity](baseactivity.md).[objectType](baseactivity.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:7*

MUST be Activity when present

___
<a id="scale"></a>

### `<Optional>` scale

**● scale**: *[InteractionComponent](interactioncomponent.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/likert-activity.d.ts:9*

A list of the options on the likert scale

___

