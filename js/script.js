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


});