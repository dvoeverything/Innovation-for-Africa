<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shopping_cart";

$conn = mysqli_connect($servername , $username, $password, $dbname) or die("Can't connect at the moment");

echo(" Connection Successful");
?>