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
    if (isset($_POST['name']) && ($_POST['email']) && ($_POST['teleph_num']) && ($_POST['password'])) {
        $_name = $_POST['name'];
        $_email = $_POST['email'];
        $_teleph_num = $_POST['teleph_num'];
        $_password = $_POST['password'];
        mysqli_query($connection, "INSERT INTO users (name, email, teleph_num, password) VALUES ('" . $_name . "', '" . $_email . "', '" . $_teleph_num . "', '" . $_password . "')");
        echo "Создать пользователя = " . $_name . $_email . $_teleph_num . $_password;
    }
} else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    if (isset($_GET['id'])) {
        $user_id = $_GET['id'];
        mysqli_query($connection, "DELETE FROM users WHERE id = '$user_id'");
        echo "Удалить пользователя = " . $_id;
    }
} else if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    if (isset($_REQUEST['id']) && ($_REQUEST['name']) && ($_REQUEST['email']) && ($_REQUEST['teleph_num']) && ($_REQUEST['password'])) {
        $user_id = $_REQUEST['id'];
        $_name = $_REQUEST['name'];
        $_email = $_REQUEST['email'];
        $_teleph_num = $_REQUEST['teleph_num'];
        $_password = $_REQUEST['password'];
        mysqli_query($connection, "UPDATE users SET name = '$_name', email = '$_email', teleph_num = '$_teleph_num', password = '$_password' WHERE id = '$user_id'");
        echo "Обновить пользователя = " . $_name . $_email . $_teleph_num . $_password;
    }
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET['id'])) {
        $user_id = $_GET['id'];
        $query = mysqli_query($connection, "SELECT * FROM users WHERE id = '$user_id'");
        while ($row[] = mysqli_fetch_assoc($query)) {
            $users = $row;
        }
        echo (json_encode($users));
    }
} else {
    $query = mysqli_query($connection, "SELECT * FROM user");
    while ($row[] = mysqli_fetch_assoc($query)) {
        $users = $row;
    }    
    echo (json_encode($users));

}



?>