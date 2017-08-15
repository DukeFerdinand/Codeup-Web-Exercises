<?php
require_once '../db_connect.php';
header('Access-Control-Allow-Origin: *');
// $db_length = count($dbc->exec('SELECT name FROM parks;'));
$request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$OFFSET = 0;
if ($request == '/add'){
	return $OFFSET = 24;
}



if ($_REQUEST && $_REQUEST['OFFSET']){

	
	$OFFSET = $_REQUEST['OFFSET'];
}

$stmt = $dbc->query('SELECT id, name, location,date_established,area_in_acres  FROM parks LIMIT 4 OFFSET ' . $OFFSET);

$arr = [];
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
	array_push($arr, $row);
}

print(json_encode($arr));

?>

