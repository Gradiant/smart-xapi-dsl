[SMART xAPI DSL](../README.md) > [SubStatement](../interfaces/substatement.md)

# Interface: SubStatement

A SubStatement is like a StatementRef in that it is included as part of a containing Statement, but unlike a StatementRef, it does not represent an event that has occurred. It can be used to describe, for example, a predication of a potential future Statement or the behavior a teacher looked for when evaluating a student (without representing the student actually doing that behavior)

## Hierarchy

 [BaseStatement](basestatement.md)

**↳ SubStatement**

## Index

### Properties

* [actor](substatement.md#actor)
* [attachments](substatement.md#attachments)
* [context](substatement.md#context)
* [object](substatement.md#object)
* [objectType](substatement.md#objecttype)
* [result](substatement.md#result)
* [timestamp](substatement.md#timestamp)
* [verb](substatement.md#verb)

---

## Properties

<a id="actor"></a>

###  actor

**● actor**: *[Actor](../#actor)*

*Inherited from [BaseStatement](basestatement.md).[actor](basestatement.md#actor)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:12*

The Actor defines who performed the action. The Actor of a Statement can be an Agent or a Group

___
<a id="attachments"></a>

### `<Optional>` attachments

**● attachments**: *[Attachment](attachment.md)[]*

*Inherited from [BaseStatement](basestatement.md).[attachments](basestatement.md#attachments)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:38*

Headers for Attachments to the Statement

___
<a id="context"></a>

### `<Optional>` context

**● context**: *[Context](context.md)*

*Inherited from [BaseStatement](basestatement.md).[context](basestatement.md#context)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:30*

Context that gives the Statement more meaning. Examples: a team the Actor is working with, altitude at which a scenario was attempted in a flight simulator.

___
<a id="object"></a>

###  object

**● object**: *[ActorObject](../#actorobject) \| [Activity](../#activity) \| [StatementRef](statementref.md)*

*Overrides [BaseStatement](basestatement.md).[object](basestatement.md#object)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/sub-statement.d.ts:12*

___
<a id="objecttype"></a>

###  objectType

**● objectType**: *"SubStatement"*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/sub-statement.d.ts:11*

___
<a id="result"></a>

### `<Optional>` result

**● result**: *[Result](result.md)*

*Inherited from [BaseStatement](basestatement.md).[result](basestatement.md#result)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:25*

An optional property that represents a measured outcome related to the Statement in which it is included

___
<a id="timestamp"></a>

### `<Optional>` timestamp

**● timestamp**: *[Timestamp](../#timestamp)*

*Inherited from [BaseStatement](basestatement.md).[timestamp](basestatement.md#timestamp)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:34*

Timestamp of when the events described within this Statement occurred. Set by the LRS if not provided.

___
<a id="verb"></a>

###  verb

**● verb**: *[Verb](verb.md)*

*Inherited from [BaseStatement](basestatement.md).[verb](basestatement.md#verb)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:16*

The Verb defines the action between an Actor and an Activity

___

