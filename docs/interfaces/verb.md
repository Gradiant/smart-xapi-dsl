[SMART xAPI DSL](../README.md) > [Verb](../interfaces/verb.md)

# Interface: Verb

The Verb in an xAPI Statement describes the action performed during the learning experience. The xAPI does not specify any particular Verbs. (With one exception, namely the reserved Verb [http://adlnet.gov/expapi/verbs/voided)](http://adlnet.gov/expapi/verbs/voided)). Instead, it defines how to create Verbs so that communities of practice can establish Verbs meaningful to their members and make them available for use by anyone. A predefined list of Verbs would be limited by definition and might not be able to effectively capture all possible future learning experiences.

*   A system reading a Statement MUST use the Verb IRI to infer meaning.
*   The IRI contained in an id SHOULD contain a human-readable portion which SHOULD provide meaning enough for a person reviewing the raw statement to disambiguate the Verb from other similar (in syntax) Verbs.
*   A single Verb IRI MUST NOT be used to refer to multiple meanings.

## Hierarchy

**Verb**

## Index

### Properties

* [display](verb.md#display)
* [id](verb.md#id)

---

## Properties

<a id="display"></a>

### `<Optional>` display

**● display**: *[LanguageMap](languagemap.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/verb/verb.d.ts:23*

The human readable representation of the Verb in one or more languages. This does not have any impact on the meaning of the Statement, but serves to give a human-readable display of the meaning already determined by the chosen Verb.

___
<a id="id"></a>

###  id

**● id**: *[IRI](../#iri)*

*Defined in node_modules/@gradiant/xapi-dsl/types/verb/verb.d.ts:18*

Corresponds to a Verb definition. Each Verb definition corresponds to the meaning of a Verb, not the word.

___

