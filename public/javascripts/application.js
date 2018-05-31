/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

/* *********************** */
/* Character count pattern */
$(document).ready(function() {
    var text_max = 5000; // This the maximum character count
    var text_spread = 100; // This calculates when to change the text colour to red
    
    $('#character_count').html('Character count: 0 /' + text_max);
    $('#character_count_2').html('Character count: 0 /' + text_max);
    $('#character_count_3').html('Character count: 0 /' + text_max);
    $('#character_count_4').html('Character count: 0 /' + text_max);
    $('#character_count_5').html('Character count: 0 /' + text_max);
    $('#character_count_6').html('Character count: 0 /' + text_max);
    $('#character_count_7').html('Character count: 0 /' + text_max);

    $('#mitigation').keyup(function() {
        var text_length = $('#mitigation').val().length;

        $('#character_count').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count').css('color','#B10E1E');
        } else {
            $('#character_count').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count').addClass('bold');
        } else {
            $('#character_count').removeClass('bold');
        }
    });

    $('#not-guilty-mitigation').keyup(function() {
        var text_length = $('#not-guilty-mitigation').val().length;

        $('#character_count').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count').css('color','#B10E1E');
        } else {
            $('#character_count').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count').addClass('bold');
        } else {
            $('#character_count').removeClass('bold');
        }
    });

    $('#witness-1-details').keyup(function() {
        var text_length = $('#witness-1-details').val().length;

        $('#character_count_2').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_2').css('color','#B10E1E');
        } else {
            $('#character_count_2').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_2').addClass('bold');
        } else {
            $('#character_count_2').removeClass('bold');
        }
    });

    $('#witness-2-details').keyup(function() {
        var text_length = $('#witness-2-details').val().length;

        $('#character_count_3').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_3').css('color','#B10E1E');
        } else {
            $('#character_count_3').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_3').addClass('bold');
        } else {
            $('#character_count_3').removeClass('bold');
        }
    });

    $('#dates-to-avoid-details').keyup(function() {
        var text_length = $('#dates-to-avoid-details').val().length;

        $('#character_count_4').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_4').css('color','#B10E1E');
        } else {
            $('#character_count_4').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_4').addClass('bold');
        } else {
            $('#character_count_4').removeClass('bold');
        }
    });

    $('#claiming-benefits-details').keyup(function() {
        var text_length = $('#claiming-benefits-details').val().length;

        $('#character_count_5').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_5').css('color','#B10E1E');
        } else {
            $('#character_count_5').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_5').addClass('bold');
        } else {
            $('#character_count_5').removeClass('bold');
        }
    });

    $('#other-expenses-details').keyup(function() {
        var text_length = $('#other-expenses-details').val().length;

        $('#character_count_6').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_6').css('color','#B10E1E');
        } else {
            $('#character_count_6').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_6').addClass('bold');
        } else {
            $('#character_count_6').removeClass('bold');
        }
    });

    $('#feedback-details').keyup(function() {
        var text_length = $('#feedback-details').val().length;

        $('#character_count_7').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_7').css('color','#B10E1E');
        } else {
            $('#character_count_7').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_7').addClass('bold');
        } else {
            $('#character_count_7').removeClass('bold');
        }
    });

});


















    /* TIME OUT */
    window.onload = function() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("overlay2").style.display = "none";
        
    }

    var timeoutID;
    var timeoutID2;

    // countDown1 - How long to count down for?
    var yyy = 5000;
    document.getElementById("countDown1").innerHTML = yyy/1000;

    // countDown2 - How long to count down for?
    var xxx = 10000;

    function setup() {
        this.addEventListener("mousemove", resetTimer, false);
        this.addEventListener("mousedown", resetTimer, false);
        this.addEventListener("keypress", resetTimer, false);
        this.addEventListener("DOMMouseScroll", resetTimer, false);
        this.addEventListener("mousewheel", resetTimer, false);
        this.addEventListener("touchmove", resetTimer, false);
        this.addEventListener("MSPointerMove", resetTimer, false);

        startTimer();
    }
    setup();

    function startTimer() {
        timeoutID = window.setTimeout(goInactive, yyy);
    }

    function goInactive() {
        startTimer2();
        document.getElementById("overlay").style.display = "block";
    }

    function startTimer2() {
        countDownTimer(xxx);
        document.getElementById("countDown2").innerHTML = xxx/1000;
        timeoutID2 = window.setTimeout(goInactive2, xxx);
    }

    function goInactive2() {
        window.clearTimeout(timeoutID2);
        document.getElementById("overlay").style.display = "none";
        document.getElementById("overlay2").style.display = "block";
    }

    function resetTimer(e) {
        window.clearTimeout(timeoutID);
        goActive();
    }

    function goActive() {
        startTimer();
    }

    function off() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("finalCountdown").style.display = "none";
        window.clearTimeout(timeoutID);
        window.clearTimeout(timeoutID2);
        startTimer();
    }
    
    function off2() {
        document.getElementById("overlay2").style.display = "none";
        window.clearTimeout(timeoutID2);
        
        document.getElementById("overlay").style.display = "none";
        document.getElementById("finalCountdown").style.display = "none";
        window.clearTimeout(timeoutID);
        startTimer();
        
        window.location.replace('start-page.html');

    }
    
    /* COUNTDOWN TIMER */
    function countDownTimer(howLong) {
        // Set the date we're counting down to
        var countDown = (howLong/1000)-1;

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Find the distance between now an the count down date
            var counter = countDown--;

            // Output the result in an element with id="demo"
            document.getElementById("countDown2").innerHTML = counter;
            
            if (counter == 5) {
                document.getElementById("finalCountdown").style.display = "block";
            }
            // If the count down is over, write some text 
            if (counter < 0) {
                clearInterval(x);
                document.getElementById("countDown2").innerHTML = "0";
            }
        }, 1000);
    }
