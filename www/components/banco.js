// This is a JavaScript file

// Cadastrar
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
// Cadastrar

$(document).on("click","#listar",function(){
  $(location).attr("#href","#page2.html")
});

// Listar
function listarPessoas(){
  $.ajax({
      type:"post", //como enviar
      url:"https://web-service-bd-deniseasc.c9users.io/listar.php", //para onde enviar
      dataType:"json",
      //se der certo
      success: function(data){
        var itemLista = "";
        $each(data.pessoas,function(i,dados){
          itemLista += "<option value='"+dados.codigo+"'>"+dados.nome+"</option>";
        });
        $("#lista").html(itemLista);
  },
  // se der errado
  error: function(data){
    navigator.notification.alert(data);
  }
  });
}
// Listar

// Listar um
$(document).on("change","#lista",function(){
  var codigoescolhido = $("option:selected",("#listar")).val();
  $.ajax({
      type:"get", //como enviar
      url:"https://web-service-bd-deniseasc.c9users.io/listar-um.php", //para onde enviar
      data:"id="+codigoescolhido,
      dataType:"json",
      //se der certo
      success: function(data){
        $("#cod").val(data.pessoa.cod);
        $("#nome").val(data.pessoa.nome);
        $("#email").val(data.pessoa.email);
  },
  // se der errado
  error: function(data){
    navigator.notification.alert(data);
  }
  });
});
// Listar um