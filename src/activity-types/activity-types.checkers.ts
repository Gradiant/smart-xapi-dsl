import { anyPass, equals } from '../fp';
import {
  assessableTypes,
  audioVideoTypes,
  bookTypes,
  closedResponseTypes,
  discussionTypes,
  feedbackTypes,
  nonInteractiveTypes,
  openAnswerTypes,
  otherTypes,
  scormTypes
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
 * Check if the given activity type is {@link closedResponseTypes.genericClosedResponse}
 */
export const isGenericClosedResponse = isActivityType(closedResponseTypes.genericClosedResponse);

/**
 * Check if the given activity type is {@link closedResponseTypes.matchingPairs}
 */
export const isMatchingPairs = isActivityType(closedResponseTypes.matchingPairs);

/**
 * Check if the given activity type is {@link closedResponseTypes.multipleChoice}
 */
export const isMultipleChoice = isActivityType(closedResponseTypes.multipleChoice);

/**
 * Check if the given activity type is {@link closedResponseTypes.singleChoice}
 */
export const isSingleChoice = isActivityType(closedResponseTypes.singleChoice);

/**
 * Check if the given activity type is {@link closedResponseTypes.wordsBank}
 */
export const isWordsBank = isActivityType(closedResponseTypes.wordsBank);

/**
 * Check if the given activity type is {@link closedResponseTypes.matrixMultipleChoice}
 */
export const isMatrixMultipleChoice = isActivityType(closedResponseTypes.matrixMultipleChoice);

/**
 * Check if the given activity type is {@link closedResponseTypes.matrixSingleChoice}
 */
export const isMatrixSingleChoice = isActivityType(closedResponseTypes.matrixSingleChoice);

/**
 * Check if the given activity type is {@link closedResponseTypes.responseInImage}
 */
export const isResponseInImage = isActivityType(closedResponseTypes.responseInImage);

/**
 * Check if the given activity type is a closed response type:
 *
 * - {@link closedResponseTypes.binaryChoice}
 * - {@link closedResponseTypes.dropDownChoice}
 * - {@link closedResponseTypes.fillInTheGaps}
 * - {@link closedResponseTypes.genericClosedResponse}
 * - {@link closedResponseTypes.matchingPairs}
 * - {@link closedResponseTypes.multipleChoice}
 * - {@link closedResponseTypes.singleChoice}
 * - {@link closedResponseTypes.wordsBank}
 * - {@link closedResponseTypes.responseInImage}
 */
export const isClosedResponse: ActivityTypeChecker = anyPass([
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
]);

// Open Answer
// ----------

/**
 * Check if the given activity type is {@link openAnswerTypes.draw}
 */
export const isDraw = isActivityType(openAnswerTypes.draw);

/**
 * Check if the given activity type is {@link openAnswerTypes.essay}
 */
export const isEssay = isActivityType(openAnswerTypes.essay);

/**
 * Check if the given activity type is {@link openAnswerTypes.genericOpenAnswer}
 */
export const isGenericOpenAnswer = isActivityType(openAnswerTypes.genericOpenAnswer);

/**
 * Check if the given activity type is an open answer type:
 *
 * - {@link openAnswerTypes.draw}
 * - {@link openAnswerTypes.essay}
 * - {@link openAnswerTypes.genericOpenAnswer}
 */
export const isOpenAnswer: ActivityTypeChecker = anyPass([isDraw, isEssay, isGenericOpenAnswer]);

// Discussion
// ----------

/**
 * Check if the given activity type is {@link discussionTypes.discussion}
 */
export const isDiscussion = isActivityType(discussionTypes.discussion);

/**
 * Check if the given activity type is {@link discussionTypes.forumReply}
 */
export const isForumReply = isActivityType(discussionTypes.forumReply);

/**
 * Check if the given activity type is {@link discussionTypes.forumTopic}
 */
export const isForumTopic = isActivityType(discussionTypes.forumTopic);

/**
 * Check if the given activity type is {@link discussionTypes.debate}
 */
export const isDebate = isActivityType(discussionTypes.debate);

// Audio/Video
// -----------

/**
 * Check if the given activity type is {@link audioVideoTypes.audio}
 */
export const isAudio = isActivityType(audioVideoTypes.audio);

/**
 * Check if the given activity type is {@link discussionTypes.video}
 */
export const isVideo = isActivityType(audioVideoTypes.video);

/**
 * Check if the given activity type is a audio/video:
 *
 * - {@link audioVideoTypes.audio}
 * - {@link audioVideoTypes.video}
 */
export const isAudioVideo: ActivityTypeChecker = anyPass([isAudio, isVideo]);

// Non Interactive
// ---------------

/**
 * Check if the given activity type is {@link nonInteractiveTypes.attempt}
 */
export const isAttempt = isActivityType(nonInteractiveTypes.attempt);

/**
 * Check if the given activity type is {@link nonInteractiveTypes.nonInteractive}
 */
export const isNonInteractiveAttempt = isActivityType(nonInteractiveTypes.nonInteractive);

/**
 * Check if the given activity type is a non interactive type:
 *
 * - {@link nonInteractiveTypes.attempt}
 * - {@link nonInteractiveTypes.nonInteractive}
 */
export const isNonInteractive: ActivityTypeChecker = anyPass([isAttempt, isNonInteractiveAttempt]);

// Book Containers
// ---------------

/**
 * Check if the given activity type is {@link bookTypes.book}
 */
export const isBook = isActivityType(bookTypes.book);

/**
 * Check if the given activity type is {@link bookTypes.unit}
 */
export const isUnit = isActivityType(bookTypes.unit);

/**
 * Check if the given activity type is {@link bookTypes.lesson}
 */
export const isLesson = isActivityType(bookTypes.lesson);

// Other activities
// ----------------

/**
 * Check if the given activity type is {@link otherTypes.quiz}
 */
export const isQuiz = isActivityType(otherTypes.quiz);

/**
 * Check if the given activity type is {@link otherTypes.likert}
 */
export const isLikert = isActivityType(otherTypes.likert);

/**
 * Check if the given activity type is one of:
 *
 * - {@link otherTypes.likert}
 * - {@link otherTypes.quiz}
 */
export const isOtherType: ActivityTypeChecker = anyPass([isLikert, isQuiz]);

/**
 * Check if the given activity type is a book container types:
 *
 * - {@link bookTypes.book}
 * - {@link bookTypes.unit}
 * - {@link bookTypes.lesson}
 */
export const isBookContainer: ActivityTypeChecker = anyPass([isBook, isUnit, isLesson]);

/**
 * Check if the given activity type is LAE processable:
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
 * - {@link closedResponseTypes.responseInImage}
 *
 * - {@link openAnswerTypes.draw}
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
 * - {@link closedResponseTypes.responseInImage}
 * - {@link openAnswerTypes.draw}
 * - {@link openAnswerTypes.essay}
 * - {@link openAnswerTypes.genericOpenAnswer}
 */
export const isAssessable: ActivityTypeChecker = (activityType: string) => assessableTypes.has(activityType);

// Feedback Types
// --------------

/**
 * Check if the given activity type is {@link feedbackTypes.question}
 */
export const isQuestion = isActivityType(feedbackTypes.question);

/**
 * Check if the given activity type is {@link feedbackTypes.review}
 */
export const isReview = isActivityType(feedbackTypes.review);

/**
 * Check if the given activity type is {@link feedbackTypes.survey}
 */
export const isSurvey = isActivityType(feedbackTypes.survey);

/**
 * Check if the given activity type is one of:
 *
 * - {@link feedbackTypes.question}
 * - {@link feedbackTypes.review}
 * - {@link feedbackTypes.survey}
 */
export const isFeedback: ActivityTypeChecker = anyPass([isQuestion, isReview, isSurvey]);

// Scorm Types
// --------------

/**
 * Check if the given activity type is {@link scormTypes.choice}
 */
export const isScormGeneric = isActivityType(scormTypes.genericScorm);

/**
 * Check if the given activity type is {@link scormTypes.choice}
 */
export const isScormChoice = isActivityType(scormTypes.choice);

/**
 * Check if the given activity type is {@link scormTypes.multipleChoice}
 */
export const isScormMultipleChoice = isActivityType(scormTypes.multipleChoice);

/**
 * Check if the given activity type is {@link scormTypes.multipleChoice}
 */
export const isScormInlineChoice = isActivityType(scormTypes.inlineChoice);

/**
 * Check if the given activity type is {@link scormTypes.textEntry}
 */
export const isScormTextEntry = isActivityType(scormTypes.textEntry);

/**
 * Check if the given activity type is one of:
 *
 * - {@link scormTypes.genericScorm}
 * - {@link scormTypes.choice}
 * - {@link scormTypes.multipleChoice}
 * - {@link scormTypes.textEntry}
 * - {@link scormTypes.inlineChoice}
 */
export const isScorm: ActivityTypeChecker = anyPass([
  isScormGeneric,
  isScormChoice,
  isScormInlineChoice,
  isScormMultipleChoice,
  isScormTextEntry
]);
