$(document).ready(function(){

	var $topLinks = $("#wrapperStart");

	$($topLinks).hide().fadeIn(1000).flip();

	var $artImg = $("#wrapper #art1 img");

	var titel = $("#wrapper #art1 h3");


	$($artImg).hide();

	$("#wrapper #klm").on("click", function(){
		$($artImg[0]).fadeToggle(500);
	});

	$("#wrapper #hello").on("click", function(){
		$($artImg[1]).fadeToggle(500);
	});

	$("#wrapper #guggen").on("click", function(){
		$($artImg[2]).fadeToggle(500);
	});

	$("#wrapper #airbnb").on("click", function(){
		$($artImg[3]).fadeToggle(500);
	});

	$("#wrapper #ah").on("click", function(){
		$($artImg[4]).fadeToggle(500);
	});





		
});



