$(document).ready(function () {
//active links for header
 $('.navbar-nav .nav-link').on('click', function (e) {

      $('.navbar-nav .nav-link').removeClass('active');

      $(this).addClass('active');
    });
  // Initialize Swiper carousel
  new Swiper(".mySwiper", {
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

  // Display today's date in Persian format
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const parts = formatter.formatToParts(now);
  let day = '', month = '', year = '';

  // Extract day, month, and year parts
  $.each(parts, function (index, part) {
    if (part.type === 'day') day = part.value;
    if (part.type === 'month') month = part.value;
    if (part.type === 'year') year = part.value;
  });

  // Insert formatted date into element with class .today-date
  const formattedDate = `${day} ${month} ${year}`;
  $('.today-date').text(formattedDate);

  // Create starry background effect
  const $container = $('.starry-background-white');
  if ($container.length) {
const colors = [
  '#536dfe',  // آبی روشن

  '#9ea7aa',  // نقره‌ای خاکستری روشن
  '#6a4c8f'   // بنفش ملایم
];
    // Generate 120 stars with random positions, sizes, and colors
    for (let i = 0; i < 50; i++) {
      const $star = $('<div class="star"></div>');
      const size = Math.random() * 1 + 1;

      $star.css({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: `${Math.random() * 2}s`
      });

      $container.append($star);
    }
  }

});
