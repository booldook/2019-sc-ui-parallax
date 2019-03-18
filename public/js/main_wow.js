//$(this).css({"background-color":"#fff", "box-shadow":"0 0 10px rgba(0,0,0,0.5)"});

$(".main_tit").css({"opacity": 1, "transform":"translate(-50%, -50%)"});
$(window).scroll(function(){
	var scTop = $(window, document, "html", "body").scrollTop();
	if(scTop > 150) {
		if(!$(".navs").hasClass("navs-shadow")) {
			$(".navs").stop().animate({"top": "-60px"}, 300, function(){
				$(this).addClass("navs-shadow");
				$(this).stop().animate({"top":0}, 300);
			});
		}
	}
	else {
		$(".navs").removeClass("navs-shadow");
	}
});

$("#bt_top").click(function(){
	$("html, body").stop().animate({"scrollTop": 0}, 500);
});

//$(".navs > .hamburger")
$(".navs").children(".hamburger").click(function(){
	$(".nav_sub").toggle();
});

new WOW().init();











