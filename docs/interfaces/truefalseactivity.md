[SMART xAPI DSL](../README.md) > [TrueFalseActivity](../interfaces/truefalseactivity.md)

# Interface: TrueFalseActivity

## Hierarchy

 [BaseActivity](baseactivity.md)<[TrueFalseDefinition](truefalsedefinition.md)>

**↳ TrueFalseActivity**

## Index

### Properties

* [correctResponsesPattern](truefalseactivity.md#correctresponsespattern)
* [definition](truefalseactivity.md#definition)
* [id](truefalseactivity.md#id)
* [interactionType](truefalseactivity.md#interactiontype)
* [objectType](truefalseactivity.md#objecttype)

---

## Properties

<a id="correctresponsespattern"></a>

###  correctResponsesPattern

**● correctResponsesPattern**: * ["true"] &#124; ["false"]
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/true-false-activity.d.ts:9*

Either true or false

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

**● interactionType**: * [TrueFalse](../enums/interactiontype.md#truefalse) &#124; "true-false"
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/true-false-activity.d.ts:5*

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: * `undefined` &#124; "Activity"
*

*Inherited from [BaseActivity](baseactivity.md).[objectType](baseactivity.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:7*

MUST be Activity when present

___

