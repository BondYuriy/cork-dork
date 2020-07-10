$(document).ready(function () {
  /* menu */

  $('.js-menu').on('click', function () {
    $(this).toggleClass('btn-menu-active');
    $('.menu').toggleClass('menu-open');
    $('.menu-backdrop').toggleClass('menu-backdrop-view');
  });

  /* accaunt-menu */

  $('.btn-account').on('click', function () {
    // $(this).toggleClass('btn-menu-active');
    $('.accaunt-menu').toggleClass('account-menu-open');
    // $('.menu-backdrop').toggleClass('menu-backdrop-view');
  });

  /* carousel */

  $('.home-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('.our-dishes-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: false,
    focusOnSelect: true
  });


  /* to-top */

  $('#toTop').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#top').offset().top - 0,
      },
      1000,
    );
    return false;
  });

  /* to-bottom */

  $('#toBottom').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#bottom').offset().top - 0,
      },
      1000,
    );
    return false;
  });
});

new WOW().init();
