 $('.fa-solid').on('click', function () {
    $(this).addClass('d-none'); 
    $(this).siblings('.fa-minus').removeClass('d-none');    
  });

  $('.fa-minus').on('click', function () {
    $(this).addClass('d-none');   
    $(this).siblings('.fa-solid').removeClass('d-none');    
  });


