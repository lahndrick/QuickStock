<?php
class AddRemove extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
		$this->load->helper('url');
        $this->load->model('Main_model');
        $this->load->model('AddRemove_model');
        $this->output->set_header("Access-Control-Allow-Origin: *");
		$this->output->set_header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
		$this->output->set_header("Access-Control-Allow-Headers: Content-Type");
    }

    public function index()
    {
        $this->load->view("index");
        $this->load->view("sidebar");
    }

    public function addItem()
    {            
        $data = array(
            'name' => $this->input->post('name'),
            'quantity' => $this->input->post('quantity'),
            'description' => $this->input->post('description'),
            'location' => $this->input->post('location'),
        );
        
        //return true/false
        $result_add = $this->AddRemove_model->addItem($data);
    
        if ($result_add) {
            echo "Item added successfully";
        } else {
            echo "Failed to add item";
        }
    }
    

    public function removeItem()
    {
        $removeBarcode = $this->input->post("barcode");

        $result_remove = $this->AddRemove_model->removeItem($removeBarcode);

        if ($result_remove) {
            echo "Item removed successfully";
        } else {
            echo "Failed to remove item";
        }
    }
}
