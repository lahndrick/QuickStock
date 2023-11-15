<?php

class Auth_model extends CI_Model
{

	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	public function authLogin($username, $password)
	{
		$query = $this->db->query("SELECT * FROM accounts WHERE username = ? AND password_hash = ?", array($username, $password));

		// Check if the query was successful
		if ($query) {
			// Check if there is a row with the provided username and password
			if ($query->num_rows() == 1) {
				return $query->row(); // Return the row as an object
			} else {
				return null; // No matching user found
			}
		} else {
			return false; // Query execution failed
		}
	}

}
