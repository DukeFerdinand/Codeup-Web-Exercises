<?php

// $_POST["test"] = "okay";

function inputHas($key){
	return isset($_REQUEST[$key]);
}
// var_dump($_POST);
// echo inputHas("test");

function inputGet($key) {
	if (inputHas($key)){
		return $_REQUEST[$key];
	} else {
		return null;
	}
}

// echo inputGet("test");
function escape($input) {
	$input = strip_tags($input);
	$input = htmlspecialchars($input);
	return $input;
}

function up($val){
	return ($val++);
}
// echo escape("<h1>Hello</h1>");