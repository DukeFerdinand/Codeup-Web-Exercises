<?php

$counter = 0;
$message = "Pong";
function pageController($counter, $message){

	$counter = isset($_GET['count']) ? $_GET['count']++ : '0';

	if (isset($_GET["hit"])){
		if ($_GET["hit"] == 'true') {
			$counter = $counter += 1;
			$message = "Pong";
		} else if ($_GET["hit"] == 'false') {
			$counter = 0;
			$message = "You Lose!";
		} else {
			$counter = 0;
		}
	}

	return [
		// "results" => $search,
		"count" => $counter,
		"message" => $message

	];
}
	extract(pageController($counter, $message));

?>

<!DOCTYPE html>
<html>
<head>
	<title>Get Requests</title>
</head>
<body>
	<h1><?= $message ?></h1>
	<form method="GET">
		<input type="hidden" name="count" value="<?= $count ?>">
	    
	    
    	<button type="submit" name="hit" value="true"><a href="/php/ping.php?count=<?= $count ?>&hit=true">Hit</a></button>
	
	    <button type="submit" name="hit" value="false">Miss</button>
	    <button type="submit" name="hit" value="restart">Restart</button>
	</form>
	<h2><?= $count ?></h2>
</body>
</html>