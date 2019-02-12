// Majority of timer code taken from: http://jsfiddle.net/rnQ2W/2/
var CountDown = (function ($) {
    // Length ms 
    var TimeOut = 10000;
    // Interval ms
    var TimeGap = 1000;
    
    var CurrentTime = ( new Date() ).getTime();
    var EndTime = ( new Date() ).getTime() + TimeOut;
    
    var GuiTimer = $('#countdown');
    var GuiPause = $('#pause');
    var GuiResume = $('#resume').hide();
    
    var Running = true;
    
    var UpdateTimer = function() {
        // Run till timeout
        if( CurrentTime + TimeGap < EndTime ) {
            setTimeout( UpdateTimer, TimeGap );
        }
        // Countdown if running
        if( Running ) {
            CurrentTime += TimeGap;
            // When the timer is DONE
            if( CurrentTime >= EndTime ) {
                GuiTimer.css('color','red');
                alert("Done!")
            }
        }
        // Update Gui
        var Time = new Date();
        Time.setTime( EndTime - CurrentTime );
        var Minutes = Time.getMinutes();
        var Seconds = Time.getSeconds();
        
        GuiTimer.html( 
            (Minutes < 10 ? '0' : '') + Minutes 
            + ':' 
            + (Seconds < 10 ? '0' : '') + Seconds );
    };
    
    var Pause = function() {
        Running = false;
        GuiPause.hide();
        GuiResume.show();
    };
    
    var Resume = function() {
        Running = true;
        GuiPause.show();
        GuiResume.hide();
    };
    
    var Start = function( Timeout ) {
        TimeOut = Timeout;
        CurrentTime = ( new Date() ).getTime();
        EndTime = ( new Date() ).getTime() + TimeOut;
        UpdateTimer();
    };

    return {
        Pause: Pause,
        Resume: Resume,
        Start: Start
    };
})(jQuery);

jQuery('#pause').on('click', CountDown.Pause);
jQuery('#resume').on('click', CountDown.Resume);

$("#pause").click(function () {
  $("#status").text('Paused');

});

$("#resume").click(function () {
  $("#status").text('You Can Do It!');

});

// This is where you select the start and end time. Minute * 60,000
// ms
CountDown.Start(5 * 60000);