import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({
  artwork: DS.attr('string'),
  name: DS.attr('string'),
  isExplicit: DS.attr('boolean'),
  artists: DS.hasMany('artist'),
  songs: DS.hasMany('song'),

  songDurations: computed.mapBy('songs', 'duration'),
  totalDuration: computed.sum('songDurations'),

  songCount: computed('songs.length', function() {
    return this.get('songs.length');
  }),
  artist: computed('artists', function() {
    const artists = this.get('artists');

    if(!artists.length) { 
      return 'Unknown'; 
    }

    if(artists.length > 1) {
      return `${artists.length} artists`;
    }

    return artists.get('firstObject.name');
  }),
});
