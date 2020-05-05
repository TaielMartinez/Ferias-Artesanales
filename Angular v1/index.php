<?php

    include 'src/db_connect.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    session_start();

    /* // comprobar si esta conectado a la base de datos
    $sql_textos = "SELECT * FROM `users`";
    $result_textos = $conn->query($sql_textos);

    $json = array();
        while($row = $result_textos->fetch_assoc()) {
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
            case 'user_data':
                include 'src/user_data.php'; // $correo
                break;
            case 'user_foto':
                include 'src/user_foto.php'; // $correo
                break;
        }

        
    } else {
       echo '{"error": "no hay peticion POST"}';
    }


?>