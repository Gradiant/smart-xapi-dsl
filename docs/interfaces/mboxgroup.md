[SMART xAPI DSL](../README.md) > [MboxGroup](../interfaces/mboxgroup.md)

# Interface: MboxGroup

## Hierarchy

↳  [BaseGroup](basegroup.md)

 [MboxIdentifier](mboxidentifier.md)

**↳ MboxGroup**

## Index

### Properties

* [mbox](mboxgroup.md#mbox)
* [member](mboxgroup.md#member)
* [name](mboxgroup.md#name)
* [objectType](mboxgroup.md#objecttype)

---

## Properties

<a id="mbox"></a>

###  mbox

**● mbox**: *[MailtoIRI](../#mailtoiri)*

*Inherited from [MboxIdentifier](mboxidentifier.md).[mbox](mboxidentifier.md#mbox)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/ifi/mbox-identifier.d.ts:7*

The required format is "mailto:email address". Only email addresses that have only ever been and will ever be assigned to this Agent, but no others, SHOULD be used for this property and mbox\_sha1sum.

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

