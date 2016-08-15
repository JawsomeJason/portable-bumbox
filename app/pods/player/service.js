import Ember from 'ember';

const { run } = Ember;

export default Ember.Service.extend({
  audioElement: null,
  isPlaying: false,
  song: null,
  currentTime: 0,

  setup: function() {
    var el = document.createElement('audio');
    this.set('audioElement', el);
    el.addEventListener('play', run.bind(this, 'didPlay'));
    el.addEventListener('pause', run.bind(this, 'didPause'));
    el.addEventListener('timeupdate', run.bind(this, 'didUpdateTime'));
  }.on('init'),

  play: function(song) {
    this.set('song', song);
    this.set('audioElement.src', song.get('url'));
    this.get('audioElement').play();
  },

  resume: function() {
    this.get('audioElement').play();
  },

  didPlay: function() {
    this.set('isPlaying', true);
  },

  pause: function(song) {
    this.get('audioElement').pause();
  },

  didPause: function() {
    this.set('isPlaying', false);
  },

  didUpdateTime: function() {
    this.set('currentTime', Math.floor(this.get('audioElement.currentTime')));
  },

  willDestroy: function() {
    this.get('audioElement').pause();
    this.set('audioElement.src', '');
  }
});
