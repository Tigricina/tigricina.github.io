
$(function () {
  $('.carousel').carousel({
    interval: false,
    keyboard: true
  }).swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});

});