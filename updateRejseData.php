<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
include "config.php";

$rname = $_POST['rname'];
$rid = $_POST['rid'];


//$query1=mysqli_real_escape_string($connect,"UPDATE rejse SET rname='".$rname."' WHERE rid=".$rid);
$query1="UPDATE rejse SET rname='".$rname."' WHERE rid=".$rid;
//$query2 = "insert into jsontest values ('','".$query1."' )";


// Perform query
$results = mysqli_query($connect, $query1);
    //echo "Returned rows are: " . mysqli_num_rows($result);
    

echo $result;

?>