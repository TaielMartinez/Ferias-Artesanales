<?php

    $login_dni = $_POST["login_dni"];
    $login_pass = $_POST["login_pass"];
    //echo '<script>console.log("apuntes"); console.log("dni: '.$login_dni.' || pass: '.$login_pass.'")</script>';

    if($login_dni == null || $login_pass == null) {
        //echo '<script>console.log("dni o pass = NULL"); console.log("dni: '.$login_dni.' || pass: '.$login_pass.'")</script>';
    } else {

        $sql = "SELECT * FROM `ferias_users` WHERE dni = '$login_dni' AND pass = '$login_pass' AND rol = 'admin'";
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);

        if($count == 1) {
           
            echo '<a class="rounded btn border bg-light mt-3 ml-3 mx-auto d-block" style="width: 70%;" href="../my_ferias/"><img src="../../src/img/icono feria.png" alt="" class="mx-auto d-block mt-3 mb-3 w-25"><h2 class="text-center mb-3" style="font-size: 5vw">Mis ferias</h2></a>';


        }
    }




?>