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
	if($( window ).width() < 1024){
		$('.video-slider').slick(/*{
			arrows: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
			{
     		 breakpoint: 1024,
		     settings: "unslick"
    		},
    		{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        unslick: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        unslick: false
		      }
    		}]
		}*/);	
	} else {
		$('.video-slider').slick('unslick');
	}
});