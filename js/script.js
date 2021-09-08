$(document).ready(function(){
  // Start Draggable
  $( "#drag" ).draggable();
  // Start Droppable
  $( "#draggable" ).draggable();
    $( "#Droopable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  // Start Sort
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  // Start Auto Complete
  var availableTags = [
      "html",
      "css",
      "bootstrap",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  // Start Date Picker
  $( "#datepicker" ).datepicker();
  // Start Dialog
  $( "#dialog" ).dialog();
  // Start Add Class
  $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
    // Start Color Animation
    var state = true;
    $( "#btn" ).on( "click", function() {
      if ( state ) {
        $( "#c-effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#c-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
    // Start Effect
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#e-effect" ).effect( selectedEffect, options, 500, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#e-effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button-2" ).on( "click", function() {
      runEffect();
      return false;
    });


});