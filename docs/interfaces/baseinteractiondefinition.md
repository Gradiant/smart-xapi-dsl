[SMART xAPI DSL](../README.md) > [BaseInteractionDefinition](../interfaces/baseinteractiondefinition.md)

# Interface: BaseInteractionDefinition

## Hierarchy

 [ActivityDefinition](activitydefinition.md)

**↳ BaseInteractionDefinition**

↳  [OtherDefinition](otherdefinition.md)

↳  [ChoiceDefinition](choicedefinition.md)

↳  [LikertDefinition](likertdefinition.md)

↳  [FillInDefinition](fillindefinition.md)

↳  [NumericDefinition](numericdefinition.md)

↳  [MatchingDefinition](matchingdefinition.md)

↳  [SequenceDefinition](sequencedefinition.md)

↳  [TrueFalseDefinition](truefalsedefinition.md)

↳  [PerformanceDefinition](performancedefinition.md)

↳  [LongFillInDefinition](longfillindefinition.md)

## Index

### Properties

* [correctResponsesPattern](baseinteractiondefinition.md#correctresponsespattern)
* [description](baseinteractiondefinition.md#description)
* [extensions](baseinteractiondefinition.md#extensions)
* [interactionType](baseinteractiondefinition.md#interactiontype)
* [moreInfo](baseinteractiondefinition.md#moreinfo)
* [name](baseinteractiondefinition.md#name)
* [type](baseinteractiondefinition.md#type)

---

## Properties

<a id="correctresponsespattern"></a>

### `<Optional>` correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/base-interaction-definition.d.ts:21*

A pattern representing the correct response to the interaction. The structure of this pattern varies depending on the interactionType.

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

**● interactionType**: *[InteractionType](../enums/interactiontype.md) \| "true-false" \| "choice" \| "fill-in" \| "long-fill-in" \| "matching" \| "performance" \| "sequencing" \| "likert" \| "numeric" \| "other"*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/base-interaction-definition.d.ts:17*

The type of interaction. Possible values are:

*   `true-false`
*   `choice`
*   `fill-in`
*   `long-fill-in`
*   `matching`
*   `performance`
*   `sequencing`
*   `likert`
*   `numeric`
*   `other`

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

