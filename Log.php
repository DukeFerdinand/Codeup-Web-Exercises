<?php

class Log
{
	public $fileName;
	public $message;
	public $type;
	public $handle;

    public function __construct($prefix="log")
    {
    	$this->fileName = $prefix . "-" . date("Y-m-d") . ".log";
    	$file = $this->fileName;
    	$this->handle = open($file);

    	echo "File is open!" . PHP_EOL;
    }

	public function info($message, $fileName)
	{
		$this->logMessage( $message, $fileName, 'INFO');
	}

	public function error($message, $fileName)
	{
		$this->logMessage($message, $fileName, 'ERROR');
	}

	public  function logMessage($message, $fileName, $logLevel)
    {   
        $message = date("h:i:s ") . "[$logLevel] ". $message . PHP_EOL;
        echo "Writing..." . PHP_EOL;
        write($fileName, $message);
        echo "Done writing!" . PHP_EOL;
    }

    public function __destruct(){
    	close($this->handle);
    	echo "All done!";
    }

}


