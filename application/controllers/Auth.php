<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Auth extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('Main_model');
		$this->load->model('Auth_model');
		$this->load->library('Library_security');
		$this->output->set_header("Access-Control-Allow-Origin: *");
		$this->output->set_header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
		$this->output->set_header("Access-Control-Allow-Headers: Content-Type, Authorization");
	}

	public function index()
	{
		$this->load->view('index');
		$this->load->view('sidebar');
	}

	public function authLogin()
	{
		try {
			if (!empty($_POST)) {
				$username = $_POST['username'];
				$password = $_POST['password'];

				$login = $this->library_security->authLogin($username, $password);

				if ($login) {
					$token = $this->generateToken($username);
					$response = ['status' => 'success', 'message' => 'Login success', 'data' => $token];
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

	public function checkToken()
	{

		// Allow requests from your React application's domain
		header('Access-Control-Allow-Origin: http://hawk.qsnz.net:3000');
		header('Access-Control-Allow-Methods: POST');
		header('Access-Control-Allow-Headers: Content-Type');

		if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
			// Respond to preflight requests
			http_response_code(200);
			exit;
		}

		if (!empty($_POST['userToken'])) {
			$tokenFromClient = $_POST['userToken'];
			$tokenValid = $this->library_security->checkToken($tokenFromClient);
		} else {
			$result = ['success' => false, 'message' => 'Token is not present.', 'value' => false];
			$this->output
				->set_content_type('application/json')
				->set_status_header(400)
				->set_output(json_encode($result));
			return false;
		}

		// Check if userToken is present (token verification scenario)
		if ($tokenValid) {
			$result = ['success' => true, 'message' => 'Token is valid.', 'value' => true, 'data' => $_POST['userToken']];
			$status_code = 200;
		} elseif (isset($_POST['username']) && isset($_POST['password'])) {
			// Check for username and password (login scenario)
			// Perform your authentication logic here
			$result = ['success' => true, 'message' => 'Login successful.', 'value' => true];
			$status_code = 200;
		} else {
			// Token is not valid or not present
			$result = ['success' => false, 'message' => 'Token is not valid or not present.', 'value' => false];
			$status_code = 401; // Unauthorized
		}

		// Set HTTP headers and send the JSON response
		$this->output
			->set_content_type('application/json')
			->set_status_header($status_code)
			->set_output(json_encode($result));
	}

	public function generateToken($userId)
	{
		try {
			$newToken = $this->generateRandomToken();
			$this->Auth_model->storeToken($userId, $newToken);
			return $newToken;
		} catch (Exception $e) {

		}
	}

	private function generateRandomToken()
	{

		return bin2hex(random_bytes(32));
	}

}
