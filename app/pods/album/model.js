import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({
  artwork: DS.attr('string'),
  name: DS.attr('string'),
  artist: DS.attr('string'),
  isExplicit: DS.attr('boolean'),
  songs: DS.hasMany('song'),

  songDurations: computed.mapBy('songs', 'duration'),
  totalDuration: computed.sum('songDurations'),

  songCount: computed('songs.length', function() {
    return this.get('songs.length');
  })
});
