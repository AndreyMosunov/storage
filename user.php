<?php

$connection = mysqli_connect(
    "localhost",
    "root",
    "",
    "database"
);
if (!$connection) {
    die("Связь не установлена:" . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name']) && ($_POST['lastname']) && ($_POST['email']) && ($_POST['teleph_num']) && ($_POST['password'])) {
        $_name = $_POST['name'];
        $_lastname = $_POST['lastname'];
        $_email = $_POST['email'];
        $_teleph_num = $_POST['teleph_num'];
        $_password = $_POST['password'];
        mysqli_query($connection, "INSERT INTO user (name, lastname, email, teleph_num, password) VALUES ('" . $_name . "', '" . $_lastname . "', '" . $_email . "', '" . $_teleph_num . "', '" . $_password . "')");
        echo "Создать пользователя = " . $_name . $_lastname . $_email . $_teleph_num . $_password;
    }
} else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    if (isset($_GET['id'])) {
        $user_id = $_GET['id'];
        mysqli_query($connection, "DELETE FROM user WHERE id = '$user_id'");
        echo "Удалить пользователя = " . $_id;
    }
} else if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    if (isset($_REQUEST['id']) && ($_REQUEST['name']) && ($_REQUEST['lastname']) && ($_REQUEST['email']) && ($_REQUEST['teleph_num']) && ($_REQUEST['password'])) {
        $user_id = $_REQUEST['id'];
        $_name = $_REQUEST['name'];
        $_lastname = $_REQUEST['lastname'];
        $_email = $_REQUEST['email'];
        $_teleph_num = $_REQUEST['teleph_num'];
        $_password = $_REQUEST['password'];
        mysqli_query($connection, "UPDATE user SET name = '$_name', lastname = '$_lastname', email = '$_email', teleph_num = '$_teleph_num', password = '$_password' WHERE id = '$user_id'");
        echo "Обновить пользователя = " . $_name . $_lastname . $_email . $_teleph_num . $_password;
    }
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET['id'])) {
        $user_id = $_GET['id'];
        $query = mysqli_query($connection, "SELECT * FROM user WHERE id = '$user_id'");
        while ($row = mysqli_fetch_assoc($query)) {
            echo $row['name'];
            echo $row['lastname'];
            echo $row['email'];
            echo $row['teleph_num'];
            echo $row['password'];
        }
    } else {
        $query = mysqli_query($connection, "SELECT * FROM user");
        while ($row = mysqli_fetch_assoc($query)) {
            echo $row['name']; 
            echo $row['lastname'];
            echo $row['email'];
            echo $row['teleph_num'];
            echo $row['password'];
        }
    }
}

?>