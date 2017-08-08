<?php
	require 'StringTransform.php';

	echo var_dump(StringTransform::isLetter('a'));

	echo StringTransform::secondCharCap('phil');

	echo StringTransform::firstLastUpper('okay');
