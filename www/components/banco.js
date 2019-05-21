// This is a JavaScript file

$(document).on("click","#cadastrar",function(){
    var parametros = {
      "nome": $("#nome").val(),
      "email": $("#email").val(),
    };

    $.ajax({
      type:"post", //como enviar
      url:"https://web-service-bd-deniseasc.c9users.io/hello-world.php", //para onde enviar
      data:parametros, //o que enviar
      //se der certo
      success: function(data){
        navigator.notification.alert(data);
        $("#nome").val("");
        $("#email").val("");

      },
      //se der errado
      error: function(data){
        navigator.notification.alert(data);
      }
    });
});
