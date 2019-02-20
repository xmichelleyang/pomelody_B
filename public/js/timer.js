'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // Get the correct amount of time    
    var relaxTime = 0;
    var prodTime = 0;

    var data = $.get("/data", function(result){
        relaxTime = result['relaxTime'];
        prodTime = result['prodTime'];
        if (whichPage() == "relax"){
            CountDown.Start(relaxTime * 60000 + 1000);
        }
        else {
            CountDown.Start(prodTime * 60000 + 1000);
        }
    })
}


// function callback(result){
//     relaxTime = result['relaxTime']
//     prodTime = result['workTime']
// }


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
            if(CurrentTime + 1020 >= EndTime  ){
                playAudio();
                setTimeout(1000);
            }
            if( CurrentTime >= EndTime ) {
                GuiTimer.css('color','red');
                // // Dynamically switch between pages
                if(whichPage() == "relax") {
                    window.location = '../treat-yourself.html'
                  
                }
                else {
                    
                    window.location = '../you-can-do-it.html'
                }
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

        function playAudio(){
            var x = new Audio("success-sound.mp3") 
            x.play();
            console.log("TRying to play sound")
        }
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
  console.log(document.URL)
  
  $("#status").text('Paused');
});

$("#resume").click(function () {
  $("#status").text('You Can Do It!');

});

// This is where you select the start and end time. Minute * 60,000
// ms



function whichPage(){
  if ((document.URL).includes("you-can-do-it"))  {
    return "relax"
  }
  else {
    return "work"
  }
}