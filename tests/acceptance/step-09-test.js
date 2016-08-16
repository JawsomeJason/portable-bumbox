/*
  In this step you'll replace the markup for a song in an album with a
  component called song-row. This component will switch between a play and
  pause button depending on whether the song is playing or not.

  Note that the app has CSS that only shows the .play span when a user hovers
  over a song-row.

  When the song-row component is first rendered the play button should show.

  <td class="song-track">
    <span class="track-number">
      1
    </span>
    <span class="play">
      <span>Play</span>
    </span>
  </td>
  <td class="song-name">Song name</td>
  <td class="song-duration">5:23</td>

  Then when the play button is clicked the pause button should show.

  <td class="song-track">
    <span class="track-number">
      1
    </span>
    <span class="play">
      <span>Pause</span>
    </span>
  </td>
  <td class="song-name">Song name</td>
  <td class="song-duration">5:23</td>

  When the pause button is clicked the play button should show again.
*/

import Ember from 'ember';
import step from '../helpers/step';
import { test } from 'ember-qunit';

step("9", "Create a song-row component");

test("the component shows the play button by default", function() {
  visit('album/1');

  andThen(function() {
    equal(find('.song-row:first .audio-control__play').length, 1, "The play button is showing");
    equal(find('.song-row:first .audio-control__pause').length, 0, "The pause button is not showing");
  });
});

test("the component toggles betwen the pause and play button when it's clicked", function() {
  expect(4);
  visit('album/1');

  click('.song-row:first .audio-control__play');

  andThen(function() {
    equal(find('.song-row:first .audio-control__pause').length, 1, "The pause button is showing");
    equal(find('.song-row:first .audio-control__play').length, 0, "The play button is not showing");
  });

  click('.song-row:first .audio-control__pause');

  andThen(function() {
    equal(find('.song-row:first .audio-control__play').length, 1, "The play button is showing");
    equal(find('.song-row:first .audio-control__pause').length, 0, "The pause button is not showing");
  });
});

