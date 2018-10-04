
#  SMART xAPI DSL

## Index

### Modules

* [acrossx](modules/acrossx.md)
* [activityStream](modules/activitystream.md)
* [adl](modules/adl.md)
* [audioVideoTypes](modules/audiovideotypes.md)
* [bookTypes](modules/booktypes.md)
* [categories](modules/categories.md)
* [closedResponseTypes](modules/closedresponsetypes.md)
* [discussionTypes](modules/discussiontypes.md)
* [extensions](modules/extensions.md)
* [gradiant](modules/gradiant.md)
* [in2it](modules/in2it.md)
* [nonInteractiveTypes](modules/noninteractivetypes.md)
* [openAnswerTypes](modules/openanswertypes.md)
* [qti](modules/qti.md)
* [recipes](modules/recipes.md)
* [smart](modules/smart.md)
* [tincan](modules/tincan.md)
* [verbs](modules/verbs.md)

### Enumerations

* [InteractionType](enums/interactiontype.md)

### Interfaces

* [Account](interfaces/account.md)
* [AccountAgent](interfaces/accountagent.md)
* [AccountGroup](interfaces/accountgroup.md)
* [AccountIdentifier](interfaces/accountidentifier.md)
* [ActivityDefinition](interfaces/activitydefinition.md)
* [AnonymousGroup](interfaces/anonymousgroup.md)
* [Attachment](interfaces/attachment.md)
* [BaseActivity](interfaces/baseactivity.md)
* [BaseActor](interfaces/baseactor.md)
* [BaseAgent](interfaces/baseagent.md)
* [BaseGroup](interfaces/basegroup.md)
* [BaseInteractionDefinition](interfaces/baseinteractiondefinition.md)
* [BaseStatement](interfaces/basestatement.md)
* [ChoiceActivity](interfaces/choiceactivity.md)
* [ChoiceDefinition](interfaces/choicedefinition.md)
* [Context](interfaces/context.md)
* [ContextActivities](interfaces/contextactivities.md)
* [Extensions](interfaces/extensions.md)
* [FillInActivity](interfaces/fillinactivity.md)
* [FillInDefinition](interfaces/fillindefinition.md)
* [InteractionComponent](interfaces/interactioncomponent.md)
* [LanguageMap](interfaces/languagemap.md)
* [LikertActivity](interfaces/likertactivity.md)
* [LikertDefinition](interfaces/likertdefinition.md)
* [LongFillInActvity](interfaces/longfillinactvity.md)
* [LongFillInDefinition](interfaces/longfillindefinition.md)
* [MatchingActivity](interfaces/matchingactivity.md)
* [MatchingDefinition](interfaces/matchingdefinition.md)
* [MboxAgent](interfaces/mboxagent.md)
* [MboxGroup](interfaces/mboxgroup.md)
* [MboxIdentifier](interfaces/mboxidentifier.md)
* [MboxSha1SumAgent](interfaces/mboxsha1sumagent.md)
* [MboxSha1SumGroup](interfaces/mboxsha1sumgroup.md)
* [MboxSha1SumIdentifier](interfaces/mboxsha1sumidentifier.md)
* [NumericActivity](interfaces/numericactivity.md)
* [NumericDefinition](interfaces/numericdefinition.md)
* [OpenIdAgent](interfaces/openidagent.md)
* [OpenIdGroup](interfaces/openidgroup.md)
* [OpenIdIdentifier](interfaces/openididentifier.md)
* [OtherActivity](interfaces/otheractivity.md)
* [OtherDefinition](interfaces/otherdefinition.md)
* [PerformanceActivity](interfaces/performanceactivity.md)
* [PerformanceDefinition](interfaces/performancedefinition.md)
* [Result](interfaces/result.md)
* [Score](interfaces/score.md)
* [SequenceActivity](interfaces/sequenceactivity.md)
* [SequenceDefinition](interfaces/sequencedefinition.md)
* [Statement](interfaces/statement.md)
* [StatementRef](interfaces/statementref.md)
* [SubStatement](interfaces/substatement.md)
* [TrueFalseActivity](interfaces/truefalseactivity.md)
* [TrueFalseDefinition](interfaces/truefalsedefinition.md)
* [Verb](interfaces/verb.md)
* [VerbLike](interfaces/verblike.md)

### Type aliases

