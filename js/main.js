$(window).scroll(function(){
	var scTop = $(window, document, "html", "body").scrollTop();
	if(scTop > 150) {
		$(".navs").stop().animate({"top": "-60px"}, 300, function(){
			//$(this).css({"background-color":"#fff", "box-shadow":"0 0 10px rgba(0,0,0,0.5)"});
			$(this).stop().animate({"top":0}, 300);
		});
	}
	else {
		console.log("위");
	}
});