<?php

    //echo "gola";
    if(isset($_POST["dni"])){
        $dni = $_POST["dni"];
        $sql = "SELECT * FROM `ferias_ferias` WHERE ferias_ferias.reservante LIKE '%$dni%'";

        $json;
        $result = mysqli_query($conn, $sql);
        while($row = $result->fetch_assoc()) {
            //echo json_encode($row);
            $json = $json.json_encode($row).',';
        }

        $rest = substr($json, 0, -1);
        echo '['.$rest.']';

    } else {
        echo "{'error': 'no hay dni'}";
    }

?>
