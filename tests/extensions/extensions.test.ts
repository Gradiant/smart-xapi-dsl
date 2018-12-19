import { contextExtensions, objectExtensions, resultExtensions } from '@gradiant/xapi-dsl/dsl';
import { expect } from 'chai';
import { extensions } from '../../src/extensions';

describe('Extensions', () => {
  it('should include `interactionContext`', () => {
    expect(extensions.interactionContext).to.be.equal(contextExtensions.smart.interactionContext);
  });

  it('should include `activityContext`', () => {
    expect(extensions.activityContext).to.be.equal(contextExtensions.smart.activityContext);
  });

  it('should include `attemptContext`', () => {
    expect(extensions.attemptContext).to.be.equal(objectExtensions.smart.attemptContext);
  });

  it('should include `studentResponse`', () => {
    expect(extensions.studentResponse).to.be.equal(objectExtensions.smart.studentResponse);
  });

  it('should include `evaluationFeedback`', () => {
    expect(extensions.evaluationFeedback).to.be.equal(resultExtensions.smart.evaluationFeedback);
  });

  it('should include `duration`', () => {
    expect(extensions.duration).to.be.equal(contextExtensions.tincan.duration);
  });

  it('should include `startingPoint`', () => {
    expect(extensions.startingPoint).to.be.equal(contextExtensions.tincan.startingPoint);
  });

  it('should include `endingPoint`', () => {
    expect(extensions.endingPoint).to.be.equal(contextExtensions.tincan.endingPoint);
  });

  it('should include `activityContext`', () => {
    expect(extensions.discussionMessage).to.be.equal(resultExtensions.smart.discussionMessage);
  });

  it('should include `userData`', () => {
    expect(extensions.userData).to.be.equal(contextExtensions.smart.extendedUserData);
  });

  it('should include `userAction`', () => {
    expect(extensions.userAction).to.be.equal(resultExtensions.smart.userAction);
  });

  it('should include `questions`', () => {
    expect(extensions.questions).to.be.equal(objectExtensions.smart.questions);
  });
});
