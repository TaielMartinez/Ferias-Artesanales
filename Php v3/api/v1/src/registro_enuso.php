<?php

$correo = $_POST["correo"];
$dni = $_POST["dni"];
$celular = $_POST["celular"];


	$sql = "SELECT * FROM `ferias_users` WHERE dni = '$dni' OR celular = '$celular' OR correo = '$correo'";

	$result = mysqli_query($conn, $sql);
	$count = mysqli_num_rows($result);

	if($count > 0) {
		while($row = $result->fetch_assoc()) {
			if($row["dni"] == $dni){
			echo '{"json": "false", "error": "dni"}';
			}
			if($row["celular"] == $celular){
				echo '{"json": "false", "error": "celular"}';
			}
			if($row["correo"] == $correo){
				echo '{"json": "false", "error": "correo"}';
			}
		}
	} else {
		echo '{"json": "true"}';
	}
 


?>
