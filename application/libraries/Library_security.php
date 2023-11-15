<?php

class Library_security
{
	public function __construct()
	{

	}

	public function authLogin($username,$password)
	{
		$this->load->modal('auth_model');
		$login = $this->auth_model->authLogin($username, $password);

		if(!empty($login)){
			return true;
		} else {
			return false;
		}

	}
}
