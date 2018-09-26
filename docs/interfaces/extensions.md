[SMART xAPI DSL](../README.md) > [Extensions](../interfaces/extensions.md)

# Interface: Extensions

Extensions are available as part of Activity Definitions, as part of a Statement's "context" property, or as part of a Statement's "result" property. In each case, extensions are intended to provide a natural way to extend those properties for some specialized use. The contents of these extensions might be something valuable to just one application, or it might be a convention used by an entire Community of Practice

Extensions are defined by a map and logically relate to the part of the Statement where they are present. The values of an extension can be any JSON value or data structure. Extensions in the "context" property provide context to the core experience, while those in the "result" property provide elements related to some outcome. Within Activities, extensions provide additional information that helps define an Activity within some custom application or Community of Practice. The meaning and structure of extension values under an IRI key are defined by the person who controls the IRI.

*   The keys of an extensions map MUST be IRIs.
*   An LRS MUST NOT reject a Statement based on the values of the extensions map.
*   Learning Record Providers SHOULD always strive to map as much information as possible into the built-in elements in order to leverage interoperability among Experience API conformant tools.
*   All extension IRIs SHOULD have controllers.
*   The controller of an IRL extension key SHOULD make a human-readable description of the intended meaning of the extension supported by the IRL accessible at the IRL.

## Hierarchy

**Extensions**

## Indexable

\[key: `string`\]:&nbsp;`any`
Extensions are available as part of Activity Definitions, as part of a Statement's "context" property, or as part of a Statement's "result" property. In each case, extensions are intended to provide a natural way to extend those properties for some specialized use. The contents of these extensions might be something valuable to just one application, or it might be a convention used by an entire Community of Practice

Extensions are defined by a map and logically relate to the part of the Statement where they are present. The values of an extension can be any JSON value or data structure. Extensions in the "context" property provide context to the core experience, while those in the "result" property provide elements related to some outcome. Within Activities, extensions provide additional information that helps define an Activity within some custom application or Community of Practice. The meaning and structure of extension values under an IRI key are defined by the person who controls the IRI.

*   The keys of an extensions map MUST be IRIs.
*   An LRS MUST NOT reject a Statement based on the values of the extensions map.
*   Learning Record Providers SHOULD always strive to map as much information as possible into the built-in elements in order to leverage interoperability among Experience API conformant tools.
*   All extension IRIs SHOULD have controllers.
*   The controller of an IRL extension key SHOULD make a human-readable description of the intended meaning of the extension supported by the IRL accessible at the IRL.

## Index

---

