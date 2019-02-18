[SMART xAPI DSL](../README.md) > [OpenIdGroup](../interfaces/openidgroup.md)

# Interface: OpenIdGroup

## Hierarchy

↳  [BaseGroup](basegroup.md)

 [OpenIdIdentifier](openididentifier.md)

**↳ OpenIdGroup**

## Index

### Properties

* [member](openidgroup.md#member)
* [name](openidgroup.md#name)
* [objectType](openidgroup.md#objecttype)
* [openid](openidgroup.md#openid)

---

## Properties

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
<a id="openid"></a>

###  openid

**● openid**: *[URI](../#uri)*

*Inherited from [OpenIdIdentifier](openididentifier.md).[openid](openididentifier.md#openid)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/ifi/openid-identifier.d.ts:6*

An openID that uniquely identifies the Agent. Ir must be an URI

___

