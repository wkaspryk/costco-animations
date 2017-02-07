// Carousel Logic

// ========== Carousel-1 Fading ==========

//  ===== Next Arrow =====
$('#carousel-1 .carousel_arrow-next').click(function(){
  // Carousel Images
  var $activeImg = $('#carousel-1 .carousel_img img.active'),
      $nextImg = $activeImg.next(),

      // Pagination Dots
      $activePagination = $('#carousel-1 .carousel_pagination.active'),
      $nextPagination = $activePagination.next()

  // Logic
  if ($activeImg.is(":last-child")) {
    $nextImg = $activeImg.siblings().first();
    $nextPagination = $activePagination.siblings().first();
  } else {
    $nextImg = $activeImg.next();
    $nextPagination = $activePagination.next();
  }

  // Animation
	TweenMax.to($activeImg, 0.5, {opacity: 0, display: 'none', ease: Power1.easeInOut});
  TweenMax.to($nextImg, 0.5, {opacity: 1, display: 'block', ease: Power1.easeInOut});

  // Image Active
  $activeImg.removeClass('active'),
  $nextImg.addClass('active'),

  // Pagination Active
  $activePagination.removeClass('active'),
  $nextPagination.addClass('active')

});

//  ===== Previuos Arrow =====
$('#carousel-1 .carousel_arrow-prev').click(function(){
  // Carousel Images
  var $activeImg = $('#carousel-1 .carousel_img img.active'),
      $prevImg = $activeImg.prev()

      // Pagination Dots
      $activePagination = $('#carousel-1 .carousel_pagination.active'),
      $prevPagination = $activePagination.prev()

  // Logic
  if ($activeImg.is(":first-child")) {
    $prevImg = $activeImg.siblings("img").last();
    $prevPagination = $activePagination.siblings().last();
  } else {
    $prevImg = $activeImg.prev();
  }

  // Animation
	TweenMax.to($activeImg, 0.5, {opacity: 0, display: 'none', ease: Power1.easeInOut}),
  TweenMax.to($prevImg, 0.5, {opacity: 1, display: 'block', ease: Power1.easeInOut}),

  // Image Active
  $activeImg.removeClass('active'),
  $prevImg.addClass('active')

  // Pagination Active
  $activePagination.removeClass('active'),
  $prevPagination.addClass('active')
});





// ========== Carousel-2: Slide Left Effect ==========

// ========== Page Loaded Activate ==========

var is_carouselStop = false;
// var myVar;
var is_carouselStart;

function carouselStart(){
  return setInterval(function(){
    var $activeImg = $('#carousel-2 .carousel_img img.active'),
        $nextImg = $activeImg.next(),
        // Pagination Dots
        $activePagination = $('#carousel-2 .carousel_pagination.active'),
        $nextPagination = $activePagination.next()
        
      // Logic
      if ($activeImg.is(":last-child")) {
        $nextImg = $activeImg.siblings().first();
        $nextPagination = $activePagination.siblings().first();
      } else {
        $nextImg = $activeImg.next();
        $nextPagination = $activePagination.next();
      }

      // Animation: Image
      TweenMax.fromTo($activeImg, 1, {xPercent: 0, scale: 1},
                                        {xPercent: -10, scale: 0.9, display: 'none', zIndex: 1, ease: Power2.easeInOut});

      TweenMax.fromTo($nextImg, 1, {xPercent: 100, scale: 1, zIndex: 9, display: 'none'},
                                        {xPercent: 0, scale: 1, display: 'block', zIndex: 9, ease: Power2.easeInOut});

      // Image Active
      $activeImg.removeClass('active');
      $nextImg.addClass('active');

      // Pagination Active
      $activePagination.removeClass('active');
      $nextPagination.addClass('active');

  }, 4000);
}


if (is_carouselStop == false) {
  is_carouselStart = carouselStart(); 
} else {
  carouselStop = clearInterval(is_carouselStart);
}

