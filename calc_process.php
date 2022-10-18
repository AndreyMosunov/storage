<?php

     function calculate() {

        $num1=$_POST['firstnumber'];
        $num2=$_POST['secondnumber'];

        switch ($_POST['operation']) {
            case "+":
            $sum=$num1+$num2;
            return $sum;
            break;
            case "-":
            $min=$num1-$num2;
            return $min;
            break;
            case "*":
            $mult=$num1*$num2;
            return $mult;
            break;
            case "/":
            $divi=$num1/$num2;
            return $divi;
            break;
            default:
            echo "invalid operation";
        }
    }
            echo "Результат:".calculate();
?>
            <br> <a href="index.php">Назад</a>

