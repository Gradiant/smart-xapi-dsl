[SMART xAPI DSL](../README.md) > [Context](../interfaces/context.md)

# Interface: Context

An optional property that provides a place to add contextual information to a Statement. All "context" properties are optional.

The "context" property provides a place to add some contextual information to a Statement. It can store information such as the instructor for an experience, if this experience happened as part of a team-based Activity, or how an experience fits into some broader activity.

## Hierarchy

**Context**

## Index

### Properties

* [contextActivities](context.md#contextactivities)
* [extensions](context.md#extensions)
* [instructor](context.md#instructor)
* [language](context.md#language)
* [platform](context.md#platform)
* [registration](context.md#registration)
* [revision](context.md#revision)
* [statement](context.md#statement)
* [team](context.md#team)

---

## Properties

<a id="contextactivities"></a>

### `<Optional>` contextActivities

**● contextActivities**: *[ContextActivities](contextactivities.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/context/context.d.ts:33*

A map of the types of learning activity context that this Statement is related to. Valid context types are:

*   `parent`
*   `grouping`
*   `category`
*   `other`

___
<a id="extensions"></a>

### `<Optional>` extensions

**● extensions**: *[Extensions](extensions.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/context/context.d.ts:56*

A map of any other domain-specific context relevant to this Statement. For example, in a flight simulator altitude, airspeed, wind, attitude, GPS coordinates might all be relevant

___
<a id="instructor"></a>

### `<Optional>` instructor

**● instructor**: *[Actor](../#actor)*

*Defined in node_modules/@gradiant/xapi-dsl/types/context/context.d.ts:21*

Instructor that the Statement relates to, if not included as the Actor of the Statement

___
<a id="language"></a>

### `<Optional>` language

**● language**: *`undefined` \| `string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/context/context.d.ts:47*

Code representing the language in which the experience being recorded in this Statement (mainly) occurred in, if applicable and known

It must be formatted according RFC-5646

___
<a id="platform"></a>

### `<Optional>` platform

**● platform**: *`undefined` \| `string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/context/context.d.ts:41*

Platform used in the experience of this learning activity

___
<a id="registration"></a>

### `<Optional>` registration

**● registration**: *[UUID](../#uuid)*

*Defined in node_modules/@gradiant/xapi-dsl/types/context/context.d.ts:17*

The registration that the Statement is associated with.

___
<a id="revision"></a>

### `<Optional>` revision

**● revision**: *`undefined` \| `string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/context/context.d.ts:37*

Revision of the learning activity associated with this Statement. Format is free

___
<a id="statement"></a>

### `<Optional>` statement

**● statement**: *[StatementRef](statementref.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/context/context.d.ts:51*

Another Statement to be considered as context for this Statement

___
<a id="team"></a>

### `<Optional>` team

**● team**: *[Group](../#group)*

*Defined in node_modules/@gradiant/xapi-dsl/types/context/context.d.ts:25*

Team that this Statement relates to, if not included as the Actor of the Statement

___

