<?php
        $connection = mysqli_connect(
        "localhost", "root", "", "training base2");
        if (!$connection) {
        die ("Связь не установлена:" . mysqli_connect_error());
        }
  
        ?>
<?php

     function calculate() {

        $num1=$_POST['firstnumber'];
        $num2=$_POST['secondnumber'];

        switch ($_POST['operation']) {
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

        $query = mysqli_query ($connection, "INSERT into calc (operand1, operation, operand2, result) VALUE ('".$_REQUEST["firstnumber"]."'), ('".$_REQUEST["operation"]."'), ('".$_REQUEST["secondnumber"]."'), ('".$_REQUEST["button"]."')");
      
        $calc = [];
        while ($row = mysqli_fetch_assoc ($query)) {
        $calc[] = $row;
        }
        ?>
        
<?php
        foreach ($calc as $user){?>
            <div>
                <span> -> [<?php echo $calc ["id"]; ?>]</span>
                <?php echo $calc ["operand1"];?>
                <?php echo $calc ["operation"];?>
                <?php echo $calc ["operand2"];?>
                <?php echo $calc ["result"];?>
            </div>
<?php}?>




       