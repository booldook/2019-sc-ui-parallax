/*
class = "my-ani slideInLeft" 
data-myani-duration="2s" 
data-myani-offset="200"
data-myani-iteration="3"
data-myani-delay=1s
*/
var ani = $(".my-ani");

$(window).scroll(function(){
	var scTop = $("html, body", document, window).scrollTop();
	ani.each(function(){
		var pos = $(this).offset().top - 500;
		var name = $(this).data("ani-name");
		if(scTop > pos) {
			if(name !== undefined) {
				$(this).addClass(name);
				if($(this).data("ani-duration") !== undefined) {
					$(this).css({"animation-duration": $(this).data("ani-duration")}); 
				}
				else {
					$(this).css({"animation-duration": "1s"});
				}
				if($(this).data("ani-delay") !== undefined) {
					$(this).css({"animation-delay": $(this).data("ani-delay")}); 
				}
				else {
					$(this).css({"animation-delay": "0s"});
				}
			}
		}
	});
});

