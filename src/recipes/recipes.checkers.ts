import { equals } from '../fp';
import { recipes } from './recipes';

export type RecipeChecker = (recipe: string) => boolean;

/**
 * @internal
 * @private
 */
export const isRecipe = (expectedRecipe: string): RecipeChecker => equals(expectedRecipe);

/**
 * Check if the given recipe identifier is {@link recipes.openAnswer}
 */
export const isOpenAnswerRecipe = isRecipe(recipes.openAnswer);

/**
 * Check if the given recipe identifier is {@link recipes.closedResponse}
 */
export const isClosedResponseRecipe = isRecipe(recipes.closedResponse);

/**
 * Check if the given recipe identifier is {@link recipes.audioVideo}
 */
export const isAudioVideoRecipe = isRecipe(recipes.audioVideo);

/**
 * Check if the given recipe identifier is {@link recipes.discussion}
 */
export const isDiscussionRecipe = isRecipe(recipes.discussion);

/**
 * Check if the given recipe identifier is {@link recipes.nonInteractive}
 */
export const isNonInteractiveRecipe = isRecipe(recipes.nonInteractive);
