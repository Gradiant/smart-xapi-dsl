[SMART xAPI DSL](../README.md) > [FillInDefinition](../interfaces/fillindefinition.md)

# Interface: FillInDefinition

An interaction which requires the learner to supply a short response in the form of one or more strings of characters. Typically, the correct response consists of part of a word, one word or a few words. "Short" means that the correct responses pattern and learner response strings will normally be 250 characters or less

## Hierarchy

↳  [BaseInteractionDefinition](baseinteractiondefinition.md)

**↳ FillInDefinition**

## Index

### Properties

* [correctResponsesPattern](fillindefinition.md#correctresponsespattern)
* [description](fillindefinition.md#description)
* [extensions](fillindefinition.md#extensions)
* [interactionType](fillindefinition.md#interactiontype)
* [moreInfo](fillindefinition.md#moreinfo)
* [name](fillindefinition.md#name)
* [type](fillindefinition.md#type)

---

## Properties

<a id="correctresponsespattern"></a>

### `<Optional>` correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[correctResponsesPattern](baseinteractiondefinition.md#correctresponsespattern)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/fill-in-definition.d.ts:13*

A list of responses delimited by \[,\]. If the response contains only one item, the delimiter MUST not be used

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

**● interactionType**: * [FillIn](../enums/interactiontype.md#fillin) &#124; "fill-in"
*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[interactionType](baseinteractiondefinition.md#interactiontype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/fill-in-definition.d.ts:9*

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

