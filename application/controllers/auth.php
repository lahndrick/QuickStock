<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class auth extends CI_Controller
{

	public function __construct() {
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('Main_model');
		$this->load->model('auth_model');
		this->load->library('library_security');
	}

	public function authLogin(){
		$username = $_POST['username'];
		$password = $_POST['password'];

		$login = $this->auth_model->authLogin($username, $password);

		echo json_encode($login);

	}

}
