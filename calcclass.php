<?php
       require_once ("GateKeeper.php");
              
       $GateKeeper = new Gatekeeper ();
       
       $GateKeeper->addOperation ($_REQUEST["firstnumber"], $_REQUEST["operation"], $_REQUEST["secondnumber"], calculate ());
       $calc = $GateKeeper->loadOperation ();

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
            foreach ($calc as $user) { ?>
            <div>
                <span> -> [<?php echo $user ["id"]; ?>]</span>
                <?php echo $user ["operand1"];?>
                <?php echo $user ["operation"];?>
                <?php echo $user ["operand2"];?>
                <?php echo "=".$user ["result"];?>
            </div>
<?php } ?>       

