$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    navText: [
      '<img class="owl__left" src="../img/slider/back-left.png" alt="" />',
      '<img class="owl__right" src="../img/slider/back-right.png" alt="" />'
    ]
  });
});