[SMART xAPI DSL](../README.md) > [AnonymousGroup](../interfaces/anonymousgroup.md)

# Interface: AnonymousGroup

An Anonymous Group is used describe a cluster of people where there is no ready identifier for this cluster, e.g. an ad hoc team

*   An Anonymous Group MUST include a "member" property listing constituent Agents.
*   An Anonymous Group MUST NOT contain Group Objects in the "member" identifiers.

## Hierarchy

↳  [BaseGroup](basegroup.md)

**↳ AnonymousGroup**

## Index

### Properties

* [member](anonymousgroup.md#member)
* [name](anonymousgroup.md#name)
* [objectType](anonymousgroup.md#objecttype)

---

## Properties

<a id="member"></a>

###  member

**● member**: *[Agent](../#agent)[]*

*Overrides [BaseGroup](basegroup.md).[member](basegroup.md#member)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/anonymous-group.d.ts:10*

___
<a id="name"></a>

### `<Optional>` name

**● name**: * `undefined` &#124; `string`
*

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

