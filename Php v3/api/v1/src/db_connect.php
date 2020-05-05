<?php

error_reporting(E_ERROR | E_PARSE);

  //$conn = new mysqli("localhost", "id12559257_root", "ahgugafasiuofshfaksbfskdjnfbiu213412312", "id12559257_ferias"); // server
  $conn = new mysqli("localhost", "u381389111_php", "K9JhD]rS", "u381389111_madriguera"); // server
  
  if ($conn->connect_error) {
    $conn = new mysqli("localhost", "root", "", "ferias");
  }

  if (!$conn) {
    echo 'No pudo conectarse: ' . mysql_error();
  }

?>