[SMART xAPI DSL](../README.md) > [Statement](../interfaces/statement.md)

# Interface: Statement

## Hierarchy

 [BaseStatement](basestatement.md)

**↳ Statement**

## Index

### Properties

* [actor](statement.md#actor)
* [attachments](statement.md#attachments)
* [authority](statement.md#authority)
* [context](statement.md#context)
* [id](statement.md#id)
* [object](statement.md#object)
* [result](statement.md#result)
* [stored](statement.md#stored)
* [timestamp](statement.md#timestamp)
* [verb](statement.md#verb)
* [version](statement.md#version)

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
<a id="authority"></a>

### `<Optional>` authority

**● authority**: *[Actor](../#actor)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/statement.d.ts:19*

Agent or Group who is asserting this Statement is true. Verified by the LRS based on authentication. Set by LRS if not provided or if a strong trust relationship between the Learning Record Provider and LRS has not been established.

___
<a id="context"></a>

### `<Optional>` context

**● context**: *[Context](context.md)*

*Inherited from [BaseStatement](basestatement.md).[context](basestatement.md#context)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:30*

Context that gives the Statement more meaning. Examples: a team the Actor is working with, altitude at which a scenario was attempted in a flight simulator.

___
<a id="id"></a>

### `<Optional>` id

**● id**: *[UUID](../#uuid)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/statement.d.ts:8*

A UUID (all versions of variant 2 in RFC 4122 are valid, and the UUID MUST be in standard string form).

___
<a id="object"></a>

###  object

**● object**: *`ObjectProperty`*

*Inherited from [BaseStatement](basestatement.md).[object](basestatement.md#object)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:21*

The Object defines the thing that was acted on. The Object of a Statement can be an Activity, Agent/Group, SubStatement, or Statement Reference

___
<a id="result"></a>

### `<Optional>` result

**● result**: *[Result](result.md)*

*Inherited from [BaseStatement](basestatement.md).[result](basestatement.md#result)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/base-statement.d.ts:25*

An optional property that represents a measured outcome related to the Statement in which it is included

___
<a id="stored"></a>

### `<Optional>` stored

**● stored**: *[Timestamp](../#timestamp)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/statement.d.ts:14*

Timestamp of when this Statement was recorded. Set by LRS.

In ISO-8601 format. Set by the LRS.

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
<a id="version"></a>

### `<Optional>` version

**● version**: *[Version](../#version)*

*Defined in node_modules/@gradiant/xapi-dsl/types/statement/statement.d.ts:23*

The Statement’s associated xAPI version, formatted according to Semantic Versioning 1.0.0.

___

