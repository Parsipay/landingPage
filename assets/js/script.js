


var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,            
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,            
    },
  },
});

  $(function() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const parts = formatter.formatToParts(now);
    let day = '', month = '', year = '';

    parts.forEach(part => {
      if (part.type === 'day') day = part.value;
      if (part.type === 'month') month = part.value;
      if (part.type === 'year') year = part.value;
    });

    const formattedDate = `${day} ${month} ${year}`;
    $('.today-date').text(formattedDate);
  });