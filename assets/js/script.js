$(document).ready(function () {

  // -------------------------------
  // 1. Active Links in Navbar
  // -------------------------------
  $('.navbar-nav .nav-link').on('click', function () {
    // Remove 'active' class from all links
    $('.navbar-nav .nav-link').removeClass('active');
    // Add 'active' class to the clicked link
    $(this).addClass('active');
  });

  // 2. Create Starry Background Effect
  const $container = $('.starry-background-white');
  if ($container.length) {
    // Define possible star colors
    const colors = [
      '#536dfe', 
      'yellow',
      'tomato',
      '#9ea7aa',  
      '#6a4c8f',
      '#41d61bff' 
    ];
    // Generate 150 stars
    for (let i = 0; i < 150; i++) {
      const $star = $('<div class="star"></div>');
      // Random size between 1px and 2px
      const size = Math.random() * 1 + 1;
      // Apply random position, size, color, and animation delay
      $star.css({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: `${Math.random() * 2}s`
      });
      // Append star to container
      $container.append($star);
    }
  }

});
