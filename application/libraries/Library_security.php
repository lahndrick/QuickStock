<?php

class Library_security
{
	private $CI;

	public function __construct() {
		$this->CI =& get_instance();
		$this->CI->load->database();
		$this->CI->load->library('session');
		$this->CI->load->helper('url');
		$this->CI->load->model('auth_model'); // Corrected line
	}

	public function authLogin($username, $password)
	{
		$login = $this->CI->auth_model->authLogin($username, $password); // Corrected line

		if (!empty($login)) {
			return true;
		} else {
			return false;
		}
	}
}
