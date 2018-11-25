
$(function () {
	let countItems = $('.carousel-item').length;
	let percents=(1/countItems)*100;
	
	$('.carousel').carousel({
    interval: false
  }).swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
			let currentState = $('.progress-bar').width() / $('.progress').parent().width() * 100;
			if(currentState >= 99){
				$('.progress-bar').css('width', '1%');
			}else{
				$('.progress-bar').css('width', (currentState + percents) +'%');
			}
			
		},
		swipeRight: function() {
			$(this).carousel("prev");
			let currentState = $('.progress-bar').width() / $('.progress').parent().width() * 100;
			if(currentState <= 1){
				$('.progress-bar').width('100%');
			}else{
				$('.progress-bar').css('width', (currentState - percents) +'%');
			}
			
		},
		allowPageScroll: "vertical"
	});
	
	$('#carouselExampleControls').on('slid.bs.carousel', function () {
		let $conditionItem = $('.carousel-item.black-logo');		
		if ($conditionItem.hasClass("active")) {
			$('svg').css('fill', 'black');
			$('.txt-6').css('color', 'black');
			$('.txt-4').css('color', 'black');
		}else{
			$('svg').css('fill', 'white');
		}
		
	  })
		


});


