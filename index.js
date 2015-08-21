$(function() {

	$("input").focus(function() {

		$(this).css("border", "1px solid silver");
	});

		$(".submit").click(function() {

		var princ = $(".principal").val();
		princ = princ.replace(/[^.0-9]/g,'');

		if (princ === "")
			$(".principal").css("border", "1px solid red");

		var interest = $(".interest").val();
		interest = interest.replace(/[^.0-9]/g,'');

		if (interest === "")
			$(".interest").css("border", "1px solid red");

		var time = $(".loan-time").val();
		time = time.replace(/[^.0-9]/g,'');

		if (time === "")
			$(".loan-time").css("border", "1px solid red");

		var result = 0;
		if (time !== "" && interest !== "" && princ !== "")
		{
			result = calc(princ, interest, time);
			display(princ, result);
		}

	});

	$(".clear").click(function() {

		$(".principal").val("");
		$(".interest").val("");
		$(".loan-time").val("");
		$(".interest-paid").html("");
		$(".total-paid").html("");

	});

	function calc(p, i, t)
	{
		i = i / 100;

		var interest = p * i * t;
		interest = interest.toFixed(2);

		return interest;

	}

	function display(p, i) 
	{
		p = Number(p);
		i = Number(i);
		p = p + i;
		p = p.toFixed(2);
		$(".interest-paid").html(i);
		$(".total-paid").html(p);
	}


});