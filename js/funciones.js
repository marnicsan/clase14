/*Al agregar un articulo se debera animarse
Al hacer hover sobre un articulo el resto debera ponerse en opacity 0.5*/

var numero = 0;
var noticiasCant=$("#noticias div").length;

$("#agregarBtn").on("click",function(){
    numero++;
    var titulo = $("#titulo").val();
    var contenido = $("#contenido").val();
    var imagen = $("#imagen").val();
    var id="noticia"+numero;
    $("#noticias div:odd").removeClass("impar"); 
    $("#noticias div:even").removeClass("par"); 
    
    $("#noticias").prepend("<div id=\"noticia" + numero + "\"></div>");
    $("#" + id).append("<span id=\"titulo" + numero + "\"></span>")
    $("#titulo" + numero).append(titulo+"<br>")
    $("#" + id ).append("<img src='"+imagen+"'><br>");
    $("#" + id ).append("&emsp;"+contenido);

    $("#noticias div").removeClass("primeroUltimo"); 

    $("#noticias div:odd").addClass("impar");
    $("#noticias div:even").addClass("par");
    
    $("#noticias div:first-child").addClass("primeroUltimo");
    $("#noticias div:last-child").addClass("primeroUltimo");

    $("#" + id).hide();
    $("#" + id).fadeIn(2000);

    $("#" + id).hover(function() {
        $("#noticias div[id!='"+id+"']").css("opacity",0.5)
      }, function() {
        $("#noticias div[id!='"+id+"']").css("opacity",1)
      });
});

function opacarResto(evento){
    for(var i=0;i<noticiasCant;i++){
        if(i!=evento.data.idNoticia)
            $("#noticia"+i).css("opacity",0.5);
    }
}

function desopacarResto(evento){
    for(var i=0;i<noticiasCant;i++){
        if(i!=evento.data.idNoticia)
            $("#noticia"+i).css("opacity",1);
    }
}