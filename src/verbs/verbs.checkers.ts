import { propEq } from '../fp';
import { verbs } from './verbs';
import { VerbChecker, VerbLike } from './verbs.types';

/**
 * @internal
 * @private
 */
export const isVerb = <T extends VerbLike>(expectedVerb: T): VerbChecker => propEq('id', expectedVerb.id);

/**
 * Check if the given verb object is {@link verbs.answered}
 */
export const isAnsweredVerb = isVerb(verbs.answered);

/**
 * Check if the given verb object is {@link verbs.evaluated}
 */
export const isEvaluatedVerb = isVerb(verbs.evaluated);

/**
 * Check if the given verb object is {@link verbs.passed}
 */
export const isPassedVerb = isVerb(verbs.passed);

/**
 * Check if the given verb object is {@link verbs.failed}
 */
export const isFailedVerb = isVerb(verbs.failed);

/**
 * Check if the given verb object is {@link verbs.initialized}
 */
export const isInitializedVerb = isVerb(verbs.initialized);

/**
 * Check if the given verb object is {@link verbs.interacted}
 */
export const isInteractedVerb = isVerb(verbs.interacted);

/**
 * Check if the given verb object is {@link verbs.played}
 */
export const isPlayedVerb = isVerb(verbs.played);

/**
 * Check if the given verb object is {@link verbs.paused}
 */
export const isPausedVerb = isVerb(verbs.paused);

/**
 * Check if the given verb object is {@link verbs.listen}
 */
export const isListenedVerb = isVerb(verbs.listen);

/**
 * Check if the given verb object is {@link verbs.watched}
 */
export const isWatchedVerb = isVerb(verbs.watched);

/**
 * Check if the given verb object is {@link verbs.skipped}
 */
export const isSkippedVerb = isVerb(verbs.skipped);

/**
 * Check if the given verb object is {@link verbs.completed}
 */
export const isCompletedVerb = isVerb(verbs.completed);

/**
 * Check if the given verb object is {@link verbs.enabled}
 */
export const isEnabledVerb = isVerb(verbs.enabled);

/**
 * Check if the given verb object is {@link verbs.disabled}
 */
export const isDisabledVerb = isVerb(verbs.disabled);

/**
 * Check if the given verb object is {@link verbs.posted}
 */
export const isPostedVerb = isVerb(verbs.posted);

/**
 * Check if the given verb object is {@link verbs.replied}
 */
export const isRepliedVerb = isVerb(verbs.replied);

/**
 * Check if the given verb object is {@link verbs.deleted}
 */
export const isDeletedVerb = isVerb(verbs.deleted);

/**
 * Check if the given verb object is {@link verbs.liked}
 */
export const isLikedVerb = isVerb(verbs.liked);

/**
 * Check if the given verb object is {@link verbs.votedUp}
 */
export const isVotedUpVerb = isVerb(verbs.votedUp);

/**
 * Check if the given verb object is {@link verbs.votedDown}
 */
export const isVotedDownVerb = isVerb(verbs.votedDown);

/**
 * Check if the given verb object is {@link verbs.reported}
 */
export const isReportedVerb = isVerb(verbs.reported);

/**
 * Check if the given verb object is {@link verbs.accessed}
 */
export const isAccessedVerb = isVerb(verbs.accessed);
