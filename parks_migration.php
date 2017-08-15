<?php

// require_once 'park_logins.php';
require_once 'db_connect.php';

// $clear = "TRUNCATE parks";
$query = 'INSERT INTO parks (name, location, date_established, area_in_acres) VALUES (?, ?, ?, ?)';
// $dbc->exec($clear);

$statement = "CREATE TABLE IF NOT EXISTS parks (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(128),
    location VARCHAR(128),
    date_established DATE,
    area_in_acres DOUBLE,
    description TEXT,
    PRIMARY KEY (id)
);";

$dbc->exec($statement);

