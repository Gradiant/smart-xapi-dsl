[SMART xAPI DSL](../README.md) > [OtherActivity](../interfaces/otheractivity.md)

# Interface: OtherActivity

## Hierarchy

 [BaseActivity](baseactivity.md)<[OtherDefinition](otherdefinition.md)>

**↳ OtherActivity**

## Index

### Properties

* [correctResponsesPattern](otheractivity.md#correctresponsespattern)
* [definition](otheractivity.md#definition)
* [id](otheractivity.md#id)
* [interactionType](otheractivity.md#interactiontype)
* [objectType](otheractivity.md#objecttype)

---

## Properties

<a id="correctresponsespattern"></a>

###  correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/other-activity.d.ts:9*

Any format is valid within this string as appropriate for the type of interaction

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

**● interactionType**: * [Other](../enums/interactiontype.md#other) &#124; "other"
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/other-activity.d.ts:5*

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: * `undefined` &#124; "Activity"
*

*Inherited from [BaseActivity](baseactivity.md).[objectType](baseactivity.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:7*

MUST be Activity when present

___

