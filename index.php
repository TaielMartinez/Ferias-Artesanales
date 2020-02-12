<?php

    include 'src/db_connect.php';

    $sql_textos = "SELECT * FROM `users`";
    $result_textos = $conn->query($sql_textos);

    while($row = $result_textos->fetch_assoc()) {
        print_r($row);
    }

?>