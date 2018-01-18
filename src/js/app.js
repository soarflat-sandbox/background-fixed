import $ from 'jquery';
import '../scss/style.scss';

// $(".section2").css({
//   transform: 'translateY(300px)',
//   WebkitTransform: 'translateY(300px)'
// });
//
$(window).on('scroll', () => {
  const top = document.scrollingElement && document.scrollingElement.scrollTop;

  if (top > $('.section3').offset().top) {
    $('.section3').addClass('is-fixed');
  } else {
    $('.section3').removeClass('is-fixed');
  }
});