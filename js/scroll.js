$(_ => {
  $('#show-nav').on('click', _ => {
    $('nav').toggleClass('show');
  });

  $('.contenedor').on('click', _ => {$('nav').removeClass('show');});
  $('#about').on('click', _ => {$('nav').removeClass('show');});
  $('#portafolio').on('click', _ => {$('nav').removeClass('show');});
  $('#contact').on('click', _ => {$('nav').removeClass('show');});
});
