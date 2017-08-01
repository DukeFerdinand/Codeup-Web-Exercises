<?php 


	$adjectivesArr = ["Risky", "Odd", "Deplorable", "The Best", "Competent", "Okay", "Dodgy", "Other", "Shifty", "Slow"];
	$namesArr = ["Bartholomew", "Jebediah", "Mark", "Matthew", "Susan", "Jimmy", "Bill", "Ted", "Fred", "Andrew", "Lorenzo"];

	function numGen($arr){
		$num = rand(0, (count($arr) - 1));
		return $num;
	}
	function namesGen($adjectivesArr, $namesArr){
		$newNames = [];
		for ($i = 0; $i < count($namesArr); $i++){
			$adj = $adjectivesArr[numGen($adjectivesArr)];
			$name = $namesArr[numGen($namesArr)];
			$newName = $adj . " " . $name;
		}
		return $newName;
	}
    $newName = namesGen($adjectivesArr, $namesArr);
 ?>


<!DOCTYPE html>
<html>
<head>
	<title>Server Names</title>
</head>
<body>
	<table>
			<tr>
				<th>
					<h4>Name</h4>
				</th>
				<td><?= $newName ?></td>
			</tr>
	</table>
</body>
</html>