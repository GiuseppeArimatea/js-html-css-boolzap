$('document').ready(function(){

  $('#scrivitesto').keypress(
      function (event) {
        if(event.which == 13 || event.keyCode == 13) {
          var text = $('#scrivitesto').val();
          var elementNew = $('.prova p').clone();
          elementNew.append(text);
          $('.colonna-destra').append(elementNew);
        }
      }
    );

});
