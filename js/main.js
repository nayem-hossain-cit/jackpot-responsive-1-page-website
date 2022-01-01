$(document).ready(function(){
    'use strict'

    // back-top button show;
    $(window).on('scroll',function(){

      var scrolling = $(this).scrollTop();

      // back-top btn show--hide
      if(scrolling > 200){
          $('.bc-tp-btn').fadeIn();
      }else{
          $('.bc-tp-btn').fadeOut();
      }
      // back-top btn show--hide

      // navbar fixed
      if(scrolling > 200){
          $('.navbar').addClass('navbg');
      }else{
          $('.navbar').removeClass('navbg');
      };
      // navbar fixed
    });

  // back-top click;
  $('.bc-tp-btn').on('click',function(){
      $('body,html').animate({
          scrollTop: '0',
      },1000);
  });
  // back-top click;

  // frequently ask question click js

  $('.question-header ol .toggle1 i').on('click', function(){
    $('.question-header ol .toggle1 p').slideToggle();
    $('.toggle2 p, .toggle3 p, .toggle4 p').hide();
    $('.question-header ol .toggle1').toggleClass('border-show',1000);
    $('.toggle2, .toggle3, .toggle4').removeClass('border-show',1000);
  });
  $('.question-header ol .toggle2 i').on('click', function(){
    $('.question-header ol .toggle2 p').slideToggle();
    $('.toggle1 p, .toggle3 p, .toggle4 p').hide();
    $('.question-header ol .toggle2').toggleClass('border-show',1000);
    $('.toggle1, .toggle3, .toggle4').removeClass('border-show',1000);
  });
  $('.question-header ol .toggle3 i').on('click', function(){
    $('.question-header ol .toggle3 p').slideToggle();
    $('.toggle1 p, .toggle2 p, .toggle4 p').hide();
    $('.question-header ol .toggle3').toggleClass('border-show',1000);
    $('.toggle1, .toggle2, .toggle4').removeClass('border-show',1000);
  });
  $('.question-header ol .toggle4 i').on('click', function(){
    $('.question-header ol .toggle4 p').slideToggle();
    $('.toggle1 p, .toggle2 p, .toggle3 p').hide();
    $('.question-header ol .toggle4').toggleClass('border-show',1000);
    $('.toggle1, .toggle2, .toggle3').removeClass('border-show',1000);
  }); 

  // frequently ask question click js

    // banner water ripples js

    $('.water').ripples({
      dropRadius: 100,
      resolution: 500,
      perturbance: 0.02,
    });

    // banner water ripples js

    // register section slider js 

    $('.r-slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

    // register section slider js 

    // spin section tilt image js 

    $('.js-tilt').tilt({});

    // spin section tilt image js

    // todays tournaments countdown js

    $('#simply-countdown').simplyCountdown({
      year: 2022,
      month: 12,
      day: 30,
      zeroPad: true,
    });

    // todays tournaments countdown js


    // todays tournaments scrolling js

    $(".mCustomScrollbar").mCustomScrollbar({});

    // todays tournaments scrolling js


});