<?php
class Main_model extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	public function getDashboard()
	{
		$query = $this->db->query("SELECT * FROM Items");
		return $query->result();
	}
}
