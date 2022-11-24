<?php

session_start();

if (!empty($_REQUEST["firstnumber"]) && ($_REQUEST["operation"]) && ($_REQUEST["secondnumber"])) {
    $_SESSION["Calculate"] = $_REQUEST["firstnumber"] . $_REQUEST["operation"] . $_REQUEST["secondnumber"] . "=" . calculate();
}
if (!empty($_SESSION["Calculate"])) {
    echo "Выполняем арифметическое действие:" . $_SESSION["Calculate"];
}
?>

<html>

<head>
</head>

<body>
    <form method="post">
        Введите первое число:<input type="number" name="firstnumber" required> <br>
        <div>Выберите операцию:<div>
                <select name="operation">
                    <option value=""></option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select> <br>
                Введите второе число:<input type="number" name="secondnumber" required> <br>
                <input type="submit" name="button" value="вычислить" />
    </form>

    <?php

    function calculate()
    {

        $num1 = $_POST['firstnumber'];
        $num2 = $_POST['secondnumber'];

        switch ($_POST['operation']) {
            case "+":
                $result = $num1 + $num2;
                break;
            case "-":
                $result = $num1 - $num2;
                break;
            case "*":
                $result = $num1 * $num2;
                break;
            case "/":
                $result = $num1 / $num2;
                break;
            default:
                echo "invalid operation";
        }
        return $result;
    }
    ?>
</body>

</html>