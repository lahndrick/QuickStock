<?php
class AddRemove extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('AddRemove_model');
        $this->load->model('Main_model');
        $this->output->set_header("Access-Control-Allow-Origin: *");
		$this->output->set_header("Access-Control-Allow-Methods: POST");
		$this->output->set_header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }

    public function index()
    {
        $this->load->view("index");
        $this->load->view("sidebar");
    }

    public function addItem()
    {            
        $data = array(
            'id' => $this->input->post('id'),
            'name' => $this->input->post('name'),
            'description' => $this->input->post('description'),
            'value' => $this->input->post('value'),
            'status' => $this->input->post('status'),
            'time' => $this->input->post('time'),
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
        $removeId = $this->input->post("id");

        $result_remove = $this->AddRemove_model->removeItem($removeId);

        if ($result_remove) {
            echo "Item removed successfully";
        } else {
            echo "Failed to remove item";
        }
    }
}
