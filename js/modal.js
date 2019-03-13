$(document).ready(function () {
  $('.link-callback').on('click', function () {
    $('#modal-callback').toggleClass('modal__visible');
  });
  $('.modal__close').on('click', function () {
    $('.modal').toggleClass('modal__visible');
  });
});