

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


  // Magnific Popup Plugin Active

  $('.projects__img-popup').magnificPopup({

    type: 'image',
    gallery: {
      enabled: true
    },

  });



});