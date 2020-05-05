<?php

    //echo "gola";
    $login_dni = $_POST["login_dni"];
    if(isset($_POST["id"])){
        $id = $_POST["id"];
        $sql = "SELECT * FROM `ferias_ferias` WHERE ferias_ferias.admin LIKE '%$login_dni%' AND id = '$id'";

        $json;
        $data;
        $result = mysqli_query($conn, $sql);
        while($row = $result->fetch_assoc()) {
            $json = $json.json_encode($row).',';
            $data = $row;
        }

        $rest = substr($json, 0, -1);
        $json = '{"info" : ['.$rest.'],';
        $res = explode( '-|-', $data['reservante']);
        $rest_2;

        for ($i = 1; $i <= count($res); $i++) {
            $a = $res[$i];
            if($a != ""){
                //echo $a;
                $sql_2 = "SELECT * FROM `ferias_users` WHERE dni = '$a'";
                $result_2 = mysqli_query($conn, $sql_2);
                while($row = $result_2->fetch_assoc()) {
                    //print_r($row);
                    $rest_2 = $rest_2.json_encode($row).',';
                }
            }
        }
        $rest_2 = substr($rest_2, 0, -1);
        $json_2 = '"reservantes" : ['.$rest_2.']}';

        //$json_2 = $res[1];
        echo $json.$json_2;

    } else {
        $sql = "SELECT * FROM `ferias_ferias` WHERE ferias_ferias.admin LIKE '%$login_dni%'";

        $json;
        $result = mysqli_query($conn, $sql);
        while($row = $result->fetch_assoc()) {
            $json = $json.json_encode($row).',';
        }

        $rest = substr($json, 0, -1);
        echo '['.$rest.']';
    }

?>
