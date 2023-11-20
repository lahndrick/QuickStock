<?php
class AddRemove extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('AddRemove_model');
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
    
        $result_add = $this->AddRemove_model->addItem($data);
    
        // Check if the item was added successfully
        if ($result_add) {
            echo "Item added successfully";
        } else {
            echo "Failed to add item";
        }
    }
    

    public function removeItem()
    {
        //TODO: this shit is not even started
        $item_name_to_remove = 'Item Name';

        $result_remove = $this->AddRemove_model->removeItem($item_name_to_remove); // Adjust the model name

        if ($result_remove) {
            echo "Item removed successfully";
        } else {
            echo "Failed to remove item";
        }
    }
}
