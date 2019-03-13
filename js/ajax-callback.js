$(document).ready(function () {
  $('.ajax-callback').on('submit', function () {
    var data = $('.ajax-callback').serialize();

    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: 0,
      success: function () {
        $('[name = user_name_callback]').val('');
        $('[name = user_phone_callback]').val('');
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