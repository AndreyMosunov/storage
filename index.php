<html>
    <head>
        <title>Калькулятор</title>
    <head>
        <body>
            <form action="calc_process.php"; method="post">
                Введите первое число:<input type="number" name="firstnumber" required> <br></br>
                <div>Выберите операцию:<div>
                <select name = "operation">
                    <option value=""></option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select> <br></br>
                Введите второе число:<input type="number" name="secondnumber" required> <br></br>
                <input type="submit" name="button" value="вычислить"/>         
            </form>
        </body>
</html>