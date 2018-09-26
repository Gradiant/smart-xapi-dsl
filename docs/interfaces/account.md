[SMART xAPI DSL](../README.md) > [Account](../interfaces/account.md)

# Interface: Account

A user account on an existing system, such as a private system (LMS or intranet) or a public system (social networking site)

*   If the system that provides the account Object uses OpenID, the Learning Record Provider SHOULD use the openid property instead of an account Object.
*   If the Learning Record Provider is concerned about revealing personally identifiable information about an Agent or Group, it SHOULD use an opaque account name (for example an account number) to identify all Statements about a person while maintaining anonymity.

## Hierarchy

**Account**

## Index

### Properties

* [homePage](account.md#homepage)
* [name](account.md#name)

---

## Properties

<a id="homepage"></a>

###  homePage

**● homePage**: *[IRL](../#irl)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/account/account.d.ts:14*

The canonical home page for the system the account is on. This is based on FOAF's accountServiceHomePage.

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/account/account.d.ts:18*

The unique id or name used to log in to this account. This is based on FOAF's accountName.

___

