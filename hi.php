<?php
        $connection = mysqli_connect(
        "localhost", "root", "", "training base2");
        if (!$connection) {
        die ("Связь не установлена:" . mysqli_connect_error());
        }
  
        function calculate() {

        $num1=$_REQUEST['firstnumber'];
        $num2=$_REQUEST['secondnumber'];
        
        switch ($_REQUEST['operation']) {
            case "+":
            $result=$num1+$num2;
            return $result;
            break;
            case "-":
            $result=$num1-$num2;
            return $result;
            break;
            case "*":
            $result=$num1*$num2;
            return $result;
            break;
            case "/":
            $result=$num1/$num2;
            return $result;
            break;
            default:
            echo "invalid operation";
        }
        }
            echo "Результат:".calculate();
        ?>
            <br> <a href="index.php">Назад</a>
 
<?php

        mysqli_query ($connection, "INSERT into calc (operand1, operation, operand2, result) VALUES ('".$_REQUEST["firstnumber"]."', '".$_REQUEST["operation"]."', '".$_REQUEST["secondnumber"]."','".calculate ()."')");
      
        $query = mysqli_query ($connection, "SELECT * from calc");

        $calc = [];
        while ($row = mysqli_fetch_assoc ($query)) {
        $calc[] = $row;
        }
               
        foreach ($calc as $user) { ?>
            <div>
                <span> -> [<?php echo $user ["id"]; ?>]</span>
                <?php echo $user ["operand1"];?>
                <?php echo $user ["operation"];?>
                <?php echo $user ["operand2"];?>
                <?php echo "=".$user ["result"];?>
            </div>
<?php } ?>       