* [Activity](#activity)
* [ActivityTypeChecker](#activitytypechecker)
* [Actor](#actor)
* [ActorObject](#actorobject)
* [Agent](#agent)
* [AttemptActivityType](#attemptactivitytype)
* [AudioActivityType](#audioactivitytype)
* [AudioVideoType](#audiovideotype)
* [ClosedResponseType](#closedresponsetype)
* [DiscussionActivityType](#discussionactivitytype)
* [DropDownChoiceActivityType](#dropdownchoiceactivitytype)
* [Duration](#duration)
* [EssayActivityType](#essayactivitytype)
* [FillInTheGapsActivityType](#fillinthegapsactivitytype)
* [ForumReplyActivityType](#forumreplyactivitytype)
* [ForumTopicActivityType](#forumtopicactivitytype)
* [GenericClosedResponseActivityType](#genericclosedresponseactivitytype)
* [GenericOpenAnswerActivityType](#genericopenansweractivitytype)
* [Group](#group)
* [IRI](#iri)
* [IRL](#irl)
* [IdentifiedGroup](#identifiedgroup)
* [Integer](#integer)
* [InteractionActivity](#interactionactivity)
* [InteractionDefinition](#interactiondefinition)
* [InternetMediaType](#internetmediatype)
* [InverseFunctionalIdentifier](#inversefunctionalidentifier)
* [MailtoIRI](#mailtoiri)
* [MatchingPairsActivityType](#matchingpairsactivitytype)
* [MultipleChoiceActivityType](#multiplechoiceactivitytype)
* [NonInteractiveAttemptActivityType](#noninteractiveattemptactivitytype)
* [NonInteractiveType](#noninteractivetype)
* [Object](#object)
* [OpenAnswerType](#openanswertype)
* [ProcessableActivityType](#processableactivitytype)
* [RecipeChecker](#recipechecker)
* [Sha1Sum](#sha1sum)
* [Sha2Sum](#sha2sum)
* [SingleChoiceActivityType](#singlechoiceactivitytype)
* [Timestamp](#timestamp)
* [URI](#uri)
* [UUID](#uuid)
* [VerbChecker](#verbchecker)
* [VerbIdChecker](#verbidchecker)
* [Version](#version)
* [VideoActivityType](#videoactivitytype)
* [WordsBankActivityType](#wordsbankactivitytype)

### Variables

* [assessableTypes](#assessabletypes)
* [dsl](#dsl)
* [ids](#ids)
* [isAnswered](#isanswered)
* [isAnsweredVerb](#isansweredverb)
* [isAttempt](#isattempt)
* [isAudio](#isaudio)
* [isAudioVideo](#isaudiovideo)
* [isAudioVideoRecipe](#isaudiovideorecipe)
* [isBinaryChoice](#isbinarychoice)
* [isBook](#isbook)
* [isBookContainer](#isbookcontainer)
* [isClosedResponse](#isclosedresponse)
* [isClosedResponseRecipe](#isclosedresponserecipe)
* [isCompleted](#iscompleted)
* [isCompletedVerb](#iscompletedverb)
* [isDeleted](#isdeleted)
* [isDeletedVerb](#isdeletedverb)
* [isDisabled](#isdisabled)
* [isDisabledVerb](#isdisabledverb)
* [isDiscussion](#isdiscussion)
* [isDiscussionRecipe](#isdiscussionrecipe)
* [isDropDownChoice](#isdropdownchoice)
* [isEnabled](#isenabled)
* [isEnabledVerb](#isenabledverb)
* [isEssay](#isessay)
* [isEvaluated](#isevaluated)
* [isEvaluatedVerb](#isevaluatedverb)
* [isFailed](#isfailed)
* [isFailedVerb](#isfailedverb)
* [isFillInTheGaps](#isfillinthegaps)
* [isForumReply](#isforumreply)
* [isForumTopic](#isforumtopic)
* [isGenericClosedResponse](#isgenericclosedresponse)
* [isGenericOpenAnswer](#isgenericopenanswer)
* [isInitialized](#isinitialized)
* [isInitializedVerb](#isinitializedverb)
* [isInteracted](#isinteracted)
* [isInteractedVerb](#isinteractedverb)
* [isLaeProcessable](#islaeprocessable)
* [isLesson](#islesson)
* [isLiked](#isliked)
* [isLikedVerb](#islikedverb)
* [isListened](#islistened)
* [isListenedVerb](#islistenedverb)
* [isMatchingPairs](#ismatchingpairs)
* [isMultipleChoice](#ismultiplechoice)
* [isNonInteractive](#isnoninteractive)
* [isNonInteractiveAttempt](#isnoninteractiveattempt)
* [isNonInteractiveRecipe](#isnoninteractiverecipe)
* [isOpenAnswer](#isopenanswer)
* [isOpenAnswerRecipe](#isopenanswerrecipe)
* [isPassed](#ispassed)
* [isPassedVerb](#ispassedverb)
* [isPaused](#ispaused)
* [isPausedVerb](#ispausedverb)
* [isPlayed](#isplayed)
* [isPlayedVerb](#isplayedverb)
* [isPosted](#isposted)
* [isPostedVerb](#ispostedverb)
* [isReplied](#isreplied)
* [isRepliedVerb](#isrepliedverb)
* [isReported](#isreported)
* [isReportedVerb](#isreportedverb)
* [isSingleChoice](#issinglechoice)
* [isSkipped](#isskipped)
* [isSkippedVerb](#isskippedverb)
* [isUnit](#isunit)
* [isVideo](#isvideo)
* [isVotedDown](#isvoteddown)
* [isVotedDownVerb](#isvoteddownverb)
* [isVotedUp](#isvotedup)
* [isVotedUpVerb](#isvotedupverb)
* [isWatched](#iswatched)
* [isWatchedVerb](#iswatchedverb)
* [isWordsBank](#iswordsbank)

### Functions

* [isAssessable](#isassessable)

### Object literals

* [activityTypes](#activitytypes)

---

## Type aliases

<a id="activity"></a>

###  Activity

**Ƭ Activity**: * [BaseActivity](interfaces/baseactivity.md) &#124; [InteractionActivity](#interactionactivity)
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity.d.ts:9*

If it were possible to use the same id for two different Activities, the validity of Statements about these Activities could be questioned. This means an LRS can't ever treat (references to) the same Activity id as belonging to two different Activities, even if it thinks this was intended. Namely, when a conflict with another system occurs, it’s not possible to determine which Activity is intended.

___
<a id="activitytypechecker"></a>

###  ActivityTypeChecker

**Ƭ ActivityTypeChecker**: *`function`*

*Defined in [src/activity-types/activity-types.checkers.ts:12](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L12)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="actor"></a>

###  Actor

**Ƭ Actor**: * [Agent](#agent) &#124; [Group](#group)
*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/actor.d.ts:6*

The Actor defines who performed the action. The Actor of a Statement can be an Agent or a Group.

___
<a id="actorobject"></a>

###  ActorObject

**Ƭ ActorObject**: * [Actor](#actor) & `object`
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/actor-object.d.ts:5*

When the object is an actor the `objectType` property is mandatory

___
<a id="agent"></a>

###  Agent

**Ƭ Agent**: * [AccountAgent](interfaces/accountagent.md) &#124; [MboxAgent](interfaces/mboxagent.md) &#124; [OpenIdAgent](interfaces/openidagent.md) &#124; [MboxSha1SumAgent](interfaces/mboxsha1sumagent.md)
*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/agent/agent.d.ts:12*

An Agent (an individual) is a persona or system.

*   An Agent MUST be identified by one of the four types of Inverse Functional Identifiers
*   An Agent MUST NOT include more than one Inverse Functional Identifier
*   An Agent SHOULD NOT use Inverse Functional Identifiers that are also used as a Group identifier

___
<a id="attemptactivitytype"></a>

###  AttemptActivityType

**Ƭ AttemptActivityType**: *"https://w3id.org/xapi/smart/activity/attempt"*

*Defined in [src/activity-types/activity-type.types.ts:31](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L31)*

___
<a id="audioactivitytype"></a>

###  AudioActivityType

**Ƭ AudioActivityType**: *"https://w3id.org/xapi/smart/activity/audio"*

*Defined in [src/activity-types/activity-type.types.ts:23](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L23)*

___
<a id="audiovideotype"></a>

###  AudioVideoType

**Ƭ AudioVideoType**: * [AudioActivityType](#audioactivitytype) &#124; [VideoActivityType](#videoactivitytype)
*

*Defined in [src/activity-types/activity-type.types.ts:25](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L25)*

___
<a id="closedresponsetype"></a>

###  ClosedResponseType

**Ƭ ClosedResponseType**: * [DropDownChoiceActivityType](#dropdownchoiceactivitytype) &#124; [FillInTheGapsActivityType](#fillinthegapsactivitytype) &#124; [GenericClosedResponseActivityType](#genericclosedresponseactivitytype) &#124; [MatchingPairsActivityType](#matchingpairsactivitytype) &#124; [MultipleChoiceActivityType](#multiplechoiceactivitytype) &#124; [SingleChoiceActivityType](#singlechoiceactivitytype) &#124; [WordsBankActivityType](#wordsbankactivitytype)
*

*Defined in [src/activity-types/activity-type.types.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L14)*

___
<a id="discussionactivitytype"></a>

###  DiscussionActivityType

**Ƭ DiscussionActivityType**: *"http://id.tincanapi.com/activitytype/discussion"*

*Defined in [src/activity-types/activity-type.types.ts:27](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L27)*

___
<a id="dropdownchoiceactivitytype"></a>

###  DropDownChoiceActivityType

**Ƭ DropDownChoiceActivityType**: *"https://w3id.org/xapi/smart/activity/drop-down-choice"*

*Defined in [src/activity-types/activity-type.types.ts:7](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L7)*

___
<a id="duration"></a>

###  Duration

**Ƭ Duration**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/duration.d.ts:20*

Durations are strings representing the amount of time something took.

*   A Duration MUST be expressed using the format for Duration in ISO 8601:2004(E) section 4.4.3.2. The alternative format (in conformity with the format used for time points and described in ISO 8601:2004(E) section 4.4.3.3) MUST NOT be used.
*   Learning Record Providers SHOULD provide a maximum precision of 0.01 seconds.
*   Learning Record Providers MAY provide less precision, for example in the case of reading a University Degree precision might be in months or years.
*   On receiving a Duration with more than 0.01 second precision, the LRS SHOULD* NOT reject the request but MAY truncate the "duration" property to 0.01 second precision.
*   When comparing Durations, any precision beyond 0.01 second precision SHOULD* NOT be included in the comparison.

| Example | Explanation | PT4H35M59.14S | Four hours, thirty five minutes and 59.14 seconds. | P16559.14S | The same time period as above represented in seconds. (Note: if the time period in question contained a leap second,this conversion would be inaccurate) | P3Y1M29DT4H35M59.14S | A Duration also including years, months and days. | P3Y | Approximately three years e.g. completion of a qualification. | P4W | Four weeks. Note that weeks cannot be combined with other time periods. 'P4W1D' is not valid.

___
<a id="essayactivitytype"></a>

###  EssayActivityType

**Ƭ EssayActivityType**: *"https://w3id.org/xapi/smart/activity/essay"*

*Defined in [src/activity-types/activity-type.types.ts:3](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L3)*

___
<a id="fillinthegapsactivitytype"></a>

###  FillInTheGapsActivityType

**Ƭ FillInTheGapsActivityType**: *"https://w3id.org/xapi/smart/activity/fill-in-the-gaps"*

*Defined in [src/activity-types/activity-type.types.ts:8](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L8)*

___
<a id="forumreplyactivitytype"></a>

###  ForumReplyActivityType

**Ƭ ForumReplyActivityType**: *"http://id.tincanapi.com/activitytype/forum-reply"*

*Defined in [src/activity-types/activity-type.types.ts:28](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L28)*

___
<a id="forumtopicactivitytype"></a>

###  ForumTopicActivityType

**Ƭ ForumTopicActivityType**: *"http://id.tincanapi.com/activitytype/forum-topic"*

*Defined in [src/activity-types/activity-type.types.ts:29](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L29)*

___
<a id="genericclosedresponseactivitytype"></a>

###  GenericClosedResponseActivityType

**Ƭ GenericClosedResponseActivityType**: *"https://w3id.org/xapi/smart/activity/closed-response"*

*Defined in [src/activity-types/activity-type.types.ts:9](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L9)*

___
<a id="genericopenansweractivitytype"></a>

###  GenericOpenAnswerActivityType

**Ƭ GenericOpenAnswerActivityType**: *"https://w3id.org/xapi/smart/activity/open-answer"*

*Defined in [src/activity-types/activity-type.types.ts:4](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L4)*

___
<a id="group"></a>

###  Group

**Ƭ Group**: * [AnonymousGroup](interfaces/anonymousgroup.md) &#124; [IdentifiedGroup](#identifiedgroup)
*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/group.d.ts:15*

A Group represents a collection of Agents and can be used in most of the same situations an Agent can be used. There are two types of Groups: Anonymous Groups and Identified Groups.

*   A Learning Record Consumer MUST consider each Anonymous Group distinct even if it has an identical set of members.
*   Learning Record Providers SHOULD use an Identified Group when they wish to issue multiple Statements, aggregate data or store and retrieve documents relating to a group.
*   A Learning Record Provider MAY include a complete or partial list of Agents in the "member" property of a given Anonymous or Identified Group.
*   An LRS returning a Statement MAY return the list of Group members in any order.

___
<a id="iri"></a>

###  IRI

**Ƭ IRI**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/iri.d.ts:6*

Internationalized Resource Identifiers, or IRIs, are unique identifiers which could also be resolvable. Because resolving is not a requirement, IRIs/URIs are used instead of IRLs/URLs. In order to allow the greatest flexibility in the characters used in an identifier, IRIs are used instead of URIs as IRIs can contain some characters outside of the ASCII character set

___
<a id="irl"></a>

###  IRL

**Ƭ IRL**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/irl.d.ts:6*

Internationalized Resource Location, or IRIs, are unique identifiers which could also be resolvable. Because resolving is not a requirement, IRLs/URLs are used instead of IRLs/URLs. In order to allow the greatest flexibility in the characters used in an identifier, IRIs are used instead of URIs as IRLs can contain some characters outside of the ASCII character set

___
<a id="identifiedgroup"></a>

###  IdentifiedGroup

**Ƭ IdentifiedGroup**: * [AccountGroup](interfaces/accountgroup.md) &#124; [MboxGroup](interfaces/mboxgroup.md) &#124; [MboxSha1SumGroup](interfaces/mboxsha1sumgroup.md) &#124; [OpenIdGroup](interfaces/openidgroup.md)
*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/identified-group.d.ts:13*

An Identified Group is used to uniquely identify a cluster of Agents

*   An Identified Group MUST include exactly one (1) Inverse Functional Identifier.
*   An Identified Group MUST NOT contain Group Objects in the "member" property.
*   An Identified Group SHOULD NOT use Inverse Functional Identifiers that are also used as Agent identifiers.
*   An Identified Group MAY include a "member" property listing constituent Agents.

___
<a id="integer"></a>

###  Integer

**Ƭ Integer**: *`number`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/integer.d.ts:1*

___
<a id="interactionactivity"></a>

###  InteractionActivity

**Ƭ InteractionActivity**: * [TrueFalseActivity](interfaces/truefalseactivity.md) &#124; [ChoiceActivity](interfaces/choiceactivity.md) &#124; [FillInActivity](interfaces/fillinactivity.md) &#124; [LongFillInActvity](interfaces/longfillinactvity.md) &#124; [MatchingActivity](interfaces/matchingactivity.md) &#124; [PerformanceActivity](interfaces/performanceactivity.md) &#124; [SequenceActivity](interfaces/sequenceactivity.md) &#124; [LikertActivity](interfaces/likertactivity.md) &#124; [NumericActivity](interfaces/numericactivity.md) &#124; [OtherActivity](interfaces/otheractivity.md)
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction-activity.d.ts:23*

Traditional e-learning has included structures for interactions or assessments. As a way to allow these practices and structures to extend Experience API's utility, this specification includes built-in definitions for interactions, which borrows from the SCORM 2004 4th Edition Data Model. These definitions are intended to provide a simple and familiar utility for recording interaction data.

Since 1.0.3, direct references to the SCORM data model have started to be removed, and any associated requirements included directly in this document.

These interaction definitions are simple to use, and consequently limited. It is expected that Communities of Practice requiring richer interactions definitions will do so through the use of Activity types and Activity Definition Extensions.

___
<a id="interactiondefinition"></a>

###  InteractionDefinition

**Ƭ InteractionDefinition**: * [ChoiceDefinition](interfaces/choicedefinition.md) &#124; [FillInDefinition](interfaces/fillindefinition.md) &#124; [LikertDefinition](interfaces/likertdefinition.md) &#124; [LongFillInDefinition](interfaces/longfillindefinition.md) &#124; [MatchingDefinition](interfaces/matchingdefinition.md) &#124; [NumericDefinition](interfaces/numericdefinition.md) &#124; [OtherDefinition](interfaces/otherdefinition.md) &#124; [PerformanceDefinition](interfaces/performancedefinition.md) &#124; [SequenceDefinition](interfaces/sequencedefinition.md) &#124; [TrueFalseDefinition](interfaces/truefalsedefinition.md)
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/interaction-definition.d.ts:11*

___
<a id="internetmediatype"></a>

###  InternetMediaType

**Ƭ InternetMediaType**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/internet-media-type.d.ts:1*

___
<a id="inversefunctionalidentifier"></a>

###  InverseFunctionalIdentifier

**Ƭ InverseFunctionalIdentifier**: * [MboxIdentifier](interfaces/mboxidentifier.md) &#124; [MboxSha1SumIdentifier](interfaces/mboxsha1sumidentifier.md) &#124; [OpenIdIdentifier](interfaces/openididentifier.md) &#124; [AccountIdentifier](interfaces/accountidentifier.md)
*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/ifi/ifi.d.ts:12*

An Inverse Functional Identifier (IFI) is a value of an Agent or Identified Group that is guaranteed to only ever refer to that Agent or Identified Group

Agents and Groups need to be uniquely identifiable in order for data to be stored and retrieved against them. In an xAPI Statement this is accomplished using Inverse Functional Identifiers which are loosely inspired by the widely accepted FOAF principle

___
<a id="mailtoiri"></a>

###  MailtoIRI

**Ƭ MailtoIRI**: *[IRI](#iri)*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/mailto-iri.d.ts:2*

___
<a id="matchingpairsactivitytype"></a>

###  MatchingPairsActivityType

**Ƭ MatchingPairsActivityType**: *"https://w3id.org/xapi/smart/activity/matching-pairs"*

*Defined in [src/activity-types/activity-type.types.ts:10](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L10)*

___
<a id="multiplechoiceactivitytype"></a>

###  MultipleChoiceActivityType

**Ƭ MultipleChoiceActivityType**: *"https://w3id.org/xapi/smart/activity/multiple-choice"*

*Defined in [src/activity-types/activity-type.types.ts:11](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L11)*

___
<a id="noninteractiveattemptactivitytype"></a>

###  NonInteractiveAttemptActivityType

**Ƭ NonInteractiveAttemptActivityType**: *"https://w3id.org/xapi/smart/activity/no-interactive"*

*Defined in [src/activity-types/activity-type.types.ts:32](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L32)*

___
<a id="noninteractivetype"></a>

###  NonInteractiveType

**Ƭ NonInteractiveType**: * [AttemptActivityType](#attemptactivitytype) &#124; [NonInteractiveAttemptActivityType](#noninteractiveattemptactivitytype)
*

*Defined in [src/activity-types/activity-type.types.ts:33](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L33)*

___
<a id="object"></a>

###  Object

**Ƭ Object**: * [Activity](#activity) &#124; [StatementRef](interfaces/statementref.md) &#124; [SubStatement](interfaces/substatement.md) &#124; [ActorObject](#actorobject)
*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/object.d.ts:10*

Objects which are provided as a value for this property SHOULD include an "objectType" property. If not specified, the objectType is assumed to be Activity. Other valid values are: Agent, Group, SubStatement or StatementRef. The properties of an Object change according to the objectType.

___
<a id="openanswertype"></a>

###  OpenAnswerType

**Ƭ OpenAnswerType**: * [EssayActivityType](#essayactivitytype) &#124; [GenericOpenAnswerActivityType](#genericopenansweractivitytype)
*

*Defined in [src/activity-types/activity-type.types.ts:5](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L5)*

___
<a id="processableactivitytype"></a>

###  ProcessableActivityType

**Ƭ ProcessableActivityType**: * [OpenAnswerType](#openanswertype) &#124; [ClosedResponseType](#closedresponsetype) &#124; [AudioVideoType](#audiovideotype)
*

*Defined in [src/activity-types/activity-type.types.ts:35](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L35)*

___
<a id="recipechecker"></a>

###  RecipeChecker

**Ƭ RecipeChecker**: *`function`*

*Defined in [src/recipes/recipes.checkers.ts:4](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/recipes/recipes.checkers.ts#L4)*

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="sha1sum"></a>

###  Sha1Sum

**Ƭ Sha1Sum**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/sha1-sum.d.ts:1*

___
<a id="sha2sum"></a>

###  Sha2Sum

**Ƭ Sha2Sum**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/sha2-sum.d.ts:1*

___
<a id="singlechoiceactivitytype"></a>

###  SingleChoiceActivityType

**Ƭ SingleChoiceActivityType**: *"https://w3id.org/xapi/smart/activity/single-choice"*

*Defined in [src/activity-types/activity-type.types.ts:12](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L12)*

___
<a id="timestamp"></a>

###  Timestamp

**Ƭ Timestamp**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/timestamp.d.ts:14*

Timestamps are a format type which represent a specific time. They are formatted according to ISO 8601's normal format. Statements sent to an LRS can be expected to keep precision to at least milliseconds

*   A Timestamp MUST be formatted according to ISO 8601.
*   A Timestamp SHOULD* be expressed using the format described in RFC 3339, which is a profile of ISO 8601.
*   A Timestamp MUST preserve precision to at least milliseconds (3 decimal points beyond seconds).
*   A Timestamp SHOULD* include the time zone.
*   If the Timestamp includes a time zone, the LRS MAY be return the Timestamp using a different timezone to the one originally used in the Statement so long as the point in time referenced is not affected.
*   The LRS SHOULD* return the Timestamp in UTC timezone.
*   A Timestamp MAY be truncated or rounded to a precision of at least 3 decimal digits for seconds.

___
<a id="uri"></a>

###  URI

**Ƭ URI**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/uri.d.ts:1*

___
<a id="uuid"></a>

###  UUID

**Ƭ UUID**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/uuid.d.ts:6*

Universally Unique Identifiers, or UUIDs, are 128-bit values that are globally unique. Unlike IRIs, there is no expectation of resolvability as UUIDs take on a completely different format. UUIDs MUST be in the standard string form. It is recommended variant 2 in RFC 4122 is used.

___
<a id="verbchecker"></a>

###  VerbChecker

**Ƭ VerbChecker**: *`function`*

*Defined in [src/verbs/verbs.types.ts:7](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.types.ts#L7)*

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="verbidchecker"></a>

###  VerbIdChecker

**Ƭ VerbIdChecker**: *`function`*

*Defined in [src/verbs/verbs.types.ts:1](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.types.ts#L1)*

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="version"></a>

###  Version

**Ƭ Version**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/version.d.ts:6*

Version information in Statements helps Learning Record Consumers get their bearings. Since the Statement data model is guaranteed consistent through all 1.0.x versions, in order to support data flow among such LRSs, the LRS is given some flexibility on Statement versions that are accepted.

___
<a id="videoactivitytype"></a>

###  VideoActivityType

**Ƭ VideoActivityType**: *"https://w3id.org/xapi/smart/activity/video"*

*Defined in [src/activity-types/activity-type.types.ts:24](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L24)*

___
<a id="wordsbankactivitytype"></a>

###  WordsBankActivityType

**Ƭ WordsBankActivityType**: *"https://w3id.org/xapi/smart/activity/words-bank"*

*Defined in [src/activity-types/activity-type.types.ts:13](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-type.types.ts#L13)*

___

## Variables

<a id="assessabletypes"></a>

### `<Const>` assessableTypes

**● assessableTypes**: *`Set`<`string`>* =  new Set([
  openAnswerTypes.essay,
  openAnswerTypes.genericOpenAnswer,
  closedResponseTypes.matchingPairs,
  closedResponseTypes.singleChoice,
  closedResponseTypes.multipleChoice,
  closedResponseTypes.dropDownChoice,
  closedResponseTypes.binaryChoice,
  closedResponseTypes.genericClosedResponse,
  closedResponseTypes.wordsBank,
  closedResponseTypes.fillInTheGaps
])

*Defined in [src/activity-types/activity-types.ts:85](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.ts#L85)*

Set of activity types that are considered assessabled

*   [openAnswerTypes.essay](modules/openanswertypes.md#essay)
*   [openAnswerTypes.genericOpenAnswer](modules/openanswertypes.md#genericopenanswer)
*   [closedResponseTypes.matchingPairs](modules/closedresponsetypes.md#matchingpairs)
*   [closedResponseTypes.singleChoice](modules/closedresponsetypes.md#singlechoice)
*   [closedResponseTypes.multipleChoice](modules/closedresponsetypes.md#multiplechoice)
*   [closedResponseTypes.dropDownChoice](modules/closedresponsetypes.md#dropdownchoice)
*   [closedResponseTypes.binaryChoice](modules/closedresponsetypes.md#binarychoice)
*   [closedResponseTypes.genericClosedResponse](modules/closedresponsetypes.md#genericclosedresponse)
*   [closedResponseTypes.wordsBank](modules/closedresponsetypes.md#wordsbank)
*   [closedResponseTypes.fillInTheGaps](modules/closedresponsetypes.md#fillinthegaps)

___
<a id="dsl"></a>

### `<Const>` dsl

**● dsl**: *`object`*

*Defined in node_modules/@gradiant/xapi-dsl/dsl/dsl.d.ts:8*

#### Type declaration

___
<a id="ids"></a>

### `<Const>` ids

**● ids**: *`object`*

*Defined in node_modules/@gradiant/xapi-dsl/dsl/verbs/ids/index.d.ts:9*

#### Type declaration

___
<a id="isanswered"></a>

### `<Const>` isAnswered

**● isAnswered**: *`function`* =  isVerbId(verbs.answered.id)

*Defined in [src/verbs/verb-ids.checkers.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L14)*

Check if the given verb identifier is [verbs.answered](modules/verbs.md#answered)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isansweredverb"></a>

### `<Const>` isAnsweredVerb

**● isAnsweredVerb**: *`function`* =  isVerb(verbs.answered)

*Defined in [src/verbs/verbs.checkers.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L14)*

Check if the given verb object is [verbs.answered](modules/verbs.md#answered)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isattempt"></a>

### `<Const>` isAttempt

**● isAttempt**: *`function`* =  isActivityType(nonInteractiveTypes.attempt)

*Defined in [src/activity-types/activity-types.checkers.ts:151](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L151)*

Check if the given activity type if [nonInteractiveTypes.attempt](modules/noninteractivetypes.md#attempt)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isaudio"></a>

### `<Const>` isAudio

**● isAudio**: *`function`* =  isActivityType(audioVideoTypes.audio)

*Defined in [src/activity-types/activity-types.checkers.ts:130](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L130)*

Check if the given activity type if [audioVideoTypes.audio](modules/audiovideotypes.md#audio)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isaudiovideo"></a>

### `<Const>` isAudioVideo

**● isAudioVideo**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isAudio, isVideo])

*Defined in [src/activity-types/activity-types.checkers.ts:143](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L143)*

Check if the given activity type if a audio/video:

*   [audioVideoTypes.audio](modules/audiovideotypes.md#audio)
*   [audioVideoTypes.video](modules/audiovideotypes.md#video)

___
<a id="isaudiovideorecipe"></a>

### `<Const>` isAudioVideoRecipe

**● isAudioVideoRecipe**: *`function`* =  isRecipe(recipes.audioVideo)

*Defined in [src/recipes/recipes.checkers.ts:25](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/recipes/recipes.checkers.ts#L25)*

Check if the given recipe identifier is [recipes.audioVideo](modules/recipes.md#audiovideo)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="isbinarychoice"></a>

### `<Const>` isBinaryChoice

**● isBinaryChoice**: *`function`* =  isActivityType(closedResponseTypes.binaryChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:25](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L25)*

Check if the given activity type is [closedResponseTypes.binaryChoice](modules/closedresponsetypes.md#binarychoice)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isbook"></a>

### `<Const>` isBook

**● isBook**: *`function`* =  isActivityType(bookTypes.book)

*Defined in [src/activity-types/activity-types.checkers.ts:172](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L172)*

Check if the given activity type if [bookTypes.book](modules/booktypes.md#book)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isbookcontainer"></a>

### `<Const>` isBookContainer

**● isBookContainer**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isBook, isUnit, isLesson])

*Defined in [src/activity-types/activity-types.checkers.ts:191](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L191)*

Check if the given activity type if a book container types:

*   [bookTypes.book](modules/booktypes.md#book)
*   [bookTypes.unit](modules/booktypes.md#unit)
*   [bookTypes.lesson](modules/booktypes.md#lesson)

___
<a id="isclosedresponse"></a>

### `<Const>` isClosedResponse

**● isClosedResponse**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([
  isBinaryChoice,
  isDropDownChoice,
  isFillInTheGaps,
  isGenericClosedResponse,
  isMatchingPairs,
  isMultipleChoice,
  isSingleChoice,
  isWordsBank
])

*Defined in [src/activity-types/activity-types.checkers.ts:74](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L74)*

Check if the given activity type if a closed response type:

*   [closedResponseTypes.binaryChoice](modules/closedresponsetypes.md#binarychoice)
*   [closedResponseTypes.dropDownChoice](modules/closedresponsetypes.md#dropdownchoice)
*   [closedResponseTypes.fillInTheGaps](modules/closedresponsetypes.md#fillinthegaps)
*   [closedResponseTypes.genericClosedResponse](modules/closedresponsetypes.md#genericclosedresponse)
*   [closedResponseTypes.matchingPairs](modules/closedresponsetypes.md#matchingpairs)
*   [closedResponseTypes.multipleChoice](modules/closedresponsetypes.md#multiplechoice)
*   [closedResponseTypes.singleChoice](modules/closedresponsetypes.md#singlechoice)
*   [closedResponseTypes.wordsBank](modules/closedresponsetypes.md#wordsbank)

___
<a id="isclosedresponserecipe"></a>

### `<Const>` isClosedResponseRecipe

**● isClosedResponseRecipe**: *`function`* =  isRecipe(recipes.closedResponse)

*Defined in [src/recipes/recipes.checkers.ts:20](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/recipes/recipes.checkers.ts#L20)*

Check if the given recipe identifier is [recipes.closedResponse](modules/recipes.md#closedresponse)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="iscompleted"></a>

### `<Const>` isCompleted

**● isCompleted**: *`function`* =  isVerbId(verbs.completed.id)

*Defined in [src/verbs/verb-ids.checkers.ts:69](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L69)*

Check if the given verb identifier is [verbs.completed](modules/verbs.md#completed)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="iscompletedverb"></a>

### `<Const>` isCompletedVerb

**● isCompletedVerb**: *`function`* =  isVerb(verbs.completed)

*Defined in [src/verbs/verbs.checkers.ts:69](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L69)*

Check if the given verb object is [verbs.completed](modules/verbs.md#completed)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isdeleted"></a>

### `<Const>` isDeleted

**● isDeleted**: *`function`* =  isVerbId(verbs.deleted.id)

*Defined in [src/verbs/verb-ids.checkers.ts:94](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L94)*

Check if the given verb identifier is [verbs.deleted](modules/verbs.md#deleted)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isdeletedverb"></a>

### `<Const>` isDeletedVerb

**● isDeletedVerb**: *`function`* =  isVerb(verbs.deleted)

*Defined in [src/verbs/verbs.checkers.ts:94](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L94)*

Check if the given verb object is [verbs.deleted](modules/verbs.md#deleted)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isdisabled"></a>

### `<Const>` isDisabled

**● isDisabled**: *`function`* =  isVerbId(verbs.disabled.id)

*Defined in [src/verbs/verb-ids.checkers.ts:79](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L79)*

Check if the given verb identifier is [verbs.disabled](modules/verbs.md#disabled)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isdisabledverb"></a>

### `<Const>` isDisabledVerb

**● isDisabledVerb**: *`function`* =  isVerb(verbs.disabled)

*Defined in [src/verbs/verbs.checkers.ts:79](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L79)*

Check if the given verb object is [verbs.disabled](modules/verbs.md#disabled)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isdiscussion"></a>

### `<Const>` isDiscussion

**● isDiscussion**: *`function`* =  isActivityType(discussionTypes.discussion)

*Defined in [src/activity-types/activity-types.checkers.ts:112](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L112)*

Check if the given activity type if [discussionTypes.discussion](modules/discussiontypes.md#discussion)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isdiscussionrecipe"></a>

### `<Const>` isDiscussionRecipe

**● isDiscussionRecipe**: *`function`* =  isRecipe(recipes.discussion)

*Defined in [src/recipes/recipes.checkers.ts:30](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/recipes/recipes.checkers.ts#L30)*

Check if the given recipe identifier is [recipes.discussion](modules/recipes.md#discussion)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="isdropdownchoice"></a>

### `<Const>` isDropDownChoice

**● isDropDownChoice**: *`function`* =  isActivityType(closedResponseTypes.dropDownChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:30](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L30)*

Check if the given activity type is [closedResponseTypes.dropDownChoice](modules/closedresponsetypes.md#dropdownchoice)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *`function`* =  isVerbId(verbs.enabled.id)

*Defined in [src/verbs/verb-ids.checkers.ts:74](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L74)*

Check if the given verb identifier is [verbs.enabled](modules/verbs.md#enabled)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isenabledverb"></a>

### `<Const>` isEnabledVerb

**● isEnabledVerb**: *`function`* =  isVerb(verbs.enabled)

*Defined in [src/verbs/verbs.checkers.ts:74](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L74)*

Check if the given verb object is [verbs.enabled](modules/verbs.md#enabled)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isessay"></a>

### `<Const>` isEssay

**● isEssay**: *`function`* =  isActivityType(openAnswerTypes.essay)

*Defined in [src/activity-types/activity-types.checkers.ts:91](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L91)*

Check if the given activity type if [openAnswerTypes.essay](modules/openanswertypes.md#essay)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isevaluated"></a>

### `<Const>` isEvaluated

**● isEvaluated**: *`function`* =  isVerbId(verbs.evaluated.id)

*Defined in [src/verbs/verb-ids.checkers.ts:19](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L19)*

Check if the given verb identifier is [verbs.evaluated](modules/verbs.md#evaluated)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isevaluatedverb"></a>

### `<Const>` isEvaluatedVerb

**● isEvaluatedVerb**: *`function`* =  isVerb(verbs.evaluated)

*Defined in [src/verbs/verbs.checkers.ts:19](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L19)*

Check if the given verb object is [verbs.evaluated](modules/verbs.md#evaluated)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isfailed"></a>

### `<Const>` isFailed

**● isFailed**: *`function`* =  isVerbId(verbs.failed.id)

*Defined in [src/verbs/verb-ids.checkers.ts:29](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L29)*

Check if the given verb identifier is [verbs.failed](modules/verbs.md#failed)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isfailedverb"></a>

### `<Const>` isFailedVerb

**● isFailedVerb**: *`function`* =  isVerb(verbs.failed)

*Defined in [src/verbs/verbs.checkers.ts:29](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L29)*

Check if the given verb object is [verbs.failed](modules/verbs.md#failed)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isfillinthegaps"></a>

### `<Const>` isFillInTheGaps

**● isFillInTheGaps**: *`function`* =  isActivityType(closedResponseTypes.fillInTheGaps)

*Defined in [src/activity-types/activity-types.checkers.ts:35](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L35)*

Check if the given activity type is [closedResponseTypes.fillInTheGaps](modules/closedresponsetypes.md#fillinthegaps)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isforumreply"></a>

### `<Const>` isForumReply

**● isForumReply**: *`function`* =  isActivityType(discussionTypes.forumReply)

*Defined in [src/activity-types/activity-types.checkers.ts:117](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L117)*

Check if the given activity type if [discussionTypes.forumReply](modules/discussiontypes.md#forumreply)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isforumtopic"></a>

### `<Const>` isForumTopic

**● isForumTopic**: *`function`* =  isActivityType(discussionTypes.forumTopic)

*Defined in [src/activity-types/activity-types.checkers.ts:122](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L122)*

Check if the given activity type if [discussionTypes.forumTopic](modules/discussiontypes.md#forumtopic)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isgenericclosedresponse"></a>

### `<Const>` isGenericClosedResponse

**● isGenericClosedResponse**: *`function`* =  isActivityType(closedResponseTypes.genericClosedResponse)

*Defined in [src/activity-types/activity-types.checkers.ts:40](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L40)*

Check if the given activity type if [closedResponseTypes.genericClosedResponse](modules/closedresponsetypes.md#genericclosedresponse)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isgenericopenanswer"></a>

### `<Const>` isGenericOpenAnswer

**● isGenericOpenAnswer**: *`function`* =  isActivityType(openAnswerTypes.genericOpenAnswer)

*Defined in [src/activity-types/activity-types.checkers.ts:96](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L96)*

Check if the given activity type if [openAnswerTypes.genericOpenAnswer](modules/openanswertypes.md#genericopenanswer)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isinitialized"></a>

### `<Const>` isInitialized

**● isInitialized**: *`function`* =  isVerbId(verbs.initialized.id)

*Defined in [src/verbs/verb-ids.checkers.ts:34](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L34)*

Check if the given verb identifier is [verbs.initialized](modules/verbs.md#initialized)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isinitializedverb"></a>

### `<Const>` isInitializedVerb

**● isInitializedVerb**: *`function`* =  isVerb(verbs.initialized)

*Defined in [src/verbs/verbs.checkers.ts:34](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L34)*

Check if the given verb object is [verbs.initialized](modules/verbs.md#initialized)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isinteracted"></a>

### `<Const>` isInteracted

**● isInteracted**: *`function`* =  isVerbId(verbs.interacted.id)

*Defined in [src/verbs/verb-ids.checkers.ts:39](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L39)*

Check if the given verb identifier is [verbs.interacted](modules/verbs.md#interacted)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isinteractedverb"></a>

### `<Const>` isInteractedVerb

**● isInteractedVerb**: *`function`* =  isVerb(verbs.interacted)

*Defined in [src/verbs/verbs.checkers.ts:39](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L39)*

Check if the given verb object is [verbs.interacted](modules/verbs.md#interacted)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="islaeprocessable"></a>

### `<Const>` isLaeProcessable

**● isLaeProcessable**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isOpenAnswer, isClosedResponse, isAudioVideo])

*Defined in [src/activity-types/activity-types.checkers.ts:212](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L212)*

Check if the given activity type if a book container types:

*   [closedResponseTypes.binaryChoice](modules/closedresponsetypes.md#binarychoice)
*   [closedResponseTypes.dropDownChoice](modules/closedresponsetypes.md#dropdownchoice)
*   [closedResponseTypes.fillInTheGaps](modules/closedresponsetypes.md#fillinthegaps)
*   [closedResponseTypes.genericClosedResponse](modules/closedresponsetypes.md#genericclosedresponse)
*   [closedResponseTypes.matchingPairs](modules/closedresponsetypes.md#matchingpairs)
*   [closedResponseTypes.multipleChoice](modules/closedresponsetypes.md#multiplechoice)
*   [closedResponseTypes.singleChoice](modules/closedresponsetypes.md#singlechoice)
*   [closedResponseTypes.wordsBank](modules/closedresponsetypes.md#wordsbank)
    
*   [openAnswerTypes.essay](modules/openanswertypes.md#essay)
    
*   [openAnswerTypes.genericOpenAnswer](modules/openanswertypes.md#genericopenanswer)
    
*   [audioVideoTypes.audio](modules/audiovideotypes.md#audio)
    
*   [audioVideoTypes.video](modules/audiovideotypes.md#video)

___
<a id="islesson"></a>

### `<Const>` isLesson

**● isLesson**: *`function`* =  isActivityType(bookTypes.lesson)

*Defined in [src/activity-types/activity-types.checkers.ts:182](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L182)*

Check if the given activity type if [bookTypes.lesson](modules/booktypes.md#lesson)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isliked"></a>

### `<Const>` isLiked

**● isLiked**: *`function`* =  isVerbId(verbs.liked.id)

*Defined in [src/verbs/verb-ids.checkers.ts:99](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L99)*

Check if the given verb identifier is [verbs.liked](modules/verbs.md#liked)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="islikedverb"></a>

### `<Const>` isLikedVerb

**● isLikedVerb**: *`function`* =  isVerb(verbs.liked)

*Defined in [src/verbs/verbs.checkers.ts:99](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L99)*

Check if the given verb object is [verbs.liked](modules/verbs.md#liked)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="islistened"></a>

### `<Const>` isListened

**● isListened**: *`function`* =  isVerbId(verbs.listen.id)

*Defined in [src/verbs/verb-ids.checkers.ts:54](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L54)*

Check if the given verb identifier is [verbs.listen](modules/verbs.md#listen)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="islistenedverb"></a>

### `<Const>` isListenedVerb

**● isListenedVerb**: *`function`* =  isVerb(verbs.listen)

*Defined in [src/verbs/verbs.checkers.ts:54](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L54)*

Check if the given verb object is [verbs.listen](modules/verbs.md#listen)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="ismatchingpairs"></a>

### `<Const>` isMatchingPairs

**● isMatchingPairs**: *`function`* =  isActivityType(closedResponseTypes.matchingPairs)

*Defined in [src/activity-types/activity-types.checkers.ts:45](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L45)*

Check if the given activity type if [closedResponseTypes.matchingPairs](modules/closedresponsetypes.md#matchingpairs)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="ismultiplechoice"></a>

### `<Const>` isMultipleChoice

**● isMultipleChoice**: *`function`* =  isActivityType(closedResponseTypes.multipleChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:50](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L50)*

Check if the given activity type if [closedResponseTypes.multipleChoice](modules/closedresponsetypes.md#multiplechoice)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isnoninteractive"></a>

### `<Const>` isNonInteractive

**● isNonInteractive**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isAttempt, isNonInteractiveAttempt])

*Defined in [src/activity-types/activity-types.checkers.ts:164](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L164)*

Check if the given activity type if a non interactive type:

*   [nonInteractiveTypes.attempt](modules/noninteractivetypes.md#attempt)
*   [nonInteractiveTypes.nonInteractive](modules/noninteractivetypes.md#noninteractive)

___
<a id="isnoninteractiveattempt"></a>

### `<Const>` isNonInteractiveAttempt

**● isNonInteractiveAttempt**: *`function`* =  isActivityType(nonInteractiveTypes.nonInteractive)

*Defined in [src/activity-types/activity-types.checkers.ts:156](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L156)*

Check if the given activity type if [nonInteractiveTypes.nonInteractive](modules/noninteractivetypes.md#noninteractive)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isnoninteractiverecipe"></a>

### `<Const>` isNonInteractiveRecipe

**● isNonInteractiveRecipe**: *`function`* =  isRecipe(recipes.nonInteractive)

*Defined in [src/recipes/recipes.checkers.ts:35](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/recipes/recipes.checkers.ts#L35)*

Check if the given recipe identifier is [recipes.nonInteractive](modules/recipes.md#noninteractive)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="isopenanswer"></a>

### `<Const>` isOpenAnswer

**● isOpenAnswer**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isEssay, isGenericOpenAnswer])

*Defined in [src/activity-types/activity-types.checkers.ts:104](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L104)*

Check if the given activity type if an open answer type:

*   [openAnswerTypes.essay](modules/openanswertypes.md#essay)
*   [openAnswerTypes.genericOpenAnswer](modules/openanswertypes.md#genericopenanswer)

___
<a id="isopenanswerrecipe"></a>

### `<Const>` isOpenAnswerRecipe

**● isOpenAnswerRecipe**: *`function`* =  isRecipe(recipes.openAnswer)

*Defined in [src/recipes/recipes.checkers.ts:15](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/recipes/recipes.checkers.ts#L15)*

Check if the given recipe identifier is [recipes.openAnswer](modules/recipes.md#openanswer)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="ispassed"></a>

### `<Const>` isPassed

**● isPassed**: *`function`* =  isVerbId(verbs.passed.id)

*Defined in [src/verbs/verb-ids.checkers.ts:24](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L24)*

Check if the given verb identifier is [verbs.passed](modules/verbs.md#passed)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="ispassedverb"></a>

### `<Const>` isPassedVerb

**● isPassedVerb**: *`function`* =  isVerb(verbs.passed)

*Defined in [src/verbs/verbs.checkers.ts:24](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L24)*

Check if the given verb object is [verbs.passed](modules/verbs.md#passed)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="ispaused"></a>

### `<Const>` isPaused

**● isPaused**: *`function`* =  isVerbId(verbs.paused.id)

*Defined in [src/verbs/verb-ids.checkers.ts:49](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L49)*

Check if the given verb identifier is [verbs.paused](modules/verbs.md#paused)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="ispausedverb"></a>

### `<Const>` isPausedVerb

**● isPausedVerb**: *`function`* =  isVerb(verbs.paused)

*Defined in [src/verbs/verbs.checkers.ts:49](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L49)*

Check if the given verb object is [verbs.paused](modules/verbs.md#paused)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isplayed"></a>

### `<Const>` isPlayed

**● isPlayed**: *`function`* =  isVerbId(verbs.played.id)

*Defined in [src/verbs/verb-ids.checkers.ts:44](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L44)*

Check if the given verb identifier is [verbs.played](modules/verbs.md#played)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isplayedverb"></a>

### `<Const>` isPlayedVerb

**● isPlayedVerb**: *`function`* =  isVerb(verbs.played)

*Defined in [src/verbs/verbs.checkers.ts:44](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L44)*

Check if the given verb object is [verbs.played](modules/verbs.md#played)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isposted"></a>

### `<Const>` isPosted

**● isPosted**: *`function`* =  isVerbId(verbs.posted.id)

*Defined in [src/verbs/verb-ids.checkers.ts:84](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L84)*

Check if the given verb identifier is [verbs.posted](modules/verbs.md#posted)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="ispostedverb"></a>

### `<Const>` isPostedVerb

**● isPostedVerb**: *`function`* =  isVerb(verbs.posted)

*Defined in [src/verbs/verbs.checkers.ts:84](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L84)*

Check if the given verb object is [verbs.posted](modules/verbs.md#posted)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isreplied"></a>

### `<Const>` isReplied

**● isReplied**: *`function`* =  isVerbId(verbs.replied.id)

*Defined in [src/verbs/verb-ids.checkers.ts:89](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L89)*

Check if the given verb identifier is [verbs.replied](modules/verbs.md#replied)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isrepliedverb"></a>

### `<Const>` isRepliedVerb

**● isRepliedVerb**: *`function`* =  isVerb(verbs.replied)

*Defined in [src/verbs/verbs.checkers.ts:89](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L89)*

Check if the given verb object is [verbs.replied](modules/verbs.md#replied)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isreported"></a>

### `<Const>` isReported

**● isReported**: *`function`* =  isVerbId(verbs.reported.id)

*Defined in [src/verbs/verb-ids.checkers.ts:114](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L114)*

Check if the given verb identifier is [verbs.reported](modules/verbs.md#reported)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isreportedverb"></a>

### `<Const>` isReportedVerb

**● isReportedVerb**: *`function`* =  isVerb(verbs.reported)

*Defined in [src/verbs/verbs.checkers.ts:114](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L114)*

Check if the given verb object is [verbs.reported](modules/verbs.md#reported)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="issinglechoice"></a>

### `<Const>` isSingleChoice

**● isSingleChoice**: *`function`* =  isActivityType(closedResponseTypes.singleChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:55](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L55)*

Check if the given activity type if [closedResponseTypes.singleChoice](modules/closedresponsetypes.md#singlechoice)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isskipped"></a>

### `<Const>` isSkipped

**● isSkipped**: *`function`* =  isVerbId(verbs.skipped.id)

*Defined in [src/verbs/verb-ids.checkers.ts:64](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L64)*

Check if the given verb identifier is [verbs.skipped](modules/verbs.md#skipped)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isskippedverb"></a>

### `<Const>` isSkippedVerb

**● isSkippedVerb**: *`function`* =  isVerb(verbs.skipped)

*Defined in [src/verbs/verbs.checkers.ts:64](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L64)*

Check if the given verb object is [verbs.skipped](modules/verbs.md#skipped)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isunit"></a>

### `<Const>` isUnit

**● isUnit**: *`function`* =  isActivityType(bookTypes.unit)

*Defined in [src/activity-types/activity-types.checkers.ts:177](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L177)*

Check if the given activity type if [bookTypes.unit](modules/booktypes.md#unit)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isvideo"></a>

### `<Const>` isVideo

**● isVideo**: *`function`* =  isActivityType(audioVideoTypes.video)

*Defined in [src/activity-types/activity-types.checkers.ts:135](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L135)*

Check if the given activity type if {@link discussionTypes.video}

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isvoteddown"></a>

### `<Const>` isVotedDown

**● isVotedDown**: *`function`* =  isVerbId(verbs.votedDown.id)

*Defined in [src/verbs/verb-ids.checkers.ts:109](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L109)*

Check if the given verb identifier is [verbs.votedDown](modules/verbs.md#voteddown)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isvoteddownverb"></a>

### `<Const>` isVotedDownVerb

**● isVotedDownVerb**: *`function`* =  isVerb(verbs.votedDown)

*Defined in [src/verbs/verbs.checkers.ts:109](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L109)*

Check if the given verb object is [verbs.votedDown](modules/verbs.md#voteddown)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isvotedup"></a>

### `<Const>` isVotedUp

**● isVotedUp**: *`function`* =  isVerbId(verbs.votedUp.id)

*Defined in [src/verbs/verb-ids.checkers.ts:104](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L104)*

Check if the given verb identifier is [verbs.votedUp](modules/verbs.md#votedup)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isvotedupverb"></a>

### `<Const>` isVotedUpVerb

**● isVotedUpVerb**: *`function`* =  isVerb(verbs.votedUp)

*Defined in [src/verbs/verbs.checkers.ts:104](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L104)*

Check if the given verb object is [verbs.votedUp](modules/verbs.md#votedup)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="iswatched"></a>

### `<Const>` isWatched

**● isWatched**: *`function`* =  isVerbId(verbs.watched.id)

*Defined in [src/verbs/verb-ids.checkers.ts:59](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L59)*

Check if the given verb identifier is [verbs.watched](modules/verbs.md#watched)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="iswatchedverb"></a>

### `<Const>` isWatchedVerb

**● isWatchedVerb**: *`function`* =  isVerb(verbs.watched)

*Defined in [src/verbs/verbs.checkers.ts:59](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L59)*

Check if the given verb object is [verbs.watched](modules/verbs.md#watched)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="iswordsbank"></a>

### `<Const>` isWordsBank

**● isWordsBank**: *`function`* =  isActivityType(closedResponseTypes.wordsBank)

*Defined in [src/activity-types/activity-types.checkers.ts:60](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L60)*

Check if the given activity type if [closedResponseTypes.wordsBank](modules/closedresponsetypes.md#wordsbank)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___

## Functions

<a id="anypass"></a>

### `<Private>``<Const>` anyPass

▸ **anyPass**(checks: *`Array`<`function`>*): `(Anonymous function)`

*Defined in [src/fp.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/fp.ts#L14)*

Takes a list of predicates and returns a predicate that returns true for a given list of arguments if at least one of the provided predicates is satisfied by those arguments

**Parameters:**

| Param | Type |
| ------ | ------ |
| checks | `Array`<`function`> |

**Returns:** `(Anonymous function)`

___
<a id="equals"></a>

### `<Private>``<Const>` equals

▸ **equals**(expected: *`any`*): `(Anonymous function)`

*Defined in [src/fp.ts:6](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/fp.ts#L6)*

Returns true if its arguments are equals, false otherwise

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `any` |

**Returns:** `(Anonymous function)`

___
<a id="isactivitytype"></a>

### `<Private>``<Const>` isActivityType

▸ **isActivityType**(expectedType: *`string`*): [ActivityTypeChecker](#activitytypechecker)

*Defined in [src/activity-types/activity-types.checkers.ts:18](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expectedType | `string` |

**Returns:** [ActivityTypeChecker](#activitytypechecker)

___
<a id="isassessable"></a>

### `<Const>` isAssessable

▸ **isAssessable**(activityType: *`string`*): `boolean`

*Defined in [src/activity-types/activity-types.checkers.ts:231](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.checkers.ts#L231)*

Check if the given activity type is one of:

*   [closedResponseTypes.matchingPairs](modules/closedresponsetypes.md#matchingpairs)
*   [closedResponseTypes.singleChoice](modules/closedresponsetypes.md#singlechoice)
*   [closedResponseTypes.multipleChoice](modules/closedresponsetypes.md#multiplechoice)
*   [closedResponseTypes.dropDownChoice](modules/closedresponsetypes.md#dropdownchoice)
*   [closedResponseTypes.binaryChoice](modules/closedresponsetypes.md#binarychoice)
*   [closedResponseTypes.genericClosedResponse](modules/closedresponsetypes.md#genericclosedresponse)
*   [closedResponseTypes.wordsBank](modules/closedresponsetypes.md#wordsbank)
*   [closedResponseTypes.fillInTheGaps](modules/closedresponsetypes.md#fillinthegaps)
*   [openAnswerTypes.essay](modules/openanswertypes.md#essay)
*   [openAnswerTypes.genericOpenAnswer](modules/openanswertypes.md#genericopenanswer)

**Parameters:**

| Param | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isrecipe"></a>

### `<Private>``<Const>` isRecipe

▸ **isRecipe**(expectedRecipe: *`string`*): [RecipeChecker](#recipechecker)

*Defined in [src/recipes/recipes.checkers.ts:10](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/recipes/recipes.checkers.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expectedRecipe | `string` |

**Returns:** [RecipeChecker](#recipechecker)

___
<a id="isverb"></a>

### `<Private>``<Const>` isVerb

▸ **isVerb**<`T`>(expectedVerb: *`T`*): [VerbChecker](#verbchecker)

*Defined in [src/verbs/verbs.checkers.ts:9](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verbs.checkers.ts#L9)*

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| expectedVerb | `T` |

**Returns:** [VerbChecker](#verbchecker)

___
<a id="isverbid"></a>

### `<Private>``<Const>` isVerbId

▸ **isVerbId**(expectedVerbId: *`string`*): [VerbIdChecker](#verbidchecker)

*Defined in [src/verbs/verb-ids.checkers.ts:9](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/verbs/verb-ids.checkers.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expectedVerbId | `string` |

**Returns:** [VerbIdChecker](#verbidchecker)

___
<a id="propeq"></a>

### `<Private>``<Const>` propEq

▸ **propEq**<`T`>(property: *`keyof T`*, value: *`any`*): `(Anonymous function)`

*Defined in [src/fp.ts:21](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/fp.ts#L21)*

Returns true if the specified object property is equal, false otherwise

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type |
| ------ | ------ |
| property | `keyof T` |
| value | `any` |

**Returns:** `(Anonymous function)`

___

## Object literals

<a id="activitytypes"></a>

### `<Const>` activityTypes

**activityTypes**: *`object`*

*Defined in [src/activity-types/activity-types.ts:62](https://github.com/Gradiant/smart-xapi-dsl/blob/53fbdb9/src/activity-types/activity-types.ts#L62)*

Every activity type combined into a single object

___

