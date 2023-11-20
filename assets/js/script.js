$(document).ready(function () {
  $(".slider").slick({
    appendDots: $(".slider"),
    appendArrows: $(".slider-arrows"),
    slidesToShow: 2.999,
    slidesToScroll: 1,
    focusOnSelect: true,
  });

  $(".slider").on("afterChange", function (event, slider) {
    $(".current-slide").html(
      `<span class="current">${slider.currentSlide + 1}</span> / ${
        slider.slideCount
      }`
    );
    console.log(slider.currentSlide + 1, slider.slideCount);
  });
});
