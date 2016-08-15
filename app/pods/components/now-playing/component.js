import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],

  isDurationRemaining: false,

  remainingTime: computed('song.duration', 'player.currentTime', function() {
    return this.get('song.duration') - this.get('player.currentTime');
  }),

  player: inject.service(),

  song: computed.alias('player.song'),

  actions: {
    play() {
      this.get('player').resume();
    },
    pause() {
      this.get('player').pause();
    },
    toggleDuration() {
      this.toggleProperty('isDurationRemaining');
    }
  }
});
