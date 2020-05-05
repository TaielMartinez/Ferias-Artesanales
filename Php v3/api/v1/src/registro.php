<?php

		//echo 'hola';

		if(isset($_POST["dni"])){
			$dni = $_POST["dni"];
		} else {
			$dni = "NULL";
		}
		if(isset($_POST["pass"])){
			$pass = $_POST["pass"];
		} else {
			$pass = "NULL";
		}
		if(isset($_POST["correo"])){
			$correo = $_POST["correo"];
		} else {
			$correo = "NULL";
		}
		if(isset($_POST["nombre"])){
			$nombre = $_POST["nombre"];
		} else {
			$nombre = "NULL";
		}
		if(isset($_POST["apellido"])){
			$apellido = $_POST["apellido"];
		} else {
			$apellido = "NULL";
		}
		if(isset($_POST["celular"])){
			$celular = $_POST["celular"];
		} else {
			$celular = "NULL";
		}
		if(isset($_POST["foto"])){
			$foto = $_POST["foto"];
		} else {
			$foto = "https://image.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-260nw-1229859850.jpg";
		}
		//if(isset($_POST["rol"])){
		//    $rol = $_POST["rol"];
		//} else {
		$rol = "NULL";
		//}

		$sql_2 = "SELECT * FROM `ferias_users` WHERE dni = '$dni' OR celular = '$celular' OR correo = '$correo'";

		$result_2 = mysqli_query($conn, $sql_2);
		$count_2 = mysqli_num_rows($result_2);

		if($count_2 > 0) {
			while($row = $result_2->fetch_assoc()) {
				if($row["dni"] == $dni){
				echo 'error_dni';
				}
				if($row["celular"] == $celular){
					echo 'error_celular';
				}
				if($row["correo"] == $correo){
					echo 'error_correo';
				}
			}
		} else {
			$sql_a = "INSERT INTO `ferias_users`";
			$sql_b = "(`dni`, `pass`, `correo`, `nombre`, `apellido`, `celular`, `foto`, `rol`)";
			$sql_c = "VALUES";
			$sql_d = "('".$dni."', '".$pass."', '".$correo."', '".$nombre."', '".$apellido."', '".$celular."', '".$foto."', ".$rol.")";
			$sql = $sql_a.$sql_b.$sql_c.$sql_d;
			$result = mysqli_query($conn, $sql);

			echo 'result='.$result;
			
			
			/*if ($conn->query("INSERT INTO `ferias_users` (`dni`, `pass`, `correo`, `nombre`, `apellido`, `celular`, `foto`, `rol`) VALUES ('".$dni."', '".$pass."', '".$correo."', '".$nombre."', '".$apellido."', '".$celular."', '".$foto."', ".$rol.");") === TRUE) {
				echo '{"json": "true", "sql": '.$sql.', "error": '.$conn->error.'}';
			} else {
				echo '{"json": "error", "error": '.$conn->error.'}';
			}*/
		}

		
		
		/*if($result){
			echo '{"json": "true", "sql": '.$sql.'}';
		} else {
			echo '{"json": "false", "error": '.mysqli_errno($conn).'}';
		}*/


?>
