import { activityTypes as types } from '@gradiant/xapi-dsl/dsl';
import { expect } from 'chai';
import {
  activityTypes,
  audioVideoTypes,
  bookTypes,
  closedResponseTypes,
  discussionTypes,
  feedbackTypes,
  nonInteractiveTypes,
  openAnswerTypes,
  otherTypes,
  scormTypes
} from '../../src/activity-types';

describe('Activity Types', () => {
  describe('Open Answer', () => {
    it('should include audio recording', () => {
      expect(openAnswerTypes.audioRecording).to.be.equal(types.smart.audioRecording);
    });

    it('should include essay', () => {
      expect(openAnswerTypes.essay).to.be.equal(types.smart.essay);
    });

    it('should include draw', () => {
      expect(openAnswerTypes.draw).to.be.equal(types.smart.draw);
    });
  });

  it('should include upload file', () => {
    expect(openAnswerTypes.uploadFile).to.be.equal(types.smart.uploadFile);
  });

  it('should include video recording', () => {
    expect(openAnswerTypes.videoRecording).to.be.equal(types.smart.videoRecording);
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

    it('should include image multiple choice', () => {
      expect(closedResponseTypes.imageMultipleChoice).to.be.equal(types.smart.imageMultipleChoice);
    });

    it('should include words banks', () => {
      expect(closedResponseTypes.wordsBank).to.be.equal(types.smart.wordsBank);
    });

    it('should include matrix multiple choice', () => {
      expect(closedResponseTypes.matrixMultipleChoice).to.be.equal(types.smart.matrixMultipleChoice);
    });

    it('should include matrix single choice', () => {
      expect(closedResponseTypes.matrixSingleChoice).to.be.equal(types.smart.matrixSingleChoice);
    });

    it('should include response in image', () => {
      expect(closedResponseTypes.responseInImage).to.be.equal(types.smart.responseInImage);
    });

    it('should include dragging image', () => {
      expect(closedResponseTypes.draggingImage).to.be.equal(types.smart.draggingImage);
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

  describe('Feedback', () => {
    it('should include question', () => {
      expect(feedbackTypes.question).to.be.equal(types.activityStream.v1.question);
    });

    it('should include review', () => {
      expect(feedbackTypes.review).to.be.equal(types.activityStream.v1.review);
    });

    it('should include survey', () => {
      expect(feedbackTypes.survey).to.be.equal(types.tincan.survey);
    });
  });

  describe('Other types', () => {
    it('should include likert', () => {
      expect(otherTypes.likert).to.be.equal(types.smart.likert);
    });

    it('should include quiz', () => {
      expect(otherTypes.quiz).to.be.equal(types.smart.quiz);
    });
  });

  describe('Scorm', () => {
    it('should include scorm (generic)', () => {
      expect(scormTypes.genericScorm).to.be.equal(types.smart.scorm);
    });

    it('should include choice', () => {
      expect(scormTypes.choice).to.be.equal(types.qti.choice);
    });

    it('should include multipleChoice', () => {
      expect(scormTypes.multipleChoice).to.be.equal(types.qti.multipleChoice);
    });

    it('should include textEntry', () => {
      expect(scormTypes.textEntry).to.be.equal(types.qti.textEntry);
    });

    it('should include inlineChoice', () => {
      expect(scormTypes.inlineChoice).to.be.equal(types.qti.inlineChoice);
    });
  });

  it('should aggregate every type', () => {
    expect(activityTypes).to.be.deep.equal({
      ...openAnswerTypes,
      ...closedResponseTypes,
      ...audioVideoTypes,
      ...nonInteractiveTypes,
      ...discussionTypes,
      ...bookTypes,
      ...otherTypes,
      ...feedbackTypes,
      ...scormTypes
    });
  });
});
