<?php
require_once("database.php");

class Load2 extends Database
{
    function LoadUsers2($name, $lastname, $email, $teleph_num, $password)
    {
        $query = $this->connection("SELECT * from User");
        $User = [];
        while ($row = $this->fetch($query)) {
            $User[] = $row;
        }
    }
}
?>