[SMART xAPI DSL](../README.md) > [MboxSha1SumAgent](../interfaces/mboxsha1sumagent.md)

# Interface: MboxSha1SumAgent

## Hierarchy

↳  [BaseAgent](baseagent.md)

 [MboxSha1SumIdentifier](mboxsha1sumidentifier.md)

**↳ MboxSha1SumAgent**

## Index

### Properties

* [mbox_sha1sum](mboxsha1sumagent.md#mbox_sha1sum)
* [name](mboxsha1sumagent.md#name)
* [objectType](mboxsha1sumagent.md#objecttype)

---

## Properties

<a id="mbox_sha1sum"></a>

###  mbox_sha1sum

**● mbox_sha1sum**: *[Sha1Sum](../#sha1sum)*

*Inherited from [MboxSha1SumIdentifier](mboxsha1sumidentifier.md).[mbox_sha1sum](mboxsha1sumidentifier.md#mbox_sha1sum)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/ifi/mbox-sha1-sum-identifier.d.ts:7*

The hex-encoded SHA1 hash of a mailto IRI (i.e. the value of an mbox property). An LRS MAY include Agents with a matching hash when a request is based on an mbox.

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

