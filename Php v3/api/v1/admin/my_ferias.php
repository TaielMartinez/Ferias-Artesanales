<?php

    $login_dni = $_POST["login_dni"];
    $login_pass = $_POST["login_pass"];
    //echo '<script>console.log("apuntes"); console.log("dni: '.$login_dni.' || pass: '.$login_pass.'")</script>';

    if($login_dni == null || $login_pass == null) {
        echo '<script>console.log("dni o pass = NULL"); console.log("dni: '.$login_dni.' || pass: '.$login_pass.'")</script>';
    } else {

        $sql = "SELECT * FROM `ferias_users` WHERE dni = '$login_dni' AND pass = '$login_pass' AND rol = 'admin'";
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);

        if($count == 1) {
            echo include 'my_ferias.html';
        }
    }

?>