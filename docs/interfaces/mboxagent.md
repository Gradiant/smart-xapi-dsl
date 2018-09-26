[SMART xAPI DSL](../README.md) > [MboxAgent](../interfaces/mboxagent.md)

# Interface: MboxAgent

## Hierarchy

↳  [BaseAgent](baseagent.md)

 [MboxIdentifier](mboxidentifier.md)

**↳ MboxAgent**

## Index

### Properties

* [mbox](mboxagent.md#mbox)
* [name](mboxagent.md#name)
* [objectType](mboxagent.md#objecttype)

---

## Properties

<a id="mbox"></a>

###  mbox

**● mbox**: *[MailtoIRI](../#mailtoiri)*

*Inherited from [MboxIdentifier](mboxidentifier.md).[mbox](mboxidentifier.md#mbox)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/ifi/mbox-identifier.d.ts:7*

The required format is "mailto:email address". Only email addresses that have only ever been and will ever be assigned to this Agent, but no others, SHOULD be used for this property and mbox_sha1sum.

___
<a id="name"></a>

### `<Optional>` name

**● name**: * `undefined` &#124; `string`
*

*Inherited from [BaseActor](baseactor.md).[name](baseactor.md#name)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/base-actor.d.ts:9*

Full name of the Agent

___
<a id="objecttype"></a>

### `<Optional>` objectType

**● objectType**: * `undefined` &#124; "Agent"
*

*Inherited from [BaseAgent](baseagent.md).[objectType](baseagent.md#objecttype)*

*Overrides [BaseActor](baseactor.md).[objectType](baseactor.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/agent/base-agent.d.ts:3*

___

