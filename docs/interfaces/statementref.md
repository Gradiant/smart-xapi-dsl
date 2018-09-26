[SMART xAPI DSL](../README.md) > [StatementRef](../interfaces/statementref.md)

# Interface: StatementRef

A Statement Reference is a pointer to another pre-existing Statement.

*   A Statement Reference MUST specify an "objectType" property with the value StatementRef.
*   A Statement Reference MUST set the "id" property to the UUID of a Statement. There is no requirement for the LRS to validate that the UUID matches a Statement that exists.

## Hierarchy

**StatementRef**

## Index

### Properties

* [id](statementref.md#id)
* [objectType](statementref.md#objecttype)

---

## Properties

<a id="id"></a>

###  id

**● id**: *[UUID](../#uuid)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/statement-ref.d.ts:14*

The UUID of a Statement.

___
<a id="objecttype"></a>

###  objectType

**● objectType**: *"StatementRef"*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/statement-ref.d.ts:10*

___

