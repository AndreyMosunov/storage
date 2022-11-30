<?php

class Database
{
    private $connection;
    function __construct()
    {
        $this->connection = mysqli_connect(
            "localhost",
            "root",
            "",
            "database"
        );
    }
    protected function query($sqlString)
    {
        return mysqli_query($this->connection, $sqlString);
    }
    protected function fetch($query)
    {
        return mysqli_fetch_assoc($query);
    }
}
?>