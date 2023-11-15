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
		$this->output->set_header("Access-Control-Allow-Origin: *");
		$this->output->set_header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
		$this->output->set_header("Access-Control-Allow-Headers: Content-Type, Authorization");
	}

	public function index() {
		$this->load->view('index');
		$this->load->view('sidebar');
	}

	public function authLogin(){
		try {
			if (!empty($_POST)) {
				$username = $_POST['username'];
				$password = $_POST['password'];

				$login = $this->library_security->authLogin($username, $password);

				if ($login) {
					$response = ['status' => 'success', 'message' => 'Login success'];
				} else {
					$response = ['status' => 'failed', 'message' => 'Login failed', 'data' => $username . ' ' . $password];

				}
			} else {
				$response = ['status' => 'error', 'message' => 'Invalid use of API'];
			}
		} catch (Exception $e) {
			// Log the exception
			error_log($e->getMessage());
			// Return an appropriate error response
			$response = ['status' => 'error', 'message' => 'Internal Server Error'];
		}

		// Set the appropriate content type and status code
		$this->output
			->set_content_type('application/json')
			->set_status_header(isset($response['status']) && $response['status'] === 'error' ? 500 : 200)
			->set_output(json_encode($response));
	}

}
