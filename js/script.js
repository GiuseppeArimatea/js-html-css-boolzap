
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
  setTimeout(function(){
      miFaPiacere();
    }, 1000);
}

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}






// messaggio di ritorno
function miFaPiacere(){

    var messageResponse = $('.template .message').clone();
    elementNew.find('.message-text').text('Mi fa piacere');
    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    messageResponse.find('.message-time').text(time);
    messageResponse.addClass('ricevuto');
    $('.col-right-messages.active').append(messageResponse);
};
// funzione ricerca tra i nomi dei contatti
  $('.cerca input').keyup(function(){ // 1
    var text = $('.cerca input').val().toLowerCase(); // prendiamo i valori dall input

    $('.elemento-contatto').each(function () {
      var contactName = $(this).find('.elemento-contatto').text().toLowerCase();
      if (contactName.includes(text) == true) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
