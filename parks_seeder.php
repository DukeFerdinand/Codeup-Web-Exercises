<?php

require_once 'db_connect.php';

$dbc->exec("TRUNCATE parks");
// get the contents of the CSV as a string
$contents = file_get_contents('national_parks.csv');
// get an array of all the rows
$parks = explode("\n", trim($contents));
// pull off the heading
array_shift($parks);
// trim each 
$parks = array_map('trim', $parks);

$statement = $dbc->prepare("INSERT INTO parks (name, location, date_established, area_in_acres) VALUES (?, ?, ?, ?)");

foreach($parks as $park) {
    $park = explode(",", $park);
    $statement->execute(array("{$park[0]}", "{$park[1]}", "{$park[2]}", "{$park[3]}"));
}
echo "success!\n";