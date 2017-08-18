<?php
require_once '../../db_connect.php';
header('Access-Control-Allow-Origin: *');

$OFFSET = 0;
$LIMIT = 0;

if ($_REQUEST && $_REQUEST['OFFSET']){
	$OFFSET = $_REQUEST['OFFSET'];

}
	if ($_REQUEST['LIMIT']){
		$LIMIT = $_REQUEST['LIMIT'];
	}

$stmt = $dbc->query('SELECT id, name, location,date_established,area_in_acres FROM parks LIMIT '. $LIMIT . ' OFFSET ' . $OFFSET);

$arr = [];
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
	array_push($arr, $row);
}

print(json_encode($arr));
// print(json_encode($_REQUEST));

?>

