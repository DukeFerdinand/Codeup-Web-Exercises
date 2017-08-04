<?php


class CanOfSoda 
{
	public      $brandName;
	public         $isFull;
	public         $isOpen;
	public $expirationDate;

	public function openSoda()
	{
		if (!$this->isOpen){
			return $this->isOpen = true;
		} else {
			echo "Can is already open";
		}
	}

	public function pourOut($isOpen, $isFull)
	{
		if ($isOpen && $isFull) {
			return $isFull = false;
		} else {
			echo "ERROR: Can must be open and full for you to pour it out";
		}
	}
}
