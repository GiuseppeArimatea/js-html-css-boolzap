
  $(document).ready(function () {





    $('.icon-send').click(function () {
      sendMessage();
    });



function sendMessage() {
  var textMessage = $('input.send-message').val();

  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    console.log(newMessage);

    newMessage.find('.message-text').text(textMessage);

    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    newMessage.find('.message-time').text(time);
    newMessage.addClass('sent');
    $('.col-right-messages').append(newMessage);

    $('input.send-message').val('');
  }
}

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}

// funzione ricerca tra i nomi dei contatti
  $('.search_click').click(function(){ // 1
    var search = $('.cerca-chat').val();
    var name = $('.persona p:first-child').text().toLowerCase();
    var container = $("p.nomi:contains(" + search + ")");
    console.log(container);
    $('.elemento-contatto').addClass('active_name_off');
    container.parents().removeClass('active_name_off');
  });

});
