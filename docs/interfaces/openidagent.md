[SMART xAPI DSL](../README.md) > [OpenIdAgent](../interfaces/openidagent.md)

# Interface: OpenIdAgent

## Hierarchy

↳  [BaseAgent](baseagent.md)

 [OpenIdIdentifier](openididentifier.md)

**↳ OpenIdAgent**

## Index

### Properties

* [name](openidagent.md#name)
* [objectType](openidagent.md#objecttype)
* [openid](openidagent.md#openid)

---

## Properties

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
<a id="openid"></a>

###  openid

**● openid**: *[URI](../#uri)*

*Inherited from [OpenIdIdentifier](openididentifier.md).[openid](openididentifier.md#openid)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/ifi/openid-identifier.d.ts:6*

An openID that uniquely identifies the Agent. Ir must be an URI

___

