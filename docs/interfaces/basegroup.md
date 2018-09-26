[SMART xAPI DSL](../README.md) > [BaseGroup](../interfaces/basegroup.md)

# Interface: BaseGroup

## Hierarchy

 [BaseActor](baseactor.md)

**↳ BaseGroup**

↳  [AnonymousGroup](anonymousgroup.md)

↳  [AccountGroup](accountgroup.md)

↳  [MboxGroup](mboxgroup.md)

↳  [MboxSha1SumGroup](mboxsha1sumgroup.md)

↳  [OpenIdGroup](openidgroup.md)

## Index

### Properties

* [member](basegroup.md#member)
* [name](basegroup.md#name)
* [objectType](basegroup.md#objecttype)

---

## Properties

<a id="member"></a>

### `<Optional>` member

**● member**: *[Agent](../#agent)[]*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/base-group.d.ts:8*

The members of this Group. This is an unordered list

___
<a id="name"></a>

### `<Optional>` name

**● name**: * `undefined` &#124; `string`
*

*Overrides [BaseActor](baseactor.md).[name](baseactor.md#name)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/base-group.d.ts:12*

Name of the Group

___
<a id="objecttype"></a>

###  objectType

**● objectType**: *"Group"*

*Overrides [BaseActor](baseactor.md).[objectType](baseactor.md#objecttype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/base-group.d.ts:4*

___

