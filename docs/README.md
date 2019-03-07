
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
* [feedbackTypes](modules/feedbacktypes.md)
* [gradiant](modules/gradiant.md)
* [in2it](modules/in2it.md)
* [nonInteractiveTypes](modules/noninteractivetypes.md)
* [openAnswerTypes](modules/openanswertypes.md)
* [otherTypes](modules/othertypes.md)
* [qti](modules/qti.md)
* [recipes](modules/recipes.md)
* [risc](modules/risc.md)
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
* [DebateActivityType](#debateactivitytype)
* [DiscussionActivityType](#discussionactivitytype)
* [DropDownChoiceActivityType](#dropdownchoiceactivitytype)
* [Duration](#duration)
* [EssayActivityType](#essayactivitytype)
* [FeedbackType](#feedbacktype)
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
* [QuestionType](#questiontype)
* [RecipeChecker](#recipechecker)
* [ReviewType](#reviewtype)
* [Sha1Sum](#sha1sum)
* [Sha2Sum](#sha2sum)
* [SingleChoiceActivityType](#singlechoiceactivitytype)
* [SurveyType](#surveytype)
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
* [isAccessed](#isaccessed)
* [isAccessedVerb](#isaccessedverb)
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
* [isCreated](#iscreated)
* [isCreatedVerb](#iscreatedverb)
* [isDebate](#isdebate)
* [isDeleted](#isdeleted)
* [isDeletedVerb](#isdeletedverb)
* [isDisabled](#isdisabled)
* [isDisabledVerb](#isdisabledverb)
* [isDiscussion](#isdiscussion)
* [isDiscussionRecipe](#isdiscussionrecipe)
* [isDropDownChoice](#isdropdownchoice)
* [isEdited](#isedited)
* [isEditedVerb](#iseditedverb)
* [isEnabled](#isenabled)
* [isEnabledVerb](#isenabledverb)
* [isEssay](#isessay)
* [isEvaluated](#isevaluated)
* [isEvaluatedVerb](#isevaluatedverb)
* [isFailed](#isfailed)
* [isFailedVerb](#isfailedverb)
* [isFeedback](#isfeedback)
* [isFillInTheGaps](#isfillinthegaps)
* [isForumReply](#isforumreply)
* [isForumTopic](#isforumtopic)
* [isGenericClosedResponse](#isgenericclosedresponse)
* [isGenericOpenAnswer](#isgenericopenanswer)
* [isInitialized](#isinitialized)
* [isInitializedVerb](#isinitializedverb)
* [isInteracted](#isinteracted)
* [isInteractedVerb](#isinteractedverb)
* [isJoined](#isjoined)
* [isJoinedVerb](#isjoinedverb)
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
* [isQuestion](#isquestion)
* [isQuiz](#isquiz)
* [isReplied](#isreplied)
* [isRepliedVerb](#isrepliedverb)
* [isReported](#isreported)
* [isReportedVerb](#isreportedverb)
* [isReview](#isreview)
* [isSingleChoice](#issinglechoice)
* [isSkipped](#isskipped)
* [isSkippedVerb](#isskippedverb)
* [isSurvey](#issurvey)
* [isTerminated](#isterminated)
* [isTerminatedVerb](#isterminatedverb)
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

**Ƭ Activity**: *[BaseActivity](interfaces/baseactivity.md) \| [InteractionActivity](#interactionactivity)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity.d.ts:9*

If it were possible to use the same id for two different Activities, the validity of Statements about these Activities could be questioned. This means an LRS can't ever treat (references to) the same Activity id as belonging to two different Activities, even if it thinks this was intended. Namely, when a conflict with another system occurs, it’s not possible to determine which Activity is intended.

___
<a id="activitytypechecker"></a>

###  ActivityTypeChecker

**Ƭ ActivityTypeChecker**: *`function`*

*Defined in [src/activity-types/activity-types.checkers.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L14)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="actor"></a>

###  Actor

**Ƭ Actor**: *[Agent](#agent) \| [Group](#group)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/actor.d.ts:6*

The Actor defines who performed the action. The Actor of a Statement can be an Agent or a Group.

___
<a id="actorobject"></a>

###  ActorObject

**Ƭ ActorObject**: *[Actor](#actor) & `object`*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/actor-object.d.ts:5*

When the object is an actor the `objectType` property is mandatory

___
<a id="agent"></a>

###  Agent

**Ƭ Agent**: *[AccountAgent](interfaces/accountagent.md) \| [MboxAgent](interfaces/mboxagent.md) \| [OpenIdAgent](interfaces/openidagent.md) \| [MboxSha1SumAgent](interfaces/mboxsha1sumagent.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/agent/agent.d.ts:12*

An Agent (an individual) is a persona or system.

*   An Agent MUST be identified by one of the four types of Inverse Functional Identifiers
*   An Agent MUST NOT include more than one Inverse Functional Identifier
*   An Agent SHOULD NOT use Inverse Functional Identifiers that are also used as a Group identifier

___
<a id="attemptactivitytype"></a>

###  AttemptActivityType

**Ƭ AttemptActivityType**: *"https://w3id.org/xapi/smart/activity/attempt"*

*Defined in [src/activity-types/activity-type.types.ts:39](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L39)*

___
<a id="audioactivitytype"></a>

###  AudioActivityType

**Ƭ AudioActivityType**: *"https://w3id.org/xapi/smart/activity/audio"*

*Defined in [src/activity-types/activity-type.types.ts:30](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L30)*

___
<a id="audiovideotype"></a>

###  AudioVideoType

**Ƭ AudioVideoType**: *[AudioActivityType](#audioactivitytype) \| [VideoActivityType](#videoactivitytype)*

*Defined in [src/activity-types/activity-type.types.ts:32](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L32)*

___
<a id="closedresponsetype"></a>

###  ClosedResponseType

**Ƭ ClosedResponseType**: *[DropDownChoiceActivityType](#dropdownchoiceactivitytype) \| [FillInTheGapsActivityType](#fillinthegapsactivitytype) \| [GenericClosedResponseActivityType](#genericclosedresponseactivitytype) \| [MatchingPairsActivityType](#matchingpairsactivitytype) \| [MultipleChoiceActivityType](#multiplechoiceactivitytype) \| [SingleChoiceActivityType](#singlechoiceactivitytype) \| [WordsBankActivityType](#wordsbankactivitytype)*

*Defined in [src/activity-types/activity-type.types.ts:21](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L21)*

___
<a id="debateactivitytype"></a>

###  DebateActivityType

**Ƭ DebateActivityType**: *"https://w3id.org/xapi/smart/activity/discussion"*

*Defined in [src/activity-types/activity-type.types.ts:37](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L37)*

___
<a id="discussionactivitytype"></a>

###  DiscussionActivityType

**Ƭ DiscussionActivityType**: *"http://id.tincanapi.com/activitytype/discussion"*

*Defined in [src/activity-types/activity-type.types.ts:34](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L34)*

___
<a id="dropdownchoiceactivitytype"></a>

###  DropDownChoiceActivityType

**Ƭ DropDownChoiceActivityType**: *"https://w3id.org/xapi/smart/activity/drop-down-choice"*

*Defined in [src/activity-types/activity-type.types.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L14)*

___
<a id="duration"></a>

###  Duration

**Ƭ Duration**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/duration.d.ts:20*

Durations are strings representing the amount of time something took.

*   A Duration MUST be expressed using the format for Duration in ISO 8601:2004(E) section 4.4.3.2. The alternative format (in conformity with the format used for time points and described in ISO 8601:2004(E) section 4.4.3.3) MUST NOT be used.
*   Learning Record Providers SHOULD provide a maximum precision of 0.01 seconds.
*   Learning Record Providers MAY provide less precision, for example in the case of reading a University Degree precision might be in months or years.
*   On receiving a Duration with more than 0.01 second precision, the LRS SHOULD\* NOT reject the request but MAY truncate the "duration" property to 0.01 second precision.
*   When comparing Durations, any precision beyond 0.01 second precision SHOULD\* NOT be included in the comparison.

\| Example \| Explanation \| PT4H35M59.14S \| Four hours, thirty five minutes and 59.14 seconds. \| P16559.14S \| The same time period as above represented in seconds. (Note: if the time period in question contained a leap second,this conversion would be inaccurate) \| P3Y1M29DT4H35M59.14S \| A Duration also including years, months and days. \| P3Y \| Approximately three years e.g. completion of a qualification. \| P4W \| Four weeks. Note that weeks cannot be combined with other time periods. 'P4W1D' is not valid.

___
<a id="essayactivitytype"></a>

###  EssayActivityType

**Ƭ EssayActivityType**: *"https://w3id.org/xapi/smart/activity/essay"*

*Defined in [src/activity-types/activity-type.types.ts:10](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L10)*

___
<a id="feedbacktype"></a>

###  FeedbackType

**Ƭ FeedbackType**: *[QuestionType](#questiontype) \| [ReviewType](#reviewtype) \| [SurveyType](#surveytype)*

*Defined in [src/activity-types/activity-type.types.ts:48](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L48)*

___
<a id="fillinthegapsactivitytype"></a>

###  FillInTheGapsActivityType

**Ƭ FillInTheGapsActivityType**: *"https://w3id.org/xapi/smart/activity/fill-in-the-gaps"*

*Defined in [src/activity-types/activity-type.types.ts:15](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L15)*

___
<a id="forumreplyactivitytype"></a>

###  ForumReplyActivityType

**Ƭ ForumReplyActivityType**: *"http://id.tincanapi.com/activitytype/forum-reply"*

*Defined in [src/activity-types/activity-type.types.ts:35](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L35)*

___
<a id="forumtopicactivitytype"></a>

###  ForumTopicActivityType

**Ƭ ForumTopicActivityType**: *"http://id.tincanapi.com/activitytype/forum-topic"*

*Defined in [src/activity-types/activity-type.types.ts:36](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L36)*

___
<a id="genericclosedresponseactivitytype"></a>

###  GenericClosedResponseActivityType

**Ƭ GenericClosedResponseActivityType**: *"https://w3id.org/xapi/smart/activity/closed-response"*

*Defined in [src/activity-types/activity-type.types.ts:16](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L16)*

___
<a id="genericopenansweractivitytype"></a>

###  GenericOpenAnswerActivityType

**Ƭ GenericOpenAnswerActivityType**: *"https://w3id.org/xapi/smart/activity/open-answer"*

*Defined in [src/activity-types/activity-type.types.ts:11](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L11)*

___
<a id="group"></a>

###  Group

**Ƭ Group**: *[AnonymousGroup](interfaces/anonymousgroup.md) \| [IdentifiedGroup](#identifiedgroup)*

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

**Ƭ IdentifiedGroup**: *[AccountGroup](interfaces/accountgroup.md) \| [MboxGroup](interfaces/mboxgroup.md) \| [MboxSha1SumGroup](interfaces/mboxsha1sumgroup.md) \| [OpenIdGroup](interfaces/openidgroup.md)*

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

**Ƭ InteractionActivity**: *[TrueFalseActivity](interfaces/truefalseactivity.md) \| [ChoiceActivity](interfaces/choiceactivity.md) \| [FillInActivity](interfaces/fillinactivity.md) \| [LongFillInActvity](interfaces/longfillinactvity.md) \| [MatchingActivity](interfaces/matchingactivity.md) \| [PerformanceActivity](interfaces/performanceactivity.md) \| [SequenceActivity](interfaces/sequenceactivity.md) \| [LikertActivity](interfaces/likertactivity.md) \| [NumericActivity](interfaces/numericactivity.md) \| [OtherActivity](interfaces/otheractivity.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction-activity.d.ts:23*

Traditional e-learning has included structures for interactions or assessments. As a way to allow these practices and structures to extend Experience API's utility, this specification includes built-in definitions for interactions, which borrows from the SCORM 2004 4th Edition Data Model. These definitions are intended to provide a simple and familiar utility for recording interaction data.

Since 1.0.3, direct references to the SCORM data model have started to be removed, and any associated requirements included directly in this document.

These interaction definitions are simple to use, and consequently limited. It is expected that Communities of Practice requiring richer interactions definitions will do so through the use of Activity types and Activity Definition Extensions.

___
<a id="interactiondefinition"></a>

###  InteractionDefinition

**Ƭ InteractionDefinition**: *[ChoiceDefinition](interfaces/choicedefinition.md) \| [FillInDefinition](interfaces/fillindefinition.md) \| [LikertDefinition](interfaces/likertdefinition.md) \| [LongFillInDefinition](interfaces/longfillindefinition.md) \| [MatchingDefinition](interfaces/matchingdefinition.md) \| [NumericDefinition](interfaces/numericdefinition.md) \| [OtherDefinition](interfaces/otherdefinition.md) \| [PerformanceDefinition](interfaces/performancedefinition.md) \| [SequenceDefinition](interfaces/sequencedefinition.md) \| [TrueFalseDefinition](interfaces/truefalsedefinition.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/interaction/definitions/interaction-definition.d.ts:11*

___
<a id="internetmediatype"></a>

###  InternetMediaType

**Ƭ InternetMediaType**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/internet-media-type.d.ts:1*

___
<a id="inversefunctionalidentifier"></a>

###  InverseFunctionalIdentifier

**Ƭ InverseFunctionalIdentifier**: *[MboxIdentifier](interfaces/mboxidentifier.md) \| [MboxSha1SumIdentifier](interfaces/mboxsha1sumidentifier.md) \| [OpenIdIdentifier](interfaces/openididentifier.md) \| [AccountIdentifier](interfaces/accountidentifier.md)*

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

*Defined in [src/activity-types/activity-type.types.ts:17](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L17)*

___
<a id="multiplechoiceactivitytype"></a>

###  MultipleChoiceActivityType

**Ƭ MultipleChoiceActivityType**: *"https://w3id.org/xapi/smart/activity/multiple-choice"*

*Defined in [src/activity-types/activity-type.types.ts:18](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L18)*

___
<a id="noninteractiveattemptactivitytype"></a>

###  NonInteractiveAttemptActivityType

**Ƭ NonInteractiveAttemptActivityType**: *"https://w3id.org/xapi/smart/activity/no-interactive"*

*Defined in [src/activity-types/activity-type.types.ts:40](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L40)*

___
<a id="noninteractivetype"></a>

###  NonInteractiveType

**Ƭ NonInteractiveType**: *[AttemptActivityType](#attemptactivitytype) \| [NonInteractiveAttemptActivityType](#noninteractiveattemptactivitytype)*

*Defined in [src/activity-types/activity-type.types.ts:41](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L41)*

___
<a id="object"></a>

###  Object

**Ƭ Object**: *[Activity](#activity) \| [StatementRef](interfaces/statementref.md) \| [SubStatement](interfaces/substatement.md) \| [ActorObject](#actorobject)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/object.d.ts:10*

Objects which are provided as a value for this property SHOULD include an "objectType" property. If not specified, the objectType is assumed to be Activity. Other valid values are: Agent, Group, SubStatement or StatementRef. The properties of an Object change according to the objectType.

___
<a id="openanswertype"></a>

###  OpenAnswerType

**Ƭ OpenAnswerType**: *[EssayActivityType](#essayactivitytype) \| [GenericOpenAnswerActivityType](#genericopenansweractivitytype)*

*Defined in [src/activity-types/activity-type.types.ts:12](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L12)*

___
<a id="processableactivitytype"></a>

###  ProcessableActivityType

**Ƭ ProcessableActivityType**: *[OpenAnswerType](#openanswertype) \| [ClosedResponseType](#closedresponsetype) \| [AudioVideoType](#audiovideotype)*

*Defined in [src/activity-types/activity-type.types.ts:43](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L43)*

___
<a id="questiontype"></a>

###  QuestionType

**Ƭ QuestionType**: *"http://activitystrea.ms/schema/1.0/question"*

*Defined in [src/activity-types/activity-type.types.ts:45](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L45)*

___
<a id="recipechecker"></a>

###  RecipeChecker

**Ƭ RecipeChecker**: *`function`*

*Defined in [src/recipes/recipes.checkers.ts:4](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L4)*

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="reviewtype"></a>

###  ReviewType

**Ƭ ReviewType**: *"http://activitystrea.ms/schema/1.0/review"*

*Defined in [src/activity-types/activity-type.types.ts:46](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L46)*

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

*Defined in [src/activity-types/activity-type.types.ts:19](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L19)*

___
<a id="surveytype"></a>

###  SurveyType

**Ƭ SurveyType**: *"http://id.tincanapi.com/activitytype/survey"*

*Defined in [src/activity-types/activity-type.types.ts:47](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L47)*

___
<a id="timestamp"></a>

###  Timestamp

**Ƭ Timestamp**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/timestamp.d.ts:14*

Timestamps are a format type which represent a specific time. They are formatted according to ISO 8601's normal format. Statements sent to an LRS can be expected to keep precision to at least milliseconds

*   A Timestamp MUST be formatted according to ISO 8601.
*   A Timestamp SHOULD\* be expressed using the format described in RFC 3339, which is a profile of ISO 8601.
*   A Timestamp MUST preserve precision to at least milliseconds (3 decimal points beyond seconds).
*   A Timestamp SHOULD\* include the time zone.
*   If the Timestamp includes a time zone, the LRS MAY be return the Timestamp using a different timezone to the one originally used in the Statement so long as the point in time referenced is not affected.
*   The LRS SHOULD\* return the Timestamp in UTC timezone.
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

*Defined in [src/verbs/verbs.types.ts:7](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.types.ts#L7)*

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="verbidchecker"></a>

###  VerbIdChecker

**Ƭ VerbIdChecker**: *`function`*

*Defined in [src/verbs/verbs.types.ts:1](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.types.ts#L1)*

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
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

*Defined in [src/activity-types/activity-type.types.ts:31](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L31)*

___
<a id="wordsbankactivitytype"></a>

###  WordsBankActivityType

**Ƭ WordsBankActivityType**: *"https://w3id.org/xapi/smart/activity/words-bank"*

*Defined in [src/activity-types/activity-type.types.ts:20](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L20)*

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

*Defined in [src/activity-types/activity-types.ts:101](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.ts#L101)*

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
<a id="isaccessed"></a>

### `<Const>` isAccessed

**● isAccessed**: *`function`* =  isVerbId(verbs.accessed.id)

*Defined in [src/verbs/verb-ids.checkers.ts:119](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L119)*

Check if the given verb identifier is [verbs.accessed](modules/verbs.md#accessed)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isaccessedverb"></a>

### `<Const>` isAccessedVerb

**● isAccessedVerb**: *`function`* =  isVerb(verbs.accessed)

*Defined in [src/verbs/verbs.checkers.ts:119](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L119)*

Check if the given verb object is [verbs.accessed](modules/verbs.md#accessed)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isanswered"></a>

### `<Const>` isAnswered

**● isAnswered**: *`function`* =  isVerbId(verbs.answered.id)

*Defined in [src/verbs/verb-ids.checkers.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L14)*

Check if the given verb identifier is [verbs.answered](modules/verbs.md#answered)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isansweredverb"></a>

### `<Const>` isAnsweredVerb

**● isAnsweredVerb**: *`function`* =  isVerb(verbs.answered)

*Defined in [src/verbs/verbs.checkers.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L14)*

Check if the given verb object is [verbs.answered](modules/verbs.md#answered)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isattempt"></a>

### `<Const>` isAttempt

**● isAttempt**: *`function`* =  isActivityType(nonInteractiveTypes.attempt)

*Defined in [src/activity-types/activity-types.checkers.ts:158](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L158)*

Check if the given activity type if [nonInteractiveTypes.attempt](modules/noninteractivetypes.md#attempt)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isaudio"></a>

### `<Const>` isAudio

**● isAudio**: *`function`* =  isActivityType(audioVideoTypes.audio)

*Defined in [src/activity-types/activity-types.checkers.ts:137](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L137)*

Check if the given activity type if [audioVideoTypes.audio](modules/audiovideotypes.md#audio)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isaudiovideo"></a>

### `<Const>` isAudioVideo

**● isAudioVideo**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isAudio, isVideo])

*Defined in [src/activity-types/activity-types.checkers.ts:150](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L150)*

Check if the given activity type if a audio/video:

*   [audioVideoTypes.audio](modules/audiovideotypes.md#audio)
*   [audioVideoTypes.video](modules/audiovideotypes.md#video)

___
<a id="isaudiovideorecipe"></a>

### `<Const>` isAudioVideoRecipe

**● isAudioVideoRecipe**: *`function`* =  isRecipe(recipes.audioVideo)

*Defined in [src/recipes/recipes.checkers.ts:25](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L25)*

Check if the given recipe identifier is [recipes.audioVideo](modules/recipes.md#audiovideo)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="isbinarychoice"></a>

### `<Const>` isBinaryChoice

**● isBinaryChoice**: *`function`* =  isActivityType(closedResponseTypes.binaryChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:27](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L27)*

Check if the given activity type is [closedResponseTypes.binaryChoice](modules/closedresponsetypes.md#binarychoice)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isbook"></a>

### `<Const>` isBook

**● isBook**: *`function`* =  isActivityType(bookTypes.book)

*Defined in [src/activity-types/activity-types.checkers.ts:179](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L179)*

Check if the given activity type if [bookTypes.book](modules/booktypes.md#book)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isbookcontainer"></a>

### `<Const>` isBookContainer

**● isBookContainer**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isBook, isUnit, isLesson])

*Defined in [src/activity-types/activity-types.checkers.ts:206](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L206)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:76](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L76)*

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

*Defined in [src/recipes/recipes.checkers.ts:20](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L20)*

Check if the given recipe identifier is [recipes.closedResponse](modules/recipes.md#closedresponse)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="iscompleted"></a>

### `<Const>` isCompleted

**● isCompleted**: *`function`* =  isVerbId(verbs.completed.id)

*Defined in [src/verbs/verb-ids.checkers.ts:69](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L69)*

Check if the given verb identifier is [verbs.completed](modules/verbs.md#completed)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="iscompletedverb"></a>

### `<Const>` isCompletedVerb

**● isCompletedVerb**: *`function`* =  isVerb(verbs.completed)

*Defined in [src/verbs/verbs.checkers.ts:69](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L69)*

Check if the given verb object is [verbs.completed](modules/verbs.md#completed)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="iscreated"></a>

### `<Const>` isCreated

**● isCreated**: *`function`* =  isVerbId(verbs.created.id)

*Defined in [src/verbs/verb-ids.checkers.ts:124](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L124)*

Check if the given verb identifier is [verbs.created](modules/verbs.md#created)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="iscreatedverb"></a>

### `<Const>` isCreatedVerb

**● isCreatedVerb**: *`function`* =  isVerb(verbs.created)

*Defined in [src/verbs/verbs.checkers.ts:124](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L124)*

Check if the given verb object is [verbs.created](modules/verbs.md#created)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isdebate"></a>

### `<Const>` isDebate

**● isDebate**: *`function`* =  isActivityType(discussionTypes.debate)

*Defined in [src/activity-types/activity-types.checkers.ts:129](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L129)*

Check if the given activity type if [discussionTypes.debate](modules/discussiontypes.md#debate)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isdeleted"></a>

### `<Const>` isDeleted

**● isDeleted**: *`function`* =  isVerbId(verbs.deleted.id)

*Defined in [src/verbs/verb-ids.checkers.ts:94](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L94)*

Check if the given verb identifier is [verbs.deleted](modules/verbs.md#deleted)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isdeletedverb"></a>

### `<Const>` isDeletedVerb

**● isDeletedVerb**: *`function`* =  isVerb(verbs.deleted)

*Defined in [src/verbs/verbs.checkers.ts:94](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L94)*

Check if the given verb object is [verbs.deleted](modules/verbs.md#deleted)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isdisabled"></a>

### `<Const>` isDisabled

**● isDisabled**: *`function`* =  isVerbId(verbs.disabled.id)

*Defined in [src/verbs/verb-ids.checkers.ts:79](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L79)*

Check if the given verb identifier is [verbs.disabled](modules/verbs.md#disabled)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isdisabledverb"></a>

### `<Const>` isDisabledVerb

**● isDisabledVerb**: *`function`* =  isVerb(verbs.disabled)

*Defined in [src/verbs/verbs.checkers.ts:79](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L79)*

Check if the given verb object is [verbs.disabled](modules/verbs.md#disabled)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isdiscussion"></a>

### `<Const>` isDiscussion

**● isDiscussion**: *`function`* =  isActivityType(discussionTypes.discussion)

*Defined in [src/activity-types/activity-types.checkers.ts:114](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L114)*

Check if the given activity type if [discussionTypes.discussion](modules/discussiontypes.md#discussion)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isdiscussionrecipe"></a>

### `<Const>` isDiscussionRecipe

**● isDiscussionRecipe**: *`function`* =  isRecipe(recipes.discussion)

*Defined in [src/recipes/recipes.checkers.ts:30](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L30)*

Check if the given recipe identifier is [recipes.discussion](modules/recipes.md#discussion)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="isdropdownchoice"></a>

### `<Const>` isDropDownChoice

**● isDropDownChoice**: *`function`* =  isActivityType(closedResponseTypes.dropDownChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:32](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L32)*

Check if the given activity type is [closedResponseTypes.dropDownChoice](modules/closedresponsetypes.md#dropdownchoice)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isedited"></a>

### `<Const>` isEdited

**● isEdited**: *`function`* =  isVerbId(verbs.edited.id)

*Defined in [src/verbs/verb-ids.checkers.ts:134](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L134)*

Check if the given verb identifier is [verbs.edited](modules/verbs.md#edited)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="iseditedverb"></a>

### `<Const>` isEditedVerb

**● isEditedVerb**: *`function`* =  isVerb(verbs.edited)

*Defined in [src/verbs/verbs.checkers.ts:134](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L134)*

Check if the given verb object is [verbs.edited](modules/verbs.md#edited)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *`function`* =  isVerbId(verbs.enabled.id)

*Defined in [src/verbs/verb-ids.checkers.ts:74](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L74)*

Check if the given verb identifier is [verbs.enabled](modules/verbs.md#enabled)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isenabledverb"></a>

### `<Const>` isEnabledVerb

**● isEnabledVerb**: *`function`* =  isVerb(verbs.enabled)

*Defined in [src/verbs/verbs.checkers.ts:74](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L74)*

Check if the given verb object is [verbs.enabled](modules/verbs.md#enabled)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isessay"></a>

### `<Const>` isEssay

**● isEssay**: *`function`* =  isActivityType(openAnswerTypes.essay)

*Defined in [src/activity-types/activity-types.checkers.ts:93](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L93)*

Check if the given activity type if [openAnswerTypes.essay](modules/openanswertypes.md#essay)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isevaluated"></a>

### `<Const>` isEvaluated

**● isEvaluated**: *`function`* =  isVerbId(verbs.evaluated.id)

*Defined in [src/verbs/verb-ids.checkers.ts:19](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L19)*

Check if the given verb identifier is [verbs.evaluated](modules/verbs.md#evaluated)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isevaluatedverb"></a>

### `<Const>` isEvaluatedVerb

**● isEvaluatedVerb**: *`function`* =  isVerb(verbs.evaluated)

*Defined in [src/verbs/verbs.checkers.ts:19](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L19)*

Check if the given verb object is [verbs.evaluated](modules/verbs.md#evaluated)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isfailed"></a>

### `<Const>` isFailed

**● isFailed**: *`function`* =  isVerbId(verbs.failed.id)

*Defined in [src/verbs/verb-ids.checkers.ts:29](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L29)*

Check if the given verb identifier is [verbs.failed](modules/verbs.md#failed)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isfailedverb"></a>

### `<Const>` isFailedVerb

**● isFailedVerb**: *`function`* =  isVerb(verbs.failed)

*Defined in [src/verbs/verbs.checkers.ts:29](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L29)*

Check if the given verb object is [verbs.failed](modules/verbs.md#failed)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isfeedback"></a>

### `<Const>` isFeedback

**● isFeedback**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isQuestion, isReview, isSurvey])

*Defined in [src/activity-types/activity-types.checkers.ts:273](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L273)*

Check if the given activity type is one of:

*   [feedbackTypes.question](modules/feedbacktypes.md#question)
*   [feedbackTypes.review](modules/feedbacktypes.md#review)
*   [feedbackTypes.survey](modules/feedbacktypes.md#survey)

___
<a id="isfillinthegaps"></a>

### `<Const>` isFillInTheGaps

**● isFillInTheGaps**: *`function`* =  isActivityType(closedResponseTypes.fillInTheGaps)

*Defined in [src/activity-types/activity-types.checkers.ts:37](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L37)*

Check if the given activity type is [closedResponseTypes.fillInTheGaps](modules/closedresponsetypes.md#fillinthegaps)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isforumreply"></a>

### `<Const>` isForumReply

**● isForumReply**: *`function`* =  isActivityType(discussionTypes.forumReply)

*Defined in [src/activity-types/activity-types.checkers.ts:119](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L119)*

Check if the given activity type if [discussionTypes.forumReply](modules/discussiontypes.md#forumreply)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isforumtopic"></a>

### `<Const>` isForumTopic

**● isForumTopic**: *`function`* =  isActivityType(discussionTypes.forumTopic)

*Defined in [src/activity-types/activity-types.checkers.ts:124](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L124)*

Check if the given activity type if [discussionTypes.forumTopic](modules/discussiontypes.md#forumtopic)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isgenericclosedresponse"></a>

### `<Const>` isGenericClosedResponse

**● isGenericClosedResponse**: *`function`* =  isActivityType(closedResponseTypes.genericClosedResponse)

*Defined in [src/activity-types/activity-types.checkers.ts:42](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L42)*

Check if the given activity type if [closedResponseTypes.genericClosedResponse](modules/closedresponsetypes.md#genericclosedresponse)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isgenericopenanswer"></a>

### `<Const>` isGenericOpenAnswer

**● isGenericOpenAnswer**: *`function`* =  isActivityType(openAnswerTypes.genericOpenAnswer)

*Defined in [src/activity-types/activity-types.checkers.ts:98](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L98)*

Check if the given activity type if [openAnswerTypes.genericOpenAnswer](modules/openanswertypes.md#genericopenanswer)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isinitialized"></a>

### `<Const>` isInitialized

**● isInitialized**: *`function`* =  isVerbId(verbs.initialized.id)

*Defined in [src/verbs/verb-ids.checkers.ts:34](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L34)*

Check if the given verb identifier is [verbs.initialized](modules/verbs.md#initialized)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isinitializedverb"></a>

### `<Const>` isInitializedVerb

**● isInitializedVerb**: *`function`* =  isVerb(verbs.initialized)

*Defined in [src/verbs/verbs.checkers.ts:34](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L34)*

Check if the given verb object is [verbs.initialized](modules/verbs.md#initialized)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isinteracted"></a>

### `<Const>` isInteracted

**● isInteracted**: *`function`* =  isVerbId(verbs.interacted.id)

*Defined in [src/verbs/verb-ids.checkers.ts:39](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L39)*

Check if the given verb identifier is [verbs.interacted](modules/verbs.md#interacted)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isinteractedverb"></a>

### `<Const>` isInteractedVerb

**● isInteractedVerb**: *`function`* =  isVerb(verbs.interacted)

*Defined in [src/verbs/verbs.checkers.ts:39](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L39)*

Check if the given verb object is [verbs.interacted](modules/verbs.md#interacted)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isjoined"></a>

### `<Const>` isJoined

**● isJoined**: *`function`* =  isVerbId(verbs.joined.id)

*Defined in [src/verbs/verb-ids.checkers.ts:129](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L129)*

Check if the given verb identifier is [verbs.joined](modules/verbs.md#joined)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isjoinedverb"></a>

### `<Const>` isJoinedVerb

**● isJoinedVerb**: *`function`* =  isVerb(verbs.joined)

*Defined in [src/verbs/verbs.checkers.ts:129](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L129)*

Check if the given verb object is [verbs.joined](modules/verbs.md#joined)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="islaeprocessable"></a>

### `<Const>` isLaeProcessable

**● isLaeProcessable**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isOpenAnswer, isClosedResponse, isAudioVideo])

*Defined in [src/activity-types/activity-types.checkers.ts:227](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L227)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:189](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L189)*

Check if the given activity type if [bookTypes.lesson](modules/booktypes.md#lesson)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isliked"></a>

### `<Const>` isLiked

**● isLiked**: *`function`* =  isVerbId(verbs.liked.id)

*Defined in [src/verbs/verb-ids.checkers.ts:99](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L99)*

Check if the given verb identifier is [verbs.liked](modules/verbs.md#liked)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="islikedverb"></a>

### `<Const>` isLikedVerb

**● isLikedVerb**: *`function`* =  isVerb(verbs.liked)

*Defined in [src/verbs/verbs.checkers.ts:99](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L99)*

Check if the given verb object is [verbs.liked](modules/verbs.md#liked)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="islistened"></a>

### `<Const>` isListened

**● isListened**: *`function`* =  isVerbId(verbs.listen.id)

*Defined in [src/verbs/verb-ids.checkers.ts:54](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L54)*

Check if the given verb identifier is [verbs.listen](modules/verbs.md#listen)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="islistenedverb"></a>

### `<Const>` isListenedVerb

**● isListenedVerb**: *`function`* =  isVerb(verbs.listen)

*Defined in [src/verbs/verbs.checkers.ts:54](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L54)*

Check if the given verb object is [verbs.listen](modules/verbs.md#listen)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="ismatchingpairs"></a>

### `<Const>` isMatchingPairs

**● isMatchingPairs**: *`function`* =  isActivityType(closedResponseTypes.matchingPairs)

*Defined in [src/activity-types/activity-types.checkers.ts:47](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L47)*

Check if the given activity type if [closedResponseTypes.matchingPairs](modules/closedresponsetypes.md#matchingpairs)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="ismultiplechoice"></a>

### `<Const>` isMultipleChoice

**● isMultipleChoice**: *`function`* =  isActivityType(closedResponseTypes.multipleChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:52](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L52)*

Check if the given activity type if [closedResponseTypes.multipleChoice](modules/closedresponsetypes.md#multiplechoice)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isnoninteractive"></a>

### `<Const>` isNonInteractive

**● isNonInteractive**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isAttempt, isNonInteractiveAttempt])

*Defined in [src/activity-types/activity-types.checkers.ts:171](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L171)*

Check if the given activity type if a non interactive type:

*   [nonInteractiveTypes.attempt](modules/noninteractivetypes.md#attempt)
*   [nonInteractiveTypes.nonInteractive](modules/noninteractivetypes.md#noninteractive)

___
<a id="isnoninteractiveattempt"></a>

### `<Const>` isNonInteractiveAttempt

**● isNonInteractiveAttempt**: *`function`* =  isActivityType(nonInteractiveTypes.nonInteractive)

*Defined in [src/activity-types/activity-types.checkers.ts:163](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L163)*

Check if the given activity type if [nonInteractiveTypes.nonInteractive](modules/noninteractivetypes.md#noninteractive)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isnoninteractiverecipe"></a>

### `<Const>` isNonInteractiveRecipe

**● isNonInteractiveRecipe**: *`function`* =  isRecipe(recipes.nonInteractive)

*Defined in [src/recipes/recipes.checkers.ts:35](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L35)*

Check if the given recipe identifier is [recipes.nonInteractive](modules/recipes.md#noninteractive)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="isopenanswer"></a>

### `<Const>` isOpenAnswer

**● isOpenAnswer**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isEssay, isGenericOpenAnswer])

*Defined in [src/activity-types/activity-types.checkers.ts:106](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L106)*

Check if the given activity type if an open answer type:

*   [openAnswerTypes.essay](modules/openanswertypes.md#essay)
*   [openAnswerTypes.genericOpenAnswer](modules/openanswertypes.md#genericopenanswer)

___
<a id="isopenanswerrecipe"></a>

### `<Const>` isOpenAnswerRecipe

**● isOpenAnswerRecipe**: *`function`* =  isRecipe(recipes.openAnswer)

*Defined in [src/recipes/recipes.checkers.ts:15](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L15)*

Check if the given recipe identifier is [recipes.openAnswer](modules/recipes.md#openanswer)

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="ispassed"></a>

### `<Const>` isPassed

**● isPassed**: *`function`* =  isVerbId(verbs.passed.id)

*Defined in [src/verbs/verb-ids.checkers.ts:24](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L24)*

Check if the given verb identifier is [verbs.passed](modules/verbs.md#passed)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="ispassedverb"></a>

### `<Const>` isPassedVerb

**● isPassedVerb**: *`function`* =  isVerb(verbs.passed)

*Defined in [src/verbs/verbs.checkers.ts:24](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L24)*

Check if the given verb object is [verbs.passed](modules/verbs.md#passed)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="ispaused"></a>

### `<Const>` isPaused

**● isPaused**: *`function`* =  isVerbId(verbs.paused.id)

*Defined in [src/verbs/verb-ids.checkers.ts:49](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L49)*

Check if the given verb identifier is [verbs.paused](modules/verbs.md#paused)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="ispausedverb"></a>

### `<Const>` isPausedVerb

**● isPausedVerb**: *`function`* =  isVerb(verbs.paused)

*Defined in [src/verbs/verbs.checkers.ts:49](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L49)*

Check if the given verb object is [verbs.paused](modules/verbs.md#paused)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isplayed"></a>

### `<Const>` isPlayed

**● isPlayed**: *`function`* =  isVerbId(verbs.played.id)

*Defined in [src/verbs/verb-ids.checkers.ts:44](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L44)*

Check if the given verb identifier is [verbs.played](modules/verbs.md#played)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isplayedverb"></a>

### `<Const>` isPlayedVerb

**● isPlayedVerb**: *`function`* =  isVerb(verbs.played)

*Defined in [src/verbs/verbs.checkers.ts:44](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L44)*

Check if the given verb object is [verbs.played](modules/verbs.md#played)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isposted"></a>

### `<Const>` isPosted

**● isPosted**: *`function`* =  isVerbId(verbs.posted.id)

*Defined in [src/verbs/verb-ids.checkers.ts:84](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L84)*

Check if the given verb identifier is [verbs.posted](modules/verbs.md#posted)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="ispostedverb"></a>

### `<Const>` isPostedVerb

**● isPostedVerb**: *`function`* =  isVerb(verbs.posted)

*Defined in [src/verbs/verbs.checkers.ts:84](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L84)*

Check if the given verb object is [verbs.posted](modules/verbs.md#posted)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isquestion"></a>

### `<Const>` isQuestion

**● isQuestion**: *`function`* =  isActivityType(feedbackTypes.question)

*Defined in [src/activity-types/activity-types.checkers.ts:254](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L254)*

Check if the given activity type if [feedbackTypes.question](modules/feedbacktypes.md#question)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isquiz"></a>

### `<Const>` isQuiz

**● isQuiz**: *`function`* =  isActivityType(otherTypes.quiz)

*Defined in [src/activity-types/activity-types.checkers.ts:197](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L197)*

Check if the given activity type if [otherTypes.quiz](modules/othertypes.md#quiz)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isreplied"></a>

### `<Const>` isReplied

**● isReplied**: *`function`* =  isVerbId(verbs.replied.id)

*Defined in [src/verbs/verb-ids.checkers.ts:89](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L89)*

Check if the given verb identifier is [verbs.replied](modules/verbs.md#replied)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isrepliedverb"></a>

### `<Const>` isRepliedVerb

**● isRepliedVerb**: *`function`* =  isVerb(verbs.replied)

*Defined in [src/verbs/verbs.checkers.ts:89](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L89)*

Check if the given verb object is [verbs.replied](modules/verbs.md#replied)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isreported"></a>

### `<Const>` isReported

**● isReported**: *`function`* =  isVerbId(verbs.reported.id)

*Defined in [src/verbs/verb-ids.checkers.ts:114](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L114)*

Check if the given verb identifier is [verbs.reported](modules/verbs.md#reported)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isreportedverb"></a>

### `<Const>` isReportedVerb

**● isReportedVerb**: *`function`* =  isVerb(verbs.reported)

*Defined in [src/verbs/verbs.checkers.ts:114](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L114)*

Check if the given verb object is [verbs.reported](modules/verbs.md#reported)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isreview"></a>

### `<Const>` isReview

**● isReview**: *`function`* =  isActivityType(feedbackTypes.review)

*Defined in [src/activity-types/activity-types.checkers.ts:259](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L259)*

Check if the given activity type if [feedbackTypes.review](modules/feedbacktypes.md#review)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="issinglechoice"></a>

### `<Const>` isSingleChoice

**● isSingleChoice**: *`function`* =  isActivityType(closedResponseTypes.singleChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:57](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L57)*

Check if the given activity type if [closedResponseTypes.singleChoice](modules/closedresponsetypes.md#singlechoice)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isskipped"></a>

### `<Const>` isSkipped

**● isSkipped**: *`function`* =  isVerbId(verbs.skipped.id)

*Defined in [src/verbs/verb-ids.checkers.ts:64](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L64)*

Check if the given verb identifier is [verbs.skipped](modules/verbs.md#skipped)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isskippedverb"></a>

### `<Const>` isSkippedVerb

**● isSkippedVerb**: *`function`* =  isVerb(verbs.skipped)

*Defined in [src/verbs/verbs.checkers.ts:64](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L64)*

Check if the given verb object is [verbs.skipped](modules/verbs.md#skipped)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="issurvey"></a>

### `<Const>` isSurvey

**● isSurvey**: *`function`* =  isActivityType(feedbackTypes.survey)

*Defined in [src/activity-types/activity-types.checkers.ts:264](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L264)*

Check if the given activity type if [feedbackTypes.survey](modules/feedbacktypes.md#survey)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isterminated"></a>

### `<Const>` isTerminated

**● isTerminated**: *`function`* =  isVerbId(verbs.terminated.id)

*Defined in [src/verbs/verb-ids.checkers.ts:139](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L139)*

Check if the given verb identifier is [verbs.terminated](modules/verbs.md#terminated)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isterminatedverb"></a>

### `<Const>` isTerminatedVerb

**● isTerminatedVerb**: *`function`* =  isVerb(verbs.terminated)

*Defined in [src/verbs/verbs.checkers.ts:139](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L139)*

Check if the given verb object is [verbs.terminated](modules/verbs.md#terminated)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isunit"></a>

### `<Const>` isUnit

**● isUnit**: *`function`* =  isActivityType(bookTypes.unit)

*Defined in [src/activity-types/activity-types.checkers.ts:184](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L184)*

Check if the given activity type if [bookTypes.unit](modules/booktypes.md#unit)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isvideo"></a>

### `<Const>` isVideo

**● isVideo**: *`function`* =  isActivityType(audioVideoTypes.video)

*Defined in [src/activity-types/activity-types.checkers.ts:142](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L142)*

Check if the given activity type if {@link discussionTypes.video}

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isvoteddown"></a>

### `<Const>` isVotedDown

**● isVotedDown**: *`function`* =  isVerbId(verbs.votedDown.id)

*Defined in [src/verbs/verb-ids.checkers.ts:109](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L109)*

Check if the given verb identifier is [verbs.votedDown](modules/verbs.md#voteddown)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isvoteddownverb"></a>

### `<Const>` isVotedDownVerb

**● isVotedDownVerb**: *`function`* =  isVerb(verbs.votedDown)

*Defined in [src/verbs/verbs.checkers.ts:109](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L109)*

Check if the given verb object is [verbs.votedDown](modules/verbs.md#voteddown)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="isvotedup"></a>

### `<Const>` isVotedUp

**● isVotedUp**: *`function`* =  isVerbId(verbs.votedUp.id)

*Defined in [src/verbs/verb-ids.checkers.ts:104](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L104)*

Check if the given verb identifier is [verbs.votedUp](modules/verbs.md#votedup)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="isvotedupverb"></a>

### `<Const>` isVotedUpVerb

**● isVotedUpVerb**: *`function`* =  isVerb(verbs.votedUp)

*Defined in [src/verbs/verbs.checkers.ts:104](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L104)*

Check if the given verb object is [verbs.votedUp](modules/verbs.md#votedup)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="iswatched"></a>

### `<Const>` isWatched

**● isWatched**: *`function`* =  isVerbId(verbs.watched.id)

*Defined in [src/verbs/verb-ids.checkers.ts:59](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L59)*

Check if the given verb identifier is [verbs.watched](modules/verbs.md#watched)

#### Type declaration
▸(verbId: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `string` |

**Returns:** `boolean`

___
<a id="iswatchedverb"></a>

### `<Const>` isWatchedVerb

**● isWatchedVerb**: *`function`* =  isVerb(verbs.watched)

*Defined in [src/verbs/verbs.checkers.ts:59](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L59)*

Check if the given verb object is [verbs.watched](modules/verbs.md#watched)

#### Type declaration
▸<`T`>(verbId: *`T`*): `boolean`

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| verbId | `T` |

**Returns:** `boolean`

___
<a id="iswordsbank"></a>

### `<Const>` isWordsBank

**● isWordsBank**: *`function`* =  isActivityType(closedResponseTypes.wordsBank)

*Defined in [src/activity-types/activity-types.checkers.ts:62](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L62)*

Check if the given activity type if [closedResponseTypes.wordsBank](modules/closedresponsetypes.md#wordsbank)

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___

## Functions

<a id="anypass"></a>

### `<Private>``<Const>` anyPass

▸ **anyPass**(checks: *`Array`<`function`>*): `(Anonymous function)`

*Defined in [src/fp.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/fp.ts#L14)*

Takes a list of predicates and returns a predicate that returns true for a given list of arguments if at least one of the provided predicates is satisfied by those arguments

**Parameters:**

| Name | Type |
| ------ | ------ |
| checks | `Array`<`function`> |

**Returns:** `(Anonymous function)`

___
<a id="equals"></a>

### `<Private>``<Const>` equals

▸ **equals**(expected: *`any`*): `(Anonymous function)`

*Defined in [src/fp.ts:6](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/fp.ts#L6)*

Returns true if its arguments are equals, false otherwise

**Parameters:**

| Name | Type |
| ------ | ------ |
| expected | `any` |

**Returns:** `(Anonymous function)`

___
<a id="isactivitytype"></a>

### `<Private>``<Const>` isActivityType

▸ **isActivityType**(expectedType: *`string`*): [ActivityTypeChecker](#activitytypechecker)

*Defined in [src/activity-types/activity-types.checkers.ts:20](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| expectedType | `string` |

**Returns:** [ActivityTypeChecker](#activitytypechecker)

___
<a id="isassessable"></a>

### `<Const>` isAssessable

▸ **isAssessable**(activityType: *`string`*): `boolean`

*Defined in [src/activity-types/activity-types.checkers.ts:246](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L246)*

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

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isrecipe"></a>

### `<Private>``<Const>` isRecipe

▸ **isRecipe**(expectedRecipe: *`string`*): [RecipeChecker](#recipechecker)

*Defined in [src/recipes/recipes.checkers.ts:10](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| expectedRecipe | `string` |

**Returns:** [RecipeChecker](#recipechecker)

___
<a id="isverb"></a>

### `<Private>``<Const>` isVerb

▸ **isVerb**<`T`>(expectedVerb: *`T`*): [VerbChecker](#verbchecker)

*Defined in [src/verbs/verbs.checkers.ts:9](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verbs.checkers.ts#L9)*

**Type parameters:**

#### T :  [VerbLike](interfaces/verblike.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| expectedVerb | `T` |

**Returns:** [VerbChecker](#verbchecker)

___
<a id="isverbid"></a>

### `<Private>``<Const>` isVerbId

▸ **isVerbId**(expectedVerbId: *`string`*): [VerbIdChecker](#verbidchecker)

*Defined in [src/verbs/verb-ids.checkers.ts:9](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| expectedVerbId | `string` |

**Returns:** [VerbIdChecker](#verbidchecker)

___
<a id="propeq"></a>

### `<Private>``<Const>` propEq

▸ **propEq**<`T`>(property: *`keyof T`*, value: *`any`*): `(Anonymous function)`

*Defined in [src/fp.ts:21](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/fp.ts#L21)*

Returns true if the specified object property is equal, false otherwise

**Type parameters:**

#### T :  `object`
**Parameters:**

| Name | Type |
| ------ | ------ |
| property | `keyof T` |
| value | `any` |

**Returns:** `(Anonymous function)`

___

## Object literals

<a id="activitytypes"></a>

### `<Const>` activityTypes

**activityTypes**: *`object`*

*Defined in [src/activity-types/activity-types.ts:76](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.ts#L76)*

Every activity type combined into a single object

___

