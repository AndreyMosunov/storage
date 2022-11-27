<?php
require_once("database.php");

class Save extends Database
{
    function SaveUser($name, $lastname, $email, $teleph_num, $password)
    {
        $this->query("INSERT into User (name, lastname, email, teleph_num, password) VALUES ('" . $name . "', '" . $lastname . "', '" . $email . "', '" . $teleph_num . "', '" . $password . "')");
    }
}
?>