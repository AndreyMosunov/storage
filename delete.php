<?php
require_once("database.php");
class Delete extends Database
{
    function DeleteUser($id)
    {
        $this->connection("DELETE from User WHERE id='" . $id . "')");
    }
}
?>