<?php
require_once '../../db_connect.php';
header('Access-Control-Allow-Origin: *');
// $result = $dbc->query('SELECT COUNT(*) FROM parks');
$stmt = $dbc->query('SELECT COUNT(*) FROM parks');
$db_length = $stmt->fetchColumn();
// print_r($stmt);
print_r($db_length);


?>