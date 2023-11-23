<?php
class AddRemove_model extends CI_model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function addItem($data)
    {
        try {
            $name = $data['name'];
            $quantity = $data['quantity'];
            $description = $data['description'];
            $location = $data['location'];
            
            $sql = "INSERT INTO items (name, quantity, description, location) VALUES (?, ?, ?, ?)";
            $this->db->update()($sql, array($name, $quantity, $description, $location));
            
            if ($this->db->affected_rows() == 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception $e) {
            // Log the database error
            $error_message = 'Database error: ' . $e->getMessage();
            log_message('error', $error_message);
    
            // Return false to indicate failure
            return false;
        }
    }


    public function removeItem($barcode)
    {
        $this->db->where('barcode', $barcode);
        $this->db->delete('items');

        return $this->db->affected_rows() != 0;
    }
}
