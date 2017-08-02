<?php

	session_start();
	$sessionId = session_id();
	
	if (!empty($_SESSION['currentUser'])){
		header('Location: /php/authorized.php');
	}



$login = "";
function page(){
	$user = isset($_POST['user']) ? $_POST['user'] : '';

	$pass = isset($_POST['pass']) ? $_POST['pass'] : '';

	if ($user == 'guest' && $pass = 'pass'){
		var_dump($sessionId);
		$_SESSION['currentUser'] = $_POST['user'];
		header('Location: /php/authorized.php');
		die();
	} else if (count($_POST) < 2){
		$login = "";
	} else {
		// 
		$login = 'Either username or password was incorrect!';
	}

	// return $sessionId;
}

page();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<body>
	<h1>Please Login</h1>
	<!-- <h3><?= $login ?></h3> -->
	<form method="POST">
		
		<label for="username">Username
			<input type="text" name="user" placeholder="Username">
		</label>
		<label>Password
			<input type="password" name="pass" placeholder="Password">
		</label>
		<button type="submit">Login</button>

	</form>
</body>
</html>