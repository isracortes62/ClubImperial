TEMPLATES = {
    formSocio:
        "<form id='formSocio' method='post' action='api/AddSocio.php' enctype='multipart/form-data'>" +
        "<h1>Favor de ingresar los datos correspondientes:</h1>" +
        "<div class='clear'>" +
        "<div class='data1'>" +
            "<p>Nombres: <input type='text' name='Nombre' maxlength='30'></p>" +
            "<p>Apellido Paterno: <input type='text' name='ApellidoP' maxlength='30'></p>" +
            "<p>Apellido Materno: <input type='text' name='ApellidoM' maxlength='30'></p>" +
            "<p>Fecha de Nacimiento: <input class='datePicker' type='text' name='FNacimiento' placeholder='mm/dd/aaaa' readonly></p>" +
            "<p>Domicilio: <input type='text' name='Domicilio'></p>" +
            "<p>Manzana: <input type='text' name='Manzana'></p>" +
            "<p>Lote: <input type='text' name='Lote'></p>" +
            "<p>Coto: <input type='text' name='Coto'></p>" +
        "</div>" +
        "<div class='data2'>" +
            "<p>Teléfono: <input type='text' name='Telefono' maxlength='10'></p>" +
            "<p>Celular: <input type='text' name='Celular' maxlength='10'></p>" +
            "<p>Tipo de Sangre: <select name='Sangre'>" +
                "<option value='0'>Elige el tipo</option>" +
                "<option value='O-'>O-</option>" +
                "<option value='O+'>O+</option>" +
                "<option value='A-'>A-</option>" +
                "<option value='A+'>A+</option>" +
                "<option value='B-'>B-</option>" +
                "<option value='B+'>B+</option>" +
                "<option value='AB-'>AB-</option>" +
                "<option value='AB+'>AB+</option>" +
                "</select>" +
            "</p>" +
            "<p>Membresia: " +
            "<span><input type='radio' name='Membresia' value='Propietario'> Propietario." +
            "<input type='radio' name='Membresia' value='Rentista'> Rentista.</span>" +
            "</p>" +
            "<p>Tipo de membresia: <select name='TipoMembresia'>" +
                  "<option value='0'>Elige una opción</option>" +
                  "<option value='Familiar'>Familiar</option>" +
                  "<option value='Individual'>Individual</option>" +
                  "<option value='Jr'>Jr</option>" +
                "</select>" +
            "</p>" +
            "<p>Fecha de Alta: <input class='datePicker' type='text' name='FAlta' placeholder='mm/dd/aaaa' readonly></p>" +
            "<p>Afiliación: " + 
                "<span><span><input type='checkbox' name='Afiliacion' value='Golf'> Golfista.</span>" +
                "<span><input type='checkbox' name='Afiliacion' value='Futbol'> Futbolista.</span>" +
                "<span><input type='checkbox' name='Afiliacion' value='Tenista'> Tenista.</span><br>" +
                "<span><input type='checkbox' name='Afiliacion' value='Piscina'> Piscina.</span>" +
                "<span><input type='checkbox' name='Afiliacion' value='Gym'> GYM.</span>" +
                "<span><input type='checkbox' name='Afiliacion' value='SPA'> SPA.</span></span>" +
            "</p>" +
        "</div>" +
        "</div>" +
        "<div class='btnGroup'>" +
            "<p><input id='upLoad' class='display-none' type='file' name='Foto'><input class='btn btnFunctions btnUpLoad' type='button' value='Subir Foto'>" +
            "<input class='btn btnSuccess' type='submit' value='Agregar Usuario'></p>" +
            "<p><span id='fileName'></span></p>" +
        "</div>" +
        "</form>",
    index: 
        "<div class='indexImages'>" +
            "<img src='assets/img/casaclub1.jpg'>" +
            "<img src='assets/img/casaclub2.jpg'>" +
            "<img src='assets/img/casaclub3.jpg'>" +
        "</div>",
    allSocios:
        "<script type='text/template' id='thisTemplate'>" + 
          "<table border='1'>" +
              "<tr>" +
                "<th>Nombre</th>" +
                "<th>Fecha de Nacimiento</th>" +
                "<th>Parentesco</th>" +
                "<th>Domicilio</th>" +
                "<th>Manzana</th>" +
                "<th>Lote</th>" +
                "<th>Coto</th>" +
                "<th>Télefono</th>" +
                "<th>Célular</th>" +
                "<th>Membresia</th>" +
                "<th>Tipo de sangre</th>" +
                "<th>Fecha de alta</th>" +
                "<th>Afiliación</th>" +
                "<th>Acciones</th>" +
            "</tr>" +
                "<% _.each(socios, function(socio) { %>" +
                "<tr>" +
                    "<td><% print(socio.Nombre); %></td>" +
                    "<td><% print(socio.FNacimiento); %></td>" +
                    "<td><% print(socio.Parentesco); %></td>" +
                    "<td><% print(socio.Domicilio); %></td>" +
                    "<td><% print(socio.Manzana); %></td>" +
                    "<td><% print(socio.Lote); %></td>" +
                    "<td><% print(socio.Coto); %></td>" +
                    "<td><% print(socio.Telefono); %></td>" +
                    "<td><% print(socio.Celular); %></td>" +
                    "<td><% print(socio.Membresia); %></td>" +
                    "<td><% print(socio.Sangre); %></td>" +
                    "<td><% print(socio.FAlta); %></td>" +
                    "<td><% print(socio.Afiliacion); %></td>" +
                    "<td><div class='idSocio'><span class='display-none'><% print(socio.IdSocio); %></span><p>Ver perfil</p></div></td>" +
                "</tr>" +
                "<% }); %>" +
            "</table>" +
            "</script>",
};
