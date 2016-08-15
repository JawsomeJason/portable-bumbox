/*
  In this step, we're going to change the way that our `{{song-row}}` component
  works so that only one song shows as playing at a time. We'll also highlight
  the currently playing song.
*/

import Ember from 'ember';
import DS from 'ember-data';
import { test } from 'ember-qunit';
import step from '../helpers/step';
import startApp from '../helpers/start-app';
import lookup from '../helpers/lookup';
import { exists } from '../helpers/assertions';

var player;
var store;

step(11, "Enhacing song-row", {
  setup: function(app) {
    player = lookup(app, 'service:player');
    store = lookup(app, 'store:main');
  }
});

test("Clicking play on a song sets the song on the player service", function() {
  expect(2);
  visit('/album/1');
  click('.song-row:nth-child(1) .audio-control__play');

  andThen(function() {
    ok(player.get('song') instanceof DS.Model, "the player's song is an Ember Data model");
    equal(player.get('song.id'), 11);
  });
});

test("After clicking on a play button, the song gets the 'is-current-song' class", function() {
  expect(1);
  visit('/album/1');
  click('.song-row:nth-child(1) .audio-control__play');

  andThen(function() {
    ok(exists('.song-row.is-current-song:nth-child(1)'), "The first song is current");
  });
});

test("After playing 2 songs in succession", function() {
  expect(4);
  visit('/album/1');
  click('.song-row:nth-child(1) .audio-control__play');
  click('.song-row:nth-child(2) .audio-control__play');

  andThen(function() {
    ok(!exists('.song-row.is-current-song:nth-child(1)'), "The first song is not current");
    ok(exists('.song-row.is-current-song:nth-child(2)'), "The second song is current");

    ok(exists('.song-row:nth-child(1) .audio-control__play'), "The first song does have a play button");
    ok(!exists('.song-row:nth-child(2) .audio-control__play'), "The second song doesn't have a play button");
  });
});

test("After playing and then pausing a song", function() {
  expect(2);
  visit('/album/1');
  click('.song-row:nth-child(1) .audio-control__play');

  andThen(function() {
    ok(exists('.song-row.is-current-song:nth-child(1)'), "The song is current");
    ok(!exists('.song-row:nth-child(1) .audio-control__play'), "The song doesn't have a play button");
  });
});

