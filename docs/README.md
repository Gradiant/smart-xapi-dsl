
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
* [scormTypes](modules/scormtypes.md)
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
* [AudioRecordingActivityType](#audiorecordingactivitytype)
* [AudioVideoType](#audiovideotype)
* [ClosedResponseType](#closedresponsetype)
* [DebateActivityType](#debateactivitytype)
* [DiscussionActivityType](#discussionactivitytype)
* [DrawActivityType](#drawactivitytype)
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
* [LikertType](#likerttype)
* [MailtoIRI](#mailtoiri)
* [MatchingPairsActivityType](#matchingpairsactivitytype)
* [MatrixMultipleChoiceActivityType](#matrixmultiplechoiceactivitytype)
* [MatrixSingleChoiceActivityType](#matrixsinglechoiceactivitytype)
* [MultipleChoiceActivityType](#multiplechoiceactivitytype)
* [NonInteractiveAttemptActivityType](#noninteractiveattemptactivitytype)
* [NonInteractiveType](#noninteractivetype)
* [Object](#object)
* [OpenAnswerType](#openanswertype)
* [OtherType](#othertype)
* [ProcessableActivityType](#processableactivitytype)
* [QuestionType](#questiontype)
* [QuizType](#quiztype)
* [RecipeChecker](#recipechecker)
* [ResponseInImageActivityType](#responseinimageactivitytype)
* [ReviewType](#reviewtype)
* [ScormChoiceActivityType](#scormchoiceactivitytype)
* [ScormGenericActivityType](#scormgenericactivitytype)
* [ScormInlineChoiceActivityType](#scorminlinechoiceactivitytype)
* [ScormMultipleChoiceActivityType](#scormmultiplechoiceactivitytype)
* [ScormTextEntryActivityType](#scormtextentryactivitytype)
* [ScormType](#scormtype)
* [Sha1Sum](#sha1sum)
* [Sha2Sum](#sha2sum)
* [SingleChoiceActivityType](#singlechoiceactivitytype)
* [SurveyType](#surveytype)
* [Timestamp](#timestamp)
* [URI](#uri)
* [UUID](#uuid)
* [UploadFileActivityType](#uploadfileactivitytype)
* [VerbChecker](#verbchecker)
* [VerbIdChecker](#verbidchecker)
* [Version](#version)
* [VideoActivityType](#videoactivitytype)
* [VideoRecordingActivityType](#videorecordingactivitytype)
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
* [isAudioRecording](#isaudiorecording)
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
* [isDraw](#isdraw)
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
* [isLikert](#islikert)
* [isLikertRecipe](#islikertrecipe)
* [isListened](#islistened)
* [isListenedVerb](#islistenedverb)
* [isMatchingPairs](#ismatchingpairs)
* [isMatrixMultipleChoice](#ismatrixmultiplechoice)
* [isMatrixSingleChoice](#ismatrixsinglechoice)
* [isMultipleChoice](#ismultiplechoice)
* [isNonInteractive](#isnoninteractive)
* [isNonInteractiveAttempt](#isnoninteractiveattempt)
* [isNonInteractiveRecipe](#isnoninteractiverecipe)
* [isOpenAnswer](#isopenanswer)
* [isOpenAnswerRecipe](#isopenanswerrecipe)
* [isOtherType](#isothertype)
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
* [isResponseInImage](#isresponseinimage)
* [isReview](#isreview)
* [isScorm](#isscorm)
* [isScormChoice](#isscormchoice)
* [isScormGeneric](#isscormgeneric)
* [isScormInlineChoice](#isscorminlinechoice)
* [isScormMultipleChoice](#isscormmultiplechoice)
* [isScormRecipe](#isscormrecipe)
* [isScormTextEntry](#isscormtextentry)
* [isSingleChoice](#issinglechoice)
* [isSkipped](#isskipped)
* [isSkippedVerb](#isskippedverb)
* [isSurvey](#issurvey)
* [isTerminated](#isterminated)
* [isTerminatedVerb](#isterminatedverb)
* [isUnit](#isunit)
* [isUploadFile](#isuploadfile)
* [isVideo](#isvideo)
* [isVideoRecording](#isvideorecording)
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

___
<a id="activitytypechecker"></a>

###  ActivityTypeChecker

**Ƭ ActivityTypeChecker**: *`function`*

*Defined in [src/activity-types/activity-types.checkers.ts:15](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L15)*

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

___
<a id="actorobject"></a>

###  ActorObject

**Ƭ ActorObject**: *[Actor](#actor) & `object`*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/actor-object.d.ts:5*

___
<a id="agent"></a>

###  Agent

**Ƭ Agent**: *[AccountAgent](interfaces/accountagent.md) \| [MboxAgent](interfaces/mboxagent.md) \| [OpenIdAgent](interfaces/openidagent.md) \| [MboxSha1SumAgent](interfaces/mboxsha1sumagent.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/agent/agent.d.ts:12*

___
<a id="attemptactivitytype"></a>

###  AttemptActivityType

**Ƭ AttemptActivityType**: *"https://w3id.org/xapi/smart/activity/attempt"*

*Defined in [src/activity-types/activity-type.types.ts:57](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L57)*

___
<a id="audioactivitytype"></a>

###  AudioActivityType

**Ƭ AudioActivityType**: *"https://w3id.org/xapi/smart/activity/audio"*

*Defined in [src/activity-types/activity-type.types.ts:48](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L48)*

___
<a id="audiorecordingactivitytype"></a>

###  AudioRecordingActivityType

**Ƭ AudioRecordingActivityType**: *"https://w3id.org/xapi/smart/activity/audio-recording"*

*Defined in [src/activity-types/activity-type.types.ts:12](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L12)*

___
<a id="audiovideotype"></a>

###  AudioVideoType

**Ƭ AudioVideoType**: *[AudioActivityType](#audioactivitytype) \| [VideoActivityType](#videoactivitytype)*

*Defined in [src/activity-types/activity-type.types.ts:50](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L50)*

___
<a id="closedresponsetype"></a>

###  ClosedResponseType

**Ƭ ClosedResponseType**: *[DropDownChoiceActivityType](#dropdownchoiceactivitytype) \| [FillInTheGapsActivityType](#fillinthegapsactivitytype) \| [GenericClosedResponseActivityType](#genericclosedresponseactivitytype) \| [MatchingPairsActivityType](#matchingpairsactivitytype) \| [MultipleChoiceActivityType](#multiplechoiceactivitytype) \| [SingleChoiceActivityType](#singlechoiceactivitytype) \| [WordsBankActivityType](#wordsbankactivitytype) \| [MatrixMultipleChoiceActivityType](#matrixmultiplechoiceactivitytype) \| [MatrixSingleChoiceActivityType](#matrixsinglechoiceactivitytype) \| [ResponseInImageActivityType](#responseinimageactivitytype)*

*Defined in [src/activity-types/activity-type.types.ts:36](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L36)*

___
<a id="debateactivitytype"></a>

###  DebateActivityType

**Ƭ DebateActivityType**: *"https://w3id.org/xapi/smart/activity/discussion"*

*Defined in [src/activity-types/activity-type.types.ts:55](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L55)*

___
<a id="discussionactivitytype"></a>

###  DiscussionActivityType

**Ƭ DiscussionActivityType**: *"http://id.tincanapi.com/activitytype/discussion"*

*Defined in [src/activity-types/activity-type.types.ts:52](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L52)*

___
<a id="drawactivitytype"></a>

###  DrawActivityType

**Ƭ DrawActivityType**: *"https://w3id.org/xapi/smart/activity/draw"*

*Defined in [src/activity-types/activity-type.types.ts:13](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L13)*

___
<a id="dropdownchoiceactivitytype"></a>

###  DropDownChoiceActivityType

**Ƭ DropDownChoiceActivityType**: *"https://w3id.org/xapi/smart/activity/drop-down-choice"*

*Defined in [src/activity-types/activity-type.types.ts:26](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L26)*

___
<a id="duration"></a>

###  Duration

**Ƭ Duration**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/duration.d.ts:20*

___
<a id="essayactivitytype"></a>

###  EssayActivityType

**Ƭ EssayActivityType**: *"https://w3id.org/xapi/smart/activity/essay"*

*Defined in [src/activity-types/activity-type.types.ts:14](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L14)*

___
<a id="feedbacktype"></a>

###  FeedbackType

**Ƭ FeedbackType**: *[QuestionType](#questiontype) \| [ReviewType](#reviewtype) \| [SurveyType](#surveytype)*

*Defined in [src/activity-types/activity-type.types.ts:66](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L66)*

___
<a id="fillinthegapsactivitytype"></a>

###  FillInTheGapsActivityType

**Ƭ FillInTheGapsActivityType**: *"https://w3id.org/xapi/smart/activity/fill-in-the-gaps"*

*Defined in [src/activity-types/activity-type.types.ts:27](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L27)*

___
<a id="forumreplyactivitytype"></a>

###  ForumReplyActivityType

**Ƭ ForumReplyActivityType**: *"http://id.tincanapi.com/activitytype/forum-reply"*

*Defined in [src/activity-types/activity-type.types.ts:53](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L53)*

___
<a id="forumtopicactivitytype"></a>

###  ForumTopicActivityType

**Ƭ ForumTopicActivityType**: *"http://id.tincanapi.com/activitytype/forum-topic"*

*Defined in [src/activity-types/activity-type.types.ts:54](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L54)*

___
<a id="genericclosedresponseactivitytype"></a>

###  GenericClosedResponseActivityType

**Ƭ GenericClosedResponseActivityType**: *"https://w3id.org/xapi/smart/activity/closed-response"*

*Defined in [src/activity-types/activity-type.types.ts:28](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L28)*

___
<a id="genericopenansweractivitytype"></a>

###  GenericOpenAnswerActivityType

**Ƭ GenericOpenAnswerActivityType**: *"https://w3id.org/xapi/smart/activity/open-answer"*

*Defined in [src/activity-types/activity-type.types.ts:15](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L15)*

___
<a id="group"></a>

###  Group

**Ƭ Group**: *[AnonymousGroup](interfaces/anonymousgroup.md) \| [IdentifiedGroup](#identifiedgroup)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/group.d.ts:15*

___
<a id="iri"></a>

###  IRI

**Ƭ IRI**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/iri.d.ts:6*

___
<a id="irl"></a>

###  IRL

**Ƭ IRL**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/irl.d.ts:6*

___
<a id="identifiedgroup"></a>

###  IdentifiedGroup

**Ƭ IdentifiedGroup**: *[AccountGroup](interfaces/accountgroup.md) \| [MboxGroup](interfaces/mboxgroup.md) \| [MboxSha1SumGroup](interfaces/mboxsha1sumgroup.md) \| [OpenIdGroup](interfaces/openidgroup.md)*

*Defined in node_modules/@gradiant/xapi-dsl/types/actor/group/identified-group.d.ts:13*

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

___
<a id="likerttype"></a>

###  LikertType

**Ƭ LikertType**: *"https://w3id.org/xapi/smart/activity/likert"*

*Defined in [src/activity-types/activity-type.types.ts:81](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L81)*

___
<a id="mailtoiri"></a>

###  MailtoIRI

**Ƭ MailtoIRI**: *[IRI](#iri)*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/mailto-iri.d.ts:2*

___
<a id="matchingpairsactivitytype"></a>

###  MatchingPairsActivityType

**Ƭ MatchingPairsActivityType**: *"https://w3id.org/xapi/smart/activity/matching-pairs"*

*Defined in [src/activity-types/activity-type.types.ts:29](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L29)*

___
<a id="matrixmultiplechoiceactivitytype"></a>

###  MatrixMultipleChoiceActivityType

**Ƭ MatrixMultipleChoiceActivityType**: *"https://w3id.org/xapi/smart/activity/matrix-multiple-choice"*

*Defined in [src/activity-types/activity-type.types.ts:33](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L33)*

___
<a id="matrixsinglechoiceactivitytype"></a>

###  MatrixSingleChoiceActivityType

**Ƭ MatrixSingleChoiceActivityType**: *"https://w3id.org/xapi/smart/activity/matrix-single-choice"*

*Defined in [src/activity-types/activity-type.types.ts:34](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L34)*

___
<a id="multiplechoiceactivitytype"></a>

###  MultipleChoiceActivityType

**Ƭ MultipleChoiceActivityType**: *"https://w3id.org/xapi/smart/activity/multiple-choice"*

*Defined in [src/activity-types/activity-type.types.ts:30](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L30)*

___
<a id="noninteractiveattemptactivitytype"></a>

###  NonInteractiveAttemptActivityType

**Ƭ NonInteractiveAttemptActivityType**: *"https://w3id.org/xapi/smart/activity/no-interactive"*

*Defined in [src/activity-types/activity-type.types.ts:58](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L58)*

___
<a id="noninteractivetype"></a>

###  NonInteractiveType

**Ƭ NonInteractiveType**: *[AttemptActivityType](#attemptactivitytype) \| [NonInteractiveAttemptActivityType](#noninteractiveattemptactivitytype)*

*Defined in [src/activity-types/activity-type.types.ts:59](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L59)*

___
<a id="object"></a>

###  Object

**Ƭ Object**: *[Activity](#activity) \| [StatementRef](interfaces/statementref.md) \| [SubStatement](interfaces/substatement.md) \| [ActorObject](#actorobject)*

*Defined in node_modules/@gradiant/xapi-dsl/types/object/object.d.ts:10*

___
<a id="openanswertype"></a>

###  OpenAnswerType

**Ƭ OpenAnswerType**: *[AudioRecordingActivityType](#audiorecordingactivitytype) \| [EssayActivityType](#essayactivitytype) \| [DrawActivityType](#drawactivitytype) \| [GenericOpenAnswerActivityType](#genericopenansweractivitytype) \| [UploadFileActivityType](#uploadfileactivitytype) \| [VideoRecordingActivityType](#videorecordingactivitytype)*

*Defined in [src/activity-types/activity-type.types.ts:18](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L18)*

___
<a id="othertype"></a>

###  OtherType

**Ƭ OtherType**: *[LikertType](#likerttype) \| [QuizType](#quiztype)*

*Defined in [src/activity-types/activity-type.types.ts:84](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L84)*

___
<a id="processableactivitytype"></a>

###  ProcessableActivityType

**Ƭ ProcessableActivityType**: *[OpenAnswerType](#openanswertype) \| [ClosedResponseType](#closedresponsetype) \| [AudioVideoType](#audiovideotype)*

*Defined in [src/activity-types/activity-type.types.ts:61](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L61)*

___
<a id="questiontype"></a>

###  QuestionType

**Ƭ QuestionType**: *"http://activitystrea.ms/schema/1.0/question"*

*Defined in [src/activity-types/activity-type.types.ts:63](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L63)*

___
<a id="quiztype"></a>

###  QuizType

**Ƭ QuizType**: *"https://w3id.org/xapi/smart/activity/quiz"*

*Defined in [src/activity-types/activity-type.types.ts:82](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L82)*

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
<a id="responseinimageactivitytype"></a>

###  ResponseInImageActivityType

**Ƭ ResponseInImageActivityType**: *"https://w3id.org/xapi/smart/activity/response-in-image"*

*Defined in [src/activity-types/activity-type.types.ts:35](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L35)*

___
<a id="reviewtype"></a>

###  ReviewType

**Ƭ ReviewType**: *"http://activitystrea.ms/schema/1.0/review"*

*Defined in [src/activity-types/activity-type.types.ts:64](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L64)*

___
<a id="scormchoiceactivitytype"></a>

###  ScormChoiceActivityType

**Ƭ ScormChoiceActivityType**: *"http://imsglobal.org/qti/choice"*

*Defined in [src/activity-types/activity-type.types.ts:68](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L68)*

___
<a id="scormgenericactivitytype"></a>

###  ScormGenericActivityType

**Ƭ ScormGenericActivityType**: *"https://w3id.org/xapi/smart/activity/scorm"*

*Defined in [src/activity-types/activity-type.types.ts:72](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L72)*

___
<a id="scorminlinechoiceactivitytype"></a>

###  ScormInlineChoiceActivityType

**Ƭ ScormInlineChoiceActivityType**: *"http://imsglobal.org/qti/inlineChoice"*

*Defined in [src/activity-types/activity-type.types.ts:70](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L70)*

___
<a id="scormmultiplechoiceactivitytype"></a>

###  ScormMultipleChoiceActivityType

**Ƭ ScormMultipleChoiceActivityType**: *"http://imsglobal.org/qti/choiceMultiple"*

*Defined in [src/activity-types/activity-type.types.ts:69](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L69)*

___
<a id="scormtextentryactivitytype"></a>

###  ScormTextEntryActivityType

**Ƭ ScormTextEntryActivityType**: *"http://imsglobal.org/qti/textEntry"*

*Defined in [src/activity-types/activity-type.types.ts:71](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L71)*

___
<a id="scormtype"></a>

###  ScormType

**Ƭ ScormType**: *[ScormChoiceActivityType](#scormchoiceactivitytype) \| [ScormMultipleChoiceActivityType](#scormmultiplechoiceactivitytype) \| [ScormInlineChoiceActivityType](#scorminlinechoiceactivitytype) \| [ScormTextEntryActivityType](#scormtextentryactivitytype) \| [ScormGenericActivityType](#scormgenericactivitytype)*

*Defined in [src/activity-types/activity-type.types.ts:74](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L74)*

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

*Defined in [src/activity-types/activity-type.types.ts:31](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L31)*

___
<a id="surveytype"></a>

###  SurveyType

**Ƭ SurveyType**: *"http://id.tincanapi.com/activitytype/survey"*

*Defined in [src/activity-types/activity-type.types.ts:65](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L65)*

___
<a id="timestamp"></a>

###  Timestamp

**Ƭ Timestamp**: *`string`*

*Defined in node_modules/@gradiant/xapi-dsl/types/utils/types/timestamp.d.ts:14*

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

___
<a id="uploadfileactivitytype"></a>

###  UploadFileActivityType

**Ƭ UploadFileActivityType**: *"https://w3id.org/xapi/smart/activity/upload-file"*

*Defined in [src/activity-types/activity-type.types.ts:16](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L16)*

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

___
<a id="videoactivitytype"></a>

###  VideoActivityType

**Ƭ VideoActivityType**: *"https://w3id.org/xapi/smart/activity/video"*

*Defined in [src/activity-types/activity-type.types.ts:49](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L49)*

___
<a id="videorecordingactivitytype"></a>

###  VideoRecordingActivityType

**Ƭ VideoRecordingActivityType**: *"https://w3id.org/xapi/smart/activity/video-recording"*

*Defined in [src/activity-types/activity-type.types.ts:17](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L17)*

___
<a id="wordsbankactivitytype"></a>

###  WordsBankActivityType

**Ƭ WordsBankActivityType**: *"https://w3id.org/xapi/smart/activity/words-bank"*

*Defined in [src/activity-types/activity-type.types.ts:32](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-type.types.ts#L32)*

___

## Variables

<a id="assessabletypes"></a>

### `<Const>` assessableTypes

**● assessableTypes**: *`Set`<`string`>* =  new Set([
  openAnswerTypes.audioRecording,
  openAnswerTypes.draw,
  openAnswerTypes.essay,
  openAnswerTypes.genericOpenAnswer,
  openAnswerTypes.uploadFile,
  openAnswerTypes.videoRecording,
  closedResponseTypes.matchingPairs,
  closedResponseTypes.singleChoice,
  closedResponseTypes.multipleChoice,
  closedResponseTypes.dropDownChoice,
  closedResponseTypes.binaryChoice,
  closedResponseTypes.genericClosedResponse,
  closedResponseTypes.wordsBank,
  closedResponseTypes.fillInTheGaps,
  closedResponseTypes.matrixSingleChoice,
  closedResponseTypes.matrixMultipleChoice,
  closedResponseTypes.responseInImage
])

*Defined in [src/activity-types/activity-types.ts:123](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.ts#L123)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:208](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L208)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:187](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L187)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isaudiorecording"></a>

### `<Const>` isAudioRecording

**● isAudioRecording**: *`function`* =  isActivityType(openAnswerTypes.audioRecording)

*Defined in [src/activity-types/activity-types.checkers.ts:113](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L113)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:200](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L200)*

___
<a id="isaudiovideorecipe"></a>

### `<Const>` isAudioVideoRecipe

**● isAudioVideoRecipe**: *`function`* =  isRecipe(recipes.audioVideo)

*Defined in [src/recipes/recipes.checkers.ts:25](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L25)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:28](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L28)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:229](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L229)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:269](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L269)*

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
  isWordsBank,
  isMatrixMultipleChoice,
  isMatrixSingleChoice,
  isResponseInImage
])

*Defined in [src/activity-types/activity-types.checkers.ts:93](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L93)*

___
<a id="isclosedresponserecipe"></a>

### `<Const>` isClosedResponseRecipe

**● isClosedResponseRecipe**: *`function`* =  isRecipe(recipes.closedResponse)

*Defined in [src/recipes/recipes.checkers.ts:20](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L20)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:179](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L179)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:164](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L164)*

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

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="isdraw"></a>

### `<Const>` isDraw

**● isDraw**: *`function`* =  isActivityType(openAnswerTypes.draw)

*Defined in [src/activity-types/activity-types.checkers.ts:118](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L118)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isdropdownchoice"></a>

### `<Const>` isDropDownChoice

**● isDropDownChoice**: *`function`* =  isActivityType(closedResponseTypes.dropDownChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:33](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L33)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:123](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L123)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:340](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L340)*

___
<a id="isfillinthegaps"></a>

### `<Const>` isFillInTheGaps

**● isFillInTheGaps**: *`function`* =  isActivityType(closedResponseTypes.fillInTheGaps)

*Defined in [src/activity-types/activity-types.checkers.ts:38](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L38)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:169](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L169)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:174](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L174)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:43](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L43)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:128](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L128)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:292](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L292)*

___
<a id="islesson"></a>

### `<Const>` isLesson

**● isLesson**: *`function`* =  isActivityType(bookTypes.lesson)

*Defined in [src/activity-types/activity-types.checkers.ts:239](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L239)*

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
<a id="islikert"></a>

### `<Const>` isLikert

**● isLikert**: *`function`* =  isActivityType(otherTypes.likert)

*Defined in [src/activity-types/activity-types.checkers.ts:252](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L252)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="islikertrecipe"></a>

### `<Const>` isLikertRecipe

**● isLikertRecipe**: *`function`* =  isRecipe(recipes.likert)

*Defined in [src/recipes/recipes.checkers.ts:45](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L45)*

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="islistened"></a>

### `<Const>` isListened

**● isListened**: *`function`* =  isVerbId(verbs.listen.id)

*Defined in [src/verbs/verb-ids.checkers.ts:54](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L54)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:48](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L48)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="ismatrixmultiplechoice"></a>

### `<Const>` isMatrixMultipleChoice

**● isMatrixMultipleChoice**: *`function`* =  isActivityType(closedResponseTypes.matrixMultipleChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:68](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L68)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="ismatrixsinglechoice"></a>

### `<Const>` isMatrixSingleChoice

**● isMatrixSingleChoice**: *`function`* =  isActivityType(closedResponseTypes.matrixSingleChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:73](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L73)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:53](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L53)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:221](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L221)*

___
<a id="isnoninteractiveattempt"></a>

### `<Const>` isNonInteractiveAttempt

**● isNonInteractiveAttempt**: *`function`* =  isActivityType(nonInteractiveTypes.nonInteractive)

*Defined in [src/activity-types/activity-types.checkers.ts:213](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L213)*

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

**● isOpenAnswer**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([
  isAudioRecording,
  isDraw,
  isEssay,
  isGenericOpenAnswer,
  isUploadFile,
  isVideoRecording
])

*Defined in [src/activity-types/activity-types.checkers.ts:149](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L149)*

___
<a id="isopenanswerrecipe"></a>

### `<Const>` isOpenAnswerRecipe

**● isOpenAnswerRecipe**: *`function`* =  isRecipe(recipes.openAnswer)

*Defined in [src/recipes/recipes.checkers.ts:15](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L15)*

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="isothertype"></a>

### `<Const>` isOtherType

**● isOtherType**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([isLikert, isQuiz])

*Defined in [src/activity-types/activity-types.checkers.ts:260](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L260)*

___
<a id="ispassed"></a>

### `<Const>` isPassed

**● isPassed**: *`function`* =  isVerbId(verbs.passed.id)

*Defined in [src/verbs/verb-ids.checkers.ts:24](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/verbs/verb-ids.checkers.ts#L24)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:321](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L321)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:247](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L247)*

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
<a id="isresponseinimage"></a>

### `<Const>` isResponseInImage

**● isResponseInImage**: *`function`* =  isActivityType(closedResponseTypes.responseInImage)

*Defined in [src/activity-types/activity-types.checkers.ts:78](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L78)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isreview"></a>

### `<Const>` isReview

**● isReview**: *`function`* =  isActivityType(feedbackTypes.review)

*Defined in [src/activity-types/activity-types.checkers.ts:326](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L326)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isscorm"></a>

### `<Const>` isScorm

**● isScorm**: *[ActivityTypeChecker](#activitytypechecker)* =  anyPass([
  isScormGeneric,
  isScormChoice,
  isScormInlineChoice,
  isScormMultipleChoice,
  isScormTextEntry
])

*Defined in [src/activity-types/activity-types.checkers.ts:379](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L379)*

___
<a id="isscormchoice"></a>

### `<Const>` isScormChoice

**● isScormChoice**: *`function`* =  isActivityType(scormTypes.choice)

*Defined in [src/activity-types/activity-types.checkers.ts:353](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L353)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isscormgeneric"></a>

### `<Const>` isScormGeneric

**● isScormGeneric**: *`function`* =  isActivityType(scormTypes.genericScorm)

*Defined in [src/activity-types/activity-types.checkers.ts:348](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L348)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isscorminlinechoice"></a>

### `<Const>` isScormInlineChoice

**● isScormInlineChoice**: *`function`* =  isActivityType(scormTypes.inlineChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:363](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L363)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isscormmultiplechoice"></a>

### `<Const>` isScormMultipleChoice

**● isScormMultipleChoice**: *`function`* =  isActivityType(scormTypes.multipleChoice)

*Defined in [src/activity-types/activity-types.checkers.ts:358](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L358)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isscormrecipe"></a>

### `<Const>` isScormRecipe

**● isScormRecipe**: *`function`* =  isRecipe(recipes.scorm)

*Defined in [src/recipes/recipes.checkers.ts:40](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/recipes/recipes.checkers.ts#L40)*

#### Type declaration
▸(recipe: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| recipe | `string` |

**Returns:** `boolean`

___
<a id="isscormtextentry"></a>

### `<Const>` isScormTextEntry

**● isScormTextEntry**: *`function`* =  isActivityType(scormTypes.textEntry)

*Defined in [src/activity-types/activity-types.checkers.ts:368](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L368)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:58](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L58)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:331](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L331)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:234](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L234)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isuploadfile"></a>

### `<Const>` isUploadFile

**● isUploadFile**: *`function`* =  isActivityType(openAnswerTypes.uploadFile)

*Defined in [src/activity-types/activity-types.checkers.ts:133](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L133)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:192](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L192)*

#### Type declaration
▸(activityType: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| activityType | `string` |

**Returns:** `boolean`

___
<a id="isvideorecording"></a>

### `<Const>` isVideoRecording

**● isVideoRecording**: *`function`* =  isActivityType(openAnswerTypes.videoRecording)

*Defined in [src/activity-types/activity-types.checkers.ts:138](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L138)*

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

*Defined in [src/activity-types/activity-types.checkers.ts:63](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L63)*

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

**Parameters:**

| Name | Type |
| ------ | ------ |
| expected | `any` |

**Returns:** `(Anonymous function)`

___
<a id="isactivitytype"></a>

### `<Private>``<Const>` isActivityType

▸ **isActivityType**(expectedType: *`string`*): [ActivityTypeChecker](#activitytypechecker)

*Defined in [src/activity-types/activity-types.checkers.ts:21](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| expectedType | `string` |

**Returns:** [ActivityTypeChecker](#activitytypechecker)

___
<a id="isassessable"></a>

### `<Const>` isAssessable

▸ **isAssessable**(activityType: *`string`*): `boolean`

*Defined in [src/activity-types/activity-types.checkers.ts:313](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.checkers.ts#L313)*

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

*Defined in [src/activity-types/activity-types.ts:92](https://github.com/Gradiant/smart-xapi-dsl/blob/master/src/activity-types/activity-types.ts#L92)*

___

