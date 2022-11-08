<?php            
       
    class GateKeeper {

            private $connection;

            function __construct() {
            $this->connection = mysqli_connect("localhost", "root", "", "training base2");                
            }

            function addOperation ($firstnumber, $operation, $secondnumber) {
            mysqli_query ($this->connection, "INSERT into calc (operand1, operation, operand2, result) VALUES ('".$firstnumber."', '".$operation."', '".$secondnumber."','".calculate ()."')");
            }
     
            function loadOperation () {
            $query = mysqli_query ($this->connection, "SELECT * from calc");
     
            $calc = [];
            while ($row = mysqli_fetch_assoc ($query)) {
            $calc[] = $row;
            }
     
            return $calc;
            }           
    }
?>