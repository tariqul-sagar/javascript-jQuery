// ==== Javascript ====

function textChange(){
	document.getElementById('js_p').innerHTML="Congratulations. You have made it.";
};




// ==== jQuery ====

$(document).ready(function(){
	$('.btn_alert').click(function(){
		alert("It Works.");
	});

	$( "#draggable" ).draggable();

	$( "#drag" ).draggable();

	$( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Perfect!" );
      }
    });

    $( "#sortable" ).sortable();

    $( "#accordion" ).accordion();


    var availableTags = [
      "HTML",
      "CSS",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "PHP",
      "COBOL",
      "React",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Node",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Laravel"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    $( "#datepicker" ).datepicker();

    $( "#menu" ).menu();

    $( "#tabs" ).tabs();


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
      $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });


    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );


    $( document ).tooltip();


    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();


});