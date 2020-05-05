<?php

    include 'src/db_connect.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    session_start();

    /* // comprobar si esta conectado a la base de datos
    $sql_textos = "SELECT * FROM `users`";
    $result_textos = $conn->query($sql_textos);

    $json = array();
        while($row = $result_textos->fetch_assoc(s)) {
            print_r($row);
    }
    */
    
    if(isset($_POST)) {

        switch ($_POST["routes"]) {
            case 'login':
                include 'src/login.php'; // $login_correo $login_pass
                break;
            case 'registro':
                include 'src/registro.php'; // $dni $pass $correo $nombre $apellido $celular $foto $rol
                break;
			case 'registro_enuso':
                include 'src/registro_enuso.php'; //$dni $id_feria
                break;
            case 'user_data':
                include 'src/user_data.php'; // $correo
                break;
            case 'user_foto':
                include 'src/user_foto.php'; // $correo
                break;
            case 'get_ferias':
                include 'src/get_ferias.php'; // si tiene $id devulve solo uno, si no tiene $id devulve todos los puestos
                break;
            case 'mis_ferias':
                include 'src/mis_ferias.php'; //$dni
                break;
            case 'reservar_puesto':
                include 'src/reservar_puesto.php'; //$dni $id_feria
                break;
            case 'admin':
                if($_POST['admin'] == 'home'){
                    include 'admin/home.php'; //$dni $login_pass
                } else if ($_POST['admin'] == 'my_ferias_check') {
                    include 'admin/my_ferias_check.php'; //$dni $login_pass
                } else if ($_POST['admin'] == 'my_ferias_get') {
                    include 'admin/my_ferias_get.php'; //$dni
                } else if ($_POST['admin'] == 'reservantes_check') {
                    include 'admin/reservantes_check.php'; //$dni
                }
                break;
            default:
                echo json_encode($_POST);
            break;
        }

        //echo json_encode($_POST);
    } else {
       echo '{"error": "no hay peticion POST"}';
    }

//nombre ubicacion puestos_max puestos_disponibles puestos_minimos visibilidad

?>
