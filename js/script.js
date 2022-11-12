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
});