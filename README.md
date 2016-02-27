# chrome-youtube-wheelvolume
Little chrome extension, that enables you to control volume of videos with mousewheel. Just basic functionality, nothing fancy.
I wrote this thing in about 3 hours, so don't expect clean code or basically anything.

## Features
 - Scroll your wheel -> modify the volume!
 - Shows volume percentage in top left corner
 - As I use this all the time, when something changes, I shall update this extension

## Installation
I'm too lazy to submit this to the store or to cert it, you're gonna have to go with the manual route.
Packing it in .crx won't help as far as I know.
 - Clone this somewhere, where you won't accidentally delete it
 - Enable HTML5 player for Youtube https://www.youtube.com/html5
 - Goto chrome://extensions
 - Enable 'Developer mode'
 - Click 'Load unpacked extension...' and select your cloned folder
 - 'Enable' the extension (might be already enabled)
 - Watch a youtube video, scroll the wheel while hovering over the player and be amazed

## Configuration
 - Goto content.js and play around in the top 10 or so lines
 - Don't forget to reload the extension afterwards (in chrome://extensions)

## Todo
 - Fix problems with muting/unmuting
 - Enable in embeds/outside of youtube

### Special thanks
 - jQuery foundation - for making an awesome 
 - Magic Actions for Youtube - for being so clunky, that I had to write this myself

