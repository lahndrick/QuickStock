<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Auth extends CI_Controller
{

	public function __construct() {
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('Main_model');
		$this->load->model('Auth_model');
		$this->load->library('Library_security');
		$allowed_origin = '*';
		$this->output->set_header("Access-Control-Allow-Origin: $allowed_origin");
	}

	public function index() {
		$this->load->view('index');
		$this->load->view('sidebar');
	}

	public function authLogin(){
		if(!empty($_POST)){
			$username = $_POST['username'];
			$password = $_POST['password'];

			$login = $this->library_security->authLogin($username, $password);

			echo json_encode($login);
		} else {
			echo json_encode('Invalid use of API');
		}




	}

}
