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

	public function getToken($token){
		$query = $this->db->query("SELECT token FROM accounts WHERE token = ?", array($token));
		return $query->row();
	}

	public function storeToken($userId, $token)
	{
		// Check if the user already has a token in the database
		$existingToken = $this->db
			->query("SELECT token FROM accounts WHERE username = ?", array($userId))
			->row();

		// If the user already has a token, update it; otherwise, insert a new record
		if ($existingToken) {
			// Update the existing token
			$this->db
				->query("UPDATE accounts SET token = ? WHERE username = ?", array($token, $userId));
		} else {
			// Insert a new record with the provided token
			$this->db
				->query("INSERT INTO accounts (username, token) VALUES (?, ?)", array($userId, $token));
		}
	}

}
