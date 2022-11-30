<?php
require_once("database.php");
class Update extends Database
{
    function UpdateUser($name, $lastname, $email, $teleph_num, $password)
    {
        $this->connection("UPDATE User SET WHERE name='" . $name . "', lastname='" . $lastname . "', email='" . $email . "', teleph_num='" . $teleph_num . "', password='" . $password . "')");
    }
}
?>