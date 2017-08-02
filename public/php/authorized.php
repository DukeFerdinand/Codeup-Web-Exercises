<?php
	session_start();
	$sessionId = session_id();
	var_dump($sessionId);
	
	if (!isset($_SESSION['currentUser'])){
		header('Location: /php/login.php');
		die();
	}


function page(){


	function logout(){
	    session_unset();
	    session_regenerate_id(true); 
	    session_destroy();
	    session_start();
}

	if(!empty($_GET['logout'])) {
    logout();
    header("Location: /php/login.php");
    die();
}

	var_dump($_SESSION);

	return ["user" => $_SESSION['currentUser']];
	var_dump($_GET);
}

extract(page());


?>



<!DOCTYPE html>
<html>
<head>
	<title>Welcome User</title>
</head>
<body>
	<h1>Welcome, <?= $user ?>!</h1>

	<form method="GET">
		<button type="submit" name="logout" value="true">Logout</button>
	</form>
</body>
</html>