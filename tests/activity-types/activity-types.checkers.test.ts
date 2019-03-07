import { expect } from 'chai';
import faker from 'faker';
import {
  activityTypes,
  assessableTypes,
  audioVideoTypes,
  bookTypes,
  closedResponseTypes,
  feedbackTypes,
  isActivityType,
  isAssessable,
  isAudioVideo,
  isBookContainer,
  isClosedResponse,
  isFeedback,
  isLaeProcessable,
  isNonInteractive,
  isOpenAnswer,
  nonInteractiveTypes,
  openAnswerTypes
} from '../../src/activity-types';
import { difference, values } from '../helpers';

describe('Activity Type Checkers', () => {
  describe('isActivityType()', () => {
    it('return a function', () => {
      expect(isActivityType(getRandomActivityType())).to.be.a('function');
    });

    it('should return true when the type matches', () => {
      const activityType = getRandomActivityType();

      expect(isActivityType(activityType)(activityType)).to.be.true;
    });

    it('should return false when the type does not match', () => {
      const expectedActivityType = getRandomActivityType();
      const activityType = getRandomActivityType();

      expect(isActivityType(expectedActivityType)(activityType)).to.be.false;
    });
  });

  describe('isClosedResponse()', () => {
    it('should return true for any closed response type', () => {
      values(closedResponseTypes).forEach(activityType => {
        expect(isClosedResponse(activityType)).to.be.true;
      });
    });

    it('should return false for any other type', () => {
      getDifference(closedResponseTypes).forEach(activityType => {
        expect(isClosedResponse(activityType)).to.be.false;
      });
    });
  });

  describe('isOpenAnswer()', () => {
    it('should return true for any open answer type', () => {
      values(openAnswerTypes).forEach(activityType => {
        expect(isOpenAnswer(activityType)).to.be.true;
      });
    });

    it('should return false for any other type', () => {
      getDifference(openAnswerTypes).forEach(activityType => {
        expect(isOpenAnswer(activityType)).to.be.false;
      });
    });
  });

  describe('isAudioVideo()', () => {
    it('should return true for any open answer type', () => {
      values(audioVideoTypes).forEach(activityType => {
        expect(isAudioVideo(activityType)).to.be.true;
      });
    });

    it('should return false for any other type', () => {
      getDifference(audioVideoTypes).forEach(activityType => {
        expect(isAudioVideo(activityType)).to.be.false;
      });
    });
  });

  describe('isNonInteractive()', () => {
    it('should return true for any open answer type', () => {
      values(nonInteractiveTypes).forEach(activityType => {
        expect(isNonInteractive(activityType)).to.be.true;
      });
    });

    it('should return false for any other type', () => {
      getDifference(nonInteractiveTypes).forEach(activityType => {
        expect(isNonInteractive(activityType)).to.be.false;
      });
    });
  });

  describe('isBookContainer()', () => {
    it('should return true for any book type', () => {
      values(bookTypes).forEach(activityType => {
        expect(isBookContainer(activityType)).to.be.true;
      });
    });

    it('should return false for any other type', () => {
      getDifference(bookTypes).forEach(activityType => {
        expect(isBookContainer(activityType)).to.be.false;
      });
    });
  });

  describe('isLaeProcessable()', () => {
    const laeTypes = { ...openAnswerTypes, ...closedResponseTypes, ...audioVideoTypes };

    it('should return true for any open answer type', () => {
      values(laeTypes).forEach(activityType => {
        expect(isLaeProcessable(activityType)).to.be.true;
      });
    });

    it('should return false for any other type', () => {
      getDifference(laeTypes).forEach(activityType => {
        expect(isLaeProcessable(activityType)).to.be.false;
      });
    });
  });

  describe('isAssessable()', () => {
    const types = [...assessableTypes];

    it('should return true for any assessable type', () => {
      types.forEach(activityType => {
        expect(isAssessable(activityType)).to.be.true;
      });
    });

    it('should return false for any other type', () => {
      getDifference(types).forEach(activityType => {
        expect(isAssessable(activityType)).to.be.false;
      });
    });
  });

  describe('isFeedback()', () => {
    it('should return true for any feedback type', () => {
      values(feedbackTypes).forEach(activityType => {
        expect(isFeedback(activityType)).to.be.true;
      });
    });

    it('should return false for any other type', () => {
      getDifference(feedbackTypes).forEach(activityType => {
        expect(isFeedback(activityType)).to.be.false;
      });
    });
  });
});

const getDifference = (types: object) => difference(values(activityTypes), values(types));
const getRandomActivityType = () => [faker.internet.url(), faker.random.uuid()].join('/');
