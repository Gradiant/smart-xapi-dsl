import { anyPass, equals } from '../fp';
import {
  assessableTypes,
  audioVideoTypes,
  bookTypes,
  closedResponseTypes,
  discussionTypes,
  nonInteractiveTypes,
  openAnswerTypes
} from './activity-types';

export type ActivityTypeChecker = (activityType: string) => boolean;

/**
 * @internal
 * @private
 */
export const isActivityType = (expectedType: string): ActivityTypeChecker => equals(expectedType);

// Closed Response
// ---------------
/**
 * Check if the given activity type is {@link closedResponseTypes.binaryChoice}
 */
export const isBinaryChoice = isActivityType(closedResponseTypes.binaryChoice);

/**
 * Check if the given activity type is {@link closedResponseTypes.dropDownChoice}
 */
export const isDropDownChoice = isActivityType(closedResponseTypes.dropDownChoice);

/**
 * Check if the given activity type is {@link closedResponseTypes.fillInTheGaps}
 */
export const isFillInTheGaps = isActivityType(closedResponseTypes.fillInTheGaps);

/**
 * Check if the given activity type if {@link closedResponseTypes.genericClosedResponse}
 */
export const isGenericClosedResponse = isActivityType(closedResponseTypes.genericClosedResponse);

/**
 * Check if the given activity type if {@link closedResponseTypes.matchingPairs}
 */
export const isMatchingPairs = isActivityType(closedResponseTypes.matchingPairs);

/**
 * Check if the given activity type if {@link closedResponseTypes.multipleChoice}
 */
export const isMultipleChoice = isActivityType(closedResponseTypes.multipleChoice);

/**
 * Check if the given activity type if {@link closedResponseTypes.singleChoice}
 */
export const isSingleChoice = isActivityType(closedResponseTypes.singleChoice);

/**
 * Check if the given activity type if {@link closedResponseTypes.wordsBank}
 */
export const isWordsBank = isActivityType(closedResponseTypes.wordsBank);

/**
 * Check if the given activity type if a closed response type:
 *
 * - {@link closedResponseTypes.binaryChoice}
 * - {@link closedResponseTypes.dropDownChoice}
 * - {@link closedResponseTypes.fillInTheGaps}
 * - {@link closedResponseTypes.genericClosedResponse}
 * - {@link closedResponseTypes.matchingPairs}
 * - {@link closedResponseTypes.multipleChoice}
 * - {@link closedResponseTypes.singleChoice}
 * - {@link closedResponseTypes.wordsBank}
 */
export const isClosedResponse: ActivityTypeChecker = anyPass([
  isBinaryChoice,
  isDropDownChoice,
  isFillInTheGaps,
  isGenericClosedResponse,
  isMatchingPairs,
  isMultipleChoice,
  isSingleChoice,
  isWordsBank
]);

// Open Answer
// ----------

/**
 * Check if the given activity type if {@link openAnswerTypes.essay}
 */
export const isEssay = isActivityType(openAnswerTypes.essay);

/**
 * Check if the given activity type if {@link openAnswerTypes.genericOpenAnswer}
 */
export const isGenericOpenAnswer = isActivityType(openAnswerTypes.genericOpenAnswer);

/**
 * Check if the given activity type if an open answer type:
 *
 * - {@link openAnswerTypes.essay}
 * - {@link openAnswerTypes.genericOpenAnswer}
 */
export const isOpenAnswer: ActivityTypeChecker = anyPass([isEssay, isGenericOpenAnswer]);

// Discussion
// ----------

/**
 * Check if the given activity type if {@link discussionTypes.discussion}
 */
export const isDiscussion = isActivityType(discussionTypes.discussion);

/**
 * Check if the given activity type if {@link discussionTypes.forumReply}
 */
export const isForumReply = isActivityType(discussionTypes.forumReply);

/**
 * Check if the given activity type if {@link discussionTypes.forumTopic}
 */
