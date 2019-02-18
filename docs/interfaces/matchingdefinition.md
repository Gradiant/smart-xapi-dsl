[SMART xAPI DSL](../README.md) > [MatchingDefinition](../interfaces/matchingdefinition.md)

# Interface: MatchingDefinition

An interaction where the learner is asked to match items in one set (the source set) to items in another set (the target set). Items do not have to pair off exactly and it is possible for multiple or zero source items to be matched to a given target and vice versa

## Hierarchy

↳  [BaseInteractionDefinition](baseinteractiondefinition.md)

**↳ MatchingDefinition**

## Index

### Properties

* [correctResponsesPattern](matchingdefinition.md#correctresponsespattern)
* [description](matchingdefinition.md#description)
* [extensions](matchingdefinition.md#extensions)
* [interactionType](matchingdefinition.md#interactiontype)
* [moreInfo](matchingdefinition.md#moreinfo)
* [name](matchingdefinition.md#name)
* [source](matchingdefinition.md#source)
* [target](matchingdefinition.md#target)
* [type](matchingdefinition.md#type)

---

## Properties

<a id="correctresponsespattern"></a>

### `<Optional>` correctResponsesPattern

**● correctResponsesPattern**: *`string`[]*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[correctResponsesPattern](baseinteractiondefinition.md#correctresponsespattern)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/matching-definition.d.ts:22*

A list of matching pairs, where each pair consists of a source item id followed by a target item id. Items can appear in multiple (or zero) pairs. Items within a pair are delimited by \[.\]. Pairs are delimited by \[,\]

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

**● interactionType**: *[Matching](../enums/interactiontype.md#matching) \| "matching"*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[interactionType](baseinteractiondefinition.md#interactiontype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/matching-definition.d.ts:9*

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
<a id="source"></a>

### `<Optional>` source

**● source**: *[InteractionComponent](interactioncomponent.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/matching-definition.d.ts:13*

Lists of sources to be matched

___
<a id="target"></a>

### `<Optional>` target

**● target**: *[InteractionComponent](interactioncomponent.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/matching-definition.d.ts:17*

Lists of targets to be matched

___
<a id="type"></a>

### `<Optional>` type

**● type**: *[IRL](../#irl)*

*Inherited from [ActivityDefinition](activitydefinition.md).[type](activitydefinition.md#type)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:19*

The type of Activity

___

