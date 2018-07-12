$('#burger').on('click', function(){
	if ($(this).hasClass('burger')){
		$('.page-header__nav').css("display", "block");
		$(this).removeClass('burger');
		$(this).addClass('cross');
	} 
	else {
		$('.page-header__nav').css("display", "none");
		$(this).addClass('burger');
		$(this).removeClass('cross');
	}
});

$(document).ready(function(){
	$('#video-slider').slick({
		// adaptiveHeight: true,
		// autoplay: true,
  // 	autoplaySpeed: 3000,
  
  		// infinite: true;
  		// dots: true;
  		// slidesToShow: 3;
  		// slidesToScroll: 1;
	});

	console.log( $(window).width());
	
	function checkWindowSize() {
		if ($(window).width() < 1024) {
			console.log('показать слайдер');
		}
		else {
			console.log('показать просто блоки')
		}
	}

	checkWindowSize();

	$(window).on('resize', function(){
		checkWindowSize();
	});
});