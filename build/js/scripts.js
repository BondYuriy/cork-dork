$(document).ready(function () {
  // /* menu */

  // $('.navbar-toggler').click(function () {
  //   $(this).toggleClass('open');
  // });

  // $(function () {
  //   $(window).scroll(function () {
  //     var winTop = $(window).scrollTop();
  //     if (winTop >= 250) {
  //       $('body').addClass('sticky-header');
  //     } else {
  //       $('body').removeClass('sticky-header');
  //     }
  //   });
  // });

  /* menu */

  $('.js-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('menu-open');
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

  $('.btn-toggle-mobile').click(function () {
    $('.portfolio-inside-list').toggleClass('show-list-text');
  });

  /* mega-menu */

  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  $('.menu > ul').before(
    '<a href="#" class="menu-mobile open"></a><a href="#" class="menu-mobile close">✕</a>',
  );
  $('.menu > ul > li').hover(function (e) {
    if ($(window).width() > 992) {
      $(this)
        .children('ul')
        .stop(true, false)
        .fadeToggle(150)
        .css('display', 'flex');
      e.preventDefault();
    }
  });
  $('.menu > ul > li').click(function () {
    if ($(window).width() <= 991) {
      $(this).children('ul').fadeToggle(150);
    }
  });
  $('.menu-mobile').click(function (e) {
    $('.menu > ul').toggleClass('show-on-mobile');
    $('.close').toggleClass('showBtn');
    e.preventDefault();
  });
  $(window).resize(function () {
    $('.menu > ul > li').children('ul').hide();
    $('.menu > ul').removeClass('show-on-mobile');
  });
});

new WOW().init();
