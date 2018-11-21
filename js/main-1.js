$(document).ready(function(){
	$(".book-1").animate({opacity:0.5});
	$(".book-1").hover(function(){
		$(this).stop().animate({opacity:1},"fast");
	},function(){
		$(this).stop().animate({opacity:0.5},"slow");
	});
});