$(document).ready(function(){
  $('.banner').slick({
	infinite: true,
	speed: 500,
	fade: true,
	autoplay: true,
	autoplaySpeed: 2000,
	cssEase: 'linear',
    prevArrow:"<div class='slick-prev'></div>",
    nextArrow:"<div class='slick-next'></div>"
  });

  $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  autoplay: true,
		autoplaySpeed: 4000,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});

	$(document).on('click','.plus',function(){
		$('.count').val(parseInt($('.count').val()) + 1 );
	});
  $(document).on('click','.minus',function(){
		$('.count').val(parseInt($('.count').val()) - 1 );
		if ($('.count').val() == 0) {
			$('.count').val(1);
		}
  });

  $(window).scroll(function(event) {
	  var scrollTop = $(window).scrollTop();
	  if (scrollTop >= 205) {
	  	$('.blog').find('.sidebar').addClass('fixed')
	  } else {
	  	$('.blog').find('.sidebar').removeClass('fixed')
	  }
	});

	$(document).on('click','.toggle-menu',function(){
		$('.menu-collapse').toggleClass('open')
  });
});