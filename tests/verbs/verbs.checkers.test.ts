import { expect } from 'chai';
import faker from 'faker';
import {
  isAnsweredVerb,
  isCompletedVerb,
  isDeletedVerb,
  isDisabledVerb,
  isEnabledVerb,
  isEvaluatedVerb,
  isFailedVerb,
  isInitializedVerb,
  isInteractedVerb,
  isLikedVerb,
  isListenedVerb,
  isPassedVerb,
  isPausedVerb,
  isPlayedVerb,
  isPostedVerb,
  isRepliedVerb,
  isReportedVerb,
  isSkippedVerb,
  isVerb,
  isVotedDownVerb,
  isVotedUpVerb,
  isWatchedVerb,
  VerbLike,
  verbs
} from '../../src/verbs';
import { differenceWith, values } from '../helpers';

describe('Verb Checkers', () => {
  describe('isVerb()', () => {
    it('return a function', () => {
      expect(isVerb(getRandomVerb())).to.be.a('function');
    });

    it('should return true when the recipe matches', () => {
      const verb = getRandomVerb();

      expect(isVerb(verb)(verb)).to.be.true;
    });

    it('should return false when the recipe does not match', () => {
      const expectedVerb = getRandomVerb();
      const verb = getRandomVerb();

      expect(isVerb(expectedVerb)(verb)).to.be.false;
    });
  });

  describe('isAnsweredVerb()', () => {
    it('should return `true` for answered', () => {
      expect(isAnsweredVerb(verbs.answered)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.answered).forEach(verb => {
        expect(isAnsweredVerb(verb)).to.be.false;
      });
    });
  });

  describe('isEvaluatedVerb()', () => {
    it('should return `true` for evaluated', () => {
      expect(isEvaluatedVerb(verbs.evaluated)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.evaluated).forEach(verb => {
        expect(isEvaluatedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isPassedVerb()', () => {
    it('should return `true` for passed', () => {
      expect(isPassedVerb(verbs.passed)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.passed).forEach(verb => {
        expect(isPassedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isFailedVerb()', () => {
    it('should return `true` for failed', () => {
      expect(isFailedVerb(verbs.failed)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.failed).forEach(verb => {
        expect(isFailedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isInitializedVerb()', () => {
    it('should return `true` for initialized', () => {
      expect(isInitializedVerb(verbs.initialized)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.initialized).forEach(verb => {
        expect(isInitializedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isInteractedVerb()', () => {
    it('should return `true` for interacted', () => {
      expect(isInteractedVerb(verbs.interacted)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.interacted).forEach(verb => {
        expect(isInteractedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isPlayedVerb()', () => {
    it('should return `true` for played', () => {
      expect(isPlayedVerb(verbs.played)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.played).forEach(verb => {
        expect(isPlayedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isPausedVerb()', () => {
    it('should return `true` for paused', () => {
      expect(isPausedVerb(verbs.paused)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.paused).forEach(verb => {
        expect(isPausedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isListenedVerb()', () => {
    it('should return `true` for listen', () => {
      expect(isListenedVerb(verbs.listen)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.listen).forEach(verb => {
        expect(isListenedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isWatchedVerb()', () => {
    it('should return `true` for watched', () => {
      expect(isWatchedVerb(verbs.watched)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.watched).forEach(verb => {
        expect(isWatchedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isSkippedVerb()', () => {
    it('should return `true` for skipped', () => {
      expect(isSkippedVerb(verbs.skipped)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.skipped).forEach(verb => {
        expect(isSkippedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isCompletedVerb()', () => {
    it('should return `true` for completed', () => {
      expect(isCompletedVerb(verbs.completed)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.completed).forEach(verb => {
        expect(isCompletedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isEnabledVerb()', () => {
    it('should return `true` for enabled', () => {
      expect(isEnabledVerb(verbs.enabled)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.enabled).forEach(verb => {
        expect(isEnabledVerb(verb)).to.be.false;
      });
    });
  });

  describe('isDisabledVerb()', () => {
    it('should return `true` for disabled', () => {
      expect(isDisabledVerb(verbs.disabled)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.disabled).forEach(verb => {
        expect(isDisabledVerb(verb)).to.be.false;
      });
    });
  });

  describe('isPostedVerb()', () => {
    it('should return `true` for posted', () => {
      expect(isPostedVerb(verbs.posted)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.posted).forEach(verb => {
        expect(isPostedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isRepliedVerb()', () => {
    it('should return `true` for replied', () => {
      expect(isRepliedVerb(verbs.replied)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.replied).forEach(verb => {
        expect(isRepliedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isDeletedVerb()', () => {
    it('should return `true` for deleted', () => {
      expect(isDeletedVerb(verbs.deleted)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.deleted).forEach(verb => {
        expect(isDeletedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isLikedVerb()', () => {
    it('should return `true` for liked', () => {
      expect(isLikedVerb(verbs.liked)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.liked).forEach(verb => {
        expect(isLikedVerb(verb)).to.be.false;
      });
    });
  });

  describe('isVotedUpVerb()', () => {
    it('should return `true` for votedUp', () => {
      expect(isVotedUpVerb(verbs.votedUp)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.votedUp).forEach(verb => {
        expect(isVotedUpVerb(verb)).to.be.false;
      });
    });
  });

  describe('isVotedDownVerb()', () => {
    it('should return `true` for votedDown', () => {
      expect(isVotedDownVerb(verbs.votedDown)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.votedDown).forEach(verb => {
        expect(isVotedDownVerb(verb)).to.be.false;
      });
    });
  });

  describe('isReportedVerb()', () => {
    it('should return `true` for reported', () => {
      expect(isReportedVerb(verbs.reported)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.reported).forEach(verb => {
        expect(isReportedVerb(verb)).to.be.false;
      });
    });
  });

  // describe('$1()', () => {
  //   it('should return `true` for $2', () => {
  //     expect($1(verbs.$2)).to.be.true;
  //  });

  //
  //   it('should return `false` for any other verb', () => {
  //     getDifference(verbs.$2).forEach(verb => {
  //       expect($1(verb)).to.be.false;
  //    });

  //  });
  // });
});

const getDifference = (verb: VerbLike) => differenceWith((v1, v2) => v1.id === v2.id, values(verbs), [verb]);
const getRandomVerb = (): VerbLike => ({ id: [faker.internet.url(), faker.random.uuid()].join('/') });
