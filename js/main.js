

$(window).on('scroll', function () {

  // Sticky Navbar Active

  if ($(this).scrollTop() > 25) {

    $('.header').addClass('sticky');

  } else {

    $('.header').removeClass('sticky');

  }


});


$(window).scroll(function () {
  
  // Bottom To Top Jump

  if ($(this).scrollTop() > 300) {

    $('#jump').addClass('scroll-top');

  } else {

    $('#jump').removeClass('scroll-top');

  }

  // Smooth Jump Animate

  $('#jump').click(function () {

    $('html, body').animate({

      scrollTop: 0

    }, 500)
    
  })




});


$(document).ready(function () {

  // Smooth Scroll And Current Class Active

  $('#nav').onePageNav({

    currentClass: 'current'

  });


  // Magnific Image Popup Plugin Active

  $('.projects__img-popup').magnificPopup({

    type: 'image',
    gallery: {
      enabled: true
    },

  });


  // Magnific Video Popup Plugin Active

  $('.video__popup').magnificPopup({

    type: 'iframe'

  });


  // Counter Up Plugin Active

  $('.counter__number').counterUp();


  // Slick Slider Active In Testimonials

  $('.testimonials__content').slick({
    autoplay: true,
    autoplaySpeed:3000,
    //speed:300,
    dots: true,
    pauseOnDotsHover:true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
  });



});