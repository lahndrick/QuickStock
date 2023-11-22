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
            $this->db->insert("dashboard", $data);

            if ($this->db->affected_rows() > 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception $e) {
            return false;
        }
    }


    public function removeItem($itemId)
    {
        $this->db->where('id', $itemId);
        $this->db->delete('dashboard');

        return $this->db->affected_rows() != 0;
    }
}
