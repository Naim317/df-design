// ForBannerSlider
var swiper = new Swiper('#slider', {
  loop: true,
  autoplay: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  renderBullet: function (index, className) {
    return '<span class="' + className + '"></span>';
  },
});

// ForTestimonialSlider
$(document).ready(function () {
    var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
      wrap: false
    });
    var carouselWidth = $("#carouselExampleControls .carousel-inner")[0].scrollWidth;
    var cardWidth = $("#carouselExampleControls .carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 3) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 1) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
});


// ForCountSection


  (function($) {

    "use strict";



    function count($this) {

        var current = parseInt($this.html(), 10);

        current = current + 1;

        $this.html(++current);

        if (current > $this.data('count')) {

            $this.html($this.data('count'));

        } else {

            setTimeout(function() {

                count($this)

            }, 50);

        }

    }

    $(".stat-count").each(function() {

        $(this).data('count', parseInt($(this).html(), 10));

        $(this).html('0');

        count($(this));

    });

  })(jQuery);



