[SMART xAPI DSL](../README.md) > [Attachment](../interfaces/attachment.md)

# Interface: Attachment

## Hierarchy

**Attachment**

## Index

### Properties

* [contentType](attachment.md#contenttype)
* [description](attachment.md#description)
* [display](attachment.md#display)
* [fileUrl](attachment.md#fileurl)
* [length](attachment.md#length)
* [sha2](attachment.md#sha2)
* [usageType](attachment.md#usagetype)

---

## Properties

<a id="contenttype"></a>

###  contentType

**● contentType**: *[InternetMediaType](../#internetmediatype)*

*Defined in node_modules/@gradiant/xapi-dsl/types/attachment/attachment.d.ts:20*

The content type of the Attachment

___
<a id="description"></a>

### `<Optional>` description

**● description**: *[LanguageMap](languagemap.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/attachment/attachment.d.ts:16*

A description of the Attachment

___
<a id="display"></a>

###  display

**● display**: *[LanguageMap](languagemap.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/attachment/attachment.d.ts:12*

Display name (title) of this Attachment

___
<a id="fileurl"></a>

### `<Optional>` fileUrl

**● fileUrl**: *[IRL](../#irl)*

*Defined in node_modules/@gradiant/xapi-dsl/types/attachment/attachment.d.ts:32*

An IRL at which the Attachment data can be retrieved, or from which it used to be retrievable

___
<a id="length"></a>

###  length

**● length**: *[Integer](../#integer)*

*Defined in node_modules/@gradiant/xapi-dsl/types/attachment/attachment.d.ts:24*

The length of the Attachment data in octets.

___
<a id="sha2"></a>

###  sha2

**● sha2**: *[Sha2Sum](../#sha2sum)*

*Defined in node_modules/@gradiant/xapi-dsl/types/attachment/attachment.d.ts:28*

The SHA-2 hash of the Attachment data. This property is always required, even if fileURL is also specified

___
<a id="usagetype"></a>

###  usageType

**● usageType**: *[IRI](../#iri)*

*Defined in node_modules/@gradiant/xapi-dsl/types/attachment/attachment.d.ts:8*

Identifies the usage of this Attachment. For example: one expected use case for Attachments is to include a "completion certificate". An IRI corresponding to this usage MUST be coined, and used with completion certificate attachments

___

