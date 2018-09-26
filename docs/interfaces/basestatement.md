[SMART xAPI DSL](../README.md) > [BaseStatement](../interfaces/basestatement.md)

# Interface: BaseStatement

## Hierarchy

**BaseStatement**

↳  [Statement](statement.md)

↳  [SubStatement](substatement.md)

## Index

### Properties

* [actor](basestatement.md#actor)
* [attachments](basestatement.md#attachments)
* [context](basestatement.md#context)
* [object](basestatement.md#object)
* [result](basestatement.md#result)
* [timestamp](basestatement.md#timestamp)
* [verb](basestatement.md#verb)

---

## Properties

<a id="actor"></a>

###  actor

**● actor**: *[Actor](../#actor)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:12*

The Actor defines who performed the action. The Actor of a Statement can be an Agent or a Group

___
<a id="attachments"></a>

### `<Optional>` attachments

**● attachments**: *[Attachment](attachment.md)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:38*

Headers for Attachments to the Statement

___
<a id="context"></a>

### `<Optional>` context

**● context**: *[Context](context.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:30*

Context that gives the Statement more meaning. Examples: a team the Actor is working with, altitude at which a scenario was attempted in a flight simulator.

___
<a id="object"></a>

###  object

**● object**: *`ObjectProperty`*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:21*

The Object defines the thing that was acted on. The Object of a Statement can be an Activity, Agent/Group, SubStatement, or Statement Reference

___
<a id="result"></a>

### `<Optional>` result

**● result**: *[Result](result.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:25*

An optional property that represents a measured outcome related to the Statement in which it is included

___
<a id="timestamp"></a>

### `<Optional>` timestamp

**● timestamp**: *[Timestamp](../#timestamp)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:34*

Timestamp of when the events described within this Statement occurred. Set by the LRS if not provided.

___
<a id="verb"></a>

###  verb

**● verb**: *[Verb](verb.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:16*

The Verb defines the action between an Actor and an Activity

___

