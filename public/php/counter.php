<?php

$counter = 0;
function pageController($counter){

	$counter = isset($_GET['count']) ? $_GET['count']++ : '0';

	if (isset($_GET["inc"])){
		if ($_GET["inc"] == 'up') {
			$counter = $counter += 1;
		} else {
			$counter = $counter -= 1;
		}
	}

	return [
		// "results" => $search,
		"count" => $counter

	];
}
	extract(pageController($counter));

?>

<!DOCTYPE html>
<html>
<head>
	<title>Get Requests</title>
</head>
<body>
	<form method="GET">
		<input type="hidden" name="count" value="<?= $count ?>">
	    

<!-- 	    <button type="submit" name="up" value="1">Up</button>
	    <button type="submit" name="down" value="-1">Down</button> -->
	    <select name="inc">
	    	<option value="up">Up</option>
	    	<option value="down">Down</option>
	    </select>
	    <button type="submit">Go</button>
	</form>
	<!-- <h2><?= $results ?></h2> -->
	<h2><?= $count ?></h2>
</body>
</html>