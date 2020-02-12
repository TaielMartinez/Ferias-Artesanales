<?php

    if(isset($_POST["dni"])){
        $dni = $_POST["dni"];
    } else {
        $dni = "NULL";
    }
    if(isset($_POST["pass"])){
        $pass = $_POST["pass"];
    } else {
        $pass = "NULL";
    }
    if(isset($_POST["correo"])){
        $correo = $_POST["correo"];
    } else {
        $correo = "NULL";
    }
    if(isset($_POST["nombre"])){
        $nombre = $_POST["nombre"];
    } else {
        $nombre = "NULL";
    }
    if(isset($_POST["apellido"])){
        $apellido = $_POST["apellido"];
    } else {
        $apellido = "NULL";
    }
    if(isset($_POST["celular"])){
        $celular = $_POST["celular"];
    } else {
        $celular = "NULL";
    }
    if(isset($_POST["foto"])){
        $foto = $_POST["foto"];
    } else {
        $foto = "NULL";
    }
    if(isset($_POST["rol"])){
        $rol = $_POST["rol"];
    } else {
        $rol = "NULL";
    }

    $sql_datos = "('".$dni."', '".$pass."', '".$correo."', '".$nombre."', '".$apellido."', '".$celular."', '".$foto."', ".$rol.")";
    $sql = "INSERT INTO `ferias_users` (`dni`, `pass`, `correo`, `nombre`, `apellido`, `celular`, `foto`, `rol`) VALUES ".$sql_datos;
    $result = mysqli_query($conn, $sql);




?>