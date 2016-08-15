import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['play', 'audio-control'],
  isPlaying: false,

  actions: {
    play() {
      this.sendAction('play');
    },
    pause() {
      this.sendAction('pause');
    }
  }
});
