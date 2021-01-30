<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


include "config.php";

//$rid = $_POST['rid'];
//$query1="SELECT * FROM marks where rid=".$rid;
$s = "SELECT * FROM marks where rid=".$_POST['rid'];
//$query1=mysqli_real_escape_string($connect,$s);
//$query2 = "insert into jsontest values ('','".$query1."' )";
$result = mysqli_query($connect, $s);

$rows = array();
while ($row = mysqli_fetch_assoc($result)) { 
    //echo $row["rid"];
     //echo $row["rname"];
     $rows[] = $row;
    }

echo json_encode($rows);

?>