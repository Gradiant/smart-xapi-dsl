[SMART xAPI DSL](../README.md) > [ActivityDefinition](../interfaces/activitydefinition.md)

# Interface: ActivityDefinition

Activity metadata

## Hierarchy

**ActivityDefinition**

↳  [BaseInteractionDefinition](baseinteractiondefinition.md)

## Index

### Properties

* [description](activitydefinition.md#description)
* [extensions](activitydefinition.md#extensions)
* [moreInfo](activitydefinition.md#moreinfo)
* [name](activitydefinition.md#name)
* [type](activitydefinition.md#type)

---

## Properties

<a id="description"></a>

### `<Optional>` description

**● description**: *[LanguageMap](languagemap.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:14*

A description of the Activity

___
<a id="extensions"></a>

### `<Optional>` extensions

**● extensions**: *[Extensions](extensions.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:29*

A map of other properties as needed

___
<a id="moreinfo"></a>

### `<Optional>` moreInfo

**● moreInfo**: *[IRL](../#irl)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:25*

Resolves to a document with human-readable information about the Activity, which could include a way to launch the definitions.

It must be an IRL

___
<a id="name"></a>

### `<Optional>` name

**● name**: *[LanguageMap](languagemap.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:10*

The human readable/visual name of the Activity

___
<a id="type"></a>

### `<Optional>` type

**● type**: *[IRL](../#irl)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity-definition.d.ts:19*

The type of Activity

___

