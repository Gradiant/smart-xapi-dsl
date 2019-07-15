import { contextExtensions, objectExtensions, resultExtensions } from '@gradiant/xapi-dsl/dsl';

export namespace extensions {
  export const interactionContext = contextExtensions.smart.interactionContext;
  export const activityContext = contextExtensions.smart.activityContext;
  export const attemptContext = objectExtensions.smart.attemptContext;
  export const studentResponse = objectExtensions.smart.studentResponse;
  export const evaluationFeedback = resultExtensions.smart.evaluationFeedback;
  export const duration = contextExtensions.tincan.duration;
  export const startingPoint = contextExtensions.tincan.startingPoint;
  export const endingPoint = contextExtensions.tincan.endingPoint;
  export const discussionMessage = resultExtensions.smart.discussionMessage;
  export const userData = contextExtensions.smart.extendedUserData;
  export const userAction = resultExtensions.smart.userAction;
  export const activityMode = resultExtensions.smart.activityMode;
  export const activityStatus = resultExtensions.smart.activityStatus;
  export const questions = objectExtensions.smart.questions;
  export const supplementalInfo = objectExtensions.acrossx.supplementalInfo;
  export const forumJoinType = contextExtensions.risc.forumJoinType;
}
