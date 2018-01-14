
$("window").ready(function(){
	scrolling(0, 0);
	scrolling(1, 950);
	scrolling(2, 1900);
	// select(1, 1000);
	// select(0,0);


})

$(".site").mouseover(function(){
		
})




function scrolling (n, begin){

	$(window).scroll(function() {
	if($(window).scrollTop() >= begin && $(window).scrollTop() < begin + 950){
		$("a").eq(n).addClass("activea")
		$("li").eq(n).addClass("activeli")
		
	}
	else {
		$("a").eq(n).removeClass("activea")
		$("li").eq(n).removeClass("activeli")

		
	}

	if ($(window).scrollTop() > begin+50 && $(window).scrollTop() < begin+1000){
		$(".anim").eq(n).animate({

			width: "1100px",
			opacity: 1
		}, 850)
	}
})	

$("a").eq(n).click(function() {
	$("html, body"). animate({
		scrollTop: begin


	}, 1000)
	// $(".anim").fadeIn(2000);
})


}







// function select(n, begin){
// 	$(window).scroll(function() {
// 	if($(window).scrollTop() >= begin && $(window).scrollTop() < begin + 1000){
// 		$("a").eq(n).addClass("activea")
// 		$("li").eq(n).addClass("activeli")
// 	}
// 	else {
// 		$("a").eq(n).removeClass("activea")
// 		$("li").eq(n).removeClass("activeli")
// 	}
// })
// }







