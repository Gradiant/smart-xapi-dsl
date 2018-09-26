import { activityTypes as types } from '@gradiant/xapi-dsl/dsl';
import { expect } from 'chai';
import {
  activityTypes,
  audioVideoTypes,
  bookTypes,
  closedResponseTypes,
  discussionTypes,
  nonInteractiveTypes,
  openAnswerTypes
} from '../../src/activity-types';

describe('Activity Types', () => {
  describe('Open Answer', () => {
    it('should include essay', () => {
      expect(openAnswerTypes.essay).to.be.equal(types.smart.essay);
    });
  });

  describe('Closed Response', () => {
    it('should include drop down choice', () => {
      expect(closedResponseTypes.dropDownChoice).to.be.equal(types.smart.dropDownChoice);
    });

    it('should include fill in the gaps', () => {
      expect(closedResponseTypes.fillInTheGaps).to.be.equal(types.smart.fillInTheGaps);
    });

    it('should include matching pairs', () => {
      expect(closedResponseTypes.matchingPairs).to.be.equal(types.smart.matchingPairs);
    });

    it('should include multiple choice', () => {
      expect(closedResponseTypes.multipleChoice).to.be.equal(types.smart.multipleChoice);
    });

    it('should include words banks', () => {
      expect(closedResponseTypes.wordsBank).to.be.equal(types.smart.wordsBank);
    });
  });

  describe('Non Interactive', () => {
    it('should include attempt', () => {
      expect(nonInteractiveTypes.attempt).to.be.equal(types.smart.attempt);
    });

    it('should include no interactive', () => {
      expect(nonInteractiveTypes.nonInteractive).to.be.equal(types.smart.noInteractive);
    });
  });

  describe('Audio/Video', () => {
    it('should include audio', () => {
      expect(audioVideoTypes.audio).to.be.equal(types.smart.audio);
    });

    it('should include video', () => {
      expect(audioVideoTypes.video).to.be.equal(types.smart.video);
    });
  });

  describe('Book', () => {
    it('should include book', () => {
      expect(bookTypes.book).to.be.equal(types.smart.book);
    });

    it('should include unit', () => {
      expect(bookTypes.unit).to.be.equal(types.smart.unit);
    });

    it('should include lesson', () => {
      expect(bookTypes.lesson).to.be.equal(types.smart.lesson);
    });
  });

  it('should aggregate every type', () => {
    expect(activityTypes).to.be.deep.equal({
      ...openAnswerTypes,
      ...closedResponseTypes,
      ...audioVideoTypes,
      ...nonInteractiveTypes,
      ...discussionTypes,
      ...bookTypes
    });
  });
});
