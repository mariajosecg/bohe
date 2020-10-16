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
	let $blogMenu = $('.blog').find('.sidebar')
	let $icon = $('.toggle-menu').find('i')
	let $menuMask = $('.menu-mask')
	let $cartMask = $('.cart-mask')
	let $cart = $('.current-cart')
	let $btnCart = $('.cart-link')
	let $btnBlog = $('.blog-menu')
	let $btnBlogMenuClose = $('.blog-close-menu')

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

	let toggleCart = () => {
		$cart.toggleClass('open')

		if ($cart.hasClass('open')) {
			$cartMask.removeClass('d-none').css('z-index', '5')
			$('body').css('overflow', 'hidden')
		} else {
			$cartMask.addClass('d-none')
			$('body').css('overflow', 'auto').css('z-index', '4')
		}
		if ($menu.hasClass('open')) {
			toggleMenu()
		}
	}

	let toggleBlogMenu = () => {
		$blogMenu.toggleClass('open')
	}

	$('.menu-mask, .toggle-menu').click(function () {
		toggleMenu()
	})

	$btnBlog.click(function () {
		toggleBlogMenu()
	})

	$btnBlogMenuClose.click(function () {
		toggleBlogMenu()
	})

	$('.cart-mask, .cart-link, .close-cart').click(function () {
		toggleCart()
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