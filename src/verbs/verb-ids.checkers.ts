import { equals } from '../fp';
import { verbs } from './verbs';
import { VerbIdChecker } from './verbs.types';

/**
 * @internal
 * @private
 */
export const isVerbId = (expectedVerbId: string): VerbIdChecker => equals(expectedVerbId);

/**
 * Check if the given verb identifier is {@link verbs.answered}
 */
export const isAnswered = isVerbId(verbs.answered.id);

/**
 * Check if the given verb identifier is {@link verbs.evaluated}
 */
export const isEvaluated = isVerbId(verbs.evaluated.id);

/**
 * Check if the given verb identifier is {@link verbs.passed}
 */
export const isPassed = isVerbId(verbs.passed.id);

/**
 * Check if the given verb identifier is {@link verbs.failed}
 */
export const isFailed = isVerbId(verbs.failed.id);

/**
 * Check if the given verb identifier is {@link verbs.initialized}
 */
export const isInitialized = isVerbId(verbs.initialized.id);

/**
 * Check if the given verb identifier is {@link verbs.interacted}
 */
export const isInteracted = isVerbId(verbs.interacted.id);

/**
 * Check if the given verb identifier is {@link verbs.played}
 */
export const isPlayed = isVerbId(verbs.played.id);

/**
 * Check if the given verb identifier is {@link verbs.paused}
 */
export const isPaused = isVerbId(verbs.paused.id);

/**
 * Check if the given verb identifier is {@link verbs.listen}
 */
export const isListened = isVerbId(verbs.listen.id);

/**
 * Check if the given verb identifier is {@link verbs.watched}
 */
export const isWatched = isVerbId(verbs.watched.id);

/**
 * Check if the given verb identifier is {@link verbs.skipped}
 */
export const isSkipped = isVerbId(verbs.skipped.id);

/**
 * Check if the given verb identifier is {@link verbs.completed}
 */
export const isCompleted = isVerbId(verbs.completed.id);

/**
 * Check if the given verb identifier is {@link verbs.enabled}
 */
export const isEnabled = isVerbId(verbs.enabled.id);

/**
 * Check if the given verb identifier is {@link verbs.disabled}
 */
export const isDisabled = isVerbId(verbs.disabled.id);

/**
 * Check if the given verb identifier is {@link verbs.posted}
 */
export const isPosted = isVerbId(verbs.posted.id);

/**
 * Check if the given verb identifier is {@link verbs.replied}
 */
export const isReplied = isVerbId(verbs.replied.id);

/**
 * Check if the given verb identifier is {@link verbs.deleted}
 */
export const isDeleted = isVerbId(verbs.deleted.id);

/**
 * Check if the given verb identifier is {@link verbs.liked}
 */
export const isLiked = isVerbId(verbs.liked.id);

/**
 * Check if the given verb identifier is {@link verbs.votedUp}
 */
export const isVotedUp = isVerbId(verbs.votedUp.id);

/**
 * Check if the given verb identifier is {@link verbs.votedDown}
 */
export const isVotedDown = isVerbId(verbs.votedDown.id);

/**
 * Check if the given verb identifier is {@link verbs.reported}
 */
export const isReported = isVerbId(verbs.reported.id);

/**
 * Check if the given verb identifier is {@link verbs.accessed}
 */
export const isAccessed = isVerbId(verbs.accessed.id);

/**
 * Check if the given verb identifier is {@link verbs.created}
 */
export const isCreated = isVerbId(verbs.created.id);

/**
 * Check if the given verb identifier is {@link verbs.joined}
 */
export const isJoined = isVerbId(verbs.joined.id);

/**
 * Check if the given verb identifier is {@link verbs.edited}
 */
export const isEdited = isVerbId(verbs.edited.id);
