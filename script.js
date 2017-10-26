$(document).ready(function() {

	function question2() {
		$("#quiz").fadeOut("slow",function() {
			$("#question").html("I’m tall when I’m young and I’m short when I’m old. What am I?");
			$("#btn1").html("Candle");
			$("#btn2").html("Dog");
			$("#btn3").html("Sea");
		});
	};

	$("#question").html("What comes down but never goes up?");

    $("#btn1").html("Tree");
    	$("#btn1").on("click", function() {
  			question2();
  			$("#quiz").fadeIn();
	});

    $("#btn2").html("Rain");
    	$("#btn2").on("click", function() {
  			question2();
  			$("#quiz").fadeIn();
	});

    $("#btn3").html("Zipper");
    	$("#btn3").on("click", function() {
  			question2();
  			$("#quiz").fadeIn();
	});

});