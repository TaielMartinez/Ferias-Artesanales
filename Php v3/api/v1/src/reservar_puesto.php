<?php

    //echo "gola";
    $id_feria;
    if(isset($_POST["dni"]) && isset($_POST["id_feria"])){
        $id_feria = $_POST["id_feria"];
        $sql = "SELECT * FROM `ferias_ferias` WHERE id = '$id_feria'";

        $result = mysqli_query($conn, $sql);
        $puestos_disponibles;
        $reservante;
        while($row = $result->fetch_assoc()) {
            $reservante = $row["reservante"]."-|-".$_POST["dni"];
            $puestos_disponibles = $row["puestos_disponibles"] - 1;
        }

        $sql_2 = "UPDATE `ferias_ferias` SET `puestos_disponibles` = '$puestos_disponibles', `reservante` = '$reservante' WHERE `ferias_ferias`.`id` = '$id_feria'";
        $result = mysqli_query($conn, $sql_2);
        echo '{"json": "true"}';
        
    } else {
        echo "{'error': 'no hay dni o id_feria'}";
    }
    
    

?>