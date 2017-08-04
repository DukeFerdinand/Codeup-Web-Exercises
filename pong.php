<?php

require 'functions.php';
require_once 'Input.php';
// require 'nav/nav.php';


function pageController(){
	$message = "Pong";

	$count = inputGet('count');
	$hit = inputGet('hit');

	if ($count == null){
		$count = 0;
	}

	if (!empty($_GET)){
		var_dump($hit);
		if ($hit == 'true'){
			$count = up($count);
			echo "<h1>$count</h1>";
			$message = "Pong";
		} else if ($hit == 'false'){
			$count = 0;
			$message = "You Lose!";
		}
	}

	return [
		// "results" => $search,
		"count" => $count,
		"message" => $message

	];
}
	extract(pageController());

?>
<!DOCTYPE html>
<html>
<head>
	<title>Get Requests</title>
<!-- <?php require_once "stylesheets.php" ?> -->
</head>
<body>

<!-- <?php echo "nav.php" ?> -->
	<h1><?= $message ?></h1>
	<form method="GET">
		<input type="hidden" name="count" value="<?= $count + 1?>">
	    
	    
   		<button type="submit" name="hit" value="true"><a href="/php/ping.php?count=<?= $count + 1 ?>&hit=true">Hit</a></button>

	
	    <button type="submit" name="hit" value="false">Miss</button>
	    <button type="submit" name="hit" value="restart">Restart</button>
	</form>
	<h2><?= $count ?></h2>
</body>
</html>