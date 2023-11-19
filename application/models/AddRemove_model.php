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
        $this->db->insert("dashboard", $data);

        return $this->db->affected_rows() > 0;
    }

    public function removeItem($item_name)
    {
        $this->db->where('name', $item_name);
        $this->db->delete('dashboard');

        return $this->db->affected_rows() != 0;
    }
}
