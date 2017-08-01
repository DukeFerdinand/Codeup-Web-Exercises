<?php 
	function pageController(){
		$favoriteThings = ["Memes", "Pizza", "Sleep", "Games", "Pasta"];

		// for ($i = 0; $i < count($favoriteThings); $i++){
		// 	echo $favoriteThings[$i];
		// }
		
		return ["favoriteThings" => $favoriteThings];
	}

	extract(pageController());
 ?>




 <!DOCTYPE html>
 <html>
 <head>
 	<title>Favorite</title>
 	<style>
 		table tr:nth-child(even){
 			background-color: lightgray;
 		}
 	</style>
 </head>
 <body>
 	<table>
 		<tr>
 			<th>Favorite</th>
 		</tr>
 			<?php foreach ($favoriteThings as $thing) : ?>
				<tr>
					<td><?= $thing ?></td>
				</tr>	
			<?php endforeach ?>
 		
 	</table>
 </body>
 </html>