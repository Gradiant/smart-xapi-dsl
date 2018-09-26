[SMART xAPI DSL](../README.md) > [PerformanceActivity](../interfaces/performanceactivity.md)

# Interface: PerformanceActivity

## Hierarchy

 [BaseActivity](baseactivity.md)<[PerformanceDefinition](performancedefinition.md)>

**↳ PerformanceActivity**

## Index

### Properties

* [correctResponsesPattern](performanceactivity.md#correctresponsespattern)
* [definition](performanceactivity.md#definition)
* [id](performanceactivity.md#id)
* [interactionType](performanceactivity.md#interactiontype)
* [objectType](performanceactivity.md#objecttype)
* [steps](performanceactivity.md#steps)

---

## Properties

<a id="correctresponsespattern"></a>

###  correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/performance-activity.d.ts:14*

A list of steps containing a step ids and the response to that step. Step ids are separated from responses by \[.\]. Steps are delimited by \[,\]. The response can be a String as in a fill-in interaction or a number range as in a numeric interaction

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

**● interactionType**: * [Performance](../enums/interactiontype.md#performance) &#124; "performance"
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/performance-activity.d.ts:5*

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: * `undefined` &#124; "Activity"
*

*Inherited from [BaseActivity](baseactivity.md).[objectType](baseactivity.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:7*

MUST be Activity when present

___
<a id="steps"></a>

### `<Optional>` steps

**● steps**: *[InteractionComponent](interactioncomponent.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/performance-activity.d.ts:9*

A list of the elements making up the performance interaction

___

