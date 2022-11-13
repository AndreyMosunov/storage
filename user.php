<?php

    $connection = mysqli_connect(
    "localhost", "root", "", "database");
    if (!$connection) {
    die ("Связь не установлена:" . mysqli_connect_error());
    }

    if($_server["REQUEST_METHOD"] == "POST") {
        $name=$_POST['name'];
        $lastname=$_POST['lastname'];
        $email=$_POST['email'];
        $teleph_num=$_POST['teleph_num'];
        $password=$_POST['password'];      
        mysqli_query ($connection, "INSERT into User (name, lastname, email, teleph_num, password) VALUES ('".$name."', '".$lastname."', '".$email."', '".$teleph_num."', '".$password."')");
        echo "Создать пользователя = " . $name . $lastname . $email . $teleph_num . $password;
    }

    else if($_server["REQUEST_METHOD"] == "DELETE") {
        mysqli_query ($connection, "DELETE from User WHERE name='".$name."', lastname='".$lastname."', email='".$email."', teleph_num='".$teleph_num."', password='".$password."')");
        echo "Удалить пользователя = " . $name . $lastname . $email . $teleph_num . $password;
    }

    else if($_server["REQUEST_METHOD"] == "UPDATE") {
        mysqli_query ($connection, "UPDATE User SET WHERE name='".$name."', lastname='".$lastname."', email='".$email."', teleph_num='".$teleph_num."', password='".$password."')");
        echo "Обновить пользователя = " . $name . $lastname . $email . $teleph_num . $password;
    }
    
    else if($_server["REQUEST_METHOD"] == "GET") {
        $query = mysqli_query ($connection, "SELECT * from User");
        $User = [];
        while ($row = mysqli_fetch_assoc ($query)) {
        $User[] = $row;
        }
        echo "Получить данные пользователя = " . $name . $lastname . $email . $teleph_num . $password;
    }

?>
    

    