$(document).ready(function () {
  $('.ajax-price').on('submit', function () {
    var data = $('.ajax-price').serialize();

    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: 0,
      success: function () {
        $('[name = user_name_price]').val('');
        $('[name = user_phone_price]').val('');
        $('[name = user_email_price]').val('');
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