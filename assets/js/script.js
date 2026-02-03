$(document).ready(function () {

  /* ---------------------------------
   1. Active Navbar Links
  --------------------------------- */
  $('.navbar-nav .nav-link').on('click', function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  });


  /* ---------------------------------
   2. Starry Background
  --------------------------------- */
  const $container = $('.starry-background-white');

  if ($container.length) {
    const colors = [
      '#536dfe',
      'yellow',
      'tomato',
      '#9ea7aa',
      '#6a4c8f',
      '#41d61bff'
    ];

    for (let i = 0; i < 150; i++) {
      const size = Math.random() * 1 + 1;

      $('<div class="star"></div>').css({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: `${Math.random() * 2}s`
      }).appendTo($container);
    }
  }


  /* ---------------------------------
   3. Crypto Cards (crypto-data.json)
  --------------------------------- */
  $.getJSON('./crypto-data.json', function (data) {

    $.each(data, function (_, i) {

      let trendHtml = '';
      let percentBox = '';

      if (i.trend && i.percent) {
        const isUp = i.trend === 'up';

        trendHtml = `
          <div class="d-flex justify-content-end align-items-center mt-3">
            <i class="fas fa-arrow-trend-${isUp ? 'up bg-green' : 'down bg-red'}"></i>
            <div class="rounded-circle d-flex justify-content-center align-items-center mx-2
              ${isUp ? 'bg-opacity-success' : 'bg-opacity-danger'}"
              style="width:25px;height:25px;">
              <span class="x-small fw-bold">${i.percent}%</span>
            </div>
          </div>`;
      }

      let upDownBox = '';
      if (i.upValue && i.downValue) {
  upDownBox = `
  <div class="d-flex justify-content-between mt-3 gap-1  ">
    <div class="bg-gary p-1 px-2 rounded text-nowrap bg-green price">
      <span class="fw-bold">${i.upValue}</span>
      <i class="fas fa-caret-up price"></i>
    </div>
    <div class="bg-gary p-1 px-2 rounded text-nowrap price ">
      <span class="text-danger fw-bold">${i.downValue}</span>
      <i class="fas fa-caret-down text-danger price"></i>
    </div>
  </div>`;
      }

      $('#cryptoWrapper').append(`
        <div>
          <div class="card bg-light border-0 rounded-4 h-100">
            <div class="card-body d-flex flex-column">
              <img src="./assets/img/${i.icon}" width="32" height="32">

              <small class="fw-bold head-color mt-3 note ">
                ${i.name} ${i.symbol ? `(${i.symbol})` : ``}
              </small>

              <p class="fw-bold mb-2 d-flex justify-content-end align-items-baseline note mt-2">
                <span class="text-muted me-1">$</span>${i.price}
              </p>

              ${trendHtml}
              ${upDownBox}

              <p class="mt-3 small text-secondary fw-bold note">
                <span class="text-gray">توجه:</span> نوسانات 24 ساعت گذشته ارز
              </p>
            </div>
          </div>
        </div>
      `);

    });

  });


  /* ---------------------------------
   4. Market Cards (market-data.json)
  --------------------------------- */
  $.getJSON('./market-data.json', function (data) {

    $.each(data, function (_, i) {

      let trendIcon = '';
      let trendBg = '';
      let textColor = '';

      if (i.trend === 'up') {
        trendIcon = `<i class="fas fa-arrow-trend-up bg-green"></i>`;
        trendBg = 'bg-opacity-success';
        textColor = 'text-green';
      }
      else if (i.trend === 'down') {
        trendIcon = `<i class="fas fa-arrow-trend-down bg-red"></i>`;
        trendBg = 'bg-opacity-danger';
        textColor = 'text-light';
      }
      else {
        trendIcon = `<i class="fas fa-chevron-right text-warning me-3"></i>`;
        trendBg = 'bg-opacity-warning';
        textColor = 'text-warning';
      }

      $('#marketWrapper').append(`
        <div class="mt-2">
          <div class="card bg-light border-0 h-100">
            <img src="./assets/img/${i.icon}" width="24" height="24" class="m-3">

            <div class="card-body d-flex flex-column">
              <span class="card-title fw-bold">${i.title}</span>

              <p class="fw-bold mb-2">
                ${i.price}<span class="text-muted">$</span>
              </p>

              <div class="d-flex justify-content-center align-items-center">
                <i class="fas fa-arrow-left p-1 bg-dark text-light rounded-circle small me-auto"></i>

                ${trendIcon}

                <div class="${trendBg} ${textColor} rounded-circle d-flex justify-content-center align-items-center mx-2"
                     style="width:30px;height:30px;">
                  <span class="x-small fw-bold">${i.percent}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);

    });

  });

});
