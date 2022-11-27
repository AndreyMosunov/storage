<?php
require_once("database.php");

class Load1 extends Database
{
    function LoadUser($id)
    {
        $this->connection("SELECT * from User WHERE id= '" . $id . "')");
    }
}
?>