<?php
require_once "../../functions.php";
require_once "../../Auth.php";
require_once "../../Input.php";
require_once "../../Log.php";

	session_start();
	$sessionId = session_id();
	
	// if (!empty($_SESSION['currentUser'])){
	// 	header('Location: /php/authorized.php');
	// }

	function open($fileName)
	{
		$handle = fopen($fileName, 'a');
		return $handle;
		
	}
	function write($fileName, $message)
	{
		fwrite($fileName, $message);
	}

	function close($fileName)
	{
		fclose($fileName);
	}

$login = "";
function page(){
	// $username = isset($_POST['user']) ? $_POST['user'] : '';

	// $pass = isset($_POST['pass']) ? $_POST['pass'] : '';

	if (Input::has('user') && Input::has('pass')){
		Auth::attempt(Input::get('user'), Input::get('pass'));
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