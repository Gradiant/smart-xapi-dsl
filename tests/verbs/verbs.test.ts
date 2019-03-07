import { verbs as xapiVerbs } from '@gradiant/xapi-dsl/dsl';
import { expect } from 'chai';
import { verbs } from '../../src/verbs';

describe('Verbs', () => {
  it('should include answered', () => {
    expect(verbs.answered).to.be.equal(xapiVerbs.adl.answered);
  });

  it('should include evaluated', () => {
    expect(verbs.evaluated).to.be.equal(xapiVerbs.acrossx.evaluated);
  });

  it('should include passed', () => {
    expect(verbs.passed).to.be.equal(xapiVerbs.adl.passed);
  });

  it('should include failed', () => {
    expect(verbs.failed).to.be.equal(xapiVerbs.adl.failed);
  });

  it('should include initialized', () => {
    expect(verbs.initialized).to.be.equal(xapiVerbs.adl.initialized);
  });

  it('should include interacted', () => {
    expect(verbs.interacted).to.be.equal(xapiVerbs.adl.interacted);
  });

  it('should include played', () => {
    expect(verbs.played).to.be.equal(xapiVerbs.activityStream.v1.play);
  });

  it('should include paused', () => {
    expect(verbs.paused).to.be.equal(xapiVerbs.tincan.paused);
  });

  it('should include listen', () => {
    expect(verbs.listen).to.be.equal(xapiVerbs.activityStream.v1.listen);
  });

  it('should include watched', () => {
    expect(verbs.watched).to.be.equal(xapiVerbs.activityStream.v1.watch);
  });

  it('should include skipped', () => {
    expect(verbs.skipped).to.be.equal(xapiVerbs.tincan.skipped);
  });

  it('should include completed', () => {
    expect(verbs.completed).to.be.equal(xapiVerbs.activityStream.v1.complete);
  });

  it('should include enabled', () => {
    expect(verbs.enabled).to.be.equal(xapiVerbs.tincan.enabled);
  });

  it('should include disabled', () => {
    expect(verbs.disabled).to.be.equal(xapiVerbs.tincan.disabled);
  });

  it('should include posted', () => {
    expect(verbs.posted).to.be.equal(xapiVerbs.acrossx.posted);
  });

  it('should include replied', () => {
    expect(verbs.replied).to.be.equal(xapiVerbs.tincan.replied);
  });

  it('should include deleted', () => {
    expect(verbs.deleted).to.be.equal(xapiVerbs.activityStream.v1.deleted);
  });

  it('should include liked', () => {
    expect(verbs.liked).to.be.equal(xapiVerbs.activityStream.v1.liked);
  });

  it('should include votedUp', () => {
    expect(verbs.votedUp).to.be.equal(xapiVerbs.tincan.votedUp);
  });

  it('should include votedDown', () => {
    expect(verbs.votedDown).to.be.equal(xapiVerbs.tincan.votedDown);
  });

  it('should include reported', () => {
    expect(verbs.reported).to.be.equal(xapiVerbs.activityStream.v1.flagAsInappropriate);
  });

  it('should include accessed', () => {
    expect(verbs.accessed).to.be.equal(xapiVerbs.activityStream.v1.accessed);
  });

  it('should include created', () => {
    expect(verbs.created).to.be.equal(xapiVerbs.activityStream.v1.created);
  });

  it('should include joined', () => {
    expect(verbs.joined).to.be.equal(xapiVerbs.activityStream.v1.joined);
  });

  it('should include edited', () => {
    expect(verbs.edited).to.be.equal(xapiVerbs.acrossx.edited);
  });

  it('should include terminated', () => {
    expect(verbs.terminated).to.be.equal(xapiVerbs.adl.terminated);
  });
});
