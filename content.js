//jQuery(document).ready(function($) {

    // What follows is some configuration..
    // How much volume to add/subtract with one scroll (%)
    var stepSize = 2;
    // How long to wait before hiding the numbers (ms)
    var timeout = 1000;
    // Font size of the numbers (px)
    var fontSize = 50;
    // Offset from the top of the player (px)
    var topOffset = 19;
    // Offset from the left of the player
    var leftOffset = 30;
    // Config ends here
    
    $('.html5-main-video').attr('id', 'main-player');
    var player = document.getElementById("main-player");
    $('#main-player').parent().parent().append('<div id="yt-vc">100</div>');
    $('#yt-vc').css('position', 'absolute')
               .css('color', 'yellow')
               .css('z-index', '61') //ytp-chrome-top is 60
               .css('font-size', fontSize.toString() + "px")
               .css('top', topOffset.toString() + "px")
               .css('left', leftOffset.toString() + "px")
               .css('text-shadow', '0px 0px 15px black')
               .hide();
    var volumeBar = $('#yt-vc');
    
    var SVGpath = $('#ytp-svg-48');
    function modifyVolume(howmuch) {
        var volumeToSet = player.volume + howmuch;
        if (volumeToSet > 1.0) {
            volumeToSet = 1.0;
        }else if(volumeToSet < 0.0){
            volumeToSet = 0.0;
            player.muted = true;
        }else if(player.muted) {
            player.muted = false;
        }
        volumeToSet = Math.round(volumeToSet*100)/100;
        player.volume = volumeToSet;
        $('.ytp-volume-slider-track').css('width', (48*volumeToSet).toString() + 'px');
        $('.ytp-volume-slider-handle').css('left', (48*volumeToSet).toString() + 'px');
        if (volumeToSet <= 0.01) {
            SVGpath.attr('d', 'M12.39,15.54 L10,15.54 L10,20.44 L12.4,20.44 L17,25.50 L17,10.48 L12.39,15.54 Z');
        }else if (volumeToSet <= 0.5) {
            SVGpath.attr('d', 'M12.39,15.54 L10,15.54 L10,20.44 L12.4,20.44 L17,25.50 L17,10.48 L12.39,15.54 Z M22,17.99 C22,16.4 20.74,15.05 19,14.54 L19,21.44 C20.74,20.93 22,19.59 22,17.99 Z');
        }else {
            SVGpath.attr('d', 'M12.39,15.54 L10,15.54 L10,20.44 L12.4,20.44 L17,25.50 L17,10.48 L12.39,15.54 Z M22,17.99 C22,16.4 20.74,15.05 19,14.54 L19,21.44 C20.74,20.93 22,19.59 22,17.99 Z M19,24.31 L19,26 C22.99,25.24 26,21.94 26,18 C26,14.05 22.99,10.75 19,10 L19,11.68 C22.01,12.41 24.24,14.84 24.24,18 C24.24,21.15 22.01,23.58 19,24.31 Z');
        }
        displayVolumeBar();
    }
    
    var hideTimer = window.setTimeout(hideVolumeBar, timeout);
    function displayVolumeBar() {
        volumeBar.text(Math.round(player.volume*100));
        volumeBar.show();
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(hideVolumeBar, timeout);
        $('.ytp-volume-panel').attr('aria-valuenow', player.volume);
    }
    
    function hideVolumeBar() {
        volumeBar.hide();
    }
    
    $('#player-api').bind('mousewheel', function(e){
        e.preventDefault();
        if(e.originalEvent.wheelDelta /120 > 0) { //UP
            modifyVolume(+stepSize/100);
            
        }
        else{ //DOWN
            modifyVolume(-stepSize/100);
        }
    });
    
//});