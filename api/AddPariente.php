<?php
	require("dbConfig.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
<?php
	$idsocio = $_POST['IdSocio'];
	$nombre = $_POST['Nombre'];
	$apellidop = $_POST['ApellidoP'];
	$apellidom = $_POST['ApellidoM'];
  	$parentesco = $_POST['Parentesco'];
	$fnacimiento = $_POST['FNacimiento'];
	$domicilio = $_POST['Domicilio'];
	$manzana = $_POST['Manzana'];
	$lote = $_POST['Lote'];
	$coto = $_POST['Coto'];
	$telefono = $_POST['Telefono'];
	$celular = $_POST['Celular'];
	$correo = $_POST['Correo'];
	$membresia = $_POST['Membresia'];
	$tipomembresia = $_POST['TipoMembresia'];
	$sangre = $_POST['Sangre'];
	$falta = $_POST['FAlta'];
	$afiliacion = implode(', ', $_POST['Afiliacion']);
	$conexion =  mysql_connect($serverAddress, $user, $passwd);
    mysql_select_db($dbName);
	mysql_query ("SET NAMES 'utf8'");
	mysql_query("INSERT INTO socios (IdPariente, Nombre, ApellidoP, ApellidoM, Parentesco, FNacimiento, Domicilio, Manzana, Lote, Coto, Telefono, Celular, Correo, Membresia, TipoMembresia, Sangre, FAlta, Afiliacion) 
	VALUES ('$idsocio', '$nombre', '$apellidop', '$apellidom', '$parentesco', '$fnacimiento', '$domicilio', '$manzana', '$lote', '$coto', '$telefono', '$celular', '$correo', '$membresia', '$tipomembresia', '$sangre', '$falta', '$afiliacion')");
	$id= mysql_insert_id();
	mkdir ("socios/".$id);
	$rutaServidor = "socios/".$id;
	$rutaTemporal = $_FILES["Foto"]["tmp_name"];
	$nombreImagen = $_FILES["Foto"]["name"];
	$foto = $rutaServidor.'/'.$nombreImagen;
	move_uploaded_file($rutaTemporal, $foto);
	mysql_query("UPDATE socios SET Foto='$foto' WHERE IdSocio='$id'");
  
	echo "<script type=text/javascript>window.location.href=\"http://localhost/clubimperial/index.php\";</script>";
?>
</html>
