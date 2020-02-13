$(document).ready(function() {
    var contador=0;
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarCategoriaMusculos.php",
            cache: false,

            beforeSend: function() {
                $("#principiantes").text("Cargando...");
              },
            success: function(response)
            {
                $('#principiantes').html(response).fadeIn();
                
               
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarCategoriaMusculos.php",
            cache: false,
            beforeSend: function() {
                $("#intermedios").text("Cargando...");
              },
            success: function(response)
            {
               $('#intermedios').html(response).fadeIn();   
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarCategoriaMusculos.php",
            cache: false,
            beforeSend: function() {
                $("#avanzados").text("Cargando...");
              },
            success: function(response)
            {
                $('#avanzados').html(response).fadeIn();
            
                
            }
    });

});

$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarCategoriaMusculos.php",
            cache: false,
           
            beforeSend: function() {
                $("#muyPrincipiantes").text("Cargando...");
              },
            success: function(response)
            {
                $('#muyPrincipiantes').html(response).fadeIn();
                
            }
    });

});

function regresar(pagina){
    window.location.replace(pagina);
}