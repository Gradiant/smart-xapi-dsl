[SMART xAPI DSL](../README.md) > [LongFillInDefinition](../interfaces/longfillindefinition.md)

# Interface: LongFillInDefinition

An interaction which requires the learner to supply a response in the form of a long string of characters. "Long" means that the correct responses pattern and learner response strings will normally be more than 250 characters

## Hierarchy

↳  [BaseInteractionDefinition](baseinteractiondefinition.md)

**↳ LongFillInDefinition**

## Index

### Properties

* [correctResponsesPattern](longfillindefinition.md#correctresponsespattern)
* [description](longfillindefinition.md#description)
* [extensions](longfillindefinition.md#extensions)
* [interactionType](longfillindefinition.md#interactiontype)
* [moreInfo](longfillindefinition.md#moreinfo)
* [name](longfillindefinition.md#name)
* [type](longfillindefinition.md#type)

---

## Properties

<a id="correctresponsespattern"></a>

### `<Optional>` correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[correctResponsesPattern](baseinteractiondefinition.md#correctresponsespattern)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/long-fill-in-definition.d.ts:12*

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

**● interactionType**: * [LongFillIn](../enums/interactiontype.md#longfillin) &#124; "long-fill-in"
*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[interactionType](baseinteractiondefinition.md#interactiontype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/long-fill-in-definition.d.ts:8*

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

