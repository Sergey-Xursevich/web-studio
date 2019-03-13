$(document).ready(function () {
  $('.link-price').on('click', function () {
    $('.modal-price').toggleClass('modal-price__visible');
  });
  $('.modal-price__close').on('click', function () {
    $('.modal-price').toggleClass('modal-price__visible');
  });
});