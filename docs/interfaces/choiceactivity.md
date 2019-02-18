[SMART xAPI DSL](../README.md) > [ChoiceActivity](../interfaces/choiceactivity.md)

# Interface: ChoiceActivity

## Hierarchy

 [BaseActivity](baseactivity.md)<[ChoiceDefinition](choicedefinition.md)>

**↳ ChoiceActivity**

## Index

### Properties

* [choices](choiceactivity.md#choices)
* [correctResponsesPattern](choiceactivity.md#correctresponsespattern)
* [definition](choiceactivity.md#definition)
* [id](choiceactivity.md#id)
* [interactionType](choiceactivity.md#interactiontype)
* [objectType](choiceactivity.md#objecttype)

---

## Properties

<a id="choices"></a>

### `<Optional>` choices

**● choices**: *[InteractionComponent](interactioncomponent.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/choice-activity.d.ts:9*

A list of the options available in the interaction for selection or ordering

___
<a id="correctresponsespattern"></a>

###  correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/choice-activity.d.ts:13*

A list of item ids delimited by \[,\]. If the response contains only one item, the delimiter MUST not be used

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

**● interactionType**: *[Choice](../enums/interactiontype.md#choice) \| "choice"*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/choice-activity.d.ts:5*

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: *`undefined` \| "Activity"*

*Inherited from [BaseActivity](baseactivity.md).[objectType](baseactivity.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/base-activity.d.ts:7*

MUST be Activity when present

___