export const isForumTopic = isActivityType(discussionTypes.forumTopic);

/**
 * Check if the given activity type if {@link discussionTypes.debate}
 */
export const isDdebate = isActivityType(discussionTypes.debate);

// Audio/Video
// -----------

/**
 * Check if the given activity type if {@link audioVideoTypes.audio}
 */
export const isAudio = isActivityType(audioVideoTypes.audio);

/**
 * Check if the given activity type if {@link discussionTypes.video}
 */
export const isVideo = isActivityType(audioVideoTypes.video);

/**
 * Check if the given activity type if a audio/video:
 *
 * - {@link audioVideoTypes.audio}
 * - {@link audioVideoTypes.video}
 */
export const isAudioVideo: ActivityTypeChecker = anyPass([isAudio, isVideo]);

// Non Interactive
// ---------------

/**
 * Check if the given activity type if {@link nonInteractiveTypes.attempt}
 */
export const isAttempt = isActivityType(nonInteractiveTypes.attempt);

/**
 * Check if the given activity type if {@link nonInteractiveTypes.nonInteractive}
 */
export const isNonInteractiveAttempt = isActivityType(nonInteractiveTypes.nonInteractive);

/**
 * Check if the given activity type if a non interactive type:
 *
 * - {@link nonInteractiveTypes.attempt}
 * - {@link nonInteractiveTypes.nonInteractive}
 */
export const isNonInteractive: ActivityTypeChecker = anyPass([isAttempt, isNonInteractiveAttempt]);

// Book Containers
// ---------------

/**
 * Check if the given activity type if {@link bookTypes.book}
 */
export const isBook = isActivityType(bookTypes.book);

/**
 * Check if the given activity type if {@link bookTypes.unit}
 */
export const isUnit = isActivityType(bookTypes.unit);

/**
 * Check if the given activity type if {@link bookTypes.lesson}
 */
export const isLesson = isActivityType(bookTypes.lesson);

/**
 * Check if the given activity type if a book container types:
 *
 * - {@link bookTypes.book}
 * - {@link bookTypes.unit}
 * - {@link bookTypes.lesson}
 */
export const isBookContainer: ActivityTypeChecker = anyPass([isBook, isUnit, isLesson]);

/**
 * Check if the given activity type if a book container types:
 *
 *
 * - {@link closedResponseTypes.binaryChoice}
 * - {@link closedResponseTypes.dropDownChoice}
 * - {@link closedResponseTypes.fillInTheGaps}
 * - {@link closedResponseTypes.genericClosedResponse}
 * - {@link closedResponseTypes.matchingPairs}
 * - {@link closedResponseTypes.multipleChoice}
 * - {@link closedResponseTypes.singleChoice}
 * - {@link closedResponseTypes.wordsBank}
 *
 * - {@link openAnswerTypes.essay}
 * - {@link openAnswerTypes.genericOpenAnswer}
 *
 * - {@link audioVideoTypes.audio}
 * - {@link audioVideoTypes.video}
 */
export const isLaeProcessable: ActivityTypeChecker = anyPass([isOpenAnswer, isClosedResponse, isAudioVideo]);

// Assessable
// ----------

/**
 * Check if the given activity type is one of:
 *
 * - {@link closedResponseTypes.matchingPairs}
 * - {@link closedResponseTypes.singleChoice}
 * - {@link closedResponseTypes.multipleChoice}
 * - {@link closedResponseTypes.dropDownChoice}
 * - {@link closedResponseTypes.binaryChoice}
 * - {@link closedResponseTypes.genericClosedResponse}
 * - {@link closedResponseTypes.wordsBank}
 * - {@link closedResponseTypes.fillInTheGaps}
 * - {@link openAnswerTypes.essay}
 * - {@link openAnswerTypes.genericOpenAnswer}
 */
export const isAssessable: ActivityTypeChecker = (activityType: string) => assessableTypes.has(activityType);
