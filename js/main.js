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
});