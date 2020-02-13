$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/buscarEjercicios.php",
            cache: false,
            beforeSend: function() {
                $("#muestaEjerciciosMP").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestaEjerciciosMP').html(response).fadeIn();
                $("#muestaEjerciciosMP").listview("refresh");
            }
    });

});

$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/buscarEjerciciosPrincipiante.php",
            cache: false,
            beforeSend: function() {
                $("#muestraEjerciciosP").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosP').html(response).fadeIn();
                $("#muestraEjerciciosP").listview("refresh");

            }
    });

});

$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/buscarEjerciciosInter.php",
            cache: false,
            beforeSend: function() {
                $("#muestraEjerciciosInter").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosInter').html(response).fadeIn();
                $("#muestraEjerciciosInter").listview("refresh");
            }
    });

});


$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/buscarEjerciciosAvanzados.php",
            cache: false,
            beforeSend: function() {
                $("#muestraEjerciciosAvan").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosAvan').html(response).fadeIn();
                $("#muestraEjerciciosAvan").listview("refresh");
               
            }
    });

});



 