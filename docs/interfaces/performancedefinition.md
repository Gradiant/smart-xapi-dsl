[SMART xAPI DSL](../README.md) > [PerformanceDefinition](../interfaces/performancedefinition.md)

# Interface: PerformanceDefinition

An interaction that requires the learner to perform a task that requires multiple steps

## Hierarchy

↳  [BaseInteractionDefinition](baseinteractiondefinition.md)

**↳ PerformanceDefinition**

## Index

### Properties

* [correctResponsesPattern](performancedefinition.md#correctresponsespattern)
* [description](performancedefinition.md#description)
* [extensions](performancedefinition.md#extensions)
* [interactionType](performancedefinition.md#interactiontype)
* [moreInfo](performancedefinition.md#moreinfo)
* [name](performancedefinition.md#name)
* [steps](performancedefinition.md#steps)
* [type](performancedefinition.md#type)

---

## Properties

<a id="correctresponsespattern"></a>

### `<Optional>` correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[correctResponsesPattern](baseinteractiondefinition.md#correctresponsespattern)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/performance-definition.d.ts:17*

A list of steps containing a step ids and the response to that step. Step ids are separated from responses by \[.\]. Steps are delimited by \[,\]. The response can be a String as in a fill-in interaction or a number range as in a numeric interaction

___
<a id="description"></a>

### `<Optional>` description

**● description**: *[LanguageMap](languagemap.md)*

*Inherited from [ActivityDefinition](activitydefinition.md).[description](activitydefinition.md#description)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:14*

A description of the Activity

___
<a id="extensions"></a>

### `<Optional>` extensions

**● extensions**: *[Extensions](extensions.md)*

*Inherited from [ActivityDefinition](activitydefinition.md).[extensions](activitydefinition.md#extensions)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:29*

A map of other properties as needed

___
<a id="interactiontype"></a>

###  interactionType

**● interactionType**: * [Performance](../enums/interactiontype.md#performance) &#124; "performance"
*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[interactionType](baseinteractiondefinition.md#interactiontype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/performance-definition.d.ts:8*

___
<a id="moreinfo"></a>

### `<Optional>` moreInfo

**● moreInfo**: *[IRL](../#irl)*

*Inherited from [ActivityDefinition](activitydefinition.md).[moreInfo](activitydefinition.md#moreinfo)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:25*

Resolves to a document with human-readable information about the Activity, which could include a way to launch the definitions.

It must be an IRL

___
<a id="name"></a>

### `<Optional>` name

**● name**: *[LanguageMap](languagemap.md)*

*Inherited from [ActivityDefinition](activitydefinition.md).[name](activitydefinition.md#name)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:10*

The human readable/visual name of the Activity

___
<a id="steps"></a>

### `<Optional>` steps

**● steps**: *[InteractionComponent](interactioncomponent.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/performance-definition.d.ts:12*

A list of the elements making up the performance interaction

___
<a id="type"></a>

### `<Optional>` type

**● type**: *[IRL](../#irl)*

*Inherited from [ActivityDefinition](activitydefinition.md).[type](activitydefinition.md#type)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:19*

The type of Activity

___

