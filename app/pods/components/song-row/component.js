import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  tagName: 'tr',
  classNames: ['song-row'],
  classNameBindings: ['isCurrentSong'],

  song: null,

  player: inject.service(),

  isPlaying: computed.and('player.isPlaying', 'isCurrentSong'),
  isCurrentSong: computed('song', 'player.song', function() {
    return this.get('song') === this.get('player.song');
  }),

  actions: {
    play: function() {
      this.get('player').play(this.get('song'));
    },
    pause: function() {
      this.get('player').pause();
    }
  }
});
