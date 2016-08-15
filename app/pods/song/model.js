import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({
  track: DS.attr('number'),
  name: DS.attr('string'),
  duration: DS.attr('number'),
  url: DS.attr('string'),
  album: DS.belongsTo('album'),

  artwork: computed.alias('album.artwork'),
  artist: computed.alias('album.artist'),
});
