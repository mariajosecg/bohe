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

	let $menu = $('.menu-collapse')
	let $icon = $('.toggle-menu').find('i')
	let $menuMask = $('.menu-mask')

	let toggleMenu = () => {
		$menu.toggleClass('open')

		if ($menu.hasClass('open')) {
			$icon.removeClass('fa-bars').addClass('fa-times')
			$menuMask.removeClass('d-none')
		} else {
			$icon.removeClass('fa-times').addClass('fa-bars')
			$menuMask.addClass('d-none')
		}
	}

	// $(document).on('click','.toggle-menu',function(){
	// 	toggleMenu()
 //  });

	// $(document).on('click','.menu-mask',function(){
	// 	toggleMenu()
	// });

	$('.menu-mask, .toggle-menu').click(function () {
		toggleMenu()
	})


  $('.look-banner').slick({
		infinite: true,
    prevArrow:"<div class='slick-prev'></div>",
    nextArrow:"<div class='slick-next'></div>"
  });

 //  $('.dropdown').hover(function() {
	//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	// }, function() {
	//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	// });
});