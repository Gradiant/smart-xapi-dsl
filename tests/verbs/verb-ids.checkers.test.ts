import { expect } from 'chai';
import faker from 'faker';
import {
  isAccessed,
  isAnswered,
  isCompleted,
  isCreated,
  isDeleted,
  isDisabled,
  isEdited,
  isEnabled,
  isEvaluated,
  isFailed,
  isInitialized,
  isInteracted,
  isJoined,
  isLiked,
  isListened,
  isPassed,
  isPaused,
  isPlayed,
  isPosted,
  isReplied,
  isReported,
  isSkipped,
  isVerbId,
  isVotedDown,
  isVotedUp,
  isWatched,
  verbs
} from '../../src/verbs';
import { difference, values } from '../helpers';

describe('Verb ID Checkers', () => {
  describe('isVerbId()', () => {
    it('return a function', () => {
      expect(isVerbId(getRandomVerbId())).to.be.a('function');
    });

    it('should return true when the recipe matches', () => {
      const verb = getRandomVerbId();

      expect(isVerbId(verb)(verb)).to.be.true;
    });

    it('should return false when the recipe does not match', () => {
      const expectedVerb = getRandomVerbId();
      const verb = getRandomVerbId();

      expect(isVerbId(expectedVerb)(verb)).to.be.false;
    });
  });

  describe('isAnswered()', () => {
    it('should return `true` for answered', () => {
      expect(isAnswered(verbs.answered.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.answered.id).forEach(verb => {
        expect(isAnswered(verb)).to.be.false;
      });
    });
  });

  describe('isEvaluated()', () => {
    it('should return `true` for evaluated', () => {
      expect(isEvaluated(verbs.evaluated.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.evaluated.id).forEach(verb => {
        expect(isEvaluated(verb)).to.be.false;
      });
    });
  });

  describe('isPassed()', () => {
    it('should return `true` for passed', () => {
      expect(isPassed(verbs.passed.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.passed.id).forEach(verb => {
        expect(isPassed(verb)).to.be.false;
      });
    });
  });

  describe('isFailed()', () => {
    it('should return `true` for failed', () => {
      expect(isFailed(verbs.failed.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.failed.id).forEach(verb => {
        expect(isFailed(verb)).to.be.false;
      });
    });
  });

  describe('isInitialized()', () => {
    it('should return `true` for initialized', () => {
      expect(isInitialized(verbs.initialized.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.initialized.id).forEach(verb => {
        expect(isInitialized(verb)).to.be.false;
      });
    });
  });

  describe('isInteracted()', () => {
    it('should return `true` for interacted', () => {
      expect(isInteracted(verbs.interacted.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.interacted.id).forEach(verb => {
        expect(isInteracted(verb)).to.be.false;
      });
    });
  });

  describe('isPlayed()', () => {
    it('should return `true` for played', () => {
      expect(isPlayed(verbs.played.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.played.id).forEach(verb => {
        expect(isPlayed(verb)).to.be.false;
      });
    });
  });

  describe('isPaused()', () => {
    it('should return `true` for paused', () => {
      expect(isPaused(verbs.paused.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.paused.id).forEach(verb => {
        expect(isPaused(verb)).to.be.false;
      });
    });
  });

  describe('isListened()', () => {
    it('should return `true` for listen', () => {
      expect(isListened(verbs.listen.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.listen.id).forEach(verb => {
        expect(isListened(verb)).to.be.false;
      });
    });
  });

  describe('isWatched()', () => {
    it('should return `true` for watched', () => {
      expect(isWatched(verbs.watched.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.watched.id).forEach(verb => {
        expect(isWatched(verb)).to.be.false;
      });
    });
  });

  describe('isSkipped()', () => {
    it('should return `true` for skipped', () => {
      expect(isSkipped(verbs.skipped.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.skipped.id).forEach(verb => {
        expect(isSkipped(verb)).to.be.false;
      });
    });
  });

  describe('isCompleted()', () => {
    it('should return `true` for completed', () => {
      expect(isCompleted(verbs.completed.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.completed.id).forEach(verb => {
        expect(isCompleted(verb)).to.be.false;
      });
    });
  });

  describe('isEnabled()', () => {
    it('should return `true` for enabled', () => {
      expect(isEnabled(verbs.enabled.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.enabled.id).forEach(verb => {
        expect(isEnabled(verb)).to.be.false;
      });
    });
  });

  describe('isDisabled()', () => {
    it('should return `true` for disabled', () => {
      expect(isDisabled(verbs.disabled.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.disabled.id).forEach(verb => {
        expect(isDisabled(verb)).to.be.false;
      });
    });
  });

  describe('isPosted()', () => {
    it('should return `true` for posted', () => {
      expect(isPosted(verbs.posted.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.posted.id).forEach(verb => {
        expect(isPosted(verb)).to.be.false;
      });
    });
  });

  describe('isReplied()', () => {
    it('should return `true` for replied', () => {
      expect(isReplied(verbs.replied.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.replied.id).forEach(verb => {
        expect(isReplied(verb)).to.be.false;
      });
    });
  });

  describe('isDeleted()', () => {
    it('should return `true` for deleted', () => {
      expect(isDeleted(verbs.deleted.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.deleted.id).forEach(verb => {
        expect(isDeleted(verb)).to.be.false;
      });
    });
  });

  describe('isLiked()', () => {
    it('should return `true` for liked', () => {
      expect(isLiked(verbs.liked.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.liked.id).forEach(verb => {
        expect(isLiked(verb)).to.be.false;
      });
    });
  });

  describe('isVotedUp()', () => {
    it('should return `true` for votedUp', () => {
      expect(isVotedUp(verbs.votedUp.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.votedUp.id).forEach(verb => {
        expect(isVotedUp(verb)).to.be.false;
      });
    });
  });

  describe('isVotedDown()', () => {
    it('should return `true` for votedDown', () => {
      expect(isVotedDown(verbs.votedDown.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.votedDown.id).forEach(verb => {
        expect(isVotedDown(verb)).to.be.false;
      });
    });
  });

  describe('isReported()', () => {
    it('should return `true` for reported', () => {
      expect(isReported(verbs.reported.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.reported.id).forEach(verb => {
        expect(isReported(verb)).to.be.false;
      });
    });
  });

  describe('isAccessed()', () => {
    it('should return `true` for reported', () => {
      expect(isAccessed(verbs.accessed.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.accessed.id).forEach(verb => {
        expect(isAccessed(verb)).to.be.false;
      });
    });
  });

  describe('isCreated()', () => {
    it('should return `true` for reported', () => {
      expect(isCreated(verbs.created.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.created.id).forEach(verb => {
        expect(isCreated(verb)).to.be.false;
      });
    });
  });

  describe('isJoined()', () => {
    it('should return `true` for reported', () => {
      expect(isJoined(verbs.joined.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.joined.id).forEach(verb => {
        expect(isJoined(verb)).to.be.false;
      });
    });
  });

  describe('isEdited()', () => {
    it('should return `true` for reported', () => {
      expect(isEdited(verbs.edited.id)).to.be.true;
    });

    it('should return `false` for any other verb', () => {
      getDifference(verbs.edited.id).forEach(verb => {
        expect(isEdited(verb)).to.be.false;
      });
    });
  });
});

const getDifference = (verbId: string) => difference(values(verbs).map(verb => verb.id), [verbId]);
const getRandomVerbId = (): string => [faker.internet.url(), faker.random.uuid()].join('/');
