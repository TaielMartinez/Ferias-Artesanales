<?php

    $correo = $_POST["correo"];

    $sql = "SELECT foto FROM `ferias_users` WHERE correo = '$correo'";
    $result = mysqli_query($conn, $sql);

    while($row = $result->fetch_assoc()) {
        echo json_encode($row);
    }


?>