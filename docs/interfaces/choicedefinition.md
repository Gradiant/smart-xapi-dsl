[SMART xAPI DSL](../README.md) > [ChoiceDefinition](../interfaces/choicedefinition.md)

# Interface: ChoiceDefinition

An interaction with a number of possible choices from which the learner can select. This includes interactions in which the learner can select only one answer from the list and those where the learner can select multiple items.

## Hierarchy

↳  [BaseInteractionDefinition](baseinteractiondefinition.md)

**↳ ChoiceDefinition**

## Index

### Properties

* [choices](choicedefinition.md#choices)
* [correctResponsesPattern](choicedefinition.md#correctresponsespattern)
* [description](choicedefinition.md#description)
* [extensions](choicedefinition.md#extensions)
* [interactionType](choicedefinition.md#interactiontype)
* [moreInfo](choicedefinition.md#moreinfo)
* [name](choicedefinition.md#name)
* [type](choicedefinition.md#type)

---

## Properties

<a id="choices"></a>

### `<Optional>` choices

**● choices**: *[InteractionComponent](interactioncomponent.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/choice-definition.d.ts:13*

A list of the options available in the interaction for selection or ordering

___
<a id="correctresponsespattern"></a>

### `<Optional>` correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[correctResponsesPattern](baseinteractiondefinition.md#correctresponsespattern)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/choice-definition.d.ts:17*

A list of item ids delimited by \[,\]. If the response contains only one item, the delimiter MUST not be used

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

**● interactionType**: * [Choice](../enums/interactiontype.md#choice) &#124; "choice"
*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[interactionType](baseinteractiondefinition.md#interactiontype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/choice-definition.d.ts:9*

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
<a id="type"></a>

### `<Optional>` type

**● type**: *[IRL](../#irl)*

*Inherited from [ActivityDefinition](activitydefinition.md).[type](activitydefinition.md#type)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:19*

The type of Activity

___

