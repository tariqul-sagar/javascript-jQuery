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


});