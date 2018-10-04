import { audioVideoTypes, closedResponseTypes, discussionTypes, nonInteractiveTypes, openAnswerTypes } from './activity-types';

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

export type AttemptActivityType = typeof nonInteractiveTypes.attempt;
export type NonInteractiveAttemptActivityType = typeof nonInteractiveTypes.nonInteractive;
export type NonInteractiveType = AttemptActivityType | NonInteractiveAttemptActivityType;

export type ProcessableActivityType = OpenAnswerType | ClosedResponseType | AudioVideoType;