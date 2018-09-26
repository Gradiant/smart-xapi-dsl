[SMART xAPI DSL](../README.md) > [TrueFalseDefinition](../interfaces/truefalsedefinition.md)

# Interface: TrueFalseDefinition

An interaction with two possible responses: `true` or `false`

## Hierarchy

↳  [BaseInteractionDefinition](baseinteractiondefinition.md)

**↳ TrueFalseDefinition**

## Index

### Properties

* [correctResponsesPattern](truefalsedefinition.md#correctresponsespattern)
* [description](truefalsedefinition.md#description)
* [extensions](truefalsedefinition.md#extensions)
* [interactionType](truefalsedefinition.md#interactiontype)
* [moreInfo](truefalsedefinition.md#moreinfo)
* [name](truefalsedefinition.md#name)
* [type](truefalsedefinition.md#type)

---

## Properties

<a id="correctresponsespattern"></a>

### `<Optional>` correctResponsesPattern

**● correctResponsesPattern**: * ["true"] &#124; ["false"]
*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[correctResponsesPattern](baseinteractiondefinition.md#correctresponsespattern)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/true-false-definition.d.ts:11*

Either true or false

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

**● interactionType**: * [TrueFalse](../enums/interactiontype.md#truefalse) &#124; "true-false"
*

*Overrides [BaseInteractionDefinition](baseinteractiondefinition.md).[interactionType](baseinteractiondefinition.md#interactiontype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/true-false-definition.d.ts:7*

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

