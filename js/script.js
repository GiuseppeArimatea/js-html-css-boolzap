
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

    var textReceive = ('Mi fa piacere');
    var elementNew = $('.template .message').clone();
    $('.active').append(elementNew);
    elementNew.addClass('ricevuto');
    elementNew.find('.message-text').append(textReceive);

};
// funzione ricerca tra i nomi dei contatti
  $('.search_click').click(function(){ // 1
    var search = $('.cerca-chat').val(); // prendiamo i valori dall input
    var name = $('.persona p:first-child').text().toLowerCase(); // prendiamo i valori selettori
    var container = $("p.nomi:contains(" + search + ")") // selezioniamo le stringhe e controlliamo i valori
    $('.elemento-contatto').addClass('active_name_off');
    container.parents().removeClass('active_name_off');
  });

});
