import { verbs as xapiVerbs } from '@gradiant/xapi-dsl/dsl';

export namespace verbs {
  export const answered = xapiVerbs.adl.answered;
  export const evaluated = xapiVerbs.acrossx.evaluated;
  export const passed = xapiVerbs.adl.passed;
  export const failed = xapiVerbs.adl.failed;
  export const initialized = xapiVerbs.adl.initialized;
  export const interacted = xapiVerbs.adl.interacted;
  export const played = xapiVerbs.activityStream.v1.play;
  export const paused = xapiVerbs.tincan.paused;
  export const listen = xapiVerbs.activityStream.v1.listen;
  export const watched = xapiVerbs.activityStream.v1.watch;
  export const skipped = xapiVerbs.tincan.skipped;
  export const completed = xapiVerbs.activityStream.v1.complete;
  export const enabled = xapiVerbs.tincan.enabled;
  export const disabled = xapiVerbs.tincan.disabled;
  export const posted = xapiVerbs.acrossx.posted;
  export const replied = xapiVerbs.tincan.replied;
  export const deleted = xapiVerbs.activityStream.v1.deleted;
  export const liked = xapiVerbs.activityStream.v1.liked;
  export const votedUp = xapiVerbs.tincan.votedUp;
  export const votedDown = xapiVerbs.tincan.votedDown;
  export const reported = xapiVerbs.activityStream.v1.flagAsInappropriate;
  export const accessed = xapiVerbs.activityStream.v1.accessed;
  export const created = xapiVerbs.activityStream.v1.created;
  export const joined = xapiVerbs.activityStream.v1.joined;
  export const edited = xapiVerbs.acrossx.edited;
}
