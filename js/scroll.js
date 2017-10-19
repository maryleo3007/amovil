$(function ()  {
  $('#show-nav').on('click', _ => {
    $('nav').toggleClass('show');
  });
  $('.contenedor').on('click', _ => {$('nav').removeClass('show');});
  $('#about').on('click', _ => {$('nav').removeClass('show');});
  $('#portafolio').on('click', _ => {$('nav').removeClass('show');});
  $('#contact').on('click', _ => {$('nav').removeClass('show');});

  var lastPosition = 0;
  window.addEventListener('scroll',function (e) {
    e.preventDefault();
    var posScrollY = window.scrollY;
    if (posScrollY>0 && posScrollY<570) {
      $('.menu-lg li:nth-child(1) a').addClass('item-select');
      $('.menu-lg li:nth-child(2) a').removeClass('item-select');
    }
    if (posScrollY>570 && posScrollY<1970) {
      $('.menu-lg li:nth-child(1) a').removeClass('item-select');
      $('.menu-lg li:nth-child(2) a').addClass('item-select');
      $('.menu-lg li:nth-child(3) a').removeClass('item-select');
    }
    if (posScrollY>1970 && posScrollY<2960) {
      $('.menu-lg li:nth-child(2) a').removeClass('item-select');
      $('.menu-lg li:nth-child(3) a').addClass('item-select');
      $('.menu-lg li:nth-child(4) a').removeClass('item-select');
    }
    if (posScrollY>2960) {
      $('.menu-lg li:nth-child(3) a').removeClass('item-select');
      $('.menu-lg li:nth-child(4) a').addClass('item-select');
    }
  });
});
