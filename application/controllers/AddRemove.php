<?php
class DashboardController extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('AddRemove_item');
        $this->output->set_header("Access-Control-Allow-Origin: *");
		$this->output->set_header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
		$this->output->set_header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }

    public function index()
    {
        $this->load->view("index");
        $this->load->view("sidebar");
    }

    public function addItem()
    {
        // Example data for adding an item
        $item_data = array(
            'name' => 'Item Name',
            // other fields...
        );

        // Adding an item using the model
        $result_add = $this->AddRemove_model->addItem($item_data); // Adjust the model name

        // Check if the item was added successfully
        if ($result_add) {
            echo "Item added successfully";
        } else {
            echo "Failed to add item";
        }
    }

    public function removeItem()
    {
        // Example item name for removal
        $item_name_to_remove = 'Item Name';

        // Removing an item using the model
        $result_remove = $this->AddRemove_model->removeItem($item_name_to_remove); // Adjust the model name

        // Check if the item was removed successfully
        if ($result_remove) {
            echo "Item removed successfully";
        } else {
            echo "Failed to remove item";
        }
    }
}
