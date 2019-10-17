import {
  audioVideoTypes,
  closedResponseTypes,
  discussionTypes,
  feedbackTypes,
  nonInteractiveTypes,
  openAnswerTypes,
  scormTypes
} from './activity-types';

export type EssayActivityType = typeof openAnswerTypes.essay;
export type GenericOpenAnswerActivityType = typeof openAnswerTypes.genericOpenAnswer;
export type OpenAnswerType = EssayActivityType | GenericOpenAnswerActivityType;

export type DropDownChoiceActivityType = typeof closedResponseTypes.dropDownChoice;
export type FillInTheGapsActivityType = typeof closedResponseTypes.fillInTheGaps;
export type GenericClosedResponseActivityType = typeof closedResponseTypes.genericClosedResponse;
export type MatchingPairsActivityType = typeof closedResponseTypes.matchingPairs;
export type MultipleChoiceActivityType = typeof closedResponseTypes.multipleChoice;
export type SingleChoiceActivityType = typeof closedResponseTypes.singleChoice;
export type WordsBankActivityType = typeof closedResponseTypes.wordsBank;
export type ClosedResponseType =
  | DropDownChoiceActivityType
  | FillInTheGapsActivityType
  | GenericClosedResponseActivityType
  | MatchingPairsActivityType
  | MultipleChoiceActivityType
  | SingleChoiceActivityType
  | WordsBankActivityType;

export type AudioActivityType = typeof audioVideoTypes.audio;
export type VideoActivityType = typeof audioVideoTypes.video;
export type AudioVideoType = AudioActivityType | VideoActivityType;

export type DiscussionActivityType = typeof discussionTypes.discussion;
export type ForumReplyActivityType = typeof discussionTypes.forumReply;
export type ForumTopicActivityType = typeof discussionTypes.forumTopic;
export type DebateActivityType = typeof discussionTypes.debate;

export type AttemptActivityType = typeof nonInteractiveTypes.attempt;
export type NonInteractiveAttemptActivityType = typeof nonInteractiveTypes.nonInteractive;
export type NonInteractiveType = AttemptActivityType | NonInteractiveAttemptActivityType;

export type ProcessableActivityType = OpenAnswerType | ClosedResponseType | AudioVideoType;

export type QuestionType = typeof feedbackTypes.question;
export type ReviewType = typeof feedbackTypes.review;
export type SurveyType = typeof feedbackTypes.survey;
export type FeedbackType = QuestionType | ReviewType | SurveyType;

export type ScormChoiceActivityType = typeof scormTypes.choice;
export type ScormMultipleChoiceActivityType = typeof scormTypes.multipleChoice;
export type ScormInlineChoiceActivityType = typeof scormTypes.inlineChoice;
export type ScormTextEntryActivityType = typeof scormTypes.textEntry;
export type ScormGenericActivityType = typeof scormTypes.genericScorm;

export type ScormType =
  | ScormChoiceActivityType
  | ScormMultipleChoiceActivityType
  | ScormInlineChoiceActivityType
  | ScormTextEntryActivityType
  | ScormGenericActivityType;
