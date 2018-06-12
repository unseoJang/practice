$(function(){
	var slide = $('.slide_wrap');
	slide.find('.bt_control .bt_next').click(function(){
		// console.log('a');
		nextSlide();
		return false;
	});
	slide.find('.bt_control .bt_prev').click(function(){
		// console.log('b');
		prevSlide();
		return false;
	});

	slide.find('.bt_control ul li a').click(function(){
		var activeIdx = $(this).parent().indext();

		slide.find('.slide_view ul li').eq(activeIdx).css({'left':'100%'});//슬라이드의 동작 구성 원리
		oldIdx = currIdx;
		currIdx = activeIdx;
		sliderMotion('next');
		return false;
	})
});

var slide = $('.slide_wrap');


var slide ,
	currIdx = 0,
	oldIdx;

function nextSlide(){//bt_next의 함수
	//console.log('a');
	//
	oldIdx = currIdx;
	if(currIdx ==(slide.find('.slide_view ul li').length)-1){
		//currIdx = 0;
		currIdx =(slide.find('.slide_view ul li').length)-1;
		slide.find('.bt_control .next').addClass('disabled');
	}else{
		currIdx++; //currIdx+1
	}
	slide.find('.bt_control a');

}
function prevSlide(){//bt_prev의 함수
	//console.log('b');
	//
	oldIdx = currIdx;
	if(currIdx ==(slide.find('.slide_view ul li').length)-1){
		//currIdx = 0;
		currIdx =(slide.find('.slide_view ul li').length)-1;
		slide.find('.bt_control .next').addClass('disabled');
	}else{
		currIdx++; //currIdx+1
	}
	slide.find('.bt_control a');

}
function slideMotion(){
	slide.find('.slide_view ul li').animate({"margin-left":slide.find('.slide_view ul li').outerWidth()*currIdx});

	carouselMotion();
}
function caruselMotion(){
	$('.carusel ul li').removeClass('active');
	$('.carusel ul li').eq(currIdx).addClass('active');
}