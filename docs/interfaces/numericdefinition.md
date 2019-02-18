[SMART xAPI DSL](../README.md) > [NumericDefinition](../interfaces/numericdefinition.md)

# Interface: NumericDefinition

Any interaction which requires a numeric response from the learner

## Hierarchy

↳  [BaseInteractionDefinition](baseinteractiondefinition.md)

**↳ NumericDefinition**

## Index

### Properties

* [correctResponsesPattern](numericdefinition.md#correctresponsespattern)
* [description](numericdefinition.md#description)
* [extensions](numericdefinition.md#extensions)
* [interactionType](numericdefinition.md#interactiontype)
* [moreInfo](numericdefinition.md#moreinfo)
* [name](numericdefinition.md#name)
* [type](numericdefinition.md#type)

---

## Properties

<a id="correctresponsespattern"></a>

### `<Optional>` correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[correctResponsesPattern](baseinteractiondefinition.md#correctresponsespattern)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/numeric-definition.d.ts:14*

A range of numbers represented by a minimum and a maximum delimited by \[:\]. Where the range does not have a maximum or does not have a minimum, that number is omitted but the delimiter is still used. E.g. \[:\]4 indicates a maximum for 4 and no minimum. Where the correct response or learner's response is a single number rather than a range, the single number with no delimiter MAY be used.

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

**● interactionType**: *[Numeric](../enums/interactiontype.md#numeric) \| "numeric"*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[interactionType](baseinteractiondefinition.md#interactiontype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/numeric-definition.d.ts:7*

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

