[SMART xAPI DSL](../README.md) > [MboxSha1SumGroup](../interfaces/mboxsha1sumgroup.md)

# Interface: MboxSha1SumGroup

## Hierarchy

↳  [BaseGroup](basegroup.md)

 [MboxSha1SumIdentifier](mboxsha1sumidentifier.md)

**↳ MboxSha1SumGroup**

## Index

### Properties

* [mbox_sha1sum](mboxsha1sumgroup.md#mbox_sha1sum)
* [member](mboxsha1sumgroup.md#member)
* [name](mboxsha1sumgroup.md#name)
* [objectType](mboxsha1sumgroup.md#objecttype)

---

## Properties

<a id="mbox_sha1sum"></a>

###  mbox_sha1sum

**● mbox_sha1sum**: *[Sha1Sum](../#sha1sum)*

*Inherited from [MboxSha1SumIdentifier](mboxsha1sumidentifier.md).[mbox_sha1sum](mboxsha1sumidentifier.md#mbox_sha1sum)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/ifi/mbox-sha1-sum-identifier.d.ts:7*

The hex-encoded SHA1 hash of a mailto IRI (i.e. the value of an mbox property). An LRS MAY include Agents with a matching hash when a request is based on an mbox.

___
<a id="member"></a>

### `<Optional>` member

**● member**: *[Agent](../#agent)[]*

*Inherited from [BaseGroup](basegroup.md).[member](basegroup.md#member)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/base-group.d.ts:8*

The members of this Group. This is an unordered list

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`undefined` \| `string`*

*Inherited from [BaseGroup](basegroup.md).[name](basegroup.md#name)*

*Overrides [BaseActor](baseactor.md).[name](baseactor.md#name)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/base-group.d.ts:12*

Name of the Group

___
<a id="objecttype"></a>

###  objectType

**● objectType**: *"Group"*

*Inherited from [BaseGroup](basegroup.md).[objectType](basegroup.md#objecttype)*

*Overrides [BaseActor](baseactor.md).[objectType](baseactor.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/base-group.d.ts:4*

___

