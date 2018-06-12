var slide;
var slideIdx = 0;
var slideLength = 0;
var autoslide = '';

$(function(){
	var slide = $('.slide_wrap');
	// slideLength = $slide.find('.slide_view ul li').length;
	// autoslide = setInterval(slideNext, 4000);
	slide.find('.bt_control a').click(function(){

		if($(this).attr('class') == 'bt_prev') prevSlide();
		else if($(this).attr('class') == 'bt_next') nextSlide();
		return false;
	});

});

function nextSlide(){//bt_next의 함수
	// console.log('a');
	if(slideIdx == slideLength-1) slideIdx=0;
	else slideIdx++;//slideIdx = slideIdx+1;
}
function prevSlide(){//bt_prev의 함수
	// console.log('b');
	if(slideIdx == 0) slideIdx = slideLength-1;
	else slideIdx--;//slideIdx = slideIdx-1;
}
function slideMotion(){
	slide.find('.slide_view ul li').animate({"margin-left":-slide.find('.slide_view ul li').outerWidth()*currIdx});

	caruselMotion();
}
function caruselMotion(){
	$('.carusel ul li').removeClass('active');
	$('.carusel ul li').eq(currIdx).addClass('active');
}