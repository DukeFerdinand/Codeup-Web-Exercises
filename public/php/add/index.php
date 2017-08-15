<?php
require_once '../../../db_connect.php';
header('Access-Control-Allow-Origin: *');

// $stmt = $dbc->query('SELECT id, name, location,date_established,area_in_acres  FROM parks LIMIT 4 OFFSET ' . $OFFSET);

$date = $_REQUEST['date_established'];
$date = str_replace('/', '-', $date);
$date = date('Y-m-d', strtotime($date));

$query = 'INSERT INTO parks (name, location, date_established, area_in_acres) VALUES (?, ?, ?, ?)';
$stmt = $dbc->prepare($query);

$stmt->execute(array($_REQUEST['name'], $_REQUEST['location'], $date, $_REQUEST['area_in_acres']));




print_r(json_encode($_REQUEST));

?>