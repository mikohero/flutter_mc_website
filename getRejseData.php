<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


include "config.php";
$query1="SELECT * FROM rejse";

// Perform query
if ($result = mysqli_query($connect, "SELECT * FROM rejse")) {
    //echo "Returned rows are: " . mysqli_num_rows($result);
    
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) { 
        //echo $row["rid"];
         //echo $row["rname"];
         $rows[] = $row;
        }
    
  }

echo json_encode($rows);
?>