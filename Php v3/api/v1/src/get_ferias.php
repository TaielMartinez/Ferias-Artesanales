<?php

    //echo "gola";
    if(isset($_POST["id"])){
        $id = $_POST["id"];
        $sql = "SELECT * FROM `ferias_ferias` WHERE visibilidad = 'publico' AND id = '$id'";
    } else {
        $sql = "SELECT * FROM `ferias_ferias` WHERE visibilidad = 'publico'";
    }
    $json;
    $result = mysqli_query($conn, $sql);
    while($row = $result->fetch_assoc()) {
        //echo json_encode($row);
        //echo ",";
       $json = $json.json_encode($row).',';
    }

    //echo '{"json": '.$json.'}';
    //echo $json;
    $rest = substr($json, 0, -1);
    echo '['.$rest.']';

?>