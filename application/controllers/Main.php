<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('Main_model');
		$allowed_origin = 'http://3.26.71.160:3000';
		$this->output->set_header("Access-Control-Allow-Origin: $allowed_origin");

	}
	public function index() {
		$this->load->view('index');
		$this->load->view('sidebar');
	}

	public function getDashboardData() {

		// Fetch data from the database, replace 'your_model' with your actual model
		$data = $this->Main_model->getDashboard();

		// Allow requests only from your React application's domain


		// Return the data as JSON
		echo json_encode($data);
	}
}
