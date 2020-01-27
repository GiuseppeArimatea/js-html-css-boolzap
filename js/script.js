
  $(document).ready(function () {

    $('.icon-send').click(function () { // tramite click
      sendMessage();
    });

    $('.send-message').keypress(function(event) { // tramite invio tastiera
      if(event.which == 13) {
        sendMessage();
      }
    });




// funzione ricerca tra i nomi dei contatti
  $('.cerca input').keyup(function(){
    var text = $('.cerca input').val().toLowerCase(); // prendiamo i valori dall input
    console.log(text);
    $('.elemento-contatto').each(function () { // prendiamo degli elementi tramite each
      var contactName = $(this).find('.nomi').text().toLowerCase(); // prendiamo tutti gli elementi dentro nomi = this tramite find
      if (contactName.includes(text) == true) { // se i nomi sono uguali all input da tastiera li mostriamo
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });


});

// -------FUNZIONI ------
// funzione sendMessage

function sendMessage() {
  var textMessage = $('input.send-message').val(); // prendiamo tramite val i valori dell input

  if(textMessage.length != 0) { // se scrviamo qualcosa...
    var newMessage = $('.template .message').clone(); //creiamo una copia
    console.log(newMessage);

    newMessage.find('.message-text').text(textMessage); // e inseriiamo tramite find il testo dentro message-text

    var data = new Date(); //creiamo la dat
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    newMessage.find('.message-time').text(time); // inseriamo la data tramite find in message-time
    newMessage.addClass('sent'); // aggiungiamo la classe
    $('.col-right-messages').append(newMessage); // e inviamo tutto dentro col-right-messages

    $('input.send-message').val(''); // CHIEDERE

  setTimeout(function(){ // mandiamo risposta dopo un secondo
      miFaPiacere();
    }, 1000);
  }
}



// messaggio di ritorno
function miFaPiacere(){
    var messageResponse = $('.template .message').clone();  // creiamo una copia dell elemento che gli associamo
    messageResponse.find('.message-text').text('Mi fa piacere'); //prendiamo l elemento dentro message-text e gli associamo la stringa
    var data = new Date(); //creiamo la data
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    messageResponse.find('.message-time').text(time); //associamo alla classe messagge-time la variabile time
    messageResponse.addClass('ricevuto'); // impostiamola la classe ricevuto
    $('.col-right-messages.active').append(messageResponse); //accodiamo messageResponse a col right messagge
};


// funzione che scrolla
function scrollMessage() {
   // altezza elemento conversazione attiva
    var heightContainer = $('.col-right-messages.active').height();
    console.log(heightContainer);
    // spostiamo scroll container di tutte le conversazioni
    $('.main-content').scrollTop(heightContainer);
}

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}

// menu icon-down
var visible = false;
$(document).on('click', '.message-top', function() {
  if (visible == false) {
    $(this).find('.message_menu').fadeIn();
    visible = true;
  } else {
    $(this).find('.message_menu').fadeOut();
    visible = false;
  }
});

// RIMUOVE I MESSAGGI
$(document).on('click', '.delete-message', function() {
    $(this).parent().parent().parent().remove();
});