//  ===== Carousel Pause =====
function carouselPause(){
  carouselStop = clearInterval(is_carouselStart);

  TweenMax.to($('.carouselPause'), 0.2, {x: 20, opacity: 0, display: 'none', scale: 0.3, ease: Power2.easeInOut});
  TweenMax.fromTo($('.carouselPlay'), 0.2, {x: -20, opacity: 0, scale: 0.3, display: 'none'},
                {x: 0, opacity: 1, display: 'block', scale: 1, ease: Power2.easeInOut});
}

function carouselPlay(){
  carouselStop = clearInterval(is_carouselStart);
  is_carouselStart = carouselStart(); 

	TweenMax.to($('.carouselPlay'), 0.2, {x: 20, opacity: 0, scale: 0.3,  display: 'none', ease: Power2.easeInOut});
	TweenMax.fromTo($('.carouselPause'), 0.2, {x: -20, opacity: 0, scale: 0.3, display: 'none'},
								 {x: 0, opacity: 1, scale: 1, display: 'block', ease: Power2.easeInOut});
}

// Pause Button Click
$('.carouselPause').click(function(){
  carouselPause();
});

// Play Button Click
$('.carouselPlay').click(function(){
  carouselPlay();
});



//  ===== Next Arrow =====
$('#carousel-2 .carousel_arrow-next').click(function(){
  
  // carouselPause();

  // Clear carouselStart window object then call again
  carouselStop = clearInterval(is_carouselStart);
  is_carouselStart = carouselStart(); 

  // Carousel Images
  var $activeImg = $('#carousel-2 .carousel_img img.active'),
      $nextImg = $activeImg.next()

      // Pagination Dots
      $activePagination = $('#carousel-2 .carousel_pagination.active'),
      $nextPagination = $activePagination.next()

  // Logic
  if ($activeImg.is(":last-child")) {
    $nextImg = $activeImg.siblings().first();
    $nextPagination = $activePagination.siblings().first();
  } else {
    $nextImg = $activeImg.next();
    $nextPagination = $activePagination.next();
  }

  // Animation: Image
	TweenMax.fromTo($activeImg, 1, {xPercent: 0, scale: 1},
                                    {xPercent: -10, scale: 0.9, display: 'none', zIndex: 1, ease: Power2.easeInOut});

	TweenMax.fromTo($nextImg, 1, {xPercent: 100, scale: 1, zIndex: 9, display: 'none'},
                                    {xPercent: 0, scale: 1, display: 'block', zIndex: 9, ease: Power2.easeInOut});

  // Image Active
  $activeImg.removeClass('active');
  $nextImg.addClass('active');

  // Pagination Active
  $activePagination.removeClass('active');
  $nextPagination.addClass('active');

});

//  ===== Previous Arrow =====
$('#carousel-2 .carousel_arrow-prev').click(function(){

  // Clear carouselStart window object then call again
  carouselStop = clearInterval(is_carouselStart);
  is_carouselStart = carouselStart(); 

  // Carousel Images
  var $activeImg = $('#carousel-2 .carousel_img img.active'),
      $prevImg = $activeImg.prev()

      // Pagination Dots
      $activePagination = $('#carousel-2 .carousel_pagination.active'),
      $prevPagination = $activePagination.prev()

  // Logic
  if ($activeImg.is(":first-child")) {
    $prevImg = $activeImg.siblings("img").last();
    $prevPagination = $activePagination.siblings("a").last();
  } else {
    $prevImg = $activeImg.prev();
  }

  // Animation
	TweenMax.fromTo($activeImg, 1, {xPercent: 0, scale: 1},
                                    {xPercent: 100, scale: 1, display: 'none', ease: Power2.easeInOut});

	TweenMax.fromTo($prevImg, 1, {xPercent: -10, scale: 0.9, zIndex: 1, display: 'none'},
                                    {xPercent: 0, scale: 1, display: 'block', zIndex: 9, ease: Power2.easeInOut});

  // Image Active
  $activeImg.removeClass('active'),
  $prevImg.addClass('active')

  // Pagination Active
  $activePagination.removeClass('active'),
  $prevPagination.addClass('active')
});