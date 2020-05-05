<?php

    $login_correo = $_POST["login_correo"];
    $login_pass = $_POST["login_pass"];

    if($login_correo == null || $login_pass == null) {
        echo '{"json": "false", "error": "Ingrese correo y contraseña"}';
    } else {

        $sql = "SELECT * FROM `ferias_users` WHERE correo = '$login_correo' AND pass = '$login_pass'";
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);

        if($count == 1) {
            echo '{"json": "true"}';

        } else {
            echo '{"json": "false", "error": "El usuario no concuerda con la contraseña"}';
        }
    }


?>