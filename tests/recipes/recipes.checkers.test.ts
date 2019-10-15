import { expect } from 'chai';
import faker from 'faker';
import {
  isAudioVideoRecipe,
  isClosedResponseRecipe,
  isDiscussionRecipe,
  isNonInteractiveRecipe,
  isOpenAnswerRecipe,
  isRecipe,
  isScormRecipe,
  recipes
} from '../../src/recipes';
import { difference, values } from '../helpers';

describe('Recipes Checkers', () => {
  describe('isRecipe()', () => {
    it('return a function', () => {
      expect(isRecipe(getRandomRecipe())).to.be.a('function');
    });

    it('should return true when the recipe matches', () => {
      const recipe = getRandomRecipe();

      expect(isRecipe(recipe)(recipe)).to.be.true;
    });

    it('should return false when the recipe does not match', () => {
      const expectedRecipe = getRandomRecipe();
      const recipe = getRandomRecipe();

      expect(isRecipe(expectedRecipe)(recipe)).to.be.false;
    });
  });

  describe('isOpenAnswerRecipe()', () => {
    it('should return `true` for open answer recipe', () => {
      expect(isOpenAnswerRecipe(recipes.openAnswer)).to.be.true;
    });

    it('should return `false` for any other type', () => {
      getDifference(recipes.openAnswer).forEach(recipe => {
        expect(isOpenAnswerRecipe(recipe)).to.be.false;
      });
    });
  });

  describe('isClosedResponseRecipe()', () => {
    it('should return `true` for closed response recipe', () => {
      expect(isClosedResponseRecipe(recipes.closedResponse)).to.be.true;
    });

    it('should return `false` for any other type', () => {
      getDifference(recipes.closedResponse).forEach(recipe => {
        expect(isClosedResponseRecipe(recipe)).to.be.false;
      });
    });
  });

  describe('isAudioVideoRecipe()', () => {
    it('should return `true` for audio/video recipe', () => {
      expect(isAudioVideoRecipe(recipes.audioVideo)).to.be.true;
    });

    it('should return `false` for any other type', () => {
      getDifference(recipes.audioVideo).forEach(recipe => {
        expect(isAudioVideoRecipe(recipe)).to.be.false;
      });
    });
  });

  describe('isDiscussionRecipe()', () => {
    it('should return `true` for discussion recipe', () => {
      expect(isDiscussionRecipe(recipes.discussion)).to.be.true;
    });

    it('should return `false` for any other type', () => {
      getDifference(recipes.discussion).forEach(recipe => {
        expect(isDiscussionRecipe(recipe)).to.be.false;
      });
    });
  });

  describe('isNonInteractiveRecipe()', () => {
    it('should return `true` for non-interactive recipe', () => {
      expect(isNonInteractiveRecipe(recipes.nonInteractive)).to.be.true;
    });

    it('should return `false` for any other type', () => {
      getDifference(recipes.nonInteractive).forEach(recipe => {
        expect(isNonInteractiveRecipe(recipe)).to.be.false;
      });
    });
  });

  describe('isScormRecipe()', () => {
    it('should return `true` for scorm recipe', () => {
      expect(isScormRecipe(recipes.scorm)).to.be.true;
    });

    it('should return `false` for any other type', () => {
      getDifference(recipes.scorm).forEach(recipe => {
        expect(isScormRecipe(recipe)).to.be.false;
      });
    });
  });
});

const getDifference = (recipe: string) => difference(values(recipes), [recipe]);
const getRandomRecipe = () => [faker.internet.url(), faker.random.uuid()].join('/');
