<?php

class auth_model extends CI_Model
{

	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	public function authLogin($username, $password)
	{
		$query = $this->db->query("SELECT * FROM users WHERE username = '$username' AND password = '$password'");
		return $query->result();
	}

}
