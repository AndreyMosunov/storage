 <?php
 
     session_start();

     $_SESSION ["Calculate"] = $_REQUEST ["firstnumber"] . $_REQUEST ["operation"] . $_REQUEST ["secondnumber"] . "=" . calculate();
    
     echo "Выполняем арифметическое действие:" . $_SESSION ["Calculate"]
       
 ?>
             
 <?php

     function calculate() {
      
         $num1=$_POST['firstnumber'];
         $num2=$_POST['secondnumber'];
            
         switch ($_POST['operation']) {
             case "+":
             $result=$num1+$num2;
             break;
             case "-":
             $result=$num1-$num2;
             break;
             case "*":
             $result=$num1*$num2;
             break;
             case "/":
             $result=$num1/$num2;
             break;
             default:
             echo "invalid operation";
             }
             return $result;
     }
 ?>
               
               


