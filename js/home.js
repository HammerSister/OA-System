function f()
{
	var a = $("#logo").outerHeight();
	var b = a * 4;
	document.getElementById("logo").style.width = b+"px";

	/*var c = $("textarea").outerWidth(true);
	var d = $(".to_fill").width();
	var h = $("textarea").attr("cols");
	if(c > d)
	{
		$("textarea").attr("cols",h - 1);
	}
	if(d > (c + 10.4))
	{
		$("textarea").attr("cols",h + 1);
	}
	if(c > 1018)
	{
		$("textarea").width("1018px");
	}*/

	var c = $(".to_fill").width();
	var d = c * 0.96 / 10.4;
	$("textarea").attr("cols",d);

	var e = $(".fill_b").width();
	var f = $("#filename").width();
	var g = (e - f) / 2;
	var h = $(".fill_b").height();
	var i = $("#filename").height();
	var j = (h - i) / 2;
	document.getElementById("filename").style.left = g + "px";
	document.getElementById("filename").style.top = j + "px";

	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	document.getElementById("date_year").innerHTML = year;
	document.getElementById("date_month").innerHTML = month;

	var k = $(".seen").width();
	var l = $(".seen").height();
	var m = $("#daoru").width();
	var n = $("#daoru").height();
	var o = (k - m) / 2;
	var p = (l - n) / 2;
	document.getElementById("daoru").style.left = o + "px";
	document.getElementById("daoru").style.top = p + "px";

	var q = $("input[name='method']:checked").val();
	if(q == "singular")
	{
		$(".singular").css({display:"flex"});
		$(".plural").css({display:"none"});
	}
	else if(q == "plural")
	{
		$(".singular").css({display:"none"});
		$(".plural").css({display:"flex"});
	}

	setTimeout("f()",100);
}

$("#left_ico").click(function(){
	$(".left").animate({left:"-17%"},500);
	$("#left_ico").css({display:"none"});
	$("#right_ico").css({display:"inline"});
	setTimeout("$('.main').addClass('main_more');",500);
})

$("#right_ico").click(function(){
	$(".left").animate({left:"0"},500);
	$("#left_ico").css({display:"inline"});
	$("#right_ico").css({display:"none"});
	$(".main").removeClass("main_more");
})

$("#toFill").click(function(){
	$("#fill").css({display:"flex"});
	$("#see").css({display:"none"});
	$("#eva").css({display:"none"});
	$("#lau").css({display:"none"});
	$("#reg").css({display:"none"});
	$("#re").css({display:"none"});
	$("#pointer1").css({display:"inline-block"});
	$("#pointer2").css({display:"none"});
	$("#pointer3").css({display:"none"});
	$("#pointer4").css({display:"none"});
	$("#pointer5").css({display:"none"});
	$("#pointer6").css({display:"none"});
})

$("#toSee").click(function(){
	$("#fill").css({display:"none"});
	$("#see").css({display:"flex"});
	$("#eva").css({display:"none"});
	$("#lau").css({display:"none"});
	$("#reg").css({display:"none"});
	$("#re").css({display:"none"});
	$("#pointer1").css({display:"none"});
	$("#pointer2").css({display:"inline-block"});
	$("#pointer3").css({display:"none"});
	$("#pointer4").css({display:"none"});
	$("#pointer5").css({display:"none"});
	$("#pointer6").css({display:"none"});
})

$("#toEva").click(function(){
	$("#fill").css({display:"none"});
	$("#see").css({display:"none"});
	$("#eva").css({display:"flex"});
	$("#eva1").css({display:"flex"});
	$("#eva2").css({display:"block"});
	$("#eva3").css({display:"flex"});
	$("#lau").css({display:"none"});
	$("#reg").css({display:"none"});
	$("#re").css({display:"none"});
	$("#pointer1").css({display:"none"});
	$("#pointer2").css({display:"none"});
	$("#pointer3").css({display:"none"});
	$("#pointer4").css({display:"inline-block"});
	$("#pointer5").css({display:"none"});
	$("#pointer6").css({display:"none"});
})

$("#toLau").click(function(){
	$("#fill").css({display:"none"});
	$("#see").css({display:"none"});
	$("#eva").css({display:"flex"});
	$("#eva1").css({display:"flex"});
	$("#eva2").css({display:"block"});
	$("#eva3").css({display:"none"});
	$("#lau").css({display:"flex"});
	$("#reg").css({display:"none"});
	$("#re").css({display:"none"});
	$("#pointer1").css({display:"none"});
	$("#pointer2").css({display:"none"});
	$("#pointer3").css({display:"none"});
	$("#pointer4").css({display:"none"});
	$("#pointer5").css({display:"inline-block"});
	$("#pointer6").css({display:"none"});
})

$("#toReg").click(function(){
	$("#fill").css({display:"none"});
	$("#see").css({display:"none"});
	$("#eva").css({display:"none"});
	$("#lau").css({display:"none"});
	$("#reg").css({display:"flex"});
	$("#re").css({display:"none"});
	$("#pointer1").css({display:"none"});
	$("#pointer2").css({display:"none"});
	$("#pointer3").css({display:"none"});
	$("#pointer4").css({display:"none"});
	$("#pointer5").css({display:"none"});
	$("#pointer6").css({display:"inline-block"});
})


$("#toRe").click(function(){
	$("#fill").css({display:"none"});
	$("#see").css({display:"none"});
	$("#eva").css({display:"none"});
	$("#lau").css({display:"none"});
	$("#reg").css({display:"none"});
	$("#re").css({display:"flex"});
	$("#pointer1").css({display:"none"});
	$("#pointer2").css({display:"none"});
	$("#pointer3").css({display:"inline-block"});
	$("#pointer4").css({display:"none"});
	$("#pointer5").css({display:"none"});
	$("#pointer6").css({display:"none"});
})