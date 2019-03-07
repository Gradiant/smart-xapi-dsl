import { activityTypes as types } from '@gradiant/xapi-dsl/dsl';

/**
 * Activity types for open answer recipe
 */
export namespace openAnswerTypes {
  export const essay = types.smart.essay;
  export const genericOpenAnswer = types.smart.openAnswer;
}

/**
 * Activity type for closed response recipe
 */
export namespace closedResponseTypes {
  export const binaryChoice = types.smart.binaryChoice;
  export const dropDownChoice = types.smart.dropDownChoice;
  export const fillInTheGaps = types.smart.fillInTheGaps;
  export const genericClosedResponse = types.smart.closedResponse;
  export const matchingPairs = types.smart.matchingPairs;
  export const multipleChoice = types.smart.multipleChoice;
  export const singleChoice = types.smart.singleChoice;
  export const wordsBank = types.smart.wordsBank;
}

/**
 * Activity types for discussion recipe
 */
export namespace discussionTypes {
  export const discussion = types.tincan.discussion;
  export const forumReply = types.tincan.forumReply;
  export const forumTopic = types.tincan.forumTopic;
  export const debate = types.smart.discussion;
}

/**
 * Activity types for non interactive recipe
 */
export namespace nonInteractiveTypes {
  export const attempt = types.smart.attempt;
  export const nonInteractive = types.smart.noInteractive;
}

/**
 * Activity types for smartbook contents
 */
export namespace bookTypes {
  export const book = types.smart.book;
  export const lesson = types.smart.lesson;
  export const unit = types.smart.unit;
}

/**
 * Activity types for audio/video recipe
 */
export namespace audioVideoTypes {
  export const audio = types.smart.audio;
  export const video = types.smart.video;
}

/**
 * Activity types that does not belong to any category listed above
 */
export namespace otherTypes {
  export const quiz = types.smart.quiz;
}

export namespace feedbackTypes {
  export const question = types.activityStream.v1.question;
  export const review = types.activityStream.v1.review;
  export const survey = types.tincan.survey;
}

/**
 * Every activity type combined into a single object
 */
export const activityTypes = {
  ...openAnswerTypes,
  ...closedResponseTypes,
  ...audioVideoTypes,
  ...discussionTypes,
  ...nonInteractiveTypes,
  ...bookTypes,
  ...otherTypes,
  ...feedbackTypes
};

/**
 * Set of activity types that are considered assessabled
 *
 * - {@link openAnswerTypes.essay}
 * - {@link openAnswerTypes.genericOpenAnswer}
 * - {@link closedResponseTypes.matchingPairs}
 * - {@link closedResponseTypes.singleChoice}
 * - {@link closedResponseTypes.multipleChoice}
 * - {@link closedResponseTypes.dropDownChoice}
 * - {@link closedResponseTypes.binaryChoice}
 * - {@link closedResponseTypes.genericClosedResponse}
 * - {@link closedResponseTypes.wordsBank}
 * - {@link closedResponseTypes.fillInTheGaps}
 */
export const assessableTypes = new Set([
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
]);
