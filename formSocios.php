<form method="post" action="api/EditSocio.php" enctype="multipart/form-data">
  <h1>Favor de ingresar los datos correspondientes:</h1>
  <input type="hidden" name="Id" value="">
  <p>Nombres: <input type="text" name="Nombre" maxlength="30"></p>
  <p>Fecha de Nacimiento: <input type="text" name="FNacimiento" maxlength="10" placeholder="dd/mm/aaaa"></p>
  <p>Parentesco: <input type="radio" name="Parentesco" value="Padre"> Padre.
                 <input type="radio" name="Parentesco" value="Madre"> Madre.
                 <input type="radio" name="Parentesco" value="Hijo"> Hijo.
                 <input type="radio" name="Parentesco" value="Soltero(a)"> Soltero(a).
  </p>
  <p>Domicilio: <input type="text" name="Domicilio"></p>
  <p>Manzana: <input type="text" name="Manzana"></p>
  <p>Lote: <input type="text" name="Lote"></p>
  <p>Coto: <input type="text" name="Coto"></p>
  <p>Teléfono: <input type="text" name="Telefono" maxlength="10"></p>
  <p>Celular: <input type="text" name="Celular" maxlength="10"></p>
  <p>Sangre: <input type="text" name="Sangre" maxlength="3"></p>
  <p>Membresia: <select name="Membresia"> 
                  <option value="Propietario">Propietario</option>
                  <option value="Rentista">Rentista</option>
                  <option value="Jr">Jr</option>
                  <option value="Familiar">Familiar</option>
                  <option value="Individual">Individual</option>
                </select>
  </p>
  <p>Fecha de Alta: <input type="text" name="FAlta" maxlength="10" placeholder="dd/mm/aaaa"></p>
  <p>Afiliación: <input type="text" name="Afiliacion" maxlength="30" placeholder="Golfistas, tenistas, etc."></p>
  <p>Foto: <input type="file" name="Foto"></p>
  <input type="submit" name="Enviar">
</form>
