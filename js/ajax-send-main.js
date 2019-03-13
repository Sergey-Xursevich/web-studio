$(document).ready(function () {
  $('.js-ajax-main').on('submit', function () {
    var data = $('.js-ajax-main').serialize();
    
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: 0,
      success: function () {
        $('[name = user_name]').val('');
        $('[name = user_phone]').val('');
        $('[name = user_email]').val('');
        if (data == 0) {
          swal("Упссс!", "Ваше заявка не принята!", "error");
        } else {
          swal("Отлично!", "Ваше заявка принята!", "success");
        }
      }
    })
    return false;
  })
});