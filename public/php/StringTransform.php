<?php

/**
* Transforms strings using various methods
*/
class StringTransform
{
	public static function isLetter($char){
		return ctype_alpha($char);
	}

	public static function secondCharCap($string) {
		if (!is_numeric($string)){
			$string[1] = strtoupper($string[1]);
			return $string . PHP_EOL;
		}
		return "ERROR: Please enter string, not number\n";
	}

	public static function firstLastUpper($string){
		if (!is_numeric($string)){
			$arr = str_split($string);

			$arr[0] = strtoupper($arr[0]);
			$arr[count($arr) - 1] = strtoupper($arr[count($arr) - 1]);

			$string = implode('', $arr);
			return $string . PHP_EOL;
		}
		return "ERROR: string expected" . PHP_EOL;
	}
}


