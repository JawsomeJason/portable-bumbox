import Ember from 'ember';

export function formatDuration(params/*, hash*/) {
  const duration = params;

  /* 0:00 minute/second */
  return `${Math.floor(duration / 60)}:${(`00${duration % 60}`).slice(-2)}`;
}

export default Ember.Helper.helper(formatDuration);
